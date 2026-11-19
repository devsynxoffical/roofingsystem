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
    "How roofing companies use Instagram ads (Reels, Stories, Feed) inside Meta Ads to get exclusive homeowner leads, with real campaign numbers and costs.",
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


export const agencyLeads: LandingDoc = {
  slug: "lead-generation-for-roofing-agencies",
  path: "/lead-generation-for-roofing-agencies",
  title: "Lead Generation for Roofing Marketing Agencies & PPL Companies",
  description:
    "Meta ads and lead verification for roofing agencies and pay-per-lead companies: 664 verified leads at $4.51, 1,024 OTP-verified leads, $546K in 67 days.",
  eyebrow: "For roofing agencies and pay-per-lead companies",
  h1: "Lead Generation for Roofing Marketing Agencies and Pay-Per-Lead Companies",
  intro:
    "You sell results to roofers. We build the acquisition system behind them: Meta ads, verification, CRM and follow-up, for your own client acquisition or for the homeowner leads you deliver.",
  heroPoints: ["Leads for your agency's own growth, or homeowner leads you resell", "Multi-step and OTP verification on every lead", "Done-for-you or done-with-you onboarding"],
  serviceType: "Lead generation for roofing marketing agencies",
  breadcrumb: "Lead Generation for Roofing Agencies",
  stats: [
    { value: "664", label: "Verified leads at $4.51 for a roofing agency", slug: "roofing-agency-664-leads-4-51" },
    { value: "$546K", label: "In 67 days for a roofing marketing agency", slug: "roofing-agency-546k-67-days" },
    { value: "1,024", label: "OTP-verified leads for a PPL agency", slug: "ppl-agency-1024-otp-verified-roofing-leads" },
    { value: "2.13%", label: "CTR with a skeptical B2B audience", slug: "roofing-agency-664-leads-4-51" },
  ],
  problems: {
    title: "Why roofing agencies struggle to scale",
    intro: "Most agencies sell the same thing their prospects have already been burned by.",
    cards: [
      { icon: "users", title: "Burned prospects", text: "Roofing owners have heard every promise. Generic agency ads get ignored by the people you most want to reach." },
      { icon: "wallet", title: "Expensive leads", text: "Many agencies pay well over $100 per roofing lead because targeting and segmentation are too broad." },
      { icon: "phone", title: "Fake numbers", text: "Unverified leads hurt your clients' trust in you. Every bad lead is a refund request waiting to happen." },
      { icon: "repeat", title: "Leaky buyer journey", text: "Ads, landing page and follow-up are often built by different people and don't line up." },
    ],
  },
  features: {
    eyebrow: "What we build",
    title: "One system for your agency's growth and delivery",
    intro: "Each card comes from an agency case study.",
    cards: [
      { icon: "target", title: "B2B leads for your agency", text: "664 verified leads from roofing business owners at $4.51 each, in the first half of a month, for an agency selling marketing to roofers.", slug: "roofing-agency-664-leads-4-51" },
      { icon: "shield", title: "Verified homeowner leads to resell", text: "1,024 OTP-verified roofing leads at $24 each for a pay-per-lead agency, holding a 1.63% CTR in a saturated market.", slug: "ppl-agency-1024-otp-verified-roofing-leads" },
      { icon: "zap", title: "AI-powered acquisition", text: "$546,000 in 67 days, 152 deals and 975 open conversations for a roofing marketing agency.", slug: "roofing-agency-546k-67-days" },
      { icon: "layers", title: "Done-with-you onboarding", text: "We audit your buyer journey inside Ads Manager and on your landing page, then realign ads, page and lead flow.", slug: "dwy-onboarding-roofing-agency-buyer-journey" },
    ],
  },
  proofTitle: "Results for roofing agencies",
  proofSlugs: ["roofing-agency-664-leads-4-51", "roofing-agency-546k-67-days", "ppl-agency-1024-otp-verified-roofing-leads"],
  process: [
    { title: "Audit", text: "We review your ad accounts, landing pages and lead flow and find what is leaking." },
    { title: "Segmentation", text: "We rebuild targeting around specific market segments and buyer psychology instead of broad interests." },
    { title: "Creative and copy", text: "Ad angles written for a skeptical audience: proof first, specific claims, no hype." },
    { title: "Verification", text: "Multi-step and OTP verification so every lead has a real, reachable phone number." },
    { title: "CRM and follow-up", text: "Leads sync to your CRM with automated SMS and email, ready for your sales team or your clients." },
    { title: "Scale", text: "Clear rules for when to launch, kill and scale ads, reviewed every week." },
  ],
  compare: {
    title: "Typical agency setup vs our system",
    intro: "The difference shows up in cost per lead and in refund requests.",
    bad: { title: "Typical setup", points: ["Broad interest targeting", "Raw form fills passed to clients", "Ads and pages built separately", "Scaling by gut feel"] },
    good: { title: "Our system", points: ["Segmented, intent-layered targeting", "Multi-step and OTP-verified leads", "Ads, page and follow-up built as one", "Launch, kill and scale rules tracked weekly"] },
  },
  guide: [
    {
      id: "segmentation",
      title: "Why segmentation lowers agency cost per lead",
      body: [
        "In a [private done-with-you session](/case-studies/private-dwy-mastermind-segmentation-framework) with a roofing agency owner, we walked through the market segmentation framework we use to keep roofing cost per lead in the $15–$20 range, and why many agencies are stuck paying $150–$200 per lead.",
        "The same approach produced [664 verified leads at $4.51](/case-studies/roofing-agency-664-leads-4-51) for an agency selling to roofing business owners, an audience that has been burned before and doesn't click on just anything.",
      ],
    },
    {
      id: "verification",
      title: "Verified leads protect your client relationships",
      body: [
        "For a [pay-per-lead agency](/case-studies/ppl-agency-1024-otp-verified-roofing-leads), every one of 1,024 leads was OTP-verified before delivery. Fewer fake numbers means fewer disputes with the roofers buying those leads. Read more about [verified roofing leads](/verified-roofing-leads).",
      ],
    },
  ],
  faqs: [
    { q: "Do you work with roofing marketing agencies?", a: "Yes. We build acquisition systems for agencies, both to win roofing clients for the agency and to generate the homeowner leads agencies deliver." },
    { q: "Do you work with pay-per-lead companies?", a: "Yes. One pay-per-lead agency client received 1,024 OTP-verified roofing leads at $24 each from $24,902 in ad spend." },
    { q: "Is this done for you or done with you?", a: "Both are possible. Some agencies hand us the campaigns; others work with us through done-with-you onboarding and private mastermind sessions." },
    { q: "Can you white-label the work?", a: "Tell us about your setup on a strategy call and we'll explain what is possible for your agency." },
  ],
  related: [
    { href: "/verified-roofing-leads", label: "Verified roofing leads", text: "OTP and multi-step verification" },
    { href: "/roofing-crm-automation", label: "Roofing CRM automation", text: "Follow-up that runs itself" },
    { href: "/privatemastermind", label: "Free mastermind training", text: "Audience segmentation for roofing ads" },
    { href: "/case-studies", label: "All case studies", text: "Every campaign, with the numbers" },
  ],
  formTitle: "Get a free agency growth breakdown",
};

