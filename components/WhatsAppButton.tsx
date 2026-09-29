"use client";

import { MessageCircle } from "lucide-react";
import { waHref } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "./track";

type Props = {
  property: "puri" | "bhubaneswar";
  message: string;
  pageSource: string;
  sourceSection: string;
  room?: string;
  children: React.ReactNode;
  variant?: "primary" | "green" | "ghost";
  className?: string;
};

const styles: Record<string, string> = {
  primary:
    "bg-maroon text-ivory hover:bg-[#8f2536] active:bg-[#6b1925]",
  green:
    "bg-whatsapp text-espresso hover:bg-[#1fb457] active:bg-[#1ba04e]",
  ghost:
    "border border-antique-gold/60 text-ivory hover:bg-ivory/10",
};

export default function WhatsAppButton({
  property,
  message,
  pageSource,
  sourceSection,
  room,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <a
      href={waHref(property, message, pageSource)}
      target="_blank"
      rel="noopener"
      onClick={() => trackWhatsAppClick({ property, sourceSection, room })}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[14px] px-6 py-3 text-[15px] font-semibold transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {children}
    </a>
  );
}
