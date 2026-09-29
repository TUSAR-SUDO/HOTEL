"use client";

type Props = {
  property: "puri" | "bhubaneswar";
  sourceSection: string;
  room?: string;
};

/** Phase 1 analytics: GA4 event when the ID is configured; no-op otherwise. */
export function trackWhatsAppClick({ property, sourceSection, room }: Props) {
  if (typeof window === "undefined") return;
  const params = { property, source_section: sourceSection, room: room ?? null };
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
  };
  if (typeof w.gtag === "function") {
    w.gtag("event", "whatsapp_click", params);
  }
}
