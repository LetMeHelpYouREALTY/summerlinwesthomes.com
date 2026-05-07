import type { Metadata } from 'next';

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
    openGraph: {
      description,
      url: path,
      type: 'website',
    },
  };
}
