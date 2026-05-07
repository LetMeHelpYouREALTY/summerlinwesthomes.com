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

const paths = [
  '/',
  '/amenities',
  '/buying-guide',
  '/home-valuation',
  '/market-data',
  '/transportation',
  '/villages',
  '/properties/search',
];

console.log(`
GSC URL Inspection checklist (paste each into Search Console → URL Inspection → LIVE URL):

For each URL, record:
  - Indexing allowed? (robots/meta)
  - User-declared canonical
  - Google-selected canonical (if shown)
  - Any “duplicate” / “alternate” messaging

`);

for (const p of paths) {
  console.log(`${raw}${p}`);
}

console.log(`
Optional terminal checks (avoid login pages):
  curl -sI "${raw}" | findstr Location
`);
