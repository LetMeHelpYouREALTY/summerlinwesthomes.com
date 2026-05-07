import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/summerlin-west-market-snapshot',
  'Summerlin West Market Snapshot',
  'Monthly Summerlin West market snapshot with practical guidance for buyers and sellers: inventory, demand, pricing direction, and timing strategy.',
);

export default function SummerlinWestMarketSnapshotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
