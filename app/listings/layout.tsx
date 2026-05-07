import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/listings',
  'Homes for Sale',
  'Browse Summerlin West listings and filter by village, price, and features. Connect search results to tours and lender questions with local context.',
);

export default function ListingsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
