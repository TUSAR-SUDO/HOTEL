import type { Metadata } from "next";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import ArchImage from "@/components/ArchImage";
import QuickEnquiryBar from "@/components/QuickEnquiryBar";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";
import CrossSellBand from "@/components/CrossSellBand";
import FinalCTA from "@/components/FinalCTA";
import AmenityGrid from "@/components/AmenityGrid";
import NearbyCard from "@/components/NearbyCard";
import VideoTourBlock from "@/components/VideoTourBlock";
import { KonarkWheel, PipiliRibbon, WaveDivider, OdiaWordmark, VineBorder } from "@/components/motifs";
import { getProperty, roomsFor, getMedia } from "@/lib/content";
import { propertyJsonLd } from "@/lib/seo";
import { mapsSearchUrl } from "@/lib/format";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Hotel Shree Ram, Puri",
  description:
    "A peaceful, family-run hotel in Market Square, Puri. Clean en-suite rooms with hot water. Book direct on WhatsApp with the owner.",
  alternates: { canonical: "/puri" },
};

export default function PuriPage() {
  const property = getProperty("puri");
  const rooms = roomsFor("puri");
  const hero = getMedia(property.heroImageId);
  const pageSource = "/puri";

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
        <OdiaWordmark className="pointer-events-none absolute right-[4%] top-[8%] text-[20vw] text-ivory/12 sm:text-[14vw]" />
        <div className="absolute inset-0 flex items-end [text-shadow:0_1px_16px_rgba(42,27,20,0.55)]">
          <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:pb-14">
            <p className="mb-3 text-[15px] font-medium tracking-wide text-marigold">
              Hotel Shree Ram · <span lang="or" className="font-oriya">ପୁରୀ</span>
            </p>
            <h1 className="max-w-3xl font-heading text-[40px] font-semibold leading-[1.04] tracking-tight text-ivory sm:text-[64px]">
              A <em className="italic text-marigold">peaceful</em> stay in the heart of Puri
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ivory/90">
              {property.address}
            </p>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ivory/75">
              Bhubaneswar Airport is typically 80–90 minutes by road. Other distances are being
              verified on Google Maps before we publish them.
            </p>
          </div>
        </div>
      </section>

      <PipiliRibbon className="bg-espresso" />

      {/* ---------- Intro: asymmetric two-column with arch image ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <h2 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-espresso sm:text-5xl">
              Steps from the sea, <br />
              <em className="italic text-maroon">close</em> to the temple
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-warm-umber">
              A family-run stay in Market Square — clean en-suite rooms, hot water round the
              clock, and someone at the desk whenever you arrive, however late the train runs.
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-warm-umber">
              Ask us anything before you book — we answer on WhatsApp, personally.
            </p>
            <div className="mt-8">
              <QuickEnquiryBar defaultProperty="puri" pageSource={pageSource} />
            </div>
          </div>
          <div className="md:pl-6">
            <ArchImage mediaId="puri-lobby" sizes="(min-width: 768px) 40vw, 100vw" />
            <p className="mt-5 text-center font-heading text-[15px] italic text-warm-umber">
              Reception — hand-painted arch, like our town
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Rooms: full-bleed snap row ---------- */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto mb-8 max-w-6xl px-4">
          <SectionHeading
            kicker="Rooms"
            title={<>Rooms at <em className="italic">Shree Ram</em></>}
            sub="Prices on request until confirmed by the owner."
          />
        </div>
        <div className="snap-row px-4 sm:px-[max(1rem,calc((100vw-72rem)/2))]">
          {rooms.map((room) => (
            <div className="w-[min(82vw,380px)]" key={room.id}>
              <RoomCard room={room} pageSource={pageSource} />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Amenities: maroon full-bleed band ---------- */}
      <section className="mt-16 bg-maroon px-4 py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <SectionHeading
              kicker="Amenities"
              title={<>What&rsquo;s <em className="italic text-marigold">included</em></>}
              onDark
            />
            <KonarkWheel size={72} color="#E2A72E" className="hidden shrink-0 sm:block" />
          </div>
          <AmenityGrid amenities={property.amenities} onDark />
          <VineBorder color="#E2A72E" className="mt-12 opacity-70" />
        </div>
      </section>

      {/* ---------- From our desk (local tips) ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-deep-gold">
              From our desk
            </p>
            <h2 className="mt-2 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-espresso">
              Local <em className="italic text-maroon">tips</em>
            </h2>
            <KonarkWheel size={88} className="mt-8 opacity-80" />
          </div>
          <ul className="space-y-5">
            {property.localTips.bullets
              .filter((b) => !/TODO_CLIENT_CONFIRM/.test(b))
              .map((b, i) => (
                <li key={i} className="flex gap-4 border-b border-antique-gold/25 pb-5">
                  <span className="font-heading text-[26px] font-semibold leading-none text-marigold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-[16.5px] leading-relaxed text-warm-umber">{b}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* ---------- Nearby: offset cards with wave divider above ---------- */}
      <WaveDivider color="#E3EAE0" className="-mb-px" />
      <section className="bg-sage-mist/70 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Nearby"
            title={<>Close to <em className="italic">what matters</em></>}
            sub="Distances appear once verified on Google Maps."
          />
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {property.nearby.map((n, i) => (
              <div key={n.name} className={i % 2 === 1 ? "lg:mt-14" : ""}>
                <NearbyCard name={n.name} line={n.line} imageId={n.imageId} />
              </div>
            ))}
          </div>
          <p className="mt-10 flex items-center gap-2 text-[14px] text-warm-umber">
            <MapPin className="h-4 w-4 text-deep-gold" aria-hidden="true" />
            Find us:{" "}
            <a
              href={mapsSearchUrl(property.mapsQuery)}
              target="_blank"
              rel="noopener"
              className="font-semibold text-deep-gold hover:underline"
            >
              Google Maps
            </a>
          </p>
        </div>
      </section>
      <WaveDivider color="#E3EAE0" flip className="-mt-px" />

      {/* ---------- Video tour ---------- */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="Walkthrough" title={<>Tour the <em className="italic">hotel</em></>} align="center" />
          <div className="rounded-[16px] border border-antique-gold/40 p-2.5">
            <VideoTourBlock mediaId="puri-tour" />
          </div>
        </div>
      </section>

      {/* ---------- Cross-sell + CTA ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <CrossSellBand otherKey="bhubaneswar" otherName="Shree Ram Lodge, Bhubaneswar" pageSource={pageSource} />
      </section>

      <FinalCTA pageSource={pageSource} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd(property)) }}
      />
    </div>
  );
}
