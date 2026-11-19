/*
  SEO landing pages. Every figure comes from a case study in caseStudies.ts
  (linked on the page) or from a cited outside source. Text may contain
  [label](/path) links and **bold**, rendered by Inline.
*/

export type IconName = "megaphone" | "users" | "image" | "clock" | "camera" | "film" | "layers" | "target" | "shield" | "map" | "wallet" | "zap" | "storm" | "repeat" | "phone" | "building";

export type LandingDoc = {
  slug: string;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroPoints: string[];
  market?: string;
  areaServed?: string;
  serviceType: string;
  breadcrumb: string;
  stats: { value: string; label: string; slug: string }[];
  problems: { title: string; intro: string; cards: { icon: IconName; title: string; text: string }[] };
  features: { eyebrow: string; title: string; intro: string; cards: { icon: IconName; title: string; text: string; slug?: string }[] };
  proofTitle: string;
  proofSlugs: string[];
  process: { title: string; text: string }[];
  compare: { title: string; intro: string; bad: { title: string; points: string[] }; good: { title: string; points: string[] } };
  guide: { id: string; title: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string; text: string }[];
  formTitle: string;
};

const PROCESS_BASE = [
  { title: "Market and offer", text: "We study your service area and competitors, then build an offer homeowners act on, not another \"free inspection\"." },
  { title: "Creative from your jobs", text: "Vertical video and image ads from your real crews, roofs and reviews, built for Reels, Stories and Feed." },
  { title: "Launch on Meta", text: "Campaigns run across Instagram and Facebook placements under your company name, targeted to the areas you want." },
  { title: "Verify and qualify", text: "Phone verification (OTP) and qualifying questions filter out fake numbers and tyre-kickers before sales calls." },
  { title: "Instant follow-up", text: "Every lead syncs to your CRM and gets an automatic text and email within minutes, then routes to your team." },
  { title: "Optimise weekly", text: "We review cost per lead, click-through rate and booked inspections every week and move budget to what works." },
];

