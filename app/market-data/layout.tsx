import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/market-data',
  'Summerlin Market Data',
  'Local market trends for Summerlin West: inventory snapshots, directional price context, days-on-market—supplement MLS data with lender-ready questions.',
);

export default function MarketDataLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
