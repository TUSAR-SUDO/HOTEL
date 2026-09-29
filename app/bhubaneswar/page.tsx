import type { Metadata } from "next";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import QuickEnquiryBar from "@/components/QuickEnquiryBar";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";
import DistanceChips from "@/components/DistanceChips";
import CrossSellBand from "@/components/CrossSellBand";
import FinalCTA from "@/components/FinalCTA";
import AmenityGrid from "@/components/AmenityGrid";
import LocalTips from "@/components/LocalTips";
import NearbyCard from "@/components/NearbyCard";
import VideoTourBlock from "@/components/VideoTourBlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProperty, roomsFor, getMedia } from "@/lib/content";
import { groupTrip } from "@/lib/whatsapp";
import { propertyJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shree Ram Lodge, Samantarapur",
  description:
    "A calm, practical lodge in Samantarapur, Bhubaneswar-2. Easy parking, honest rates, long-stay options. Book direct on WhatsApp.",
  alternates: { canonical: "/bhubaneswar" },
};

export default function BhubaneswarPage() {
  const property = getProperty("bhubaneswar");
  const rooms = roomsFor("bhubaneswar");
  const hero = getMedia(property.heroImageId);
  const pageSource = "/bhubaneswar";

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <PlaceholderMedia
          media={hero}
          eager
          badge={false}
          className="aspect-[4/5] w-full sm:aspect-[16/9] md:aspect-[21/9]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(42,27,20,0.2) 0%, rgba(42,27,20,0.5) 55%, rgba(42,27,20,0.8) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:pb-14 [text-shadow:0_1px_10px_rgba(42,27,20,0.85),0_0_3px_rgba(42,27,20,0.5)]">
            <p className="mb-2 text-[15px] font-medium text-antique-gold">
              Shree Ram Lodge · <span lang="or">ଶ୍ରୀ ରାମ ଲଜ୍</span>
            </p>
            <h1 className="max-w-3xl font-heading text-[40px] font-semibold leading-[1.08] text-ivory sm:text-[56px]">
              Comfortable, connected, close to the city
            </h1>
            <p className="mt-3 max-w-xl text-lg text-ivory/90">
              Samantarapur, Bhubaneswar-2 — calm, practical, well connected.
            </p>
            <div className="mt-6">
              <DistanceChips chips={property.distanceChips.filter((c) => !/TODO/i.test(c.value))} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick enquiry */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <QuickEnquiryBar defaultProperty="bhubaneswar" pageSource={pageSource} />
      </section>

      {/* Rooms */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <SectionHeading kicker="Rooms" title="Rooms at Shree Ram Lodge" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} pageSource={pageSource} />
          ))}
        </div>
      </section>

      {/* Business / long-stay strip */}
      <section className="bg-bottle-green px-4 py-10 text-ivory">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Staying for work or a long visit?</h2>
            <p className="mt-1 text-sm text-ivory/80">
              Weekly and monthly rates. GST invoice on request. Quiet rooms, easy parking.
            </p>
          </div>
          <WhatsAppButton
            property="bhubaneswar"
            message={groupTrip(1, "this month", property.brandSuffix).message}
            pageSource={pageSource}
            sourceSection="business_longstay_strip"
            variant="ghost"
          >
            Ask for long-stay rates
          </WhatsAppButton>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-khadi-sand/60 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Amenities" title="What's included" />
          <AmenityGrid amenities={property.amenities} />
        </div>
      </section>

      {/* Nearby */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading
          kicker="Nearby"
          title="Getting around"
          sub="Drive times shown after verification on Google Maps."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {property.nearby.map((n) => (
            <NearbyCard key={n.name} name={n.name} line={n.line} imageId={n.imageId} />
          ))}
        </div>
      </section>

      {/* Local tips */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <LocalTips tips={property.localTips} />
      </section>

      {/* Video tour placeholder */}
      <section className="bg-khadi-sand/50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="Walkthrough" title="Tour the lodge" align="center" />
          <VideoTourBlock mediaId="bbsr-tour" />
        </div>
      </section>

      {/* Cross-sell */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <CrossSellBand otherKey="puri" otherName="Hotel Shree Ram, Puri" pageSource={pageSource} />
      </section>

      <FinalCTA pageSource={pageSource} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd(property)) }}
      />
    </div>
  );
}
