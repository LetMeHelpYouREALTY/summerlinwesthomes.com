'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Home,
  Phone,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Star,
  Map,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressiveOnboarding } from '@/components/ProgressiveOnboarding';
import { OnboardingProvider } from '@/components/OnboardingContext';
import { formatSquareFeet } from '@/lib/utils';
import type { Property } from '@/types/real-estate';
import { BUSINESS, telHref } from '@/lib/business';
import { imageMeta, imageSrc } from '@/lib/images';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function SummerlinWestHomes() {
  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-gray-50">
        <HomePage />
      </div>
    </OnboardingProvider>
  );
}
function HomePage() {
      return (
      <>
        <HeroSection />
        <ProgressiveOnboarding />
        <StatsBar />
        <HomeValueWidget />
      <AdvancedSearchWidget />
      <SimpleSearchWidget />
      <RealScoutSearchEmbed />
      <FeaturedProperties />
      <CommunitiesPreview />
      <GoogleReviewsCta />
      <CTASection />
    </>
  );
}

  // Hero Section with Enhanced Visual Appeal
  function HeroSection() {
    const hero = imageMeta('hero-home');
    return (
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src={imageSrc('hero-home')}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1231]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1231]/15 via-[#0b1231]/40 to-[#0b1231]/75" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 text-center text-white md:pb-24 md:pt-40">
          <h1
            className="luxury-hero-title mx-auto mb-6 max-w-4xl text-balance text-5xl leading-[0.92] md:text-7xl"
          >
            <span className="mb-4 block text-base font-semibold uppercase tracking-[0.14em] text-white/90 md:text-xl">
              Summerlin homes for sale · Las Vegas real estate listings
            </span>
            YOUR SUMMERLIN LEGACY.
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg font-medium text-white/90 md:text-3xl">
            Search live Summerlin West inventory, then call {BUSINESS.phoneDisplay} to tour with {BUSINESS.agentName}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="inline-flex items-center justify-center rounded-full bg-[#0b1231] px-10 py-4 text-xl font-semibold tracking-tight text-white shadow-2xl ring-1 ring-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#101c49]"
            >
              Explore Listings
            </button>
            <a
              href={telHref()}
              className="inline-flex items-center justify-center rounded-full bg-[#d8c58e] px-10 py-4 text-xl font-semibold tracking-tight text-[#0b1231] shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ChevronRight className="h-7 w-7 rotate-90 text-white/85" />
        </div>
      </section>
    );
  }

// Enhanced Stats Bar with Real Data
function StatsBar() {
  const stats = [
    { value: '89135', label: 'Primary ZIP', icon: MapPin },
    { value: 'Red Rock', label: 'Canyon access', icon: Map },
    { value: 'Live MLS', label: 'Inventory search', icon: Home },
    { value: BUSINESS.phoneDisplay, label: 'Call to tour', icon: Phone },
  ];

  return (
    <section className="relative z-20 -mt-16 mx-4 rounded-2xl border border-[#d8c58e]/50 bg-[#faf7ef] py-8 shadow-xl md:mx-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 flex justify-center">
                <stat.icon className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-amber-600">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// RealScout Home Value Widget Section
function HomeValueWidget() {
  return (
    <section className="bg-[#f6f4ef] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Las Vegas Homes: What&apos;s Your Summerlin West Worth?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Get an instant, accurate estimate of your Summerlin West
            property&apos;s current market value
          </p>
          <SectionImage
            imageId="hero-valuation"
            caption="Ask for a village-level CMA before you price a Summerlin West home."
            className="mb-8"
          />
        </div>

        {/* RealScout Home Value Widget */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#d8c58e]/40 bg-white p-6 shadow-xl">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>',
            }}
          />
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-gray-500">
            Powered by RealScout&apos;s advanced market analysis technology
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Get Detailed Valuation
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// RealScout Advanced Search Widget Section
function AdvancedSearchWidget() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Real Estate Listings in Las Vegas — Advanced Search
          </h2>
          <SectionImage
            imageId="hero-search"
            caption="Filter homes for sale in Summerlin with live MLS tools."
            className="mb-8"
          />
          <p className="mb-8 text-lg text-gray-600">
            Filter homes for sale in Summerlin with the same tools serious west
            Las Vegas buyers use daily.
          </p>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className="flex justify-center">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>',
            }}
          />
        </div>
      </div>
    </section>
  );
}

// RealScout Simple Search Widget Section
function SimpleSearchWidget() {
  return (
    <section className="bg-[#f7f7fb] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Homes for Sale in Summerlin — Quick Search
          </h2>
          <SectionImage
            imageId="h3-sold-home"
            caption="Jump into live Summerlin West inventory, then call to tour."
            className="mb-8"
          />
          <p className="mb-8 text-lg text-gray-600">
            Jump straight into Las Vegas homes for sale with a streamlined search
            bar.
          </p>
        </div>

        {/* RealScout Simple Search Widget */}
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
    </section>
  );
}

