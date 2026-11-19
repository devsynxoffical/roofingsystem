/** Sends a GA4 event when Google Analytics is loaded; does nothing otherwise. */
export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", event, { page_path: window.location.pathname, ...params });
}
