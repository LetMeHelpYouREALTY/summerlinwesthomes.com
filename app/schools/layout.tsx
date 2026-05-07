import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/schools',
  'Las Vegas Homes Near Schools | Summerlin West Guide',
  'School zones and options for homes for sale in Summerlin—verify CCSD boundaries while you shop Las Vegas real estate listings.',
);

export default function SchoolsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
