import { BUSINESS, mapsEmbedSrc, mapsPlaceHref } from '@/lib/business';

export default function GoogleMapEmbed({
  title = `${BUSINESS.gbpTitle} on Google Maps`,
}: {
  title?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#d8c58e]/40 shadow-xl">
      <iframe
        title={title}
        src={mapsEmbedSrc()}
        className="h-72 w-full border-0 md:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <p className="bg-[#0b1231] px-4 py-3 text-center text-sm text-white/85">
        Pin matches Google Maps listing:{' '}
        <a
          href={mapsPlaceHref()}
          className="font-semibold text-[#d8c58e] underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {BUSINESS.streetAddress}, {BUSINESS.addressLocality},{' '}
          {BUSINESS.addressRegion} {BUSINESS.postalCode}
        </a>
      </p>
    </div>
  );
}
