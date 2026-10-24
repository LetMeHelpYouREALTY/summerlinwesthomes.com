'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import SectionImage from '@/components/media/section-image';
import { type CalendlyIntent, calendlyUrlFor } from '@/lib/calendly';

type CalendlyInlineSectionProps = {
  title?: string;
  description?: string;
  /** Event to embed; defaults to the page's intent. */
  intent?: CalendlyIntent;
};

export default function CalendlyInlineSection({
  title = 'Schedule a Private Consultation',
  description = 'Book a one-on-one appointment with Dr. Jan Duffy.',
  intent,
}: CalendlyInlineSectionProps) {
  const pathname = usePathname() || '/';
  const url = calendlyUrlFor(pathname, 'inline', intent);
  const parentRef = useRef<HTMLDivElement>(null);

  // widget.js only auto-mounts inline widgets present at first page load, so mount
  // explicitly to cover client-side navigation too.
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    const mount = () => {
      if (!window.Calendly) return false;
      parent.innerHTML = '';
      window.Calendly.initInlineWidget({ url, parentElement: parent });
      return true;
    };
    if (mount()) return;
    const timer = window.setInterval(() => {
      if (mount()) window.clearInterval(timer);
    }, 300);
    return () => window.clearInterval(timer);
  }, [url]);

  return (
    <section className="border-t border-gray-200 bg-white px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 md:text-3xl">
          {title}
        </h2>
        <SectionImage
          imageId="h3-consultation"
          caption="Book a one-on-one appointment with Dr. Jan Duffy at (702) 842-0410."
          className="mb-6"
        />
        <p className="mb-6 text-center text-gray-600">{description}</p>
        <div ref={parentRef} className="min-h-[700px] w-full" />
        <div className="mt-4 text-center">
          <a
            href={url}
            data-calendly-popup="page"
            data-calendly-medium="inline-button"
            className="inline-flex items-center rounded-full bg-[#0b1231] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#101c49]"
          >
            Schedule time with me
          </a>
        </div>
      </div>
    </section>
  );
}
