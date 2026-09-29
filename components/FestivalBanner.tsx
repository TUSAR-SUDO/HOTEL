import WhatsAppButton from "./WhatsAppButton";
import { festivalOptIn } from "@/lib/whatsapp";
import type { FestivalBanner as FestivalBannerData } from "@/lib/types";

/** Rendered only when enabled in properties.json; dates are owner-editable. */
export default function FestivalBanner({
  banner,
  propertyKey,
  propertyLabel,
  pageSource,
}: {
  banner: FestivalBannerData;
  propertyKey: "puri" | "bhubaneswar";
  propertyLabel: string;
  pageSource: string;
}) {
  if (!banner.enabled || !banner.title) return null;

  return (
    <aside className="flex flex-col gap-3 rounded-[16px] border border-antique-gold/40 bg-maroon px-5 py-4 text-ivory sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-heading text-lg font-semibold">{banner.title}</p>
        <p className="text-sm text-ivory/85">{banner.text}</p>
      </div>
      <WhatsAppButton
        property={propertyKey}
        message={festivalOptIn(propertyLabel).message}
        pageSource={pageSource}
        sourceSection="festival_banner"
        variant="ghost"
        className="shrink-0"
      >
        {banner.cta || "Ask on WhatsApp"}
      </WhatsAppButton>
    </aside>
  );
}
