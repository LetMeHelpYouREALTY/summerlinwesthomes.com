import { BUSINESS, formattedAddress } from '@/lib/business';
import { getSiteUrl } from '@/lib/site-url';
import { imageSrc } from '@/lib/images';

export default function LocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();
  const aggregateRatingValue =
    process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_VALUE?.trim();
  const aggregateRatingCount =
    process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_COUNT?.trim();
  const aggregateRatingBest =
    process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_BEST?.trim() ?? '5';
  const aggregateRating =
    aggregateRatingValue && aggregateRatingCount
      ? {
          '@type': 'AggregateRating',
          ratingValue: aggregateRatingValue,
          reviewCount: aggregateRatingCount,
          bestRating: aggregateRatingBest,
        }
      : undefined;

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteUrl}/#organization`,
    name: BUSINESS.gbpTitle,
    alternateName: [BUSINESS.shortName, BUSINESS.agentName],
    description: BUSINESS.description,
    url: siteUrl,
    telephone: BUSINESS.phoneDisplay,
    image: `${siteUrl}${imageSrc('hero-home')}`,
    logo: `${siteUrl}${imageSrc('og-default')}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: BUSINESS.mapsUri,
    openingHoursSpecification: BUSINESS.hours.map((period) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: period.day,
      opens: period.opens,
      closes: period.closes,
    })),
    areaServed: [
      { '@type': 'Place', name: 'Summerlin West' },
      { '@type': 'Place', name: 'Summerlin' },
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'AdministrativeArea', name: 'Clark County' },
    ],
    parentOrganization: {
      '@type': 'RealEstateAgent',
      name: BUSINESS.brokerage,
    },
    employee: {
      '@type': 'Person',
      name: BUSINESS.agentName,
      jobTitle: 'REALTOR®',
      identifier: BUSINESS.license,
    },
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: 'USD',
    sameAs: [BUSINESS.mapsUri, BUSINESS.reviewsUri],
    ...(aggregateRating ? { aggregateRating } : {}),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: BUSINESS.gbpTitle,
    description: BUSINESS.description,
    publisher: { '@id': `${siteUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/properties/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, '\\u003c'),
        }}
      />
      <span className="sr-only">
        {BUSINESS.gbpTitle}, {formattedAddress()}, {BUSINESS.phoneDisplay}
      </span>
    </>
  );
}
