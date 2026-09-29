"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import WhatsAppGlyph from "./WhatsAppGlyph";
import { WA, waHref, generalEnquiry } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "./track";

/**
 * Floating WhatsApp button (bottom-right). Property-aware: on /puri or
 * /bhubaneswar it opens that property directly; on brand pages it opens a
 * chooser sheet. Real WhatsApp glyph on WhatsApp-green with a soft glow ring
 * that pulses three times, then rests.
 */
export default function FloatingWhatsApp() {
  const pathname = usePathname() || "/";
  const [sheetOpen, setSheetOpen] = useState(false);

  const property = pathname.startsWith("/puri")
    ? "puri"
    : pathname.startsWith("/bhubaneswar")
      ? "bhubaneswar"
      : null;

  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSheetOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheetOpen]);

  function handleClick() {
    if (property) {
      trackWhatsAppClick({ property, sourceSection: "floating_button" });
      window.open(
        waHref(property, generalEnquiry(WA[property].city).message, pathname),
        "_blank",
        "noopener"
      );
    } else {
      setSheetOpen(true);
    }
  }

  const choices: Array<{ key: "puri" | "bhubaneswar"; label: string; sub: string }> = [
    { key: "puri", label: "Hotel Shree Ram", sub: "Puri" },
    { key: "bhubaneswar", label: "Shree Ram Lodge", sub: "Bhubaneswar" },
  ];

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="Chat with us on WhatsApp"
        className="wa-float group fixed bottom-[76px] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 md:bottom-6 md:h-16 md:w-16"
      >
        {/* glow rings (pure CSS, stop after 3 pulses via animation-fill) */}
        <span aria-hidden="true" className="wa-glow absolute inset-0 rounded-full" />
        <WhatsAppGlyph className="relative h-7 w-7 drop-shadow-sm md:h-8 md:w-8" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-[10px] bg-espresso px-3 py-1.5 text-xs font-medium text-ivory opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
          Chat with us
        </span>
      </button>

      {sheetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-espresso/60 p-4 sm:items-center"
          onClick={() => setSheetOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Choose a property to chat with"
        >
          <div
            className="w-full max-w-sm rounded-[16px] bg-ivory p-5 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold text-espresso">Chat with us</h2>
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                aria-label="Close"
                className="flex h-11 w-11 items-center justify-center rounded-full text-warm-umber hover:bg-khadi-sand"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <p className="mb-4 text-sm text-warm-umber">Which property?</p>
            <div className="space-y-3">
              {choices.map((c) => (
                <a
                  key={c.key}
                  href={waHref(c.key, generalEnquiry(WA[c.key].city).message, pathname)}
                  target="_blank"
                  rel="noopener"
                  onClick={() => {
                    trackWhatsAppClick({ property: c.key, sourceSection: "floating_chooser" });
                    setSheetOpen(false);
                  }}
                  className="flex min-h-[56px] items-center gap-3 rounded-[12px] border border-khadi-sand bg-white/60 px-4 py-3 transition-colors hover:border-antique-gold hover:bg-khadi-sand/60"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white">
                    <WhatsAppGlyph className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-espresso">{c.label}</span>
                    <span className="block text-xs text-warm-umber">{c.sub}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
