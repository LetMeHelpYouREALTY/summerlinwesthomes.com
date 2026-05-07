import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/sell-your-home',
  'Homes for Sale in Las Vegas | List Your Summerlin West Home',
  'Position your listing among Las Vegas real estate listings: Summerlin West pricing, presentation, timing, disclosures, and buyer expectations.',
);

export default function SellYourHomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
