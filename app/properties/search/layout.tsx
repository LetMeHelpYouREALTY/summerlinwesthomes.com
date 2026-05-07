import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/properties/search',
  'Las Vegas Homes for Sale | Summerlin West Property Search',
  'Search homes for sale in Summerlin with Las Vegas real estate listing filters—villages, beds, baths, and features—then book curated tours.',
);

export default function PropertySearchLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
