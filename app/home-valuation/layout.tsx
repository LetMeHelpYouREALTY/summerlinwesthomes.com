import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/home-valuation',
  'Las Vegas Homes | Summerlin West Home Value',
  'Summerlin homes for sale pricing context: village-level value drivers, upgrades, views, and how your home compares to active Las Vegas listings.',
);

export default function HomeValuationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
