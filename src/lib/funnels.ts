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

export const ADS_COPY_FUNNEL: FunnelConfig = {
  slug: "privatemastermind-504306",
  variant: "b",
  metaTitle: "Roofing Ads Copy Creation Mastermind | Roofing Systems Co.",
  metaDescription:
    "The Hidden Facebook Interest Framework behind 300–500 roofing sales calls per month. Watch the private mastermind and book your free 1:1 call.",
  eyebrow: "Private mastermind · Ads copy creation",
  title: "The “Hidden Facebook Interest” Framework Behind",
  titleAccent: "300–500 Roofing Sales Calls",
  titleEnd: "Per Month",
  subtitle:
    "Pinpoint untapped Facebook interests inside Ads Manager that most roofers and roofing agency owners miss, so you can reduce CPL while increasing the volume of qualified calls.",
  videoLabel: "Watch Private Roofing Mastermind",
  videoSrc: MASTERCLASS_VIDEO,
  videoCover: "/media/covers/cover-ads-copy.jpeg",
  learnTitle: "What this mastermind breaks down",
  learnItems: [
    "How to find hidden Facebook interests most roofers never touch",
    "How to cut CPL without killing lead quality",
    "The ads copy angles that book high-ticket roofing sales calls",
    "How to turn Meta traffic into a repeatable sales-call machine",
    "Live examples from campaigns that already scaled",
  ],
  learnDetails: [
    "Most roofers bid on the same five interests, so CPLs climb while response rates sink. This part shows where to look inside Ads Manager for untapped homeowner interests, how to validate them before you spend, and how to stack them into segments your competitors haven't touched.",
    "Cheap leads aren't the goal — cheap booked calls are. Here are the exact levers that protect lead quality while driving CPL down: intent layers, negative exclusions, and offer-based bid adjustments that keep tire-kickers out of your pipeline.",
    "High-ticket roofing calls start with copy that reads like it was written for one homeowner. We break down the angle frameworks, hook formulas, and call-to-action patterns that consistently produce sales calls instead of quote-shoppers.",
    "Ad spend only means something when it feeds a machine. See how we connect Meta traffic to offer pages, retargeting, and qualification so every click feeds a repeatable system that fills the calendar.",
    "Theory is cheap — proof is better. We walk real campaigns that scaled: what we changed at each step, the numbers that told us to double down, and the mistakes we'd never repeat.",
  ],
  trackTitle: "A proven system with a massive track record",
  trackBody:
    "If it works in one niche, it doesn’t mean anything. We’ve proven it works across industries. This isn’t a one-off win, it’s a client acquisition machine that repeats results.",
  ctaPrimary: "BUILD MY SALES CALL MACHINE",
  ctaPrimarySub: "Book your free 1:1 call now",
  ctaSecondary: "LET’S SCALE MY SALES CALLS",
  ctaSecondarySub: "Book your free 1:1 call now",
  bookingPath: BOOKING_PATH,
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
