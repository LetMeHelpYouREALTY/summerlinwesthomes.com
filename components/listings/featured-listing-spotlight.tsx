import Image from 'next/image';
import Link from 'next/link';
import { HERITAGE_BEND_894 } from '@/lib/listings/heritage-bend-894';
import { BUSINESS, telHref } from '@/lib/business';

export default function FeaturedListingSpotlight() {
  const listing = HERITAGE_BEND_894;
  const hero = listing.photos[0];
  const thumbs = listing.photos.slice(1, 4);
  const openHouse = listing.openHouses[0];

  if (!hero) {
    return null;
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-[#d8c58e]/60 bg-white shadow-xl">
      <div className="grid lg:grid-cols-2">
        <Link
          href={listing.path}
          prefetch={false}
          className="relative block min-h-72 bg-[#0b1231]"
        >
          <Image
            src={hero.url}
            alt={hero.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-[#d8c58e] px-3 py-1 text-sm font-semibold text-[#0b1231]">
            {listing.statusNote}
          </span>
        </Link>
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            Featured Summerlin West home
          </p>
          <h2 className="text-3xl font-bold text-[#0b1231]">
            {listing.street}
          </h2>
          <p className="text-gray-700">
            {listing.city}, {listing.state} {listing.postalCode} · Heritage at
            Stonebridge
          </p>
          <p className="text-4xl font-bold text-amber-700">
            {listing.priceFormatted}
          </p>
          <p className="text-gray-800">
            {listing.beds} beds · {listing.baths} baths ·{' '}
            {listing.sqft.toLocaleString('en-US')} sq ft · $
            {listing.pricePerSqft}/sq ft
          </p>
          {openHouse ? (
            <p className="rounded-lg bg-[#faf7ef] px-4 py-3 text-[#0b1231]">
              Open house {openHouse.label}, {openHouse.startLabel}–
              {openHouse.endLabel} PT.
            </p>
          ) : null}
          <div className="grid grid-cols-3 gap-2">
            {thumbs.map((photo) => (
              <div
                key={photo.id}
                className="relative aspect-[3/2] overflow-hidden rounded-md"
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <Link
              href={listing.path}
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full bg-[#0b1231] px-6 py-3 font-semibold text-white"
            >
              View photos and details
            </Link>
            <a
              href={telHref()}
              className="inline-flex items-center justify-center rounded-full bg-[#d8c58e] px-6 py-3 font-semibold text-[#0b1231]"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          <p className="text-xs text-gray-500">
            MLS# {listing.mlsNumber}. Source: {listing.mlsName}. Listing offered
            by {listing.listingAttribution}.
          </p>
        </div>
      </div>
    </article>
  );
}
