# Site images (git backup)

Heading-matched photography lives here as the **git backup**. Cloudflare Images is the primary CDN when `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH` and `CLOUDFLARE_IMAGE_IDS` are set (`lib/images.ts`).

Do **not** orange-cloud the Vercel production hostname. Serve media from `imagedelivery.net` (or a dedicated images subdomain) so SSL stays on Vercel.

## Upload to Cloudflare Images

```bash
CLOUDFLARE_ACCOUNT_ID=... CLOUDFLARE_API_TOKEN=... node scripts/upload-cloudflare-images.mjs
```

Then set `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH` on Vercel and map IDs in `lib/images.ts`.

## Required social files

- `og-image-summerlin-west-homes.jpg` (1200x630)
- `twitter-image-summerlin-west-homes.jpg` (1200x630)
