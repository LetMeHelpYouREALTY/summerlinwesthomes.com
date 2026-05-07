import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/sell-your-home',
  'Sell Your Summerlin Home',
  'Listing strategy for Summerlin West sellers: pricing, presentation, timing, disclosures, and how luxury buyers evaluate condition and HOA context.',
);

export default function SellYourHomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