export const instagramAds: LandingDoc = {
  slug: "instagram-ads-for-roofers",
  path: "/instagram-ads-for-roofers",
  title: "Instagram Ads for Roofers That Book Roof Inspections",
  description:
    "How roofing companies use Instagram ads (Reels, Stories, Feed) inside Meta Ads to get exclusive homeowner leads, with real campaign numbers, setup and costs.",
  eyebrow: "Instagram ads for roofing companies",
  h1: "Instagram Ads for Roofers That Turn Scrolling Homeowners Into Booked Inspections",
  intro:
    "Instagram is not a separate ad platform: it is a set of placements inside Meta Ads, next to Facebook. We build the offer, the Reels creative, the landing page and the follow-up, so homeowners who stop scrolling become exclusive leads for your company.",
  heroPoints: ["Reels, Stories and Feed ads built from your real jobs", "Exclusive leads, phone-verified and synced to your CRM", "The same system behind the campaigns below"],
  serviceType: "Instagram advertising for roofing companies",
  breadcrumb: "Instagram Ads for Roofers",
  stats: [
    { value: "686", label: "Homeowner leads in 8 days (Texas)", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
    { value: "3.79%", label: "Click-through rate, Texas campaign", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "$4.27", label: "Cost per lead, 537 leads in 13 days", slug: "537-qualified-leads-13-days-andromeda-update" },
    { value: "$127.5K", label: "Closed in about 60 days (Dallas)", slug: "dallas-roofer-127500-closed-34-installs" },
  ],
  problems: {
    title: "Why most roofing ads on Instagram don't produce jobs",
    intro: "The platform isn't the problem. These four mistakes are.",
    cards: [
      { icon: "megaphone", title: "Boosting posts", text: "A boosted post is optimised for likes and views. A lead campaign is optimised for homeowners who fill in a form. They are not the same audience." },
      { icon: "repeat", title: "The same offer as everyone", text: "\"Free inspection\" is in every roofer's ad. A specific offer, like the $0-down financing offer in our Texas campaign, gives people a reason to act now." },
      { icon: "image", title: "Stock photos", text: "Generic shingles and smiling models get scrolled past. Your real crews, roofs and before-and-after footage stop the thumb." },
      { icon: "clock", title: "Slow follow-up", text: "A lead from a Reel goes cold in minutes. Without an instant text and email, most never answer the first call." },
    ],
  },
  features: {
    eyebrow: "Placements",
    title: "Where your roofing ads show on Instagram",
    intro: "One Meta campaign can run in all of these. We build creative for each format and let delivery move budget to whichever produces cheaper qualified leads.",
    cards: [
      { icon: "film", title: "Reels", text: "Full-screen vertical video. Best for crew footage, drone shots, before-and-after reveals and quick owner-to-camera offers." },
      { icon: "camera", title: "Stories", text: "Short full-screen moments with a tap-through. Good for one clear offer and a fast path to the form." },
      { icon: "layers", title: "Feed and carousels", text: "Swipeable sets of finished roofs, reviews and financing details for homeowners who want to compare before they reach out." },
      { icon: "target", title: "Retargeting", text: "Show follow-up ads to people who watched your video or visited your page but didn't book yet." },
    ],
  },
  proofTitle: "Results from our roofing campaigns on Meta (Instagram and Facebook)",
  proofSlugs: [
    "texas-roofer-686-leads-8-days-0-down-offer",
    "dallas-roofer-127500-closed-34-installs",
    "537-qualified-leads-13-days-andromeda-update",
    "florida-home-services-280-leads-15-days",
    "261-otp-verified-leads-7-days-new-account",
  ],
  process: PROCESS_BASE,
  compare: {
    title: "Instagram vs Facebook for roofing ads",
    intro: "You don't have to choose. Both run from the same Meta campaign and the same budget.",
    bad: {
      title: "Instagram placements",
      points: ["Vertical video first: Reels and Stories", "Strong for visual proof: crews, drone shots, before and after", "Retarget people who watched your videos", "Works without a big following: ads reach people who don't follow you"],
    },
    good: {
      title: "Facebook placements",
      points: ["Feed, Marketplace and lead form ads", "Reaches homeowners who rarely use Instagram", "Native lead forms keep people inside the app", "Same targeting, same pixel, same reporting"],
    },
  },
  guide: [
    {
      id: "cost",
      title: "How much do Instagram ads cost for roofers?",
      body: [
        "Instagram and Facebook share one ad auction, so costs are reported per campaign, not per app. Across 15 of our roofing campaigns on Meta, cost per lead ranged from $3.75 to $24, with a median of $11.41. The full breakdown is in our [roofing Facebook and Instagram ads cost per lead study](/blog/roofing-facebook-ads-cost-per-lead).",
        "Budgets in our case studies ranged from **$93 for a single day** ([25 leads at $3.75](/case-studies/roofing-25-leads-one-day-3-75)) to **$24,902** for a [pay-per-lead agency](/case-studies/ppl-agency-1024-otp-verified-roofing-leads). Your budget depends on your market and how many inspections your team can handle.",
      ],
    },
    {
      id: "creative",
      title: "What should a roofing Instagram ad show?",
      body: [
        "Show real work: your crew on a roof, a drone pass over a finished job, a before-and-after cut, or the owner explaining the offer to camera. Lead with the homeowner's worry (leaks, storm damage, cost) and answer it with a specific offer.",
        "In our [Texas campaign](/case-studies/texas-roofer-686-leads-8-days-0-down-offer), changing the message from selling roofs to answering homeowners' hesitations, with a $0-down financing offer, took the company from zero leads to 686 in 8 days. Financing offers need the lender's terms and required disclosures.",
      ],
    },
    {
      id: "follow-up",
      title: "Why follow-up decides whether Instagram leads turn into jobs",
      body: [
        "Most Instagram leads are filled in on a phone in a few seconds. If nobody responds quickly, they forget. Our campaigns send an instant text and email, then route the lead to sales. Read the full [roofing lead follow-up process](/blog/roofing-lead-follow-up).",
      ],
    },
  ],
  faqs: [
    { q: "Do Instagram ads work for roofing companies?", a: "Yes, when they run as lead campaigns with a specific offer, real-job creative and fast follow-up. Our roofing campaigns on Meta, which include Instagram placements, have produced results such as 686 homeowner leads in 8 days at $5.31 each." },
    { q: "Should I run Instagram ads separately from Facebook?", a: "Usually not. Both are placements in the same Meta campaign. Running them together gives the algorithm more room to find cheaper leads, and you can still see results by placement in reporting." },
    { q: "Do I need a big Instagram following?", a: "No. Ads reach people who don't follow you. One of our campaigns on a brand-new ad account with no history produced 261 phone-verified leads at $14.80 each in its first 7 days." },
    { q: "How much should a roofer spend on Instagram ads?", a: "It depends on your market and capacity. In our case studies, budgets ranged from $93 for a single day to $24,902 for a pay-per-lead agency. We size the budget to the number of inspections your team can run." },
    { q: "How fast do Instagram ads produce roofing leads?", a: "Campaigns usually produce leads in the first days. In our case studies: 25 leads on day one, and 686 leads in the first 8 days. Results vary by market, offer and follow-up." },
  ],
  related: [
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers", text: "The full Meta ads system we install" },
    { href: "/blog/roofing-facebook-ads-cost-per-lead", label: "Cost per lead study", text: "Data from 15 roofing campaigns" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "Offer, funnel, CRM and qualification" },
    { href: "/blog/roofing-lead-follow-up", label: "Lead follow-up guide", text: "Turn leads into booked inspections" },
  ],
  formTitle: "Get your free Instagram ads breakdown",
};

export const texasLeads: LandingDoc = {
  slug: "roofing-leads-texas",
  path: "/roofing-leads-texas",
  title: "Roofing Leads in Texas: Exclusive Homeowner Leads for Roofers",
  description:
    "Exclusive roofing leads for Texas contractors from ads you own: 686 leads in 8 days at $5.31, 850 at $7.60, and $127,500 closed in Dallas. See how it works.",
  eyebrow: "Roofing leads · Texas",
  h1: "Exclusive Roofing Leads for Texas Roofers, From Ads You Own",
  intro:
    "Texas is one of the most crowded roofing markets in the country, and bought lead lists get sold to the same contractors again and again. We run Meta ads under your company name, so every Texas homeowner who responds is yours alone.",
  heroPoints: ["Leads go to your company only, never shared", "Proven in Texas: Dallas, statewide and multi-state campaigns", "You own the ads, pages, data and CRM"],
  market: "Texas",
  areaServed: "Texas",
  serviceType: "Roofing lead generation in Texas",
  breadcrumb: "Roofing Leads in Texas",
  stats: [
    { value: "686", label: "Homeowner leads in 8 days at $5.31", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
    { value: "850", label: "Website leads in 8 days at $7.60", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "$127.5K", label: "Closed, 34 installs in ~60 days (Dallas)", slug: "dallas-roofer-127500-closed-34-installs" },
    { value: "3.79%", label: "Click-through rate in a saturated market", slug: "texas-850-roofing-leads-8-days-7-60" },
  ],
  problems: {
    title: "Why buying Texas roofing leads stops working",
    intro: "Lead sellers make money when you keep buying. Here is what that costs you.",
    cards: [
      { icon: "users", title: "Shared with other roofers", text: "Many bought leads go to several contractors at once. The homeowner picks whoever calls first, or whoever is cheapest." },
      { icon: "wallet", title: "You pay forever", text: "Stop paying and the leads stop. Nothing you bought builds your brand, your pages or your customer list." },
      { icon: "storm", title: "Storm-season crowding", text: "After hail, every roofer and storm chaser in the area is in the same feeds and lists. Generic offers disappear." },
      { icon: "clock", title: "Slow first contact", text: "If your team calls an hour later, the homeowner has already booked someone else." },
    ],
  },
  features: {
    eyebrow: "Built for Texas",
    title: "How we run roofing campaigns in Texas",
    intro: "Each idea below comes from a Texas campaign. Open a card to read the case study.",
    cards: [
      { icon: "wallet", title: "Financing offers", text: "A $0-down, 0%-for-12-months offer took a Texas roofer from zero leads to 686 in 8 days. Lender terms and disclosures required.", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
      { icon: "building", title: "Local authority", text: "In Dallas, ads were built around the company's existing Google reviews instead of a generic \"free inspection\": $127,500 closed and 34 installs.", slug: "dallas-roofer-127500-closed-34-installs" },
      { icon: "zap", title: "Creative that cuts through", text: "In one of the noisiest markets, a 3.79% click-through rate produced 850 leads in 8 days at $7.60 each.", slug: "texas-850-roofing-leads-8-days-7-60" },
      { icon: "map", title: "Metro-by-metro targeting", text: "Target Dallas–Fort Worth, Houston, Austin or San Antonio separately, so budget follows the jobs and crews you have." },
    ],
  },
  proofTitle: "Texas roofing results",
  proofSlugs: [
    "texas-roofer-686-leads-8-days-0-down-offer",
    "texas-850-roofing-leads-8-days-7-60",
    "dallas-roofer-127500-closed-34-installs",
    "537-qualified-leads-13-days-andromeda-update",
  ],
  process: PROCESS_BASE,
  compare: {
    title: "Bought Texas leads vs your own lead system",
    intro: "Both get you homeowner contacts. Only one builds an asset.",
    bad: {
      title: "Buying leads",
      points: ["Often shared or resold to other roofers", "Priced per lead, every month, forever", "Seller's brand, seller's pages, seller's data", "Quality depends on someone else's filters"],
    },
    good: {
      title: "Your own system",
      points: ["Exclusive: homeowners respond to your brand", "Our Texas campaigns: $5.31 and $7.60 per lead", "You own the ads, pages, CRM and customer list", "Phone verification and qualification built in"],
    },
  },
  guide: [
    {
      id: "cost",
      title: "How much do roofing leads cost in Texas?",
      body: [
        "Pay-per-lead vendors list exclusive Texas roofing leads at around **$55 each** (for example, [99 Calls Texas roofing leads](https://99calls.com/locations/Texas/Roofing-Leads.htm)).",
        "Our own Texas campaigns produced leads at [$5.31 each (686 leads in 8 days)](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) and [$7.60 each (850 leads in 8 days)](/case-studies/texas-850-roofing-leads-8-days-7-60). A [multi-state campaign](/case-studies/537-qualified-leads-13-days-andromeda-update) fulfilling jobs in Texas, Florida and Georgia came in at $4.27. These are different lead types: vendor leads are often pre-screened calls, ours are form leads you qualify yourself. Compare them by cost per signed job, not just cost per lead.",
      ],
    },
    {
      id: "jobs",
      title: "From leads to signed jobs in Dallas",
      body: [
        "Leads only matter if they close. In [our Dallas campaign](/case-studies/dallas-roofer-127500-closed-34-installs), the company closed $18,000 and 5 installs in the last two weeks of December, $75,600 and 21 installs in January, and $33,900 and 8 installs from 1 to 19 February: **$127,500 and 34 installs** in just over 60 days.",
        "What made the difference was positioning the company as one of the most trusted roofers in Dallas from the first second of the ad, then a structured offer and follow-up system behind it. See how follow-up works in our [lead follow-up guide](/blog/roofing-lead-follow-up).",
      ],
    },
    {
      id: "shared",
      title: "Shared, exclusive or owned?",
      body: [
        "Shared leads are sold to several roofers. Exclusive leads are sold to one, but you still rent them. An owned system means homeowners respond to your brand, and the pages and data stay with you. The full comparison is in [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
      ],
    },
  ],
  faqs: [
    { q: "Are the Texas roofing leads exclusive?", a: "Yes. The ads run under your company name, so every homeowner who responds is contacting your company. Leads are never shared or resold." },
    { q: "How much do roofing leads cost in Texas?", a: "Pay-per-lead vendors list exclusive Texas roofing leads at around $55 each. Our own Texas campaigns produced leads at $5.31 and $7.60 each. Costs depend on your market, offer and season." },
    { q: "Which parts of Texas do you work in?", a: "Anywhere in Texas. Campaigns can target a metro such as Dallas–Fort Worth or Houston, specific counties or ZIP codes, or a radius around your office." },
    { q: "How quickly can a Texas campaign produce leads?", a: "In our Texas case studies, campaigns produced 686 and 850 leads in their first 8 days. Results vary by market, offer and budget." },
    { q: "Who is this for?", a: "Texas roofing companies doing $1M+ a year that want a predictable flow of exclusive homeowner leads and can follow up quickly." },
  ],
  related: [
    { href: "/roofing-leads-florida", label: "Roofing leads in Florida", text: "Our Florida campaigns and results" },
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers", text: "The Meta ads system behind these results" },
    { href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive leads", text: "What you are really paying for" },
    { href: "/case-studies", label: "All case studies", text: "Every campaign, with the numbers" },
  ],
  formTitle: "Get your free Texas market breakdown",
};

export const floridaLeads: LandingDoc = {
  slug: "roofing-leads-florida",
  path: "/roofing-leads-florida",
  title: "Roofing Leads in Florida: Exclusive, Phone-Verified Leads",
  description:
    "Exclusive roofing leads for Florida contractors: 365 phone-verified leads across 4 locations, 280 leads in 15 days and 25 leads on day one at $3.75 each.",
  eyebrow: "Roofing leads · Florida",
  h1: "Exclusive Roofing Leads for Florida Roofers, Verified Before They Reach You",
  intro:
    "Florida homeowners see a lot of roofing ads and lead-seller calls. We run Meta ads under your brand, verify every lead's phone number with a one-time passcode, and push it straight into your CRM, so your team talks to real homeowners first.",
  heroPoints: ["Every lead phone-verified (OTP) before it reaches you", "Single or multi-location campaigns across Florida", "Instant CRM sync with SMS and email follow-up"],
  market: "Florida",
  areaServed: "Florida",
  serviceType: "Roofing lead generation in Florida",
  breadcrumb: "Roofing Leads in Florida",
  stats: [
    { value: "365", label: "OTP-verified leads, 4 locations, 16 days", slug: "florida-365-otp-verified-leads-4-locations" },
    { value: "280", label: "Qualified leads in 15 days", slug: "florida-home-services-280-leads-15-days" },
    { value: "$3.75", label: "Per lead on day one (25 leads)", slug: "roofing-25-leads-one-day-3-75" },
    { value: "2.46%", label: "Click-through rate held for 15 days", slug: "florida-home-services-280-leads-15-days" },
  ],
  problems: {
    title: "Why Florida roofers waste time on bad leads",
    intro: "More leads don't help if your team spends the day calling wrong numbers.",
    cards: [
      { icon: "phone", title: "Fake and wrong numbers", text: "Unverified form leads include typos, fake numbers and people who never meant to submit." },
      { icon: "users", title: "Shared with competitors", text: "Bought leads often go to several contractors. You are in a race to the bottom on price before you arrive." },
      { icon: "storm", title: "Crowded storm seasons", text: "When storms hit, feeds fill with roofing ads. Without a clear offer and fast response, you blend in." },
      { icon: "clock", title: "Leads that go cold", text: "A lead that waits hours for a call has usually already talked to someone else." },
    ],
  },
  features: {
    eyebrow: "Built for Florida",
    title: "How we run roofing campaigns in Florida",
    intro: "Each card comes from a Florida campaign. Open one to read the case study.",
    cards: [
      { icon: "shield", title: "OTP verification", text: "365 leads across 4 Florida locations in 16 days, every one confirmed with a one-time passcode, at $19.50 per lead.", slug: "florida-365-otp-verified-leads-4-locations" },
      { icon: "layers", title: "Roofing, gutters and solar", text: "A Florida home service company covering roofing, gutters and solar got 280 qualified leads in 15 days on $3,196 of ad spend.", slug: "florida-home-services-280-leads-15-days" },
      { icon: "zap", title: "Fast starts", text: "Day one of a campaign across Florida and the Bay Area: 25 qualified leads at $3.75 each, $93 in total.", slug: "roofing-25-leads-one-day-3-75" },
      { icon: "repeat", title: "Automated follow-up", text: "Leads sync instantly to GoHighLevel, get SMS and email nurture, and route to sales, so results compound instead of going cold." },
    ],
  },
  proofTitle: "Florida roofing results",
  proofSlugs: [
    "florida-365-otp-verified-leads-4-locations",
    "florida-home-services-280-leads-15-days",
    "roofing-25-leads-one-day-3-75",
    "537-qualified-leads-13-days-andromeda-update",
  ],
  process: PROCESS_BASE,
  compare: {
    title: "Bought Florida leads vs your own lead system",
    intro: "The difference shows up in how many calls actually reach a homeowner.",
    bad: {
      title: "Buying leads",
      points: ["Often shared with other contractors", "Numbers not always verified", "Seller's brand, seller's follow-up", "Stops the day you stop paying"],
    },
    good: {
      title: "Your own system",
      points: ["Exclusive to your company", "Every number verified with a one-time passcode", "Instant CRM sync, SMS and email follow-up", "Your pages, your data, your customer list"],
    },
  },
  guide: [
    {
      id: "otp",
      title: "Why phone verification matters for Florida roofing leads",
      body: [
        "An OTP-verified lead has typed in a one-time code sent to their phone, so the number is real and reachable. In our [16-day Florida campaign across 4 locations](/case-studies/florida-365-otp-verified-leads-4-locations), all 365 leads were verified, synced to the CRM and nurtured by SMS and email before routing to sales.",
        "Verified leads can cost a little more per lead ($19.50 in that campaign) but waste far less of your team's time. Compare that with campaign costs across 15 campaigns in our [cost per lead study](/blog/roofing-facebook-ads-cost-per-lead).",
      ],
    },
    {
      id: "multi",
      title: "Multi-location and multi-service campaigns",
      body: [
        "Florida companies often serve several cities or offer more than roofing. The 365-lead campaign ran across 4 locations at once. Another Florida company covering [roofing, gutters and solar got 280 qualified leads in 15 days](/case-studies/florida-home-services-280-leads-15-days) with a click-through rate that held at 2.46%.",
      ],
    },
    {
      id: "speed",
      title: "Speed to lead",
      body: [
        "In crowded markets, the first roofer to respond usually wins the inspection. Every lead in our Florida campaigns gets an automatic text and email within minutes. See the full sequence in our [roofing lead follow-up guide](/blog/roofing-lead-follow-up).",
      ],
    },
  ],
  faqs: [
    { q: "Are the Florida roofing leads exclusive?", a: "Yes. Ads run under your company name, so homeowners respond to you directly. Leads are never shared or resold." },
    { q: "What is an OTP-verified roofing lead?", a: "A lead who confirmed their phone number by entering a one-time passcode sent by text. It means the number is real and reachable before your team calls." },
    { q: "Can you run campaigns for several Florida locations?", a: "Yes. One of our Florida campaigns ran across 4 locations at once and produced 365 verified leads in 16 days." },
    { q: "How much do Florida roofing leads cost with your system?", a: "In our Florida case studies: $3.75 per lead on day one of one campaign, $11.41 per lead for a 15-day campaign ($3,196 for 280 leads), and $19.50 per lead for a fully OTP-verified multi-location campaign. Costs vary by market and offer." },
    { q: "Who is this for?", a: "Florida roofing companies doing $1M+ a year that want exclusive, verified homeowner leads and can follow up quickly." },
  ],
  related: [
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas", text: "Our Texas campaigns and results" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "The full system you own" },
    { href: "/blog/roofing-lead-follow-up", label: "Lead follow-up guide", text: "Turn leads into booked inspections" },
    { href: "/case-studies", label: "All case studies", text: "Every campaign, with the numbers" },
  ],
  formTitle: "Get your free Florida market breakdown",
};

export const landings = [instagramAds, texasLeads, floridaLeads];
