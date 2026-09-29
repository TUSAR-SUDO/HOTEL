import { Phone } from "lucide-react";
import { telHref } from "@/lib/format";

/** Call fallback shown next to every major WhatsApp CTA. */
export default function CallButton({
  phone,
  label = "Call reception",
  className = "",
}: {
  phone: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={telHref(phone)}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[14px] border border-antique-gold/50 px-6 py-3 text-[15px] font-semibold text-ivory transition-colors hover:bg-ivory/10 ${className}`}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}
