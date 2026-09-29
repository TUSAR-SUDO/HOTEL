import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArchImage from "./ArchImage";
import { properties } from "@/lib/content";
import { priceLine } from "@/lib/format";
import type { Room } from "@/lib/types";

export default function PropertyChooser({ rooms }: { rooms: Room[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-8">
      {properties.map((p, i) => {
        const cheapest = rooms
          .filter((r) => r.property === p.key)
          .reduce<number | null>(
            (min, r) => (r.priceFrom && (min === null || r.priceFrom < min) ? r.priceFrom : min),
            null
          );
        return (
          <Link
            key={p.key}
            href={`/${p.key}`}
            className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}
          >
            <ArchImage mediaId={p.heroImageId} sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-deep-gold">
                  {p.city}
                </p>
                <h3 className="mt-1 font-heading text-[32px] font-semibold leading-tight tracking-tight text-espresso">
                  {p.name}
                </h3>
                <p className="mt-2 max-w-sm text-[16px] leading-relaxed text-warm-umber">
                  {p.oneLiner}
                </p>
                <p className="mt-3 text-[15px] font-semibold text-maroon">
                  {cheapest ? `From ₹${cheapest.toLocaleString("en-IN")}` : "Price on request"}
                </p>
              </div>
              <span className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-marigold text-espresso transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
