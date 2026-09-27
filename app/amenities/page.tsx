import Link from 'next/link';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import AmenityMap from '@/components/amenities/amenity-map';
import AgentTrustBlock from '@/components/amenities/agent-trust-block';
import AmenitiesJsonLd from '@/components/amenities/amenities-jsonld';
import { COMMUNITY } from '@/lib/community';
import {
  AMENITY_CATEGORIES,
  AMENITY_CATEGORY_COPY,
  AMENITIES_FAQ,
  COMMUTE_NOTES,
} from '@/lib/amenities-data';

export default function AmenitiesPage() {
  const h1 = `Nearby Amenities in ${COMMUNITY.name}, ${COMMUNITY.city}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <AmenitiesJsonLd />
      <PageHero
        imageId="hero-amenities"
        title={h1}
        subtitle={`Golf, trails, Downtown Summerlin, healthcare, and daily errands around ZIP ${COMMUNITY.primaryZip}`}
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="rounded-full bg-white/20 px-4 py-2">Interactive map</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Verified destinations</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Buyer FAQs</span>
        </div>
      </PageHero>

      <section className="bg-white py-12" aria-labelledby="amenities-map-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 id="amenities-map-heading" className="mb-3 text-2xl font-bold text-gray-900">
              Explore what is near {COMMUNITY.name}
            </h2>
            <p className="text-gray-600">
              Filter restaurants, golf, parks, grocery, healthcare, and more. If the
              interactive map is unavailable, you still get a centered map embed and
              featured places list below.
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <AmenityMap compact={false} showStaticList />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Life near {COMMUNITY.name} by category
            </h2>
            <SectionImage
              imageId="section-downtown-summerlin"
              caption="Downtown Summerlin anchors shopping and dining for many Summerlin West residents."
              className="mx-auto mb-6 max-w-4xl"
            />
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {AMENITY_CATEGORIES.map((cat) => {
              const copy = AMENITY_CATEGORY_COPY[cat.id];
              return (
                <article
                  key={cat.id}
                  id={`amenity-${cat.id}`}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{copy.heading}</h3>
                  <p className="mt-3 text-gray-700">{copy.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Approximate drive times from {COMMUNITY.name}
            </h2>
            <p className="mb-6 text-gray-600">
              Times vary by village, route, and traffic—these ranges are approximate planning
              guides, not guarantees.
            </p>
            <ul className="space-y-4">
              {COMMUTE_NOTES.map((item) => (
                <li
                  key={item.destination}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <h3 className="font-semibold text-gray-900">{item.destination}</h3>
                  <p className="mt-1 text-gray-700">{item.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              For corridor-specific planning, see the{' '}
              <Link href="/transportation" className="font-medium text-amber-700 hover:underline">
                transportation guide
              </Link>{' '}
              and{' '}
              <Link
                href="/summerlin-west-schools-commute-amenities"
                className="font-medium text-amber-700 hover:underline"
              >
                schools &amp; commute page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16" aria-labelledby="amenities-faq">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 id="amenities-faq" className="mb-8 text-3xl font-bold text-gray-900">
              {COMMUNITY.name} amenities FAQ
            </h2>
            <div className="space-y-6">
              {AMENITIES_FAQ.map((faq) => (
                <article key={faq.question} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <AgentTrustBlock />
        </div>
      </section>
    </div>
  );
}
