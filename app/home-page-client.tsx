'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Users,
  TrendingUp,
  Map,
} from 'lucide-react';
import { BUSINESS, googleReviewsUrl, mapsUrl, telHref } from '@/lib/business';
import { ProgressiveOnboarding } from '@/components/ProgressiveOnboarding';
import { OnboardingProvider } from '@/components/OnboardingContext';
import { headingImages } from '@/lib/section-images';
import {
  OverlayHeadingSection,
  SectionHeading,
} from '@/components/media/heading-media';
import ServiceCards from '@/components/services/service-cards';
import OfficeListingsAfterHero from '@/components/realscout/office-listings-after-hero';
import LazyRealScoutWidget from '@/components/realscout/lazy-realscout-widget';

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
        <OfficeListingsAfterHero />
        <ProgressiveOnboarding />
        <StatsBar />
        <HomeValueWidget />
      <AdvancedSearchWidget />
      <SimpleSearchWidget />
      <ListingsCtaSection />
      <CommunitiesPreview />
      <ServiceCards />
      <GoogleReviewsSection />
      <CTASection />
    </>
  );
}

  // Hero Section with Enhanced Visual Appeal
  function HeroSection() {
    return (
      <section className="photo-hero relative flex min-h-screen items-end overflow-hidden">
        <Image
          src={headingImages.h1.home.src}
          alt={headingImages.h1.home.alt}
          fill
          priority
          fetchPriority="high"
          quality={70}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#050b25]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b25]/50 via-[#050b25]/15 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 text-center text-white md:pb-24 md:pt-40">
          <div className="photo-hero-panel rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <h1 className="luxury-hero-title mx-auto mb-6 max-w-4xl text-balance text-5xl leading-[0.92] text-white md:text-7xl">
            <span className="mb-4 block text-base font-semibold uppercase tracking-[0.14em] text-white md:text-xl">
              Summerlin Real Estate · Las Vegas
            </span>
            YOUR NEXT CHAPTER.
          </h1>
          <p className="luxury-hero-copy mx-auto mb-10 max-w-3xl text-lg font-medium text-white md:text-3xl">
            Buyers, sellers, and investors across Summerlin, Las Vegas,
            Henderson, and Clark County. Call{' '}
            <span className="whitespace-nowrap">{BUSINESS.phoneDisplay}</span>.
          </p>
          <button
            onClick={() =>
              window.open(
                'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="inline-flex items-center justify-center rounded-full bg-[#e8d5a3] px-10 py-4 text-xl font-semibold tracking-tight text-[#050b25] shadow-2xl ring-1 ring-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f3e6c0]"
          >
            Explore Listings
          </button>
          </div>
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
    { value: 'Summerlin', label: 'Primary market', icon: Home },
    { value: '2008', label: 'Office opened', icon: Map },
    { value: '89135', label: 'Las Vegas zip', icon: Users },
    { value: BUSINESS.phoneDisplay, label: 'Call or text', icon: TrendingUp },
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
          <LazyRealScoutWidget
            html='<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>'
            label="Summerlin West home value tool"
            minHeightClass="min-h-[10rem]"
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
          <LazyRealScoutWidget
            html='<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>'
            label="Advanced Summerlin home search"
            minHeightClass="min-h-[16rem]"
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
          <LazyRealScoutWidget
            html='<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>'
            label="Quick Summerlin home search"
            minHeightClass="min-h-[8rem]"
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

// Listings CTA — extra RealScout office-listing grids were competing with LCP/TBT.
function ListingsCtaSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          image={headingImages.h2.listings}
          title="Houses for Sale in Summerlin Las Vegas"
          subtitle="Live MLS inventory sits under the hero. Search the full office catalog when you are ready to tour."
        />
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/listings"
            prefetch={false}
            className="inline-flex items-center rounded-lg bg-amber-600 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-700"
          >
            View featured listings
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/properties/search"
            prefetch={false}
            className="inline-flex items-center rounded-lg border border-[#0b1231] px-8 py-3 font-medium text-[#0b1231] transition-colors hover:bg-[#0b1231] hover:text-white"
          >
            Search all properties
          </Link>
        </div>
      </div>
    </section>
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

function GoogleReviewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading
          image={headingImages.h2.testimonials}
          title="Google reviews for Summerlin Real Estate"
          subtitle="Read and leave reviews on the Google Business Profile. This site does not invent star ratings."
        />
        <a
          href={googleReviewsUrl}
          className="mt-6 inline-block rounded-lg bg-[#0b1231] px-8 py-3 font-semibold text-white"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Google Reviews
        </a>
        <a
          href={mapsUrl}
          className="mt-6 ml-3 inline-block rounded-lg border border-[#0b1231] px-8 py-3 font-semibold text-[#0b1231]"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Business Profile
        </a>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <OverlayHeadingSection
      image={headingImages.h2.cta}
      title="Summerlin homes for sale in Las Vegas"
      subtitle="Search listings, then call the office to tour."
    >
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/properties/search"
            prefetch={false}
            className="rounded-lg bg-white px-8 py-3 font-semibold text-amber-600 transition-all hover:shadow-xl"
          >
            Search listings
          </Link>
          <a
            href={telHref}
            className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-amber-600"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
    </OverlayHeadingSection>
  );
}

