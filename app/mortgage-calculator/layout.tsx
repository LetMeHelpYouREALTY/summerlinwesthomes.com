import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/mortgage-calculator',
  'Mortgage Calculator',
  'Estimate Summerlin West purchase payments: principal & interest framing for luxury price bands. Confirm taxes, HOA, insurance, and MI with your lender.',
);

export default function MortgageCalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
