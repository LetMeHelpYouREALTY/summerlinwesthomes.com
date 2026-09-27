import { BUSINESS } from '@/lib/business';
import type { FubInquiryType } from '@/lib/fub/send-event';

export const LEAD_FORM_ERROR_MESSAGE = `Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at ${BUSINESS.phoneDisplay}.`;

export type SellerLeadFormFields = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  squareFeet?: string;
  yearBuilt?: string;
  timeline?: string;
  estimatedValue?: string;
};

type SubmitContactFormArgs = {
  formName: string;
  type: FubInquiryType;
  fields: SellerLeadFormFields;
  sourceUrl?: string;
};

export async function submitContactForm({
  formName,
  type,
  fields,
  sourceUrl,
}: SubmitContactFormArgs): Promise<{ ok: true } | { ok: false; error: string }> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...fields,
      formName,
      type,
      sourceUrl: sourceUrl ?? (typeof window !== 'undefined' ? window.location.href : ''),
    }),
  });

  if (response.ok) {
    return { ok: true };
  }

  let serverMessage: string | undefined;
  try {
    const json = (await response.json()) as { error?: string };
    serverMessage = json.error;
  } catch {
    serverMessage = undefined;
  }

  if (response.status === 400 && serverMessage) {
    return { ok: false, error: serverMessage };
  }

  return { ok: false, error: LEAD_FORM_ERROR_MESSAGE };
}
