import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, Sparkles, Wifi } from "lucide-react";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import PropertyChooser from "@/components/PropertyChooser";
import QuickEnquiryBar from "@/components/QuickEnquiryBar";
import RoomCard from "@/components/RoomCard";
import VideoTourBlock from "@/components/VideoTourBlock";
import ReturningGuestStrip from "@/components/ReturningGuestStrip";
import FinalCTA from "@/components/FinalCTA";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import OwnerWelcome from "@/components/OwnerWelcome";
import FAQAccordion from "@/components/FAQAccordion";
import { KonarkWheel, PipiliRibbon, OdiaWordmark, VineBorder } from "@/components/motifs";
import { properties, rooms, reviews, faqs, getMedia } from "@/lib/content";
import { waHref, generalEnquiry } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Shree Ram | Hotel in Puri & Lodge in Bhubaneswar",
  description:
    "Two family-run stays in Odisha. Clean rooms, honest prices, one WhatsApp away — Hotel Shree Ram, Puri and Shree Ram Lodge, Bhubaneswar.",
};

const WHY_ITEMS = [
  { icon: Clock, label: "24-hour reception" },
  { icon: Users, label: "Family-friendly" },
  { icon: Sparkles, label: "Rooms cleaned daily" },
  { icon: Wifi, label: "Free Wi-Fi" },
];

const MARQUEE = [
  { or: "ପୁରୀ", en: "Puri" },
  { or: "ଜଗନ୍ନାଥ ମନ୍ଦିର", en: "Jagannath Temple" },
  { or: "ଭୁବନେଶ୍ୱର", en: "Bhubaneswar" },
  { or: "କୋଣାର୍କ", en: "Konark" },
  { or: "ଚିଲିକା", en: "Chilika" },
  { or: "ଲିଙ୍ଗରାଜ", en: "Lingaraj" },
  { or: "ପାଇକପାରା", en: "Pipili" },
  { or: "ରଘୁରାଜପୁର", en: "Raghurajpur" },
];

