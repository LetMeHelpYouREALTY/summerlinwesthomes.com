'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function MarketDataPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero
        imageId="hero-market"
        title="Las Vegas Homes & Summerlin West Market Data"
        subtitle="Use live MLS widgets for current inventory. Call for a CMA — this page does not publish invented averages."
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="rounded-full bg-white/20 px-4 py-2">Live MLS search</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Ask for a CMA</span>
        </div>
      </PageHero>
      <p className="mx-auto max-w-4xl px-4 py-4 text-center text-sm text-amber-900">
        Use live MLS widgets and a CMA from Dr. Jan Duffy. This page does not
        publish sample averages, invented prices, or fabricated closings.
      </p>

      {/* RealScout Home Value Widget Section */}
      <section className="bg-[#f6f4ef] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las Vegas Homes: Your Summerlin West Market Value
            </h2>
            <SectionImage
              imageId="h3-cma-review"
              caption="Ask for a village-level CMA. Do not use a website average to price an offer."
              className="mb-8"
            />
            <p className="text-lg text-gray-600 mb-8">
              Get instant property value estimates with our advanced RealScout technology
            </p>
          </div>
          
          {/* RealScout Home Value Widget */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div
              dangerouslySetInnerHTML={{
                __html: '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>'
              }}
            />
          </div>
        </div>
        
        {/* RealScout Advanced Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Real Estate Listings in Las Vegas — Advanced Search
          </h3>
          <SectionImage
            imageId="hero-search"
            caption="Pair live Summerlin West listings with a CMA before you tour."
            className="mx-auto mb-8 max-w-4xl"
          />
          <p className="text-lg text-gray-600 mb-8">
            Pair homes for sale in Las Vegas with the stats you just reviewed.
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>'
              }}
            />
          </div>
        </div>
        
        {/* RealScout Simple Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Homes for Sale in Summerlin — Quick Search
          </h3>
          <SectionImage
            imageId="h3-sold-home"
            caption="Jump into live MLS — not sample figures — then call (702) 842-0410."
            className="mx-auto mb-8 max-w-4xl"
          />
          <p className="text-lg text-gray-600 mb-8">
            Jump into Las Vegas homes for sale while market signals are fresh.
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: '<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>'
              }}
            />
          </div>
          
                        {/* Functional Search Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => window.open('https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy', '_blank', 'noopener,noreferrer')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search by Price Range
                </button>
                <button 
                  onClick={() => window.open('https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy', '_blank', 'noopener,noreferrer')}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Search by Bedrooms
                </button>
                <button 
                  onClick={() => window.open('https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy', '_blank', 'noopener,noreferrer')}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Search by Location
                </button>
                <button 
                  onClick={() => window.open('https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy', '_blank', 'noopener,noreferrer')}
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Search by Property Type
                </button>
              </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            How to Read Summerlin West Market Data
          </h2>
          <HeadingPhotoGrid
            columns={2}
            items={[
              {
                imageId: 'h3-sold-home',
                heading: 'Active inventory',
                text: 'Count live listings by village on RealScout. Website averages are not MLS statistics.',
              },
              {
                imageId: 'h3-cma-review',
                heading: 'Price from comps',
                text: 'Ask Dr. Jan Duffy for a CMA. Call (702) 842-0410 before you price an offer or a listing.',
              },
              {
                imageId: 'h3-showing',
                heading: 'Days on market',
                text: 'Watch listing freshness on the live feed. Timing shifts by village and by week.',
              },
              {
                imageId: 'h3-bedroom',
                heading: 'Price per square foot',
                text: 'Compare similar square footage and finishes on the listing sheet, not a blended village number.',
              },
            ]}
          />
        </div>
      </section>

      {/* Recent Sales */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Recent Sales in Summerlin West
          </h2>
          <HeadingPhotoGrid
            items={[
              {
                imageId: 'h3-sold-home',
                heading: 'Closed inventory',
                text: 'Recent closes live in MLS. This page does not invent addresses, prices, or sold dates.',
              },
              {
                imageId: 'hero-market',
                heading: 'Village-level comps',
                text: 'The Ridges, The Paseos, and The Crossing each close on different terms. Confirm on a CMA.',
              },
              {
                imageId: 'h3-consultation',
                heading: 'Ask for a CMA',
                text: 'Call (702) 842-0410 for current sold comps tied to the village you want to tour.',
              },
            ]}
          />
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Summerlin West Geographic Focus
          </h2>
          <HeadingPhotoGrid
            items={[
              {
                imageId: 'h3-beltway',
                heading: 'East: 215 Beltway',
                text: 'Summerlin West sits west of the Beltway toward Red Rock Canyon.',
              },
              {
                imageId: 'h3-charleston',
                heading: 'South: Charleston Boulevard',
                text: 'Charleston (SR 159) is the west corridor toward Red Rock Canyon.',
              },
              {
                imageId: 'section-red-rock',
                heading: 'West: Red Rock Canyon',
                text: 'Primary coverage is ZIP 89135, with 89138 portions only.',
              },
            ]}
          />

          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-amber-600">
                    Boundaries
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>North:</strong> Sahara Avenue
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>South:</strong> Charleston Boulevard
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>East:</strong> 215 Beltway
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>West:</strong> Red Rock Canyon
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-amber-600">
                    Coverage
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Primary Zip:</strong> 89135
                    </li>
                    <li>
                      <strong>Partial Zip:</strong> 89138 (Summerlin West
                      portions only)
                    </li>
                    <li>
                      <strong>Total Area:</strong> 22,500 acres
                    </li>
                    <li>
                      <strong>Villages:</strong> 10 unique communities
                    </li>
                    <li>
                      <strong>Excluded:</strong> Spanish Trail, Queensridge,
                      Tournament Hills
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageCta
        imageId="hero-market"
        title="Need a village-level CMA for Summerlin West?"
        subtitle="Call (702) 842-0410 for a current comparative market analysis tied to live MLS."
        primary={{ href: '/properties/search', label: 'Search live listings' }}
      />

      {/* RealScout Listings Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold">
              Current Summerlin West Market Listings
            </h3>
            <SectionImage
              imageId="hero-listings"
              caption="Live RealScout MLS inventory — not sample figures."
              className="mx-auto mb-6 max-w-4xl"
            />
            <p className="mx-auto max-w-2xl text-gray-600">
              Explore active properties that reflect current market conditions
              and pricing trends
            </p>
          </div>
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-xl">
            {React.createElement('realscout-office-listings', {
              'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
              'sort-order': 'NEWEST',
              'listing-status': 'For Sale',
              'property-types': 'SFR,MF,TC',
              'price-min': '620000',
              'price-max': '780000',
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
