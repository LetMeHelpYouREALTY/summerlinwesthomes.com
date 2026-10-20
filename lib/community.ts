/**
 * Hyperlocal anchor for Summerlin West (master-planned west Las Vegas, ZIP 89135).
 * Map center: Downtown Summerlin (1980 Festival Plaza Dr) — the primary retail/dining
 * hub for Summerlin West. Coordinates match Google's geocode for that address (~36.1518, -115.3339).
 */
export const COMMUNITY = {
  name: 'Summerlin West',
  city: 'Las Vegas',
  state: 'NV',
  stateCode: 'NV',
  primaryZip: '89135',
  center: {
    lat: 36.151786,
    lng: -115.333336,
    label: 'Downtown Summerlin',
    streetAddress: '1980 Festival Plaza Dr',
    fullAddress: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
  },
  mapDefaultZoom: 14,
  searchRadiusMeters: 8000,
} as const;

export function communityMapEmbedSrc(): string {
  const { lat, lng } = COMMUNITY.center;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${COMMUNITY.mapDefaultZoom}&output=embed`;
}

export function communityDirectionsQuery(): string {
  return encodeURIComponent(COMMUNITY.center.fullAddress);
}
