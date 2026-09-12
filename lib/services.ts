import { headingImages, type HeadingImage } from '@/lib/section-images';
import { BUSINESS } from '@/lib/business';

export type ServiceGroupId =
  | 'buyers'
  | 'sellers'
  | 'land'
  | 'commercial'
  | 'rentals';

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  group: ServiceGroupId;
  summary: string;
  intro: string;
  points: readonly string[];
  faqs: readonly ServiceFaq[];
  relatedHref: string;
  relatedLabel: string;
  image: HeadingImage;
};

export const SERVICE_GROUPS: readonly {
  id: ServiceGroupId;
  title: string;
  blurb: string;
}[] = [
  {
    id: 'buyers',
    title: 'Buyer services',
    blurb:
      'Representation, market analysis, and relocation support for Summerlin West and west Las Vegas purchases.',
  },
  {
    id: 'sellers',
    title: 'Seller services',
    blurb:
      'Listing strategy, marketing, photography, and staging for homes and condos headed to market.',
  },
  {
    id: 'land',
    title: 'Land and new construction',
    blurb:
      'Lots, land contracts, and builder inventory across Summerlin West villages.',
  },
  {
    id: 'commercial',
    title: 'Commercial and investment',
    blurb:
      'Retail, office, warehouse, and development work for owners and investors.',
  },
  {
    id: 'rentals',
    title: 'Rentals and property management',
    blurb:
      'Leasing, furnished stays, and day-to-day management for Summerlin West properties.',
  },
];

