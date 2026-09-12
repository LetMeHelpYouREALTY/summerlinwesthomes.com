import { BUSINESS } from '@/lib/business';

export type GbpFaq = {
  question: string;
  answer: string;
};

/** Typical Google Business Profile questions — also used as FAQPage schema. */
export const GBP_FAQS: readonly GbpFaq[] = [
  {
    question: 'Where is Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy?',
    answer: `${BUSINESS.name} is at ${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}.`,
  },
  {
    question: 'What is the phone number?',
    answer: `Call ${BUSINESS.phoneDisplay} or text the same number. Appointments are available but not required.`,
  },
  {
    question: 'What are the business hours?',
    answer: `${BUSINESS.hoursDisplay}. The office is closed July 3–4, 2026.`,
  },
  {
    question: 'Is Sun City Summerlin a 55+ community?',
    answer:
      'Yes. Sun City Summerlin is an age-qualified 55+ active-adult community under the Housing for Older Persons Act. Representation here is for that community’s homes, not a general “family” housing pitch.',
  },
  {
    question: 'What is the website?',
    answer: `The website is ${BUSINESS.website}.`,
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'Primary focus is Sun City Summerlin (89134). Service area also includes Las Vegas, Henderson, North Las Vegas, Clark County, and west-valley zips such as 89135 and 89138.',
  },
  {
    question: 'Is the office wheelchair accessible?',
    answer:
      'Yes. The office lists wheelchair-accessible entrance, parking, seating, and restroom, plus free parking.',
  },
] as const;
