import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BUSINESS, mapsUrl } from '@/lib/business';
import { absoluteMediaUrl } from '@/lib/media-url';
import { defaultTwitter, openGraphWebsite } from '@/lib/open-graph';
import { getSiteUrl } from '@/lib/site-url';
import GlobalRouteFaq from '@/components/seo/global-route-faq';
import SiteHeader from '@/components/site-header';
import SiteNapFooter from '@/components/site-nap-footer';
import { headingImages } from '@/lib/section-images';
import { SectionHeading } from '@/components/media/heading-media';
import './globals.css';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const siteUrl = getSiteUrl();
const heroImageUrl = absoluteMediaUrl(
  '/images/hero-summerlin-west-luxury-homes.jpg',
  siteUrl,
);
const logoImageUrl = absoluteMediaUrl(
  '/images/logo-summerlin-west-homes.png',
  siteUrl,
);
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

const aggregateRatingValue =
  process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_VALUE?.trim();
const aggregateRatingCount =
  process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_COUNT?.trim();
const aggregateRatingBest =
  process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_BEST?.trim() ?? '5';
const aggregateRating =
  aggregateRatingValue && aggregateRatingCount
    ? {
        '@type': 'AggregateRating',
        ratingValue: aggregateRatingValue,
        reviewCount: aggregateRatingCount,
        bestRating: aggregateRatingBest,
      }
    : undefined;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Summerlin West Homes',
    default: 'Luxury Real Estate in Summerlin West, Las Vegas',
  },
  description:
    'Luxury Summerlin West real estate: homes for sale, local market insight, villages, amenities, schools, and buying or selling guidance in Las Vegas, Nevada.',
  keywords: [
    'Summerlin West Homes',
    'Las Vegas Real Estate',
    'Luxury Homes',
    'Summerlin Properties',
    'Nevada Real Estate',
    'Las Vegas Homes for Sale',
  ],
  authors: [{ name: 'Summerlin West Homes' }],
  creator: 'Summerlin West Homes',
  publisher: 'Summerlin West Homes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: openGraphWebsite(),
  twitter: defaultTwitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={
        {
          '--luxury-hero-image': `url('${heroImageUrl}')`,
        } as CSSProperties
      }
    >
      <head>
        {/* Fonts are preloaded for performance */}
        <link
          rel="preload"
          href="/_next/static/media/569ce4b8f30dc480-s.p.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />

        {/* RealScout script (load once globally) */}
        <link
          rel="preload"
          href="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          as="script"
        />
        <Script
          id="realscout-widget-js"
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />

        {/* RealScout Widget Styles */}
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }

          realscout-simple-search {
            --rs-ss-font-primary-color: #6a6d72;
            --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 500px !important;
          }
        `}</style>

        {/* Enhanced Local Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['RealEstateAgent', 'LocalBusiness'],
              '@id': `${siteUrl}/#organization`,
              name: BUSINESS.name,
              alternateName: 'Summerlin West Luxury Real Estate',
              description:
                'Premier luxury real estate agency specializing in Summerlin West, Las Vegas. Expert agents with deep local market knowledge and personalized service for discerning buyers and sellers.',
              url: siteUrl,
              logo: {
                '@type': 'ImageObject',
                url: logoImageUrl,
                width: 300,
                height: 100,
              },
              image: {
                '@type': 'ImageObject',
                url: heroImageUrl,
                width: 1200,
                height: 630,
              },
              telephone: BUSINESS.phoneSchema,
              email: BUSINESS.email,
              hasMap: mapsUrl,
              address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS.streetAddress,
                addressLocality: BUSINESS.addressLocality,
                addressRegion: BUSINESS.addressRegion,
                postalCode: BUSINESS.postalCode,
                addressCountry: BUSINESS.addressCountry,
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: BUSINESS.latitude,
                longitude: BUSINESS.longitude,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                  sameAs: 'https://en.wikipedia.org/wiki/Las_Vegas',
                },
                {
                  '@type': 'Place',
                  name: 'Summerlin West',
                  description: 'Premier master-planned community in Las Vegas',
                },
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: BUSINESS.latitude,
                  longitude: BUSINESS.longitude,
                },
                geoRadius: '15000',
              },
              openingHours: [...BUSINESS.openingHours],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: BUSINESS.phoneSchema,
                  contactType: 'customer service',
                  availableLanguage: 'English',
                  hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                      'Sunday',
                    ],
                    opens: '06:00',
                    closes: '21:00',
                  },
                },
              ],
              sameAs: [
                'https://www.facebook.com/summerlinwesthomes',
                'https://www.instagram.com/summerlinwesthomes',
                'https://www.linkedin.com/company/summerlin-west-homes',
                'https://www.youtube.com/@summerlinwesthomes',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Luxury Properties in Summerlin West',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Luxury Home Buyer & Seller Representation',
                      description:
                        'Buyer and seller representation for luxury homes across Summerlin West villages including The Ridges, The Summit, and Red Rock Country Club.',
                      areaServed: [
                        { '@type': 'City', name: 'Las Vegas' },
                        { '@type': 'Place', name: 'Summerlin West' },
                      ],
                      provider: { '@id': `${siteUrl}/#organization` },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Real Estate Consultation',
                      description:
                        'Expert guidance for luxury property transactions in Summerlin West and the Las Vegas valley.',
                      areaServed: [
                        { '@type': 'City', name: 'Las Vegas' },
                        { '@type': 'Place', name: 'Summerlin West' },
                      ],
                      provider: { '@id': `${siteUrl}/#organization` },
                    },
                  },
                ],
              },
              ...(aggregateRating ? { aggregateRating } : {}),
              priceRange: '$$$',
              currenciesAccepted: 'USD',
              paymentAccepted: [
                'Cash',
                'Credit Card',
                'Check',
                'Wire Transfer',
              ],
              knowsAbout: [
                'Summerlin West Real Estate Market',
                'Luxury Home Sales',
                'Golf Course Properties',
                'New Construction',
                'Investment Properties',
                'Las Vegas Luxury Market',
              ],
              communities: [
                {
                  '@type': 'Place',
                  name: 'The Ridges',
                  description: 'Luxury golf community in Summerlin West',
                },
                {
                  '@type': 'Place',
                  name: 'The Summit',
                  description: 'Mountain living community',
                },
                {
                  '@type': 'Place',
                  name: 'Red Rock Country Club',
                  description: 'Private golf club community',
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${siteUrl}/#website`,
              url: siteUrl,
              name: 'Summerlin West Homes',
              publisher: { '@id': `${siteUrl}/#organization` },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${siteUrl}/properties/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}
      >
        
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function initCalendlyWidgets() {
                  if (!window.Calendly) return;
                  window.Calendly.initBadgeWidget({
                    url: 'https://calendly.com/drjanduffy/appointment',
                    text: 'Schedule time with me',
                    color: '#0069ff',
                    textColor: '#ffffff',
                    branding: false
                  });
                  document.querySelectorAll('[data-calendly-popup="appointment"]').forEach(function (el) {
                    if (el.dataset.calendlyBound === 'true') return;
                    el.dataset.calendlyBound = 'true';
                    el.addEventListener('click', function (event) {
                      event.preventDefault();
                      if (window.Calendly) {
                        window.Calendly.initPopupWidget({
                          url: 'https://calendly.com/drjanduffy/appointment'
                        });
                      }
                    });
                  });
                }
                window.addEventListener('load', initCalendlyWidgets);
                setTimeout(initCalendlyWidgets, 1500);
              })();
            `,
          }}
        />
        <SiteHeader />
        {children}
        <section className="border-t border-gray-200 bg-[#f8f7f4] px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              image={headingImages.h2.featured}
              title="Featured Listings"
              subtitle="Browse the newest Summerlin West homes for sale."
            />
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="500000" price-max="650000"></realscout-office-listings>',
              }}
            />
          </div>
        </section>
        <GlobalRouteFaq />
        <SiteNapFooter />

        {/* Vercel Analytics and Performance Monitoring */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// Force redeploy
