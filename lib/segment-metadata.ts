import type { Metadata } from 'next';
import { openGraphWebsite } from '@/lib/open-graph';

/** Per-route canonical + OG URL (relative paths resolve with metadataBase). */
export function segmentMetadata(
  path: string,
  segmentTitle: string,
  description: string,
): Metadata {
  return {
    title: segmentTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: openGraphWebsite({
      title: segmentTitle,
      description,
      url: path,
    }),
  };
}
