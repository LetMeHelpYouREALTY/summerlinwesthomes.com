import { NextRequest, NextResponse } from 'next/server';
import {
  sendFollowUpBossEvent,
  validateContactPayload,
} from '@/lib/fub/send-event';
import { BUSINESS } from '@/lib/business';

function resolveSourceUrl(
  request: NextRequest,
  fromBody: string,
): string {
  if (fromBody) {
    return fromBody;
  }
  const referer = request.headers.get('referer');
  if (referer) {
    return referer;
  }
  return BUSINESS.website;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  if (!apiKey) {
    console.error(
      'FOLLOW_UP_BOSS_API_KEY is not set; cannot send leads to Follow Up Boss',
    );
    return NextResponse.json(
      { error: 'Lead capture is temporarily unavailable' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const validated = validateContactPayload(body);
  if (!validated.success) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const data = validated.data;
  data.sourceUrl = resolveSourceUrl(request, data.sourceUrl);

  const result = await sendFollowUpBossEvent(data, apiKey);
  if (!result.ok) {
    if (result.status > 0) {
      console.error(
        `Follow Up Boss events API returned HTTP ${result.status}`,
      );
    } else {
      console.error('Follow Up Boss events API request failed');
    }
    return NextResponse.json(
      { error: 'Failed to deliver lead to CRM' },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
