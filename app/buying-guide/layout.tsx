import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/buying-guide',
  'Houses for Sale in Summerlin Las Vegas | Buyer Guide',
  'Buy a home in Vegas for sale within Summerlin West: pre-approval, Las Vegas listings search, inspections, appraisals, and closing.',
);

export default function BuyingGuideLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
