import { BOOKING_PATH } from "./offer";
import { MASTERCLASS_VIDEO } from "./video";

export type FunnelConfig = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  variant: "a" | "b";
  eyebrow: string;
  title: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  videoLabel: string;
  videoSrc: string;
  videoCover: string;
  learnTitle: string;
  learnItems: string[];
  learnDetails: string[];
  trackTitle: string;
  trackBody: string;
  ctaPrimary: string;
  ctaPrimarySub: string;
  ctaSecondary: string;
  ctaSecondarySub: string;
  bookingPath: string;
};

export const AUDIENCE_FUNNEL: FunnelConfig = {
  slug: "privatemastermind",
  variant: "a",
  metaTitle:
    "Private Mastermind: Audience Segmentation | Roofing Systems Co.",
  metaDescription:
    "Private mastermind recording on audience segmentation for roofing ads, build cleaner targeting, stronger qualification, and more booked sales calls.",
  eyebrow: "Private mastermind recording · Audience segmentation",
  title: "The Audience Segmentation Playbook Behind",
  titleAccent: "Higher-Quality Roofing Calls",
  titleEnd: "At Lower CPL",
  subtitle:
    "Stop spraying budget at broad Meta audiences. This private recording shows how to segment roofing buyers so you attract people ready to book, not tire-kickers.",
  videoLabel: "Watch Audience Segmentation Mastermind",
  videoSrc: MASTERCLASS_VIDEO,
  videoCover: "/media/video/masterclass-poster-2.png",
  learnTitle: "What this recording covers",
  learnItems: [
    "How to segment roofing audiences by intent, home value, and service type",
    "Which audience layers waste spend vs which book sales calls",
    "How to build lookalikes and exclusions that protect your CPL",
    "Creative + offer matching for each audience segment",
    "A simple testing order so you scale winners faster",
  ],
  learnDetails: [
    "Broad targeting fills calendars with noise; segmented targeting fills them with homeowners ready to talk. This part walks the exact layers we build in Ads Manager — intent level, home value, and service type — so every dollar lands in front of a buyer, not a browser.",
    "Not all spend is equal. We compare the audience layers that quietly burn budget against the ones that actually book inspections, so you know exactly what to cut and what to fund.",
    "Lookalikes grow volume; exclusions protect quality. This breakdown shows the exact lookalike + exclusion stack that keeps cost-per-lead stable as you scale past your first warm audience.",
    "One creative for every segment is how response rates die. We show how to pair the right angle, offer, and creative with each audience segment so your ads feel personal at scale.",
    "Most roofers test everything at once and learn nothing. Here's the simple testing order we use — start small, kill losers fast, and pour budget into the winner before your competitors even spot it.",
  ],
  trackTitle: "Segmentation that turns spend into sales calls",
  trackBody:
    "Broad targeting fills calendars with noise. Tight audience segmentation fills them with homeowners ready to talk. This recording walks the exact framework we use inside the sales call machine.",
  ctaPrimary: "BUILD MY SALES CALL MACHINE",
  ctaPrimarySub: "Book your free 1:1 call now",
  ctaSecondary: "IMPROVE MY AUDIENCE TARGETING",
  ctaSecondarySub: "Book your free 1:1 call now",
  bookingPath: BOOKING_PATH,
};
