import Image from "next/image";
import { getMedia } from "@/lib/content";
import type { MediaItem } from "@/lib/types";

type Props = {
  media?: MediaItem;
  mediaId?: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
  badge?: boolean;
  quality?: number;
};

/**
 * Renders a manifest image with explicit dimensions (no layout shift), lazy
 * loading below the fold, priority for heroes, and a PLACEHOLDER badge until
 * real photos arrive.
 *
 - Vector artwork (.svg) renders as a plain <img>: browsers rasterize SVG at
 *   full device resolution, which is sharper than any bitmap srcset.
 * - Raster sources (real photos: jpg/webp/avif/png) go through next/image for
 *   responsive srcset + optimization at quality 90.
 */
export default function PlaceholderMedia({
  media,
  mediaId,
  className = "",
  sizes,
  eager = false,
  badge = true,
  quality = 90,
}: Props) {
  const item = media ?? getMedia(mediaId);
  if (!item) {
    return (
      <span
        className={`flex items-center justify-center bg-khadi-sand text-xs text-warm-umber ${className}`}
        style={{ aspectRatio: "4 / 3" }}
      >
        Image coming soon
      </span>
    );
  }

  const isVector = item.src.endsWith(".svg");
  const isPlaceholder = isVector || item.src === "";

  return (
    <span className={`relative block overflow-hidden ${className}`}>
      {isVector ? (
        // eslint-disable-next-line @next/next/no-img-element -- vector art: full-resolution in-browser rasterization
        <img
          src={item.src}
          alt={item.alt}
          width={item.w}
          height={item.h}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          width={item.w}
          height={item.h}
          sizes={sizes}
          quality={quality}
          priority={eager}
          loading={eager ? undefined : "lazy"}
          className="h-full w-full object-cover"
        />
      )}
      {badge && isPlaceholder && (
        <span className="absolute left-2 top-2 rounded-full bg-espresso/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-antique-gold">
          Placeholder
        </span>
      )}
    </span>
  );
}
