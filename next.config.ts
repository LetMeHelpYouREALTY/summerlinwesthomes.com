import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Avoid tracing from a parent-directory lockfile (breaks `vercel build` lambdas on some setups). */
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'images.cloudflare.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "img-src 'self' data: blob: https: http:",
              "media-src 'self' https:",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    // Host canonicalization is handled at the Vercel project/domain layer.
    // Keeping host redirects in-app can create loops if Vercel host rules differ.
    return [];
  },
};

export default nextConfig;
