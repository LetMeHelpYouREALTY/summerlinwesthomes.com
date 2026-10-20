import { BUSINESS } from '@/lib/business';
import { COMMUNITY } from '@/lib/community';
import {
  AMENITIES_FAQ,
  CURATED_AMENITIES,
} from '@/lib/amenities-data';
import { getSiteUrl } from '@/lib/site-url';

export default function AmenitiesJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/amenities`;

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AMENITIES_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Nearby amenities in ${COMMUNITY.name}, ${COMMUNITY.city}`,
    itemListElement: CURATED_AMENITIES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        url: place.sourceUrl,
        ...(place.address
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: place.address.split(',')[0]?.trim(),
                addressLocality: COMMUNITY.city,
                addressRegion: COMMUNITY.stateCode,
                addressCountry: 'US',
              },
            }
          : {}),
      },
    })),
  };

  const communityPlace = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${pageUrl}#community`,
    name: COMMUNITY.name,
    description: `Master-planned west Las Vegas community (${COMMUNITY.primaryZip}) between the 215 Beltway and Red Rock Canyon.`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMMUNITY.center.lat,
      longitude: COMMUNITY.center.lng,
    },
    containedInPlace: {
      '@type': 'City',
      name: COMMUNITY.city,
    },
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Summerlin West Homes',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  };

  const agentExtension = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}/#organization`,
    name: BUSINESS.agentName,
    worksFor: {
      '@type': 'Organization',
      name: BUSINESS.brokerage,
    },
    areaServed: {
      '@type': 'Place',
      name: COMMUNITY.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMMUNITY.center.lat,
        longitude: COMMUNITY.center.lng,
      },
    },
  };

  const blocks = [faqPage, itemList, communityPlace, breadcrumbs, agentExtension];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
