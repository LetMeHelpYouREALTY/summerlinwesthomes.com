import { BUSINESS, formattedAddress, telHref } from '@/lib/business';
import { COMMUNITY } from '@/lib/community';

export default function AgentTrustBlock() {
  return (
    <aside
      className="rounded-xl border border-[#d8c58e]/40 bg-[#0b1231] p-8 text-white"
      aria-label={`Contact ${BUSINESS.agentName}`}
    >
      <h2 className="text-2xl font-bold text-[#d8c58e]">
        Your {COMMUNITY.name} REALTOR®
      </h2>
      <p className="mt-3 text-white/90">
        {BUSINESS.agentName} with {BUSINESS.brokerage} helps buyers and sellers
        navigate {COMMUNITY.name} villages, HOA details, and amenity tradeoffs.
        License {BUSINESS.license}.
      </p>
      <p className="mt-4 text-sm text-white/80">{formattedAddress()}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={telHref()}
          className="inline-flex justify-center rounded-lg bg-[#d8c58e] px-6 py-3 font-semibold text-[#0b1231] hover:bg-[#e8d5a3]"
        >
          Call {BUSINESS.phoneDisplay}
        </a>
        <a
          href={BUSINESS.calendlyUrl}
          data-calendly-popup="appointment"
          className="inline-flex justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
        >
          Schedule a tour
        </a>
        <a
          href="/properties/search"
          className="inline-flex justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
        >
          Search Summerlin West homes
        </a>
      </div>
    </aside>
  );
}
