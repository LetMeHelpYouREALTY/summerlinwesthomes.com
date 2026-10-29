/**
 * Cloudflare Turnstile (bot check for lead forms).
 * Works on Vercel without the Cloudflare proxy. Widget "Hub lead forms" in the
 * Real Estate Domains account. The site key is public; the secret lives only in
 * the TURNSTILE_SECRET_KEY env var.
 */
export const TURNSTILE_SITE_KEY_DEFAULT = '0x4AAAAAAFq-f9ovQY6gkr2T';

export function getTurnstileSiteKey(): string {
  return (
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ||
    TURNSTILE_SITE_KEY_DEFAULT
  );
}

const SITEVERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export type TurnstileResult =
  | { ok: true; skipped?: boolean }
  | { ok: false; reason: string };

/**
 * Server-side token check. When TURNSTILE_SECRET_KEY is unset the check is
 * skipped, so the site keeps taking leads until the env var is added.
 */
export async function verifyTurnstileToken(
  token: unknown,
  remoteIp?: string | null,
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    return { ok: true, skipped: true };
  }
  if (typeof token !== 'string' || !token) {
    return { ok: false, reason: 'missing-token' };
  }

  const form = new URLSearchParams({ secret, response: token });
  if (remoteIp) {
    form.set('remoteip', remoteIp);
  }

  try {
    const res = await fetch(SITEVERIFY_URL, { method: 'POST', body: form });
    const json = (await res.json()) as {
      success?: boolean;
      'error-codes'?: string[];
    };
    if (json.success) {
      return { ok: true };
    }
    return {
      ok: false,
      reason: (json['error-codes'] ?? []).join(',') || 'failed',
    };
  } catch {
    return { ok: false, reason: 'siteverify-unreachable' };
  }
}
