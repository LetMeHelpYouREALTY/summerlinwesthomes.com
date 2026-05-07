import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/summerlin-west-schools-commute-amenities',
  'Summerlin West Schools, Commute, and Amenities Guide',
  'Neighborhood planning guide for Summerlin West schools, commute patterns, and daily amenities to help buyers compare lifestyle fit before touring homes.',
);

export default function SummerlinWestSchoolsCommuteAmenitiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
