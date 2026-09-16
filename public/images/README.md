# Site images: Cloudflare Images + git backup

Hosted Cloudflare Images is the **primary CDN**. Git files in this folder are the **backup** Vercel can still serve.

Do **not** orange-cloud the Vercel production hostname. Deliver media from `imagedelivery.net` so SSL stays on Vercel.

## Account (hosted Images)

- Account hash: `byE6BTe9lNqo21V57n4aPQ`
- Delivery URL: `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant_name>`
- Default variant: `public` (Cloudflare transcodes JPEG to AVIF/WebP from `Accept` headers)

The hash is public (it appears in every image URL). It is baked into `lib/images.ts` as `CLOUDFLARE_IMAGES_ACCOUNT_HASH`.

## Upload git backups to Images

Create an API token with **Account.Cloudflare Images:Edit**, then:

```bash
CLOUDFLARE_API_TOKEN=... npm run images:upload-cf
```

The script:

1. Uploads each heading JPEG with a **custom ID** matching the site image id (`hero-home`, `h3-trail`, …).
2. Falls back to URL import from `https://www.summerlinwesthomes.com/images/...` if the local POST fails.
3. Writes `lib/cloudflare-image-ids.json`. Once that file has IDs, `imageSrc()` serves `imagedelivery.net`. Until then, Next.js uses the git files here.

## Required social files (git backup)

- `og-image-summerlin-west-homes.jpg` (1200x630)
- `twitter-image-summerlin-west-homes.jpg` (1200x630)
