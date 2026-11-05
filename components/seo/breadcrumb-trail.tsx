'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS } from '@/lib/business';
import { getSiteUrl } from '@/lib/site-url';

const LABELS: Record<string, string> = {
  '/': 'Summerlin West Homes',
  '/about': 'About',
  '/amenities': 'Amenities',
  '/buying-guide': 'Buying guide',
  '/home-valuation': 'Home value',
  '/listings': 'Listings',
  '/listings/894-heritage-bend-drive': '894 Heritage Bend Drive',
  '/market-data': 'Market data',
  '/mortgage-calculator': 'Mortgage calculator',
  '/properties/search': 'Search homes',
  '/schools': 'Schools',
  '/sell-your-home': 'Sell your home',
  '/summerlin-west-market-snapshot': 'Market snapshot',
  '/summerlin-west-schools-commute-amenities': 'Schools & commute',
  '/summerlin-west-villages-comparison': 'Villages comparison',
  '/transportation': 'Transportation',
  '/villages': 'Villages',
};

function buildCrumbs(pathname: string): Array<{ href: string; label: string }> {
  if (pathname === '/') {
    return [{ href: '/', label: LABELS['/'] ?? 'Summerlin West Homes' }];
  }

  const crumbs: Array<{ href: string; label: string }> = [
    { href: '/', label: LABELS['/'] ?? 'Summerlin West Homes' },
  ];
  const segments = pathname.split('/').filter(Boolean);
  let href = '';

  for (const segment of segments) {
    href += `/${segment}`;
    const known = LABELS[href];
    crumbs.push({
      href,
      label: known ?? segment.replace(/-/g, ' '),
    });
  }

  return crumbs;
}

export default function BreadcrumbTrail() {
  const pathname = usePathname() || '/';
  const siteUrl = getSiteUrl();
  const crumbs = buildCrumbs(pathname);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.href === '/' ? '' : crumb.href}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[#d8c58e]/25 bg-[#f8f7f4] px-4 py-2 text-xs text-gray-600"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1">
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-1">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === crumbs.length - 1 ? (
              <span className="font-semibold text-[#0b1231]">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} prefetch={false} className="hover:underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
        <li className="ml-auto hidden sm:block">
          {BUSINESS.phoneDisplay} · {BUSINESS.streetAddress}
        </li>
      </ol>
    </nav>
  );
}
