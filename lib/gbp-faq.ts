import { BUSINESS } from '@/lib/business';

export type GbpFaq = {
  question: string;
  answer: string;
};

/** Typical Google Business Profile questions — also used as FAQPage schema. */
export const GBP_FAQS: readonly GbpFaq[] = [
  {
    question: 'Where is Summerlin Real Estate | Homes by Dr. Jan Duffy?',
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
    question: 'What is the website?',
    answer: `The website is ${BUSINESS.website}.`,
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'Service area includes Summerlin, Las Vegas, Henderson, North Las Vegas, Clark County, Paradise, Enterprise, Spring Valley, Summerlin West, Summerlin North, and Summerlin South. Specialties include The Ridges, Red Rock Country Club, Sun City, and Del Webb communities.',
  },
  {
    question: 'Is the office wheelchair accessible?',
    answer:
      'Yes. The office lists a wheelchair-accessible entrance, parking lot, seating, and restroom, plus free parking lot and free parking garage.',
  },
] as const;
