'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { calendlyUrlFor } from '@/lib/calendly';

/**
 * Sitewide Calendly wiring: the badge (rebuilt on each route change so its event and
 * utm_campaign match the page) and one delegated click handler that opens any
 * `[data-calendly-popup]` link as a popup with the page-intent event.
 */
export default function CalendlyClient() {
  const pathname = usePathname() || '/';

  useEffect(() => {
    const init = () => {
      if (!window.Calendly) return false;
      if (window.Calendly.destroyBadgeWidget) {
        window.Calendly.destroyBadgeWidget();
      } else {
        document.querySelector('.calendly-badge-widget')?.remove();
      }
      window.Calendly.initBadgeWidget({
        url: calendlyUrlFor(pathname, 'badge'),
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: false,
      });
      return true;
    };
    if (init()) return;
    const timer = window.setInterval(() => {
      if (init()) window.clearInterval(timer);
    }, 300);
    return () => window.clearInterval(timer);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || !window.Calendly) return;
      const link = (event.target as Element | null)?.closest<HTMLElement>(
        '[data-calendly-popup]'
      );
      if (!link) return;
      event.preventDefault();
      window.Calendly.initPopupWidget({
        url: calendlyUrlFor(window.location.pathname, link.dataset.calendlyMedium ?? 'popup'),
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
