/**
 * Google Business Profile NAP for Summerlin West Homes.
 * Visible text, tel links, and LocalBusiness JSON-LD must stay identical.
 */
export const BUSINESS = {
  name: 'Summerlin West Homes',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  license: 'S.0197614.LLC',
  streetAddress: '10777 W Twain Ave #333',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89135',
  addressCountry: 'US',
  phoneDisplay: '(702) 842-0410',
  phoneTel: '+17028420410',
  phoneSchema: '+1-702-842-0410',
  email: 'info@summerlinwesthomes.com',
  /** Google Places pin for 10777 W Twain Ave #333, Las Vegas, NV 89135 */
  latitude: 36.122868,
  longitude: -115.3268384,
  hoursDisplay: 'Daily 6:00 AM – 9:00 PM',
  openingHours: ['Mo-Su 06:00-21:00'],
} as const;

export const BUSINESS_ADDRESS_LINE = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;

export const telHref = `tel:${BUSINESS.phoneTel}`;
export const mailtoHref = `mailto:${BUSINESS.email}`;

const mapsQuery = encodeURIComponent(BUSINESS_ADDRESS_LINE);

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;
