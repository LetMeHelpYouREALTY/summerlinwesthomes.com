import Link from 'next/link';

const snapshotSections = [
  {
    title: 'Inventory Direction for Las Vegas Homes',
    detail:
      'Track whether fresh listings are rising or tightening by village so you can set realistic expectations before touring.',
  },
  {
    title: 'Buyer Competition on Summerlin Listings',
    detail:
      'Watch showing activity and offer speed to decide when stronger terms are needed in competitive pockets.',
  },
  {
    title: 'Pricing Pressure on Homes for Sale in Summerlin',
    detail:
      'Compare list-price movement and recent closes to avoid overpaying or underpricing.',
  },
  {
    title: 'Timing Strategy for Las Vegas Real Estate Listings',
    detail:
      'Use seasonality and local launch patterns to pick better weeks to list or make offers.',
  },
];

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
    <main className="min-h-screen bg-white pt-24">
      <section className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Las Vegas Homes for Sale — Summerlin West Market Snapshot
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-gray-600">
          A practical local snapshot focused on how to act in the current
          Summerlin West market, with buyer and seller strategy tied to live
          listing behavior.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {snapshotSections.map((item) => (
            <article key={item.title} className="rounded-xl border p-5">
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Summerlin West Las Vegas Houses for Sale: Reading the Signals
          </h2>
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
    </main>
  );
}
