import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/transportation',
  'Summerlin West Commutes | Las Vegas Corridor Access',
  'Commute context for Las Vegas homes for sale in Summerlin West: highways, corridors, transit, and airport access before you choose a listing.',
);

export default function TransportationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
