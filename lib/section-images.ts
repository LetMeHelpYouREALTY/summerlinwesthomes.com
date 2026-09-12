export type HeadingImage = {
  src: string;
  alt: string;
};

const section = (file: string, alt: string): HeadingImage => ({
  src: `/images/sections/${file}`,
  alt,
});

export const headingImages = {
  h1: {
    home: {
      src: '/images/hero-summerlin-west-luxury-homes.jpg',
      alt: 'Luxury estate at dusk in Summerlin West Las Vegas with Red Rock Canyon beyond',
    },
    about: section(
      'h1-about.jpg',
      'Covered courtyard at a luxury Summerlin West Las Vegas estate',
    ),
    amenities: section(
      'h1-amenities.jpg',
      'Championship golf fairway in Summerlin West with Red Rock Canyon views',
    ),
    buying: section(
      'h1-buying.jpg',
      'Grand foyer inside a luxury Summerlin West Las Vegas home',
    ),
    valuation: section(
      'h1-valuation.jpg',
      'Luxury Summerlin West home exterior photographed for a market valuation',
    ),
    listings: section(
      'h1-listings.jpg',
      'Tree-lined street of luxury homes for sale in Summerlin West Las Vegas',
    ),
    market: section(
      'h1-market.jpg',
      'Aerial view of a master-planned Summerlin West Las Vegas neighborhood',
    ),
    marketSnapshot: section(
      'h1-market-snapshot.jpg',
      'Hillside view of Summerlin West homes, pools, and desert mountains',
    ),
    mortgage: section(
      'h1-mortgage.jpg',
      'House keys on a marble island in a luxury Las Vegas kitchen',
    ),
    search: section(
      'h1-search.jpg',
      'Open-concept luxury kitchen and great room in Summerlin West Las Vegas',
    ),
    schools: section(
      'h1-schools.jpg',
      'Modern desert campus architecture serving Summerlin West Las Vegas',
    ),
    schoolsCommute: section(
      'h1-schools-commute.jpg',
      'Campus walkway and landscaped boulevard in Summerlin West Las Vegas',
    ),
    sell: section(
      'h1-sell.jpg',
      'Twilight exterior of a luxury Summerlin West home prepared for listing',
    ),
    transport: section(
      'h1-transport.jpg',
      'Scenic desert highway west of Las Vegas toward Red Rock Canyon',
    ),
    villages: section(
      'h1-villages.jpg',
      'Guard-gated village entrance in Summerlin West Las Vegas',
    ),
    villagesCompare: section(
      'h1-villages-compare.jpg',
      'Two neighboring luxury homes on a Summerlin West village street',
    ),
  },
  h2: {
    homeValue: section(
      'h2-home-value.jpg',
      'Stone facade and entry of a luxury Summerlin West home',
    ),
    search: section(
      'h2-search.jpg',
      'Home office overlooking a Las Vegas desert golf course',
    ),
    listings: section(
      'h2-listings.jpg',
      'Luxury backyard pool and patio in Summerlin West Las Vegas',
    ),
    villages: section(
      'h2-villages.jpg',
      'Sunset street of luxury homes in a Summerlin West village',
    ),
    testimonials: section(
      'h2-testimonials.jpg',
      'Patio dining table facing desert mountains in Summerlin West',
    ),
    cta: section(
      'h2-cta.jpg',
      'Red Rock Canyon sandstone cliffs at sunset west of Las Vegas',
    ),
    financing: section(
      'h2-financing.jpg',
      'Notebook and house keys on a sunlit luxury kitchen island',
    ),
    selling: section(
      'h2-selling.jpg',
      'Staged living room with golf-course views in Summerlin West',
    ),
    schools: section(
      'h2-schools.jpg',
      'Contemporary campus courtyard in Las Vegas',
    ),
    amenities: section(
      'h2-amenities.jpg',
      'Golf, retail, and Red Rock Canyon lifestyle in Summerlin West',
    ),
    commute: section(
      'h2-commute.jpg',
      'Las Vegas beltway at golden hour with desert mountains ahead',
    ),
    market: section(
      'h2-market.jpg',
      'Hillside view of Summerlin West rooftops, pools, and mountains',
    ),
    guide: section(
      'h2-guide.jpg',
      'Guidebook on a table overlooking a luxury Las Vegas backyard',
    ),
    featured: section(
      'h2-featured.jpg',
      'Luxury living room looking out to a Summerlin West golf course',
    ),
    faq: section(
      'h2-faq.jpg',
      'Quiet reading room with desert light in a luxury Las Vegas home',
    ),
    consult: section(
      'h2-consult.jpg',
      'Consultation table in a luxury Las Vegas office with mountain views',
    ),
    geography: section(
      'h2-villages.jpg',
      'Summerlin West village street with desert mountains on the horizon',
    ),
  },
  h3: {
    downtown: {
      src: '/images/transport/downtown.jpg',
      alt: 'Las Vegas skyline at dusk from a west-valley corridor',
    },
    airport: {
      src: '/images/transport/airport.jpg',
      alt: 'Desert airport terminal and control tower at golden hour',
    },
    transit: {
      src: '/images/transport/transit.jpg',
      alt: 'Landscaped transit stop in an upscale Las Vegas shopping district',
    },
    arterial: {
      src: '/images/transport/arterial.jpg',
      alt: 'Palm-lined arterial boulevard through Summerlin West Las Vegas',
    },
    hub: {
      src: '/images/transport/hub.jpg',
      alt: 'Modern transit plaza with desert landscaping in Las Vegas',
    },
    scenic: {
      src: '/images/transport/scenic.jpg',
      alt: 'Red Rock Canyon scenic drive hugging sandstone cliffs',
    },
    highway: {
      src: '/images/transport/highway.jpg',
      alt: 'Multi-lane Las Vegas beltway toward desert mountains',
    },
    golf: {
      src: '/images/lifestyle/golf.jpg',
      alt: 'Golf green with Red Rock Canyon behind in Summerlin West',
    },
    outdoor: {
      src: '/images/lifestyle/outdoor.jpg',
      alt: 'Desert hiking trail toward red sandstone cliffs near Las Vegas',
    },
    shopping: {
      src: '/images/lifestyle/shopping.jpg',
      alt: 'Evening patio and boutique storefronts in Downtown Summerlin',
    },
    price: section(
      'h3-price.jpg',
      'Luxury Summerlin West home with circular driveway and desert landscaping',
    ),
    timing: section(
      'h3-timing.jpg',
      'Stone columns and entry of a luxury Summerlin West home',
    ),
    stats: section(
      'h3-stats.jpg',
      'Home office overlooking a master-planned Las Vegas neighborhood',
    ),
    search: section(
      'h3-search.jpg',
      'Kitchen island with a tablet and pool view in Summerlin West',
    ),
    ridges: section(
      'h3-ridges.jpg',
      'Ridge-top luxury estate with canyon views in Summerlin West',
    ),
    summit: section(
      'h3-summit.jpg',
      'Modern hillside home with glass walls and desert mountain views',
    ),
    countryClub: section(
      'h3-country-club.jpg',
      'Private golf community clubhouse and fairway in Summerlin West',
    ),
    vistas: section(
      'h3-vistas.jpg',
      'Established Summerlin West village with trails and two-story homes',
    ),
    stonebridge: section(
      'h3-stonebridge.jpg',
      'Newer desert-modern homes on a quiet Summerlin West street',
    ),
  },
  amenities: {
    tpcGolf: {
      src: '/images/amenities/tpc-golf.jpg',
      alt: 'Championship golf hole with water and Red Rock Canyon in Las Vegas',
    },
    redRock: {
      src: '/images/amenities/red-rock.jpg',
      alt: 'Red Rock Canyon sandstone cliffs and scenic desert road',
    },
    downtownSummerlin: {
      src: '/images/amenities/downtown-summerlin.jpg',
      alt: 'Palm-lined plaza at Downtown Summerlin in Las Vegas',
    },
    ridgesGolf: {
      src: '/images/amenities/ridges-golf.jpg',
      alt: 'Private golf clubhouse on a ridge in Summerlin West Las Vegas',
    },
    hospital: {
      src: '/images/amenities/summerlin-hospital.jpg',
      alt: 'Modern medical campus exterior in Summerlin Las Vegas',
    },
    casino: {
      src: '/images/amenities/red-rock-casino.jpg',
      alt: 'Luxury west Las Vegas resort exterior at dusk',
    },
    library: {
      src: '/images/amenities/summerlin-library.jpg',
      alt: 'Contemporary public library exterior in Summerlin Las Vegas',
    },
    summitClub: {
      src: '/images/amenities/summit-club.jpg',
      alt: 'Fine-dining room with panoramic mountain views in Summerlin West',
    },
  },
  schools: {
    high: {
      src: '/images/schools/high.jpg',
      alt: 'Public high school campus and athletic field in Las Vegas',
    },
    middle: {
      src: '/images/schools/middle.jpg',
      alt: 'Middle school courtyard and classroom buildings in Las Vegas',
    },
    elementary: {
      src: '/images/schools/elementary.jpg',
      alt: 'Elementary campus buildings and playground in Las Vegas',
    },
    private: {
      src: '/images/schools/private.jpg',
      alt: 'Private school campus buildings and landscaped quad in Las Vegas',
    },
    collegePrep: {
      src: '/images/schools/college-prep.jpg',
      alt: 'College-preparatory academic building in Las Vegas',
    },
  },
} as const;
