'use client';

import { usePathname } from 'next/navigation';
import { calendlyUrlFor } from '@/lib/calendly';

/** Booking strip placed directly after a RealScout listings section. */
export default function CalendlyAfterListings() {
  const pathname = usePathname() || '/';

  return (
    <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-6 py-5 sm:flex-row">
      <p className="text-base text-gray-800">
        See a home you like? Pick a time with Dr. Jan Duffy.
      </p>
      <a
        href={calendlyUrlFor(pathname, 'after-listings')}
        data-calendly-popup="page"
        data-calendly-medium="after-listings"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full bg-[#0b1231] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#101c49]"
      >
        Schedule time with me
      </a>
    </div>
  );
}
