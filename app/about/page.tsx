import type { Metadata } from 'next';
import AboutSection from '@/components/home-spa/about-section';
import { BUSINESS } from '@/lib/business';
import { openGraphWebsite } from '@/lib/open-graph';

const title = 'About Summerlin Real Estate | Homes by Dr. Jan Duffy';
const description = `Meet ${BUSINESS.name} at ${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}. Call ${BUSINESS.phoneDisplay}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: openGraphWebsite({
    title,
    description,
    url: '/about',
  }),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-4 pb-16">
        <AboutSection />
      </div>
    </main>
  );
}
