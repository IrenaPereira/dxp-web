"""Migrate Squarespace blog posts to local Markdown with downloaded images."""
import json, re, os, html
from datetime import datetime, timezone
from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import html2text

REPO = "/Users/irena/Projects/GitHub/dxp-web"
IMG_ROOT = f"{REPO}/public/blog-images"
MD_ROOT = f"{REPO}/src/content/blog"

# Squarespace urlId -> our markdown slug
SLUGS = {
    "blankosblockparty": "skills-redesign",
    "whyuxfails": "why-does-ux-fail",
    "goldfishslots": "levelling-up-ux-sciplay-goldfish",
    "jackpotparty": "levelling-up-ux-sciplay-jackpot-party",
    "project-copernicus": "project-copernicus",
    "28-fasttravel": "designing-a-fast-travel-system",
    "crafting-skills-copernicus": "crafting-rapid-prototype",
    "inscription": "inscription-interface",
    "cpo-battlescreen": "evolution-of-a-battle-screen",
}

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}

import subprocess
def fetch(url):
    r = subprocess.run(["curl", "-sL", "--fail", "-A", UA["User-Agent"], url],
                       capture_output=True, timeout=120)
    if r.returncode != 0 or len(r.stdout) < 100:
        raise RuntimeError(f"curl failed rc={r.returncode}")
    return r.stdout

def clean_name(url):
    name = url.split("/")[-1].split("?")[0]
    name = re.sub(r"%[0-9A-Fa-f]{2}", "-", name)
    name = re.sub(r"[^A-Za-z0-9.\-_]", "-", name)
    return re.sub(r"-{2,}", "-", name)[:80]

def download(url, slug, seen):
    os.makedirs(f"{IMG_ROOT}/{slug}", exist_ok=True)
    name = clean_name(url)
    if not re.search(r"\.(png|jpe?g|gif|webp)$", name, re.I):
        name += ".jpg"
    if name in seen:
        return f"/blog-images/{slug}/{name}"
    try:
        data = fetch(url + ("" if "?" in url else "?format=1500w"))
        with open(f"{IMG_ROOT}/{slug}/{name}", "wb") as f:
            f.write(data)
        seen[name] = True
        return f"/blog-images/{slug}/{name}"
    except Exception as e:
        print(f"  !! image failed {url[:80]}: {e}")
        return None

def strip_html(s):
    return " ".join(re.sub(r"<[^>]+>", " ", html.unescape(s or "")).split())

def yaml_str(s):
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'

data = json.load(open("/tmp/blog.json"))
conv = html2text.HTML2Text()
conv.body_width = 0
conv.ignore_emphasis = False
conv.single_line_break = False

report = []
for item in data["items"]:
    slug = SLUGS.get(item["urlId"])
    if not slug:
        print(f"SKIP unknown urlId {item['urlId']}")
        continue
    title = " ".join(item["title"].split())
    date = datetime.fromtimestamp(item["publishOn"] / 1000, tz=timezone.utc).strftime("%Y-%m-%d")
    author = (item.get("author") or {}).get("displayName") or "Irena Pereira"
    excerpt = strip_html(item.get("excerpt")) or strip_html(item.get("body"))[:200]
    seen = {}

    soup = BeautifulSoup(item["body"], "html.parser")
    for ns in soup.find_all("noscript"):
        ns.decompose()
    n_imgs = 0
    for img in soup.find_all("img"):
        src = img.get("data-src") or img.get("src") or ""
        if "squarespace-cdn" not in src:
            img.decompose()
            continue
        local = download(src, slug, seen)
        if local:
            img.attrs = {"src": local, "alt": img.get("alt") or title}
            n_imgs += 1
        else:
            img.decompose()
    # unwrap squarespace wrappers that confuse conversion
    md = conv.handle(str(soup))
    md = re.sub(r"^\s*View fullsize\s*$", "", md, flags=re.M)
    md = re.sub(r"\n{3,}", "\n\n", md).strip()
    md = re.sub(r"!\[(.*?)\]\((/blog-images[^)]+)\)", r"![\1](\2)", md)

    # cover image from the post's featured asset
    cover = None
    if item.get("assetUrl"):
        cover = download(item["assetUrl"], slug, seen)

    fm = ["---", f"title: {yaml_str(title)}", f"date: {date}", f"author: {yaml_str(author)}",
          f"excerpt: {yaml_str(excerpt[:300])}"]
    if cover:
        fm += [f"image: {yaml_str(cover)}", f"imageAlt: {yaml_str(title)}"]
    fm.append("---")

    with open(f"{MD_ROOT}/{slug}.md", "w") as f:
        f.write("\n".join(fm) + "\n\n" + md + "\n")
    report.append((slug, date, n_imgs, len(md)))

print(f"{'slug':42} {'date':12} imgs  body-chars")
for r in report:
    print(f"{r[0]:42} {r[1]:12} {r[2]:4}  {r[3]}")
