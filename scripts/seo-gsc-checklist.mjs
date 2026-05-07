#!/usr/bin/env node
/**
 * Prints canonical URLs for manual Google Search Console → URL Inspection (Live test).
 * Run: npm run verify:seo
 *
 * Reads NEXT_PUBLIC_SITE_URL from the environment if set (e.g. copy from Vercel);
 * otherwise uses the repo default apex for summerlinwesthomes.com.
 */
const raw =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '') ||
  'https://summerlinwesthomes.com';

// Keep aligned with app/sitemap.ts
const paths = [
  '/',
  '/amenities',
  '/buying-guide',
  '/home-valuation',
  '/listings',
  '/market-data',
  '/mortgage-calculator',
  '/properties/search',
  '/schools',
  '/sell-your-home',
  '/summerlin-west-market-snapshot',
  '/summerlin-west-schools-commute-amenities',
  '/summerlin-west-villages-comparison',
  '/transportation',
  '/villages',
];

console.log(`
GSC URL Inspection checklist (paste each into Search Console → URL Inspection → LIVE URL):

For each URL, record:
  - Indexing allowed? (robots/meta)
  - User-declared canonical
  - Google-selected canonical (if shown)
  - Any “duplicate” / “alternate” messaging

Also in GSC → Sitemaps, submit (once):
  ${raw}/sitemap.xml

Smoke-check discovery endpoints:
  ${raw}/robots.txt

`);

for (const p of paths) {
  console.log(`${raw}${p}`);
}

console.log(`
Optional terminal checks (avoid login pages):
  curl -sI "${raw}" | findstr Location
`);
