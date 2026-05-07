'use client';

import React from 'react';
import { Users, Shield, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Summerlin West Real Estate Listings & Local Expertise
          </h1>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Summerlin West represents the pinnacle of luxury living in Las
              Vegas. As the western portion of the master-planned community of
              Summerlin, this area encompasses over 22,500 acres of stunning
              desert landscape transformed into one of the nation&apos;s premier
              residential developments.
            </p>

            <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Expert Team</h4>
                <p className="text-sm">
                  Dedicated professionals with deep local knowledge
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Trusted Service</h4>
                <p className="text-sm">
                  20+ years serving the Summerlin community
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Market Leaders</h4>
                <p className="text-sm">#1 in luxury home sales in Las Vegas</p>
              </div>
            </div>

            <p>
              Our team specializes in connecting discerning buyers with
              exceptional properties throughout Summerlin West&apos;s diverse
              communities. From golf course estates to modern luxury condos, we
              provide unparalleled service and expertise in navigating this
              prestigious market.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold">
              A Home in Vegas for Sale — Featured Summerlin West Picks
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Preview curated Las Vegas homes for sale before you dive into the
              full MLS-powered inventory.
            </p>
          </div>
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-xl">
            {React.createElement('realscout-office-listings', {
              'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
              'sort-order': 'NEWEST',
              'listing-status': 'For Sale',
              'property-types': 'SFR,MF,TC',
              'price-min': '650000',
              'price-max': '1200000',
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
