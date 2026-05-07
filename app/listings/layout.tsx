import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/listings',
  'Summerlin Homes for Sale | Real Estate Listings in Las Vegas',
  'Browse homes for sale in Summerlin and Las Vegas MLS listings—filter by village, price, and features, then shortlist tours with local context.',
);

export default function ListingsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
