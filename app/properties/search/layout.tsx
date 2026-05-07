import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/properties/search',
  'Property Search',
  'Advanced search for Summerlin West homes for sale—filter villages, beds, baths, and features—then pivot to curated tours when you shorten the field.',
);

export default function PropertySearchLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
