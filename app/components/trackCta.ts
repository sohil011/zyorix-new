type Gtag = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

export function trackCta(label: string, props: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined") {
    const w = window as unknown as { gtag?: Gtag };
    const g = w.gtag;
    if (typeof g === "function") {
      g("event", "cta_click", {
        event_category: "engagement",
        event_label: label,
        ...props,
      });
    }
  }
}

export default trackCta;
