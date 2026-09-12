'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import {
  onCalendlyLoadRequested,
  requestCalendlyLoad,
} from '@/lib/deferred-third-party';

const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css';
const CALENDLY_JS = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_APPOINTMENT = 'https://calendly.com/drjanduffy/appointment';
const CSS_LINK_ID = 'calendly-widget-css';

function ensureCalendlyCss() {
  if (document.getElementById(CSS_LINK_ID)) return;
  const link = document.createElement('link');
  link.id = CSS_LINK_ID;
  link.rel = 'stylesheet';
  link.href = CALENDLY_CSS;
  document.head.appendChild(link);
}

function openAppointmentPopup() {
  if (!window.Calendly) return false;
  window.Calendly.initPopupWidget({ url: CALENDLY_APPOINTMENT });
  return true;
}

/**
 * Calendly CSS in <head> is render-blocking. Load CSS/JS only when someone
 * uses Schedule Tour. Header already has that CTA — no floating badge.
 */
export default function DeferredCalendly() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const popupQueuedRef = useRef(false);

  useEffect(() => {
    const unsubscribe = onCalendlyLoadRequested(() => {
      ensureCalendlyCss();
      setShouldLoad(true);
    });

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const trigger = target.closest('[data-calendly-popup="appointment"]');
      if (!trigger) return;

      event.preventDefault();
      requestCalendlyLoad();

      if (!openAppointmentPopup()) {
        popupQueuedRef.current = true;
        window.setTimeout(() => {
          if (!popupQueuedRef.current) return;
          popupQueuedRef.current = false;
          window.open(CALENDLY_APPOINTMENT, '_blank', 'noopener,noreferrer');
        }, 2500);
      }
    };

    document.addEventListener('click', onClick);
    return () => {
      unsubscribe();
      document.removeEventListener('click', onClick);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script
      id="calendly-widget-js"
      src={CALENDLY_JS}
      strategy="afterInteractive"
      onLoad={() => {
        if (popupQueuedRef.current) {
          popupQueuedRef.current = false;
          openAppointmentPopup();
        }
      }}
    />
  );
}
