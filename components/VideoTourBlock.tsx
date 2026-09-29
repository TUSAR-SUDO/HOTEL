"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { getMedia } from "@/lib/content";

/** Video tour: click-to-load (never autoplays), poster first, graceful if src empty. */
export default function VideoTourBlock({ mediaId }: { mediaId: string }) {
  const item = getMedia(mediaId);
  const [playing, setPlaying] = useState(false);

  if (!item) return null;

  const hasVideo = !!item.src;

  return (
    <div className="relative overflow-hidden rounded-[16px] shadow-soft">
      {hasVideo && playing ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption -- placeholder video has no track yet; captions required with real footage
        <video
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-espresso object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => hasVideo && setPlaying(true)}
          aria-label={hasVideo ? "Play property tour" : "Property tour video coming soon"}
          className="group relative block w-full"
        >
          {(item.poster || item.src || "").endsWith(".svg") ? (
            // eslint-disable-next-line @next/next/no-img-element -- vector art
            <img
              src={item.poster || item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full object-cover"
            />
          ) : (
            <Image
              src={item.poster || item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              quality={90}
              sizes="(min-width: 896px) 896px, 100vw"
              className="aspect-video w-full object-cover"
            />
          )}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-ivory shadow-lift transition-transform group-hover:scale-105">
              <Play className="h-7 w-7 translate-x-0.5" aria-hidden="true" />
            </span>
          </span>
          <span className="absolute left-2 top-2 rounded-full bg-espresso/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-antique-gold">
            Placeholder · video coming soon
          </span>
        </button>
      )}
    </div>
  );
}
