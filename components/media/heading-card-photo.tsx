import Image from 'next/image';
import { imageMeta, imageSrc, type SiteImageId } from '@/lib/images';

type HeadingCardPhotoProps = {
  imageId: SiteImageId;
  title: string;
  subtitle?: string;
};

export default function HeadingCardPhoto({
  imageId,
  title,
  subtitle,
}: HeadingCardPhotoProps) {
  const meta = imageMeta(imageId);

  return (
    <div className="relative h-44 overflow-hidden">
      <Image
        src={imageSrc(imageId)}
        alt={meta.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0b1231]/55" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-white/90">{subtitle}</p> : null}
      </div>
    </div>
  );
}
