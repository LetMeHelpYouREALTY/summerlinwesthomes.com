import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import {
  AREA_SERVED,
  BUSINESS,
  SOCIAL_PROFILES,
  SPECIAL_HOURS,
  mapsUrl,
} from '@/lib/business';
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
  '/images/dr-duffy/h1-home.jpg',
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
    template: '%s | Summerlin Real Estate',
    default: 'Summerlin Real Estate | Homes by Dr. Jan Duffy',
  },
  description: BUSINESS.description,
  keywords: [
    'Summerlin Real Estate',
    'Las Vegas Real Estate',
    'Dr. Jan Duffy',
    'Summerlin West',
    'The Ridges',
    'Red Rock Country Club',
    'Sun City',
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
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
              '@id': `${BUSINESS.website}/#organization`,
              name: BUSINESS.name,
              alternateName: [
                BUSINESS.shortName,
                'Homes by Dr. Jan Duffy',
              ],
              description: BUSINESS.description,
              url: BUSINESS.website,
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
              foundingDate: BUSINESS.foundingDate,
              areaServed: [...AREA_SERVED],
              openingHours: [...BUSINESS.openingHours],
              specialOpeningHoursSpecification: [...SPECIAL_HOURS],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: BUSINESS.phoneSchema,
                  contactType: 'customer service',
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
              sameAs: [...SOCIAL_PROFILES],
              amenityFeature: [
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Wheelchair accessible entrance',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Wheelchair accessible parking lot',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Wheelchair accessible restroom',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Wheelchair accessible seating',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Free parking lot',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Free parking garage',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Gender-neutral restroom',
                  value: true,
                },
              ],
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'Veteran-owned',
                  value: 'True',
                },
                {
                  '@type': 'PropertyValue',
                  name: 'Women-owned',
                  value: 'True',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Summerlin Real Estate Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Luxury residential home sales',
                      description:
                        'Buyer and seller representation for luxury residential homes in Summerlin, Las Vegas, Henderson, and Clark County.',
                      areaServed: [...AREA_SERVED],
                      provider: { '@id': `${BUSINESS.website}/#organization` },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Real estate consulting',
                      description:
                        'Investment property consulting, 55+ active-adult community sales, new construction, divorce and probate, and relocation services. Call (702) 842-0410.',
                      areaServed: [...AREA_SERVED],
                      provider: { '@id': `${BUSINESS.website}/#organization` },
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
                'Summerlin real estate',
                'The Ridges',
                'Summerlin West',
                'Red Rock Country Club',
                'Sun City',
                'Del Webb communities',
                'Luxury residential home sales',
                'Investment property consulting',
              ],
              communities: [
                {
                  '@type': 'Place',
                  name: 'The Ridges',
                  description: 'Summerlin community specialty',
                },
                {
                  '@type': 'Place',
                  name: 'Summerlin West',
                  description: 'West-valley Summerlin villages',
                },
                {
                  '@type': 'Place',
                  name: 'Red Rock Country Club',
                  description: 'Summerlin golf community specialty',
                },
                {
                  '@type': 'Place',
                  name: 'Sun City',
                  description: '55+ active-adult community sales',
                },
                {
                  '@type': 'Place',
                  name: 'Del Webb',
                  description: '55+ active-adult community sales',
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
              '@id': `${BUSINESS.website}/#website`,
              url: BUSINESS.website,
              name: BUSINESS.name,
              publisher: { '@id': `${BUSINESS.website}/#organization` },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${BUSINESS.website}/properties/search?q={search_term_string}`,
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
              subtitle="Browse Summerlin, Summerlin West, and Las Vegas homes for sale."
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
