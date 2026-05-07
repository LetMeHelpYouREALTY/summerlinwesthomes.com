import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/villages',
  'Homes for Sale in Las Vegas Summerlin | Village Guide',
  'Summerlin West villages and homes for sale in Las Vegas Summerlin: compare golf, views, schools, and HOA context across communities.',
);

export default function VillagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
