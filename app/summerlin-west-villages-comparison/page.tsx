import Link from 'next/link';

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
    <main className="min-h-screen bg-white pt-24">
      <section className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Summerlin West Villages Comparison
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-gray-600">
          Compare Summerlin West villages side by side so you can focus your
          home search on the communities that match your lifestyle, price point,
          and daily routine.
        </p>

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
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Northwest Las Vegas vs Summerlin West: What Buyers Should Compare
          </h2>
          <p className="text-gray-700">
            If you are comparing Northwest Las Vegas vs Summerlin West, focus on
            HOA structure, village-level amenities, resale velocity, and average
            closed price per square foot. This side-by-side view helps narrow your
            shortlist before touring homes for sale in Summerlin West Las Vegas.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Summerlin West Association and CC&amp;R Planning Notes
          </h2>
          <p className="text-gray-700">
            Before contract, verify community-specific CC&amp;Rs, design review
            requirements, rental limitations, and current association dues. Terms
            differ across Summerlin West villages and can affect long-term ownership
            costs.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Frequently Asked Questions About Summerlin West Villages
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
            Next Step: Match Villages to Live Inventory
          </h2>
          <p className="mb-5 text-gray-600">
            Use live listings to compare availability and pricing in real time,
            then book a quick strategy call to prioritize villages.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/properties/search"
              className="rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white hover:bg-amber-700"
            >
              View Live Listings
            </Link>
            <a
              href="tel:+17025550100"
              className="rounded-lg border border-amber-600 px-5 py-3 font-semibold text-amber-700 hover:bg-amber-50"
            >
              Call (702) 555-0100
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
