"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { WA, waHref, generalEnquiry } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "./track";

const NAV = [
  { href: "/puri", label: "Puri" },
  { href: "/bhubaneswar", label: "Bhubaneswar" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/explore", label: "Explore" },
  { href: "/contact", label: "Contact" },
];

/** The real SR monogram (client-provided) with a subtle antique-gold ring. */
export function Monogram({ size = 44 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative block shrink-0 overflow-hidden rounded-full bg-espresso"
      style={{ width: size, height: size, border: "1.5px solid rgba(185,138,59,0.65)" }}
    >
      <Image
        src="/sr-logo-192.png"
        alt=""
        width={192}
        height={192}
        sizes={`${size}px`}
        priority
        className="h-full w-full object-cover"
      />
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const property = pathname.startsWith("/puri")
    ? "puri"
    : pathname.startsWith("/bhubaneswar")
      ? "bhubaneswar"
      : "puri";
  const phone = WA[property].number;

  return (
    <header className="sticky top-0 z-30 border-b border-antique-gold/25 bg-espresso/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Shree Ram home">
          <Monogram size={46} />
          <span className="font-heading text-[26px] font-semibold text-ivory">Shree Ram</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-[15px] font-medium transition-colors hover:text-antique-gold ${
                pathname === n.href ? "text-antique-gold" : "text-ivory/90"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+${phone}`}
            aria-label="Call us"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ivory transition-colors hover:bg-ivory/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={waHref(property, generalEnquiry(WA[property].city).message, pathname)}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsAppClick({ property, sourceSection: "header" })}
            className="hidden min-h-[44px] items-center gap-2 rounded-[14px] bg-maroon px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-[#8f2536] md:inline-flex"
          >
            <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            Book on WhatsApp
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ivory transition-colors hover:bg-ivory/10 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile" className="border-t border-antique-gold/20 bg-espresso px-4 py-2 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-[8px] px-3 py-3 text-sm font-medium text-ivory/90 hover:bg-ivory/10"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
