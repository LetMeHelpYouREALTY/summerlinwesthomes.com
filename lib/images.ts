/**
 * Image delivery: Cloudflare Images is primary when configured;
 * git-backed files in /public/images are the always-on fallback.
 *
 * Do not orange-cloud the Vercel apex. Serve optimized media from
 * imagedelivery.net (Cloudflare Images) while the app stays on Vercel.
 */
export type SiteImageId =
  | 'hero-home'
  | 'hero-about'
  | 'hero-villages'
  | 'hero-listings'
  | 'hero-search'
  | 'hero-market'
  | 'hero-valuation'
  | 'hero-sell'
  | 'hero-buying'
  | 'hero-mortgage'
  | 'hero-schools'
  | 'hero-amenities'
  | 'hero-transportation'
  | 'hero-villages-comparison'
  | 'hero-schools-commute'
  | 'section-red-rock'
  | 'section-golf'
  | 'section-downtown-summerlin'
  | 'section-luxury-interior'
  | 'section-new-construction'
  | 'h3-downtown-skyline'
  | 'h3-airport'
  | 'h3-pool-patio'
  | 'h3-trail'
  | 'h3-office'
  | 'h3-entry'
  | 'h3-hospital'
  | 'h3-casino'
  | 'h3-library'
  | 'h3-school'
  | 'og-default';

export type SiteImageMeta = {
  id: SiteImageId;
  alt: string;
  heading: string;
  localPath: string;
  width: number;
  height: number;
};

/** Optional Cloudflare Images IDs, populated after `npm run images:upload-cf`. */
export const CLOUDFLARE_IMAGE_IDS: Partial<Record<SiteImageId, string>> = {
  // Example after upload: 'hero-home': 'summerlin-hero-home',
};

