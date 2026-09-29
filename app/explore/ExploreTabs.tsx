"use client";

import { useState } from "react";
import { MapPin, UtensilsCrossed, Bus, CalendarDays } from "lucide-react";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import type { ExploreContent } from "@/lib/types";

type CityKey = "puri" | "bhubaneswar";

export default function ExploreTabs({ explore }: { explore: ExploreContent }) {
  const [city, setCity] = useState<CityKey>("puri");
  const data = explore[city];

  return (
    <div>
      {/* Tabs */}
      <div className="mb-8 inline-flex rounded-full border border-antique-gold/40 bg-khadi-sand p-1" role="tablist" aria-label="Choose a city">
        {(["puri", "bhubaneswar"] as CityKey[]).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={city === c}
            onClick={() => setCity(c)}
            className={`min-h-[40px] rounded-full px-5 text-sm font-semibold transition-colors ${
              city === c ? "bg-maroon text-ivory" : "text-espresso hover:text-deep-gold"
            }`}
          >
            {c === "puri" ? "Puri" : "Bhubaneswar"}
          </button>
        ))}
      </div>

      {/* Top 5 */}
      <section aria-label={`Top places in ${data.title}`}>
        <h2 className="mb-4 font-heading text-2xl font-semibold text-espresso">
          Top 5 · {data.title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.top5.map((t, i) => (
            <article key={t.name} className="overflow-hidden rounded-[14px] bg-ivory shadow-soft">
              <PlaceholderMedia mediaId={t.imageId} className="aspect-[4/3]" sizes="(min-width: 1024px) 20vw, 100vw" />
              <div className="p-3">
                <p className="text-xs font-semibold text-deep-gold">{i + 1}</p>
                <h3 className="font-heading text-base font-semibold leading-snug text-espresso">{t.name}</h3>
                <p className="mt-1 text-[13px] leading-snug text-warm-umber">{t.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Routes (timeline, not paragraphs) */}
      <section className="mt-12 grid gap-8 lg:grid-cols-2" aria-label="Suggested routes">
        {[
          { title: "One-day route", steps: data.route1day },
          { title: "Two-day route", steps: data.route2day },
        ].map(({ title, steps }) => (
          <div key={title} className="rounded-[16px] bg-khadi-sand/60 p-5 sm:p-6">
            <h3 className="font-heading text-xl font-semibold text-espresso">{title}</h3>
            <ol className="mt-4 space-y-0">
              {steps.map((s, i) => (
                <li key={i} className="relative flex gap-4 pb-5 last:pb-0">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[11px] top-6 h-full w-[1.5px] bg-antique-gold/50"
                    />
                  )}
                  <span className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-deep-gold bg-ivory text-[11px] font-bold text-deep-gold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm text-warm-umber">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      {/* Best season + food + getting around */}
      <section className="mt-12 grid gap-6 md:grid-cols-3" aria-label="Practical tips">
        <div className="rounded-[16px] border border-antique-gold/30 bg-ivory p-5">
          <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-espresso">
            <CalendarDays className="h-5 w-5 text-deep-gold" aria-hidden="true" />
            Best season
          </h3>
          <p className="mt-2 text-sm text-warm-umber">{data.bestSeason}</p>
        </div>
        <div className="rounded-[16px] border border-antique-gold/30 bg-ivory p-5">
          <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-espresso">
            <UtensilsCrossed className="h-5 w-5 text-deep-gold" aria-hidden="true" />
            Eat this
          </h3>
          <ul className="mt-2 space-y-1.5">
            {data.food.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-warm-umber">
                <span aria-hidden="true" className="text-deep-gold">·</span>{f}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[16px] border border-antique-gold/30 bg-ivory p-5">
          <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-espresso">
            <Bus className="h-5 w-5 text-deep-gold" aria-hidden="true" />
            Getting around
          </h3>
          <ul className="mt-2 space-y-1.5">
            {data.gettingAround.map((g) => (
              <li key={g} className="flex gap-2 text-sm text-warm-umber">
                <span aria-hidden="true" className="text-deep-gold">·</span>{g}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
