import type { Metadata } from "next";
import ReviewRedirect from "./ReviewRedirect";
import { Monogram } from "@/components/Header";
import { SITE } from "@/config/site.config";
import { properties } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leave us a review",
  description: "Thank you for staying with Shree Ram. A Google review helps other travellers find us.",
  robots: { index: false, follow: false },
};

export default function ReviewPage() {
  const reviewUrl = SITE.googleReviewUrl || "";

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 py-16 text-center">
      <Monogram size={64} />
      <h1 className="mt-5 font-heading text-3xl font-semibold text-espresso">Thank you for staying</h1>
      <p className="mt-2 text-sm leading-relaxed text-warm-umber">
        Your review helps the next traveller — and helps a small, family-run stay grow.
      </p>
      {reviewUrl ? (
        <ReviewRedirect url={reviewUrl} />
      ) : (
        <>
          {/* TODO_CLIENT_CONFIRM: set SITE.googleReviewUrl in config/site.config.js
              once the Google Business Profile review link exists. Until then this
              page shows search instructions instead of a broken redirect. */}
          <div className="mt-6 rounded-[14px] border border-dashed border-deep-gold/50 bg-khadi-sand/60 p-5 text-sm text-warm-umber">
            <p className="font-medium text-espresso">One tap away:</p>
            <p className="mt-2">
              Search <strong>“{properties[0].name}”</strong> or <strong>“{properties[1].name}”</strong> on
              Google Maps and tap <em>Write a review</em>.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