// RealScout Office Listings Section
function RealScoutSearchEmbed() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Las Vegas Homes for Sale — Summerlin West Inventory
          </h2>
          <SectionImage
            imageId="hero-listings"
            caption="Browse real estate listings in Las Vegas with live MLS feeds through RealScout."
            className="mx-auto mb-6 max-w-4xl"
          />
          <p className="mx-auto max-w-2xl text-gray-600">
            Browse real estate listings in Las Vegas with live MLS feeds through
            RealScout.
          </p>
        </div>

        <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-xl">
          {React.createElement('realscout-office-listings', {
            'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
            'sort-order': 'NEWEST',
            'listing-status': 'For Sale',
            'property-types': 'SFR,MF,TC',
            'price-min': '860000',
            'price-max': '1100000',
          })}
        </div>
      </div>
    </section>
  );
}

// Enhanced Featured Properties with Real Data
function FeaturedProperties() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Houses for Sale in Summerlin Las Vegas — Featured Listings
            </h2>
            <SectionImage
              imageId="h3-showing"
              caption="Premium homes for sale in Las Vegas Summerlin West, refreshed live."
              className="mt-6 max-w-3xl"
            />
            <p className="mt-2 text-gray-600">
              Premium homes for sale in Las Vegas Summerlin West, refreshed live
            </p>
          </div>
          <Link
            href="/properties/search"
            prefetch={false}
            className="flex items-center space-x-2 font-semibold text-amber-600 hover:text-amber-700"
          >
            <span>View All Properties</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-lg">
          {React.createElement('realscout-office-listings', {
            'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
            'sort-order': 'NEWEST',
            'listing-status': 'For Sale',
            'property-types': 'SFR,MF,TC',
            'price-min': '900000',
            'price-max': '1200000',
          })}
        </div>
      </div>
    </section>
  );
}

// Enhanced Property Card Component
function PropertyCard({
  property,
  isSaved,
  onToggleSaved,
}: {
  property: Property;
  isSaved: boolean;
  onToggleSaved: () => void;
}) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc('h3-entry')}
          alt={imageMeta('h3-entry').alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <button
          onClick={onToggleSaved}
          aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur transition-all duration-200 hover:bg-white"
        >
          <Heart
            className={cn(
              'h-5 w-5',
              isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'
            )}
          />
        </button>
        <span className="absolute left-4 top-4 rounded-full bg-amber-600 px-3 py-1 text-sm font-semibold text-white">
          {property.details.status === 'for-sale'
            ? 'For Sale'
            : property.details.status}
        </span>
      </div>

      <div className="p-6">
        <h4 className="mb-2 text-2xl font-bold text-amber-600">
          {property.priceFormatted}
        </h4>
        <p className="mb-4 font-medium text-gray-800">{property.title}</p>
        <p className="mb-4 text-sm text-gray-600">
          {property.address.fullAddress}
        </p>

        <div className="mb-6 flex justify-between text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span>{property.details.bedrooms} Beds</span>
          </span>
          <span className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span>{property.details.bathrooms} Baths</span>
          </span>
          <span className="flex items-center space-x-1">
            <Square className="h-4 w-4" />
            <span>{formatSquareFeet(property.details.squareFeet)} sqft</span>
          </span>
        </div>

        <button className="w-full rounded-lg bg-gray-900 py-3 font-medium text-white transition-colors duration-200 hover:bg-amber-600">
          View Details
        </button>
      </div>
    </div>
  );
}

// Communities Preview Section
function CommunitiesPreview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Homes for Sale in Las Vegas Summerlin — Explore Villages
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Compare village-level inventory while you shop Summerlin homes for
            sale.
          </p>
          <SectionImage
            imageId="hero-villages"
            caption="Summerlin West villages sit between the 215 Beltway and Red Rock Canyon."
            className="mx-auto mt-8 max-w-5xl"
          />
          <div className="mx-auto mt-8 max-w-6xl">
            <HeadingPhotoGrid
              items={[
                {
                  imageId: 'h3-village-street',
                  heading: 'Village streets',
                  text: 'Compare The Ridges, The Paseos, The Crossing, and nearby villages on live MLS.',
                },
                {
                  imageId: 'h3-village-park',
                  heading: 'Parks and paths',
                  text: 'Desert trails and village parks sit minutes from many Summerlin West homes.',
                },
                {
                  imageId: 'section-golf',
                  heading: 'Golf-course pockets',
                  text: 'Tour golf-adjacent inventory only after you confirm club access and HOA terms.',
                },
              ]}
            />
          </div>
        </div>

        <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-lg">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="520000" price-max="880000"></realscout-office-listings>',
            }}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/villages"
            prefetch={false}
            className="inline-block rounded-lg bg-amber-600 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-700"
          >
            Explore All Communities
          </Link>
        </div>
      </div>
    </section>
  );
}

function GoogleReviewsCta() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Read Google reviews for {BUSINESS.gbpTitle}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Reviews live on Google Maps, not on this page. Open the Business
          Profile to read verified buyer and seller feedback before you tour.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BUSINESS.reviewsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white hover:bg-amber-700"
          >
            <Star className="h-5 w-5" aria-hidden />
            View Google Reviews
          </a>
          <a
            href={telHref()}
            className="inline-flex items-center gap-2 rounded-lg border border-[#0b1231] px-8 py-3 font-semibold text-[#0b1231]"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <ImageCta
      imageId="hero-home"
      title="Homes for sale in Las Vegas — start your Summerlin West search"
      subtitle="Move from browsing listings to touring the homes that fit your brief. Call (702) 842-0410."
      primary={{ href: '/properties/search', label: 'Start your search' }}
    />
  );
}
