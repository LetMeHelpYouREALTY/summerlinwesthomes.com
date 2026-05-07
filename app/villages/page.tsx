'use client';

import React from 'react';
import Link from 'next/link';
import {
  Map,
  Home,
  Mountain,
  Shield,
  Users,
  Star,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function VillagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Summerlin West Villages - Luxury Communities in Las Vegas
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Discover the unique character and luxury lifestyle of each village
            in Summerlin West
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              22,500 Acres
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              10 Unique Villages
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Guard Gated
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Red Rock Views
            </span>
          </div>
        </div>
      </section>

      {/* Geographic Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Summerlin West Geographic Boundaries & Location
            </h2>
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
              Check Home Values Across Summerlin West Villages
            </h2>
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
            Advanced Property Search
          </h3>
          <p className="mb-8 text-lg text-gray-600">
            Search for properties across all Summerlin West villages
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
              Quick Property Search
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

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-3xl font-bold">
            Ready to Find Your Perfect Village?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Let us help you discover the perfect Summerlin West village for your
            lifestyle and budget
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/properties/search"
              className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Search All Properties
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-amber-600 px-8 py-3 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
            >
              Schedule Village Tour
            </Link>
          </div>
        </div>
      </section>

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
