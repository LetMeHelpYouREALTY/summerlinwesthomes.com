import type { Metadata } from 'next';
import HomePageClient from './home-page-client';

export const metadata: Metadata = {
  title: {
    absolute:
      'Summerlin Homes for Sale | Las Vegas Homes & Real Estate Listings',
  },
  description:
    'Summerlin homes for sale and Las Vegas real estate listings in Summerlin West. Browse homes for sale in Summerlin, houses for sale in Summerlin Las Vegas, and expert buyer guidance.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Summerlin Homes for Sale | Las Vegas Homes & Real Estate Listings',
    description:
      'Summerlin homes for sale and Las Vegas real estate listings in Summerlin West. Browse homes for sale in Summerlin and houses for sale in Summerlin Las Vegas.',
    url: '/',
    type: 'website',
  },
};

export default function Page() {
  return <HomePageClient />;
}
