'use client';

import React from 'react';
import { Home, Filter } from 'lucide-react';
import { headingImages } from '@/lib/section-images';
import {
  MediaThumbHeading,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';

export default function ListingsPage() {
  const agentId = 'QWdlbnQtMjI1MDUw';

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        image={headingImages.h1.listings}
        title="Summerlin Homes for Sale | Real Estate Listings in Las Vegas"
        subtitle="Browse homes for sale in Summerlin and wider Las Vegas MLS inventory. Compare live real estate listings before you tour."
      />
      <div className="container mx-auto px-4 py-8">

        {/* RealScout Home Value Widget Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <SectionHeading
              image={headingImages.h2.homeValue}
              title="Las Vegas Homes: Summerlin West Value Check"
              subtitle="Get instant property value estimates while browsing our listings"
            />
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
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <SectionHeading
              image={headingImages.h2.search}
              title="Real Estate Listings in Las Vegas — Advanced Filters"
              subtitle="Use our powerful search tools to find specific properties"
            />
          </div>
          
          {/* RealScout Advanced Search Widget */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div
              dangerouslySetInnerHTML={{
                __html: '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>'
              }}
            />
          </div>
        </div>
        
        {/* RealScout Simple Search Widget */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <SectionHeading
              image={headingImages.h3.search}
              title="Homes for Sale in Summerlin — Quick Search"
              subtitle="Start your search with our simple and intuitive search tool"
            />
          </div>
          
          {/* RealScout Simple Search Widget */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
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

        {/* RealScout Widget */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-6">
            <SectionHeading
              image={headingImages.h2.featured}
              title={
                <>
                  <Home className="mr-2 inline-block h-6 w-6 text-amber-600" />
                  Las Vegas Homes for Sale — Live Inventory
                </>
              }
              subtitle="Powered by RealScout MLS integration - showing real-time property data"
              titleClassName="text-2xl font-semibold text-gray-900"
            />
          </div>

          {/* RealScout Office Listings Widget */}
          {React.createElement('realscout-office-listings', {
            'agent-encoded-id': agentId,
            'sort-order': 'NEWEST',
            'listing-status': 'For Sale',
            'property-types': 'SFR,MF,TC',
            'price-min': '560000',
            'price-max': '720000',
            'show-filters': 'true',
            'show-sort': 'true',
            'show-pagination': 'true'
          })}
        </div>

        {/* Additional Widget */}
        <div className="mt-8">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <SectionHeading
              as="h3"
              image={headingImages.h2.search}
              title={
                <>
                  <Filter className="mr-2 inline-block h-5 w-5 text-amber-600" />
                  Compare Homes for Sale in Las Vegas
                </>
              }
              titleClassName="text-xl font-semibold text-gray-900"
            />
            {React.createElement('realscout-property-search', {
              'agent-encoded-id': agentId,
              'show-filters': 'true',
              'show-sort': 'true',
              theme: 'light',
              placeholder: 'Search Summerlin West properties...'
            })}
          </div>
        </div>

        <section className="mt-8 rounded-lg bg-white p-6 shadow-lg">
          <SectionHeading
            image={headingImages.h2.guide}
            title="How to Read Summerlin Real Estate Listings Like a Pro"
            subtitle="Active inventory can shift quickly across Summerlin West villages. Use this page to compare price bands, days on market, and home features before scheduling tours."
            titleClassName="text-2xl font-semibold text-gray-900"
          />
          <div className="grid gap-4 md:grid-cols-3">
            <article>
              <MediaThumbHeading
                image={headingImages.h3.price}
                title="Las Vegas Home Price Positioning"
              />
              <p className="mt-1 text-gray-700">
                Compare active asking prices with recent closes to understand where
                negotiation room may exist.
              </p>
            </article>
            <article>
              <MediaThumbHeading
                image={headingImages.h3.vistas}
                title="Homes for Sale in Summerlin — Village Fit"
              />
              <p className="mt-1 text-gray-700">
                Filter by location and home type to narrow inventory to villages
                that match your lifestyle and commute needs.
              </p>
            </article>
            <article>
              <MediaThumbHeading
                image={headingImages.h3.timing}
                title="Offer Timing on Las Vegas Listings"
              />
              <p className="mt-1 text-gray-700">
                Watch listing freshness and activity trends to decide when to move
                quickly or when to negotiate more aggressively.
              </p>
            </article>
          </div>
        </section>


      </div>
    </div>
  );
}
