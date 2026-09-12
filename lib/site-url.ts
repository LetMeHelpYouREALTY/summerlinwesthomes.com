/**
 * Canonical origin for metadata, sitemap, JSON-LD, and Google Business Profile.
 * Production website is https://www.summerlinwesthomes.com
 */
export const CANONICAL_SITE_URL = 'https://www.summerlinwesthomes.com';

const PRODUCTION_HOSTS = new Set([
  'summerlinwesthomes.com',
  'www.summerlinwesthomes.com',
]);

function normalizeOrigin(raw: string): string {
  try {
    const url = new URL(raw);
    if (PRODUCTION_HOSTS.has(url.hostname)) {
      return CANONICAL_SITE_URL;
    }
    return `${url.protocol}//${url.host}`.replace(/\/+$/, '');
  } catch {
    return CANONICAL_SITE_URL;
  }
}

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return normalizeOrigin(raw);
  }
  return CANONICAL_SITE_URL;
}
