"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { WA, waHref, bookingEnquiry } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "./track";

type PropertyKey = "puri" | "bhubaneswar";

/**
 * Quick enquiry bar (home + property pages). Builds the full booking-enquiry
 * template on WhatsApp. No backend needed in Phase 1.
 * Reassurance line is shown only when configured true (client to confirm).
 */
export default function QuickEnquiryBar({
  defaultProperty,
  pageSource,
  showNoPaymentNote = false,
}: {
  defaultProperty?: PropertyKey;
  pageSource: string;
  showNoPaymentNote?: boolean;
}) {
  const [prop, setProp] = useState<PropertyKey>(defaultProperty ?? "puri");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = bookingEnquiry({
      propertyLabel: WA[prop].city,
      checkin: checkin || "flexible",
      checkout: checkout || "flexible",
      adults,
      children,
    }).message;
    trackWhatsAppClick({ property: prop, sourceSection: "quick_enquiry_bar" });
    window.open(waHref(prop, msg, pageSource), "_blank", "noopener");
  };

  const inputCls =
    "min-h-[48px] w-full rounded-[10px] border border-antique-gold/40 bg-ivory px-3.5 py-2.5 text-[15px] text-espresso placeholder:text-warm-umber/60 focus:border-maroon focus:outline-none";

  return (
    <form
      onSubmit={submit}
      className="grid gap-3 rounded-[16px] bg-khadi-sand p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-6"
    >
      <label className="lg:col-span-2">
        <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[0.08em] text-warm-umber">Property</span>
        <select value={prop} onChange={(e) => setProp(e.target.value as PropertyKey)} className={inputCls}>
          <option value="puri">Hotel Shree Ram, Puri</option>
          <option value="bhubaneswar">Shree Ram Lodge, Bhubaneswar</option>
        </select>
      </label>
      <label>
        <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[0.08em] text-warm-umber">Check-in</span>
        <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} className={inputCls} />
      </label>
      <label>
        <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[0.08em] text-warm-umber">Check-out</span>
        <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} className={inputCls} />
      </label>
      <label>
        <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[0.08em] text-warm-umber">Adults</span>
        <input
          type="number" min={1} max={20}
          value={adults}
          onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value || "1", 10) || 1))}
          className={inputCls}
        />
      </label>
      <label>
        <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[0.08em] text-warm-umber">Children</span>
        <input
          type="number" min={0} max={12}
          value={children}
          onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value || "0", 10) || 0))}
          className={inputCls}
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] bg-maroon px-6 py-3 text-[15px] font-semibold text-ivory transition-colors hover:bg-[#8f2536] sm:col-span-2 lg:col-span-6"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        Send on WhatsApp
      </button>
      {showNoPaymentNote && (
        <p className="text-center text-[13.5px] text-warm-umber sm:col-span-2 lg:col-span-6">
          No payment needed to enquire.
        </p>
      )}
    </form>
  );
}
