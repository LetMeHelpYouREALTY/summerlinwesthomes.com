import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getSiteUrl } from '@/lib/site-url';
import { BUSINESS } from '@/lib/business';
import GlobalRouteFaq from '@/components/seo/global-route-faq';
import BreadcrumbTrail from '@/components/seo/breadcrumb-trail';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import LocalBusinessJsonLd from '@/components/gbp/local-business-jsonld';
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
    template: `%s | ${BUSINESS.shortName}`,
    default: 'Summerlin Homes for Sale | Las Vegas Real Estate Listings',
  },
  description:
    'Summerlin Real Estate | Homes by Dr. Jan Duffy. Search Summerlin West homes for sale, tour listings, and get local buyer guidance in Las Vegas, Nevada.',
  keywords: [
    'Summerlin West Homes',
    'Summerlin homes for sale',
    'Las Vegas Real Estate',
    'Dr. Jan Duffy',
    '89135 homes',
    'Summerlin West listings',
  ],
  authors: [{ name: BUSINESS.agentName }],
  creator: BUSINESS.gbpTitle,
  publisher: BUSINESS.brokerage,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    siteName: BUSINESS.gbpTitle,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image-summerlin-west-homes.jpg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West homes with Red Rock Canyon views — Homes by Dr. Jan Duffy',
        type: 'image/jpeg',
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
        alt: 'Summerlin West homes with Red Rock Canyon views — Homes by Dr. Jan Duffy',
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
        <LocalBusinessJsonLd />
        <SiteHeader />
        <BreadcrumbTrail />
        {children}
        <section className="border-t border-gray-200 bg-[#f8f7f4] px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 md:text-3xl">
              Featured Summerlin West listings
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Browse live MLS homes for sale, then call {BUSINESS.phoneDisplay} to tour.
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  `<realscout-office-listings agent-encoded-id="${BUSINESS.realScoutAgentId}" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="500000" price-max="650000"></realscout-office-listings>`,
              }}
            />
          </div>
        </section>
        <GlobalRouteFaq />
        <SiteFooter />

        {/* Vercel Analytics and Performance Monitoring */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// Force redeploy
