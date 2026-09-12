import type { Metadata } from 'next';
import { openGraphWebsite } from '@/lib/open-graph';
import HomePageClient from './home-page-client';

const homeTitle =
  'Sun City Summerlin 55+ Homes | Las Vegas Real Estate';
const homeDescription =
  'Find 55+ homes in Sun City Summerlin, Las Vegas, with Dr. Jan Duffy. Age-qualified active-adult real estate since 2013. Call (702) 718-0043.';
const homeOgDescription =
  'Sun City Summerlin 55+ real estate in Las Vegas. Homes by Dr. Jan Duffy — active-adult community representation since 2013.';

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