export const SITE_IMAGES: Record<SiteImageId, SiteImageMeta> = {
  'hero-home': {
    id: 'hero-home',
    heading: 'Your Summerlin legacy. Summerlin homes for sale in Las Vegas.',
    alt: 'Luxury Summerlin West Las Vegas home at sunset with Red Rock Canyon mountains behind it',
    localPath: '/images/hero-home.jpg',
    width: 1280,
    height: 720,
  },
  'hero-about': {
    id: 'hero-about',
    heading: 'Summerlin West real estate listings and local expertise',
    alt: 'Downtown Summerlin Las Vegas mixed-use buildings near West Twain Avenue',
    localPath: '/images/hero-about.jpg',
    width: 1280,
    height: 720,
  },
  'hero-villages': {
    id: 'hero-villages',
    heading: 'Homes for sale in Las Vegas Summerlin — village guide',
    alt: 'Aerial view of a Summerlin West master-planned village with desert landscaping and mountain views',
    localPath: '/images/hero-villages.jpg',
    width: 1280,
    height: 720,
  },
  'hero-listings': {
    id: 'hero-listings',
    heading: 'Summerlin homes for sale | real estate listings in Las Vegas',
    alt: 'Modern luxury home exterior listed in Summerlin West Las Vegas',
    localPath: '/images/hero-listings.jpg',
    width: 1280,
    height: 720,
  },
  'hero-search': {
    id: 'hero-search',
    heading: 'Search homes for sale in Summerlin West Las Vegas',
    alt: 'Luxury kitchen and patio in a Summerlin West home with mountain light',
    localPath: '/images/hero-search.jpg',
    width: 1280,
    height: 720,
  },
  'hero-market': {
    id: 'hero-market',
    heading: 'Summerlin West market snapshot and listing trends',
    alt: 'Quiet luxury neighborhood street in Summerlin West Las Vegas',
    localPath: '/images/hero-market.jpg',
    width: 1280,
    height: 720,
  },
  'hero-valuation': {
    id: 'hero-valuation',
    heading: 'Las Vegas homes — Summerlin West value and pricing',
    alt: 'Luxury desert home at dusk in Summerlin West Las Vegas',
    localPath: '/images/hero-valuation.jpg',
    width: 1280,
    height: 720,
  },
  'hero-sell': {
    id: 'hero-sell',
    heading: 'Sell your Summerlin West home',
    alt: 'Staged luxury living room in Summerlin West looking out to a pool and mountains',
    localPath: '/images/hero-sell.jpg',
    width: 1280,
    height: 720,
  },
  'hero-buying': {
    id: 'hero-buying',
    heading: 'Houses for sale in Summerlin Las Vegas buyer guide',
    alt: 'Buyer approaching a modern Summerlin West Las Vegas home for a showing',
    localPath: '/images/hero-buying.jpg',
    width: 1280,
    height: 720,
  },
  'hero-mortgage': {
    id: 'hero-mortgage',
    heading: 'Mortgage payment calculator for Summerlin West homes',
    alt: 'Contemporary luxury home facade in west Las Vegas with desert landscaping',
    localPath: '/images/hero-mortgage.jpg',
    width: 1280,
    height: 720,
  },
  'hero-schools': {
    id: 'hero-schools',
    heading: 'Schools serving Summerlin West Las Vegas',
    alt: 'Modern school campus architecture in west Las Vegas with desert landscaping',
    localPath: '/images/hero-schools.jpg',
    width: 1280,
    height: 720,
  },
  'hero-amenities': {
    id: 'hero-amenities',
    heading: 'Las Vegas homes near Summerlin West amenities',
    alt: 'Golf course fairway in west Las Vegas with Red Rock Canyon mountains',
    localPath: '/images/hero-amenities.jpg',
    width: 1280,
    height: 720,
  },
  'hero-transportation': {
    id: 'hero-transportation',
    heading: 'Transportation and Las Vegas access from Summerlin West',
    alt: 'West Las Vegas beltway curving toward Red Rock Canyon at golden hour',
    localPath: '/images/hero-transportation.jpg',
    width: 1280,
    height: 720,
  },
  'hero-villages-comparison': {
    id: 'hero-villages-comparison',
    heading: 'Compare Summerlin West villages',
    alt: 'Two Summerlin West village streetscapes with golf-course and newer desert homes',
    localPath: '/images/hero-villages-comparison.jpg',
    width: 1280,
    height: 720,
  },
  'hero-schools-commute': {
    id: 'hero-schools-commute',
    heading: 'Schools, commute, and amenities planning guide',
    alt: 'Desert trail and park near Red Rock Canyon used by Summerlin West residents',
    localPath: '/images/hero-schools-commute.jpg',
    width: 1280,
    height: 720,
  },
  'section-red-rock': {
    id: 'section-red-rock',
    heading: 'Red Rock Canyon views from Summerlin West',
    alt: 'Red Rock Canyon sandstone cliffs at sunrise from a west Las Vegas ridgeline',
    localPath: '/images/section-red-rock.jpg',
    width: 1280,
    height: 720,
  },
  'section-golf': {
    id: 'section-golf',
    heading: 'Golf and recreation in Summerlin West',
    alt: 'Golf green and bunker in Summerlin West with desert mountains beyond',
    localPath: '/images/section-golf.jpg',
    width: 1280,
    height: 720,
  },
  'section-downtown-summerlin': {
    id: 'section-downtown-summerlin',
    heading: 'Shopping and dining at Downtown Summerlin',
    alt: 'Downtown Summerlin outdoor promenade with desert-modern architecture',
    localPath: '/images/section-downtown-summerlin.jpg',
    width: 1280,
    height: 720,
  },
  'section-luxury-interior': {
    id: 'section-luxury-interior',
    heading: 'Luxury interiors in Summerlin West homes',
    alt: 'Luxury primary suite in Summerlin West with mountain views through glass walls',
    localPath: '/images/section-luxury-interior.jpg',
    width: 1280,
    height: 720,
  },
  'section-new-construction': {
    id: 'section-new-construction',
    heading: 'Newer Summerlin West villages and construction',
    alt: 'Newer construction luxury homes in a Summerlin West village',
    localPath: '/images/section-new-construction.jpg',
    width: 1280,
    height: 720,
  },
  'h3-downtown-skyline': {
    id: 'h3-downtown-skyline',
    heading: 'Commute from Summerlin West to Downtown Las Vegas',
    alt: 'Las Vegas skyline at dusk seen from the west valley',
    localPath: '/images/h3-downtown-skyline.jpg',
    width: 1280,
    height: 720,
  },
  'h3-airport': {
    id: 'h3-airport',
    heading: 'Airport access from Summerlin West',
    alt: 'Desert airport terminal exterior in Las Vegas at golden hour',
    localPath: '/images/h3-airport.jpg',
    width: 1280,
    height: 720,
  },
  'h3-pool-patio': {
    id: 'h3-pool-patio',
    heading: 'Tour a Summerlin West backyard and patio',
    alt: 'Luxury Summerlin West pool and covered patio at twilight',
    localPath: '/images/h3-pool-patio.jpg',
    width: 1280,
    height: 720,
  },
  'h3-trail': {
    id: 'h3-trail',
    heading: 'Trails and Red Rock recreation near Summerlin West',
    alt: 'Desert hiking trail toward Red Rock Canyon sandstone cliffs',
    localPath: '/images/h3-trail.jpg',
    width: 1280,
    height: 720,
  },
  'h3-office': {
    id: 'h3-office',
    heading: 'Google Business Profile office on West Twain Avenue',
    alt: 'Mixed-use office plaza in Downtown Summerlin at evening',
    localPath: '/images/h3-office.jpg',
    width: 1280,
    height: 720,
  },
  'h3-entry': {
    id: 'h3-entry',
    heading: 'Summerlin West home entry and desert landscaping',
    alt: 'Stone entry and desert plants at a Summerlin West luxury home',
    localPath: '/images/h3-entry.jpg',
    width: 1152,
    height: 864,
  },
  'h3-hospital': {
    id: 'h3-hospital',
    heading: 'Healthcare access from Summerlin West',
    alt: 'Desert hospital campus in west Las Vegas with mountain views',
    localPath: '/images/h3-hospital.jpg',
    width: 1280,
    height: 720,
  },
  'h3-casino': {
    id: 'h3-casino',
    heading: 'Red Rock resort and entertainment near Summerlin West',
    alt: 'Desert casino-resort hotel exterior in west Las Vegas at dusk',
    localPath: '/images/h3-casino.jpg',
    width: 1280,
    height: 720,
  },
  'h3-library': {
    id: 'h3-library',
    heading: 'Library and civic amenities in Summerlin West',
    alt: 'Contemporary public library exterior in Summerlin West Las Vegas',
    localPath: '/images/h3-library.jpg',
    width: 1280,
    height: 720,
  },
  'h3-school': {
    id: 'h3-school',
    heading: 'Campuses serving Summerlin West homes',
    alt: 'Modern west Las Vegas school campus with desert landscaping',
    localPath: '/images/h3-school.jpg',
    width: 1280,
    height: 720,
  },
  'og-default': {
    id: 'og-default',
    heading: 'Summerlin Real Estate | Homes by Dr. Jan Duffy',
    alt: 'Luxury Summerlin West homes against Red Rock Canyon at sunset',
    localPath: '/images/og-image-summerlin-west-homes.jpg',
    width: 1200,
    height: 630,
  },
};

export function cloudflareImagesHash(): string {
  return process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() ?? '';
}

export function imageSrc(
  id: SiteImageId,
  variant: 'public' | `w=${number}` = 'public',
): string {
  const hash = cloudflareImagesHash();
  const cfId = CLOUDFLARE_IMAGE_IDS[id];
  if (hash && cfId) {
    return `https://imagedelivery.net/${hash}/${cfId}/${variant}`;
  }
  return SITE_IMAGES[id].localPath;
}

export function imageMeta(id: SiteImageId): SiteImageMeta {
  return SITE_IMAGES[id];
}
