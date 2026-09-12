import Link from 'next/link';
import { headingImages } from '@/lib/section-images';
import {
  SERVICE_GROUPS,
  SERVICES,
  servicePath,
  type Service,
  type ServiceGroupId,
} from '@/lib/services';
import { MediaThumbHeading, SectionHeading } from '@/components/media/heading-media';

type ServiceCardsProps = {
  heading?: string;
  subtitle?: string;
  group?: ServiceGroupId;
};

function Card({ service }: { service: Service }) {
  return (
    <Link
      href={servicePath(service.slug)}
      className="block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <MediaThumbHeading
        as="h4"
        image={service.image}
        title={service.name}
        titleClassName="text-lg font-semibold text-gray-900"
      />
      <p className="mt-2 text-sm text-gray-600">{service.summary}</p>
      <span className="mt-3 inline-block text-sm font-semibold text-[#0b1231]">
        View {service.name}
      </span>
    </Link>
  );
}

export default function ServiceCards({
  heading = 'Find services',
  subtitle = 'Buyer, seller, land, commercial, and rental services for Summerlin West and west Las Vegas.',
  group,
}: ServiceCardsProps) {
  const groups = group
    ? SERVICE_GROUPS.filter((item) => item.id === group)
    : SERVICE_GROUPS;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          image={headingImages.h2.guide}
          title={heading}
          subtitle={subtitle}
        />
        <div className="space-y-14">
          {groups.map((item) => {
            const services = SERVICES.filter((service) => service.group === item.id);
            return (
              <div key={item.id}>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mb-6 max-w-3xl text-gray-600">{item.blurb}</p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Card key={service.slug} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
