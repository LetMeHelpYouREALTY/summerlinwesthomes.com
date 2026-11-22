'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Phone, Search, Star } from 'lucide-react';
import CalendlyAfterListings from '@/components/calendly-after-listings';
import { BUSINESS, formattedAddress, telHref } from '@/lib/business';
import { calendlyUrlFor } from '@/lib/calendly';
import { imageMeta, imageSrc } from '@/lib/images';
import {
  LEAD_FORM_ERROR_MESSAGE,
  submitContactForm,
} from '@/lib/submit-contact-form';
import { homeBody, homeDisplay } from './home-fonts';

/*
 * Home page redesign (Nov 2026): one photo, one line, one clear action;
 * separate buying and selling paths; contact without a gate; sticky
 * call/tour/search bar on phones. Colors: ink #1E2A27, stone #F4F3F0,
 * sage #E9ECE8, cabernet accent #5A2A4A.
 */

const SEARCH_URL =
  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy';

const display = 'font-[family-name:var(--font-home-display)] font-normal';
const btnPrimary =
  'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-[#5A2A4A] px-6 font-semibold text-white transition-colors hover:bg-[#46203A] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#5A2A4A]';
const btnOutline =
  'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border-[1.5px] border-[#1E2A27] px-6 font-semibold text-[#1E2A27] transition-colors hover:bg-[#1E2A27] hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#5A2A4A]';

export default function SummerlinWestHomes() {
  return (
    <div
      className={`${homeDisplay.variable} ${homeBody.variable} min-h-screen bg-[#F4F3F0] pb-24 font-[family-name:var(--font-home-body)] text-[18px] leading-relaxed text-[#1E2A27] md:pb-0`}
    >
      <HeroSection />
      <TrackRecord />
      <TwoPaths />
      <ListingsNow />
      <Villages />
      <MarketLink />
      <AboutSection />
      <ContactSection />
      <MobileActionBar />
    </div>
  );
}

