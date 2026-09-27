import type { Metadata } from 'next';
import HomePageClient from './home-page-client';

export const metadata: Metadata = {
  title: {
    absolute:
      'Summerlin Homes for Sale | Las Vegas Homes & Real Estate Listings',
  },
  description:
    'Summerlin West homes for sale in Las Vegas. Browse MLS listings, explore villages, and get local buyer guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Summerlin Homes for Sale | Las Vegas Homes & Real Estate Listings',
    description:
      'Summerlin West homes for sale in Las Vegas. Browse MLS listings, explore villages, and get local buyer guidance from Dr. Jan Duffy.',
    url: '/',
    type: 'website',
  },
};

export default function Page() {
  return <HomePageClient />;
}
