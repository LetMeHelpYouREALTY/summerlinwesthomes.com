import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/summerlin-west-schools-commute-amenities',
  'Homes for Sale in Las Vegas Summerlin | Schools, Commute & Amenities',
  'Plan Summerlin West moves around schools, commute corridors, and amenities—then align with Las Vegas real estate listings before you tour.',
);

export default function SummerlinWestSchoolsCommuteAmenitiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
