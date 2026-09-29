import { MapPin } from "lucide-react";
import type { DistanceChip } from "@/lib/types";

const isTodo = (v: string) => /TODO/i.test(v);

export default function DistanceChips({ chips }: { chips: DistanceChip[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {chips.map((c) => (
        <li
          key={c.label}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] ${
            isTodo(c.value)
              ? "border-dashed border-deep-gold/50 bg-khadi-sand/70 text-warm-umber"
              : "border-antique-gold/40 bg-khadi-sand text-espresso"
          }`}
        >
          <MapPin className="h-4 w-4 text-deep-gold" aria-hidden="true" />
          <span className="font-semibold">{c.label}</span>
          <span aria-hidden="true">·</span>
          <span>{c.value}</span>
        </li>
      ))}
    </ul>
  );
}
