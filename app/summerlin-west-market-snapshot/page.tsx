import Link from 'next/link';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

const faqItems = [
  {
    question: 'How often does Summerlin West market data change?',
    answer:
      'New listings, pending activity, and price adjustments can shift daily. Reviewing weekly trends gives buyers and sellers a practical read on current conditions.',
  },
  {
    question: 'Where can I find homes for sale in Summerlin West Las Vegas?',
    answer:
      'Start with live Summerlin West listings filtered by village and budget, then compare days on market and recent closes before choosing tour targets.',
  },
  {
    question: 'Are new homes in Summerlin West different from resale inventory?',
    answer:
      'Yes. New construction may offer builder incentives and modern plans, while resale homes can offer mature landscaping, established streets, and broader price variation.',
  },
];

export default function SummerlinWestMarketSnapshotPage() {
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
        imageId="hero-market"
        title="Las Vegas Homes for Sale — Summerlin West Market Snapshot"
        subtitle="A practical local snapshot tied to live listing behavior. Call for a current CMA — do not treat sample figures as MLS statistics."
      />
      <section className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <SectionImage
          imageId="section-luxury-interior"
          caption="Use live MLS widgets and a CMA from Dr. Jan Duffy before you price an offer."
          className="mb-10"
        />

        <HeadingPhotoGrid
          columns={2}
          items={[
            {
              imageId: 'hero-listings',
              heading: 'Inventory direction for Las Vegas homes',
              text: 'Track whether fresh listings are rising or tightening by village before you tour. Use live MLS, not sample figures.',
            },
            {
              imageId: 'h3-buyer-keys',
              heading: 'Buyer competition on Summerlin listings',
              text: 'Watch showing activity and offer speed. Call (702) 842-0410 for a current read on the village you want.',
            },
            {
              imageId: 'h3-kitchen',
              heading: 'Pricing pressure on homes for sale in Summerlin',
              text: 'Compare list-price movement and recent closes. Ask for a CMA before you price an offer.',
            },
            {
              imageId: 'h3-village-street',
              heading: 'Timing strategy for Las Vegas listings',
              text: 'Use local launch patterns to pick better weeks to list or make offers. Confirm with current inventory.',
            },
          ]}
        />

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Summerlin West Las Vegas Houses for Sale: Reading the Signals
          </h2>
          <SectionImage
            imageId="hero-market"
            caption="Use live listings and a CMA — not website sample stats — to read Summerlin West pricing."
            className="mb-4"
          />
          <p className="text-gray-700">
            Track active inventory, median list-to-close spread, and contract speed
            by village. These three indicators usually reveal whether buyers should
            move quickly or negotiate harder in the current Summerlin West cycle.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            New Homes in Summerlin West Las Vegas vs Existing Homes
          </h2>
          <SectionImage
            imageId="section-new-construction"
            caption="Compare newer villages with established resale streets before you tour."
            className="mb-4"
          />
          <p className="text-gray-700">
            Compare base pricing, lot premiums, HOA structure, and total monthly
            carrying cost. This gives a clearer apples-to-apples view between new
            homes in Summerlin West Las Vegas and established resale options.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Summerlin West Market FAQ
          </h2>
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
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Validate With Live Listings
          </h2>
          <SectionImage
            imageId="hero-listings"
            caption="Pair this snapshot with live RealScout inventory before you tour."
            className="mb-4"
          />
          <p className="mb-5 text-gray-600">
            Pair this snapshot with live RealScout inventory to confirm pricing
            and inventory conditions before choosing next steps.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/market-data"
              className="rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white hover:bg-amber-700"
            >
              Open Market Data
            </Link>
            <Link
              href="/properties/search"
              className="rounded-lg border border-amber-600 px-5 py-3 font-semibold text-amber-700 hover:bg-amber-50"
            >
              Search Listings
            </Link>
          </div>
        </div>
      </section>
      <ImageCta
        imageId="hero-market"
        title="Get a current Summerlin West CMA"
        subtitle="This snapshot is a planning guide. Call (702) 842-0410 for live pricing tied to MLS."
        primary={{ href: '/properties/search', label: 'Search listings' }}
      />
    </main>
  );
}
