"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Staggered scroll reveal: children fade/slide up in sequence when the group
 * enters the viewport. Assign --reveal-i inline on children for custom order.
 */
export default function RevealGroup({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={`reveal-group ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
