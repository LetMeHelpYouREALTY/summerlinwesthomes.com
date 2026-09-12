#!/usr/bin/env node
/**
 * Upload git-backed photographs from public/images/ to Cloudflare R2.
 *
 * Usage:
 *   npm run sync:images -- --dry-run
 *   npm run sync:images -- --create-bucket
 *   npm run sync:images
 *
 * Requires Wrangler auth (`npx wrangler login` or CLOUDFLARE_API_TOKEN +
 * CLOUDFLARE_ACCOUNT_ID). Object keys match public paths, e.g.
 * images/hero-summerlin-west-luxury-homes.jpg
 */

import { spawnSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCAL_DIR = path.join(ROOT, 'public', 'images');
const BUCKET = process.env.CLOUDFLARE_R2_BUCKET || 'summerlinwest-homes-media';
const ARGS = new Set(process.argv.slice(2));
const DRY_RUN = ARGS.has('--dry-run');
const CREATE_BUCKET = ARGS.has('--create-bucket');
const ENABLE_PUBLIC_URL = ARGS.has('--enable-public-url') || CREATE_BUCKET;

const CONTENT_TYPES = new Map([
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.png', 'image/png'],
  ['.webp', 'image/webp'],
  ['.gif', 'image/gif'],
  ['.svg', 'image/svg+xml'],
  ['.avif', 'image/avif'],
]);

const SKIP_NAMES = new Set(['readme.md', '.ds_store']);

function walk(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      files.push(...walk(full));
      continue;
    }
    files.push(full);
  }
  return files;
}

function wrangler(args, { allowFailure = false } = {}) {
  const result = spawnSync('npx', ['wrangler', ...args], {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env,
  });
  if (result.status !== 0 && !allowFailure) {
    throw new Error(`wrangler ${args.join(' ')} exited ${result.status}`);
  }
  return result.status ?? 1;
}

function contentTypeFor(filePath) {
  return CONTENT_TYPES.get(path.extname(filePath).toLowerCase());
}

function objectKeyFor(filePath) {
  const relative = path.relative(path.join(ROOT, 'public'), filePath);
  return relative.split(path.sep).join('/');
}

const files = walk(LOCAL_DIR).filter((filePath) => {
  const base = path.basename(filePath).toLowerCase();
  if (SKIP_NAMES.has(base)) {
    return false;
  }
  return Boolean(contentTypeFor(filePath));
});

console.log(
  `Cloudflare R2 sync: ${files.length} image(s) from public/images → ${BUCKET}`,
);

if (DRY_RUN) {
  for (const filePath of files) {
    console.log(`  ${objectKeyFor(filePath)}`);
  }
  console.log('Dry run only. Re-run without --dry-run after wrangler login.');
  process.exit(0);
}

if (CREATE_BUCKET) {
  console.log(`Creating bucket ${BUCKET} (wnam) if it does not exist...`);
  wrangler(['r2', 'bucket', 'create', BUCKET, '--location', 'wnam'], {
    allowFailure: true,
  });
}

if (ENABLE_PUBLIC_URL) {
  console.log(`Enabling public r2.dev URL for ${BUCKET}...`);
  wrangler(['r2', 'bucket', 'dev-url', 'enable', BUCKET, '--force']);
  wrangler(['r2', 'bucket', 'dev-url', 'get', BUCKET], { allowFailure: true });
}

for (const filePath of files) {
  const key = objectKeyFor(filePath);
  const contentType = contentTypeFor(filePath);
  console.log(`Uploading ${key}`);
  wrangler([
    'r2',
    'object',
    'put',
    `${BUCKET}/${key}`,
    '--file',
    filePath,
    '--content-type',
    contentType,
    '--cache-control',
    'public, max-age=31536000, immutable',
    '--remote',
  ]);
}

console.log('Upload complete.');
console.log(
  'Set NEXT_PUBLIC_CLOUDFLARE_R2_URL to the bucket public origin (https://pub-….r2.dev or a custom media host) and redeploy.',
);
