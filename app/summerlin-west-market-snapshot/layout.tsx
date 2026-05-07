import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/summerlin-west-market-snapshot',
  'Las Vegas Homes for Sale | Summerlin West Market Snapshot',
  'Summerlin West market snapshot for Las Vegas homes: inventory, buyer competition, pricing on homes for sale in Summerlin, and timing with live listings.',
);

export default function SummerlinWestMarketSnapshotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
