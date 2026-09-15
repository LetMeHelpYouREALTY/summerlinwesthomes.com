import Image from 'next/image';
import { imageMeta, imageSrc, type SiteImageId } from '@/lib/images';

type PageHeroProps = {
  imageId: SiteImageId;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  priority?: boolean;
};

export default function PageHero({
  imageId,
  title,
  subtitle,
  children,
  priority = true,
}: PageHeroProps) {
  const meta = imageMeta(imageId);
  const src = imageSrc(imageId);

  return (
    <section className="relative flex min-h-[28rem] items-end overflow-hidden md:min-h-[32rem]">
      <Image
        src={src}
        alt={meta.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0b1231]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1231]/10 via-[#0b1231]/35 to-[#0b1231]/80" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-12 pt-28 text-center text-white md:pb-16">
        <h1 className="luxury-hero-title mx-auto mb-4 max-w-4xl text-balance text-4xl leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mb-6 max-w-3xl text-lg font-medium text-white/90 md:text-2xl">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
