import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/amenities',
  'Nearby Amenities in Summerlin West, Las Vegas',
  'Interactive map and guide to golf, parks, Downtown Summerlin, healthcare, and schools near Summerlin West homes for sale (ZIP 89135).',
);

export default function AmenitiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
