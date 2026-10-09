import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ListingPhotoGallery from '@/components/listings/listing-photo-gallery';
import { BUSINESS, formattedAddress, telHref } from '@/lib/business';
import { HERITAGE_BEND_894 } from '@/lib/listings/heritage-bend-894';
import { getSiteUrl } from '@/lib/site-url';

const listing = HERITAGE_BEND_894;

const title =
  '894 Heritage Bend Drive, Las Vegas 89138 | $539,888 Home for Sale';
const description =
  'Active 2-bed, 2-bath home at 894 Heritage Bend Drive, Las Vegas, NV 89138. $539,888, 1,234 sq ft. Open Saturday, October 10, 12–2 PM PT. MLS 2825123.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: listing.path,
  },
  openGraph: {
    title,
    description,
    url: listing.path,
    type: 'website',
    images: listing.photos[0]
      ? [
          {
            url: listing.photos[0].url,
            width: 1085,
            height: 723,
            alt: listing.photos[0].alt,
          },
        ]
      : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: listing.photos[0] ? [listing.photos[0].url] : undefined,
  },
};

function listingJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${listing.path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: `${listing.street}, ${listing.city}`,
    url: pageUrl,
    datePosted: '2026-10-06',
    description,
    image: listing.photos.map((photo) => photo.url),
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.street,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: listing.latitude,
      longitude: listing.longitude,
    },
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    },
    about: {
      '@type': 'SingleFamilyResidence',
      name: listing.street,
      numberOfBedrooms: listing.beds,
      numberOfBathroomsTotal: listing.baths,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: listing.sqft,
        unitCode: 'FTK',
      },
    },
    broker: {
      '@type': 'RealEstateAgent',
      name: BUSINESS.gbpTitle,
      telephone: BUSINESS.phoneDisplay,
      address: formattedAddress(),
      url: siteUrl,
    },
  };
}

const mapQuery = encodeURIComponent(listing.fullAddress);
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

const factRows: Array<{ label: string; value: string }> = [
  { label: 'Status', value: `${listing.status} · ${listing.statusNote}` },
  { label: 'Price', value: `${listing.priceFormatted} ($${listing.pricePerSqft}/sq ft)` },
  { label: 'Beds / baths', value: `${listing.beds} beds · ${listing.baths} baths` },
  { label: 'Living area', value: `${listing.sqft.toLocaleString('en-US')} sq ft` },
  { label: 'Lot', value: listing.lotSqftLabel },
  { label: 'Year built', value: String(listing.yearBuilt) },
  { label: 'Style', value: `${listing.architecturalStyle} · ${listing.planName}` },
  { label: 'Property type', value: listing.propertyType },
  { label: 'Community', value: listing.community },
  { label: 'Subdivision', value: listing.subdivision },
  { label: 'List date', value: listing.listDateLabel },
  {
    label: 'Days on site',
    value: `${listing.daysOnSite} as of ${listing.daysOnSiteAsOf}`,
  },
  { label: 'MLS number', value: listing.mlsNumber },
  {
    label: 'Association',
    value: `${listing.associationName} · ${listing.associationFee} ${listing.associationFeeFrequency.toLowerCase()}`,
  },
  {
    label: 'Association fee total',
    value: `${listing.associationFeeTotal} ${listing.associationFeeTotalFrequency.toLowerCase()}`,
  },
  { label: 'Annual tax', value: `$${listing.taxAnnualAmount.toLocaleString('en-US')}` },
  { label: 'Parcel', value: listing.parcelNumber },
  { label: 'Elementary school', value: listing.schools.elementary },
  { label: 'Middle school', value: listing.schools.middle },
  { label: 'High school', value: listing.schools.high },
];

