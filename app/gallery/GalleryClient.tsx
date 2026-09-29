"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { MediaItem } from "@/lib/types";

const FILTERS = ["All", "Rooms", "Exterior", "Common areas", "Views", "Video"] as const;
type Filter = (typeof FILTERS)[number];

/** What to show for a tile: the video poster, or the image itself. */
const displaySrc = (i: MediaItem) => (i.type === "video" ? i.poster || i.src : i.src);
/** Vector artwork renders as plain <img> (full-resolution rasterization). */
const isVectorArt = (i: MediaItem) => (displaySrc(i) || "").endsWith(".svg");

export default function GalleryClient({ items }: { items: MediaItem[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [bubble, setBubble] = useState({ x: 0, y: 0, on: false });
  const gridRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );

  // Keyboard navigation + scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, visible.length]);

  // "View" cursor bubble follows the pointer over tiles (mouse only).
  function onTileEnter() {
    setBubble((b) => ({ ...b, on: true }));
  }
  function onTileLeave() {
    setBubble((b) => ({ ...b, on: false }));
  }
  function onTileMove(e: React.MouseEvent) {
    setBubble({ x: e.clientX, y: e.clientY, on: true });
  }

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {FILTERS.map((f) => {
          const count =
            f === "All" ? items.length : items.filter((i) => i.category === f).length;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`min-h-[44px] rounded-full border px-5 py-2 text-[15px] font-medium transition-colors ${
                filter === f
                  ? "border-maroon bg-maroon text-ivory"
                  : "border-antique-gold/40 bg-ivory text-espresso hover:border-deep-gold"
              }`}
            >
              {f} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="py-16 text-center text-[17px] text-warm-umber">
          Nothing in this category yet — photos arrive after the shoot.
        </p>
      ) : (
        <div ref={gridRef} className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {visible.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(idx)}
              onMouseEnter={onTileEnter}
              onMouseLeave={onTileLeave}
              onMouseMove={onTileMove}
              className="group relative block w-full overflow-hidden rounded-[14px] bg-khadi-sand shadow-soft transition-transform duration-300 hover:-translate-y-1"
              aria-label={`Open ${item.alt}`}
            >
              {isVectorArt(item) ? (
                // eslint-disable-next-line @next/next/no-img-element -- vector art: full-resolution in-browser rasterization
                <img
                  src={displaySrc(item)}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <Image
                  src={displaySrc(item)}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  quality={90}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              {item.type === "video" && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon/90 text-ivory">
                    <Play className="h-5 w-5 translate-x-0.5" aria-hidden="true" />
                  </span>
                </span>
              )}
              <span className="absolute bottom-2 left-2 rounded-full bg-espresso/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-antique-gold">
                {item.property === "puri" ? "Puri" : "Bhubaneswar"}
              </span>
              <span className="absolute right-2 top-2 rounded-full bg-espresso/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-antique-gold">
                Placeholder
              </span>
            </button>
          ))}
        </div>
      )}

      {/* View cursor bubble (desktop pointer only) */}
      <span
        aria-hidden="true"
        className={`view-bubble ${bubble.on ? "is-on" : ""}`}
        style={{ left: bubble.x, top: bubble.y }}
      >
        View
      </span>

      {/* Lightbox */}
      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-ivory hover:bg-ivory/10"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + visible.length) % visible.length);
            }}
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full text-ivory hover:bg-ivory/10"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % visible.length);
            }}
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full text-ivory hover:bg-ivory/10"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <figure
            className="max-h-[85vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {visible[lightbox].type === "video" && visible[lightbox].src ? (
              <video
                src={visible[lightbox].src}
                poster={visible[lightbox].poster}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] w-full rounded-[14px] bg-black"
              />
            ) : isVectorArt(visible[lightbox]) ? (
              /* eslint-disable-next-line @next/next/no-img-element -- vector art */
              <img
                src={displaySrc(visible[lightbox])}
                alt={visible[lightbox].alt}
                className="max-h-[85vh] w-auto rounded-[14px]"
              />
            ) : (
              <Image
                src={displaySrc(visible[lightbox])}
                alt={visible[lightbox].alt}
                width={visible[lightbox].w}
                height={visible[lightbox].h}
                quality={90}
                className="h-auto max-h-[85vh] w-auto rounded-[14px]"
              />
            )}
            <figcaption className="mt-2 text-center text-xs text-ivory/75">
              {visible[lightbox].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
