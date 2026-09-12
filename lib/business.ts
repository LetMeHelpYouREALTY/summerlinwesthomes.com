/**
 * Google Business Profile NAP for this site.
 * Visible text, tel/sms links, and LocalBusiness JSON-LD must stay identical.
 *
 * Listing: Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy
 * 55+ / active-adult language refers to a Housing for Older Persons Act community.
 * Brokerage brand names are omitted from public copy and schema so Google
 * associates this site with the GBP listing, not a parent company.
 */
export const BUSINESS = {
  name: 'Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy',
  shortName: 'Sun City Summerlin 55+ Real Estate',
  tagline: 'Homes by Dr. Jan Duffy',
  license: 'S.0197614.LLC',
  streetAddress: '9406 Del Webb Boulevard',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89134',
  addressCountry: 'US',
  phoneDisplay: '(702) 718-0043',
  phoneTel: '+17027180043',
  phoneSchema: '+1-702-718-0043',
  email: 'info@summerlinwesthomes.com',
  gbpWebsite: 'https://www.suncityvegas.com',
  googleProfileUrl: 'https://g.page/r/CVIgC-30nTd3ECE',
  googleReviewsUrl: 'https://g.page/r/CVIgC-30nTd3ECE/review',
  foundingDate: '2013-09-20',
  /** Pin for 9406 Del Webb Blvd, Las Vegas, NV 89134 */
  latitude: 36.210683,
  longitude: -115.298354,
  hoursDisplay: 'Daily 6:00 AM – 9:00 PM',
  openingHours: ['Mo-Su 06:00-21:00'],
  description:
    'Dr. Jan Duffy represents buyers and sellers in Sun City Summerlin, a 55+ active-adult community in Las Vegas. Homes by Dr. Jan Duffy has focused on age-qualified Sun City Summerlin real estate since 2013, with 25+ years in active-adult communities. Golf courses, fitness centers, pools, walking trails, and clubs are part of the community amenities. Call (702) 718-0043.',
} as const;

export const BUSINESS_ADDRESS_LINE = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;

export const telHref = `tel:${BUSINESS.phoneTel}`;
export const smsHref = `sms:${BUSINESS.phoneTel}`;
export const mailtoHref = `mailto:${BUSINESS.email}`;

const mapsQuery = encodeURIComponent(BUSINESS_ADDRESS_LINE);

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;
export const googleReviewsUrl = BUSINESS.googleReviewsUrl;

export const SOCIAL_PROFILES = [
  BUSINESS.googleProfileUrl,
  'https://www.facebook.com/DrJanDuffyRealtorCentennialHills/',
  'https://www.instagram.com/drjanduffy/',
  'https://www.linkedin.com/company/lvrmembers/',
  'https://www.youtube.com/@DrDuffy',
  'https://x.com/drjanduffy',
  'https://www.tiktok.com/@dr.janduffy',
  BUSINESS.gbpWebsite,
] as const;

export const AREA_SERVED = [
  { '@type': 'State' as const, name: 'Nevada' },
  { '@type': 'City' as const, name: 'Las Vegas' },
  { '@type': 'City' as const, name: 'Henderson' },
  { '@type': 'City' as const, name: 'North Las Vegas' },
  { '@type': 'AdministrativeArea' as const, name: 'Clark County' },
  { '@type': 'Place' as const, name: 'Sun City Summerlin' },
  { '@type': 'Place' as const, name: 'Summerlin West' },
] as const;

export const AVAILABLE_LANGUAGES = [
  'English',
  'Spanish',
  'Arabic',
  'Cantonese',
  'Filipino',
  'American Sign Language',
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
