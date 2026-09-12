import type { MetadataRoute } from 'next';
import { CANONICAL_SITE_URL } from '@/lib/site-url';
import { SERVICES, servicePath } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CANONICAL_SITE_URL;

  const currentDate = new Date();
  const yesterday = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
  const twoDaysAgo = new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000);
  const threeDaysAgo = new Date(
    currentDate.getTime() - 3 * 24 * 60 * 60 * 1000,
  );
  const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Only routes that have a matching app/.../page.tsx (no sitemap-only placeholders).
  return [
    { url: baseUrl, lastModified: currentDate },
    { url: `${baseUrl}/about`, lastModified: currentDate },
    { url: `${baseUrl}/amenities`, lastModified: weekAgo },
    { url: `${baseUrl}/buying-guide`, lastModified: currentDate },
    { url: `${baseUrl}/home-valuation`, lastModified: currentDate },
    { url: `${baseUrl}/listings`, lastModified: yesterday },
    { url: `${baseUrl}/market-data`, lastModified: twoDaysAgo },
    { url: `${baseUrl}/mortgage-calculator`, lastModified: currentDate },
    { url: `${baseUrl}/properties/search`, lastModified: yesterday },
    { url: `${baseUrl}/schools`, lastModified: weekAgo },
    { url: `${baseUrl}/sell-your-home`, lastModified: currentDate },
    { url: `${baseUrl}/services`, lastModified: currentDate },
    { url: `${baseUrl}/sun-city-summerlin`, lastModified: currentDate },
    ...SERVICES.map((service) => ({
      url: `${baseUrl}${servicePath(service.slug)}`,
      lastModified: currentDate,
    })),
    {
      url: `${baseUrl}/summerlin-west-market-snapshot`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/summerlin-west-schools-commute-amenities`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/summerlin-west-villages-comparison`,
      lastModified: currentDate,
    },
    { url: `${baseUrl}/transportation`, lastModified: weekAgo },
    { url: `${baseUrl}/villages`, lastModified: threeDaysAgo },
  ];
}
