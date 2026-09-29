"use client";

import { useEffect, useRef, useState } from "react";
import PlaceholderMedia from "./PlaceholderMedia";

/**
 * Crops an image into a Pattachitra-arch (jharokha) shape and reveals it with
 * a clip-path mask on scroll. Respects prefers-reduced-motion via CSS.
 */
export default function ArchImage({
  mediaId,
  className = "",
  sizes,
  eager = false,
}: {
  mediaId: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* gold arch outline behind the image */}
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-t-full border border-antique-gold/60"
      />
      <div
        className={`arch-reveal relative overflow-hidden rounded-t-full ${visible ? "is-visible" : ""}`}
      >
        <PlaceholderMedia
          mediaId={mediaId}
          className="aspect-[3/4]"
          sizes={sizes}
          eager={eager}
          badge={false}
        />
      </div>
    </div>
  );
}
