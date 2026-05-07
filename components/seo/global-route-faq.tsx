'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

type FaqItem = {
  question: string;
  answer: string;
};

const FALLBACK_FAQ: FaqItem[] = [
  {
    question: 'Where can I search Summerlin West homes for sale right now?',
    answer:
      'Use the live RealScout search tools on this site to browse active Summerlin West listings by budget, beds, and village.',
  },
  {
    question: 'Is Summerlin West part of Las Vegas, Nevada?',
    answer:
      'Yes. Summerlin West is a west Las Vegas master-planned area near Red Rock Canyon with multiple luxury and move-up communities.',
  },
];

const FAQ_BY_ROUTE: Record<string, FaqItem[]> = {
  '/': [
    {
      question: 'Are there homes for sale in Summerlin West Las Vegas today?',
      answer:
        'Yes. Inventory updates throughout the day, and this site shows live Summerlin West listings through RealScout search widgets.',
    },
    {
      question: 'What price ranges are common in Summerlin West?',
      answer:
        'Price bands vary by village and home type. You can filter by budget directly to compare current opportunities in each neighborhood.',
    },
  ],
  '/villages': [
    {
      question:
        'What was the area west of Rainbow and south of Summerlin Parkway called?',
      answer:
        'That area is generally discussed as part of the west Las Vegas / Summerlin development corridor, with modern village naming tied to Summerlin West communities.',
    },
    {
      question: 'How many villages are in Summerlin West?',
      answer:
        'Summerlin West includes multiple villages with distinct home styles, amenities, and HOA structures; inventory differs by village each week.',
    },
  ],
  '/properties/search': [
    {
      question: 'How do I search homes for sale in north or west Summerlin?',
      answer:
        'Use filters for price, bedrooms, and property type to compare homes in Summerlin West and nearby northwest Las Vegas submarkets.',
    },
    {
      question: 'Can I search condos, townhomes, and single-family homes here?',
      answer:
        'Yes. The search tools support multiple property types so you can narrow results to match your lifestyle and budget.',
    },
  ],
  '/market-data': [
    {
      question: 'How often does Summerlin West market data change?',
      answer:
        'Listing activity can change daily, while meaningful trend analysis is usually strongest when reviewed weekly and monthly.',
    },
    {
      question: 'Is Summerlin West different from nearby northwest Las Vegas pricing?',
      answer:
        'It can be. Village-level HOA, lot size, age of inventory, and amenities often create pricing differences versus nearby west-side neighborhoods.',
    },
  ],
  '/home-valuation': [
    {
      question: 'How can I estimate my Summerlin West home value?',
      answer:
        'Start with the home value tool, then compare active competing listings and recent closes in your village for a more realistic pricing range.',
    },
    {
      question: 'Do upgrades and lot location affect valuation in Summerlin West?',
      answer:
        'Yes. View orientation, lot premium, floorplan desirability, and renovation quality can materially affect final market value.',
    },
  ],
  '/sell-your-home': [
    {
      question: 'What is the first step to sell a home in Summerlin West?',
      answer:
        'Begin with a pricing strategy call and market prep plan, then position your listing against live competing inventory by village.',
    },
    {
      question: 'How long do homes usually take to sell in Summerlin West?',
      answer:
        'Timing varies by pricing, condition, and seasonality. Monitoring fresh competition and buyer demand helps set realistic expectations.',
    },
  ],
  '/buying-guide': [
    {
      question: 'What should buyers review before touring Summerlin West homes?',
      answer:
        'Most buyers compare village HOA terms, commute routes, school options, and current inventory to build a short list before showings.',
    },
    {
      question: 'Is new construction available in Summerlin West?',
      answer:
        'Availability varies by phase and builder. Compare new-home incentives versus resale options to find the strongest total value.',
    },
  ],
  '/mortgage-calculator': [
    {
      question: 'How accurate is a mortgage calculator for Summerlin West homes?',
      answer:
        'A calculator is a strong first estimate, but final payment depends on taxes, insurance, HOA dues, and lender-specific terms.',
    },
    {
      question: 'Should I include HOA dues when estimating monthly payment?',
      answer:
        'Yes. HOA dues are common in Summerlin West and should be included in your total monthly housing cost calculation.',
    },
  ],
  '/schools': [
    {
      question: 'How do I compare schools when buying in Summerlin West?',
      answer:
        'Review zoning, travel time, and nearby inventory together so your home search reflects both education goals and day-to-day logistics.',
    },
    {
      question: 'Do school boundaries change over time?',
      answer:
        'They can. Always confirm current zoning and transportation details during active home shopping and due diligence.',
    },
  ],
  '/amenities': [
    {
      question: 'What amenities make Summerlin West popular with buyers?',
      answer:
        'Parks, trails, golf access, dining, and neighborhood services are major drivers, especially when paired with mountain-view communities.',
    },
    {
      question: 'What is the bright light seen in far west Summerlin?',
      answer:
        'Residents often reference bright skyline lighting from active developments, road corridors, or nearby commercial sites in the west valley.',
    },
  ],
  '/transportation': [
    {
      question: 'How far is West Sahara Avenue from Summerlin West?',
      answer:
        'Travel time depends on exact start point and traffic window, but West Sahara is a key east-west connector for many Summerlin commuters.',
    },
    {
      question: 'What roads are most used for Summerlin West commuting?',
      answer:
        'Common routes include Charleston, Sahara, and the 215 beltway depending on destination and peak-hour conditions.',
    },
  ],
  '/listings': [
    {
      question: 'Are these Summerlin West listings updated in real time?',
      answer:
        'Listings refresh through RealScout integrations and may change quickly as homes go pending, so frequent checks are recommended.',
    },
    {
      question: 'Can I sort listings by newest inventory first?',
      answer:
        'Yes. The listings feed prioritizes recent inventory so you can review new opportunities first.',
    },
  ],
};

export default function GlobalRouteFaq() {
  const pathname = usePathname();

  const faqItems = useMemo(() => {
    return FAQ_BY_ROUTE[pathname] ?? FALLBACK_FAQ;
  }, [pathname]);

  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
    [faqItems]
  );

  return (
    <section className="border-t border-[#d7c5a0] bg-[#f8f4ea] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <h2 className="mb-5 text-center text-3xl font-semibold text-[#050b25]">
          Summerlin West FAQ
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((faq) => (
            <article
              key={faq.question}
              className="rounded-xl border border-[#d7c5a0] bg-white p-5 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#050b25]">{faq.question}</h3>
              <p className="mt-2 text-[#1f2937]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
