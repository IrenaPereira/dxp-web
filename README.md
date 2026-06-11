# Digital Experiments — website (`dxp-web`)

Marketing site for **Digital Experiments — Game UX & Player Research**.
Zero-dependency static site: plain HTML, CSS, and a tiny progressive-enhancement
JS file. No build step, no `npm install`. It runs by opening `index.html` and
deploys to any static host.

## Structure

```
.
├── index.html          # Homepage (hero, services, method, work, founder, CTA)
├── services.html       # Services & pricing (the four-tier ladder)
├── assets/
│   ├── css/styles.css  # Entire design system — all theme tokens live in :root
│   ├── js/main.js      # Mobile nav, reveal-on-scroll, footer year
│   └── img/            # logo.svg, favicon.svg
├── robots.txt
└── sitemap.xml
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy

Any static host works — no build required.

- **GitHub Pages:** repo → Settings → Pages → deploy from this branch, root.
- **Netlify / Vercel / Cloudflare Pages:** point at the repo; build command = none,
  publish directory = `/` (root).

## Customizing (no code knowledge needed)

**Brand colors & fonts** — open `assets/css/styles.css` and edit the tokens at the
very top (`:root { ... }`). Every color and font on the site references these, so
changing them rebrands the whole site. Replace the placeholder palette with the
exact hex values and typefaces from digitalexperiments.com when you have them.

**Booking link** — the "Book a UX teardown" buttons currently open an email to
`irena@unleashedgames.io`. To use a scheduler instead (Calendly, Cal.com, etc.),
search the two HTML files for `Replace BOOKING_URL` / `mailto:irena@unleashedgames.io`
and swap in your scheduling URL.

**Copy** — all text lives directly in `index.html` and `services.html`. Source copy
and pricing come from the strategy docs on the
`claude/website-partnerships-review-*` branch (`WEBSITE_COPY_DRAFTS.md`,
`SERVICE_TIERS_AND_PRICING.md`).

## ⚠️ Before going live — supply real data

A few spots intentionally avoid fabricated proof. Search for `⚠️` in the HTML:

- **Case-study results** (`#work` in `index.html`) — replace the placeholder result
  lines with real or anonymized metrics. Directional is fine; invented is not.
- **Client logos** — the proof strip uses a factual experience line, not a logo
  wall. Only add client logos you have written permission to display.

## Notes

- Fonts (Playfair Display + Inter) load from Google Fonts with a system-font
  fallback, so the site still looks right if that CDN is blocked. The wordmark is
  Playfair Display — "Digital" bold, "Experiments" regular.
- The logomark is the official Digital Experiments rabbit vector
  (`assets/img/logo.svg`). The favicon (`assets/img/favicon.svg`) reuses the same
  paths, reversed in light on the dark brand square for browser tabs.
- Accessible by default: skip link, semantic landmarks, visible focus states,
  keyboard-operable nav, and `prefers-reduced-motion` support.
