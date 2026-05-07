import type { Metadata } from 'next';
import HomePageClient from './home-page-client';

export const metadata: Metadata = {
  title: {
    absolute: 'Summerlin West Homes | Luxury Real Estate in Las Vegas',
  },
  description:
    'Discover luxury homes and properties in Summerlin West, Las Vegas. Expert real estate services with local market knowledge and personalized attention.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Summerlin West Homes | Luxury Real Estate in Las Vegas',
    description:
      'Discover luxury homes and properties in Summerlin West, Las Vegas. Expert real estate services with local market knowledge and personalized attention.',
    url: '/',
    type: 'website',
  },
};

export default function Page() {
  return <HomePageClient />;
}
