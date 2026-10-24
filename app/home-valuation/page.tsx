'use client';

import CalendlyInlineSection from '@/components/calendly-inline-section';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function HomeValuationPage() {
  return (
    <div className="min-h-screen bg-[#f6f4ef]">
      <PageHero
        imageId="hero-valuation"
        title="Las Vegas Homes — Summerlin West Value & Pricing"
        subtitle="Professional valuation context before you list or buy. Live estimates plus a CMA from Dr. Jan Duffy."
      />

      {/* RealScout Home Value Widget Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Summerlin Homes for Sale — Instant Value Estimate
            </h2>
            <SectionImage
              imageId="h3-cma-review"
              caption="Pair the live estimate with a CMA from Dr. Jan Duffy before you list or buy."
              className="mb-8"
            />
            <p className="mb-8 text-lg text-gray-600">
              Get an accurate, data-driven estimate of your home&apos;s current
              market value using our advanced RealScout technology
            </p>
          </div>

          {/* RealScout Home Value Widget */}
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>',
              }}
            />
          </div>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Real Estate Listings in Las Vegas — Advanced Search
          </h3>
          <SectionImage
            imageId="hero-search"
            caption="Search live listings while you review a Summerlin West value estimate."
            className="mb-6"
          />
          <p className="mb-8 text-lg text-gray-600">
            Search for properties while you check your home&apos;s value
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>',
              }}
            />
          </div>
        </div>

        {/* RealScout Simple Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Homes for Sale in Summerlin — Quick Search
          </h3>
          <SectionImage
            imageId="h3-sold-home"
            caption="Start with live MLS, then call (702) 842-0410 to schedule a walkthrough."
            className="mb-6"
          />
          <p className="mb-8 text-lg text-gray-600">
            Start your search with our simple and intuitive search tool
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>',
              }}
            />
          </div>

          {/* Functional Search Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Search by Price Range
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
            >
              Search by Bedrooms
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
            >
              Search by Location
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
            >
              Search by Property Type
            </button>
          </div>
        </div>
      </div>

      {/* Valuation review: Calendly listing consultation (replaces the CMA request form) */}
      <CalendlyInlineSection
        intent="seller"
        title="Need a Detailed Professional Valuation?"
        description="Book a 30-minute listing consultation. Add your address when you book so Dr. Jan Duffy can pull Summerlin West comps before the call."
      />

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Choose Summerlin West Homes for Your Valuation?
              </h2>
              <p className="text-lg text-gray-600">
                Expert local knowledge combined with cutting-edge technology for
                accurate market insights
              </p>
            </div>

            <HeadingPhotoGrid
              items={[
                {
                  imageId: 'h3-office',
                  heading: 'Market expertise',
                  text: 'Village-level pricing notes for Summerlin West, tied to live MLS — not a website average.',
                },
                {
                  imageId: 'hero-market',
                  heading: 'Current listing context',
                  text: 'Pair the live estimate with a CMA from Dr. Jan Duffy before you price a sale or offer.',
                },
                {
                  imageId: 'h3-entry',
                  heading: 'On-site walkthrough',
                  text: 'Call (702) 842-0410 to schedule a property walkthrough and valuation review.',
                },
              ]}
            />
          </div>
        </div>
      </div>

      <ImageCta
        imageId="hero-valuation"
        title="Ready to review your Summerlin West home value?"
        subtitle="Book a listing consultation above or call (702) 842-0410. GBP does not list a public email."
        primary={{ href: 'tel:+17028420410', label: 'Call (702) 842-0410' }}
      />
    </div>
  );
}
