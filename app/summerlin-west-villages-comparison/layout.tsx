import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/summerlin-west-villages-comparison',
  'Summerlin West Villages Comparison',
  'Compare Summerlin West villages by lifestyle fit, home style, and nearby amenities to find the best community for your next move.',
);

export default function SummerlinWestVillagesComparisonLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
