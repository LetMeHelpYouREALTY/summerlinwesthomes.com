import Link from 'next/link';
import GbpEngagement from '@/components/gbp/gbp-engagement';
import GoogleMapEmbed from '@/components/gbp/google-map-embed';
import {
  BUSINESS,
  formattedAddress,
  telHref,
} from '@/lib/business';

const BUYER_LINKS = [
  { href: '/properties/search', label: 'Search Summerlin West homes for sale' },
  { href: '/listings', label: 'Featured Summerlin West listings' },
  { href: '/buying-guide', label: 'Las Vegas home buying guide' },
  { href: '/home-valuation', label: 'Summerlin West home value context' },
  { href: '/mortgage-calculator', label: 'Mortgage payment calculator' },
] as const;

const AREA_LINKS = [
  { href: '/villages', label: 'Luxury villages in Summerlin West' },
  { href: '/amenities', label: 'Golf, recreation, and Summerlin amenities' },
  { href: '/schools', label: 'Schools serving Summerlin West' },
  { href: '/transportation', label: 'Transportation and Las Vegas access' },
  { href: '/market-data', label: 'Summerlin West real estate market data' },
  { href: '/sell-your-home', label: 'Sell your Summerlin home' },
] as const;

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <GbpEngagement />
      <div className="bg-[#050b25] px-4 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-[#d8c58e]">
              {BUSINESS.gbpTitle}
            </h2>
            <p className="text-sm leading-relaxed text-white/80">
              {formattedAddress()}
              <br />
              <a href={telHref()} className="font-semibold text-white">
                {BUSINESS.phoneDisplay}
              </a>
              <br />
              Hours: {BUSINESS.hoursLabel}
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Buyer tools</h3>
            <ul className="space-y-2 text-sm">
              {BUYER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-white/75 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Area guides</h3>
            <ul className="space-y-2 text-sm">
              {AREA_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-white/75 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Visit the office</h3>
            <GoogleMapEmbed />
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-white/70">
          <p>
            {BUSINESS.shortName} by {BUSINESS.agentName}. © {year}
          </p>
          <p className="mt-1">
            {BUSINESS.brokerage} | {BUSINESS.license}
          </p>
          <p className="mt-3">
            <a
              href={BUSINESS.calendlyUrl}
              data-calendly-popup="appointment"
              className="font-semibold text-[#d8c58e] underline-offset-2 hover:underline"
            >
              Schedule time with me
            </a>
          </p>
          <p className="mx-auto mt-4 max-w-4xl leading-relaxed">
            Listing information is provided by participating brokers and is
            deemed reliable but not guaranteed. Buyers should verify square
            footage, taxes, HOA dues, and all facts with independent sources.
            Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}
