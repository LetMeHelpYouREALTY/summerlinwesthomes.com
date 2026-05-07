import Link from 'next/link';

const snapshotSections = [
  {
    title: 'Inventory Direction',
    detail:
      'Track whether fresh listings are rising or tightening by village so you can set realistic expectations before touring.',
  },
  {
    title: 'Buyer Competition',
    detail:
      'Watch showing activity and offer speed to decide when stronger terms are needed in competitive pockets.',
  },
  {
    title: 'Pricing Pressure',
    detail:
      'Compare list-price movement and recent closes to avoid overpaying or underpricing.',
  },
  {
    title: 'Timing Strategy',
    detail:
      'Use seasonality and local launch patterns to pick better weeks to list or make offers.',
  },
];

export default function SummerlinWestMarketSnapshotPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Summerlin West Market Snapshot
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
