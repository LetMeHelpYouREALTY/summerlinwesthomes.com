import Image from 'next/image';
import { imageMeta, imageSrc, type SiteImageId } from '@/lib/images';

type SectionImageProps = {
  imageId: SiteImageId;
  caption?: string;
  priority?: boolean;
  className?: string;
};

export default function SectionImage({
  imageId,
  caption,
  priority = false,
  className = '',
}: SectionImageProps) {
  const meta = imageMeta(imageId);
  const src = imageSrc(imageId);

  return (
    <figure className={`overflow-hidden rounded-2xl shadow-xl ${className}`.trim()}>
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={meta.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 960px"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="bg-[#0b1231] px-4 py-3 text-sm text-white/85">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
