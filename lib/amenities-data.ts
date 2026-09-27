import { COMMUNITY } from '@/lib/community';

export type AmenityCategoryId =
  | 'golf'
  | 'parks'
  | 'restaurants'
  | 'grocery'
  | 'shopping'
  | 'healthcare'
  | 'fitness'
  | 'cafes'
  | 'schools'
  | 'pharmacies'
  | 'parking';

export type CuratedAmenity = {
  name: string;
  category: AmenityCategoryId;
  schemaType: string;
  address: string;
  note?: string;
};

/** Category order tuned for luxury suburban Summerlin West (not 55+ or high-rise). */
export const AMENITY_CATEGORIES: {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) primary types for searchNearby */
  primaryTypes: string[];
  ariaLabel: string;
}[] = [
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Summerlin West',
  },
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
    ariaLabel: 'Show parks near Summerlin West',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Summerlin West',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Summerlin West',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall'],
    ariaLabel: 'Show shopping near Summerlin West',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show healthcare near Summerlin West',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym'],
    ariaLabel: 'Show fitness centers near Summerlin West',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe'],
    ariaLabel: 'Show cafes near Summerlin West',
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school'],
    ariaLabel: 'Show schools near Summerlin West',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy'],
    ariaLabel: 'Show pharmacies near Summerlin West',
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    ariaLabel: 'Show parking near Summerlin West',
  },
];

/** Verified destinations for fallback lists, copy, and ItemList schema (no invented ratings). */
export const CURATED_AMENITIES: CuratedAmenity[] = [
  {
    name: 'TPC Las Vegas',
    category: 'golf',
    schemaType: 'GolfCourse',
    address: '9851 Canyon Run Dr, Las Vegas, NV 89144',
  },
  {
    name: 'The Ridges Golf Club',
    category: 'golf',
    schemaType: 'GolfCourse',
    address: '1000 Ridges Pkwy, Las Vegas, NV 89135',
    note: 'Private club; guest access varies.',
  },
  {
    name: 'Red Rock Canyon National Conservation Area',
    category: 'parks',
    schemaType: 'Park',
    address: '1000 Scenic Loop Dr, Las Vegas, NV 89161',
  },
  {
    name: 'Downtown Summerlin',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
  },
  {
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    address: '657 N Town Center Dr, Las Vegas, NV 89144',
  },
  {
    name: 'Summerlin Library',
    category: 'parks',
    schemaType: 'Library',
    address: '1771 Inner Circle Dr, Las Vegas, NV 89134',
  },
  {
    name: 'Whole Foods Market',
    category: 'grocery',
    schemaType: 'GroceryStore',
    address: '8855 W Charleston Blvd, Las Vegas, NV 89117',
  },
  {
    name: 'Smith\'s Food and Drug',
    category: 'grocery',
    schemaType: 'GroceryStore',
    address: '9750 W Charleston Blvd, Las Vegas, NV 89147',
  },
  {
    name: 'Palo Verde High School',
    category: 'schools',
    schemaType: 'School',
    address: '333 S Pavilion Center Dr, Las Vegas, NV 89144',
    note: 'Confirm CCSD zoning for your address.',
  },
];

export const AMENITY_CATEGORY_COPY: Record<
  AmenityCategoryId,
  { heading: string; body: string }
