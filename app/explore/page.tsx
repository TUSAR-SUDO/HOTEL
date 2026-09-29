import type { Metadata } from "next";
import ExploreTabs from "./ExploreTabs";
import FinalCTA from "@/components/FinalCTA";
import { explore } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plan your trip",
  description:
    "Puri and Bhubaneswar essentials: top places, 1-day and 2-day routes, local food, and getting around. Plan, then ask us on WhatsApp.",
  alternates: { canonical: "/explore" },
};

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-semibold text-espresso">Plan your trip</h1>
      <p className="mt-2 max-w-xl text-sm text-warm-umber">
        The essentials for both cities — bookmark this page.
      </p>
      <div className="mt-8">
        <ExploreTabs explore={explore} />
      </div>
      <div className="mt-14">
        <FinalCTA pageSource="/explore" />
      </div>
    </div>
  );
}
