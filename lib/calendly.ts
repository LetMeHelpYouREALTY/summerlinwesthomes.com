/** Calendly events by page intent (scheduling_url values from the Calendly API). */
export const CALENDLY_EVENTS = {
  tour: 'https://calendly.com/drjanduffy/showing',
  seller: 'https://calendly.com/drjanduffy/listing-consultation',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
} as const;

export type CalendlyIntent = keyof typeof CALENDLY_EVENTS;

const SELLER_PATHS = ['/home-valuation', '/sell-your-home', '/market-data'];
const BUYER_PATHS = ['/buying-guide', '/mortgage-calculator'];

const matches = (pathname: string, paths: string[]) =>
  paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));

export function calendlyIntentForPath(pathname: string): CalendlyIntent {
  if (matches(pathname, SELLER_PATHS)) return 'seller';
  if (matches(pathname, BUYER_PATHS)) return 'buyer';
  return 'tour';
}

/**
 * Calendly URL for the page's intent, tagged with UTM. utm_source is the bare
 * domain so the Calendly → FUB Worker can map the booking to this site.
 */
export function calendlyUrlFor(
  pathname: string,
  medium: string,
  intent: CalendlyIntent = calendlyIntentForPath(pathname)
): string {
  const url = new URL(CALENDLY_EVENTS[intent]);
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('utm_source', 'summerlinwesthomes.com');
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set(
    'utm_campaign',
    pathname === '/' ? 'home' : pathname.replace(/^\/|\/$/g, '')
  );
  return url.toString();
}
