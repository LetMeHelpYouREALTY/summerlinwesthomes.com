'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Phone,
  Mail,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Star,
  Users,
  TrendingUp,
  Map,
} from 'lucide-react';
import { BUSINESS, telHref } from '@/lib/business';
import { cn } from '@/lib/utils';
import { ProgressiveOnboarding } from '@/components/ProgressiveOnboarding';
import { OnboardingProvider } from '@/components/OnboardingContext';
import { formatSquareFeet } from '@/lib/utils';
import type { Property } from '@/types/real-estate';
import { headingImages } from '@/lib/section-images';
import {
  OverlayHeadingSection,
  SectionHeading,
} from '@/components/media/heading-media';
import ServiceCards from '@/components/services/service-cards';

export default function SummerlinWestHomes() {
  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-gray-50">
        <HomePage />
        <Footer />
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
      <ServiceCards />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

  // Hero Section with Enhanced Visual Appeal
  function HeroSection() {
    return (
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src={headingImages.h1.home.src}
          alt={headingImages.h1.home.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Color and contrast overlays */}
        <div className="absolute inset-0 bg-[#0b1231]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1231]/15 via-[#0b1231]/40 to-[#0b1231]/75" />

        {/* Hero content */}
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
            Leverage our specialized market expertise to own the season in
            Summerlin West—live Las Vegas homes inventory at your fingertips.
          </p>
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ChevronRight className="h-7 w-7 rotate-90 text-white/85" />
        </div>
      </section>
    );
  }

// Enhanced Stats Bar with Real Data
function StatsBar() {
  const stats = [
    { value: '2,500+', label: 'Luxury Homes', icon: Home },
    { value: '22,500', label: 'Acres', icon: Map },
    { value: '30+', label: 'Communities', icon: Users },
    { value: '$1.2M', label: 'Avg Home Price', icon: TrendingUp },
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
        <SectionHeading
          image={headingImages.h2.homeValue}
          title="Las Vegas Homes: What's Your Summerlin West Worth?"
          subtitle="Get an instant, accurate estimate of your Summerlin West property's current market value"
        />

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
        <SectionHeading
          image={headingImages.h2.search}
          title="Real Estate Listings in Las Vegas — Advanced Search"
          subtitle="Filter homes for sale in Summerlin with the same tools serious west Las Vegas buyers use daily."
        />

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
        <SectionHeading
          image={headingImages.h2.listings}
          title="Homes for Sale in Summerlin — Quick Search"
          subtitle="Jump straight into Las Vegas homes for sale with a streamlined search bar."
        />

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
        <SectionHeading
          image={headingImages.h2.featured}
          title="Las Vegas Homes for Sale — Summerlin West Inventory"
          subtitle="Browse real estate listings in Las Vegas with live MLS feeds through RealScout."
        />

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
        <div className="mb-12">
          <SectionHeading
            className="mb-6"
            image={headingImages.h2.listings}
            title="Houses for Sale in Summerlin Las Vegas — Featured Listings"
            subtitle="Premium homes for sale in Las Vegas Summerlin West, refreshed live"
          />
          <div className="text-center">
            <Link
              href="/properties/search"
              prefetch={false}
              className="inline-flex items-center space-x-2 font-semibold text-amber-600 hover:text-amber-700"
            >
              <span>View All Properties</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
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
      <div className="relative h-64">
        <Image
          src={headingImages.h3.price.src}
          alt={headingImages.h3.price.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black opacity-20 transition-opacity group-hover:opacity-10"></div>
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
        <SectionHeading
          image={headingImages.h2.villages}
          title="Homes for Sale in Las Vegas Summerlin — Explore Villages"
          subtitle="Compare village-level inventory while you shop Summerlin homes for sale."
        />

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

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: 'The team made our dream of owning in Summerlin West a reality. Exceptional service!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Investor',
      text: 'Professional, knowledgeable, and always available. Best real estate experience.',
      rating: 5,
    },
    {
      name: 'The Williams Family',
      role: 'New Residents',
      text: "They found us the perfect home in The Ridges. Couldn't be happier!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          image={headingImages.h2.testimonials}
          title="What Las Vegas Home Buyers Say About Summerlin West"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-xl bg-gray-50 p-6">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mb-4 italic text-gray-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <OverlayHeadingSection
      image={headingImages.h2.cta}
      title="Homes for Sale in Las Vegas — Start Your Summerlin West Search"
      subtitle="Move from browsing Las Vegas real estate listings to touring the homes that fit your brief."
    >
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-white px-8 py-3 font-semibold text-amber-600 transition-all hover:shadow-xl">
            Start Your Search
          </button>
          <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-amber-600">
            Contact an Agent
          </button>
        </div>
    </OverlayHeadingSection>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-bold text-amber-400">
              Summerlin West Homes
            </h4>
            <p className="text-sm text-gray-400">
              Your trusted partner in luxury real estate
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Buyer &amp; seller tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Summerlin West real estate services
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/search"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Search Summerlin West homes for sale
                </Link>
              </li>
              <li>
                <Link
                  href="/market-data"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Summerlin West real estate market data
                </Link>
              </li>
              <li>
                <Link
                  href="/buying-guide"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Las Vegas home buying guide
                </Link>
              </li>
              <li>
                <Link
                  href="/sell-your-home"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Sell your Summerlin home
                </Link>
              </li>
              <li>
                <Link
                  href="/home-valuation"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Summerlin West home value context
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage-calculator"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Mortgage payment calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Areas &amp; lifestyle</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/villages"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Luxury villages &amp; communities overview
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Golf, recreation &amp; Summerlin amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/schools"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Schools serving Summerlin West
                </Link>
              </li>
              <li>
                <Link
                  href="/transportation"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Transportation &amp; Las Vegas access
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Featured Summerlin West listings
                </Link>
              </li>
              <li>
                <Link
                  href="/summerlin-west-villages-comparison"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Compare Summerlin West villages by lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/summerlin-west-market-snapshot"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Summerlin West market snapshot and trends
                </Link>
              </li>
              <li>
                <Link
                  href="/summerlin-west-schools-commute-amenities"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Schools, commute, and amenities planning guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contact Info</h4>
            <p className="text-sm text-gray-400">
              {BUSINESS.streetAddress}
              <br />
              {BUSINESS.addressLocality}, {BUSINESS.addressRegion}{' '}
              {BUSINESS.postalCode}
              <br />
              <a href={telHref} className="hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>Local experts for Summerlin West real estate and relocation support.</p>
        </div>
      </div>
    </footer>
  );
}
