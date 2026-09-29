import WhatsAppButton from "./WhatsAppButton";
import { returningGuest } from "@/lib/whatsapp";

/** Retention lever #1: "Stayed with us before?" → member-rate WhatsApp message. */
export default function ReturningGuestStrip({
  properties,
  pageSource,
}: {
  properties: Array<{ key: "puri" | "bhubaneswar"; label: string }>;
  pageSource: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {properties.map((p) => (
        <WhatsAppButton
          key={p.key}
          property={p.key}
          message={returningGuest(p.label).message}
          pageSource={pageSource}
          sourceSection="returning_guest"
          variant="ghost"
        >
          Get member rate · {p.label.split(",")[1]?.trim() || p.label}
        </WhatsAppButton>
      ))}
    </div>
  );
}
