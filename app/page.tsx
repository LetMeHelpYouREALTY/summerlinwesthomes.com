import type { Metadata } from 'next';
import { openGraphWebsite } from '@/lib/open-graph';
import HomePageClient from './home-page-client';

const homeTitle =
  'Summerlin Homes for Sale | Las Vegas Homes & Real Estate Listings';
const homeDescription =
  'Summerlin homes for sale and Las Vegas real estate listings in Summerlin West. Browse homes for sale in Summerlin, houses for sale in Summerlin Las Vegas, and expert buyer guidance.';
const homeOgDescription =
  'Summerlin homes for sale and Las Vegas real estate listings in Summerlin West. Browse homes for sale in Summerlin and houses for sale in Summerlin Las Vegas.';

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: openGraphWebsite({
    title: homeTitle,
    description: homeOgDescription,
    url: '/',
  }),
};

export default function Page() {
  return <HomePageClient />;
}
