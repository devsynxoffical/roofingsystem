/*
  Case studies, sourced from the company's own Instagram posts (@scalewithads).
  Titles, numbers and claims are taken from each post's caption — nothing is
  added. Media files live in /public/case-studies/<shortcode>.(mp4|jpg).
*/

export type CaseCategory = "Roofing Contractors" | "Roofing Agencies" | "Home Services" | "Masterminds";

export type CaseStudy = {
  slug: string;
  shortcode: string;
  platform?: "Instagram" | "Facebook";
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
  /** Additional videos from the same campaign (files in /public/case-studies). */
  extraVideos?: { file: string; orientation: "portrait" | "landscape" | "square"; sourceUrl: string }[];
};

const ig = (kind: "reel" | "p", code: string) => `https://www.instagram.com/${kind}/${code}/`;

/*
  Case studies without a measurable client result (session recaps and an
  early-days update). They stay live for visitors but are kept out of Google's
  index and the sitemap so the indexable set is the pages with real outcomes.
*/
export const NOINDEX_CASES = new Set([
  "mastermind-roofing-account-breakdown",
  "private-mastermind-roofing-agency-session",
  "private-dwy-mastermind-segmentation-framework",
  "dwy-onboarding-roofing-agency-buyer-journey",
  "roofing-ad-account-from-zero-five-days",
]);

export const CATEGORIES: CaseCategory[] = ["Roofing Contractors", "Roofing Agencies", "Home Services", "Masterminds"];

