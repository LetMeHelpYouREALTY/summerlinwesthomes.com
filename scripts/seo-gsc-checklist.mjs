#!/usr/bin/env node
/**
 * Prints canonical URLs for manual Google Search Console → URL Inspection (Live test).
 * Run: npm run verify:seo
 *
 * Reads NEXT_PUBLIC_SITE_URL from the environment if set (e.g. copy from Vercel);
 * otherwise uses https://www.summerlinwesthomes.com.
 */
function canonicalOrigin(value) {
  const origin = value.replace(/\/+$/, '');
  try {
    const hostname = new URL(origin).hostname;
    if (
      hostname === 'summerlinwesthomes.com' ||
      hostname === 'www.summerlinwesthomes.com'
    ) {
      return 'https://www.summerlinwesthomes.com';
    }
    return origin;
  } catch {
    return 'https://www.summerlinwesthomes.com';
  }
}

const raw = canonicalOrigin(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    'https://www.summerlinwesthomes.com',
);

// Keep aligned with app/sitemap.ts
const paths = [
  '/',
  '/about',
  '/amenities',
  '/buying-guide',
  '/home-valuation',
  '/listings',
  '/market-data',
  '/mortgage-calculator',
  '/properties/search',
  '/schools',
  '/sell-your-home',
  '/services',
  '/office',
  '/sun-city-summerlin',
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
