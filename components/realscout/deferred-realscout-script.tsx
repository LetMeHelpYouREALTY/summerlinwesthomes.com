'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import {
  onRealScoutLoadRequested,
  requestRealScoutLoad,
} from '@/lib/deferred-third-party';

const REALSCOUT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js';

/**
 * Injects the RealScout web-component bundle once, after scroll/pointer/keyboard
 * intent (or when a widget scrolls into view). Still a single global script.
 */
export default function DeferredRealScoutScript() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const unsubscribe = onRealScoutLoadRequested(() => setShouldLoad(true));

    const enable = () => requestRealScoutLoad();
    window.addEventListener('scroll', enable, { once: true, passive: true });
    window.addEventListener('pointerdown', enable, { once: true });
    window.addEventListener('keydown', enable, { once: true });
    window.addEventListener('touchstart', enable, { once: true, passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', enable);
      window.removeEventListener('pointerdown', enable);
      window.removeEventListener('keydown', enable);
      window.removeEventListener('touchstart', enable);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script
      id="realscout-widget-js"
      src={REALSCOUT_SRC}
      type="module"
      strategy="afterInteractive"
    />
  );
}
