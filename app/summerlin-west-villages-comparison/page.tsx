import Link from 'next/link';
import { headingImages } from '@/lib/section-images';
import {
  MediaThumbHeading,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';
import { BUSINESS, telHref } from '@/lib/business';

const villageRows = [
  {
    name: 'The Ridges',
    fit: 'Luxury golf-course estates',
    bestFor: 'Executive buyers and luxury relocations',
  },
  {
    name: 'The Summit',
    fit: 'Modern homes with elevated views',
    bestFor: 'Move-up buyers wanting newer inventory',
  },
  {
    name: 'Red Rock Country Club',
    fit: 'Private club lifestyle',
    bestFor: 'Buyers prioritizing golf and club amenities',
  },
  {
    name: 'The Vistas',
    fit: 'Established village with strong amenities',
    bestFor: 'Families wanting schools, parks, and trails',
  },
  {
    name: 'Stonebridge and nearby villages',
    fit: 'Newer communities with flexible floorplans',
    bestFor: 'Buyers seeking newer homes and lower maintenance',
  },
];

const faqItems = [
  {
    question: 'What is the difference between Northwest Las Vegas and Summerlin West?',
    answer:
      'Summerlin West is a master-planned area within the west side market, while Northwest Las Vegas can include nearby non-Summerlin neighborhoods with different HOA rules, lot sizes, and pricing patterns.',
  },
  {
    question: 'Are there homes for sale in North or West Summerlin right now?',
    answer:
      'Yes. Inventory changes weekly, so the best approach is to compare live Summerlin West listings by village and price band before scheduling tours.',
  },
  {
    question: 'Where can I review Summerlin West association and CC&R expectations?',
    answer:
      'Association and CC&R terms vary by village and subdivision. Buyers should review the current HOA disclosures, monthly dues, and use restrictions before writing an offer.',
  },
];

export default function SummerlinWestVillagesComparisonPage() {
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
        image={headingImages.h1.villagesCompare}
        title="Summerlin Homes for Sale — Villages Comparison Guide"
        subtitle="Compare Summerlin West villages side by side so you can focus your home search on the communities that match your lifestyle, price point, and daily routine."
      />
      <section className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-800">
                  Village
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-800">
                  Lifestyle Fit
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-800">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              {villageRows.map((row) => (
                <tr key={row.name} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{row.fit}</td>
                  <td className="px-4 py-3 text-gray-700">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <SectionHeading
            image={headingImages.h2.villages}
            title="Northwest Las Vegas vs Summerlin West: What Buyers Should Compare"
            subtitle="If you are comparing Northwest Las Vegas vs Summerlin West, focus on HOA structure, village-level amenities, resale velocity, and average closed price per square foot."
            titleClassName="text-2xl font-semibold text-gray-900"
          />
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <SectionHeading
            image={headingImages.h2.guide}
            title="Summerlin West Association and CC&R Planning Notes"
            subtitle="Before contract, verify community-specific CC&Rs, design review requirements, rental limitations, and current association dues."
            titleClassName="text-2xl font-semibold text-gray-900"
          />
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <SectionHeading
            image={headingImages.h2.faq}
            title="Frequently Asked Questions About Summerlin West Villages"
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
            image={headingImages.h2.featured}
            title="Next Step: Match Villages to Live Inventory"
            subtitle="Use live listings to compare availability and pricing in real time, then book a quick strategy call to prioritize villages."
            titleClassName="text-2xl font-semibold text-gray-900"
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/properties/search"
              className="rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white hover:bg-amber-700"
            >
              View Live Listings
            </Link>
            <a
              href={telHref}
              className="rounded-lg border border-amber-600 px-5 py-3 font-semibold text-amber-700 hover:bg-amber-50"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