export const SERVICES: readonly Service[] = [
  {
    slug: 'appraisals',
    name: 'Appraisals',
    group: 'buyers',
    summary:
      'CMA work that weighs location, size, condition, and recent Summerlin West sales so you can price or bid with current data.',
    intro:
      'Appraisal and market-analysis support starts with comparable sales, not adjectives. We review lot size, interior condition, HOA dues, and closed prices in the same village so buyers and sellers see a number they can defend.',
    points: [
      'Comparable sales pulled from current Las Vegas MLS activity',
      'Adjustments for square footage, lot, and condition',
      'Written CMA you can use before listing or writing an offer',
    ],
    faqs: [
      {
        question: 'Is a CMA the same as a licensed appraisal?',
        answer:
          'No. A CMA is a market snapshot from recent sales. A licensed appraisal is ordered through a lender or third-party appraiser when a loan requires it.',
      },
      {
        question: 'How current is the sales data?',
        answer:
          'We use the newest closed and pending comps in Summerlin West and adjacent 89135 inventory, then flag older sales that should carry less weight.',
      },
    ],
    relatedHref: '/home-valuation',
    relatedLabel: 'Summerlin West home value context',
    image: headingImages.h1.valuation,
  },
  {
    slug: 'comparative-real-estate-market-analysis',
    name: 'Comparative real estate market analysis',
    group: 'buyers',
    summary:
      'Side-by-side CMA reporting for Summerlin West villages so you can compare price, days on market, and inventory pressure.',
    intro:
      'A comparative market analysis stacks nearby sales against the home you want to buy or sell. We break out village, year built, and finish level so one outlier does not set the number.',
    points: [
      'Village-level comps instead of valley-wide averages',
      'Active, pending, and closed inventory on one sheet',
      'Clear range you can take into negotiations',
    ],
    faqs: [
      {
        question: 'When should I request a CMA?',
        answer:
          'Request one before listing, before writing an offer, and after a price change on nearby homes that could shift your range.',
      },
      {
        question: 'Do you include HOA and assessment data?',
        answer:
          'Yes. Dues, remaining assessments, and amenity access change net monthly cost and should sit next to the sale price.',
      },
    ],
    relatedHref: '/market-data',
    relatedLabel: 'Summerlin West market data',
    image: headingImages.h2.market,
  },
  {
    slug: 'buying-agent-services',
    name: 'Buying agent services',
    group: 'buyers',
    summary:
      'Buyer representation for Summerlin West and Las Vegas MLS search, from first filter set through closing.',
    intro:
      'Buying-agent work here is local MLS search plus village-level touring. We map commute times, HOA rules, and current list prices so you tour homes that already fit the brief.',
    points: [
      'Live listing search across Summerlin West villages',
      'Offer strategy based on recent pendings, not list price alone',
      'Inspection, appraisal, and closing coordination',
    ],
    faqs: [
      {
        question: 'Do I need a buyer agent if listings are online?',
        answer:
          'Public search shows photos. A buyer agent adds contract terms, comp context, and access to coming-soon or private inventory when available.',
      },
      {
        question: 'Can you work with out-of-state buyers?',
        answer:
          'Yes. Video tours, digital disclosures, and scheduled in-person trips are standard for relocation buyers.',
      },
    ],
    relatedHref: '/buying-guide',
    relatedLabel: 'Las Vegas home buying guide',
    image: headingImages.h1.buying,
  },
  {
    slug: 'first-time-home-buyer-services',
    name: 'First-time home buyer services',
    group: 'buyers',
    summary:
      'First-purchase support covering pre-approval timing, village selection, and a paced Summerlin West search.',
    intro:
      'First-time buyers get a shorter checklist: lender intro, budget that includes HOA, and a search radius that matches commute and outdoor access. We keep tours limited so you compare a few real options instead of twenty listings.',
    points: [
      'Budget that includes taxes, insurance, and HOA',
      'Tour plans that compare 3–5 homes, not an open-ended loop',
      'Contract language explained in plain terms before you sign',
    ],
    faqs: [
      {
        question: 'Do first-time buyers need a large down payment in Summerlin West?',
        answer:
          'Down-payment rules depend on the loan program. We introduce lenders who can outline FHA, conventional, and other options against the homes you actually want to tour.',
      },
      {
        question: 'How long does a first purchase usually take?',
        answer:
          'Search time varies. Once an offer is accepted, many financed purchases close in about 30 days if the appraisal and title work stay on schedule.',
      },
    ],
    relatedHref: '/buying-guide',
    relatedLabel: 'Buyer guide for Summerlin West',
    image: headingImages.h2.guide,
  },
  {
    slug: 'home-buying-sales',
    name: 'Home buying & sales',
    group: 'buyers',
    summary:
      'End-to-end help whether you are purchasing a Summerlin West home or listing one on the Las Vegas MLS.',
    intro:
      'Home buying and sales coverage is the core brokerage work: search, pricing, marketing, and closing. One team can represent a purchase, a sale, or a same-week move between two Summerlin West addresses.',
    points: [
      'Buyer search through live MLS inventory',
      'Seller prep, pricing, and listing launch',
      'Timeline planning when you need to sell and buy together',
    ],
    faqs: [
      {
        question: 'Can you represent both a sale and a purchase?',
        answer:
          'Yes. Dual-move clients get a shared calendar for listing photos, showings, and the purchase inspection so dates do not collide.',
      },
      {
        question: 'Where do I start if I am unsure whether to buy or sell first?',
        answer:
          'Start with a CMA and a lender conversation. Those two numbers tell you whether a contingent sale, a bridge plan, or a purchase-first path fits.',
      },
    ],
    relatedHref: '/properties/search',
    relatedLabel: 'Search Summerlin West homes',
    image: headingImages.h1.listings,
  },
  {
    slug: 'condo-buying-sales-assistance',
    name: 'Condo buying & sales assistance',
    group: 'buyers',
    summary:
      'Condo and townhome representation with HOA document review, reserve questions, and resale or purchase strategy.',
    intro:
      'Condo work in Summerlin and west Las Vegas turns on HOA health as much as interior finish. We review budgets, reserves, rental caps, and special assessments before you write or list.',
    points: [
      'HOA resale packets and budget review',
      'Rental-cap and occupancy-rule checks',
      'Pricing against similar stacks and floor plans',
    ],
    faqs: [
      {
        question: 'What condo documents should I read before an offer?',
        answer:
          'CC&Rs, the current budget, reserve study, meeting minutes, and any pending assessment. Those files show monthly cost and upcoming projects.',
      },
      {
        question: 'Are Summerlin condos a different search than single-family homes?',
        answer:
          'Yes. Filters, HOA fees, and parking rules differ. We search condo and townhome inventory separately so the monthly number stays honest.',
      },
    ],
    relatedHref: '/properties/search',
    relatedLabel: 'Search condos and townhomes',
    image: headingImages.h1.search,
  },
  {
    slug: 'relocation-assistance',
    name: 'Relocation assistance',
    group: 'buyers',
    summary:
      'Move-in planning for buyers coming to Summerlin West: village shortlists, tour calendars, and local logistics.',
    intro:
      'Relocation is a compressed search. We send a village shortlist, commute notes, and a two- or three-day tour calendar so you are not guessing from photos alone.',
    points: [
      'Village shortlist matched to commute and outdoor access',
      'Grouped tours to limit days on the ground',
      'Vendor intros for movers, insurance, and utilities',
    ],
    faqs: [
      {
        question: 'Can you tour homes before I arrive?',
        answer:
          'Yes. We can walk properties on video, then hold a tight in-person slate once you land in Las Vegas.',
      },
      {
        question: 'Do you help with temporary housing?',
        answer:
          'We can point you to furnished and short-term options while a purchase is in escrow. Availability changes weekly.',
      },
    ],
    relatedHref: '/villages',
    relatedLabel: 'Compare Summerlin West villages',
    image: headingImages.h1.transport,
  },
  {
    slug: 'luxury-property-buying-sales',
    name: 'Luxury property buying & sales',
    group: 'buyers',
    summary:
      'High-end representation for estates, golf-course homes, and gated Summerlin West villages such as The Ridges and The Summit.',
    intro:
      'Luxury work is quieter marketing, tighter comps, and longer due diligence. View corridors, lot position, and club access often move price more than interior updates.',
    points: [
      'Off-market and pocket-listing checks when available',
      'Comps that weight view, lot, and finish, not just square footage',
      'Listing prep for photography, staging, and private showings',
    ],
    faqs: [
      {
        question: 'Which Summerlin West villages are typically luxury inventory?',
        answer:
          'Buyers often compare The Ridges, The Summit, Red Rock Country Club, and select custom lots elsewhere in 89135. Inventory shifts, so we pull the live set before touring.',
      },
      {
        question: 'How are luxury listings marketed?',
        answer:
          'MLS plus targeted private outreach. Some sellers prefer a quiet launch before a public weekend, and we set that in the listing agreement.',
      },
    ],
    relatedHref: '/listings',
    relatedLabel: 'Featured Summerlin West listings',
    image: headingImages.h1.home,
  },
  {
    slug: 'mortgage-lending-services',
    name: 'Mortgage & lending services',
    group: 'buyers',
    summary:
      'Mortgage guidance and lender introductions so Summerlin West buyers can model payment, down payment, and closing costs.',
    intro:
      'We are a real estate brokerage, not a bank. Mortgage support here means payment modeling, document timing, and introductions to licensed lenders who work Las Vegas purchase and refinance files.',
    points: [
      'Payment scenarios using current list prices',
      'Introductions to licensed Las Vegas lenders',
      'Timeline coordination so appraisal and rate lock match the contract',
    ],
    faqs: [
      {
        question: 'Do you originate loans in house?',
        answer:
          'No. Dr. Jan Duffy provides real estate representation and connects you with licensed lenders for quotes.',
      },
      {
        question: 'Can I compare a cash offer to a financed offer?',
        answer:
          'Yes. We model both paths against the same home so you can see net proceeds or monthly cost before you write.',
      },
    ],
    relatedHref: '/mortgage-calculator',
    relatedLabel: 'Mortgage payment calculator',
    image: headingImages.h1.mortgage,
  },
  {
    slug: 'sellers-agent-services',
    name: "Seller's agent services",
    group: 'sellers',
    summary:
      'Listing-side representation: pricing, marketing, showing management, and negotiation for Summerlin West homes.',
    intro:
      'Seller-agent work starts with a CMA and a punch list. We set list price from comps, schedule photography, and run showings so the home meets the market instead of sitting on a hopeful number.',
    points: [
      'Pricing from village comps, not a valley average',
      'Photo, copy, and MLS launch on a set calendar',
      'Offer review with net sheets you can compare',
    ],
    faqs: [
      {
        question: 'How do you set a list price?',
        answer:
          'Closed sales in the same village, adjusted for condition and lot, plus current competition. We show the range and recommend a number that can attract offers.',
      },
      {
        question: 'What happens after the first weekend of showings?',
        answer:
          'We review feedback and showing count. If traffic is light against similar actives, we talk price or presentation the same week.',
      },
    ],
    relatedHref: '/sell-your-home',
    relatedLabel: 'Sell your Summerlin home',
    image: headingImages.h1.sell,
  },
  {
    slug: 'home-staging',
    name: 'Home staging',
    group: 'sellers',
    summary:
      'Staging plans that edit furniture, light, and traffic flow so listing photos and tours read as move-in ready.',
    intro:
      'Staging is editing, not decorating for taste. We clear excess, set a few rooms for photos, and keep the rest simple so buyers can measure space instead of storage.',
    points: [
      'Room-by-room punch list before photography',
      'Furniture and accessory plan for living areas and primary suite',
      'Vacant-home staging options when the property is empty',
    ],
    faqs: [
      {
        question: 'Do I need full-home staging?',
        answer:
          'Not always. Many Summerlin West listings do well with occupied-home edits and a focused furniture plan for the rooms that hit the MLS photos.',
      },
      {
        question: 'When should staging happen?',
        answer:
          'Before photography. Photos lock the first impression, so the house should already be in listing condition on shoot day.',
      },
    ],
    relatedHref: '/sell-your-home',
    relatedLabel: 'Seller listing plan',
    image: headingImages.h2.selling,
  },
  {
    slug: 'real-estate-photography',
    name: 'Real estate photography',
    group: 'sellers',
    summary:
      'Listing photography for Summerlin West homes: interiors, exteriors, and twilight sets used on MLS and marketing.',
    intro:
      'Photography is the listing. We schedule daylight and, when the exterior warrants it, twilight so the desert light and mountain backdrop show up in the first MLS frame.',
    points: [
      'Interior and exterior stills sized for MLS',
      'Twilight exteriors on view or golf-course lots',
      'Photo order that matches the tour path',
    ],
    faqs: [
      {
        question: 'How many photos does a typical listing need?',
        answer:
          'Enough to cover every major room, outdoor living, and the street view. Extra shots of storage or garage help, but the first 12 frames should sell the layout.',
      },
      {
        question: 'Should I be home during the shoot?',
        answer:
          'Usually no. Vacant or staged rooms photograph faster, and we can work a punch list without moving around residents.',
      },
    ],
    relatedHref: '/sell-your-home',
    relatedLabel: 'Prepare a Summerlin listing',
    image: headingImages.h2.featured,
  },
  {
    slug: 'real-estate-marketing',
    name: 'Real estate marketing',
    group: 'sellers',
    summary:
      'MLS, web, and targeted outreach that puts a Summerlin West listing in front of active buyers and agents.',
    intro:
      'Marketing is MLS syndication plus a short private list. We write copy from facts—beds, baths, lot, HOA, and village—and push the listing to the same channels buyers already use.',
    points: [
      'MLS launch with accurate public remarks',
      'Site and social placement that repeats the listing facts',
      'Broker preview when the property warrants a private first look',
    ],
    faqs: [
      {
        question: 'Do paid ads replace MLS?',
        answer:
          'No. MLS remains the source of truth. Ads and social posts send traffic back to the listing, they do not replace it.',
      },
      {
        question: 'How fast does a listing go live?',
        answer:
          'After photos, disclosures, and HOA docs are in. Many Summerlin West listings can launch within a few days of the photoshoot.',
      },
    ],
    relatedHref: '/sell-your-home',
    relatedLabel: 'Seller marketing path',
    image: headingImages.h2.cta,
  },
  {
    slug: 'real-estate-sales',
    name: 'Real estate sales',
    group: 'sellers',
    summary:
      'Transaction work for buying or selling Summerlin West property, from offer through recording.',
    intro:
      'Sales work is the contract: timelines, repairs, appraisal gaps, and recording. We keep the file moving so a Summerlin West closing does not stall on missing documents.',
    points: [
      'Offer and counter tracking with written nets',
      'Inspection and appraisal response calendars',
      'Title, HOA, and lender document chase-down',
    ],
    faqs: [
      {
        question: 'What usually delays a Summerlin West closing?',
        answer:
          'HOA resale packages, appraisal timing, and repair negotiations. We order docs early and keep a shared calendar with the title company.',
      },
      {
        question: 'Can you handle an all-cash sale?',
        answer:
          'Yes. Cash still needs title, HOA, and often an inspection. The calendar is shorter, but the file is not empty.',
      },
    ],
    relatedHref: '/listings',
    relatedLabel: 'Current listings',
    image: headingImages.h2.listings,
  },
  {
    slug: 'real-estate-sales-management',
    name: 'Real estate sales management',
    group: 'sellers',
    summary:
      'Listing-file management: showing logs, feedback, price strategy, and vendor coordination until the deed records.',
    intro:
      'Sales management is the operating system behind a listing. We track showings, feedback, and vendor dates so pricing decisions use data from this week, not last month.',
    points: [
      'Showing and feedback log shared with the seller',
      'Vendor calendar for photos, staging, and repairs',
      'Weekly price-and-traffic review while the home is active',
    ],
    faqs: [
      {
        question: 'How often do you report on an active listing?',
        answer:
          'At least weekly, and immediately after a busy showing window. You should see showing count, feedback themes, and competing new listings.',
      },
      {
        question: 'Who coordinates repairs during escrow?',
        answer:
          'We manage vendor scheduling with you. Repair scope stays in writing so the appraisal and final walk-through match the contract.',
      },
    ],
    relatedHref: '/sell-your-home',
    relatedLabel: 'Seller process overview',
    image: headingImages.h2.consult,
  },
  {
    slug: 'foreclosed-property-sales',
    name: 'Foreclosed property sales',
    group: 'sellers',
    summary:
      'Guidance on bank-owned, REO, and distressed inventory when it appears in Summerlin West and west Las Vegas.',
    intro:
      'Foreclosure and REO inventory is irregular. When those listings hit MLS, we check title status, occupancy, and repair scope before you tour so the “deal” still makes sense after closing costs.',
    points: [
      'REO and bank-owned search when inventory is live',
      'Repair and title-risk notes before an offer',
      'As-is contract language explained in advance',
    ],
    faqs: [
      {
        question: 'Are there always foreclosures in Summerlin West?',
        answer:
          'No. Counts change with the credit cycle. We search live MLS status instead of promising a standing foreclosure inventory.',
      },
      {
        question: 'Can I get a conventional loan on a foreclosure?',
        answer:
          'Sometimes. Condition and occupancy drive loan type. A lender should see the property notes before you write.',
      },
    ],
    relatedHref: '/properties/search',
    relatedLabel: 'Search live inventory',
    image: headingImages.h2.homeValue,
  },
  {
    slug: 'property-auctions',
    name: 'Property auctions',
    group: 'sellers',
    summary:
      'Help evaluating auction, courthouse, and online-sale properties in Clark County, including Summerlin West addresses.',
    intro:
      'Auction purchases move on deposit rules and limited due diligence. We review the offering packet, comparable values, and occupancy so you know the ceiling bid before the clock starts.',
    points: [
      'Packet review for liens, occupancy, and buyer premiums',
      'CMA so you set a bid cap, not a hopeful number',
      'Post-auction closing steps when you are the high bid',
    ],
    faqs: [
      {
        question: 'Can I inspect an auction property?',
        answer:
          'Sometimes. Many sales are as-is with limited access. We treat unknown condition as a risk that belongs in the bid cap.',
      },
      {
        question: 'Do you run auctions yourself?',
        answer:
          'We advise on auction inventory and bid strategy. The auctioneer or trustee runs the sale under its published rules.',
      },
    ],
    relatedHref: '/market-data',
    relatedLabel: 'Local market context',
    image: headingImages.h3.timing,
  },
  {
    slug: 'building-lot-sales',
    name: 'Building lot sales',
    group: 'land',
    summary:
      'Vacant-lot search and listing in Summerlin West: custom sites, view lots, and remaining village parcels.',
    intro:
      'Lot sales turn on setbacks, HOA design review, and utilities—not just acreage. We confirm what can be built before you reserve a site or list one.',
    points: [
      'Lot search by village, view, and pad status',
      'HOA design-review and setback notes',
      'Listing lots with survey, utilities, and build envelope disclosed',
    ],
    faqs: [
      {
        question: 'Can I buy a lot and bring my own builder?',
        answer:
          'Often yes, subject to HOA architectural review and any village builder restrictions. We confirm those rules before you deposit.',
      },
      {
        question: 'Do lots include utility taps?',
        answer:
          'Not always. We verify water, sewer, power, and gas status in the listing remarks and seller disclosures.',
      },
    ],
    relatedHref: '/villages',
    relatedLabel: 'Summerlin West villages',
    image: headingImages.h3.stonebridge,
  },
  {
    slug: 'land-buying-sales',
    name: 'Land buying & sales',
    group: 'land',
    summary:
      'Land representation for parcels in and around Summerlin West, from custom home sites to larger hold pieces.',
    intro:
      'Land deals need survey, zoning, and access in the first week. We pull those facts so a Summerlin-area parcel is not priced like a finished home.',
    points: [
      'Zoning, access, and flood-zone checks',
      'Survey and title review before earnest money goes hard',
      'Exit path: build, hold, or resale',
    ],
    faqs: [
      {
        question: 'Is Summerlin West land mostly custom lots?',
        answer:
          'Inside the master plan, many remaining sites are custom or infill lots. Larger raw parcels sit at the edges and follow different zoning.',
      },
      {
        question: 'How long do land escrows run?',
        answer:
          'Longer than a typical resale home if you need studies or HOA design pre-review. We write those days into the contract.',
      },
    ],
    relatedHref: '/villages',
    relatedLabel: 'Village and lot context',
    image: headingImages.h1.villages,
  },
  {
    slug: 'land-leasing-sales',
    name: 'Land leasing & sales',
    group: 'land',
    summary:
      'Lease and sale options for land users who need a Summerlin or west-valley site without buying the dirt on day one.',
    intro:
      'Some users need a pad or yard under a lease, not a purchase. We compare ground leases against sale pricing so the monthly number and the exit are both clear.',
    points: [
      'Ground-lease vs. purchase comparison',
      'Use restrictions written into the letter of intent',
      'Sale listing when an owner is ready to exit the parcel',
    ],
    faqs: [
      {
        question: 'Are residential lots typically leased?',
        answer:
          'Custom home lots are usually sold. Leasing is more common for commercial or yard uses. We confirm what the zoning and HOA allow.',
      },
      {
        question: 'What belongs in a land letter of intent?',
        answer:
          'Price or rent, term, permitted use, access, and who pays for survey and entitlement work.',
      },
    ],
    relatedHref: '/market-data',
    relatedLabel: 'West-valley market notes',
    image: headingImages.h3.vistas,
  },
  {
    slug: 'new-construction-sales-leasing',
    name: 'New construction sales & leasing',
    group: 'land',
    summary:
      'Builder-inventory sales and select lease-up help in Summerlin West villages still delivering new homes.',
    intro:
      'New construction is a different contract: options, lot premiums, and completion dates. We compare builder inventory against resale so you are not paying a premium without a reason.',
    points: [
      'Builder vs. resale net-cost comparison',
      'Lot-premium and option tracking',
      'Walk-through and punch-list support near completion',
    ],
    faqs: [
      {
        question: 'Do I need my own agent on a new-construction purchase?',
        answer:
          'Yes. The on-site agent represents the builder. Independent representation keeps options, premiums, and dates in your file.',
      },
      {
        question: 'Can new homes be leased instead of sold?',
        answer:
          'Some investor or builder units lease after completion. Availability is listing-specific, and HOA rental rules still apply.',
      },
    ],
    relatedHref: '/listings',
    relatedLabel: 'See current inventory',
    image: headingImages.h3.ridges,
  },
  {
    slug: 'new-construction-services',
    name: 'New construction services',
    group: 'land',
    summary:
      'Builder selection, design-review navigation, and purchase oversight for new homes in The Ridges, Red Rock Country Club, and other Summerlin West villages.',
    intro:
      'New-construction services cover the process around the house: architectural review, option deadlines, and completion walks. We keep the calendar honest so upgrades do not slip past the cut-off.',
    points: [
      'Builder and plan comparison inside the village',
      'HOA design-review packet support',
      'Pre-closing walk-through and punch list',
    ],
    faqs: [
      {
        question: 'Can you work with a custom builder on a lot I already own?',
        answer:
          'Yes. We can stay on the file for lot purchase, design-review timing, and the eventual resale, even when a separate builder runs construction.',
      },
      {
        question: 'What villages still have new construction?',
        answer:
          'It changes. We check live builder inventory in Summerlin West rather than assuming a village is still selling new homes.',
      },
    ],
    relatedHref: '/summerlin-west-villages-comparison',
    relatedLabel: 'Compare villages',
    image: headingImages.h3.summit,
  },
  {
    slug: 'commercial-property-buying-sales',
    name: 'Commercial property buying & sales',
    group: 'commercial',
    summary:
      'Retail, office, and industrial purchase or sale support in Summerlin and the west Las Vegas corridor.',
    intro:
      'Commercial files need rent rolls, CAM, and zoning next to the asking price. We assemble that packet so a Summerlin-area retail, office, or industrial deal is underwritten before you tour twice.',
    points: [
      'Retail, office, and industrial search',
      'Rent roll, CAM, and expense review',
      'Sale or purchase contracts with longer diligence',
    ],
    faqs: [
      {
        question: 'Do you handle both sides of a commercial sale?',
        answer:
          'We can represent a buyer or a seller. Dual representation, if any, is disclosed in writing under Nevada rules.',
      },
      {
        question: 'Is Downtown Summerlin commercial inventory on the same MLS as homes?',
        answer:
          'Commercial listings often sit on different systems. We search the channels that actually carry the asset type you want.',
      },
    ],
    relatedHref: '/amenities',
    relatedLabel: 'West-side commercial context',
    image: headingImages.h2.amenities,
  },
  {
    slug: 'office-space-leasing',
    name: 'Office space leasing',
    group: 'commercial',
    summary:
      'Office lease search in Summerlin and west Las Vegas for small firms and established users who need a west-valley address.',
    intro:
      'Office leasing is term, TI, and parking as much as rent. We compare suites near the 215 and Summerlin Parkway so commute and client access are part of the shortlist.',
    points: [
      'Suite search by size, term, and parking ratio',
      'Letter-of-intent terms before you tour five buildings',
      'Landlord vs. sublease comparison',
    ],
    faqs: [
      {
        question: 'How long are typical office leases?',
        answer:
          'Three to five years is common, with shorter options on subleases. We match term to how stable your headcount is.',
      },
      {
        question: 'Can a startup take a small Summerlin suite?',
        answer:
          'Yes, when inventory includes smaller floors or executive suites. Availability changes, so we search live product rather than quoting a stock size.',
      },
    ],
    relatedHref: '/transportation',
    relatedLabel: 'West-valley access',
    image: headingImages.h3.hub,
  },
  {
    slug: 'warehouse-property-sales',
    name: 'Warehouse property sales',
    group: 'commercial',
    summary:
      'Warehouse and flex-space sales for storage, logistics, or light manufacturing users looking at the west Las Vegas market.',
    intro:
      'Warehouse buyers care about clear height, dock count, and truck access. We filter west-valley industrial product on those specs before you spend a morning on site tours.',
    points: [
      'Clear height, dock, and yard filters',
      'Zoning and use confirmation',
      'Sale comps for owner-user and investor pricing',
    ],
    faqs: [
      {
        question: 'Is there warehouse inventory inside Summerlin proper?',
        answer:
          'Most industrial product sits on the west-valley edges rather than inside residential villages. We search the actual industrial corridors that serve Summerlin users.',
      },
      {
        question: 'Can an investor buy a leased warehouse?',
        answer:
          'Yes, when a rent roll exists. We review lease term, credit, and remaining capital items before you underwrite the cap rate.',
      },
    ],
    relatedHref: '/transportation',
    relatedLabel: 'Freight and commute routes',
    image: headingImages.h3.arterial,
  },
  {
    slug: 'real-estate-investing',
    name: 'Real estate investing',
    group: 'commercial',
    summary:
      'Investment-property search in Summerlin West and west Las Vegas: rentals, condos, and small commercial assets.',
    intro:
      'Investing here is a rent and HOA math problem. We run vacancy, dues, taxes, and current rents so the cap rate is not a marketing slide.',
    points: [
      'Rent and expense snapshot before you tour',
      'HOA rental-cap checks on condos and townhomes',
      'Hold vs. flip path based on basis and condition',
    ],
    faqs: [
      {
        question: 'Are Summerlin West homes typically strong rentals?',
        answer:
          'Some are, depending on HOA rules and monthly dues. We check rental caps and current leases instead of assuming every village allows investors.',
      },
      {
        question: 'Do you work with out-of-area investors?',
        answer:
          'Yes. Remote investors get video tours, a numbers sheet, and a local vendor list for inspections and management.',
      },
    ],
    relatedHref: '/market-data',
    relatedLabel: 'Market data for investors',
    image: headingImages.h1.market,
  },
  {
    slug: 'real-estate-investment-consulting',
    name: 'Real estate investment consulting',
    group: 'commercial',
    summary:
      'Consulting on acquisition criteria, hold periods, and exit paths for investors targeting Summerlin and west Las Vegas.',
    intro:
      'Investment consulting is the brief before the search: target yield, leverage, and which villages even allow rentals. We write that down so the MLS filter is not improvisation.',
    points: [
      'Written buy box: price, yield, and asset type',
      'Village and HOA constraint list',
      'Exit options: refinance, sale, or 1031 discussion with your tax counsel',
    ],
    faqs: [
      {
        question: 'Is this financial advice?',
        answer:
          'No. We provide real estate market and transaction consulting. Tax, legal, and securities questions belong with licensed advisors.',
      },
      {
        question: 'Can you review a deal I already have under contract?',
        answer:
          'Yes. We can run comps and a rent check against the contract so you know whether to proceed, renegotiate, or cancel inside your contingency.',
      },
    ],
    relatedHref: '/summerlin-west-market-snapshot',
    relatedLabel: 'Market snapshot',
    image: headingImages.h1.marketSnapshot,
  },
  {
    slug: 'real-estate-development',
    name: 'Real estate development',
    group: 'commercial',
    summary:
      'Site and village-context support for small development and infill work tied to Summerlin West growth.',
    intro:
      'Development work starts with what the master plan and the city already allow. We help locate sites, read constraints, and time a purchase against infrastructure—not against a rendering.',
    points: [
      'Site search against zoning and master-plan rules',
      'Neighbor and HOA constraint mapping',
      'Purchase timing tied to access and utilities',
    ],
    faqs: [
      {
        question: 'Do you entitle projects?',
        answer:
          'Entitlements run through architects, engineers, and the jurisdiction. We coordinate the real estate purchase and local context around that team.',
      },
      {
        question: 'Is Summerlin West still adding villages?',
        answer:
          'Yes, the west edge still delivers new villages over time. We treat each phase as its own inventory, not as a single finished map.',
      },
    ],
    relatedHref: '/villages',
    relatedLabel: 'Village map and growth',
    image: headingImages.h2.villages,
  },
  {
    slug: 'real-estate-development-consulting',
    name: 'Real estate development consulting',
    group: 'commercial',
    summary:
      'Early-stage consulting for owners and small developers who need Summerlin West site context before they hire a full project team.',
    intro:
      'Development consulting is a short, paid clarity pass: site fit, comparable land sales, and a list of specialists you will need next. It is not a substitute for civil engineering.',
    points: [
      'Site-fit memo against known village and zoning limits',
      'Land-sale comps for basis',
      'Next-step vendor list: survey, civil, and architecture',
    ],
    faqs: [
      {
        question: 'Who is this for?',
        answer:
          'Landowners, small developers, and investors who need a local read before they fund studies. Large entitlement campaigns need a dedicated land-use team.',
      },
      {
        question: 'Can you introduce a builder?',
        answer:
          'We can share builders who already work Summerlin West villages. You still run your own bids and contracts.',
      },
    ],
    relatedHref: '/about',
    relatedLabel: 'Local team context',
    image: headingImages.h2.consult,
  },
  {
    slug: 'property-rentals',
    name: 'Property rentals',
    group: 'rentals',
    summary:
      'Rental search and listing help for Summerlin West houses, townhomes, and condos that allow leases.',
    intro:
      'Rental inventory turns over fast. We match lease term, pet rules, and monthly cost—including HOA pass-throughs—so the listing you tour is actually available.',
    points: [
      'Live rental search by beds, term, and village',
      'Application and lease-start calendar',
      'Owner listing support when you have a vacancy',
    ],
    faqs: [
      {
        question: 'Do all Summerlin West HOAs allow rentals?',
        answer:
          'No. Some villages cap or wait-list rentals. We confirm the rule before you advertise or apply.',
      },
      {
        question: 'How quickly can a rental go from listed to leased?',
        answer:
          'Well-priced homes can lease in days. We still run applications and a move-in date that matches the current occupant.',
      },
    ],
    relatedHref: '/properties/search',
    relatedLabel: 'Browse current homes',
    image: headingImages.h2.search,
  },
  {
    slug: 'property-leasing',
    name: 'Property leasing',
    group: 'rentals',
    summary:
      'Owner-side and tenant-side leasing: pricing, applications, and lease execution for Summerlin West properties.',
    intro:
      'Leasing is a file: screening, disclosures, and a start date that does not overlap the last occupant. We keep that calendar in writing.',
    points: [
      'Lease-rate CMA from current rent comps',
      'Application and screening coordination',
      'Move-in condition notes and key handoff',
    ],
    faqs: [
      {
        question: 'Do you write Nevada residential leases?',
        answer:
          'We use current Nevada-compliant lease forms and required disclosures. Unusual clauses should still be reviewed by your attorney.',
      },
      {
        question: 'Can you lease a furnished home?',
        answer:
          'Yes, when the inventory list is attached to the lease. Furnished terms and utility responsibility should be explicit.',
      },
    ],
    relatedHref: '/listings',
    relatedLabel: 'Current property inventory',
    image: headingImages.h3.price,
  },
  {
    slug: 'property-rental-assistance',
    name: 'Property rental assistance',
    group: 'rentals',
    summary:
      'Tenant-side help finding a Summerlin West rental that matches budget, commute, and HOA rules.',
    intro:
      'Rental assistance is a guided search. We filter out communities that ban your lease term or pets before you take a half-day of tours.',
    points: [
      'Budget that includes utilities and HOA-billed items',
      'Tour slate of available homes only',
      'Application package ready before the weekend rush',
    ],
    faqs: [
      {
        question: 'Do you charge tenants a finder fee?',
        answer:
          'Fee structure depends on the listing and Nevada rules. We disclose any tenant-paid fee in writing before you tour.',
      },
      {
        question: 'Can first-time renters use this service?',
        answer:
          'Yes. We explain deposits, HOA rules, and move-in dates so the first lease is not a surprise on day 30.',
      },
    ],
    relatedHref: '/buying-guide',
    relatedLabel: 'If you may buy later',
    image: headingImages.h2.financing,
  },
  {
    slug: 'furnished-property-rentals-sales',
    name: 'Furnished property rentals & sales',
    group: 'rentals',
    summary:
      'Furnished lease and sale options for relocation stays, corporate housing, and turnkey Summerlin West homes.',
    intro:
      'Furnished product is a different contract: inventory lists, utility billing, and a term that may be 30 days or 12 months. We confirm HOA and county rules before you advertise a stay.',
    points: [
      'Inventory list attached to the lease or sale',
      'Term and utility responsibility in writing',
      'HOA and local short-stay rule check',
    ],
    faqs: [
      {
        question: 'Are furnished sales common in Summerlin West?',
        answer:
          'Some listings include furniture as personal property. We write a bill of sale so what stays is not left to a walk-through argument.',
      },
      {
        question: 'Can I rent a furnished home for one month?',
        answer:
          'Only if HOA and county rules allow that term. Many villages restrict short stays. We verify before you book or list.',
      },
    ],
    relatedHref: '/home-valuation',
    relatedLabel: 'Value a turnkey home',
    image: headingImages.h3.shopping,
  },
  {
    slug: 'short-term-property-rentals',
    name: 'Short-term property rentals',
    group: 'rentals',
    summary:
      'Advice on short-stay rules, HOA limits, and listing setup for Summerlin West properties—not a promise that every village allows it.',
    intro:
      'Short-term rentals in Clark County and Summerlin HOAs are restricted. We start with the rule set, then talk furniture, insurance, and calendar only if the property can legally host stays.',
    points: [
      'HOA and county short-stay rule check first',
      'Permit and tax notes when a stay is allowed',
      'Operations calendar if you proceed',
    ],
    faqs: [
      {
        question: 'Is Airbnb allowed in every Summerlin West village?',
        answer:
          'No. Many HOAs prohibit or tightly limit short-term rentals. Assume no until the documents say yes.',
      },
      {
        question: 'Do you manage nightly stays?',
        answer:
          'We advise on feasibility and can discuss management options. Nightly operations still need legal use, insurance, and a local contact.',
      },
    ],
    relatedHref: '/amenities',
    relatedLabel: 'Visitor and amenity context',
    image: headingImages.h3.outdoor,
  },
  {
    slug: 'property-management',
    name: 'Property management',
    group: 'rentals',
    summary:
      'Management support for Summerlin West rentals: tenants, maintenance routing, and owner reporting.',
    intro:
      'Management is monthly work: rent collection, vendor calls, and HOA notices. We keep owners on a simple report so a west-valley rental is not a second job.',
    points: [
      'Tenant placement and lease renewals',
      'Maintenance routing with owner approval rules',
      'Monthly owner summary of rent and expenses',
    ],
    faqs: [
      {
        question: 'Do you manage one home or only portfolios?',
        answer:
          'Single-home owners in Summerlin West are common. Scope and pricing depend on the property and HOA workload.',
      },
      {
        question: 'Who handles after-hours issues?',
        answer:
          'We set an after-hours path for true emergencies and a next-day path for everything else so vendors are not called at midnight for a filter change.',
      },
    ],
    relatedHref: '/sell-your-home',
    relatedLabel: 'If you later decide to sell',
    image: headingImages.h2.testimonials,
  },
];

export const SERVICE_INDEX_FAQS: readonly ServiceFaq[] = [
  {
    question: 'Which real estate services do you offer in Summerlin West?',
    answer:
      'Buyer and seller representation, land and new construction, commercial and investment work, plus rentals and property management. Each service has its own page with next steps.',
  },
  {
    question: 'How do I start with Dr. Jan Duffy?',
    answer:
      `Call ${BUSINESS.phoneDisplay} or book a consult. Bring the property address or the village you want to tour so the first call stays specific.`,
  },
];

const SERVICE_BY_SLUG = new Map(SERVICES.map((service) => [service.slug, service]));

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICE_BY_SLUG.get(slug);
}

export function servicesInGroup(group: ServiceGroupId): readonly Service[] {
  return SERVICES.filter((service) => service.group === group);
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}
