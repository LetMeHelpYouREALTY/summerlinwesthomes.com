import type { Metadata } from 'next';
import { openGraphWebsite } from '@/lib/open-graph';
import HomePageClient from './home-page-client';

const homeTitle = 'Summerlin Real Estate | Homes by Dr. Jan Duffy';
const homeDescription =
  'Summerlin Real Estate | Homes by Dr. Jan Duffy serves buyers, sellers, and investors across Summerlin, Las Vegas, Henderson, and Clark County. Call (702) 842-0410.';
const homeOgDescription =
  'Luxury residential sales, buyer representation, new construction, 55+ community sales, investment consulting, and relocation. Call (702) 842-0410.';

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
