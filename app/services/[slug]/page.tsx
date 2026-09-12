import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BUSINESS, telHref } from '@/lib/business';
import { openGraphWebsite } from '@/lib/open-graph';
import {
  getServiceBySlug,
  SERVICES,
  servicePath,
  servicesInGroup,
} from '@/lib/services';
import { getSiteUrl } from '@/lib/site-url';
import {
  OverlayHeadingSection,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';
import { headingImages } from '@/lib/section-images';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: 'Service not found' };
  }

  const title = `${service.name} in Summerlin West | Las Vegas`;
  const description = `${service.summary} Call ${BUSINESS.phoneDisplay}.`;
  const path = servicePath(service.slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: openGraphWebsite({
      title,
      description,
      url: path,
    }),
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const related = servicesInGroup(service.group).filter(
    (item) => item.slug !== service.slug,
  );
  const path = servicePath(service.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.name,
            item: `${siteUrl}${path}`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: service.name,
        description: service.summary,
        url: `${siteUrl}${path}`,
        areaServed: [
          { '@type': 'City', name: 'Las Vegas' },
          { '@type': 'Place', name: 'Summerlin West' },
        ],
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <PageHero
        image={service.image}
        title={`${service.name} in Summerlin West, Las Vegas`}
        subtitle={service.summary}
      />
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg text-gray-700">{service.intro}</p>
        <ul className="mt-8 list-disc space-y-3 pl-5 text-gray-700">
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="mt-8 text-gray-700">
          {BUSINESS.name} · {BUSINESS.streetAddress}, {BUSINESS.addressLocality},{' '}
          {BUSINESS.addressRegion} {BUSINESS.postalCode}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={telHref}
            className="rounded-lg bg-[#0b1231] px-5 py-3 font-semibold text-white hover:bg-[#101c49]"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
          <Link
            href={service.relatedHref}
            className="rounded-lg border border-[#0b1231] px-5 py-3 font-semibold text-[#0b1231] hover:bg-white"
          >
            {service.relatedLabel}
          </Link>
        </div>
      </div>
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionHeading
            as="h2"
            image={headingImages.h2.faq}
            title={`${service.name} questions`}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {service.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {related.length > 0 ? (
        <section className="py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Related Summerlin West services
            </h2>
            <div className="flex flex-wrap gap-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={servicePath(item.slug)}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-[#0b1231]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <OverlayHeadingSection
        image={headingImages.h2.cta}
        title={`Talk through ${service.name.toLowerCase()}`}
        subtitle={`${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`}
      >
        <a
          href={telHref}
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#0b1231]"
        >
          Call {BUSINESS.phoneDisplay}
        </a>
      </OverlayHeadingSection>
    </main>
  );
}
