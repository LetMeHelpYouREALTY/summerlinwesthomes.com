/**
 * Single source of truth for Google Business Profile NAP.
 * Pulled from GBP Business Information API on 2026-09-14 for
 * location "Summerlin Real Estate | Homes by Dr. Jan Duffy"
 * (website https://www.summerlinwesthomes.com/).
 * Visible NAP, JSON-LD, and CTAs must stay character-consistent with this file.
 */
export const BUSINESS = {
  gbpTitle: 'Summerlin Real Estate | Homes by Dr. Jan Duffy',
  shortName: 'Summerlin West Homes',
  agentName: 'Dr. Jan Duffy',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  license: 'S.0197614.LLC',
  description:
    'Summerlin Real Estate | Homes by Dr. Jan Duffy serves buyers, sellers, and investors across Summerlin, Las Vegas, Henderson, and Clark County. Services include luxury residential home sales, buyer representation, new construction sales, 55+ active adult community sales, investment property consulting, divorce and probate real estate, and relocation services. Specializing in The Ridges, Summerlin West, Red Rock Country Club, Sun City, and Del Webb communities.',
  streetAddress: '10777 West Twain Avenue # 333',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89135',
  addressCountry: 'US',
  phoneDisplay: '(702) 842-0410',
  phoneTel: '+17028420410',
  website: 'https://www.summerlinwesthomes.com',
  placeId: 'ChIJO3KBufO_yIARCylQ-F54gss',
  mapsUri: 'https://maps.google.com/maps?cid=14664415685960018187',
  mapsCid: '14664415685960018187',
  newReviewUri:
    'https://search.google.com/local/writereview?placeid=ChIJO3KBufO_yIARCylQ-F54gss',
  reviewsUri:
    'https://search.google.com/local/reviews?placeid=ChIJO3KBufO_yIARCylQ-F54gss',
  latitude: 36.1234609,
  longitude: -115.3267013,
  priceRange: '$$$',
  calendlyUrl: 'https://calendly.com/drjanduffy/appointment',
  realScoutAgentId: 'QWdlbnQtMjI1MDUw',
  hoursLabel: 'Daily 6:00 AM – 9:00 PM',
  hours: [
    { day: 'Sunday', opens: '06:00', closes: '21:00' },
    { day: 'Monday', opens: '06:00', closes: '21:00' },
    { day: 'Tuesday', opens: '06:00', closes: '21:00' },
    { day: 'Wednesday', opens: '06:00', closes: '21:00' },
    { day: 'Thursday', opens: '06:00', closes: '21:00' },
    { day: 'Friday', opens: '06:00', closes: '21:00' },
    { day: 'Saturday', opens: '06:00', closes: '21:00' },
  ],
} as const;

export type BusinessDayHours = (typeof BUSINESS.hours)[number];

export function formattedAddress(separator = ', '): string {
  return [
    BUSINESS.streetAddress,
    `${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`,
  ].join(separator);
}

export function telHref(): string {
  return `tel:${BUSINESS.phoneTel}`;
}

export function directionsHref(): string {
  const destination = encodeURIComponent(
    `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`,
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export function mapsPlaceHref(): string {
  return `https://www.google.com/maps/place/?q=place_id:${BUSINESS.placeId}`;
}

export function mapsEmbedSrc(): string {
  return `https://www.google.com/maps?cid=${BUSINESS.mapsCid}&output=embed`;
}
