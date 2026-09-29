import {
  Wifi, Snowflake, ShowerHead, Tv, Car, ArrowUpDown, ConciergeBell,
  Luggage, Shirt, PlugZap, Cctv, Lock,
} from "lucide-react";
import type { Amenity } from "@/lib/types";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  ac: Snowflake,
  "hot-water": ShowerHead,
  tv: Tv,
  parking: Car,
  lift: ArrowUpDown,
  "desk-24": ConciergeBell,
  luggage: Luggage,
  laundry: Shirt,
  "power-backup": PlugZap,
  cctv: Cctv,
  lockers: Lock,
};

export default function AmenityGrid({
  amenities,
  onDark = false,
}: {
  amenities: Amenity[];
  onDark?: boolean;
}) {
  return (
    <ul className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
      {amenities.map((a) => {
        const Icon = ICONS[a.id];
        if (!Icon) return null; // unknown amenity id: skip rather than guess an icon
        return (
          <li
            key={a.id}
            className={`flex items-center gap-3 text-[16px] font-medium ${
              onDark ? "text-ivory" : "text-espresso"
            }`}
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                onDark
                  ? "border-marigold/50 text-marigold"
                  : "border-antique-gold/35 text-deep-gold"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            {a.label}
          </li>
        );
      })}
    </ul>
  );
}
