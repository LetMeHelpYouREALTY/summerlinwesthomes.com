import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS, telHref } from '@/lib/business';
import { openGraphWebsite } from '@/lib/open-graph';
import { headingImages } from '@/lib/section-images';
import {
  OverlayHeadingSection,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';

const path = '/sun-city-summerlin';
const title = 'Sun City Summerlin 55+ Homes | Summerlin Real Estate';
const description =
  '55+ active-adult community sales in Sun City and Del Webb, represented by Summerlin Real Estate | Homes by Dr. Jan Duffy. Call (702) 842-0410.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: openGraphWebsite({
    title,
    description,
    url: path,
  }),
};

export default function SunCitySummerlinPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PageHero
        image={headingImages.h1.sunCity}
        title="Sun City and Del Webb 55+ homes"
        subtitle="Age-qualified active-adult community sales across Sun City Summerlin and Del Webb, with the office in Summerlin at 10777 West Twain Avenue."
      />

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg text-gray-700">
          {BUSINESS.shortName} includes 55+ active-adult community sales among
          its services. Sun City and Del Webb homes are age-qualified under the
          Housing for Older Persons Act. This page is about that inventory, not
          a separate office.
        </p>
        <p className="mt-4 text-gray-700">
          Call {BUSINESS.phoneDisplay} or visit the{' '}
          <Link href="/office" className="font-semibold underline-offset-2 hover:underline">
            Summerlin Real Estate office
          </Link>{' '}
          at {BUSINESS.streetAddress}, {BUSINESS.addressLocality}.
        </p>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeading
            image={headingImages.h2.featured}
            title="Sun City Summerlin listings"
            subtitle="Compare current 55+ inventory, then tour with the Summerlin office."
          />
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="250000" price-max="900000"></realscout-office-listings>',
              }}
            />
          </div>
        </div>
      </section>

      <OverlayHeadingSection
        image={headingImages.h2.cta}
        title={`Call ${BUSINESS.phoneDisplay}`}
        subtitle="Sun City, Del Webb, and west-valley 55+ community sales"
      >
        <a
          href={telHref}
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#0b1231]"
        >
          Call now
        </a>
      </OverlayHeadingSection>
    </main>
  );
}
