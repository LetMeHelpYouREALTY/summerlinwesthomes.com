'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Users } from 'lucide-react';
import {
  BUSINESS,
  BUSINESS_ADDRESS_LINE,
  googleReviewsUrl,
  telHref,
} from '@/lib/business';
import { headingImages } from '@/lib/section-images';
import { PageHero, SectionHeading } from '@/components/media/heading-media';

export default function AboutSection() {
  return (
    <>
      <PageHero
        image={headingImages.h1.about}
        title="About Summerlin Real Estate"
        subtitle={`${BUSINESS.name} at ${BUSINESS_ADDRESS_LINE}. Call ${BUSINESS.phoneDisplay}.`}
      />
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">{BUSINESS.description}</p>

            <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Office</h4>
                <p className="text-sm">
                  {BUSINESS.streetAddress}, {BUSINESS.addressLocality},{' '}
                  {BUSINESS.addressRegion} {BUSINESS.postalCode}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Phone className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Call or text</h4>
                <p className="text-sm">
                  {BUSINESS.phoneDisplay} · {BUSINESS.hoursDisplay}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Since 2008</h4>
                <p className="text-sm">
                  Opened September 20, 2008. Nevada license {BUSINESS.license}.
                </p>
              </div>
            </div>

            <p>
              Specialties include The Ridges, Summerlin West, Red Rock Country
              Club, Sun City, and Del Webb communities. Sun City and Del Webb
              55+ sales refer to age-qualified Housing for Older Persons Act
              communities.
            </p>
            <p className="mt-6">
              <a
                href={telHref}
                className="font-semibold text-[#0b1231] underline-offset-2 hover:underline"
              >
                Call {BUSINESS.phoneDisplay}
              </a>
              {' · '}
              <Link
                href="/office"
                className="font-semibold text-[#0b1231] underline-offset-2 hover:underline"
              >
                Office details
              </Link>
              {' · '}
              <a
                href={googleReviewsUrl}
                className="font-semibold text-[#0b1231] underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Google Reviews
              </a>
            </p>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <SectionHeading
              as="h3"
              image={headingImages.h2.featured}
              title="Summerlin homes for sale"
              subtitle="Preview current listings across Summerlin, Summerlin West, and the wider Las Vegas service area."
              titleClassName="text-3xl font-bold md:text-4xl"
            />
          </div>
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="250000" price-max="900000"></realscout-office-listings>',
              }}
            />
          </div>
        </div>
      </section>
    </section>
    </>
  );
}
