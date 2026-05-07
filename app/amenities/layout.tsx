import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/amenities',
  'Summerlin Amenities',
  'Golf courses, pools, trails, parks, dining, shopping, and recreation near Summerlin West and Las Vegas. Plan life around the neighborhoods you target.',
);

export default function AmenitiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
