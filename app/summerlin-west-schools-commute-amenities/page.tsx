import Link from 'next/link';

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
    <main className="min-h-screen bg-white pt-24">
      <section className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Summerlin West Schools, Commute, and Amenities Guide
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-gray-600">
          Use this local planning guide to narrow neighborhoods before showings.
          Compare school access, commute tradeoffs, and nearby amenities in one
          view.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-5">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              Schools
            </h2>
            <p className="text-gray-700">
              Start with zoning, daily drive times, and campus proximity. Then
              compare inventory nearby to reduce weekday friction.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              Commute
            </h2>
            <p className="text-gray-700">
              Compare major corridors and peak-time patterns by village so your
              weekly schedule matches where you buy.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              Amenities
            </h2>
            <p className="text-gray-700">
              Evaluate parks, trails, golf, retail, and dining access by
              lifestyle priority instead of by ZIP code alone.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Summerlin West Commute and Corridor Planning
          </h2>
          <p className="text-gray-700">
            Compare major travel corridors like West Charleston and West Sahara by
            your typical departure windows. A route-first approach helps align
            neighborhood choices with real weekday commute behavior.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Everyday Convenience: Internet, Retail, and Services
          </h2>
          <p className="text-gray-700">
            In addition to schools and parks, many buyers prioritize internet
            reliability, nearby grocery and dining access, and healthcare
            convenience when comparing Summerlin West villages.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Schools, Commute, and Amenities FAQ
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
            Build a Shortlist in 15 Minutes
          </h2>
          <p className="mb-5 text-gray-600">
            Use the three core pages below to compare villages, verify current
            listings, and move from browsing to touring.
          </p>
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
