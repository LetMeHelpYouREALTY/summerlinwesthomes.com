/**
 * Site photos live in git under `public/images/` as the backup.
 * Production serving uses Cloudflare R2 when NEXT_PUBLIC_CLOUDFLARE_R2_URL is set.
 *
 * Keep the Vercel site hostname DNS-only (gray cloud). Only the R2 media
 * host — r2.dev or a dedicated media subdomain — should be Cloudflare-proxied.
 */

export const GIT_MEDIA_PREFIX = '/images';
export const DEFAULT_R2_BUCKET = 'summerlinwest-homes-media';

export type ImageRemotePattern = {
  protocol: 'https';
  hostname: string;
  pathname: string;
};

export function getCloudflareR2BaseUrl(
  env: NodeJS.ProcessEnv = process.env,
): string | undefined {
  const raw = env.NEXT_PUBLIC_CLOUDFLARE_R2_URL?.trim();
  if (!raw) {
    return undefined;
  }

  return raw.replace(/\/+$/, '');
}

/**
 * Resolve a git-backed public path (`/images/...`) to the Cloudflare URL
 * when R2 is configured, otherwise keep the local Next.js static path.
 */
export function mediaUrl(
  path: string,
  env: NodeJS.ProcessEnv = process.env,
): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const base = getCloudflareR2BaseUrl(env);
  if (!base) {
    return normalized;
  }

  return `${base}${normalized}`;
}

/**
 * Absolute URL for JSON-LD, Open Graph, and CSS. Falls back to the site
 * origin when R2 is not configured.
 */
export function absoluteMediaUrl(
  path: string,
  siteUrl: string,
  env: NodeJS.ProcessEnv = process.env,
): string {
  const resolved = mediaUrl(path, env);
  if (resolved.startsWith('https://') || resolved.startsWith('http://')) {
    return resolved;
  }

  return `${siteUrl.replace(/\/+$/, '')}${resolved}`;
}

export function cloudflareImageRemotePatterns(
  env: NodeJS.ProcessEnv = process.env,
): ImageRemotePattern[] {
  const patterns: ImageRemotePattern[] = [
    {
      protocol: 'https',
      hostname: '**.r2.dev',
      pathname: '/**',
    },
  ];

  const base = getCloudflareR2BaseUrl(env);
  if (!base) {
    return patterns;
  }

  try {
    const { hostname, protocol } = new URL(base);
    if (protocol !== 'https:' || !hostname) {
      return patterns;
    }

    const alreadyCovered =
      hostname === 'r2.dev' || hostname.endsWith('.r2.dev');
    if (!alreadyCovered) {
      patterns.push({
        protocol: 'https',
        hostname,
        pathname: '/**',
      });
    }
  } catch {
    return patterns;
  }

  return patterns;
}
