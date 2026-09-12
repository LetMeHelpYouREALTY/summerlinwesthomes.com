import Link from 'next/link';
import { headingImages } from '@/lib/section-images';
import {
  MediaThumbHeading,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';

const faqItems = [
  {
    question: 'What airport is closest to Summerlin West Las Vegas?',
    answer:
      'Harry Reid International Airport is the main commercial airport for Summerlin West residents, with drive times varying by village and traffic window.',
  },
  {
    question: 'How far is West Sahara Avenue from Summerlin?',
    answer:
      'Distance and timing vary by starting point, but West Sahara is a common east-west connector used by many Summerlin West residents for commuting and errands.',
  },
  {
    question: 'What services should buyers verify before choosing a Summerlin West village?',
    answer:
      'Buyers usually confirm school zoning, internet provider options, commute routes, and nearby daily amenities such as grocery, dining, and health services.',
  },
];

export default function SummerlinWestSchoolsCommuteAmenitiesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        image={headingImages.h1.schoolsCommute}
        title="Homes for Sale in Las Vegas Summerlin — Schools, Commute & Amenities"
        subtitle="Use this local planning guide to narrow neighborhoods before showings. Compare school access, commute tradeoffs, and nearby amenities in one view."
      />
      <section className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-5">
            <MediaThumbHeading
              as="h2"
              image={headingImages.schools.high}
              title="Las Vegas Homes & School Fit"
              titleClassName="mb-2 text-2xl font-semibold text-gray-900"
            />
            <p className="mt-2 text-gray-700">
              Start with zoning, daily drive times, and campus proximity. Then
              compare inventory nearby to reduce weekday friction.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <MediaThumbHeading
              as="h2"
              image={headingImages.h3.highway}
              title="Summerlin Homes for Sale — Commute Planning"
              titleClassName="mb-2 text-2xl font-semibold text-gray-900"
            />
            <p className="mt-2 text-gray-700">
              Compare major corridors and peak-time patterns by village so your
              weekly schedule matches where you buy.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <MediaThumbHeading
              as="h2"
              image={headingImages.h2.amenities}
              title="Real Estate Listings Near Daily Amenities"
              titleClassName="mb-2 text-2xl font-semibold text-gray-900"
            />
            <p className="mt-2 text-gray-700">
              Evaluate parks, trails, golf, retail, and dining access by
              lifestyle priority instead of by ZIP code alone.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <SectionHeading
            image={headingImages.h2.commute}
            title="Summerlin West Commute and Corridor Planning"
            subtitle="Compare major travel corridors like West Charleston and West Sahara by your typical departure windows."
            titleClassName="text-2xl font-semibold text-gray-900"
          />
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <SectionHeading
            image={headingImages.h3.shopping}
            title="Everyday Convenience: Internet, Retail, and Services"
            subtitle="In addition to schools and parks, many buyers prioritize internet reliability, nearby grocery and dining access, and healthcare convenience when comparing Summerlin West villages."
            titleClassName="text-2xl font-semibold text-gray-900"
          />
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <SectionHeading
            image={headingImages.h2.faq}
            title="Schools, Commute, and Amenities FAQ"
            titleClassName="text-2xl font-semibold text-gray-900"
          />
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <article key={faq.question}>
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-1 text-gray-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-gray-50 p-6">
          <SectionHeading
            image={headingImages.h2.guide}
            title="Build a Shortlist in 15 Minutes"
            subtitle="Use the three core pages below to compare villages, verify current listings, and move from browsing to touring."
            titleClassName="text-2xl font-semibold text-gray-900"
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/schools"
              className="rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white hover:bg-amber-700"
            >
              Review Schools Page
            </Link>
            <Link
              href="/transportation"
              className="rounded-lg border border-amber-600 px-5 py-3 font-semibold text-amber-700 hover:bg-amber-50"
            >
              Review Transportation
            </Link>
            <Link
              href="/amenities"
              className="rounded-lg border border-amber-600 px-5 py-3 font-semibold text-amber-700 hover:bg-amber-50"
            >
              Review Amenities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
