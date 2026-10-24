'use client';

import CalendlyInlineSection from '@/components/calendly-inline-section';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function SellYourHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        imageId="hero-sell"
        title="Homes for Sale in Las Vegas — List Your Summerlin West Home"
        subtitle="Position your listing against current Summerlin West inventory with a pricing and marketing plan from Dr. Jan Duffy."
      />
      <div className="container mx-auto px-4 py-12">
        {/* RealScout Home Value Widget Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Las Vegas Homes: Know Your Value Before You List
            </h2>
            <SectionImage
              imageId="h3-cma-review"
              caption="Ask for a village-level CMA before you set a Summerlin West list price."
              className="mb-6"
            />
            <p className="text-lg text-gray-600">
              Discover what your Summerlin West property is worth before you
              sell
            </p>
          </div>

          {/* RealScout Home Value Widget */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>',
              }}
            />
          </div>

          {/* RealScout Advanced Search Widget */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Compare Homes for Sale in Summerlin While You Prep
            </h3>
            <SectionImage
              imageId="h3-sold-home"
              caption="Compare live Summerlin West inventory while you prep your listing."
              className="mb-6"
            />
            <p className="mb-8 text-lg text-gray-600">
              Explore the market while you learn about selling your home
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
              Las Vegas Homes for Sale — Quick Search
            </h3>
            <SectionImage
              imageId="h3-bedroom"
              caption="Start with live MLS, then call (702) 842-0410 to schedule showings."
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

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Why Choose Us */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Why Choose Summerlin West Homes?
                </h2>
                <HeadingPhotoGrid
                  columns={2}
                  items={[
                    {
                      imageId: 'h3-kitchen',
                      heading: 'Pricing from live comps',
                      text: 'Ask for a village-level CMA. Do not use website averages to set a list price.',
                    },
                    {
                      imageId: 'h3-entry',
                      heading: 'Prep before you list',
                      text: 'Stage, photograph, and time the launch around current Summerlin West inventory.',
                    },
                    {
                      imageId: 'h3-closing-table',
                      heading: 'Offer review',
                      text: 'Walk terms, timing, and contingencies with Dr. Jan Duffy at (702) 842-0410.',
                    },
                    {
                      imageId: 'h3-village-street',
                      heading: 'Local village knowledge',
                      text: 'The Ridges, The Paseos, The Crossing, and nearby villages each price differently.',
                    },
                  ]}
                />
              </div>

              {/* Our Selling Process */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Our 5-Step Selling Process
                </h2>
                <HeadingPhotoGrid
                  items={[
                    {
                      imageId: 'h3-cma-review',
                      heading: '1. Consultation',
                      text: 'Schedule a no-obligation call to discuss timeline, HOA terms, and listing goals.',
                    },
                    {
                      imageId: 'hero-market',
                      heading: '2. Market analysis',
                      text: 'Get a CMA tied to live MLS comps for your village — not a website average.',
                    },
                    {
                      imageId: 'h3-staging',
                      heading: '3. Property prep',
                      text: 'Staging, repairs, and photography before the listing goes live.',
                    },
                    {
                      imageId: 'h3-kitchen',
                      heading: '4. Marketing',
                      text: 'Professional photos and listing copy go live only after the home is ready to show.',
                    },
                    {
                      imageId: 'h3-showing',
                      heading: '5. Showings and offers',
                      text: 'Walk terms, timing, and contingencies with Dr. Jan Duffy at (702) 842-0410.',
                    },
                  ]}
                />
              </div>

              {/* Market Insights */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Summerlin West Market Insights
                </h3>
                <HeadingPhotoGrid
                  columns={2}
                  items={[
                    {
                      imageId: 'h3-sold-home',
                      heading: 'Price from live comps',
                      text: 'Ask for a CMA. Website averages are not current MLS statistics.',
                    },
                    {
                      imageId: 'h3-cma-review',
                      heading: 'Village-level review',
                      text: 'The Ridges, The Paseos, and The Crossing each price differently. Call (702) 842-0410.',
                    },
                  ]}
                />
              </div>
            </div>

            {/* Listing consultation (Calendly replaces the evaluation request form) */}
            <div className="space-y-8">
              <div className="overflow-hidden rounded-xl bg-white shadow-xl">
                <CalendlyInlineSection
                  intent="seller"
                  title="Get Your Free Home Evaluation"
                  description="Book a 30-minute listing consultation. Add your address when you book so Dr. Jan Duffy can pull comps first, then get a pricing and selling plan."
                />
              </div>

              <ImageCta
                imageId="hero-sell"
                title="Ready to list your Summerlin West home?"
                subtitle="Call (702) 842-0410 or book a seller consultation. GBP does not list a public email."
                primary={{ href: 'tel:+17028420410', label: 'Call (702) 842-0410' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
