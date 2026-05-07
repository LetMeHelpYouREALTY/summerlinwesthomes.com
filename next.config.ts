import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Avoid tracing from a parent-directory lockfile (breaks `vercel build` lambdas on some setups). */
  outputFileTracingRoot: __dirname,
  async redirects() {
    // Host canonicalization is handled at the Vercel project/domain layer.
    // Keeping host redirects in-app can create loops if Vercel host rules differ.
    return [];
  },
};

export default nextConfig;
