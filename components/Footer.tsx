import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Monogram } from "./Header";
import { properties, privacyNote } from "@/lib/content";
import { formatPhone, mapsSearchUrl } from "@/lib/format";
import { SITE } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Monogram size={48} />
            <span className="font-heading text-[28px] font-semibold text-ivory">Shree Ram</span>
          </div>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed">
            Clean rooms, honest prices, one WhatsApp away — in Puri and Bhubaneswar.
          </p>
          <p className="mt-4 text-xs text-ivory/60">
            {/* TODO_CLIENT_CONFIRM: GST / trade licence number in the footer if applicable */}
            GST / registration: on request
          </p>
        </div>

        <div className="space-y-6">
          {properties.map((p) => (
            <div key={p.key}>
              <h3 className="font-heading text-[21px] font-semibold text-antique-gold">{p.name}</h3>
              <p className="mt-2 flex items-start gap-2 text-[15px]">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-antique-gold" aria-hidden="true" />
                {p.address}
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-[15px]">
                <Phone className="h-4 w-4 shrink-0 text-antique-gold" aria-hidden="true" />
                <a href={`tel:+${p.phonePrimary}`} className="hover:text-antique-gold">
                  {formatPhone(p.phonePrimary)}
                </a>
                <span aria-hidden="true">·</span>
                <a href={`tel:+${p.phoneSecondary}`} className="hover:text-antique-gold">
                  {formatPhone(p.phoneSecondary)}
                </a>
              </p>
              <a
                href={mapsSearchUrl(p.mapsQuery)}
                target="_blank"
                rel="noopener"
                className="mt-1 inline-flex items-center gap-1 text-sm text-antique-gold hover:underline"
              >
                Find on Google Maps <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-heading text-[21px] font-semibold text-antique-gold">Site</h3>
          <ul className="mt-2 space-y-2.5 text-[15px]">
            {[
              ["/rooms", "Rooms"],
              ["/gallery", "Gallery"],
              ["/explore", "Plan your trip"],
              ["/offers", "Direct-booking offers"],
              ["/policies", "Policies"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-antique-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 shrink-0 text-antique-gold" aria-hidden="true" />
            <a href={`mailto:${SITE.email}`} className="hover:text-antique-gold">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        {/* Extra bottom padding on mobile so the fixed action bar never covers the small print */}
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-20 pt-5 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between md:pb-5">
          <p>© {new Date().getFullYear()} Shree Ram. All rights reserved.</p>
          <p>{privacyNote}</p>
        </div>
      </div>
    </footer>
  );
}