> = {
  golf: {
    heading: 'Golf in Summerlin West',
    body:
      'TPC Las Vegas and village-adjacent courses sit minutes from many 89135 streets. Private clubs such as The Ridges require membership or guest policies—confirm access before you tour golf-front homes.',
  },
  parks: {
    heading: 'Parks, trails, and open desert',
    body:
      'Summerlin trail networks connect villages to parks and viewpoints. Red Rock Canyon National Conservation Area sits west of the community for hiking, scenic drives, and climbing—plan entry timing on busy weekends.',
  },
  restaurants: {
    heading: 'Dining near Summerlin West',
    body:
      'Downtown Summerlin anchors everyday dining with additional options along Charleston Boulevard and in village centers. Use the map to compare distance from the streets you are considering.',
  },
  grocery: {
    heading: 'Grocery and daily errands',
    body:
      'Residents typically shop along Charleston Boulevard and at Downtown Summerlin, with additional supermarkets within a short drive. Pair map results with your commute corridor.',
  },
  shopping: {
    heading: 'Shopping and services',
    body:
      'Downtown Summerlin is the primary outdoor retail district for Summerlin West, with apparel, home goods, and services in one walkable center.',
  },
  healthcare: {
    heading: 'Healthcare access',
    body:
      'Summerlin Hospital Medical Center on Town Center Drive is the closest full-service hospital for many Summerlin West addresses. Urgent care and specialty offices cluster along Charleston and Town Center.',
  },
  fitness: {
    heading: 'Fitness and wellness',
    body:
      'Gyms and studio fitness options sit along Charleston, Rampart, and inside Downtown Summerlin. HOA and village amenities may add pools and courts—verify with each listing.',
  },
  cafes: {
    heading: 'Cafes and coffee',
    body:
      'Coffee shops and casual cafes concentrate in Downtown Summerlin and along major corridors. The interactive map updates nearby options from Google Places when your API key is configured.',
  },
  schools: {
    heading: 'Schools serving Summerlin West',
    body:
      'Clark County School District assigns schools by residence. Palo Verde High School is a common reference point for the area—always verify zoning on the CCSD zoning site for your exact address.',
  },
  pharmacies: {
    heading: 'Pharmacies',
    body:
      'Chain pharmacies operate along Charleston Boulevard and inside major shopping centers. Use the map for the closest option to your shortlisted streets.',
  },
  parking: {
    heading: 'Parking near retail hubs',
    body:
      'Structured and surface parking is available at Downtown Summerlin and casino-resort destinations along Charleston. Strip visits usually mean paid parking or valet—plan accordingly.',
  },
};

export const COMMUTE_NOTES = [
  {
    destination: 'Downtown Summerlin',
    detail:
      'Many Summerlin West villages sit within an approximate 5–15 minute drive of Downtown Summerlin, depending on your street and traffic.',
  },
  {
    destination: 'Las Vegas Strip (mid-Strip area)',
    detail:
      'Mid-Strip resorts are roughly 20–35 minutes from Summerlin West in typical traffic, often via Charleston Boulevard or the 215 Beltway to I-15.',
  },
  {
    destination: 'Harry Reid International Airport',
    detail:
      'The airport is commonly reached in roughly 25–40 minutes from Summerlin West, depending on terminal and time of day.',
  },
  {
    destination: 'Summerlin Hospital Medical Center',
    detail:
      'Town Center Drive access is often about 10–20 minutes from western Summerlin West villages—confirm with a test drive from your listing.',
  },
];

export const AMENITIES_FAQ = [
  {
    question: `What grocery stores are near ${COMMUNITY.name}?`,
    answer:
      `Smith's, Whole Foods, and other supermarkets sit along Charleston Boulevard and near Downtown Summerlin, typically within a short drive of ZIP ${COMMUNITY.primaryZip} homes.`,
  },
  {
    question: `How far is ${COMMUNITY.name} from the Las Vegas Strip?`,
    answer:
      'Mid-Strip resorts are roughly 20–35 minutes away in typical traffic, often via Charleston Boulevard or the 215 Beltway to I-15—always verify at your departure time.',
  },
  {
    question: `Are there hospitals near ${COMMUNITY.name}?`,
    answer:
      'Summerlin Hospital Medical Center on Town Center Drive is the primary full-service hospital serving many Summerlin West addresses.',
  },
  {
    question: `What golf courses are near ${COMMUNITY.name}?`,
    answer:
      'TPC Las Vegas is the public PGA Tour venue west of the 215; The Ridges and other private clubs sit inside Summerlin West with membership or guest rules.',
  },
  {
    question: `Where do residents shop near ${COMMUNITY.name}?`,
    answer:
      'Downtown Summerlin at Festival Plaza Drive is the main outdoor shopping and dining district for Summerlin West daily life.',
  },
  {
    question: `How far is Harry Reid International Airport from ${COMMUNITY.name}?`,
    answer:
      'Drive time is commonly about 25–40 minutes depending on terminal, route, and traffic—plan extra time for peak departures.',
  },
  {
    question: `What outdoor recreation is near ${COMMUNITY.name}?`,
    answer:
      'Summerlin trails and village parks connect neighborhoods; Red Rock Canyon National Conservation Area sits immediately west for hiking and scenic drives.',
  },
  {
    question: `Who can help me tour homes near these amenities?`,
    answer:
      'Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties specializes in Summerlin West listings—call the number on this site to schedule showings.',
  },
];

export function curatedForCategory(
  category: AmenityCategoryId,
): CuratedAmenity[] {
  return CURATED_AMENITIES.filter((item) => item.category === category);
}
