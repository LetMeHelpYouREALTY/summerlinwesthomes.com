import { mediaUrl } from '@/lib/media-url';

export type HeadingImage = {
  src: string;
  alt: string;
};

export function duffy(slot: string, topic: string): HeadingImage {
  return {
    src: mediaUrl(`/images/dr-duffy/${slot}.jpg`),
    alt: `Dr. Jan Duffy of Summerlin Real Estate in Las Vegas, ${topic}`,
  };
}

export const headingImages = {
  header: duffy(
    'header-portrait',
    'office portrait for the site header',
  ),
  h1: {
    home: duffy('h1-home', 'homepage hero for Summerlin homes'),
    about: duffy('h1-about', 'about the Las Vegas office'),
    amenities: duffy('h1-amenities', 'Summerlin amenities guidance'),
    buying: duffy('h1-buying', 'home buying guidance'),
    valuation: duffy('h1-valuation', 'home valuation consults'),
    listings: duffy('h1-listings', 'current listings'),
    market: duffy('h1-market', 'market data'),
    marketSnapshot: duffy('h1-market-snapshot', 'market snapshot'),
    mortgage: duffy('h1-mortgage', 'mortgage planning'),
    search: duffy('h1-search', 'home search'),
    schools: duffy('h1-schools', 'school and commute planning'),
    schoolsCommute: duffy('h1-schools-commute', 'schools, commute, and amenities'),
    sell: duffy('h1-sell', 'home selling'),
    transport: duffy('h1-transport', 'transportation and access'),
    villages: duffy('h1-villages', 'Summerlin villages'),
    villagesCompare: duffy('h1-villages-compare', 'village comparison'),
    office: duffy('h1-office', 'Twain Avenue office'),
    services: duffy('h1-services', 'real estate services'),
    sunCity: duffy('h1-sun-city', 'Sun City and Del Webb 55+ sales'),
  },
  h2: {
    homeValue: duffy('h2-home-value', 'home value section'),
    search: duffy('h2-search', 'search section'),
    listings: duffy('h2-listings', 'listings section'),
    villages: duffy('h2-villages', 'villages section'),
    testimonials: duffy('h2-testimonials', 'Google reviews section'),
    cta: duffy('h2-cta', 'call-to-action section'),
    financing: duffy('h2-financing', 'financing section'),
    selling: duffy('h2-selling', 'selling section'),
    schools: duffy('h2-schools', 'schools section'),
    amenities: duffy('h2-amenities', 'amenities section'),
    commute: duffy('h2-commute', 'commute section'),
    market: duffy('h2-market', 'market section'),
    guide: duffy('h2-guide', 'buyer and seller guide'),
    featured: duffy('h2-featured', 'featured listings'),
    faq: duffy('h2-faq', 'frequently asked questions'),
    consult: duffy('h2-consult', 'consultation section'),
    geography: duffy('h2-geography', 'west-valley geography'),
  },
  h3: {
    downtown: duffy('h3-downtown', 'downtown Las Vegas access'),
    airport: duffy('h3-airport', 'airport access'),
    transit: duffy('h3-transit', 'transit options'),
    arterial: duffy('h3-arterial', 'arterial roads'),
    hub: duffy('h3-hub', 'west-valley hubs'),
    scenic: duffy('h3-scenic', 'scenic desert drives'),
    highway: duffy('h3-highway', 'beltway commuting'),
    golf: duffy('h3-golf', 'golf communities'),
    outdoor: duffy('h3-outdoor', 'outdoor recreation'),
    shopping: duffy('h3-shopping', 'Summerlin shopping'),
    price: duffy('h3-price', 'pricing context'),
    timing: duffy('h3-timing', 'timing a sale or purchase'),
    stats: duffy('h3-stats', 'market statistics'),
    search: duffy('h3-search', 'listing search tools'),
    ridges: duffy('h3-ridges', 'The Ridges'),
    summit: duffy('h3-summit', 'The Summit'),
    countryClub: duffy('h3-country-club', 'Red Rock Country Club'),
    vistas: duffy('h3-vistas', 'Summerlin village living'),
    stonebridge: duffy('h3-stonebridge', 'newer Summerlin villages'),
  },
  amenities: {
    tpcGolf: duffy('amenities-tpc-golf', 'TPC golf in Summerlin'),
    redRock: duffy('amenities-red-rock', 'Red Rock Canyon access'),
    downtownSummerlin: duffy(
      'amenities-downtown-summerlin',
      'Downtown Summerlin',
    ),
    ridgesGolf: duffy('amenities-ridges-golf', 'The Ridges golf'),
    hospital: duffy('amenities-hospital', 'nearby medical campuses'),
    casino: duffy('amenities-casino', 'west-valley resort amenities'),
    library: duffy('amenities-library', 'Summerlin library access'),
    summitClub: duffy('amenities-summit-club', 'The Summit Club area'),
  },
  schools: {
    high: duffy('schools-high', 'high school zoning and commute'),
    middle: duffy('schools-middle', 'middle school commute'),
    elementary: duffy('schools-elementary', 'elementary school commute'),
    private: duffy('schools-private', 'private school options'),
    collegePrep: duffy('schools-college-prep', 'college-prep campuses'),
  },
} as const;
