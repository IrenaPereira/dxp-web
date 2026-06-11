# Digital Experiments — website

The [digitalexperiments.com](https://www.digitalexperiments.com) site, rebuilt
on [Astro](https://astro.build) so it can be customized and extended in code and
deployed via git — no Squarespace editor.

## Running it locally

This project uses Node (installed via [nvm](https://github.com/nvm-sh/nvm)).

```sh
nvm use            # or: nvm install --lts
npm install        # first time only
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

## How it's organized

```
src/
  pages/            URL = file path. index.astro → /, work.astro → /work
    blog/
      index.astro      the blog listing
      [...slug].astro  renders each blog post
  layouts/Base.astro   shared <head>, header, footer (wraps every page)
  components/          Header.astro, Footer.astro
  content/blog/        one Markdown file per blog post
  content.config.ts    blog post frontmatter schema
  styles/global.css    brand colors, fonts, shared styles (one place)
public/                static files served as-is (favicon, images, etc.)
```

## Add a blog post

Drop a new Markdown file in `src/content/blog/`. The filename becomes the URL
(`my-post.md` → `/blog/my-post/`). Start with this frontmatter:

```markdown
---
title: "Your post title"
date: 2026-06-11
author: "Irena Pereira"
excerpt: "One or two sentences shown on the blog index and as the meta description."
draft: false            # set true to hide it until ready
---

Write the post body in Markdown here.
```

## Add or edit a page

Create a `.astro` file in `src/pages/` (the path is the URL) and wrap your
content in the shared layout:

```astro
---
import Base from "../layouts/Base.astro";
---
<Base title="My page — Digital Experiments">
  <section class="section"><div class="container">…</div></section>
</Base>
```

## Restyling

All brand colors, fonts, and shared element styles live in
`src/styles/global.css` under `:root`. Change them there to restyle the whole
site at once.

## Deploying

The site builds to plain static files (`dist/`), so any static host works.
The planned setup is **GitHub Actions → DreamHost over SSH**: every push to
`main` builds the site and uploads `dist/` to the web root. (See
`.github/workflows/` once configured.)

> Migration note: a few blog posts contain a `TODO` comment marking where the
> full original body and images still need to be pulled from the live
> Squarespace site. Images have not yet been migrated.
