import {
  BUSINESS,
  BUSINESS_ADDRESS_LINE,
  directionsUrl,
  googleReviewsUrl,
  mapsEmbedUrl,
  smsHref,
  telHref,
} from '@/lib/business';

export default function SiteNapFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 text-center text-xs text-gray-600">
      <p className="font-semibold text-gray-800">{BUSINESS.name}</p>
      <address className="mt-2 not-italic">
        {BUSINESS.streetAddress}
        <br />
        {BUSINESS.addressLocality}, {BUSINESS.addressRegion}{' '}
        {BUSINESS.postalCode}
      </address>
      <p className="mt-2">{BUSINESS.hoursDisplay}</p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 font-semibold text-[#0b1231]">
        <a href={telHref} className="underline-offset-2 hover:underline">
          Call {BUSINESS.phoneDisplay}
        </a>
        <span aria-hidden="true">|</span>
        <a href={smsHref} className="underline-offset-2 hover:underline">
          Text
        </a>
        <span aria-hidden="true">|</span>
        <a
          href={directionsUrl}
          className="underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Directions
        </a>
        <span aria-hidden="true">|</span>
        <a
          href={googleReviewsUrl}
          className="underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Google Reviews
        </a>
      </div>
      <div className="mx-auto mt-4 max-w-xl overflow-hidden rounded-xl border border-gray-200">
        <iframe
          title={`${BUSINESS.name} office map at ${BUSINESS_ADDRESS_LINE}`}
          src={mapsEmbedUrl}
          className="h-52 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-5">
        Summerlin West | Homes by Dr. Jan Duffy. All rights reserved. © 2026
      </p>
      <p className="mt-1">
        {BUSINESS.brokerage} | {BUSINESS.license}
      </p>
      <p className="mt-3">
        <a
          href="https://calendly.com/drjanduffy/appointment"
          data-calendly-popup="appointment"
          className="font-semibold text-[#0b1231] underline-offset-2 hover:underline"
        >
          Schedule time with me
        </a>
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[11px]">
        <a
          href="/summerlin-west-villages-comparison"
          className="text-[#0b1231] underline-offset-2 hover:underline"
        >
          Compare Summerlin West villages
        </a>
        <span aria-hidden="true">|</span>
        <a
          href="/summerlin-west-market-snapshot"
          className="text-[#0b1231] underline-offset-2 hover:underline"
        >
          Summerlin West market snapshot
        </a>
        <span aria-hidden="true">|</span>
        <a
          href="/summerlin-west-schools-commute-amenities"
          className="text-[#0b1231] underline-offset-2 hover:underline"
        >
          Schools, commute, and amenities guide
        </a>
      </div>
    </footer>
  );
}