export default function HomePage() {
  const hero = getMedia("puri-hero");
  const pageSource = "/";

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="relative">
        <div className="hero-zoom">
          <PlaceholderMedia
            media={hero}
            eager
            badge={false}
            className="aspect-[4/5] w-full sm:aspect-[16/10] md:aspect-[21/10]"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(42,27,20,0.15) 0%, rgba(42,27,20,0.42) 55%, rgba(42,27,20,0.82) 100%)",
          }}
        />
        {/* giant Odia wordmark, ghosted behind the headline (desktop only) */}
        <OdiaWordmark
          className="pointer-events-none absolute right-[4%] top-[10%] hidden text-[16vw] text-ivory/12 sm:block"
        />
        <div className="absolute inset-0 flex items-end [text-shadow:0_1px_10px_rgba(42,27,20,0.85),0_0_3px_rgba(42,27,20,0.5)]">
          <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:pb-16">
            <p className="mb-4 text-[15px] font-medium tracking-wide text-marigold">
              Namaskar · <span lang="or" className="font-oriya">ସ୍ବାଗତ</span>
            </p>
            <h1 className="max-w-3xl font-heading text-[40px] font-semibold leading-[1.04] tracking-tight text-ivory sm:text-6xl md:text-[84px]">
              Stay with <em className="italic text-marigold">family</em> in Puri &amp; Bhubaneswar.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ivory/90 sm:text-[21px]">
              Clean rooms. Honest prices. One WhatsApp away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href={waHref("puri", generalEnquiry("Puri").message, pageSource)}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-[14px] bg-maroon px-7 py-3 text-[15px] font-semibold text-ivory transition-colors hover:bg-[#8f2536]"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/rooms"
                className="inline-flex min-h-[48px] items-center rounded-[14px] border border-marigold/70 px-7 py-3 text-[15px] font-semibold text-ivory transition-colors hover:bg-ivory/10"
              >
                View rooms
              </Link>
            </div>
          </div>
        </div>
        {/* TODO_CLIENT_CONFIRM: replace hero artwork with the 10-15s muted looping
            hero video (≤3MB, poster first) once the shoot delivers. */}
      </section>

      {/* Pipili ribbon */}
      <PipiliRibbon className="bg-espresso" />

      {/* ---------- Marquee of place names ---------- */}
      <div className="marquee overflow-hidden border-b border-antique-gold/25 bg-espresso py-3.5" aria-hidden="true">
        <div className="marquee-track items-baseline gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-baseline gap-3 whitespace-nowrap">
              <span lang="or" className="font-oriya text-[17px] font-semibold text-antique-gold">
                {m.or}
              </span>
              <span className="text-[13px] uppercase tracking-[0.18em] text-ivory/60">{m.en}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Property chooser (asymmetric) ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionHeading
            title={<>Two stays, <em className="italic">one</em> family</>}
            sub="Both properties are small, clean and run with care. Pick a city."
          />
          <KonarkWheel size={72} className="hidden shrink-0 opacity-70 sm:block" />
        </div>
        <PropertyChooser rooms={rooms} />
      </section>

      {/* ---------- Quick enquiry ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <QuickEnquiryBar pageSource={pageSource} />
      </section>

      {/* ---------- Why strip ---------- */}
      <section className="border-y border-antique-gold/25 bg-khadi-sand/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 py-7 sm:grid-cols-4">
          {WHY_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-antique-gold/40 text-deep-gold">
                <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
              </span>
              <span className="text-[16px] font-medium text-espresso">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Rooms: full-bleed scroll-snap row ---------- */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto mb-8 max-w-6xl px-4">
          <SectionHeading
            kicker="Rooms"
            title={<>Simple, <em className="italic">spotless</em>, honest</>}
            sub="Every room is en-suite with hot water. Prices on request until confirmed by the owner."
          />
        </div>
        <div className="snap-row px-4 sm:px-[max(1rem,calc((100vw-72rem)/2))]">
          {rooms.map((room) => (
            <div className="w-[min(82vw,380px)]" key={room.id}>
              <RoomCard room={room} pageSource={pageSource} />
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-4">
          <Link
            href="/rooms"
            className="inline-flex min-h-[48px] items-center rounded-[14px] border border-deep-gold/50 px-6 py-3 text-[15px] font-semibold text-deep-gold transition-colors hover:bg-khadi-sand"
          >
            See all rooms
          </Link>
        </div>
      </section>

      {/* ---------- Video tour ---------- */}
      <section className="bg-khadi-sand/50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="Walkthrough" title={<>See it <em className="italic">before</em> you book</>} align="center" />
          <div className="rounded-[16px] border border-antique-gold/40 p-2.5">
            <VideoTourBlock mediaId="puri-tour" />
          </div>
        </div>
      </section>

      {/* ---------- Guest voices — hidden until real reviews exist ---------- */}
      {reviews.length > 0 && <GuestVoices />}

      {/* ---------- Owner welcome (hidden until provided) ---------- */}
      <OwnerWelcome />

      {/* ---------- Location snapshot (asymmetric) ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          kicker="Locations"
          title={<>Where we <em className="italic">are</em></>}
          sub="Distances appear once verified on Google Maps."
        />
        <div className="grid gap-10 md:grid-cols-2">
          {properties.map((p, i) => (
            <div key={p.key} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <div className="relative">
                <PlaceholderMedia mediaId={p.heroImageId} className="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" />
                <span className="absolute -bottom-4 left-4 bg-marigold px-4 py-1.5 text-[14px] font-semibold text-espresso">
                  {p.name}
                </span>
              </div>
              <p className="mt-8 text-[16px] leading-relaxed text-warm-umber">{p.address}</p>
              <p className="mt-2 text-[14px] text-warm-umber/80">
                {p.distanceChips.filter((c) => !/TODO/i.test(c.value)).map((c) => `${c.label} · ${c.value}`).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Returning guest: maroon full-bleed ---------- */}
      <section className="bg-maroon px-4 py-14 text-ivory">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <KonarkWheel size={64} color="#E2A72E" className="hidden shrink-0 sm:block" />
            <div>
              <p className="font-heading text-3xl font-semibold sm:text-4xl">
                Stayed with us <em className="italic text-marigold">before?</em>
              </p>
              <p className="mt-1 text-[15px] text-ivory/80">Returning guests get our member rate.</p>
            </div>
          </div>
          <ReturningGuestStrip
            properties={properties.map((p) => ({ key: p.key, label: p.name }))}
            pageSource={pageSource}
          />
        </div>
      </section>

      {/* ---------- FAQ — hidden until the owner confirms real answers ---------- */}
      {faqs.every((f) => !/TODO_CLIENT_CONFIRM/.test(f.a)) && faqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
          <SectionHeading kicker="Good to know" title={<>Common <em className="italic">questions</em></>} />
          <FAQAccordion items={faqs} />
        </section>
      )}

      {/* ---------- Final CTA ---------- */}
      <FinalCTA pageSource={pageSource} />
    </div>
  );
}

function GuestVoices() {
  return (
    <section className="bg-khadi-sand/50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Guest voices" title={<>What guests <em className="italic">say</em></>} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.slice(0, 4).map((r, i) => (
            <figure key={i} className="rounded-[16px] bg-ivory p-6 shadow-soft">
              <div className="text-deep-gold" aria-label={`${r.stars} out of 5 stars`}>
                {"★".repeat(r.stars)}
              </div>
              <blockquote className="mt-2 text-[15.5px] leading-relaxed text-warm-umber">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-3 text-[15px] font-medium text-espresso">
                {r.nameInitial} · {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
