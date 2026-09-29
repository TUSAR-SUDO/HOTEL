import Image from "next/image";
import { VineBorder } from "./motifs";
import { ownerWelcome } from "@/lib/content";

/**
 * "Namaskar from our family" — owner/reception welcome block with photo slot.
 * Hidden entirely until the owner provides both a photo and a note (JSON).
 */
export default function OwnerWelcome() {
  if (!ownerWelcome.enabled || !ownerWelcome.note || !ownerWelcome.photo) return null;

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <VineBorder className="mb-10 opacity-80" />
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* photo slot — arch crop */}
          <div className="relative mx-auto w-64 md:w-full md:max-w-xs">
            <div aria-hidden="true" className="absolute -inset-2 rounded-t-full border border-deep-gold/50" />
            <div className="relative overflow-hidden rounded-t-full">
              <Image
                src={ownerWelcome.photo}
                alt={ownerWelcome.photoAlt || "Host"}
                width={480}
                height={640}
                sizes="(min-width: 768px) 320px, 256px"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
          <blockquote>
            <p lang="or" className="font-oriya text-3xl font-semibold text-maroon">
              ନମସ୍କାର
            </p>
            <p className="mt-4 whitespace-pre-line font-heading text-[22px] italic leading-relaxed text-espresso sm:text-[26px]">
              {ownerWelcome.note}
            </p>
            <footer className="mt-6">
              <p className="text-lg font-semibold text-espresso">{ownerWelcome.name}</p>
              <p className="text-[15px] text-warm-umber">{ownerWelcome.role}</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