export const verifiedLeads: LandingDoc = {
  slug: "verified-roofing-leads",
  path: "/verified-roofing-leads",
  title: "Verified Roofing Leads: OTP-Verified & Pre-Qualified Leads",
  description:
    "Roofing leads verified by one-time passcode and qualified before your team calls: 365 OTP-verified leads in Florida, 261 in 7 days, 1,024 for a PPL agency.",
  eyebrow: "Lead verification and qualification",
  h1: "Verified Roofing Leads: Real Homeowners, Confirmed Before Your Team Calls",
  intro:
    "A cheap lead with a fake number is the most expensive lead you can buy. We verify every roofing lead's phone number with a one-time passcode and run multi-step qualification, so your sales team only calls real homeowners.",
  heroPoints: ["OTP phone verification on every lead", "Multi-step qualification before the lead reaches you", "Synced to your CRM with instant follow-up"],
  serviceType: "Verified roofing lead generation",
  breadcrumb: "Verified Roofing Leads",
  stats: [
    { value: "365", label: "OTP-verified leads, 4 Florida locations", slug: "florida-365-otp-verified-leads-4-locations" },
    { value: "261", label: "OTP-verified leads in 7 days, new account", slug: "261-otp-verified-leads-7-days-new-account" },
    { value: "1,024", label: "OTP-verified leads for a PPL agency", slug: "ppl-agency-1024-otp-verified-roofing-leads" },
    { value: "$12.79", label: "Per validated lead (215 in 28 days)", slug: "215-validated-roofing-leads-12-79-cpl" },
  ],
  problems: {
    title: "What unverified roofing leads cost you",
    intro: "Raw form fills look cheap on a report. Your sales team knows the truth.",
    cards: [
      { icon: "phone", title: "Wrong and fake numbers", text: "Typos, fake numbers and accidental submits waste dials and morale." },
      { icon: "clock", title: "Hours of wasted calls", text: "Every bad lead is a call, a text and a voicemail that could have gone to a real homeowner." },
      { icon: "users", title: "Tyre-kickers", text: "Without qualifying questions, renters and price shoppers land on your calendar." },
      { icon: "wallet", title: "Misleading cost per lead", text: "A low cost per lead means nothing if half the leads can't be reached." },
    ],
  },
  features: {
    eyebrow: "How verification works",
    title: "Three filters between the ad and your sales team",
    intro: "Each card comes from a campaign that used it.",
    cards: [
      { icon: "shield", title: "OTP phone verification", text: "The homeowner confirms their number with a one-time code. 261 leads were verified this way in a brand-new account's first 7 days.", slug: "261-otp-verified-leads-7-days-new-account" },
      { icon: "layers", title: "Multi-step validation", text: "Leads pass several validation steps before delivery: 215 validated leads at $12.79 with a 2.33% CTR.", slug: "215-validated-roofing-leads-12-79-cpl" },
      { icon: "repeat", title: "Instant CRM routing", text: "Verified leads sync to GoHighLevel, get SMS and email nurture, then route to sales.", slug: "florida-365-otp-verified-leads-4-locations" },
      { icon: "target", title: "Pre-qualification", text: "Qualifying questions filter for real buyers: 635 pre-qualified leads in 45 days at $4–$6 each.", slug: "635-pre-qualified-roofing-leads-45-days" },
    ],
  },
  proofTitle: "Verified-lead campaigns",
  proofSlugs: ["florida-365-otp-verified-leads-4-locations", "261-otp-verified-leads-7-days-new-account", "ppl-agency-1024-otp-verified-roofing-leads", "215-validated-roofing-leads-12-79-cpl", "825-verified-roofing-leads-4-95-cpl"],
  process: PROCESS_BASE,
  compare: {
    title: "Raw form fills vs verified leads",
    intro: "Verified leads can cost a little more per lead and much less per booked inspection.",
    bad: { title: "Raw form fills", points: ["Any number accepted, real or not", "No qualifying questions", "Sit in an inbox until someone calls", "Low cost per lead, high cost per job"] },
    good: { title: "Verified leads", points: ["Phone confirmed with a one-time passcode", "Qualified before they reach your team", "Synced to your CRM with instant follow-up", "Your team calls real homeowners"] },
  },
  guide: [
    {
      id: "what-is-otp",
      title: "What is an OTP-verified roofing lead?",
      body: [
        "OTP stands for one-time passcode. After filling in the form, the homeowner receives a code by text and types it in. If they can't, the lead never reaches you. It is the simplest way to guarantee the number is real and reachable.",
        "In our [Florida campaign across 4 locations](/case-studies/florida-365-otp-verified-leads-4-locations), all 365 leads were OTP-verified at $19.50 each. A [pay-per-lead agency](/case-studies/ppl-agency-1024-otp-verified-roofing-leads) received 1,024 verified leads at $24 each.",
      ],
    },
    {
      id: "cost",
      title: "Do verified leads cost more?",
      body: [
        "Sometimes, per lead. But verified campaigns in our case studies range from [$4.95](/case-studies/825-verified-roofing-leads-4-95-cpl) to $24 per lead, and the real saving is in sales time. Compare costs across campaigns in our [cost per lead study](/blog/roofing-facebook-ads-cost-per-lead), and see why [shared leads](/blog/shared-vs-exclusive-roofing-leads) are rarely verified.",
      ],
    },
  ],
  faqs: [
    { q: "What does OTP-verified mean?", a: "The homeowner confirmed their phone number by entering a one-time passcode sent by text. Unverified submissions never reach your team." },
    { q: "Are verified leads more expensive?", a: "Sometimes slightly per lead. In our case studies, verified campaigns ranged from $4.95 to $24 per lead, depending on market and offer." },
    { q: "Do verified leads still need follow-up?", a: "Yes. Verification proves the number is real; fast follow-up turns the lead into an inspection. Our campaigns send an instant text and email." },
    { q: "Can you add verification to my existing ads?", a: "Usually yes. We add verification to your form or landing page and connect it to your CRM." },
  ],
  related: [
    { href: "/roofing-crm-automation", label: "Roofing CRM automation", text: "What happens after verification" },
    { href: "/roofing-leads-florida", label: "Roofing leads in Florida", text: "OTP-verified campaigns in Florida" },
    { href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive leads", text: "What you are really paying for" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "The full system you own" },
  ],
  formTitle: "Get verified leads in your market",
};

export const crmAutomation: LandingDoc = {
  slug: "roofing-crm-automation",
  path: "/roofing-crm-automation",
  title: "Roofing CRM & Follow-Up Automation (GoHighLevel, SMS, Email)",
  description:
    "CRM setup and automated follow-up for roofers: instant SMS and email, AI follow-up, appointment reminders and lead routing in GoHighLevel, with real results.",
  eyebrow: "CRM, AI follow-up and appointment reminders",
  h1: "Roofing CRM and Follow-Up Automation That Turns Leads Into Booked Inspections",
  intro:
    "Most roofing leads are lost after they come in, not before. We set up your CRM so every lead gets an instant text and email, AI follow-up, appointment reminders and routing to the right salesperson, automatically.",
  heroPoints: ["CRM setup and pipeline in GoHighLevel", "Instant SMS and email, AI follow-up and reminders", "Every lead tracked from ad to signed job"],
  serviceType: "CRM and marketing automation for roofing companies",
  breadcrumb: "Roofing CRM Automation",
  stats: [
    { value: "365", label: "Leads synced and nurtured automatically", slug: "florida-365-otp-verified-leads-4-locations" },
    { value: "975", label: "Open conversations in an agency pipeline", slug: "roofing-agency-546k-67-days" },
    { value: "34", label: "Installs in ~60 days with a follow-up system", slug: "dallas-roofer-127500-closed-34-installs" },
    { value: "$127.5K", label: "Closed by a Dallas roofer", slug: "dallas-roofer-127500-closed-34-installs" },
  ],
  problems: {
    title: "Where roofing leads go to die",
    intro: "The ad worked. The homeowner filled in the form. Then this happened.",
    cards: [
      { icon: "clock", title: "Called back too late", text: "By the time someone calls, the homeowner has booked another roofer." },
      { icon: "repeat", title: "One attempt, then nothing", text: "Most leads need several touches. Without automation, follow-up stops after the first missed call." },
      { icon: "layers", title: "Leads in five places", text: "Emails, spreadsheets, phones and inboxes. Nobody knows which leads were contacted." },
      { icon: "phone", title: "No-shows", text: "Without reminders, booked inspections quietly don't happen." },
    ],
  },
  features: {
    eyebrow: "What we set up",
    title: "Your follow-up, running 24/7",
    intro: "Built inside your CRM, connected to your ads and landing pages.",
    cards: [
      { icon: "zap", title: "Instant SMS and email", text: "Every new lead gets a text and email within minutes, day or night, with a link to book.", slug: "florida-365-otp-verified-leads-4-locations" },
      { icon: "repeat", title: "AI follow-up", text: "Automated, conversational follow-up keeps leads warm until they book or opt out.", slug: "roofing-agency-546k-67-days" },
      { icon: "clock", title: "Appointment reminders", text: "Text and email reminders before each inspection to cut no-shows." },
      { icon: "target", title: "Pipeline and routing", text: "Every lead moves through clear stages and routes to the right salesperson, so you can see cost per signed job.", slug: "dallas-roofer-127500-closed-34-installs" },
    ],
  },
  proofTitle: "Campaigns with automated follow-up",
  proofSlugs: ["florida-365-otp-verified-leads-4-locations", "dallas-roofer-127500-closed-34-installs", "roofing-agency-546k-67-days", "roofing-227-leads-14-cpl-28-days"],
  process: [
    { title: "Map your sales process", text: "We map how your team handles a lead today, from first call to signed contract." },
    { title: "Set up the CRM", text: "Pipeline stages, users, calendars and lead sources in GoHighLevel." },
    { title: "Connect your lead sources", text: "Ads, landing pages and forms sync leads into the CRM automatically." },
    { title: "Build follow-up", text: "Instant SMS and email, AI follow-up and multi-day nurture sequences." },
    { title: "Reminders and routing", text: "Appointment reminders and routing rules so the right person calls fast." },
    { title: "Track to the signed job", text: "Reporting from ad to inspection to contract, so you know what each job costs." },
  ],
  compare: {
    title: "Manual follow-up vs automated follow-up",
    intro: "Same leads, very different results.",
    bad: { title: "Manual", points: ["Callbacks when someone has time", "One or two attempts", "Leads scattered across inboxes", "No reminders, more no-shows"] },
    good: { title: "Automated", points: ["Text and email within minutes", "Persistent follow-up until they book or opt out", "Every lead in one pipeline", "Reminders before every inspection"] },
  },
  guide: [
    {
      id: "why",
      title: "Why follow-up decides your cost per job",
      body: [
        "Many roofing companies think their problem is getting more leads. In our [Florida campaign](/case-studies/florida-365-otp-verified-leads-4-locations), the difference was what happened after the lead came in: every lead was verified, synced instantly to GoHighLevel, nurtured by SMS and email, and routed to sales.",
        "In [Dallas](/case-studies/dallas-roofer-127500-closed-34-installs), the same kind of follow-up system sat behind $127,500 in closed deals and 34 installs in about 60 days. Read the full sequence in our [roofing lead follow-up guide](/blog/roofing-lead-follow-up).",
      ],
    },
  ],
  faqs: [
    { q: "Which CRM do you use?", a: "Our case studies use GoHighLevel. If you already use another CRM, tell us on the call and we'll explain the options." },
    { q: "What is AI follow-up?", a: "Automated follow-up that responds to leads and keeps the conversation going by text and email until they book an inspection or opt out." },
    { q: "Do I need your ads to use the CRM setup?", a: "The CRM and follow-up work best as part of the full system, but they can be set up for leads from your existing sources too." },
    { q: "Will this replace my sales team?", a: "No. It makes sure every lead is contacted fast and reminded, so your team spends its time on inspections and closing." },
  ],
  related: [
    { href: "/blog/roofing-lead-follow-up", label: "Lead follow-up guide", text: "The full speed-to-lead sequence" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads", text: "Filter before you follow up" },
    { href: "/roofing-landing-pages", label: "Roofing landing pages", text: "Where the leads come from" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "The full system you own" },
  ],
  formTitle: "Get a free follow-up audit",
};

export const replacementLeads: LandingDoc = {
  slug: "roof-replacement-leads",
  path: "/roof-replacement-leads",
  title: "Roof Replacement Leads for Roofing Companies Doing $1M+",
  description:
    "Exclusive roof replacement leads from ads you own: 34 installs and $127,500 closed in Dallas, 686 homeowner leads with a $0-down offer, 1,480 leads at $4.77.",
  eyebrow: "Roof replacement and installation leads",
  h1: "Roof Replacement Leads From Homeowners Ready to Invest, Not Price Shoppers",
  intro:
    "Repairs keep crews busy; replacements grow the business. We build offers, ads and follow-up aimed at homeowners planning a full replacement, so your pipeline fills with high-value projects.",
  heroPoints: ["Offers built for replacement buyers, including financing", "Exclusive leads under your brand", "Measured by installs and revenue, not just leads"],
  serviceType: "Roof replacement lead generation",
  breadcrumb: "Roof Replacement Leads",
  stats: [
    { value: "34", label: "Installs in about 60 days (Dallas)", slug: "dallas-roofer-127500-closed-34-installs" },
    { value: "$127.5K", label: "Closed roofing deals", slug: "dallas-roofer-127500-closed-34-installs" },
    { value: "686", label: "Homeowner leads with a $0-down offer", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
    { value: "1,480", label: "Leads at $4.77 over five months", slug: "1480-roofing-leads-4-77-cpl" },
  ],
  problems: {
    title: "Why replacement jobs are hard to win online",
    intro: "A replacement is a big decision. Generic ads don't respect that.",
    cards: [
      { icon: "wallet", title: "Price shock", text: "Homeowners hesitate at the cost. Without a payment option, many never reach out." },
      { icon: "users", title: "Repair-only leads", text: "\"Free inspection\" ads attract small repairs and insurance shoppers as often as replacements." },
      { icon: "building", title: "Trust gap", text: "Homeowners want proof you're established before they let you replace their roof." },
      { icon: "clock", title: "Long decisions", text: "Replacement buyers compare and wait. Without follow-up, they forget you." },
    ],
  },
  features: {
    eyebrow: "How we target replacements",
    title: "Built for high-value roofing projects",
    intro: "Each card comes from a campaign. Open it to read the case study.",
    cards: [
      { icon: "wallet", title: "Financing offers", text: "A $0-down, 0%-for-12-months offer produced 686 homeowner leads in 8 days at $5.31 each. Lender terms and disclosures required.", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
      { icon: "building", title: "Authority positioning", text: "Ads built around a Dallas company's reviews and local reputation: $127,500 closed and 34 installs.", slug: "dallas-roofer-127500-closed-34-installs" },
      { icon: "target", title: "Sustained volume", text: "Tested creatives, audiences and kill-and-scale rules held $4.77 per lead across 1,480 leads over five months.", slug: "1480-roofing-leads-4-77-cpl" },
      { icon: "repeat", title: "Follow-up for long decisions", text: "SMS and email nurture keeps replacement buyers warm while they compare quotes." },
    ],
  },
  proofTitle: "Replacement and install results",
  proofSlugs: ["dallas-roofer-127500-closed-34-installs", "texas-roofer-686-leads-8-days-0-down-offer", "1480-roofing-leads-4-77-cpl", "825-verified-roofing-leads-4-95-cpl"],
  process: PROCESS_BASE,
  compare: {
    title: "Generic roofing ads vs replacement-focused campaigns",
    intro: "Who you attract depends on what you offer.",
    bad: { title: "Generic ads", points: ["\"Free inspection\" for everyone", "Mixed repair and insurance shoppers", "Stock photos", "Judged on cost per lead"] },
    good: { title: "Replacement-focused", points: ["Offers built around the replacement decision", "Financing and authority messaging", "Real jobs, crews and reviews", "Judged on installs and revenue"] },
  },
  guide: [
    {
      id: "offer",
      title: "The offer matters more than the targeting",
      body: [
        "A Texas roofer had zero leads with a random offer. The next day we launched a $0-down, 0%-interest-for-12-months offer with messaging built around homeowners' real hesitations. Eight days later: [686 homeowner inquiries at $5.31 each](/case-studies/texas-roofer-686-leads-8-days-0-down-offer).",
        "Measure replacement campaigns by revenue. In [Dallas](/case-studies/dallas-roofer-127500-closed-34-installs), $127,500 closed and 34 installs came from positioning the company as one of the most trusted roofers in the area. See more in [roofing leads in Texas](/roofing-leads-texas).",
      ],
    },
  ],
  faqs: [
    { q: "Can you target only roof replacements?", a: "We build the offer, creative and qualifying questions around replacement buyers. Some repair inquiries still come in; qualification filters them before they reach your team." },
    { q: "Do financing offers work for roof replacements?", a: "In our Texas campaign, a $0-down, 0%-for-12-months offer produced 686 homeowner leads in 8 days. Financing offers require the lender's terms and the required disclosures." },
    { q: "How do you measure success?", a: "By booked inspections, installs and revenue, not just cost per lead. In Dallas, the campaign led to 34 installs and $127,500 closed in about 60 days." },
    { q: "Who is this for?", a: "Roofing companies doing $1M+ a year that want more high-value replacement projects." },
  ],
  related: [
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas", text: "Texas campaigns and results" },
    { href: "/roofing-ad-creatives", label: "Roofing ad creatives", text: "Offers and creative that convert" },
    { href: "/roofing-crm-automation", label: "Roofing CRM automation", text: "Follow-up for long decisions" },
    { href: "/case-studies", label: "All case studies", text: "Every campaign, with the numbers" },
  ],
  formTitle: "Get more replacement jobs",
};

export const adCreatives: LandingDoc = {
  slug: "roofing-ad-creatives",
  path: "/roofing-ad-creatives",
  title: "Roofing Ad Creatives & Offers That Get Clicks (Video, Image)",
  description:
    "Roofing video and image ads plus offer positioning for Meta, TikTok and YouTube Shorts, with click-through rates up to 3.79% in our roofing campaigns.",
  eyebrow: "Roofing ad creatives and offer positioning",
  h1: "Roofing Ad Creatives and Offers That Stop the Scroll and Get the Click",
  intro:
    "Creative is the biggest lever in paid social. We write the offer, the angles and the copy, and produce video, GIF and image ads from your real jobs for Meta, TikTok and YouTube Shorts.",
  heroPoints: ["Offer positioning that stands out from local competitors", "Video, GIF and image ads from your real work", "Tested weekly: keep winners, replace the rest"],
  serviceType: "Advertising creative for roofing companies",
  breadcrumb: "Roofing Ad Creatives",
  stats: [
    { value: "3.79%", label: "CTR, 850 leads in 8 days (Texas)", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "2.46%", label: "CTR held for 15 days (Florida)", slug: "florida-home-services-280-leads-15-days" },
    { value: "2.33%", label: "CTR, 215 validated leads", slug: "215-validated-roofing-leads-12-79-cpl" },
    { value: "2.17%", label: "CTR with a $0-down offer", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
  ],
  problems: {
    title: "Why most roofing ads get scrolled past",
    intro: "Homeowners see the same ad from every roofer in town.",
    cards: [
      { icon: "image", title: "Stock imagery", text: "Generic shingles and models signal \"ad\" instantly." },
      { icon: "repeat", title: "Same offer as everyone", text: "\"Free inspection\" is not an offer when every competitor says it." },
      { icon: "megaphone", title: "Selling roofs, not answers", text: "Homeowners have fears about cost, mess and trust. Ads that ignore them don't get clicks." },
      { icon: "clock", title: "Creative fatigue", text: "The same ad running for months gets more expensive every week." },
    ],
  },
  features: {
    eyebrow: "What we make",
    title: "Creative built from your real jobs",
    intro: "Each idea below comes from a campaign. Open a card to read it.",
    cards: [
      { icon: "wallet", title: "Offer positioning", text: "Switching to a $0-down financing offer took a Texas roofer from zero leads to 686 in 8 days.", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
      { icon: "film", title: "Video ads", text: "Short vertical videos from crews and jobs: one Texas campaign held a 3.79% CTR in a saturated market.", slug: "texas-850-roofing-leads-8-days-7-60" },
      { icon: "building", title: "Authority angles", text: "Ads built around a Dallas roofer's reviews and reputation instead of a generic offer.", slug: "dallas-roofer-127500-closed-34-installs" },
      { icon: "target", title: "Testing rules", text: "Clear rules for when to launch, kill and scale ads kept 1,480 leads at $4.77 each over five months.", slug: "1480-roofing-leads-4-77-cpl" },
    ],
  },
  proofTitle: "Campaigns driven by creative",
  proofSlugs: ["texas-850-roofing-leads-8-days-7-60", "texas-roofer-686-leads-8-days-0-down-offer", "florida-home-services-280-leads-15-days", "1480-roofing-leads-4-77-cpl"],
  process: [
    { title: "Market research", text: "Who your ideal homeowners are, what worries them and what competitors already say." },
    { title: "Offer positioning", text: "Package your service so it stands out, from financing to authority and guarantees." },
    { title: "Angles and copy", text: "Several messaging angles written to answer homeowners' real hesitations." },
    { title: "Production", text: "Video, GIF and image ads from your jobs, crews, drone footage and reviews." },
    { title: "Launch and test", text: "Run the angles against each other on Meta, TikTok and YouTube Shorts placements." },
    { title: "Keep winners", text: "Kill weak ads, scale the winners and refresh before fatigue sets in." },
  ],
  compare: {
    title: "Typical roofing ad vs our creative",
    intro: "Small differences in creative change cost per lead a lot.",
    bad: { title: "Typical", points: ["Stock photos", "\"Free inspection\" offer", "One ad running for months", "Talks about the roofer"] },
    good: { title: "Ours", points: ["Your real jobs and crews", "A specific offer homeowners act on", "Several angles tested every week", "Talks about the homeowner's worries"] },
  },
  guide: [
    {
      id: "ctr",
      title: "Why click-through rate matters",
      body: [
        "On Meta, ads with a higher click-through rate usually get cheaper clicks and cheaper leads. Most of our lowest-cost roofing campaigns held a CTR above 2%, and the [Texas 850-lead campaign](/case-studies/texas-850-roofing-leads-8-days-7-60) reached 3.79%. See the full numbers in our [cost per lead study](/blog/roofing-facebook-ads-cost-per-lead).",
        "Where the ads run matters too. Learn how creative works across placements in [Instagram ads for roofers](/instagram-ads-for-roofers) and [Facebook ads for roofers](/facebook-ads-for-roofers).",
      ],
    },
  ],
  faqs: [
    { q: "Do you make the creatives or do I?", a: "We do. We plan the angles and produce the ads, using footage and photos of your real jobs, crews and reviews where possible." },
    { q: "Which platforms are the creatives for?", a: "Meta (Facebook and Instagram) first, with vertical formats that also run on TikTok and YouTube Shorts." },
    { q: "How often do you refresh ads?", a: "We review performance weekly and replace weak ads before fatigue raises your costs." },
    { q: "What is offer positioning?", a: "Packaging your service so homeowners have a specific reason to choose you now, for example a financing offer or an authority angle built on your reviews." },
  ],
  related: [
    { href: "/instagram-ads-for-roofers", label: "Instagram ads for roofers", text: "Reels, Stories and Feed" },
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers", text: "The full Meta ads system" },
    { href: "/roofing-landing-pages", label: "Roofing landing pages", text: "Where the click lands" },
    { href: "/roof-replacement-leads", label: "Roof replacement leads", text: "Offers for high-value jobs" },
  ],
  formTitle: "Get free ad angles for your market",
};

export const landingPages: LandingDoc = {
  slug: "roofing-landing-pages",
  path: "/roofing-landing-pages",
  title: "Roofing Landing Pages & Funnels That Book Inspections",
  description:
    "Landing pages and funnels for roofing companies, matched to your ads and connected to your CRM: 850 website leads in 8 days through a client's own funnel.",
  eyebrow: "Roofing landing pages and sales funnels",
  h1: "Roofing Landing Pages and Funnels That Turn Clicks Into Booked Inspections",
  intro:
    "A great ad sent to a slow, generic page wastes money. We build landing pages and funnels that match each ad's offer, qualify the homeowner and send every lead straight into your CRM.",
  heroPoints: ["One page per offer, matched to the ad", "Qualifying questions and phone verification built in", "Connected to your CRM and follow-up"],
  serviceType: "Landing page and funnel design for roofing companies",
  breadcrumb: "Roofing Landing Pages",
  stats: [
    { value: "850", label: "Website leads in 8 days via the client's funnel", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "$7.60", label: "Per website lead", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "215", label: "Validated leads: \"the funnel does the work\"", slug: "215-validated-roofing-leads-12-79-cpl" },
    { value: "$12.79", label: "Per validated lead", slug: "215-validated-roofing-leads-12-79-cpl" },
  ],
  problems: {
    title: "Where roofing funnels leak",
    intro: "Most lost leads never make it past the page.",
    cards: [
      { icon: "repeat", title: "Ad and page don't match", text: "The ad promises one thing; the page talks about another. Visitors leave." },
      { icon: "building", title: "No trust signals", text: "No reviews, no real photos, no proof. Homeowners don't fill in the form." },
      { icon: "clock", title: "Slow and long", text: "Slow pages and long forms on mobile kill conversions." },
      { icon: "layers", title: "Leads go nowhere", text: "Form submissions land in an inbox instead of a CRM with instant follow-up." },
    ],
  },
  features: {
    eyebrow: "What we build",
    title: "Pages built to convert and qualify",
    intro: "Each card comes from client work. Open it to read the case study.",
    cards: [
      { icon: "zap", title: "Offer-matched pages", text: "850 website leads in 8 days through the client's own funnel, at $7.60 each.", slug: "texas-850-roofing-leads-8-days-7-60" },
      { icon: "shield", title: "Built-in validation", text: "Every lead passed multi-step validation before reaching the client: 215 validated leads at $12.79.", slug: "215-validated-roofing-leads-12-79-cpl" },
      { icon: "building", title: "Trust and conversion fixes", text: "In onboarding sessions we find trust and conversion leaks on the landing page and realign ad, page and lead flow.", slug: "dwy-onboarding-roofing-agency-buyer-journey" },
      { icon: "layers", title: "Proven structures", text: "The page structures converting for our roofing clients, broken down in a private mastermind.", slug: "private-mastermind-roofing-agency-session" },
    ],
  },
  proofTitle: "Funnel-driven results",
  proofSlugs: ["texas-850-roofing-leads-8-days-7-60", "215-validated-roofing-leads-12-79-cpl", "roofing-227-leads-14-cpl-28-days", "825-verified-roofing-leads-4-95-cpl"],
  process: [
    { title: "Offer and angle", text: "Each page starts from the offer and angle of the ad that sends traffic to it." },
    { title: "Wireframe", text: "Headline, proof, offer, form: the structure that works for roofing homeowners." },
    { title: "Design and build", text: "Fast, mobile-first pages with your real jobs, reviews and branding." },
    { title: "Qualification", text: "Short qualifying questions and phone verification inside the form." },
    { title: "CRM connection", text: "Every submission syncs to your CRM and triggers instant follow-up." },
    { title: "Test and improve", text: "Track conversion rate and cost per booked inspection, then test improvements." },
  ],
  compare: {
    title: "Website contact page vs a dedicated funnel",
    intro: "Sending ad traffic to your homepage is the most common leak.",
    bad: { title: "Homepage or contact page", points: ["Many links, no single action", "Generic message for every visitor", "Long contact form", "Submissions in an inbox"] },
    good: { title: "Dedicated funnel", points: ["One offer, one action", "Message matches the ad exactly", "Short form with qualifying questions", "Straight into your CRM with follow-up"] },
  },
  guide: [
    {
      id: "match",
      title: "Why the page must match the ad",
      body: [
        "When the page repeats the ad's offer, proof and wording, visitors know they're in the right place. In our [215-lead campaign](/case-studies/215-validated-roofing-leads-12-79-cpl), the funnel and offer did the work: 2.33% CTR on the ad, validated leads at $12.79.",
        "What happens after the form is just as important. See [roofing CRM automation](/roofing-crm-automation) and the [lead follow-up guide](/blog/roofing-lead-follow-up).",
      ],
    },
  ],
  faqs: [
    { q: "Do you build the landing pages?", a: "Yes. We design and build the pages and funnels, matched to each ad's offer and connected to your CRM." },
    { q: "Can I use my existing website?", a: "Your website stays. Ad traffic goes to dedicated pages because they convert better than a homepage with many links." },
    { q: "Do the pages qualify leads?", a: "Yes. Short qualifying questions and phone verification are built into the form." },
    { q: "How do you measure a landing page?", a: "By conversion rate and cost per booked inspection, not just page views." },
  ],
  related: [
    { href: "/roofing-ad-creatives", label: "Roofing ad creatives", text: "The ads that send the traffic" },
    { href: "/roofing-crm-automation", label: "Roofing CRM automation", text: "What happens after the form" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads", text: "Verification inside the funnel" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "The full system you own" },
  ],
  formTitle: "Get a free funnel review",
};

export const landings = [instagramAds, texasLeads, floridaLeads, agencyLeads, verifiedLeads, crmAutomation, replacementLeads, adCreatives, landingPages];
