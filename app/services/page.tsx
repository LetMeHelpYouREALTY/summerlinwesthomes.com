import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/business';
import { openGraphWebsite } from '@/lib/open-graph';
import ServiceCards from '@/components/services/service-cards';
import { headingImages } from '@/lib/section-images';
import { PageHero } from '@/components/media/heading-media';

const title = 'Real Estate Services in Summerlin West | Las Vegas';
const description =
  'Buyer, seller, land, commercial, rental, and consulting services for Summerlin West. Call (702) 842-0410.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: openGraphWebsite({
    title,
    description,
    url: '/services',
  }),
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PageHero
        image={headingImages.h2.guide}
        title="Find Summerlin West real estate services"
        subtitle={`${BUSINESS.name} at ${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}. ${BUSINESS.phoneDisplay}.`}
      />
      <ServiceCards
        heading="All services"
        subtitle="Primary real estate agent offerings and additional consulting services, each on its own page."
      />
    </main>
  );
}