const instagramCases: CaseStudy[] = [
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
    orientation: "landscape",
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
    orientation: "landscape",
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
    orientation: "landscape",
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
    orientation: "landscape",
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

const fb = (id: string) => `https://www.facebook.com/watch/?v=${id}`;

const facebookCases: CaseStudy[] = [
  {
    slug: "dallas-roofer-127500-closed-34-installs",
    shortcode: "fb-920858471121365",
    platform: "Facebook",
    sourceUrl: fb("920858471121365"),
    date: "2026-02-19",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 53,
    orientation: "square",
    title: "$127,500 in Closed Roofing Deals and 34 Installs in About 60 Days for a Dallas Roofer",
    metaTitle: "Dallas Roofing Case Study: $127,500 Closed, 34 Installs",
    metaDescription:
      "How a Dallas roofing company with strong Google reviews closed $127,500 and 34 installs in about 60 days once its authority was turned into Meta ads.",
    metrics: [
      { value: "$127.5K", label: "Closed deals" },
      { value: "34", label: "Installs" },
      { value: "~60", label: "Days" },
    ],
    summary: "$127,500 in closed roofing deals and 34 installations in just over 60 days for a roofing company in Dallas.",
    story: [
      "We're running ads for a roofing company in Dallas. They already had what most contractors would kill for: strong Google reviews and real authority in their local market. But authority sitting on Google doesn't automatically turn into installations.",
      "Instead of generic \"Free Inspection\" ads like everyone else in Dallas, we positioned them as one of the most trusted roofing companies in the area from the first second a homeowner sees the ad. That changes the quality of the conversation before it even starts. Then we layered in our structured offer angle and follow-up system.",
      "Starting December 18: $18,000 closed and 5 installs by December 31. In January, $75,600 closed and 21 installs. From February 1 to 19, $33,900 closed and 8 installs. In total: $127,500 in closed roofing deals and 34 installations in just over 60 days.",
      "They didn't need better reviews, lower prices or more door-knocking. They needed their existing authority leveraged the right way — with the right positioning, the right offer and a predictable acquisition system behind it.",
    ],
    highlights: [
      "Ads built around the company's existing Google reviews and local authority",
      "Positioned as one of the most trusted roofers in Dallas instead of a generic \"free inspection\"",
      "A structured offer angle plus a follow-up system",
    ],
  },
  {
    slug: "261-otp-verified-leads-7-days-new-account",
    shortcode: "fb-888029340888173",
    platform: "Facebook",
    sourceUrl: fb("888029340888173"),
    date: "2026-02-18",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 78,
    orientation: "portrait",
    title: "261 OTP-Verified Roofing Leads in 7 Days on a Brand-New Ad Account",
    metaTitle: "Case Study: 261 OTP-Verified Roofing Leads in 7 Days",
    metaDescription:
      "A brand-new roofing ad account with no pixel history: $3,862 spent, 261 OTP-verified homeowner leads at $14.80 CPL in 7 days.",
    metrics: [
      { value: "261", label: "OTP-verified leads" },
      { value: "$14.80", label: "Cost per lead" },
      { value: "$3,862", label: "Spent" },
      { value: "7", label: "Days" },
    ],
    summary: "261 OTP-verified homeowner leads at a $14.80 cost per lead in the first 7 days of a brand-new ad account.",
    story: [
      "Most roofers say Meta doesn't work. We took a brand-new roofing ad account — no pixel history, no warm audience, no past data.",
      "In 7 days: $3,862 spent, a $14.80 cost per lead and 261 Meta OTP-verified leads. Not junk leads or fake numbers — OTP-verified homeowners, on a fresh account.",
      "Meta doesn't fail; bad structure fails. Campaigns that are broad with no intent layering, with no lead filtering, slow follow-up and a weak creative angle will always end up blaming the platform. We launched from ground zero and forced the algorithm to find buyers fast — different structure, different optimization logic, different results.",
    ],
    highlights: [
      "Intent layering instead of broad targeting",
      "OTP verification to filter out junk leads",
      "Fast follow-up and a strong creative angle",
    ],
  },
  {
    slug: "florida-365-otp-verified-leads-4-locations",
    shortcode: "fb-4424483074538913",
    platform: "Facebook",
    sourceUrl: fb("4424483074538913"),
    date: "2026-02-17",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 35,
    orientation: "portrait",
    title: "365 OTP-Verified Leads Across 4 Florida Locations in 16 Days",
    metaTitle: "Case Study: 365 OTP-Verified Roofing Leads in Florida",
    metaDescription:
      "A 16-day roofing campaign across 4 Florida locations: 365 OTP-verified leads at $19.50 CPL, synced to the CRM and nurtured by SMS and email.",
    metrics: [
      { value: "365", label: "OTP-verified leads" },
      { value: "$19.50", label: "Cost per lead" },
      { value: "4", label: "Locations" },
      { value: "16", label: "Days" },
    ],
    summary: "365 OTP-verified leads across 4 Florida locations in a 16-day campaign, with fully automated CRM follow-up.",
    story: [
      "Many roofing companies think their problem is getting more leads. It isn't — it's what happens after the lead comes in.",
      "In our last 16-day campaign in Florida, across 4 locations, we generated 365 OTP-verified leads at a $19.50 cost per lead, with fully automated CRM follow-up.",
      "Every lead was OTP-verified, synced instantly to the CRM (GoHighLevel), nurtured by SMS and email, and routed to sales. That's why results compound.",
    ],
    highlights: [
      "OTP verification on every lead",
      "Instant sync to the CRM (GoHighLevel)",
      "Automated SMS and email nurture, then routing to sales",
    ],
  },
  {
    slug: "1480-roofing-leads-4-77-cpl",
    shortcode: "fb-1237322994452555",
    platform: "Facebook",
    sourceUrl: fb("1237322994452555"),
    date: "2026-02-15",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 19,
    orientation: "landscape",
    title: "1,480 Roofing Leads at $4.77 per Lead From October to February",
    metaTitle: "Roofing Case Study: 1,480 Leads at $4.77 CPL",
    metaDescription:
      "From October to February: 1,480 roofing leads at $4.77 per lead with a $26.77 CPM, in a market where many pay $150+ per lead.",
    metrics: [
      { value: "1,480", label: "Leads" },
      { value: "$4.77", label: "Cost per lead" },
      { value: "$26.77", label: "CPM" },
    ],
    summary: "1,480 leads at $4.77 per lead between October and February for one roofing client.",
    story: [
      "From October to February, we generated 1,480 leads for one of our roofing clients at $4.77 per lead, with a $26.77 CPM — in a market where most pay $150+.",
      "That's not luck. That's a system: the creatives, ad copy and audiences, the KPIs we track, and clear rules for when to launch, when to kill ads and when to scale.",
    ],
    highlights: [
      "Tested creatives, ad copy and audiences",
      "Tracked KPIs with clear launch, kill and scale rules",
      "Sustained over five months, not a one-week spike",
    ],
  },
  {
    slug: "private-dwy-mastermind-segmentation-framework",
    shortcode: "fb-1286499706706258",
    platform: "Facebook",
    sourceUrl: fb("1286499706706258"),
    date: "2026-02-13",
    category: "Masterminds",
    media: "video",
    durationSec: 594,
    orientation: "landscape",
    title: "Inside a 1.5-Hour Private DWY Mastermind on Roofing Audience Segmentation",
    metaTitle: "Mastermind: Roofing Audience Segmentation Framework",
    metaDescription:
      "A sneak peek from a 1.5-hour private done-with-you mastermind with a roofing agency owner: the segmentation framework behind $15–$20 roofing CPLs.",
    metrics: [
      { value: "1.5 hr", label: "Private session" },
      { value: "$15–$20", label: "Typical CPL range" },
    ],
    summary: "A sneak peek from a 1.5-hour private 1:1 done-with-you mastermind with a roofing agency owner.",
    story: [
      "A sneak peek from our 1.5-hour private 1:1 done-with-you mastermind with a roofing agency owner.",
      "We walked him through our hyper-targeted market segmentation framework — the same system we use to keep roofing cost per lead in the $15–$20 range and scale clients beyond $100K a month.",
      "Mid-session, we broke down why most agencies in the industry are stuck paying $150–$200 per lead while we operate in a completely different cost bracket. Different segmentation, different buyer psychology, different results. We don't just test interests — we build predictable acquisition systems for every roofing client we work with.",
    ],
    highlights: [
      "Hyper-targeted market segmentation framework",
      "Why many agencies pay $150–$200 per roofing lead",
      "Buyer psychology behind lower cost per lead",
    ],
  },
  {
    slug: "roofing-ad-account-from-zero-five-days",
    shortcode: "fb-4312985598979628",
    platform: "Facebook",
    sourceUrl: fb("4312985598979628"),
    date: "2026-02-07",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 140,
    orientation: "portrait",
    title: "Starting a Roofing Ad Account From Zero: Scaling Five Days In",
    metaTitle: "Case Study: A Roofing Ad Account From Zero, 5 Days In",
    metaDescription:
      "A clean roofing ad account started from zero: why collecting data early matters, and how the account was already scaling five days in.",
    metrics: [
      { value: "0", label: "Starting data" },
      { value: "Day 5", label: "Already scaling" },
    ],
    summary: "A clean roofing ad account started from zero data — and already scaling five days in.",
    story: [
      "Most roofers don't fail at ads because of budget. They fail because they never collect enough data.",
      "We started this account from zero. Five days in on a clean account, momentum is already there and we're scaling. Roofers who move first win the data game.",
    ],
    highlights: [
      "Started on a clean account with no prior data",
      "Built enough data fast to start scaling by day five",
      "Two walkthrough videos from the first days of the campaign",
    ],
    extraVideos: [{ file: "fb-1260727525956814", orientation: "portrait", sourceUrl: fb("1260727525956814") }],
  },
  {
    slug: "dwy-onboarding-roofing-agency-buyer-journey",
    shortcode: "fb-900244436272150",
    platform: "Facebook",
    sourceUrl: fb("900244436272150"),
    date: "2026-02-02",
    category: "Masterminds",
    media: "video",
    durationSec: 87,
    orientation: "portrait",
    title: "DWY Onboarding: Fixing the Buyer Journey for a Roofing Agency",
    metaTitle: "DWY Onboarding: Fixing a Roofing Agency's Buyer Journey",
    metaDescription:
      "A sneak peek from a done-with-you onboarding session: the buyer-journey gaps, landing page leaks and ad-to-lead flow hurting a roofing agency's results.",
    metrics: [
      { value: "1:1", label: "Private session" },
      { value: "DWY", label: "Onboarding" },
    ],
    summary: "A done-with-you onboarding session with a newly onboarded roofing agency client.",
    story: [
      "A sneak peek from a done-with-you onboarding session with one of our newly onboarded agency clients, walking through what had been quietly hurting his roofing ad results.",
      "This was only a 30,000-foot breakdown, not even execution yet — the same playbook we've used to scale other clients. Once the framework is implemented, things move fast.",
    ],
    highlights: [
      "Missing links in the buyer journey inside Ads Manager",
      "Trust and conversion leaks on the landing page",
      "Realigning ads → landing page → lead flow",
    ],
  },
  {
    slug: "635-pre-qualified-roofing-leads-45-days",
    shortcode: "fb-716620171511340",
    platform: "Facebook",
    sourceUrl: fb("716620171511340"),
    date: "2025-12-01",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 41,
    orientation: "square",
    title: "635 Pre-Qualified Roofing Leads in 45 Days at $4–$6 per Lead",
    metaTitle: "Roofing Case Study: 635 Leads in 45 Days at $4–$6 CPL",
    metaDescription:
      "635 pre-qualified roofing leads in 45 days at a $4–$6 cost per lead, in a market agencies call too saturated and too expensive.",
    metrics: [
      { value: "635", label: "Pre-qualified leads" },
      { value: "$4–$6", label: "Cost per lead" },
      { value: "45", label: "Days" },
    ],
    summary: "635 pre-qualified roofing leads in 45 days at a $4–$6 cost per lead.",
    story: [
      "Your leads aren't expensive because the market is hard. They're expensive because the marketing isn't good enough.",
      "We pulled 635 pre-qualified roofing leads in 45 days at a $4–$6 cost per lead, in the exact same market where agencies say it's too saturated and costs are too high.",
      "Meanwhile, other roofers are stacking volume and booking roofs — and widening a gap many don't realize exists. You're not losing to the market; you're losing to roofers who decided faster.",
    ],
    highlights: ["Pre-qualified leads, not raw form fills", "$4–$6 cost per lead in a \"saturated\" market", "45 days of sustained volume"],
  },
  {
    slug: "825-verified-roofing-leads-4-95-cpl",
    shortcode: "fb-1193570879011772",
    platform: "Facebook",
    sourceUrl: fb("1193570879011772"),
    date: "2025-11-29",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 37,
    orientation: "square",
    title: "825 Verified Roofing Leads at a $4.95 CPL in Five Weeks",
    metaTitle: "Roofing Case Study: 825 Verified Leads at $4.95 CPL",
    metaDescription:
      "October 25 to November 27: 825 verified roofing leads at a $4.95 CPL, $1.33 CPC and $24 CPM on $4,083 total spend.",
    metrics: [
      { value: "825", label: "Verified leads" },
      { value: "$4.95", label: "Cost per lead" },
      { value: "$4,083", label: "Spent" },
      { value: "$1.33", label: "CPC" },
    ],
    summary: "825 verified roofing leads at a $4.95 cost per lead between October 25 and November 27.",
    story: [
      "While most roofers complain about the market, this US roofing company went all in and let the numbers talk. No excuses, no slow season, no \"Meta is too expensive\" — just a clean offer, dialed-in creatives and a willingness to move fast.",
      "Campaigns ran from October 25 to November 27: 825 verified leads at a $4.95 cost per lead, a $24 CPM in one of the toughest industries, a $1.33 CPC and $4,083 total spend.",
      "Most roofers wait for leads. The smart ones engineer demand, and the platform responds immediately.",
    ],
    highlights: ["A clean, clear offer", "Dialed-in creatives", "Speed: launching and iterating fast"],
  },
  {
    slug: "texas-roofer-686-leads-8-days-0-down-offer",
    shortcode: "fb-1478795616532583",
    platform: "Facebook",
    sourceUrl: fb("1478795616532583"),
    date: "2025-11-08",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 63,
    orientation: "square",
    title: "686 Homeowner Leads in 8 Days for a Texas Roofer With a $0-Down Offer",
    metaTitle: "Texas Roofing Case Study: 686 Leads in 8 Days",
    metaDescription:
      "A Texas roofer went from zero leads to 686 homeowner inquiries in 8 days at $5.31 CPL and 2.17% CTR with a $0-down, 0%-interest offer.",
    metrics: [
      { value: "686", label: "Homeowner leads" },
      { value: "$5.31", label: "Cost per lead" },
      { value: "2.17%", label: "CTR" },
      { value: "8", label: "Days" },
    ],
    summary: "From zero leads to 686 homeowner inquiries in 8 days for a Texas roofing company.",
    story: [
      "This Texas roofing company was testing a random offer on October 26 — zero leads, nothing happening. We started working with them on October 27, with no pixel data, no retargeting and no warm traffic.",
      "We launched a $0 down, 0% interest for 12 months offer. Eight days later: 686 homeowner inquiries at a $5.31 cost per lead and a 2.17% click-through rate, in a market where most roofing advertisers struggle to cross 1% CTR.",
      "What changed? We stopped \"selling roofs\" and started speaking to the real fears and hesitations homeowners have before reaching out, while highlighting an offer they couldn't ignore. Less pressure, more trust, higher intent.",
    ],
    highlights: [
      "A $0-down, 0%-interest-for-12-months financing offer",
      "Messaging built around homeowners' real fears and hesitations",
      "Launched with no pixel data, retargeting or warm traffic",
    ],
    extraVideos: [{ file: "fb-722878983506075", orientation: "square", sourceUrl: fb("722878983506075") }],
  },
  {
    slug: "537-qualified-leads-13-days-andromeda-update",
    shortcode: "fb-1221261556701777",
    platform: "Facebook",
    sourceUrl: fb("1221261556701777"),
    date: "2025-10-29",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 40,
    orientation: "square",
    title: "537 Qualified Roofing Leads at $4.27 CPL in 13 Days After Meta's Andromeda Update",
    metaTitle: "Case Study: 537 Roofing Leads at $4.27 CPL in 13 Days",
    metaDescription:
      "13 days into onboarding a new roofing client: $2,292 spent, 537 qualified leads at $4.27 CPL, with projects across Texas, Florida and Georgia.",
    metrics: [
      { value: "537", label: "Qualified leads" },
      { value: "$4.27", label: "Cost per lead" },
      { value: "$2,292", label: "Spent" },
      { value: "13", label: "Days" },
    ],
    summary: "537 qualified roofing leads at a $4.27 cost per lead in the first 13 days with a new client.",
    story: [
      "Everyone has been saying Meta's Andromeda update killed their ads. While the market blames algorithms, we're building systems that produce results.",
      "Just 13 days into onboarding a new roofing client: $2,292 spent, 537 qualified leads, a $4.27 cost per lead — and they're already fulfilling projects across Texas, Florida and Georgia.",
      "Same update, same platform. Different system, different results.",
    ],
    highlights: [
      "Results after Meta's Andromeda update",
      "Qualified leads within the first 13 days of onboarding",
      "Jobs being fulfilled across Texas, Florida and Georgia",
    ],
  },
  {
    slug: "ppl-agency-1024-otp-verified-roofing-leads",
    shortcode: "fb-834632975908351",
    platform: "Facebook",
    sourceUrl: fb("834632975908351"),
    date: "2025-10-04",
    category: "Roofing Agencies",
    media: "video",
    durationSec: 34,
    orientation: "square",
    title: "1,024 OTP-Verified Roofing Leads for a Pay-Per-Lead Agency",
    metaTitle: "Case Study: 1,024 OTP-Verified Roofing Leads for a PPL Agency",
    metaDescription:
      "$24,902 in ad spend for a pay-per-lead roofing agency: 1,024 OTP-verified leads at $24 CPL with a 1.63% CTR in a saturated market.",
    metrics: [
      { value: "1,024", label: "OTP-verified leads" },
      { value: "$24", label: "Cost per lead" },
      { value: "$24,902", label: "Spent" },
      { value: "1.63%", label: "CTR" },
    ],
    summary: "1,024 OTP-verified roofing leads at a $24 cost per lead for a pay-per-lead agency client.",
    story: [
      "We spent $24,902 on ads for a pay-per-lead (PPL) agency client and generated 1,024 OTP-verified roofing leads at a $24 cost per lead.",
      "The ads held a 1.63% click-through rate in one of the most saturated roofing markets, where many agencies can't reach 1% CTR even with a strong offer — putting real, verified leads directly into the client's pipeline.",
    ],
    highlights: ["OTP verification on every lead", "1.63% CTR in a saturated market", "Scaled spend: nearly $25K in ads"],
  },
  {
    slug: "texas-850-roofing-leads-8-days-7-60",
    shortcode: "fb-1334093691682108",
    platform: "Facebook",
    sourceUrl: fb("1334093691682108"),
    date: "2025-09-22",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 26,
    orientation: "landscape",
    title: "850 Roofing Leads in 8 Days for a Texas Roofer at $7.60 Each",
    metaTitle: "Texas Roofing Case Study: 850 Leads in 8 Days at $7.60",
    metaDescription:
      "$6,461 in ad spend for a Texas roofing client: 850 website leads in 8 days at $7.60 each, with a 3.79% click-through rate.",
    metrics: [
      { value: "850", label: "Website leads" },
      { value: "$7.60", label: "Cost per lead" },
      { value: "$6,461", label: "Spent" },
      { value: "3.79%", label: "CTR" },
    ],
    summary: "850 website leads in 8 days at $7.60 each for a roofing client in Texas.",
    story: [
      "We spent $6,461.25 on ads for a roofing client in Texas and generated 850 website leads in 8 days, at $7.60 each.",
      "The ads cut through with a 3.79% click-through rate in one of the noisiest, most saturated markets — turning attention into predictable, qualified leads.",
    ],
    highlights: ["3.79% CTR in a saturated market", "850 leads in the first 8 days", "Website leads through the client's own funnel"],
  },
  {
    slug: "215-validated-roofing-leads-12-79-cpl",
    shortcode: "fb-2865737450438021",
    platform: "Facebook",
    sourceUrl: fb("2865737450438021"),
    date: "2026-05-28",
    category: "Roofing Contractors",
    media: "video",
    durationSec: 25,
    orientation: "landscape",
    title: "215 Validated Roofing Leads at $12.79 Each in 28 Days",
    metaTitle: "Roofing Case Study: 215 Validated Leads at $12.79",
    metaDescription:
      "215 validated roofing leads in 28 days at $12.79 each on $2,749 spend, with a 2.33% CTR — every lead passed multi-step validation.",
    metrics: [
      { value: "215", label: "Validated leads" },
      { value: "$12.79", label: "Cost per lead" },
      { value: "$2,749", label: "Spent" },
      { value: "2.33%", label: "CTR" },
    ],
    summary: "215 validated roofing leads in 28 days at $12.79 each.",
    story: [
      "Roofing leads commonly cost $40–$80 each. We generated them at $12.79.",
      "215 validated leads, $2,749 spent, in 28 days. Not raw clicks or junk form fills — every lead passed our multi-step validation process before it reached the client. And a 2.33% click-through rate.",
      "The funnel does the work; the offer and the numbers speak for themselves.",
    ],
    highlights: ["Multi-step lead validation", "2.33% CTR", "The funnel and offer doing the work"],
  },
];

/** All case studies, newest first. */
export const caseStudies: CaseStudy[] = [...instagramCases.map((c) => ({ ...c, platform: "Instagram" as const })), ...facebookCases].sort(
  (a, b) => b.date.localeCompare(a.date)
);

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const caseMedia = (c: CaseStudy) => ({
  poster: `/case-studies/${c.shortcode}.jpg`,
  video: c.media === "video" ? `/case-studies/${c.shortcode}.mp4` : undefined,
});
