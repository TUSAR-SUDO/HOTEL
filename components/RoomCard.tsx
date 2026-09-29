import { Users, Maximize, BedDouble, Snowflake } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import WhatsAppButton from "./WhatsAppButton";
import { roomEnquiry } from "@/lib/whatsapp";
import { priceLine, priceUnknown } from "@/lib/format";
import { getProperty } from "@/lib/content";
import type { Room } from "@/lib/types";

export default function RoomCard({
  room,
  pageSource,
}: {
  room: Room;
  pageSource: string;
}) {
  const property = getProperty(room.property);

  return (
    <article className="flex h-full flex-col">
      {/* arch / jharokha image */}
      <div className="relative px-2 pt-2">
        <div aria-hidden="true" className="absolute inset-x-2 top-0 h-1/2 rounded-t-full border border-antique-gold/60" />
        <div className="relative overflow-hidden rounded-t-full">
          <PlaceholderMedia mediaId={room.imageId} className="aspect-[3/4]" badge={false} />
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col px-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-[24px] font-semibold leading-tight tracking-tight text-espresso">
            {room.name}
          </h3>
          <span
            className={`whitespace-nowrap rounded-full px-3 py-1 text-[13px] font-semibold ${
              priceUnknown(room)
                ? "bg-khadi-sand text-deep-gold"
                : "bg-bottle-green/10 text-bottle-green"
            }`}
          >
            {priceLine(room).replace(" / night", "")}
          </span>
        </div>

        <ul className="mt-3.5 flex flex-wrap gap-2">
          {[
            { icon: Maximize, text: room.size.replace("TODO sq ft", "Size on request") },
            { icon: BedDouble, text: room.bed },
            { icon: Users, text: `${room.maxGuests} guests` },
            { icon: Snowflake, text: room.ac ? "AC" : "Non-AC" },
          ].map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="inline-flex items-center gap-1.5 rounded-full border border-antique-gold/30 bg-khadi-sand/60 px-3 py-1.5 text-[13px] font-medium text-espresso"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-deep-gold" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>

        {room.facts.length > 0 && (
          <p className="mt-3 text-[14.5px] leading-relaxed text-warm-umber">
            {room.facts.join(" · ")}
          </p>
        )}

        <div className="mt-auto pt-4">
          <WhatsAppButton
            property={room.property}
            message={roomEnquiry(room.name, property.brandSuffix).message}
            pageSource={pageSource}
            sourceSection="room_card"
            room={room.name}
            className="w-full"
          >
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