function HeroSection() {
  const hero = imageMeta('section-red-rock');
  return (
    <section className="relative isolate overflow-hidden bg-[#2B3431] text-[#F4F3F0]">
      <Image
        src={imageSrc('section-red-rock')}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#1E2A27]/60" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-20 pt-28 md:pb-28 md:pt-40">
        <p className="text-sm uppercase tracking-[0.14em] text-[#E7D9CC]">
          Summerlin homes for sale · Las Vegas real estate
        </p>
        <h1
          className={`${display} max-w-[14ch] text-balance text-[44px] leading-[1.08] md:text-[68px]`}
        >
          Summerlin West, from the 215 to Red Rock.
        </h1>
        <p className="max-w-[46ch] text-lg text-[#EDEAE4] md:text-[21px]">
          Buy or sell here with {BUSINESS.agentName}. Thirty-five years in Las
          Vegas, and she knows what sold on your street last month.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <a
            href={SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-[#F4F3F0] px-7 font-semibold text-[#1E2A27] transition-colors hover:bg-white"
          >
            Search homes for sale
          </a>
          <a
            href="#sell"
            className="inline-flex min-h-[56px] items-center justify-center rounded-md border-[1.5px] border-[#F4F3F0] px-7 font-semibold text-[#F4F3F0] transition-colors hover:bg-[#F4F3F0] hover:text-[#1E2A27]"
          >
            What is my home worth?
          </a>
        </div>
        <p className="text-base text-[#E7D9CC]">
          Or call{' '}
          <a
            href={telHref()}
            className="font-semibold text-white underline-offset-4 hover:underline"
          >
            {BUSINESS.phoneDisplay}
          </a>
          , daily 8 AM to 8 PM.
        </p>
      </div>
    </section>
  );
}

function TrackRecord() {
  const items = [
    { value: '$127M+', label: 'in career home sales' },
    { value: '500+', label: 'buyers and sellers served' },
    { value: '35 years', label: 'in the Las Vegas market' },
    { value: 'Since 2008', label: 'with Berkshire Hathaway HomeServices' },
  ];
  return (
    <section aria-label="Track record" className="border-b border-[#DAD7D0] bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className={`${display} text-[30px] md:text-[34px]`}>{item.value}</span>
            <span className="text-[15px] text-[#5B635F]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TwoPaths() {
  return (
    <section id="search" className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-10 pt-20">
      <h2 className={`${display} text-[36px] md:text-[44px]`}>Two ways to start</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-4 rounded-xl border border-[#DAD7D0] bg-white p-7 md:p-9">
          <span className="text-sm uppercase tracking-[0.12em] text-[#5B635F]">Buying</span>
          <h3 className={`${display} text-[28px] md:text-[32px]`}>
            See every Summerlin West home for sale
          </h3>
          <p className="text-[#3F4845]">
            Filter by village, price and bedrooms. Save a search and get new
            homes the day they list. When one fits, pick a time to tour it.
          </p>
          <div
            className="min-h-[64px]"
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="${BUSINESS.realScoutAgentId}"></realscout-simple-search>`,
            }}
          />
          <div className="mt-2 flex flex-wrap gap-3">
            <a href={SEARCH_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Search homes
            </a>
            <a
              href={calendlyUrlFor('/', 'home-buying-card')}
              data-calendly-popup="page"
              data-calendly-medium="home-buying-card"
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
            >
              Book a private tour
            </a>
          </div>
        </div>

        <div
          id="sell"
          className="flex min-w-0 scroll-mt-24 flex-col gap-4 rounded-xl border border-[#CFD6CF] bg-[#E9ECE8] p-7 md:p-9"
        >
          <span className="text-sm uppercase tracking-[0.12em] text-[#4C5E52]">Selling</span>
          <h3 className={`${display} text-[28px] md:text-[32px]`}>
            Get a price review from recent sales in your village
          </h3>
          <p className="text-[#3F4845]">
            {BUSINESS.agentName} compares your home with what actually sold
            nearby. Start with your address.
          </p>
          <div
            className="min-h-[120px] rounded-lg bg-white p-4"
            dangerouslySetInnerHTML={{
              __html: `<realscout-home-value agent-encoded-id="${BUSINESS.realScoutAgentId}"></realscout-home-value>`,
            }}
          />
          <Link
            href="/sell-your-home"
            prefetch={false}
            className="font-semibold underline-offset-4 hover:underline"
          >
            How selling with Dr. Jan works
          </Link>
        </div>
      </div>
    </section>
  );
}

function ListingsNow() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className={`${display} text-[32px] md:text-[40px]`}>Newest homes for sale</h2>
        <Link
          href="/properties/search"
          prefetch={false}
          className="font-semibold underline-offset-4 hover:underline"
        >
          See all homes for sale
        </Link>
      </div>
      <div className="min-h-[320px] rounded-xl border border-[#DAD7D0] bg-white p-4 md:p-6">
        {React.createElement('realscout-office-listings', {
          'agent-encoded-id': BUSINESS.realScoutAgentId,
          'sort-order': 'NEWEST',
          'listing-status': 'For Sale',
          'property-types': 'SFR,MF,TC',
          'price-min': '860000',
          'price-max': '1200000',
        })}
      </div>
      <CalendlyAfterListings />
    </section>
  );
}

function Villages() {
  const villages = [
    { name: 'The Ridges', line: 'Custom homes and estate lots.' },
    { name: 'The Paseos', line: 'Compare homes, lots and HOA terms.' },
    { name: 'The Crossing', line: 'Compare homes, lots and HOA terms.' },
  ];
  return (
    <section id="villages" className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-14">
      <div className="flex flex-col gap-2">
        <h2 className={`${display} text-[36px] md:text-[44px]`}>Villages of Summerlin West</h2>
        <p className="max-w-[60ch] text-[#3F4845]">
          Part of the 22,500-acre Summerlin community, between the 215 Beltway
          and Red Rock Canyon.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {villages.map((v) => (
          <Link
            key={v.name}
            href="/villages"
            prefetch={false}
            className="flex flex-col gap-2 rounded-xl border border-[#DAD7D0] bg-white p-6 transition-colors hover:border-[#5A2A4A]"
          >
            <span className={`${display} text-[26px]`}>{v.name}</span>
            <span className="text-base text-[#5B635F]">{v.line}</span>
            <span className="mt-2 text-base font-semibold">See this village</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function MarketLink() {
  return (
    <section aria-labelledby="home-market" className="border-y border-[#DAD7D0] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h2 id="home-market" className={`${display} text-[30px] md:text-[36px]`}>
            This month in Summerlin West
          </h2>
          <p className="max-w-[56ch] text-[#3F4845]">
            Prices, time on market and homes for sale, from closed sales.
          </p>
        </div>
        <Link href="/summerlin-west-market-snapshot" prefetch={false} className={btnOutline}>
          See this month&apos;s numbers
        </Link>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex max-w-3xl flex-col gap-5">
        <h2 className={`${display} text-[36px] md:text-[44px]`}>Real numbers, not guesswork</h2>
        <p className="text-[#3F4845]">
          I have helped more than 500 buyers and sellers across Las Vegas. In
          Summerlin West I know which streets back onto the trails, which lots
          hold the mountain view, and what the last three sales near you closed
          for.
        </p>
        <p className="text-[#3F4845]">
          Call me directly. You work with me from the first question to
          closing.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className={btnPrimary}>
            Talk with Dr. Jan
          </a>
          <a
            href={BUSINESS.reviewsUri}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            <Star className="h-5 w-5" aria-hidden />
            Read reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('sending');
    setError('');
    try {
      const result = await submitContactForm({
        formName: 'Home page contact',
        type: 'General Inquiry',
        fields: {
          name: String(form.get('name') ?? '').trim(),
          email: String(form.get('email') ?? '').trim(),
          phone: String(form.get('phone') ?? '').trim() || undefined,
          message: String(form.get('message') ?? '').trim() || undefined,
        },
      });
      if (result.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setError(result.error);
      }
    } catch {
      setStatus('error');
      setError(LEAD_FORM_ERROR_MESSAGE);
    }
  }

  const input =
    'min-h-[52px] w-full rounded-md border-0 bg-white px-4 text-[#1E2A27] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#E7D9CC]';

  return (
    <section id="contact" className="bg-[#2B3431] text-[#F4F3F0]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className={`${display} text-[36px] md:text-[44px]`}>Ask anything</h2>
          <p className="text-[#DCD8D0]">No form needed. Call, or stop by the office.</p>
          <a href={telHref()} className={`${display} text-[32px] text-white`}>
            {BUSINESS.phoneDisplay}
          </a>
          <span className="text-[#DCD8D0]">{formattedAddress()}</span>
          <span className="text-[#DCD8D0]">Daily, 8 AM to 8 PM</span>
        </div>

        {status === 'sent' ? (
          <div role="status" className="flex flex-col justify-center gap-2 rounded-xl bg-[#1E2A27] p-8">
            <p className={`${display} text-[28px]`}>Thank you.</p>
            <p className="text-[#DCD8D0]">
              Your message reached Dr. Jan. For anything urgent, call{' '}
              {BUSINESS.phoneDisplay}.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <label htmlFor="home-name" className="text-[15px] font-semibold">
              Name
            </label>
            <input id="home-name" name="name" type="text" autoComplete="name" required className={input} />
            <label htmlFor="home-email" className="text-[15px] font-semibold">
              Email
            </label>
            <input id="home-email" name="email" type="email" autoComplete="email" required className={input} />
            <label htmlFor="home-phone" className="text-[15px] font-semibold">
              Phone <span className="font-normal text-[#BFC5C1]">(optional)</span>
            </label>
            <input id="home-phone" name="phone" type="tel" autoComplete="tel" className={input} />
            <label htmlFor="home-message" className="text-[15px] font-semibold">
              What can I help with?
            </label>
            <textarea id="home-message" name="message" rows={3} className={`${input} py-3`} />
            {status === 'error' && (
              <p role="alert" className="text-[#F2C9B8]">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 min-h-[56px] rounded-md bg-[#F4F3F0] font-semibold text-[#1E2A27] transition-colors hover:bg-white disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send to Dr. Jan'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function MobileActionBar() {
  const base =
    'flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-md text-base font-semibold';
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-[#DAD7D0] bg-[#F4F3F0] px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 md:hidden"
    >
      <a href={telHref()} className={`${base} bg-[#5A2A4A] text-white`}>
        <Phone className="h-5 w-5" aria-hidden />
        Call
      </a>
      <a
        href={calendlyUrlFor('/', 'home-mobile-bar')}
        data-calendly-popup="page"
        data-calendly-medium="home-mobile-bar"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-[1.5px] border-[#1E2A27] text-[#1E2A27]`}
      >
        <CalendarDays className="h-5 w-5" aria-hidden />
        Tour
      </a>
      <a
        href={SEARCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-[1.5px] border-[#1E2A27] text-[#1E2A27]`}
      >
        <Search className="h-5 w-5" aria-hidden />
        Search
      </a>
    </nav>
  );
}
