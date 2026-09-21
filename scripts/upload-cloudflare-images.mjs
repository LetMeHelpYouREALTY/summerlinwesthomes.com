#!/usr/bin/env node
/**
 * Upload git-backed JPEGs in public/images to Cloudflare Images (hosted).
 * Primary CDN: https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/public
 * Git remains the always-on backup.
 *
 * Docs:
 *   https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-url/
 *
 * Required:
 *   CLOUDFLARE_API_TOKEN  (Account → Cloudflare Images → Edit)
 *
 * Optional:
 *   CLOUDFLARE_ACCOUNT_ID  (defaults to this project's Images account)
 *
 * Usage: npm run images:upload-cf
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID?.trim() ||
  '2cc579c1ec9e426ed585e933ebf4753b';
const TOKEN = process.env.CLOUDFLARE_API_TOKEN?.trim();
const HASH =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() ||
  'byE6BTe9lNqo21V57n4aPQ';
const ORIGIN =
  process.env.SITE_ORIGIN?.trim() || 'https://www.summerlinwesthomes.com';
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const OUT_FILE = path.join(process.cwd(), 'lib', 'cloudflare-image-ids.json');

/** SiteImageId → git backup filename (JPEG only; Cloudflare transcodes to AVIF/WebP). */
const UPLOADS = {
  'hero-home': 'hero-home.jpg',
  'hero-about': 'hero-about.jpg',
  'hero-villages': 'hero-villages.jpg',
  'hero-listings': 'hero-listings.jpg',
  'hero-search': 'hero-search.jpg',
  'hero-market': 'hero-market.jpg',
  'hero-valuation': 'hero-valuation.jpg',
  'hero-sell': 'hero-sell.jpg',
  'hero-buying': 'hero-buying.jpg',
  'hero-mortgage': 'hero-mortgage.jpg',
  'hero-schools': 'hero-schools.jpg',
  'hero-amenities': 'hero-amenities.jpg',
  'hero-transportation': 'hero-transportation.jpg',
  'hero-villages-comparison': 'hero-villages-comparison.jpg',
  'hero-schools-commute': 'hero-schools-commute.jpg',
  'section-red-rock': 'section-red-rock.jpg',
  'section-golf': 'section-golf.jpg',
  'section-downtown-summerlin': 'section-downtown-summerlin.jpg',
  'section-luxury-interior': 'section-luxury-interior.jpg',
  'section-new-construction': 'section-new-construction.jpg',
  'h3-downtown-skyline': 'h3-downtown-skyline.jpg',
  'h3-airport': 'h3-airport.jpg',
  'h3-pool-patio': 'h3-pool-patio.jpg',
  'h3-trail': 'h3-trail.jpg',
  'h3-office': 'h3-office.jpg',
  'h3-entry': 'h3-entry.jpg',
  'h3-hospital': 'h3-hospital.jpg',
  'h3-casino': 'h3-casino.jpg',
  'h3-library': 'h3-library.jpg',
  'h3-school': 'h3-school.jpg',
  'h3-beltway': 'h3-beltway.jpg',
  'h3-transit': 'h3-transit.jpg',
  'h3-charleston': 'h3-charleston.jpg',
  'h3-buyer-keys': 'h3-buyer-keys.jpg',
  'h3-kitchen': 'h3-kitchen.jpg',
  'h3-village-street': 'h3-village-street.jpg',
  'h3-closing-table': 'h3-closing-table.jpg',
  'h3-village-park': 'h3-village-park.jpg',
  'h3-showing': 'h3-showing.jpg',
  'h3-staging': 'h3-staging.jpg',
  'h3-sold-home': 'h3-sold-home.jpg',
  'h3-cma-review': 'h3-cma-review.jpg',
  'og-default': 'og-image-summerlin-west-homes.jpg',
};

if (!TOKEN) {
  console.error(
    'Missing CLOUDFLARE_API_TOKEN. Create a token with Account.Cloudflare Images:Edit, then rerun npm run images:upload-cf. Git-backed files in public/images still deploy on Vercel.',
  );
  process.exit(1);
}

const api = (suffix) =>
  `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}${suffix}`;

async function cfForm(suffix, form) {
  const response = await fetch(api(suffix), {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  });
  return { status: response.status, json: await response.json() };
}

function alreadyExists(json) {
  const errors = Array.isArray(json?.errors) ? json.errors : [];
  return errors.some(
    (error) =>
      String(error.code) === '5409' ||
      String(error.code) === '5410' ||
      /already exists/i.test(String(error.message ?? '')),
  );
}

async function imageExists(id) {
  const response = await fetch(api(`/images/v1/${encodeURIComponent(id)}`), {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!response.ok) return false;
  const json = await response.json();
  return Boolean(json?.success && json?.result?.id);
}

async function uploadOne(customId, filename) {
  if (await imageExists(customId)) {
    console.log(`Exists ${customId}`);
    return customId;
  }

  const bytes = await readFile(path.join(IMAGES_DIR, filename));
  const fileForm = new FormData();
  fileForm.set('id', customId);
  fileForm.set('requireSignedURLs', 'false');
  fileForm.set(
    'file',
    new Blob([bytes], { type: 'image/jpeg' }),
    filename,
  );

  let { json } = await cfForm('/images/v1', fileForm);
  if (json?.success) {
    console.log(`Uploaded ${filename} → ${json.result.id}`);
    return json.result.id;
  }
  if (alreadyExists(json)) {
    console.log(`Exists ${customId}`);
    return customId;
  }

  const urlForm = new FormData();
  urlForm.set('id', customId);
  urlForm.set('requireSignedURLs', 'false');
  urlForm.set('url', `${ORIGIN}/images/${filename}`);
  ({ json } = await cfForm('/images/v1', urlForm));
  if (json?.success) {
    console.log(`Imported ${filename} from ${ORIGIN} → ${json.result.id}`);
    return json.result.id;
  }
  if (alreadyExists(json)) {
    console.log(`Exists ${customId}`);
    return customId;
  }

  console.warn(`Skip ${filename}:`, json.errors ?? json);
  return null;
}

/** @type {Record<string, string>} */
const ids = {};
let uploaded = 0;
let skipped = 0;

for (const [customId, filename] of Object.entries(UPLOADS)) {
  const result = await uploadOne(customId, filename);
  if (result) {
    ids[customId] = result;
    uploaded += 1;
  } else {
    skipped += 1;
  }
}

await writeFile(OUT_FILE, `${JSON.stringify(ids, null, 2)}\n`);
console.log(`Wrote ${OUT_FILE} (${uploaded} mapped, ${skipped} skipped)`);
console.log(
  `Delivery example: https://imagedelivery.net/${HASH}/hero-home/public`,
);
console.log(
  'Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH on Vercel if it is not already the account hash baked into lib/images.ts.',
);
