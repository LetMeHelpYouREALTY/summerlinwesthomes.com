import type { NextConfig } from 'next';

/* Host must match Vercel primary domain + NEXT_PUBLIC_SITE_URL at build time for static metadata. */
const defaultSite =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '') ||
  'https://summerlinwesthomes.com';

/** One hop: alternate www/apex hostname -> NEXT_PUBLIC_SITE_URL origin (see GSC canonical vs duplicate host). */
function wwwApexHostRedirects(): Array<{
  source: string;
  has: Array<{ type: 'host'; value: string }>;
  destination: string;
  permanent: boolean;
}> {
  let canonical: URL;
  try {
    canonical = new URL(defaultSite);
  } catch {
    return [];
  }

  const host = canonical.hostname.toLowerCase();
  const apex = host.startsWith('www.') ? host.slice(4) : host;
  const wwwHost = `www.${apex}`;

  if (host === apex) {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: wwwHost }],
        destination: `${canonical.origin}/:path*`,
        permanent: true,
      },
    ];
  }

  if (host === wwwHost) {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: apex }],
        destination: `${canonical.origin}/:path*`,
        permanent: true,
      },
    ];
  }

  return [];
}

const nextConfig: NextConfig = {
  async redirects() {
    return wwwApexHostRedirects();
  },
};

export default nextConfig;
