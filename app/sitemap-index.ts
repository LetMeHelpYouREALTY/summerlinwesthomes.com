import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';

/** Optional multi-sitemap stub; Next uses `sitemap.ts` for `/sitemap.xml` by default. */
export default function sitemapIndex(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  const currentDate = new Date();

  return [
    {
      url: `${origin}/sitemap.xml`,
      lastModified: currentDate,
    },
  ];
}
