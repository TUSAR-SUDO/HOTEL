import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";
import { WA, generalEnquiry } from "@/lib/whatsapp";
import { KonarkWheel, VineBorder } from "./motifs";

/** "Ready to stay?" closing band with the two taps that matter. */
export default function FinalCTA({ pageSource }: { pageSource: string }) {
  return (
    <section className="bg-espresso px-4 py-16 text-center sm:py-24">
      <div className="mx-auto max-w-2xl">
        <KonarkWheel size={76} color="#E2A72E" className="mx-auto mb-8" />
        <h2 className="font-heading text-[42px] font-semibold leading-[1.05] tracking-tight text-ivory sm:text-6xl">
          Ready to <em className="italic text-marigold">stay?</em>
        </h2>
        <p className="mt-4 text-lg text-ivory/80">
          One WhatsApp message. We reply with availability and our best direct rate.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <WhatsAppButton
            property="puri"
            message={generalEnquiry("Puri").message}
            pageSource={pageSource}
            sourceSection="final_cta"
          >
            Book on WhatsApp
          </WhatsAppButton>
          <CallButton phone={WA.puri.number} label="Call Puri" />
          <CallButton phone={WA.bhubaneswar.number} label="Call Bhubaneswar" />
        </div>
        <VineBorder color="#B98A3B" className="mt-14 opacity-60" />
      </div>
    </section>
  );
}
