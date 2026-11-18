import { getCollection } from 'astro:content';

/** Prefixes an internal path with the site's base path. */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Published posts, newest first. Drafts are visible only in `astro dev`. */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date, style: 'short' | 'long' = 'long') {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: style,
    ...(style === 'long' ? { year: 'numeric' } : {}),
    timeZone: 'UTC',
  }).format(date);
}

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
