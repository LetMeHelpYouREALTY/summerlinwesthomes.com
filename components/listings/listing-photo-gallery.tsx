'use client';

import Image from 'next/image';
import { useState } from 'react';
import { HERITAGE_BEND_894 } from '@/lib/listings/heritage-bend-894';

export default function ListingPhotoGallery() {
  const photos = HERITAGE_BEND_894.photos;
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  if (!photo) {
    return null;
  }

  function show(next: number) {
    const count = photos.length;
    setIndex(((next % count) + count) % count);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#d8c58e]/50 bg-white shadow-lg">
      <div className="relative aspect-[3/2] bg-[#0b1231]">
        <Image
          src={photo.url}
          alt={photo.alt}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover"
        />
        <p className="absolute bottom-3 left-3 rounded-full bg-[#0b1231]/80 px-3 py-1 text-sm font-medium text-white">
          {photo.room} · {index + 1} of {photos.length}
        </p>
        <div className="absolute inset-y-0 left-0 flex items-center p-2">
          <button
            type="button"
            onClick={() => show(index - 1)}
            className="rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-[#0b1231]"
            aria-label="Previous listing photo"
          >
            Prev
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center p-2">
          <button
            type="button"
            onClick={() => show(index + 1)}
            className="rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-[#0b1231]"
            aria-label="Next listing photo"
          >
            Next
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-2 p-3 sm:grid-cols-6 md:grid-cols-8">
        {photos.map((item, itemIndex) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => show(itemIndex)}
              aria-label={`Show ${item.alt}`}
              aria-current={itemIndex === index ? 'true' : undefined}
              className={`relative block aspect-[3/2] w-full overflow-hidden rounded-md ${
                itemIndex === index
                  ? 'ring-2 ring-[#0b1231]'
                  : 'ring-1 ring-gray-200'
              }`}
            >
              <Image
                src={item.url}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
