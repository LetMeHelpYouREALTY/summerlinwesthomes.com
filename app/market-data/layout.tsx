import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/market-data',
  'Las Vegas Homes & Summerlin West Market Data',
  'Trends behind homes for sale in Summerlin: inventory, pricing context, days-on-market—pair with Las Vegas listings and lender questions.',
);

export default function MarketDataLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
