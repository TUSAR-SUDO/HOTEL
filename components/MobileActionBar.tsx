"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { waHref, generalEnquiry } from "@/lib/whatsapp";
import { mapsDirectionsUrl } from "@/lib/format";
import { getProperty } from "@/lib/content";
import { trackWhatsAppClick } from "./track";

/** Highest-converting element on Indian hotel sites: always-visible action bar. */
export default function MobileActionBar() {
  const pathname = usePathname() || "/";
  const property = pathname.startsWith("/puri")
    ? getProperty("puri")
    : pathname.startsWith("/bhubaneswar")
      ? getProperty("bhubaneswar")
      : null;

  const phone = property ? property.phonePrimary : "919337592943";
  const directionsQuery = property
    ? property.mapsQuery
    : "Hotel Shree Ram, Narendrakona Road, Puri, Odisha";

  function waClick() {
    if (property) {
      trackWhatsAppClick({ property: property.key, sourceSection: "mobile_bar" });
    }
    // No chooser here — the bar always acts on the default property to stay one-tap.
  }

  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-0 left-0 right-0 z-40 grid h-14 grid-cols-3 bg-espresso md:hidden"
    >
      <a
        href={`tel:+${phone}`}
        className="flex flex-col items-center justify-center gap-0.5 text-antique-gold"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-medium">Call</span>
      </a>
      {property ? (
        <a
          href={waHref(property.key, generalEnquiry(property.brandSuffix).message, pathname)}
          target="_blank"
          rel="noopener"
          onClick={waClick}
          className="flex flex-col items-center justify-center gap-0.5 text-antique-gold"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
      ) : (
        <Link href="/contact" className="flex flex-col items-center justify-center gap-0.5 text-antique-gold">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </Link>
      )}
      <a
        href={mapsDirectionsUrl(directionsQuery)}
        target="_blank"
        rel="noopener"
        className="flex flex-col items-center justify-center gap-0.5 text-antique-gold"
      >
        <MapPin className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-medium">Directions</span>
      </a>
    </nav>
  );
}
