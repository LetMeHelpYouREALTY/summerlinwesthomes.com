import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/transportation',
  'Transportation & Access',
  'How you get around from Summerlin West: major roads, commute context to the Strip and employment centers, and airport access for Las Vegas residents.',
);

export default function TransportationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
