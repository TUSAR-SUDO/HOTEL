import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReturningGuestStrip from "@/components/ReturningGuestStrip";
import { offers, properties } from "@/lib/content";
import { generalEnquiry, returningGuest } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Direct-booking offers",
  description:
    "Book direct on WhatsApp with Shree Ram: best rate on request, returning-guest member rates, and festival-season updates.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage() {
  const { directBooking } = offers.hero;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeading
        kicker="Book direct"
        title="Why book with us"
        sub="No OTA commissions, no middlemen. You talk to the owner directly."
      />

      {/* Direct-booking benefit — shown only once the owner confirms the benefit */}
      {directBooking.enabled ? (
        <div className="rounded-[16px] bg-maroon p-6 text-ivory sm:p-8">
          <h2 className="font-heading text-2xl font-semibold">{directBooking.title}</h2>
          <p className="mt-2 text-sm text-ivory/85">{directBooking.benefit}</p>
          <div className="mt-5">
            <WhatsAppButton
              property="puri"
              message={generalEnquiry("Puri").message}
              pageSource="/offers"
              sourceSection="offers_direct_booking"
            >
              Book on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      ) : (
        <div className="rounded-[16px] border border-dashed border-deep-gold/50 bg-khadi-sand/60 p-6 text-sm text-warm-umber sm:p-8">
          <p className="font-medium text-espresso">Direct-booking benefit coming soon.</p>
          <p className="mt-1">
            The owner is choosing the direct-booking benefit (best rate, early check-in, free pickup…).
            You can still enquire — direct is always at least as good as the apps.
          </p>
        </div>
      )}

      {/* Retention buttons */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {properties.map((p) => (
          <div key={p.key} className="rounded-[16px] border border-antique-gold/30 bg-ivory p-5">
            <h3 className="font-heading text-lg font-semibold text-espresso">Stayed before? · {p.city}</h3>
            <p className="mt-1 text-sm text-warm-umber">Returning guests get our member rate.</p>
            <div className="mt-4">
              <WhatsAppButton
                property={p.key}
                message={returningGuest(p.name).message}
                pageSource="/offers"
                sourceSection="offers_returning_guest"
              >
                Get member rate
              </WhatsAppButton>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal notices (JSON-driven; hidden until enabled) */}
      {offers.seasonalNotices.some((n) => n.enabled) && (
        <section className="mt-10">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-espresso">Seasonal notices</h2>
          <div className="space-y-4">
            {offers.seasonalNotices
              .filter((n) => n.enabled)
              .map((n, i) => (
                <aside key={i} className="rounded-[16px] border border-antique-gold/40 bg-khadi-sand/70 p-5">
                  <h3 className="font-heading text-lg font-semibold text-espresso">{n.title}</h3>
                  <p className="mt-1 text-sm text-warm-umber">{n.text}</p>
                </aside>
              ))}
          </div>
        </section>
      )}

      <ReturningGuestStrip
        properties={properties.map((p) => ({ key: p.key, label: p.name }))}
        pageSource="/offers"
      />
    </div>
  );
}
