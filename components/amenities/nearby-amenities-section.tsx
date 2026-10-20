'use client';

import Link from 'next/link';
import AmenityMap from '@/components/amenities/amenity-map';
import { COMMUNITY } from '@/lib/community';

type NearbyAmenitiesSectionProps = {
  /** e.g. "Life Near Summerlin West" */
  title?: string;
  compact?: boolean;
  className?: string;
};

export default function NearbyAmenitiesSection({
  title = `What's Nearby in ${COMMUNITY.name}`,
  compact = true,
  className,
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      className={className ?? 'bg-white py-16'}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="nearby-amenities-heading"
            className="mb-3 text-3xl font-bold text-gray-900"
          >
            {title}
          </h2>
          <p className="text-gray-600">
            Explore golf, trails, grocery, healthcare, and dining around{' '}
            {COMMUNITY.name}, {COMMUNITY.city}. Filter the map, then open the full
            amenities guide for commute notes and FAQs.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <AmenityMap compact={compact} showStaticList={!compact} />
          <p className="mt-6 text-center">
            <Link
              href="/amenities"
              prefetch={false}
              className="inline-flex rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
            >
              View full nearby amenities guide
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
