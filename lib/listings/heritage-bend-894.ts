/**
 * Featured listing: 894 Heritage Bend Drive, Las Vegas, NV 89138.
 * Facts and photo URLs pulled from the public RealScout listing record
 * on 2026-10-09 (MLS 2825123, GLVAR). Photos stay on the listing CDN.
 */
export type FeaturedListingPhoto = {
  id: string;
  url: string;
  room: string;
  alt: string;
};

export type FeaturedOpenHouse = {
  label: string;
  startLabel: string;
  endLabel: string;
};

export const HERITAGE_BEND_894 = {
  slug: '894-heritage-bend-drive',
  path: '/listings/894-heritage-bend-drive',
  realScoutUrl:
    'https://drjanduffy.realscout.com/homesearch/listings/p-894-heritage-bend-drive-las-vegas-89138-glvartrestle-177',
  virtualTourUrl: 'https://www.propertypanorama.com/instaview/las/2825123',
  street: '894 Heritage Bend Drive',
  city: 'Las Vegas',
  state: 'NV',
  postalCode: '89138',
  fullAddress: '894 Heritage Bend Drive, Las Vegas, NV 89138',
  price: 539888,
  priceFormatted: '$539,888',
  pricePerSqft: 437,
  status: 'Active',
  statusNote: 'New on site',
  beds: 2,
  baths: 2,
  sqft: 1234,
  lotSqftLabel: '5,227 sqft',
  yearBuilt: 2025,
  stories: 1,
  planName: 'Lennar Claremont',
  propertyType: 'Single Family Residence',
  architecturalStyle: 'One Story',
  subdivision: 'Summerlin Village 24 Parcel Fgh',
  community: 'Heritage at Stonebridge',
  county: 'Clark',
  mlsNumber: '2825123',
  mlsName: 'Greater Las Vegas Association of Realtors (GLVAR)',
  mlsLogoUrl: 'https://d2ygk8gs8v5c6g.cloudfront.net/logos/glvar.png',
  listDateLabel: 'October 6, 2026',
  daysOnSite: 0,
  daysOnSiteAsOf: 'October 9, 2026',
  latitude: 36.159388,
  longitude: -115.376698,
  listingAgentName: 'Janet G. Duffy',
  listingAgentLicense: 'S.0197614',
  listingOffice: 'BHHS Nevada Properties',
  listingAttribution: 'BHHS Nevada Properties, (702) 500-1955',
  disclaimer:
    '© 2026 Greater Las Vegas Association of Realtors (GLVAR). Information Deemed Reliable But Not Guaranteed.',
  associationName: 'Heritage Heights',
  associationFee: '$350',
  associationFeeFrequency: 'Monthly',
  associationFeeTotal: '$419',
  associationFeeTotalFrequency: 'Monthly',
  taxAnnualAmount: 1557,
  parcelNumber: '137-33-819-051',
  ageRestriction:
    'Heritage at Stonebridge is a guard-gated, 55+ age-restricted community in Summerlin West.',
  communityAmenities: [
    'Clubhouse',
    'Fitness center',
    'Heated lap pool',
    'Spa',
    'Pickleball courts',
    'Bocce',
    'Guard gate',
  ],
  schools: {
    elementary: 'Vassiliadis, Billy & Rosemary',
    middle: 'Rogich Sig',
    high: 'Palo Verde',
  },
  directions:
    'Take the 215W and exit onto Hughes Park Dr E. Turn left onto W Charleston Blvd. Turn right onto N Sky Vista Dr. Turn left onto Crossbridge Dr. Turn left onto Heritage Hts Dr and slight right toward Heritage Hts Dr. Turn right onto Heritage Hts Dr. At the traffic circle, turn right onto Heritage Bend Dr. The home is on the right.',
  remarks: [
    'Picture 6 a.m. at 894 Heritage Bend. The street is hushed, and the front-entry sitting area is the quietest spot in Heritage. Neighbors on their daily walk stop by for a morning coffee and a friendly hello. The owner added this charming retreat after buying in 2025, along with a paver patio, custom decorative gates, wall-to-wall garage cabinets, and custom closet shelving.',
    "Inside, the Lennar Claremont plan offers 2 bedrooms, 2 baths, and 1,234 SF of easy living. You'll love the open great room, the island kitchen made for gathering, and the walk-in primary closet.",
    "Heritage at Stonebridge is a guard-gated, 55+ age-restricted community in Summerlin West. Its amenities include a clubhouse, fitness center, heated lap pool, spa, pickleball courts, and bocce. Every built-in conveys, so there's nothing left to finish. Just move in and enjoy.",
  ],
  highlights: [
    '2 bedrooms, 2 baths, 1,234 sq ft on one story',
    'Built in 2025, Lennar Claremont plan',
    'Island kitchen, open great room, walk-in primary closet',
    'Paver patio, decorative gates, garage cabinets, and closet shelving',
    '2-car attached garage',
    'Community pool. No private pool.',
  ],
  openHouses: [
    {
      label: 'Saturday, October 10, 2026',
      startLabel: '12:00 PM',
      endLabel: '2:00 PM',
    },
    {
      label: 'Sunday, October 11, 2026',
      startLabel: '10:00 AM',
      endLabel: '12:00 PM',
    },
  ] satisfies FeaturedOpenHouse[],
  photos: [
    {
      id: '3878321838',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/e14fa7aa382184aba629d9dfb0e5949bab01d1de',
      room: 'Outside',
      alt: 'Outside 1 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321839',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/fa54161ac3329f063ec92e8f1056d726977c6961',
      room: 'Outside',
      alt: 'Outside 2 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321840',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/c0517048327f3d5d65af7c109aa85867ada79514',
      room: 'Outside',
      alt: 'Outside 3 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321841',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/1bbe3e8eeddd24cf87b9e6234706d84e472795a3',
      room: 'Kitchen',
      alt: 'Kitchen 1 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321842',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/08229214051f82f67f72124bb18a3f637dcc70b9',
      room: 'Kitchen',
      alt: 'Kitchen 2 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321843',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/0b089b6c891975adfc4753ac6e7673c8ce1e252d',
      room: 'Dining Room',
      alt: 'Dining Room 1 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321844',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/4594edb6282a5093eef80e1340ac50f839b6aa94',
      room: 'Dining Room',
      alt: 'Dining Room 2 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321845',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/22f80df9c330000e077e078eb652f49258bf36d0',
      room: 'Living Room',
      alt: 'Living Room 1 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321846',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/5e8b34b206f1e7fe99b488db4cb3cd6459d37906',
      room: 'Living Room',
      alt: 'Living Room 2 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321847',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/b3d408874c023dd63c56cf56594f469e88fe9912',
      room: 'Bedroom',
      alt: 'Bedroom at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321848',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/dedcb0167e15e2e584d2ff2ce4eb64e3c68213d2',
      room: 'Bathroom',
      alt: 'Bathroom 1 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321849',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/e106c3fef73e0e3533b27f55259b876ff6c21fa9',
      room: 'Closet',
      alt: 'Closet at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321850',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/87211ce35e8526db3c92e01afee1d8df7cbeddf6',
      room: 'Living Room',
      alt: 'Living Room 3 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321851',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/9fbbbcbf9adc0194db60a192b84b007553c37e1b',
      room: 'Bathroom',
      alt: 'Bathroom 2 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321852',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/c51905496d8f788491b2cc75a031e8bce7c204a5',
      room: 'Garage',
      alt: 'Garage at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321853',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/cdf461bc0dd9ca94bcbc81c4fc71ec01eb01b128',
      room: 'Laundry Area',
      alt: 'Laundry Area at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321854',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/11d080d873cc967901fdd78935d3cbc6e10318c7',
      room: 'Floor Plan',
      alt: 'Floor Plan 1 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321855',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/63eafddf70ae2ab3e4e3e1ad80547c8892cbd873',
      room: 'Floor Plan',
      alt: 'Floor Plan 2 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321856',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/ca8a556d1127e92ae16c85c8d313b4d10c594a1a',
      room: 'Surroundings',
      alt: 'Surroundings 1 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321857',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/12fc65c9cab41b5630acc509659489674d63ed7f',
      room: 'Surroundings',
      alt: 'Surroundings 2 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321858',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/2be0c9fdf977b4905ab4fc4de662a43a23de0392',
      room: 'Outside',
      alt: 'Outside 4 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321859',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/b941b459345b5312420fd0a4b7041e0bbfa7075b',
      room: 'Surroundings',
      alt: 'Surroundings 3 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321860',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/a832f6746d6e1a42cb2c468c166c04e4d8a72894',
      room: 'Outside',
      alt: 'Outside 5 at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
    {
      id: '3878321861',
      url: 'https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982/7d90f4b56da8da0d7315d2aaa70cb27d3251187e',
      room: 'Foyer/Entrance',
      alt: 'Foyer/Entrance at 894 Heritage Bend Drive, Summerlin West, Las Vegas',
    },
  ] satisfies FeaturedListingPhoto[],
} as const;

export type HeritageBendListing = typeof HERITAGE_BEND_894;
