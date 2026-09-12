export default function OfficeListingsAfterHero() {
  return (
    <section
      className="border-b border-[#d7c5a0] bg-[#f8f7f4] px-4 py-10"
      aria-label="Featured office listings"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Featured Listings
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600">
          Browse Summerlin, Summerlin West, and Las Vegas homes for sale.
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="500000" price-max="650000"></realscout-office-listings>',
          }}
        />
      </div>
    </section>
  );
}
