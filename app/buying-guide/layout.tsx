import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/buying-guide',
  'Home Buying Guide',
  'Steps to buy in Summerlin West: pre-approval, search, inspections, appraisals, and closing—written for Las Vegas buyers and move-up clients.',
);

export default function BuyingGuideLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
