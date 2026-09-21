'use client';

import React from 'react';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function VillagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero
        imageId="hero-villages"
        title="Homes for Sale in Las Vegas Summerlin — Village Guide"
        subtitle="Discover the unique character and luxury lifestyle of each village in Summerlin West"
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="rounded-full bg-white/20 px-4 py-2">Red Rock views</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Master-planned villages</span>
          <span className="rounded-full bg-white/20 px-4 py-2">ZIP 89135</span>
        </div>
      </PageHero>

      {/* Geographic Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Summerlin Homes for Sale: Geography & Boundaries
            </h2>
            <SectionImage
              imageId="section-red-rock"
              caption="Summerlin West sits west of the 215 Beltway toward Red Rock Canyon."
              className="mb-8"
            />
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 font-semibold text-amber-600">
                  Boundaries
                </h3>
                <ul className="space-y-2 text-left text-sm">
                  <li>
                    <strong>North:</strong> Sahara Avenue
                  </li>
                  <li>
                    <strong>South:</strong> Charleston Boulevard
                  </li>
                  <li>
                    <strong>East:</strong> 215 Beltway
                  </li>
                  <li>
                    <strong>West:</strong> Red Rock Canyon
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 font-semibold text-amber-600">Coverage</h3>
                <ul className="space-y-2 text-left text-sm">
                  <li>
                    <strong>Primary Zip:</strong> 89135
                  </li>
                  <li>
                    <strong>Partial Zip:</strong> 89138
                  </li>
                  <li>
                    <strong>Total Area:</strong> 22,500 acres
                  </li>
                  <li>
                    <strong>Villages:</strong> 10 unique communities
                  </li>
                </ul>
              </div>
            </div>
            <p className="mx-auto max-w-2xl text-gray-600">
              Summerlin West is strategically located between the 215 Beltway
              and Red Rock Canyon, offering the perfect balance of accessibility
              and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Home Value Widget Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Las Vegas Homes: Values Across Summerlin Villages
            </h2>
            <SectionImage
              imageId="h3-village-street"
              caption="Compare village-level values on live MLS, then tour The Ridges, The Paseos, and nearby streets."
              className="mb-8"
            />
            <p className="mb-8 text-lg text-gray-600">
              Get instant property value estimates for any village in Summerlin
              West
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
            Real Estate Listings in Las Vegas — Village Search
          </h3>
          <p className="mb-8 text-lg text-gray-600">
            Search homes for sale in Summerlin across every village.
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>',
              }}
            />
          </div>

          {/* RealScout Simple Search Widget */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Homes for Sale in Summerlin — Quick Search
            </h3>
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
      </section>

      {/* Villages Listings */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Explore Summerlin West Villages & Communities
            </h2>
            <SectionImage
              imageId="h3-village-park"
              caption="Browse live village inventory powered by RealScout MLS data."
              className="mx-auto mb-6 max-w-4xl"
            />
            <p className="mx-auto max-w-2xl text-gray-600">
              Browse live village inventory powered by RealScout MLS data.
            </p>
          </div>

          <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-xl">
            {React.createElement('realscout-office-listings', {
              'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
              'sort-order': 'NEWEST',
              'listing-status': 'For Sale',
              'property-types': 'SFR,MF,TC',
              'price-min': '680000',
              'price-max': '850000',
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Match a village to the way you live
          </h2>
            <HeadingPhotoGrid
              items={[
                {
                  imageId: 'section-golf',
                  heading: 'Golf-course villages',
                  text: 'The Ridges and Red Rock Country Club pair estate homes with golf and mountain views.',
                },
                {
                  imageId: 'section-new-construction',
                  heading: 'Newer villages',
                  text: 'Stonebridge and nearby villages often have newer plans and lower-maintenance lots.',
                },
                {
                  imageId: 'h3-trail',
                  heading: 'Trail-oriented streets',
                  text: 'The Vistas and The Paseos sit near parks and desert trail connections.',
                },
              ]}
            />
        </div>
      </section>
      <ImageCta
        imageId="hero-villages"
        title="Ready to find your Summerlin West village?"
        subtitle="Search live inventory, then call (702) 842-0410 to tour The Ridges, The Paseos, The Crossing, and nearby villages."
        primary={{ href: '/properties/search', label: 'Search all properties' }}
      />

      {/* RealScout Listings Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold">
              Available Properties in Summerlin West
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Browse current listings in all Summerlin West villages with
              real-time MLS data
            </p>
          </div>
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-xl">
            {React.createElement('realscout-office-listings', {
              'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
              'sort-order': 'NEWEST',
              'listing-status': 'For Sale',
              'property-types': 'SFR,MF,TC',
              'price-min': '680000',
              'price-max': '850000',
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
