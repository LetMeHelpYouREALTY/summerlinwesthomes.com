import { MapPin, Phone, Star, Navigation } from 'lucide-react';
import {
  BUSINESS,
  directionsHref,
  formattedAddress,
  mapsPlaceHref,
  telHref,
} from '@/lib/business';

export default function GbpEngagement() {
  return (
    <section
      aria-label="Office location, hours, and Google Maps actions"
      className="border-t border-[#d8c58e]/40 bg-[#0b1231] px-4 py-10 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d8c58e]">
            Google Business Profile
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            {BUSINESS.gbpTitle}
          </h2>
          <p className="mt-4 flex items-start gap-2 text-white/90">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#d8c58e]" aria-hidden />
            <span>{formattedAddress()}</span>
          </p>
          <p className="mt-2 text-white/90">
            Hours: {BUSINESS.hoursLabel}
          </p>
          <p className="mt-2 text-white/90">
            {BUSINESS.brokerage} | {BUSINESS.license}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={telHref()}
              className="inline-flex items-center gap-2 rounded-full bg-[#d8c58e] px-5 py-2.5 text-sm font-semibold text-[#0b1231] transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={directionsHref()}
              className="inline-flex items-center gap-2 rounded-full border border-[#d8c58e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Directions
            </a>
            <a
              href={BUSINESS.reviewsUri}
              className="inline-flex items-center gap-2 rounded-full border border-[#d8c58e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="h-4 w-4" aria-hidden />
              View Google Reviews
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-[#d8c58e]/30 bg-white/5 p-5">
          <h3 className="text-lg font-semibold text-[#d8c58e]">
            Tour Summerlin West homes
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {BUSINESS.description}
          </p>
          <a
            href={mapsPlaceHref()}
            className="mt-4 inline-block text-sm font-semibold text-[#d8c58e] underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open this listing on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
