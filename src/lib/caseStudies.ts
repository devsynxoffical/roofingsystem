/*
  Case studies, sourced from the company's own Instagram posts (@scalewithads).
  Titles, numbers and claims are taken from each post's caption — nothing is
  added. Media files live in /public/case-studies/<shortcode>.(mp4|jpg).
*/

export type CaseCategory = "Roofing Contractors" | "Roofing Agencies" | "Home Services" | "Masterminds";

export type CaseStudy = {
  slug: string;
  shortcode: string;
  sourceUrl: string;
  date: string; // ISO date the post was published
  category: CaseCategory;
  media: "video" | "image";
  durationSec?: number;
  orientation: "portrait" | "landscape" | "square";
  title: string;
  metaTitle: string;
  metaDescription: string;
  metrics: { value: string; label: string }[];
  summary: string;
  /** The result, in the caption's own words (lightly edited for reading). */
  story: string[];
  /** What drove the result — only points stated in the caption. */
  highlights: string[];
};

const ig = (kind: "reel" | "p", code: string) => `https://www.instagram.com/${kind}/${code}/`;

export const CATEGORIES: CaseCategory[] = ["Roofing Contractors", "Roofing Agencies", "Home Services", "Masterminds"];

export const caseStudies: CaseStudy[] = [
  {
    slug: "roofing-201-leads-14-45-cpl",
    shortcode: "DegslC6h9Gg",
    sourceUrl: ig("reel", "DegslC6h9Gg"),
    date: "2026-10-15",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 33,
    orientation: "portrait",
    title: "Roofing Companies: 201 Leads at $14.45 CPL Since October 6",
    metaTitle: "Roofing Case Study: 201 Leads at $14.45 CPL",
    metaDescription:
      "A roofing campaign that generated 201 leads at a $14.45 cost per lead in its first days, plus the mastermind on how we cut a roofing client's CPL by 50%.",
    metrics: [
      { value: "201", label: "Leads" },
      { value: "$14.45", label: "Cost per lead" },
      { value: "Oct 6", label: "Campaign start" },
    ],
    summary: "201 roofing leads at a $14.45 cost per lead since the campaign launched on October 6.",
    story: [
      "We launched the campaign on October 6, and the results started coming in straight away: 201 leads at a $14.45 cost per lead.",
      "Alongside it, we hosted a one-hour mastermind showing how we helped a roofing client drop their cost per lead by 50%.",
    ],
    highlights: [
      "Meta ads campaign for roofing companies",
      "201 leads in the first days of the campaign",
      "$14.45 cost per lead",
    ],
  },
  {
    slug: "roofing-25-leads-one-day-3-75",
    shortcode: "DZ8GdiAmMrW",
    sourceUrl: ig("p", "DZ8GdiAmMrW"),
    date: "2026-06-23",
    category: "Roofing Contractors",
    media: "image",
    orientation: "square",
    title: "25 Qualified Roofing Leads in One Day at $3.75 Each",
    metaTitle: "Roofing Case Study: 25 Leads in One Day at $3.75",
    metaDescription:
      "Day one of a roofing campaign in Florida and the Bay Area: 25 qualified leads at $3.75 each, $93 total — versus $80–$100 shared leads.",
    metrics: [
      { value: "25", label: "Qualified leads" },
      { value: "$3.75", label: "Per lead" },
      { value: "$93", label: "Total spend" },
    ],
    summary: "Day one of the campaign: 25 qualified roofing leads at $3.75 each, $93 spent in total.",
    story: [
      "Roofing company owners, how much are you paying per lead right now? $80? $100? And is it shared with four other contractors?",
      "Our client got 25 qualified leads in one day — $3.75 each, $93 in total — across Florida and the Bay Area, on day one of the campaign.",
      "You're not losing because of competition. You're losing because you're buying low-quality leads from people who profit from keeping you dependent.",
    ],
    highlights: [
      "Day one of a new campaign",
      "Florida and Bay Area markets",
      "Exclusive leads instead of $80–$100 leads shared with other contractors",
    ],
  },
  {
    slug: "roofing-cpl-dropped-50-percent",
    shortcode: "DZXlpMMkgLR",
    sourceUrl: ig("reel", "DZXlpMMkgLR"),
    date: "2026-06-09",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 49,
    orientation: "portrait",
    title: "How We Dropped Cost per Lead by 50% on the Same Budget",
    metaTitle: "Case Study: How We Dropped CPL by 50%",
    metaDescription:
      "How small changes to a Meta ads campaign cut cost per lead by 50% on the same budget — the breakdown from our roofing client work.",
    metrics: [
      { value: "−50%", label: "Cost per lead" },
      { value: "Same", label: "Ad budget" },
    ],
    summary: "Cost per lead cut in half without increasing the budget.",
    story: [
      "Same budget, much better results: we dropped the cost per lead by 50%.",
      "Sometimes the smallest tweaks create the biggest breakthroughs.",
    ],
    highlights: ["Cost per lead reduced by 50%", "No increase in ad spend", "Small, targeted changes to the campaign"],
  },
  {
    slug: "roofing-agency-664-leads-4-51",
    shortcode: "DZUXF81FgH1",
    sourceUrl: ig("p", "DZUXF81FgH1"),
    date: "2026-06-08",
    category: "Roofing Agencies",
    media: "image",
    orientation: "square",
    title: "664 Verified Leads at $4.51 for a Roofing Marketing Agency",
    metaTitle: "Case Study: 664 Verified Leads at $4.51 for a Roofing Agency",
    metaDescription:
      "664 verified leads at $4.51 each, $2,996 spent and a 2.13% CTR for an agency selling marketing services to roofing business owners.",
    metrics: [
      { value: "664", label: "Verified leads" },
      { value: "$4.51", label: "Per lead" },
      { value: "$2,996", label: "Spent" },
      { value: "2.13%", label: "CTR" },
    ],
    summary: "664 verified leads for a roofing agency client in the first half of June, at $4.51 per lead.",
    story: [
      "This is one of our roofing agency clients — an agency selling marketing services to roofing business owners.",
      "In the first half of June: 664 verified leads at $4.51 per lead, $2,996 spent, with a 2.13% click-through rate. Every single lead went through our multi-step verification process.",
      "That audience doesn't trust easily. They've been burned before and don't click on just anything — a 2.13% CTR means the ads spoke their language.",
    ],
    highlights: [
      "Multi-step lead verification on every lead",
      "2.13% CTR with a skeptical B2B audience of roofing business owners",
      "Results from less than half a month",
    ],
  },
  {
    slug: "roofing-227-leads-14-cpl-28-days",
    shortcode: "DY5XUp7BvVe",
    sourceUrl: ig("reel", "DY5XUp7BvVe"),
    date: "2026-05-28",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 21,
    orientation: "landscape",
    title: "227 Verified Roofing Leads at a $14 CPL in 28 Days",
    metaTitle: "Roofing Case Study: 227 Verified Leads at $14 CPL",
    metaDescription:
      "$3,215 spent, 227 verified roofing leads at a $14 cost per lead in 28 days, with CTR above 2% — ads, targeting, funnel and follow-up built properly.",
    metrics: [
      { value: "227", label: "Verified leads" },
      { value: "$14", label: "Cost per lead" },
      { value: "$3,215", label: "Spent" },
      { value: "2%+", label: "CTR" },
    ],
    summary: "227 verified roofing leads in 28 days at a $14 cost per lead.",
    story: [
      "Most roofing companies are burning cash on junk leads while blaming the market.",
      "In the last 28 days, we spent $3,215 and generated 227 verified roofing leads at a $14 cost per lead for one of our roofing clients. The click-through rate stayed above 2%, which means the creatives were doing their job — grabbing attention and converting. On May 28th alone, the campaign brought in 11 leads at around $22 each.",
      "Roofing leads are expensive, competitive and hard to generate consistently. This is what happens when the ads, targeting, funnel and follow-up are built properly.",
    ],
    highlights: [
      "Ads, targeting, funnel and follow-up built as one system",
      "Creatives holding a CTR above 2%",
      "Verified leads, not raw form fills",
    ],
  },
  {
    slug: "florida-home-services-280-leads-15-days",
    shortcode: "DYbeYKLsJAE",
    sourceUrl: ig("reel", "DYbeYKLsJAE"),
    date: "2026-05-17",
    category: "Home Services",
    media: "video",
    durationSec: 36,
    orientation: "landscape",
    title: "280 Qualified Leads in 15 Days for a Florida Home Service Company",
    metaTitle: "Case Study: 280 Leads in 15 Days for a Florida Roofer",
    metaDescription:
      "280 qualified leads in 15 days on $3,196 for a Florida roofing, gutters and solar company, with a 2.46% CTR in one of the toughest markets.",
    metrics: [
      { value: "280", label: "Qualified leads" },
      { value: "15", label: "Days" },
      { value: "$3,196", label: "Spent" },
      { value: "2.46%", label: "CTR" },
    ],
    summary: "280 qualified leads in 15 days for a Florida roofing, gutters and solar company.",
    story: [
      "280 qualified leads in 15 days on $3,196 of ad spend for a Florida-based home service company covering roofing, gutters and solar — in one of the toughest markets right now.",
      "The click-through rate held consistently at 2.46%: qualified Florida homeowners clicking, converting and booking, not window shoppers. The client has a 32-person team on the ground, operational and ready to scale.",
      "This is what happens when the offer is right, the creative hits and the system is built to convert. Most roofing companies are pulling back right now; this client is pushing forward, and the gap is only getting bigger.",
    ],
    highlights: [
      "The right offer for the market",
      "Creatives holding a 2.46% CTR",
      "A system built to convert clicks into booked homeowners",
    ],
  },
  {
    slug: "roofing-agency-546k-67-days",
    shortcode: "DYCUtGjCTmu",
    sourceUrl: ig("p", "DYCUtGjCTmu"),
    date: "2026-05-07",
    category: "Roofing Agencies",
    media: "image",
    orientation: "square",
    title: "$546,000 in 67 Days: 152 Deals for a Roofing Marketing Agency",
    metaTitle: "Case Study: $546K in 67 Days for a Roofing Agency",
    metaDescription:
      "$546,000 in 67 days, 152 deals and 975 open conversations for a roofing marketing agency, powered by an AI client acquisition system.",
    metrics: [
      { value: "$546K", label: "In 67 days" },
      { value: "152", label: "Deals" },
      { value: "975", label: "Open conversations" },
    ],
    summary: "$546,000 and 152 deals in 67 days for a roofing marketing agency.",
    story: [
      "$546,000 in 67 days, 152 deals and 975 open conversations for a roofing marketing agency.",
      "This is our AI-powered client acquisition system at work.",
    ],
    highlights: ["AI-powered client acquisition system", "152 closed deals", "975 open conversations in the pipeline"],
  },
  {
    slug: "roofing-154-leads-14-58-cpl",
    shortcode: "DX9KsyAlCMK",
    sourceUrl: ig("p", "DX9KsyAlCMK"),
    date: "2026-05-05",
    category: "Roofing Contractors",
    media: "image",
    orientation: "square",
    title: "154 Qualified Roofing Leads at $14.58 Each in 14 Days",
    metaTitle: "Roofing Case Study: 154 Leads at $14.58 in 14 Days",
    metaDescription:
      "154 qualified roofing leads at $14.58 each in 14 days — compared with the $80+ per lead many roofing companies still pay.",
    metrics: [
      { value: "154", label: "Qualified leads" },
      { value: "$14.58", label: "Per lead" },
      { value: "14", label: "Days" },
    ],
    summary: "154 qualified roofing leads in 14 days at $14.58 each.",
    story: [
      "If you're a roofing business owner still paying $80+ per lead, or getting zero results from your ads, this data is your wake-up call.",
      "154 qualified leads at $14.58 each, in 14 days.",
    ],
    highlights: ["154 qualified leads", "$14.58 per lead versus $80+ elsewhere", "Two weeks of campaign data"],
  },
  {
    slug: "mastermind-roofing-account-breakdown",
    shortcode: "DVQL-tsj5Ze",
    sourceUrl: ig("reel", "DVQL-tsj5Ze"),
    date: "2026-02-27",
    category: "Masterminds",
    media: "video",
    durationSec: 358,
    orientation: "landscape",
    title: "Behind the Scenes: Breaking Down Real Roofing Ad Accounts and Creatives",
    metaTitle: "Mastermind: Breaking Down Real Roofing Ad Accounts",
    metaDescription:
      "Behind the scenes of a private 1:1 mastermind session breaking down real roofing ad accounts and the creatives that win.",
    metrics: [
      { value: "1:1", label: "Private session" },
      { value: "Real", label: "Ad accounts" },
    ],
    summary: "Behind the scenes of a private 1:1 mastermind, breaking down real accounts and winning roofing creatives.",
    story: [
      "A behind-the-scenes look at one of our private 1:1 mastermind sessions, breaking down real ad accounts and the roofing creatives that are winning.",
    ],
    highlights: ["Real roofing ad accounts, not hypotheticals", "Winning roofing creatives broken down", "Private 1:1 format"],
  },
  {
    slug: "private-mastermind-roofing-agency-session",
    shortcode: "DU8gfu7F_YT",
    sourceUrl: ig("reel", "DU8gfu7F_YT"),
    date: "2026-02-19",
    category: "Masterminds",
    media: "video",
    durationSec: 462,
    orientation: "landscape",
    title: "Inside a 90-Minute Private 1:1 Mastermind With a Roofing Agency Owner",
    metaTitle: "Inside a Private Mastermind With a Roofing Agency Owner",
    metaDescription:
      "What a 90-minute private 1:1 mastermind looks like: winning landing pages, proven ad copy, creative frameworks and a live ad account audit.",
    metrics: [
      { value: "90 min", label: "Session" },
      { value: "#2", label: "Session" },
      { value: "Live", label: "Account audit" },
    ],
    summary: "Session #2 of a private 1:1 mastermind with a roofing agency owner we're scaling.",
    story: [
      "This is what a 90-minute private 1:1 mastermind session looks like. No slides, no theory, no fluff strategy.",
      "We had just wrapped session #2 with a roofing agency owner we're currently scaling. We didn't talk about what might work — we worked on what is working.",
      "Because he already manages ads for roofing businesses, we skipped the basics and focused on positioning, clarity and scale.",
    ],
    highlights: [
      "Winning structures: the landing pages converting for our roofing clients",
      "Proven copy: specific ad angles cutting through the noise",
      "The framework: creative strategies behind high-volume booked appointments",
      "Under the hood: a live audit of his ad account and data",
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const caseMedia = (c: CaseStudy) => ({
  poster: `/case-studies/${c.shortcode}.jpg`,
  video: c.media === "video" ? `/case-studies/${c.shortcode}.mp4` : undefined,
});
