import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/summerlin-west-villages-comparison',
  'Summerlin Homes for Sale | Villages Comparison Guide',
  'Compare Summerlin West villages and real estate listings in Las Vegas: lifestyle fit, home styles, and amenities before you tour homes for sale in Summerlin.',
);

export default function SummerlinWestVillagesComparisonLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
