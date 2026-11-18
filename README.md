# OpenBlog

A personal blog built with [Astro](https://astro.build) and published on GitHub Pages.

## Writing

Add a Markdown or MDX file to `src/content/posts`:

```md
---
title: My next post
description: One sentence for the index and for search results.
pubDate: 2026-11-20
draft: true
---

The post starts here.
```

Drafts appear in `npm run dev` and are left out of the published site.

## Commands

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Preview at `http://localhost:4321`   |
| `npm run build`   | Build the site into `dist/`          |
| `npm run preview` | Serve the built site locally         |

## Publishing

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. Every push to `main` then builds and deploys the site. The site address and base path come from the repository's Pages settings, so nothing needs changing for a project site, a `<username>.github.io` repository or a custom domain.

The site name and tagline are in `src/consts.ts`.
