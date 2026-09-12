'use client';

import { useEffect, useRef, useState } from 'react';
import { requestRealScoutLoad } from '@/lib/deferred-third-party';
import { cn } from '@/lib/utils';

type LazyRealScoutWidgetProps = {
  html: string;
  label: string;
  className?: string;
  minHeightClass?: string;
};

/**
 * Keeps custom elements out of the initial HTML so the RealScout bundle
 * does not upgrade 10+ widgets at once (main-thread / TBT spike).
 */
export default function LazyRealScoutWidget({
  html,
  label,
  className,
  minHeightClass = 'min-h-[12rem]',
}: LazyRealScoutWidgetProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return undefined;

    const reveal = () => {
      requestRealScoutLoad();
      setVisible(true);
    };

    if (typeof IntersectionObserver === 'undefined') {
      reveal();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: '160px 0px', threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className={cn(minHeightClass, className)}
      aria-label={label}
      aria-busy={!visible}
    >
      {visible ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p className="py-8 text-center text-sm text-gray-500">
          Listings load as you scroll — powered by RealScout.
        </p>
      )}
    </div>
  );
}
