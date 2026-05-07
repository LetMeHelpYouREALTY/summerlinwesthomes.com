import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/villages',
  'Summerlin Villages',
  'Overview of Summerlin West villages and luxury communities: character, typical product, and how to compare guard-gated golf, view, and family neighborhoods.',
);

export default function VillagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
