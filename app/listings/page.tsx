'use client';

import React from 'react';
import { Home, Filter } from 'lucide-react';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function ListingsPage() {
  const agentId = 'QWdlbnQtMjI1MDUw';

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        imageId="hero-listings"
        title="Summerlin Homes for Sale | Real Estate Listings in Las Vegas"
        subtitle="Browse homes for sale in Summerlin and wider Las Vegas MLS inventory. Compare live listings before you tour."
      />
      <div className="container mx-auto px-4 py-8">

        {/* RealScout Home Value Widget Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Las Vegas Homes: Summerlin West Value Check
            </h2>
            <SectionImage
              imageId="section-luxury-interior"
              caption="Pair live listings with a village-level value check before you write an offer."
              className="mb-8"
            />
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
              Real Estate Listings in Las Vegas — Advanced Filters
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
              Homes for Sale in Summerlin — Quick Search
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
              Las Vegas Homes for Sale — Live Inventory
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
              Compare Homes for Sale in Las Vegas
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
            How to Read Summerlin Real Estate Listings Like a Pro
          </h2>
          <p className="mb-4 text-gray-700">
            Active inventory can shift quickly across Summerlin West villages. Use
            this page to compare price bands, days on market, and home features
            before scheduling tours. Focusing on live data helps buyers avoid stale
            assumptions and spot stronger opportunities earlier.
          </p>
          <HeadingPhotoGrid
            items={[
              {
                imageId: 'hero-market',
                heading: 'Las Vegas home price positioning',
                text: 'Compare active asking prices with recent closes to understand where negotiation room may exist.',
              },
              {
                imageId: 'hero-villages',
                heading: 'Village fit for homes in Summerlin',
                text: 'Filter by location and home type to narrow inventory to villages that match your commute.',
              },
              {
                imageId: 'h3-entry',
                heading: 'Offer timing on Las Vegas listings',
                text: 'Watch listing freshness and activity before you tour or write an offer.',
              },
            ]}
          />
        </section>
      </div>
      <ImageCta
        imageId="hero-listings"
        title="Tour a Summerlin West listing this week"
        subtitle="Call (702) 842-0410 after you shortlist live MLS homes. Directions and Google reviews are in the footer."
        primary={{ href: '/properties/search', label: 'Open live search' }}
      />
    </div>
  );
}
