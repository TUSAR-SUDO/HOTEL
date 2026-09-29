import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";
import FinalCTA from "@/components/FinalCTA";
import { properties, roomsFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rooms",
  description:
    "All rooms at Hotel Shree Ram, Puri and Shree Ram Lodge, Bhubaneswar. Clean en-suite rooms with hot water. Enquire on WhatsApp.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        kicker="Rooms"
        title="Every room, both stays"
        sub="Prices are confirmed by the owner before display — enquire for today's best direct rate."
      />

      {properties.map((p) => {
        const rooms = roomsFor(p.key);
        if (rooms.length === 0) return null;
        return (
          <section key={p.key} id={p.key} className="mb-14 scroll-mt-24">
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 className="font-heading text-[32px] font-semibold text-espresso">
                {p.name} <span className="text-warm-umber">· {p.city}</span>
              </h2>
              <a
                href={`#rooms-${p.key}`}
                className="text-[13px] font-semibold uppercase tracking-[0.14em] text-deep-gold hover:underline"
              >
                {p.city} rooms
              </a>
            </div>
            <div id={`rooms-${p.key}`} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} pageSource="/rooms" />
              ))}
            </div>
          </section>
        );
      })}

      <FinalCTA pageSource="/rooms" />
    </div>
  );
}
