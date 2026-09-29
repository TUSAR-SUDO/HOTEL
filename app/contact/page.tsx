import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { properties, privacyNote } from "@/lib/content";
import { formatPhone, mapsEmbedUrl, mapsDirectionsUrl } from "@/lib/format";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or WhatsApp Hotel Shree Ram, Puri and Shree Ram Lodge, Bhubaneswar. Addresses, phone numbers, maps and a quick enquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        kicker="Contact"
        title="Talk to us directly"
        sub="One WhatsApp message to the owner. No forms disappearing into an inbox."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {properties.map((p) => (
          <section key={p.key} className="overflow-hidden rounded-[16px] bg-ivory shadow-soft">
            <div className="p-6">
              <h2 className="font-heading text-2xl font-semibold text-espresso">{p.name}</h2>
              <p className="mt-2 flex items-start gap-2 text-sm text-warm-umber">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-deep-gold" aria-hidden="true" />
                {p.address}
              </p>
              <div className="mt-3 flex flex-col gap-1.5 text-sm">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-deep-gold" aria-hidden="true" />
                  <a href={`tel:+${p.phonePrimary}`} className="font-medium text-espresso hover:text-deep-gold">
                    {formatPhone(p.phonePrimary)}
                  </a>
                  <span aria-hidden="true">·</span>
                  <a href={`tel:+${p.phoneSecondary}`} className="font-medium text-espresso hover:text-deep-gold">
                    {formatPhone(p.phoneSecondary)}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-deep-gold" aria-hidden="true" />
                  <a href={`mailto:${p.email}`} className="hover:text-deep-gold">{p.email}</a>
                </span>
              </div>
              <p className="mt-3 rounded-[10px] bg-khadi-sand px-3 py-2 text-xs text-warm-umber">
                The desk is always attended — message us any time on WhatsApp.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={mapsDirectionsUrl(p.mapsQuery)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-[14px] border border-deep-gold/50 px-5 py-2.5 text-sm font-semibold text-deep-gold transition-colors hover:bg-khadi-sand"
                >
                  Get directions <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <iframe
              title={`Map — ${p.name}`}
              src={mapsEmbedUrl(p.mapsQuery)}
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </section>
        ))}
      </div>

      {/* Enquiry form (opens WhatsApp; no backend in Phase 1) */}
      <section className="mt-12 max-w-2xl">
        <h2 className="font-heading text-2xl font-semibold text-espresso">Send an enquiry</h2>
        <p className="mb-4 mt-1 text-sm text-warm-umber">{privacyNote}</p>
        <ContactForm />
      </section>
    </div>
  );
}
