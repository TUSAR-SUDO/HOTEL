"use client";

import { useEffect } from "react";

/** Redirects to the Google review URL; shows a manual link if navigation is blocked. */
export default function ReviewRedirect({ url }: { url: string }) {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.href = url;
    }, 1200);
    return () => clearTimeout(t);
  }, [url]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="mt-6 inline-flex min-h-[44px] items-center rounded-[14px] bg-maroon px-6 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-[#8f2536]"
    >
      Opening Google reviews… tap here if nothing happens
    </a>
  );
}
