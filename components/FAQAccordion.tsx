import { ChevronDown } from "lucide-react";

/** Native-details accordion: keyboard-accessible with zero JS. */
export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-antique-gold/25 rounded-[16px] border border-antique-gold/30 bg-ivory">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-medium text-espresso [&::-webkit-details-marker]:hidden">
            {f.q}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-deep-gold transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="px-6 pb-5 text-[15.5px] leading-relaxed text-warm-umber">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
