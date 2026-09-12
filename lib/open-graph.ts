import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/business';
import { absoluteMediaUrl } from '@/lib/media-url';
import { getSiteUrl } from '@/lib/site-url';

const siteUrl = getSiteUrl();
const ogAlt = `${BUSINESS.name} - Luxury Real Estate in Las Vegas`;

/**
 * Shared Open Graph fields. Next.js shallow-merges metadata, so any child
 * `openGraph` object must include these or `og:image` / `og:site_name` drop.
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#merging
 */
export const defaultOgImages: NonNullable<
  NonNullable<Metadata['openGraph']>['images']
> = [
  {
    url: absoluteMediaUrl('/images/og-image-summerlin-west-homes.jpg', siteUrl),
    width: 1200,
    height: 630,
    alt: ogAlt,
    type: 'image/jpeg',
  },
  {
    url: absoluteMediaUrl('/images/og-image-summerlin-west-homes.webp', siteUrl),
    width: 1200,
    height: 630,
    alt: ogAlt,
    type: 'image/webp',
  },
];

export const defaultTwitterImages: NonNullable<
  NonNullable<Metadata['twitter']>['images']
> = [
  {
    url: absoluteMediaUrl(
      '/images/twitter-image-summerlin-west-homes.jpg',
      siteUrl,
    ),
    width: 1200,
    height: 630,
    alt: ogAlt,
  },
];

export function openGraphWebsite(overrides: {
  title?: string;
  description?: string;
  url?: string;
} = {}): NonNullable<Metadata['openGraph']> {
  return {
    type: 'website',
    siteName: BUSINESS.name,
    locale: 'en_US',
    images: defaultOgImages,
    ...overrides,
  };
}

export const defaultTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  images: defaultTwitterImages,
};
