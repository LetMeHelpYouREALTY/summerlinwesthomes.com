'use client';

import React from 'react';
import { Home, Filter } from 'lucide-react';

export default function ListingsPage() {
  const agentId = 'QWdlbnQtMjI1MDUw';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Summerlin West Properties
          </h1>
          <p className="max-w-3xl text-xl text-gray-600">
            Discover luxury homes and properties in Summerlin West, Las Vegas.
            Browse our curated selection of premium real estate listings.
          </p>
        </div>

        {/* RealScout Home Value Widget Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Check Home Values in Summerlin West
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get instant property value estimates while browsing our listings
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
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Property Search
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use our powerful search tools to find specific properties
            </p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Property Search
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start your search with our simple and intuitive search tool
            </p>
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
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              <Home className="mr-2 inline-block h-6 w-6 text-amber-600" />
              Current Listings
            </h2>
            <p className="text-gray-600">
              Powered by RealScout MLS integration - showing real-time property
              data
            </p>
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
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              <Filter className="mr-2 inline-block h-5 w-5 text-amber-600" />
              Advanced Property Search
            </h3>
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
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            How to Use Summerlin West Listings for Better Decisions
          </h2>
          <p className="mb-4 text-gray-700">
            Active inventory can shift quickly across Summerlin West villages. Use
            this page to compare price bands, days on market, and home features
            before scheduling tours. Focusing on live data helps buyers avoid stale
            assumptions and spot stronger opportunities earlier.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <article>
              <h3 className="text-lg font-semibold text-gray-900">Price Positioning</h3>
              <p className="mt-1 text-gray-700">
                Compare active asking prices with recent closes to understand where
                negotiation room may exist.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-gray-900">Village Fit</h3>
              <p className="mt-1 text-gray-700">
                Filter by location and home type to narrow inventory to villages
                that match your lifestyle and commute needs.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-gray-900">Offer Timing</h3>
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
