"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { WA, waHref, contactFormMessage } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/components/track";

type PropertyKey = "puri" | "bhubaneswar";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [prop, setProp] = useState<PropertyKey>("puri");
  const [dates, setDates] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please add your name and phone number.");
      return;
    }
    setError("");
    const msg = contactFormMessage({
      name: name.trim(),
      phone: phone.trim(),
      propertyLabel: WA[prop].city,
      dates: dates.trim(),
      note: note.trim(),
    }).message;
    trackWhatsAppClick({ property: prop, sourceSection: "contact_form" });
    window.open(waHref(prop, msg, "/contact"), "_blank", "noopener");
  };

  const inputCls =
    "min-h-[44px] w-full rounded-[10px] border border-antique-gold/40 bg-white/70 px-3 py-2 text-sm text-espresso placeholder:text-warm-umber/60 focus:border-maroon focus:outline-none";

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-[16px] bg-khadi-sand p-5 sm:p-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-warm-umber">
            Your name *
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className={inputCls}
          />
        </label>
        <label>
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-warm-umber">
            Phone *
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            inputMode="tel"
            className={inputCls}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-warm-umber">Property</span>
          <select value={prop} onChange={(e) => setProp(e.target.value as PropertyKey)} className={inputCls}>
            <option value="puri">Hotel Shree Ram, Puri</option>
            <option value="bhubaneswar">Shree Ram Lodge, Bhubaneswar</option>
          </select>
        </label>
        <label>
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-warm-umber">Dates</span>
          <input
            type="text"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="e.g. 12–14 Dec (optional)"
            className={inputCls}
          />
        </label>
      </div>
      <label>
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-warm-umber">Message</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Anything we should know? (optional)"
          className={`${inputCls} h-auto`}
        />
      </label>
      {error && (
        <p role="alert" className="text-sm font-medium text-maroon">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] bg-maroon px-6 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-[#8f2536]"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send on WhatsApp
      </button>
    </form>
  );
}
