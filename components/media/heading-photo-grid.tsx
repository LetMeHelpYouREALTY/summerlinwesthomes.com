import Image from 'next/image';
import { imageMeta, imageSrc, type SiteImageId } from '@/lib/images';

type HeadingPhotoGridProps = {
  items: Array<{
    imageId: SiteImageId;
    heading: string;
    text: string;
  }>;
  columns?: 2 | 3 | 4;
};

function columnClass(columns: 2 | 3 | 4): string {
  switch (columns) {
    case 2:
      return 'grid gap-6 md:grid-cols-2';
    case 3:
      return 'grid gap-6 md:grid-cols-3';
    case 4:
      return 'grid gap-6 md:grid-cols-2 lg:grid-cols-4';
    default: {
      const exhaustive: never = columns;
      return exhaustive;
    }
  }
}

export default function HeadingPhotoGrid({
  items,
  columns = 3,
}: HeadingPhotoGridProps) {
  return (
    <div className={columnClass(columns)}>
      {items.map((item) => {
        const meta = imageMeta(item.imageId);
        return (
          <article
            key={item.heading}
            className="overflow-hidden rounded-2xl border border-[#d8c58e]/40 bg-white shadow-lg"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={imageSrc(item.imageId)}
                alt={meta.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-xl font-semibold text-[#050b25]">
                {item.heading}
              </h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
