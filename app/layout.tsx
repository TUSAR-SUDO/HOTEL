import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionBar from "@/components/MobileActionBar";
import { SITE } from "@/config/site.config";

/*
 * Fonts load at runtime via Google Fonts with graceful fallbacks
 * (Georgia serif / system-ui), so builds never depend on network access.
 * Noto Sans Oriya rides in the same request; its unicode-range subsets mean
 * the Oriya font files download only on pages that actually show Odia text.
 */
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Mukta:wght@400;500;600&family=Noto+Sans+Oriya:wght@400;600&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Shree Ram | Hotel in Puri & Lodge in Bhubaneswar",
    template: "%s | Shree Ram",
  },
  description:
    "Clean rooms and honest prices in Puri and Bhubaneswar. Book direct on WhatsApp with the owner — Hotel Shree Ram, Puri and Shree Ram Lodge, Bhubaneswar.",
  openGraph: {
    type: "website",
    siteName: "Shree Ram",
    title: "Shree Ram | Hotel in Puri & Lodge in Bhubaneswar",
    description:
      "Clean rooms, honest prices, one WhatsApp away. Hotel Shree Ram, Puri · Shree Ram Lodge, Bhubaneswar.",
    images: [{ url: "/media/og.png", width: 1200, height: 630, alt: "Shree Ram — Hotel in Puri and Lodge in Bhubaneswar" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2A1B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
      </head>
      <body className="min-h-screen bg-ivory font-body text-warm-umber">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[10px] focus:bg-espresso focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <div id="scroll-root">
          <Header />
          <main id="main" className="pb-14 md:pb-0">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingWhatsApp />
        <MobileActionBar />
      </body>
    </html>
  );
}
