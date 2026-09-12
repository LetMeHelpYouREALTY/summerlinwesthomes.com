import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AVAILABLE_LANGUAGES,
  BUSINESS,
  BUSINESS_ADDRESS_LINE,
  directionsUrl,
  googleReviewsUrl,
  mapsEmbedUrl,
  smsHref,
  telHref,
} from '@/lib/business';
import { GBP_FAQS } from '@/lib/gbp-faq';
import { openGraphWebsite } from '@/lib/open-graph';
import { headingImages } from '@/lib/section-images';
import { SERVICES, servicePath } from '@/lib/services';
import { getSiteUrl } from '@/lib/site-url';
import {
  OverlayHeadingSection,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';

const path = '/sun-city-summerlin';
const title = 'Sun City Summerlin 55+ Real Estate Office | Las Vegas';
const description = BUSINESS.description;

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

export default function SunCitySummerlinLocationPage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Sun City Summerlin office',
            item: `${siteUrl}${path}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: GBP_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  const featuredServices = SERVICES.filter((service) =>
    [
      'buying-agent-services',
      'sellers-agent-services',
      'first-time-home-buyer-services',
      'relocation-assistance',
      'luxury-property-buying-sales',
      'home-buying-sales',
    ].includes(service.slug),
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <PageHero
        image={headingImages.h1.about}
        title="Sun City Summerlin 55+ real estate office"
        subtitle={`${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`}
      />

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg text-gray-700">{BUSINESS.description}</p>
        <p className="mt-4 text-gray-700">
          Open since September 20, 2013. Nevada license {BUSINESS.license}.
          Veteran-owned and women-owned. Online appointments are available; a
          reservation is not required.
        </p>
        <address className="mt-8 not-italic text-gray-900">
          <p className="text-xl font-semibold">{BUSINESS.name}</p>
          <p className="mt-2">{BUSINESS.streetAddress}</p>
          <p>
            {BUSINESS.addressLocality}, {BUSINESS.addressRegion}{' '}
            {BUSINESS.postalCode}
          </p>
          <p className="mt-2">{BUSINESS.hoursDisplay}</p>
        </address>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={telHref}
            className="rounded-lg bg-[#0b1231] px-5 py-3 font-semibold text-white"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
          <a
            href={smsHref}
            className="rounded-lg border border-[#0b1231] px-5 py-3 font-semibold text-[#0b1231]"
          >
            Text
          </a>
          <a
            href={directionsUrl}
            className="rounded-lg border border-[#0b1231] px-5 py-3 font-semibold text-[#0b1231]"
            rel="noopener noreferrer"
            target="_blank"
          >
            Directions
          </a>
          <a
            href={googleReviewsUrl}
            className="rounded-lg border border-[#0b1231] px-5 py-3 font-semibold text-[#0b1231]"
            rel="noopener noreferrer"
            target="_blank"
          >
            View Google Reviews
          </a>
          <a
            href={BUSINESS.googleProfileUrl}
            className="rounded-lg border border-[#0b1231] px-5 py-3 font-semibold text-[#0b1231]"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Business Profile
          </a>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionHeading
            image={headingImages.h2.consult}
            title="Office hours and map"
            subtitle="Pin at 9406 Del Webb Boulevard in Sun City Summerlin, Las Vegas."
          />
          <ul className="mb-6 space-y-1 text-gray-700">
            <li>Sunday–Saturday: 6:00 AM – 9:00 PM</li>
            <li>Closed July 3, 2026 and July 4, 2026</li>
          </ul>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              title={`${BUSINESS.name} map at ${BUSINESS_ADDRESS_LINE}`}
              src={mapsEmbedUrl}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Office attributes
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Wheelchair-accessible entrance, parking, seating, and restroom</li>
          <li>Free parking lot</li>
          <li>Onsite services and online appointments</li>
          <li>
            Languages: {AVAILABLE_LANGUAGES.join(', ')}
          </li>
        </ul>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeading
            image={headingImages.h2.guide}
            title="Services from this office"
            subtitle="Buyer and seller representation for age-qualified Sun City Summerlin homes and the wider west Las Vegas service area."
          />
          <div className="flex flex-wrap gap-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(service.slug)}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-[#0b1231]"
              >
                {service.name}
              </Link>
            ))}
            <Link
              href="/services"
              className="rounded-full bg-[#0b1231] px-4 py-2 text-sm font-medium text-white"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Google Business Profile questions
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {GBP_FAQS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <OverlayHeadingSection
        image={headingImages.h2.cta}
        title={`Call ${BUSINESS.phoneDisplay}`}
        subtitle={BUSINESS_ADDRESS_LINE}
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
