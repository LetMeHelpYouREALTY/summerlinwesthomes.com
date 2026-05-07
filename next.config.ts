import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    // Host canonicalization is handled at the Vercel project/domain layer.
    // Keeping host redirects in-app can create loops if Vercel host rules differ.
    return [];
  },
};

export default nextConfig;
