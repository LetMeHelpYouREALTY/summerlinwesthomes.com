#!/usr/bin/env node
/**
 * Upload git-backed images in public/images to Cloudflare Images.
 * Primary CDN: imagedelivery.net. Git remains the backup.
 *
 * Required env:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_API_TOKEN  (Account.Cloudflare Images:Edit)
 *
 * Usage: npm run images:upload-cf
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();
const TOKEN = process.env.CLOUDFLARE_API_TOKEN?.trim();
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const OUT_FILE = path.join(process.cwd(), 'lib', 'cloudflare-image-ids.json');

if (!ACCOUNT_ID || !TOKEN) {
  console.error(
    'Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN. Git-backed images in public/images will still deploy on Vercel.',
  );
  process.exit(1);
}

const files = (await readdir(IMAGES_DIR)).filter((name) =>
  /\.(jpe?g|png|webp)$/i.test(name),
);

/** @type {Record<string, string>} */
const ids = {};

for (const file of files) {
  const id = file.replace(/\.(jpe?g|png|webp)$/i, '');
  const bytes = await readFile(path.join(IMAGES_DIR, file));
  const form = new FormData();
  form.set('id', id);
  form.set(
    'file',
    new Blob([bytes], {
      type: file.endsWith('.webp')
        ? 'image/webp'
        : file.endsWith('.png')
          ? 'image/png'
          : 'image/jpeg',
    }),
    file,
  );
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}` },
      body: form,
    },
  );
  const json = await response.json();
  if (!json.success) {
    console.warn(`Skip ${file}:`, json.errors ?? json);
    continue;
  }
  ids[id] = json.result.id;
  console.log(`Uploaded ${file} → ${json.result.filename || json.result.id}`);
}

await writeFile(OUT_FILE, `${JSON.stringify(ids, null, 2)}\n`);
console.log(`Wrote ${OUT_FILE}`);
console.log(
  'Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH in Vercel to your Images account hash, then map IDs in lib/images.ts CLOUDFLARE_IMAGE_IDS.',
);
