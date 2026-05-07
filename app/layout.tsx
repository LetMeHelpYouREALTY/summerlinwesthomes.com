import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getSiteUrl } from '@/lib/site-url';
import GlobalRouteFaq from '@/components/seo/global-route-faq';
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
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

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
  openGraph: {
    siteName: 'Summerlin West Homes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image-summerlin-west-homes.jpg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Homes - Luxury Real Estate in Las Vegas',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-summerlin-west-homes.webp',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Homes - Luxury Real Estate in Las Vegas',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/images/twitter-image-summerlin-west-homes.jpg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Homes - Luxury Real Estate in Las Vegas',
      },
    ],
  },
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
              '@type': 'RealEstateAgent',
              '@id': `${siteUrl}/#organization`,
              name: 'Summerlin West Homes',
              alternateName: 'Summerlin West Luxury Real Estate',
              description:
                'Premier luxury real estate agency specializing in Summerlin West, Las Vegas. Expert agents with deep local market knowledge and personalized service for discerning buyers and sellers.',
              url: siteUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/images/logo-summerlin-west-homes.png`,
                width: 300,
                height: 100,
              },
              image: {
                '@type': 'ImageObject',
                url: `${siteUrl}/images/hero-summerlin-west-luxury-homes.jpg`,
                width: 1200,
                height: 630,
              },
              telephone: '+1-702-555-0100',
              email: 'info@summerlinwesthomes.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Luxury Lane',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89135',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
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
                  latitude: 36.1699,
                  longitude: -115.1398,
                },
                geoRadius: '15000',
              },
              openingHours: [
                'Mo-Fr 09:00-18:00',
                'Sa 10:00-16:00',
                'Su 12:00-16:00',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-702-555-0100',
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
                    ],
                    opens: '09:00',
                    closes: '18:00',
                  },
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-702-555-0101',
                  contactType: 'sales',
                  availableLanguage: 'English',
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
                      '@type': 'Product',
                      name: 'Luxury Homes',
                      description:
                        'Premium properties in Summerlin West communities',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Real Estate Consultation',
                      description:
                        'Expert guidance for luxury property transactions',
                    },
                  },
                ],
              },
              foundingDate: '2010',
              numberOfEmployees: '15',
              award: [
                'Top Producer - Las Vegas Real Estate',
                'Best of Summerlin - Luxury Real Estate',
                '5-Star Client Satisfaction Rating',
              ],
              review: [
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                  },
                  author: {
                    '@type': 'Person',
                    name: 'John & Jane Doe',
                  },
                  reviewBody:
                    'The Summerlin West Homes team made our home buying experience seamless and enjoyable. Their expertise in the local market is unmatched!',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
                bestRating: '5',
              },
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
        {children}
        <section className="border-t border-gray-200 bg-[#f8f7f4] px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 md:text-3xl">
              Featured Listings
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Browse the newest Summerlin West homes for sale.
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="500000" price-max="650000"></realscout-office-listings>',
              }}
            />
          </div>
        </section>
        <GlobalRouteFaq />
        <footer className="border-t border-gray-200 bg-white px-4 py-5 text-center text-xs text-gray-600">
          <p>Summerlin West | Homes by Dr. Jan Duffy. All rights reserved. © 2026</p>
          <p className="mt-1">
            Berkshire Hathaway HomeServices Nevada Properties | S.0197614.LLC
          </p>
          <p className="mt-3">
            <a
              href="https://calendly.com/drjanduffy/appointment"
              data-calendly-popup="appointment"
              className="font-semibold text-[#0b1231] underline-offset-2 hover:underline"
            >
              Schedule time with me
            </a>
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[11px]">
            <a
              href="/summerlin-west-villages-comparison"
              className="text-[#0b1231] underline-offset-2 hover:underline"
            >
              Compare Summerlin West villages
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="/summerlin-west-market-snapshot"
              className="text-[#0b1231] underline-offset-2 hover:underline"
            >
              Summerlin West market snapshot
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="/summerlin-west-schools-commute-amenities"
              className="text-[#0b1231] underline-offset-2 hover:underline"
            >
              Schools, commute, and amenities guide
            </a>
          </div>
        </footer>

        {/* Vercel Analytics and Performance Monitoring */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// Force redeploy
