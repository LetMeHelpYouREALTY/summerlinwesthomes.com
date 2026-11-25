/**
 * Stock photos used on the home page (added 2026-11-23, preview branch).
 * All are from Pexels under the Pexels License (https://www.pexels.com/license/):
 * free for website use, attribution not required, no people, text or logos.
 * Checked by eye on 2026-11-23. Replace with Dr. Jan's own Summerlin photos when available.
 */
export type StockPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  source: string;
  photographer: string;
};

export const STOCK_PHOTOS = {
  heroRedRock: {
    src: 'https://images.pexels.com/photos/35553913/pexels-photo-35553913.jpeg',
    alt: 'Red Rock Canyon sandstone peak above a desert trail west of Las Vegas',
    width: 4080,
    height: 3072,
    source: 'https://www.pexels.com/photo/rugged-landscape-of-red-rock-canyon-35553913/',
    photographer: 'Annalise Tingler',
  },
  redRockClouds: {
    src: 'https://images.pexels.com/photos/35553909/pexels-photo-35553909.jpeg',
    alt: 'Clouds over the Red Rock Canyon escarpment with desert plants in front',
    width: 4080,
    height: 3072,
    source: 'https://www.pexels.com/photo/35553909/',
    photographer: 'Annalise Tingler',
  },
  redRockTrail: {
    src: 'https://images.pexels.com/photos/36559824/pexels-photo-36559824.jpeg',
    alt: 'Red sandstone outcrop and desert valley in Red Rock Canyon under a clear sky',
    width: 4284,
    height: 5712,
    source: 'https://www.pexels.com/photo/stunning-red-rock-canyon-landscape-in-nevada-36559824/',
    photographer: 'Petra Nesti',
  },
} satisfies Record<string, StockPhoto>;
