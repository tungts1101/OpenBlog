---
title: Hello, world
description: The first entry, and a quick guide to adding the next one.
pubDate: 2026-11-19
---

This blog is a folder of Markdown files. Every file in `src/content/posts` becomes a page, and its file name becomes the address.

## Adding a post

Create a new file, fill in the details at the top, and write underneath:

```md
---
title: My next post
description: One sentence for the index and for search results.
pubDate: 2026-11-20
draft: true
---

The post starts here.
```

Posts marked `draft: true` show up while you preview locally and stay off the published site. Remove that line when the post is ready.

## What a post can hold

Headings, lists and links all work as you would expect:

- **Bold** and *italic* text
- [Links](https://docs.astro.build) to anywhere
- `inline code` and highlighted blocks

> A quotation sits like this, set a little apart from the text around it.

Code is highlighted for both light and dark readers:

```ts
function greet(name: string) {
  return `Hello, ${name}!`;
}
```

Delete this file when you are ready to write your own first post.
