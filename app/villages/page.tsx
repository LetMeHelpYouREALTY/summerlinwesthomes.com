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
import { headingImages } from '@/lib/section-images';
import {
  MediaThumbHeading,
  OverlayHeadingSection,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';

export default function VillagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        image={headingImages.h1.villages}
        title="Homes for Sale in Las Vegas Summerlin — Village Guide"
        subtitle="Discover the unique character and luxury lifestyle of each village in Summerlin West"
      >
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
      </PageHero>

      {/* Geographic Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              image={headingImages.h2.geography}
              title="Summerlin Homes for Sale: Geography & Boundaries"
            />
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <MediaThumbHeading
                  image={headingImages.h3.vistas}
                  title="Boundaries"
                  titleClassName="mb-3 font-semibold text-amber-600"
                />
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
                <MediaThumbHeading
                  image={headingImages.h3.stonebridge}
                  title="Coverage"
                  titleClassName="mb-3 font-semibold text-amber-600"
                />
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
          <SectionHeading
            image={headingImages.h2.homeValue}
            title="Las Vegas Homes: Values Across Summerlin Villages"
            subtitle="Get instant property value estimates for any village in Summerlin West"
          />

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
          <SectionHeading
            as="h3"
            image={headingImages.h2.search}
            title="Real Estate Listings in Las Vegas — Village Search"
            subtitle="Search homes for sale in Summerlin across every village."
            titleClassName="text-2xl font-bold text-gray-900 md:text-3xl"
          />
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
            <SectionHeading
              as="h3"
              image={headingImages.h3.search}
              title="Homes for Sale in Summerlin — Quick Search"
              subtitle="Start your search with our simple and intuitive search tool"
              titleClassName="text-2xl font-bold text-gray-900 md:text-3xl"
            />
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
            <SectionHeading
              image={headingImages.h2.villages}
              title="Explore Summerlin West Villages & Communities"
              subtitle="Browse live village inventory powered by RealScout MLS data."
            />
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
      <OverlayHeadingSection
        as="h3"
        image={headingImages.h2.cta}
        title="Ready to Find Your Perfect Village?"
        subtitle="Let us help you discover the perfect Summerlin West village for your lifestyle and budget"
      >
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/properties/search"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
            >
              Search All Properties
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-amber-600"
            >
              Schedule Village Tour
            </Link>
          </div>
      </OverlayHeadingSection>

      {/* RealScout Listings Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <SectionHeading
              as="h3"
              image={headingImages.h2.listings}
              title="Available Properties in Summerlin West"
              subtitle="Browse current listings in all Summerlin West villages with real-time MLS data"
              titleClassName="text-3xl font-bold"
            />
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
