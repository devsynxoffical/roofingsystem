import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnnouncementBar } from "../components/layout/AnnouncementBar";
import { Nav } from "../components/layout/Nav";
import { Preloader } from "../components/layout/Preloader";
import { ScrollProgress } from "../components/ui/ScrollProgress";
import { NoiseOverlay } from "../components/ui/NoiseOverlay";
import { SmoothScroll } from "../components/providers/SmoothScroll";

import { site } from "../lib/site";
import { JsonLd, organizationSchema } from "../lib/seo";

import "./globals.css";

// One font across the whole site: Inter (variable, so every weight 100-900 is real, not faux-bold)
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Roofing Systems Co. | Double Your Revenue in 90 Days",
  description:
    "Only for $1M+ roofers. We install your complete roofing client acquisition system, offer positioning, Meta Ads, creatives, landing pages, CRM, AI follow-up. You run the appointments and close. Guaranteed in writing.",
  applicationName: site.name,
  keywords: [
    "roofing marketing",
    "roofing lead generation",
    "roofing client acquisition",
    "roofing marketing agency",
    "Facebook ads for roofers",
    "Meta ads for roofing companies",
    "roofing sales funnel",
    "roofing CRM and AI follow-up",
    "roofer appointments",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "K2KAHIOVH8NVc_zsZs56NF6wrhE47mwVHrdmgPu2JA8",
  },
  openGraph: {
    title: "Roofing Systems Co. | $1M+ Roofers Only",
    description:
      "Double your roofing revenue in 90 days. Complete client acquisition system, fully installed. Backed by a written agreement.",
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Systems Co. | $1M+ Roofers Only",
    description:
      "Double your roofing revenue in 90 days. Complete client acquisition system, fully installed. Backed by a written agreement.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} h-full`}>
      <head>
      </head>
      <body className="min-h-full antialiased">
        <JsonLd data={organizationSchema} />
        <SmoothScroll>
          <Preloader />
          <NoiseOverlay />
          <ScrollProgress />
          <AnnouncementBar />
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
