import Image from 'next/image';
import Link from 'next/link';
import { imageMeta, imageSrc, type SiteImageId } from '@/lib/images';
import { BUSINESS, telHref } from '@/lib/business';

type CtaLink = {
  href: string;
  label: string;
  external?: boolean;
};

type ImageCtaProps = {
  imageId: SiteImageId;
  title: string;
  subtitle: string;
  primary?: CtaLink;
  secondary?: CtaLink;
};

export default function ImageCta({
  imageId,
  title,
  subtitle,
  primary = { href: telHref(), label: `Call ${BUSINESS.phoneDisplay}` },
  secondary = {
    href: BUSINESS.calendlyUrl,
    label: 'Schedule a tour',
    external: true,
  },
}: ImageCtaProps) {
  const meta = imageMeta(imageId);
  const src = imageSrc(imageId);

  return (
    <section className="relative min-h-[22rem] overflow-hidden py-16 md:min-h-[26rem]">
      <Image
        src={src}
        alt={meta.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0b1231]/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/90">{subtitle}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <CtaAnchor link={primary} variant="solid" />
          {secondary ? <CtaAnchor link={secondary} variant="outline" /> : null}
        </div>
      </div>
    </section>
  );
}

function CtaAnchor({
  link,
  variant,
}: {
  link: CtaLink;
  variant: 'solid' | 'outline';
}) {
  const className =
    variant === 'solid'
      ? 'rounded-lg bg-[#d8c58e] px-8 py-3 font-semibold text-[#0b1231] transition hover:-translate-y-0.5'
      : 'rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0b1231]';

  if (link.external || link.href.startsWith('http') || link.href.startsWith('tel:')) {
    return (
      <a
        href={link.href}
        className={className}
        {...(link.href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...(link.href.includes('calendly.com')
          ? { 'data-calendly-popup': 'appointment' }
          : {})}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} prefetch={false} className={className}>
      {link.label}
    </Link>
  );
}
