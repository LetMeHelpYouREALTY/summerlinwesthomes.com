/**
 * Load heavy third-party widgets only after a real user signal.
 * PageSpeed / Lighthouse otherwise download RealScout (~629KB) and Calendly
 * during the lab trace, which tanks LCP, TBT, and unused-JavaScript.
 */

type IntentListener = () => void;

function createIntentGate() {
  let requested = false;
  const listeners = new Set<IntentListener>();

  const request = () => {
    if (requested) return;
    requested = true;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: IntentListener) => {
    listeners.add(listener);
    if (requested) listener();
    return () => {
      listeners.delete(listener);
    };
  };

  const hasRequested = () => requested;

  return { request, subscribe, hasRequested };
}

const realScoutGate = createIntentGate();
const calendlyGate = createIntentGate();

export const requestRealScoutLoad = realScoutGate.request;
export const onRealScoutLoadRequested = realScoutGate.subscribe;
export const hasRequestedRealScoutLoad = realScoutGate.hasRequested;

export const requestCalendlyLoad = calendlyGate.request;
export const onCalendlyLoadRequested = calendlyGate.subscribe;
export const hasRequestedCalendlyLoad = calendlyGate.hasRequested;
