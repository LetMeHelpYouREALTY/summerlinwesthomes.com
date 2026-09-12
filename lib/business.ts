import { CANONICAL_SITE_URL } from '@/lib/site-url';

/**
 * Google Business Profile NAP for this site.
 * Visible text, tel/sms links, and LocalBusiness JSON-LD must stay identical.
 *
 * Listing: Summerlin Real Estate | Homes by Dr. Jan Duffy
 * Brokerage brand names are omitted from public copy and schema so Google
 * associates this site with the GBP listing, not a parent company.
 * Website / schema url: https://www.summerlinwesthomes.com
 */
export const BUSINESS = {
  name: 'Summerlin Real Estate | Homes by Dr. Jan Duffy',
  shortName: 'Summerlin Real Estate',
  tagline: 'Homes by Dr. Jan Duffy',
  license: 'S.0197614.LLC',
  streetAddress: '10777 West Twain Avenue # 333',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89135',
  addressCountry: 'US',
  phoneDisplay: '(702) 842-0410',
  phoneTel: '+17028420410',
  phoneSchema: '+1-702-842-0410',
  email: 'info@summerlinwesthomes.com',
  website: CANONICAL_SITE_URL,
  foundingDate: '2008-09-20',
  /** Building pin for 10777 W Twain Ave, Las Vegas, NV 89135 */
  latitude: 36.12278,
  longitude: -115.32664,
  hoursDisplay: 'Daily 6:00 AM – 9:00 PM',
  openingHours: ['Mo-Su 06:00-21:00'],
  description:
    'Summerlin Real Estate | Homes by Dr. Jan Duffy serves buyers, sellers, and investors across Summerlin, Las Vegas, Henderson, and Clark County. Services include luxury residential home sales, buyer representation, new construction sales, 55+ active adult community sales, investment property consulting, divorce and probate real estate, and relocation services. Specializing in The Ridges, Summerlin West, Red Rock Country Club, Sun City, and Del Webb communities.',
} as const;

export const BUSINESS_ADDRESS_LINE = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;

export const telHref = `tel:${BUSINESS.phoneTel}`;
export const smsHref = `sms:${BUSINESS.phoneTel}`;
export const mailtoHref = `mailto:${BUSINESS.email}`;

const mapsQuery = encodeURIComponent(
  `${BUSINESS.name} ${BUSINESS_ADDRESS_LINE}`,
);

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_ADDRESS_LINE)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_ADDRESS_LINE)}&output=embed`;
export const googleReviewsUrl = mapsUrl;

export const SOCIAL_PROFILES = [
  'https://www.facebook.com/RealtorDrJanDuffySummerlin',
  'https://www.instagram.com/drjanduffy/',
  'https://www.pinterest.com/DrJanDuffy/',
  'https://www.youtube.com/@DrDuffy',
  'https://twitter.com/drjanduffy',
  'https://www.tiktok.com/@dr.janduffy',
] as const;

export const AREA_SERVED = [
  { '@type': 'City' as const, name: 'Las Vegas' },
  { '@type': 'City' as const, name: 'Henderson' },
  { '@type': 'City' as const, name: 'North Las Vegas' },
  { '@type': 'AdministrativeArea' as const, name: 'Clark County' },
  { '@type': 'Place' as const, name: 'Summerlin' },
  { '@type': 'Place' as const, name: 'Summerlin West' },
  { '@type': 'Place' as const, name: 'Summerlin North' },
  { '@type': 'Place' as const, name: 'Summerlin South' },
  { '@type': 'Place' as const, name: 'Paradise' },
  { '@type': 'Place' as const, name: 'Enterprise' },
  { '@type': 'Place' as const, name: 'Spring Valley' },
  { '@type': 'Place' as const, name: 'The Ridges' },
  { '@type': 'Place' as const, name: 'Red Rock Country Club' },
  { '@type': 'Place' as const, name: 'Sun City' },
  { '@type': 'Place' as const, name: 'Del Webb' },
] as const;

export const SPECIAL_HOURS = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    validFrom: '2026-07-03',
    validThrough: '2026-07-04',
    opens: '00:00',
    closes: '00:00',
  },
] as const;
