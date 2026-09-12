/**
 * Canonical origin for metadata, sitemap, and JSON-LD.
 * Production domain is summerlinwesthomes.com. Override with
 * NEXT_PUBLIC_SITE_URL only for preview/staging hosts.
 */
export const CANONICAL_SITE_URL = 'https://summerlinwesthomes.com';

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/+$/, '');
  }
  return CANONICAL_SITE_URL;
}
