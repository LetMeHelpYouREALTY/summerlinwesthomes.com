import Link from 'next/link';

export default function SummerlinWestSchoolsCommuteAmenitiesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="container mx-auto px-4 py-12">
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
