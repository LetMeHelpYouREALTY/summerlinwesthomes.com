import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { segmentMetadata } from '@/lib/segment-metadata';

export const metadata: Metadata = segmentMetadata(
  '/mortgage-calculator',
  'Mortgage Calculator | Las Vegas Homes & Summerlin West',
  'Payment scenarios for a home in Vegas for sale: principal, interest, taxes, insurance, and HOA—pair with real estate listings in Las Vegas before you offer.',
);

export default function MortgageCalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
