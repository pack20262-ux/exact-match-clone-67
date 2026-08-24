import { useEffect, useState } from "react";

/** External checkout (Cakto). Replace with the real product link when available. */
export const CAKTO_CHECKOUT_URL = "https://pay.cakto.com.br/routyfit-premium";

/**
 * Temporary bypass: paywall disabled so the funnel goes
 * Landing → Quiz → Resultado → Dashboard.
 * Set back to `true` to restore the Premium offer + Cakto checkout flow.
 * All payment code stays in the codebase (/premium, /pagamento).
 */
export const PAYWALL_ENABLED = false;

const STORAGE_KEY = "routyfit:subscribed";
const EVENT = "routyfit:subscription-change";

export function readIsSubscribed(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function setIsSubscribed(value: boolean) {
  if (typeof window === "undefined") return;
  if (value) window.localStorage.setItem(STORAGE_KEY, "true");
  else window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Reads the (mocked) subscription flag.
 * `loading` is true until the client has read localStorage, so guards never
 * redirect during SSR/hydration.
 */
export function useSubscription(): { isSubscribed: boolean; loading: boolean } {
  const [state, setState] = useState<{ isSubscribed: boolean; loading: boolean }>({
    isSubscribed: false,
    loading: true,
  });

  useEffect(() => {
    const sync = () => setState({ isSubscribed: readIsSubscribed(), loading: false });
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return state;
}