export default function HeritageBendListingPage() {
  return (
    <div className="bg-[#f6f4ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(listingJsonLd()).replace(/</g, '\\u003c'),
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-700">
          Summerlin West home for sale · Las Vegas
        </p>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#0b1231] md:text-5xl">
              {listing.street}
            </h1>
            <p className="mt-2 text-lg text-gray-700">{listing.fullAddress}</p>
          </div>
          <p className="text-4xl font-bold text-amber-700">{listing.priceFormatted}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <ListingPhotoGallery />
          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#d8c58e]/50 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                {listing.status} · {listing.statusNote}
              </p>
              <p className="mt-3 text-lg text-[#0b1231]">
                {listing.beds} beds, {listing.baths} baths,{' '}
                {listing.sqft.toLocaleString('en-US')} sq ft on a {listing.lotSqftLabel}{' '}
                lot.
              </p>
              <p className="mt-3 text-gray-700">{listing.ageRestriction}</p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={telHref()}
                  className="inline-flex items-center justify-center rounded-full bg-[#0b1231] px-5 py-3 font-semibold text-white"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#0b1231] px-5 py-3 font-semibold text-[#0b1231]"
                >
                  Directions
                </a>
                <a
                  href={BUSINESS.reviewsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d8c58e] px-5 py-3 font-semibold text-[#0b1231]"
                >
                  View Google Reviews
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#d8c58e]/50 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0b1231]">Open houses</h2>
              <ul className="mt-3 space-y-3">
                {listing.openHouses.map((openHouse) => (
                  <li key={openHouse.label}>
                    <p className="font-semibold text-[#0b1231]">{openHouse.label}</p>
                    <p className="text-gray-700">
                      {openHouse.startLabel} – {openHouse.endLabel} PT
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0b1231]">Listing remarks</h2>
            <div className="mt-4 space-y-4 text-gray-800">
              {listing.remarks.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <h3 className="mt-8 text-xl font-semibold text-[#0b1231]">
              What comes with the house
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-800">
              {listing.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-gray-800">
              Community amenities listed for Heritage at Stonebridge:{' '}
              {listing.communityAmenities.join(', ')}.
            </p>
            <p className="mt-4">
              <a
                href={listing.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-800 underline"
              >
                View virtual tour
              </a>
              <span className="text-gray-600"> · external site</span>
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0b1231]">MLS facts</h2>
            <dl className="mt-4 divide-y divide-gray-100">
              {factRows.map((row) => (
                <div key={row.label} className="grid grid-cols-2 gap-3 py-2 text-sm">
                  <dt className="font-medium text-gray-500">{row.label}</dt>
                  <dd className="text-[#0b1231]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#0b1231]">
            Photos of {listing.street}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {listing.photos.map((photo) => (
              <li key={photo.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="px-3 py-2 text-sm text-gray-700">{photo.room}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <h2 className="px-6 pt-6 text-2xl font-semibold text-[#0b1231]">
              Map and directions
            </h2>
            <p className="px-6 pb-4 pt-2 text-gray-700">{listing.directions}</p>
            <iframe
              title={`Map of ${listing.fullAddress}`}
              src={mapEmbedSrc}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0b1231]">
              Tour with {BUSINESS.agentName}
            </h2>
            <p className="mt-3 text-gray-800">
              {BUSINESS.gbpTitle}
              <br />
              {formattedAddress()}
              <br />
              <a href={telHref()} className="font-semibold text-[#0b1231]">
                {BUSINESS.phoneDisplay}
              </a>
              <br />
              Hours: {BUSINESS.hoursLabel}
            </p>
            <p className="mt-4 text-gray-700">
              Compare other{' '}
              <Link href="/listings" prefetch={false} className="font-semibold underline">
                Summerlin West listings
              </Link>{' '}
              or open the{' '}
              <Link
                href="/properties/search"
                prefetch={false}
                className="font-semibold underline"
              >
                live Las Vegas home search
              </Link>
              .
            </p>
            <p className="mt-4">
              <a
                href={listing.realScoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-800 underline"
              >
                Open this listing on RealScout
              </a>
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src={listing.mlsLogoUrl}
              alt={`${listing.mlsName} logo`}
              width={72}
              height={72}
              className="h-16 w-auto"
            />
            <div>
              <p>Source: {listing.mlsName}</p>
              <p>
                Listing offered by {listing.listingAttribution}. Listing agent{' '}
                {listing.listingAgentName}, {listing.listingAgentLicense}.{' '}
                {listing.listingOffice}.
              </p>
              <p className="mt-2">{listing.disclaimer}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
