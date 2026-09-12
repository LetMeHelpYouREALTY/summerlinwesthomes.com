import { headingImages } from '@/lib/section-images';
import { SectionHeading } from '@/components/media/heading-media';

type CalendlyInlineSectionProps = {
  title?: string;
  description?: string;
};

export default function CalendlyInlineSection({
  title = 'Schedule a Private Consultation',
  description = 'Book a one-on-one appointment with Dr. Jan Duffy.',
}: CalendlyInlineSectionProps) {
  return (
    <section className="border-t border-gray-200 bg-white px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          image={headingImages.h2.consult}
          title={title}
          subtitle={description}
        />
        <div
          className="calendly-inline-widget min-h-[700px] w-full"
          data-url="https://calendly.com/drjanduffy/appointment"
        />
        <div className="mt-4 text-center">
          <a
            href="https://calendly.com/drjanduffy/appointment"
            data-calendly-popup="appointment"
            className="inline-flex items-center rounded-full bg-[#0b1231] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#101c49]"
          >
            Schedule time with me
          </a>
        </div>
      </div>
    </section>
  );
}
