import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { HeadingImage } from '@/lib/section-images';
import OfficeListingsAfterHero from '@/components/realscout/office-listings-after-hero';

type PageHeroProps = {
  image: HeadingImage;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  minHeightClass?: string;
};

export function PageHero({
  image,
  title,
  subtitle,
  children,
  className,
  overlayClassName,
  contentClassName,
  minHeightClass = 'min-h-[22rem] md:min-h-[26rem]',
}: PageHeroProps) {
  return (
    <>
    <section
      className={cn(
        'photo-hero relative overflow-hidden text-white',
        minHeightClass,
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className={cn('absolute inset-0 bg-[#050b25]/20', overlayClassName)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b25]/40 via-transparent to-[#050b25]/10" />
      <div
        className={cn(
          'relative z-10 mx-auto flex min-h-[inherit] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center md:py-20',
          contentClassName,
        )}
      >
        <div className="photo-hero-panel w-full max-w-5xl rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <h1 className="photo-hero-title mb-6 max-w-5xl text-balance text-4xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="photo-hero-copy mx-auto mb-8 max-w-3xl text-xl font-medium text-white md:text-2xl">
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
    <OfficeListingsAfterHero />
    </>
  );
}

type SectionHeadingProps = {
  as?: 'h2' | 'h3' | 'h4';
  image: HeadingImage;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeading({
  as = 'h2',
  image,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const Tag = as;

  return (
    <div className={cn('mx-auto mb-10 max-w-4xl text-center', className)}>
      <div className="relative mx-auto mb-6 aspect-[16/7] w-full overflow-hidden rounded-2xl md:aspect-[21/8]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 896px"
        />
        <div className="absolute inset-0 bg-[#0b1231]/18" />
      </div>
      <Tag
        className={cn(
          'mb-4 text-3xl font-bold text-gray-900 md:text-4xl',
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <div className={cn('text-lg text-gray-600', subtitleClassName)}>
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}

type OverlayHeadingSectionProps = {
  as?: 'h2' | 'h3' | 'h4';
  image: HeadingImage;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function OverlayHeadingSection({
  as = 'h2',
  image,
  title,
  subtitle,
  children,
  className,
}: OverlayHeadingSectionProps) {
  const Tag = as;

  return (
    <section className={cn('photo-hero relative overflow-hidden py-16 text-white', className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#050b25]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b25]/45 via-transparent to-transparent" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="photo-hero-panel mx-auto max-w-4xl rounded-3xl px-6 py-8 md:px-10">
          <Tag className="photo-hero-title mb-4 text-3xl font-bold text-white md:text-4xl">
            {title}
          </Tag>
          {subtitle ? (
            <p className="photo-hero-copy mx-auto mb-8 max-w-2xl font-medium text-white">
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

type CardMediaHeadingProps = {
  as?: 'h2' | 'h3' | 'h4';
  image: HeadingImage;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function CardMediaHeading({
  as = 'h3',
  image,
  title,
  children,
  className,
  titleClassName,
}: CardMediaHeadingProps) {
  const Tag = as;

  return (
    <div className={cn('relative h-52 overflow-hidden', className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1231]/88 via-[#0b1231]/40 to-[#0b1231]/10" />
      <div className="photo-hero absolute inset-x-0 bottom-0 p-6 text-white">
        <Tag className={cn('photo-hero-title text-2xl font-bold text-white', titleClassName)}>
          {title}
        </Tag>
        {children}
      </div>
    </div>
  );
}

type MediaThumbHeadingProps = {
  as?: 'h2' | 'h3' | 'h4';
  image: HeadingImage;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function MediaThumbHeading({
  as = 'h3',
  image,
  title,
  children,
  className,
  titleClassName,
}: MediaThumbHeadingProps) {
  const Tag = as;

  return (
    <div className={className}>
      <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <Tag className={cn('text-lg font-semibold text-gray-900', titleClassName)}>
        {title}
      </Tag>
      {children}
    </div>
  );
}
