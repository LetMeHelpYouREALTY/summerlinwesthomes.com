import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/amenities',
  'Las Vegas Homes Near Summerlin West Amenities',
  'Lifestyle amenities near Summerlin homes for sale—golf, trails, dining, shopping—plan tours around Las Vegas listings that match your routine.',
);

export default function AmenitiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
