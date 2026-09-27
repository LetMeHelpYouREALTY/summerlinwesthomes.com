const FUB_EVENTS_URL = 'https://api.followupboss.com/v1/events';
export const FUB_SITE_SOURCE = 'summerlinwesthomes.com';

export type FubInquiryType =
  | 'General Inquiry'
  | 'Seller Inquiry'
  | 'Property Inquiry'
  | 'Registration';

export type ContactLeadInput = {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  sourceUrl: string;
  formName: string;
  type: FubInquiryType;
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

export function splitFullName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(' ');
  if (spaceIndex === -1) {
    return { firstName: trimmed, lastName: '' };
  }
  return {
    firstName: trimmed.slice(0, spaceIndex).trim(),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  };
}

function formatPropertySummary(data: ContactLeadInput): string {
  const lines: string[] = [];
  if (data.address) {
    const locality = [data.city, data.state, data.zipCode]
      .filter(Boolean)
      .join(', ');
    lines.push(
      `Property: ${data.address}${locality ? `, ${locality}` : ''}`,
    );
  }
  if (data.propertyType) lines.push(`Property type: ${data.propertyType}`);
  if (data.bedrooms) lines.push(`Bedrooms: ${data.bedrooms}`);
  if (data.bathrooms) lines.push(`Bathrooms: ${data.bathrooms}`);
  if (data.squareFeet) lines.push(`Square feet: ${data.squareFeet}`);
  if (data.yearBuilt) lines.push(`Year built: ${data.yearBuilt}`);
  if (data.estimatedValue) lines.push(`Estimated value: ${data.estimatedValue}`);
  if (data.timeline) lines.push(`Timeline: ${data.timeline}`);
  return lines.join('\n');
}

export function buildFollowUpBossEventBody(data: ContactLeadInput) {
  const { firstName, lastName } = splitFullName(data.name);
  const propertySummary = formatPropertySummary(data);
  const visitorMessage = data.message?.trim() ?? '';
  const messageParts = [propertySummary, visitorMessage].filter(Boolean);
  const message = messageParts.join('\n\n') || `Inquiry from ${data.formName}`;

  const email = data.email?.trim();
  const phone = data.phone?.trim();

  return {
    source: FUB_SITE_SOURCE,
    system: FUB_SITE_SOURCE,
    type: data.type,
    message,
    description: `${data.formName} — ${FUB_SITE_SOURCE}`,
    sourceUrl: data.sourceUrl,
    person: {
      firstName,
      lastName,
      emails: email ? [{ value: email }] : [],
      phones: phone ? [{ value: phone }] : [],
      tags: [FUB_SITE_SOURCE, data.formName],
    },
  };
}

export function validateContactPayload(
  body: unknown,
): { success: true; data: ContactLeadInput } | { success: false; error: string } {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    return { success: false, error: 'Invalid request body' };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === 'string' ? record.name.trim() : '';
  const email =
    typeof record.email === 'string' ? record.email.trim() : undefined;
  const phone =
    typeof record.phone === 'string' ? record.phone.trim() : undefined;

  if (!name) {
    return { success: false, error: 'Name is required' };
  }
  if (!email && !phone) {
    return {
      success: false,
      error: 'Email or phone is required',
    };
  }

  const formName =
    typeof record.formName === 'string' && record.formName.trim()
      ? record.formName.trim()
      : 'Contact Form';

  const typeRaw = record.type;
  const type: FubInquiryType =
    typeRaw === 'Seller Inquiry' ||
    typeRaw === 'Property Inquiry' ||
    typeRaw === 'Registration' ||
    typeRaw === 'General Inquiry'
      ? typeRaw
      : 'General Inquiry';

  const sourceUrl =
    typeof record.sourceUrl === 'string' && record.sourceUrl.trim()
      ? record.sourceUrl.trim()
      : '';

  const str = (key: string): string | undefined => {
    const value = record[key];
    return typeof value === 'string' && value.trim() ? value.trim() : undefined;
  };

  return {
    success: true,
    data: {
      name,
      email,
      phone,
      message: str('message'),
      sourceUrl,
      formName,
      type,
      address: str('address'),
      city: str('city'),
      state: str('state'),
      zipCode: str('zipCode'),
      propertyType: str('propertyType'),
      bedrooms: str('bedrooms'),
      bathrooms: str('bathrooms'),
      squareFeet: str('squareFeet'),
      yearBuilt: str('yearBuilt'),
      timeline: str('timeline'),
      estimatedValue: str('estimatedValue'),
    },
  };
}

export async function sendFollowUpBossEvent(
  data: ContactLeadInput,
  apiKey: string,
  fetchImpl: typeof fetch = fetch,
): Promise<{ ok: true } | { ok: false; status: number }> {
  const payload = buildFollowUpBossEventBody(data);
  const authorization =
    'Basic ' + Buffer.from(`${apiKey}:`).toString('base64');

  let response: Response;
  try {
    response = await fetchImpl(FUB_EVENTS_URL, {
      method: 'POST',
      headers: {
        Authorization: authorization,
        'Content-Type': 'application/json',
        'X-System': FUB_SITE_SOURCE,
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return { ok: false, status: 0 };
  }

  if (response.status >= 200 && response.status < 300) {
    return { ok: true };
  }
  return { ok: false, status: response.status };
}
