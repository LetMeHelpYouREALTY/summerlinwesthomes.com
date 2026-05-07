import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/schools',
  'Schools near Summerlin',
  'School options serving Summerlin West families: public attendance zones, private choices, and how to verify boundaries with CCSD before you offer.',
);

export default function SchoolsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
