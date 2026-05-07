import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/home-valuation',
  'Home Value & Equity',
  'Request context on Summerlin West home values: what drives price in each village and how upgrades, views, and product type influence buyer demand.',
);

export default function HomeValuationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
