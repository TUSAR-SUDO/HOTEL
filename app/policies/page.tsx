import type { Metadata } from "next";
import {
  Clock, IdCard, CalendarX2, CreditCard, BedDouble, PawPrint, Cigarette, UserCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { policies, privacyNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Check-in and check-out times, ID requirements, cancellation, payment modes and house rules at Shree Ram — in plain language.",
  alternates: { canonical: "/policies" },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  checkin: Clock,
  id: IdCard,
  cancellation: CalendarX2,
  payment: CreditCard,
  children: BedDouble,
  pets: PawPrint,
  smoking: Cigarette,
  visitors: UserCheck,
};

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <SectionHeading
        kicker="Good to know"
        title="House policies, plainly"
        sub="Short answers now; exact details are confirmed by the owner before launch."
      />

      <ul className="divide-y divide-antique-gold/25 rounded-[16px] border border-antique-gold/30 bg-ivory">
        {policies.map((pol) => {
          const Icon = ICONS[pol.id];
          const isTodo = /TODO_CLIENT_CONFIRM/.test(pol.text);
          return (
            <li key={pol.id} className="flex gap-4 p-5">
              {Icon && (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-antique-gold/40 text-deep-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
              <div>
                <h2 className="font-heading text-lg font-semibold text-espresso">{pol.label}</h2>
                <p className={`mt-1 text-sm leading-relaxed ${isTodo ? "italic text-warm-umber/80" : "text-warm-umber"}`}>
                  {pol.text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 rounded-[12px] bg-khadi-sand px-4 py-3 text-xs text-warm-umber">
        {privacyNote}
      </p>
    </div>
  );
}
