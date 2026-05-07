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
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 md:text-3xl">
          {title}
        </h2>
        <p className="mb-6 text-center text-gray-600">{description}</p>
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
