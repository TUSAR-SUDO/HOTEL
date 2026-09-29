import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { mediaFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos of Hotel Shree Ram, Puri and Shree Ram Lodge, Bhubaneswar. Real photos of our rooms and common areas.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const puri = mediaFor("puri", { gallery: true });
  const bbsr = mediaFor("bhubaneswar", { gallery: true });
  return <GalleryClient items={[...puri, ...bbsr]} />;
}
