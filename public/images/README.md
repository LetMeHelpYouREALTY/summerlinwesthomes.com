# Site images for Summerlin West Homes

Git is the backup for every photograph in this directory. Cloudflare R2 is the production store and CDN.

Photographs replace the previous gradient and missing-file placeholders.

## Serving

- **Backup:** files in this folder, committed to git
- **Production:** Cloudflare R2 object keys that match the public path (`images/...`)
- **Local / unset env:** Next.js serves these files from `/images/...`

Set `NEXT_PUBLIC_CLOUDFLARE_R2_URL` to the R2 public origin (an `https://pub-….r2.dev` URL or a dedicated media host). Leave it empty to keep serving the git copies.

Upload or refresh the R2 copies with:

```bash
npx wrangler login
npm run sync:images -- --create-bucket
```

Do not orange-cloud the Vercel site hostname. Only the R2 media host should be proxied by Cloudflare.

## Brand / social

- `hero-summerlin-west-luxury-homes.jpg` — homepage H1 and schema image
- `og-image-summerlin-west-homes.jpg` / `.webp` — Open Graph
- `twitter-image-summerlin-west-homes.jpg` — Twitter card
- `logo-summerlin-west-homes.png` — schema logo

## Dr. Jan Duffy portraits

Unique section portraits live in `dr-duffy/`. Each file is a distinct crop, color grade, canvas, and JPEG encode so Google does not treat them as one duplicate image.

Regenerate with:

```bash
npm run generate:duffy-images
```

- `source-dr-jan-duffy.jpg` — original studio portrait
- `h1-*.jpg` / `h2-*.jpg` / `h3-*.jpg` — heading slots
- `amenities-*.jpg` / `schools-*.jpg` / `service-*.jpg` — card slots
- `header-portrait.jpg` — site header

Do not reuse one file across sections.

- `sections/h1-*.jpg` — page-level H1 heroes
- `sections/h2-*.jpg` — section H2 banners
- `sections/h3-*.jpg` — subsection H3 thumbnails
- `amenities/` — amenity cards
- `schools/` — campus cards
- `transport/` — commute cards
- `lifestyle/` — golf, outdoor, shopping

Images are wired through `lib/section-images.ts`, `lib/media-url.ts`, and `components/media/heading-media.tsx`.
