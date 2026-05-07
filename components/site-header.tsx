'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Home, Menu, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Deepest brand navy + champagne — aligned with hero (`#0b1231`, `#d8c58e`) */
const brand = {
  navy: '#0b1231',
  navyMid: '#101c49',
  gold: '#d8c58e',
  goldHover: '#e8d5a3',
  goldMuted: 'rgba(216, 197, 142, 0.35)',
} as const;

const PRIMARY_NAV = [
  { href: '/', label: 'Home' },
  { href: '/properties/search', label: 'Search' },
  { href: '/listings', label: 'Listings' },
  { href: '/villages', label: 'Villages' },
  { href: '/market-data', label: 'Market Data' },
] as const;

const NEIGHBORHOOD_NAV = [
  { href: '/schools', label: 'Schools' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/transportation', label: 'Transportation' },
] as const;

const RESOURCES_NAV = [
  { href: '/home-valuation', label: 'Home Value' },
  { href: '/sell-your-home', label: 'Sell Your Home' },
  { href: '/mortgage-calculator', label: 'Mortgage' },
  { href: '/buying-guide', label: 'Buying Guide' },
  { href: '/about', label: 'About' },
] as const;

const CALENDLY_APPOINTMENT = 'https://calendly.com/drjanduffy/appointment';
const SITE_PHONE_DISPLAY = '(702) 555-0100';
const SITE_PHONE_TEL = 'tel:+17025550100';

function navItemActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function groupHasActive(
  pathname: string,
  items: readonly { href: string }[]
) {
  return items.some((item) => navItemActive(pathname, item.href));
}

type DropdownProps = {
  id: string;
  label: string;
  items: readonly { href: string; label: string }[];
  pathname: string;
  openId: string | null;
  setOpenId: (id: string | null) => void;
};

function NavDropdown({
  id,
  label,
  items,
  pathname,
  openId,
  setOpenId,
}: DropdownProps) {
  const open = openId === id;
  const active = groupHasActive(pathname, items);

  return (
    <div className="relative" onMouseEnter={() => setOpenId(id)}>
      <button
        type="button"
        className={cn(
          'flex items-center gap-1 border-b-2 pb-1 text-sm font-medium transition-colors duration-150 xl:text-base',
          open || active
            ? 'border-[color:var(--hdr-gold)] text-[color:var(--hdr-gold)]'
            : 'border-transparent text-white/85 hover:border-[color:var(--hdr-gold-muted)] hover:text-[color:var(--hdr-gold-hover)]'
        )}
        aria-expanded={open ? 'true' : 'false'}
        aria-haspopup="true"
        onClick={() => setOpenId(open ? null : id)}
      >
        {label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            open && 'rotate-180'
          )}
          aria-hidden
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[13.5rem] pt-2">
          <div
            className="rounded-xl border py-1 shadow-xl"
            style={{
              backgroundColor: brand.navyMid,
              borderColor: brand.goldMuted,
              boxShadow: '0 20px 40px -12px rgb(0 0 0 / 0.45)',
            }}
          >
            {items.map((item) => {
              const isActive = navItemActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className={cn(
                    'block px-4 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-white/10 text-[color:var(--hdr-gold)]'
                      : 'text-white/90 hover:bg-white/5 hover:text-[color:var(--hdr-gold-hover)]'
                  )}
                  onClick={() => setOpenId(null)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<string | null>(null);
  const desktopNavCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const cancelDesktopNavCloseTimer = () => {
    if (desktopNavCloseTimerRef.current) {
      clearTimeout(desktopNavCloseTimerRef.current);
      desktopNavCloseTimerRef.current = null;
    }
  };

  const scheduleDesktopNavClose = () => {
    cancelDesktopNavCloseTimer();
    desktopNavCloseTimerRef.current = setTimeout(
      () => setDesktopMenuOpen(null),
      200
    );
  };

  useEffect(() => () => cancelDesktopNavCloseTimer(), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenuOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const headerStyle = {
    '--hdr-gold': brand.gold,
    '--hdr-gold-hover': brand.goldHover,
    '--hdr-gold-muted': brand.goldMuted,
    '--hdr-navy': brand.navy,
  } as CSSProperties;

  return (
    <header
      style={headerStyle}
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-[box-shadow,background-color,border-color] duration-300',
        isScrolled
          ? 'border-[color:var(--hdr-gold-muted)] shadow-[0_12px_40px_-12px_rgba(11,18,49,0.55)]'
          : 'border-transparent shadow-none'
      )}
    >
      <div
        className={cn(
          'backdrop-blur-md transition-[background-color] duration-300',
          isScrolled ? 'bg-[color:var(--hdr-navy)]/98' : 'bg-[color:var(--hdr-navy)]/92'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-[4.25rem] items-center justify-between sm:h-20">
            <Link
              href="/"
              prefetch={false}
              className="flex min-w-0 items-center gap-3"
            >
              <div
                className="shrink-0 rounded-xl border border-[#d8c58e]/40 p-2 shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${brand.gold} 0%, #c4a86a 100%)`,
                  boxShadow: '0 6px 20px -6px rgba(216, 197, 142, 0.45)',
                }}
              >
                <Home className="h-6 w-6 text-[color:var(--hdr-navy)]" />
              </div>
              <div className="min-w-0 text-left">
                <p className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
                  Summerlin West
                </p>
                <p
                  className="truncate text-[11px] font-medium uppercase tracking-[0.12em] sm:text-xs"
                  style={{ color: brand.gold }}
                >
                  Luxury Real Estate
                </p>
              </div>
            </Link>

            <nav
              className="hidden items-center gap-5 xl:gap-6 lg:flex"
              aria-label="Main"
              onMouseEnter={cancelDesktopNavCloseTimer}
              onMouseLeave={scheduleDesktopNavClose}
            >
              {PRIMARY_NAV.map((item) => {
                const active = navItemActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    onMouseEnter={() => setDesktopMenuOpen(null)}
                    className={cn(
                      'border-b-2 pb-1 text-sm font-medium transition-colors duration-150 xl:text-base',
                      active
                        ? 'border-[color:var(--hdr-gold)] text-[color:var(--hdr-gold)]'
                        : 'border-transparent text-white/85 hover:border-[color:var(--hdr-gold-muted)] hover:text-[color:var(--hdr-gold-hover)]'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <NavDropdown
                id="area"
                label="Area"
                items={NEIGHBORHOOD_NAV}
                pathname={pathname}
                openId={desktopMenuOpen}
                setOpenId={setDesktopMenuOpen}
              />
              <NavDropdown
                id="resources"
                label="Resources"
                items={RESOURCES_NAV}
                pathname={pathname}
                openId={desktopMenuOpen}
                setOpenId={setDesktopMenuOpen}
              />
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={SITE_PHONE_TEL}
                className="flex items-center gap-2 text-white/90 transition-colors hover:text-[color:var(--hdr-gold-hover)]"
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-[color:var(--hdr-gold)]"
                  aria-hidden
                />
                <span className="text-sm font-semibold tabular-nums xl:text-base">
                  {SITE_PHONE_DISPLAY}
                </span>
              </a>
              <a
                href={CALENDLY_APPOINTMENT}
                data-calendly-popup="appointment"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[color:var(--hdr-navy)] shadow-md transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 xl:text-base"
                style={{
                  backgroundColor: brand.gold,
                  boxShadow: '0 4px 14px -4px rgba(216, 197, 142, 0.55)',
                }}
              >
                Schedule Tour
              </a>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              style={{ color: brand.gold }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen ? 'true' : 'false'}
              aria-controls="site-mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="site-mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-50 flex flex-col border-t sm:top-20"
          style={{
            backgroundColor: brand.navy,
            borderColor: brand.goldMuted,
          }}
        >
          <nav
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4"
            aria-label="Mobile main"
          >
            <div className="space-y-1">
              {PRIMARY_NAV.map((item) => {
                const active = navItemActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-white/10 text-[color:var(--hdr-gold)]'
                        : 'text-white/90 hover:bg-white/5 hover:text-[color:var(--hdr-gold-hover)]'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <p
              className="mb-2 mt-6 px-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: brand.gold }}
            >
              Area
            </p>
            <div className="space-y-1">
              {NEIGHBORHOOD_NAV.map((item) => {
                const active = navItemActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-white/10 text-[color:var(--hdr-gold)]'
                        : 'text-white/90 hover:bg-white/5 hover:text-[color:var(--hdr-gold-hover)]'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <p
              className="mb-2 mt-6 px-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: brand.gold }}
            >
              Resources
            </p>
            <div className="space-y-1">
              {RESOURCES_NAV.map((item) => {
                const active = navItemActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-white/10 text-[color:var(--hdr-gold)]'
                        : 'text-white/90 hover:bg-white/5 hover:text-[color:var(--hdr-gold-hover)]'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div
            className="shrink-0 border-t px-4 py-4"
            style={{
              borderColor: brand.goldMuted,
              backgroundColor: brand.navyMid,
            }}
          >
            <a
              href={SITE_PHONE_TEL}
              className="mb-3 flex items-center justify-center gap-2 font-semibold text-white"
            >
              <Phone className="h-5 w-5 text-[color:var(--hdr-gold)]" />
              {SITE_PHONE_DISPLAY}
            </a>
            <a
              href={CALENDLY_APPOINTMENT}
              data-calendly-popup="appointment"
              className="flex w-full items-center justify-center rounded-xl py-3.5 text-base font-semibold text-[color:var(--hdr-navy)] transition-transform active:scale-[0.98]"
              style={{ backgroundColor: brand.gold }}
            >
              Schedule Tour
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
