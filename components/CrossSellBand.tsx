import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { generalEnquiry, WA } from "@/lib/whatsapp";

/** "Visiting Puri/Bhubaneswar too?" retention loop between the two properties. */
export default function CrossSellBand({
  otherKey,
  otherName,
  pageSource,
}: {
  otherKey: "puri" | "bhubaneswar";
  otherName: string;
  pageSource: string;
}) {
  return (
    <section className="rounded-[16px] border border-antique-gold/40 bg-khadi-sand p-6 sm:p-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-espresso">
            {otherKey === "puri" ? "Visiting Puri too?" : "Heading to Puri?"}
          </h2>
          <p className="mt-1 text-sm text-warm-umber">
            Stay with us at {otherName} — same family, same care.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${otherKey}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-[14px] border border-deep-gold/50 px-5 py-2.5 text-sm font-semibold text-deep-gold transition-colors hover:bg-khadi-sand/60"
          >
            Explore
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <WhatsAppButton
            property={otherKey}
            message={generalEnquiry(WA[otherKey].city).message}
            pageSource={pageSource}
            sourceSection="cross_sell_band"
          >
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
