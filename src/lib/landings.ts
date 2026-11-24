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
  stats: { value: string; label: string; slug?: string; href?: string; source?: string }[];
  problems: { title: string; intro: string; cards: { icon: IconName; title: string; text: string }[] };
  features: { eyebrow: string; title: string; intro: string; cards: { icon: IconName; title: string; text: string; slug?: string }[] };
  proofTitle: string;
  /** Optional text under the proof heading; defaults to the gallery hint. */
  proofIntro?: string;
  proofSlugs: string[];
  process: { title: string; text: string }[];
  compare: { title: string; intro: string; bad: { title: string; points: string[] }; good: { title: string; points: string[] } };
  guide: { id: string; title: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string; text: string }[];
  /** Optional text under the "Keep reading" heading. */
  relatedIntro?: string;
  /** Page schema type. Defaults to Service. */
  schema?: "Service" | "Article";
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
      id: "targeting",
      title: "How to target homeowners with Instagram ads",
      body: [
        "Start with geography: the ZIP codes, counties or radius you actually serve, so every lead is a job your crews can reach. Inside that area, Meta's delivery now leans heavily on the creative to find the right homeowners, so a clear roofing offer and real-job video do more of the targeting than long interest lists.",
        "Your own customer data helps too. A list of past customers and estimates can seed an audience of similar homeowners, which is the approach behind our [customer-data audience case study](/case-studies/roofing-offer-customer-data-audience). And when many advertisers said Meta's Andromeda update had broken their ads, one roofing campaign produced [537 qualified leads at $4.27 in 13 days](/case-studies/537-qualified-leads-13-days-andromeda-update). For the creative side, see [roofing ad creatives](/roofing-ad-creatives).",
      ],
    },
    {
      id: "forms",
      title: "Instagram lead forms or a landing page?",
      body: [
        "Instagram instant forms open inside the app and are quick to fill in, so they usually bring more leads at a lower cost, but with more people who were only curious. A landing page asks a little more of the homeowner and gives you room for proof, qualifying questions and phone verification, so the leads are usually stronger.",
        "Many roofing campaigns test both. Whichever you use, verify the phone number and send every lead straight into your CRM with an instant reply. See [roofing landing pages](/roofing-landing-pages), [verified roofing leads](/verified-roofing-leads) and [roofing CRM automation](/roofing-crm-automation).",
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
    { q: "What targeting works for roofing ads on Instagram?", a: "Target the ZIP codes, counties or radius you serve, then let a clear offer and real-job video find the right homeowners inside that area. Your past customer and estimate lists can also seed audiences of similar homeowners." },
    { q: "Should I use Instagram lead forms or a landing page?", a: "Instant forms usually bring more leads at a lower cost, while a landing page with qualifying questions and phone verification usually brings stronger leads. Many roofers test both and judge them on booked inspections." },
    { q: "Do Instagram Reels ads work for roofers?", a: "Yes. Reels give vertical video the full screen, which suits crew footage, drone shots, before and after reveals and the owner explaining the offer. They run in the same Meta campaign as Facebook and Stories placements." },
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
    "Exclusive roofing leads for Texas roofers from ads you own: 686 leads in 8 days at $5.31, $127,500 closed in Dallas and $77,100 won in 30 days.",
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
    "texas-roofer-77k-closed-30-days",
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
        "A second Texas roofing company won [$77,100 in revenue in 30 days](/case-studies/texas-roofer-77k-closed-30-days) from Meta ads and a dedicated roofing funnel, with 164 opportunities and 19 marked won in the CRM.",
        "What made the difference was positioning the company as one of the most trusted roofers in Dallas from the first second of the ad, then a structured offer and follow-up system behind it. See how follow-up works in our [lead follow-up guide](/blog/roofing-lead-follow-up).",
      ],
    },
    {
      id: "metros",
      title: "Roofing leads in Dallas, Houston, Austin and San Antonio",
      body: [
        "Texas is not one market. Dallas–Fort Worth, Houston, Austin and San Antonio each have their own competitors, home values and storm history, so we build a separate campaign, audience and landing page for each metro you serve. Budget then follows the areas where you have crews and the best close rate, instead of spreading thin across the whole state.",
        "Each metro page leads with local proof: your reviews, your finished roofs in that area and an offer that fits local demand. That is the approach behind [the Dallas campaign that closed $127,500](/case-studies/dallas-roofer-127500-closed-34-installs). Campaigns can also target individual counties, ZIP codes or a radius around your office.",
      ],
    },
    {
      id: "season",
      title: "When Texas roofing demand peaks: hail season and Gulf storms",
      body: [
        "Texas roofing demand rises with spring hail, which often hits North and Central Texas from about March to June, and again along the Gulf Coast during the Atlantic hurricane season (1 June to 30 November). After a storm, every roofer in the area increases ad spend at once, so a ready campaign and a clear offer matter more than a bigger budget. See how we run [storm damage leads](/storm-damage-leads) campaigns.",
        "Between storms, replacement demand keeps going: older roofs, home sales and financing offers. The $0-down offer that produced [686 leads in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) did not depend on a storm. Our [roof replacement leads](/roof-replacement-leads) page covers that year-round approach, and [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost) explains what to budget.",
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
    { q: "Can you run separate campaigns for Dallas, Houston, Austin and San Antonio?", a: "Yes. Each metro gets its own campaign, audience and landing page, so you can put budget where you have crews and see the cost per lead and booked inspections for each area." },
    { q: "When is the best time to run roofing ads in Texas?", a: "Year-round, with extra budget after hail or wind events. Spring hail season and the Gulf hurricane season bring spikes, while replacement and financing offers keep leads coming between storms." },
    { q: "Do Texas roofing leads turn into signed jobs?", a: "In our Texas case studies, a Dallas roofer closed $127,500 and 34 installs in about 60 days, and another Texas company won $77,100 in revenue in 30 days, with 19 opportunities marked won." },
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
    "Exclusive, phone-verified roofing leads for Florida roofers: $111,200 won in 31 days and 295 verified leads across Miami, Tampa and Orlando.",
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
    { value: "$111.2K", label: "Won in 31 days, 26 jobs (Florida)", slug: "florida-roofer-111k-31-days" },
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
    "florida-roofer-111k-31-days",
    "florida-295-verified-roofing-leads-miami-tampa-orlando",
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
      id: "cities",
      title: "Roofing leads in Miami, Tampa and Orlando",
      body: [
        "Florida buyers trust local roofers, so a statewide ad rarely works as well as a local one. For one client we built [hyper-local funnels for Miami, Tampa and Orlando](/case-studies/florida-295-verified-roofing-leads-miami-tampa-orlando), each with its own page and OTP-verified lead capture. The three campaigns ran side by side and produced 295 verified leads from $6,662 of ad spend, at $22.58 per lead.",
        "The same structure works for Jacksonville, Fort Lauderdale, West Palm Beach or any area you serve: one campaign and one page per market, with your reviews and local jobs on the page.",
      ],
    },
    {
      id: "results",
      title: "From verified leads to signed Florida roofs",
      body: [
        "Verified leads only matter if they close. A Florida roofing company we signed in the first week of January won [$111,200 in revenue in 31 days](/case-studies/florida-roofer-111k-31-days), with 142 opportunities and 26 won in the CRM. Before any ads ran, we rebuilt the system behind them: offer, funnel, CRM and follow-up.",
      ],
    },
    {
      id: "season",
      title: "Hurricane season and year-round demand in Florida",
      body: [
        "The Atlantic hurricane season runs from 1 June to 30 November, and storm damage brings sudden spikes in roofing searches and in the number of roofers advertising. A campaign that is already running, with verification and instant follow-up, can respond in days instead of weeks. See how we run [storm damage leads](/storm-damage-leads).",
        "Outside storm events, Florida demand comes from ageing roofs, tile and flat roof replacement and homeowners preparing before the season. Replacement campaigns keep the calendar full between storms: see [roof replacement leads](/roof-replacement-leads), the [Facebook ads for roofers](/facebook-ads-for-roofers) system behind these campaigns, and [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost).",
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
    { q: "Can you run separate campaigns for Miami, Tampa and Orlando?", a: "Yes. One Florida campaign used separate hyper-local funnels for Miami, Tampa and Orlando with OTP-verified lead capture and produced 295 verified leads from $6,662 of ad spend." },
    { q: "Do Florida roofing leads turn into signed jobs?", a: "In one Florida case study, a roofing company won $111,200 in revenue in 31 days, with 142 opportunities and 26 marked won in the CRM." },
    { q: "When should Florida roofers run ads?", a: "Year-round. Hurricane season (1 June to 30 November) brings storm spikes, while replacement and pre-season offers keep leads coming between storms." },
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
  title: "Verified Roofing Leads vs \"Guaranteed\" Leads: OTP-Verified",
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
  proofSlugs: ["florida-365-otp-verified-leads-4-locations", "448-otp-verified-roofing-leads-20-10-cpl", "florida-295-verified-roofing-leads-miami-tampa-orlando", "261-otp-verified-leads-7-days-new-account", "ppl-agency-1024-otp-verified-roofing-leads", "825-verified-roofing-leads-4-95-cpl"],
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
      id: "how",
      title: "How to verify roofing leads before your team calls",
      body: [
        "**1. Verify the phone number.** The form sends a one-time passcode by text, and only homeowners who enter it become leads. That removes typos, fake numbers and accidental submits.",
        "**2. Ask qualifying questions.** Short questions on homeownership, roof age, damage and timeline separate real buyers from renters and price shoppers, without making the form long.",
        "**3. Check it in the CRM.** Every verified lead lands in your CRM, is checked for duplicates and gets an instant text and email, so your team calls a warm, confirmed homeowner. See [roofing CRM automation](/roofing-crm-automation).",
        "This is how one campaign delivered [448 OTP-verified roofing leads at $20.10 in 14 days](/case-studies/448-otp-verified-roofing-leads-20-10-cpl), and how [hyper-local funnels for Miami, Tampa and Orlando](/case-studies/florida-295-verified-roofing-leads-miami-tampa-orlando) produced 295 verified leads at $22.58.",
      ],
    },
    {
      id: "verified-qualified-exclusive",
      title: "Verified vs qualified vs exclusive roofing leads",
      body: [
        "**Verified** means the contact details are real: the phone number was confirmed with a one-time passcode. **Qualified** means the homeowner matches what you sell: they own the home, need roofing work and have a timeline. **Exclusive** means nobody else receives the lead. The best roofing leads are all three, which is what campaigns run under your own brand deliver.",
        "Pay-per-lead agencies use the same verification for the homeowner leads they deliver to their clients: see [lead generation for roofing agencies](/lead-generation-for-roofing-agencies). The ads behind these campaigns are explained in [Facebook ads for roofers](/facebook-ads-for-roofers).",
      ],
    },
    {
      id: "guaranteed",
      title: "Guaranteed roofing leads: what the guarantee really covers",
      body: [
        "\"Guaranteed roofing leads\" usually means the seller will credit or replace a lead with a wrong number or a duplicate. It doesn't guarantee the homeowner is ready to buy. Verification solves the same problem at the source: unverified numbers never reach you, so there is nothing to refund. Compare lead types in [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
      ],
    },
    {
      id: "cost",
      title: "Do verified leads cost more?",
      body: [
        "Sometimes, per lead. But verified campaigns in our case studies range from [$4.95](/case-studies/825-verified-roofing-leads-4-95-cpl) to $24 per lead, and the real saving is in sales time. Compare costs across campaigns in our [cost per lead study](/blog/roofing-facebook-ads-cost-per-lead), and see why [shared leads](/blog/shared-vs-exclusive-roofing-leads) are rarely verified. For a full budget breakdown, see [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost).",
      ],
    },
  ],
  faqs: [
    { q: "Are there guaranteed roofing leads?", a: "Some sellers advertise guaranteed roofing leads, usually meaning they replace leads with bad contact details. Nobody can guarantee a homeowner will buy. What we can do is verify every phone number with a one-time passcode and qualify the lead before it reaches you, and our work is backed by a 90-day written agreement." },
    { q: "What does OTP-verified mean?", a: "The homeowner confirmed their phone number by entering a one-time passcode sent by text. Unverified submissions never reach your team." },
    { q: "Are verified leads more expensive?", a: "Sometimes slightly per lead. In our case studies, verified campaigns ranged from $4.95 to $24 per lead, depending on market and offer." },
    { q: "Do verified leads still need follow-up?", a: "Yes. Verification proves the number is real; fast follow-up turns the lead into an inspection. Our campaigns send an instant text and email." },
    { q: "Can you add verification to my existing ads?", a: "Usually yes. We add verification to your form or landing page and connect it to your CRM." },
    { q: "How do you verify roofing leads?", a: "In three steps: the homeowner confirms their phone number with a one-time passcode, answers short qualifying questions on ownership, roof and timeline, and the lead is checked and followed up in your CRM within minutes." },
    { q: "What is the difference between verified and qualified roofing leads?", a: "A verified lead has real, confirmed contact details. A qualified lead also matches what you sell: a homeowner who needs roofing work and has a timeline. The best leads are both, and exclusive to your company." },
    { q: "Are verified roofing leads exclusive?", a: "With our system, yes. Campaigns run under your company name, so every verified homeowner is contacting your company and the lead is never shared or resold." },
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
  title: "Roofing CRM Setup & Follow-Up Automation (GoHighLevel)",
  description:
    "CRM setup and automated follow-up for roofers: instant SMS and email, AI follow-up, appointment reminders and lead routing in GoHighLevel, with real results.",
  eyebrow: "Roofing CRM, AI follow-up and reminders",
  h1: "A Roofing CRM With Follow-Up Automation That Turns Leads Into Booked Inspections",
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
  proofSlugs: ["florida-roofer-111k-31-days", "texas-roofer-77k-closed-30-days", "florida-365-otp-verified-leads-4-locations", "dallas-roofer-127500-closed-34-installs", "roofing-agency-546k-67-days"],
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
    {
      id: "track",
      title: "What a roofing CRM should track",
      body: [
        "A roofing CRM should show every lead as a stage in one pipeline: new lead, contacted, inspection booked, estimate sent, won or lost. Each lead should also carry its source (which ad, page or referral it came from), so you can see cost per inspection and cost per signed job, not just cost per lead.",
        "That is what the dashboards in our case studies show. For a Texas roofing company, the CRM tracked [164 opportunities, a $582,600 pipeline and $77,100 in won revenue in 30 days](/case-studies/texas-roofer-77k-closed-30-days). For a Florida roofing company, it showed [142 opportunities, 26 won and $111,200 in won revenue in 31 days](/case-studies/florida-roofer-111k-31-days), with a $511,200 pipeline.",
      ],
    },
    {
      id: "automations",
      title: "Roofing CRM automations that save the most time",
      body: [
        "**Instant first reply.** A text and email within minutes of the form, day or night, with a link to book.",
        "**Appointment reminders.** A confirmation when the inspection is booked, a reminder the day before and another on the morning, with an easy way to reschedule.",
        "**Estimate follow-up.** A short sequence after every estimate, so homeowners comparing quotes hear from you again before they decide.",
        "**Old estimate reactivation.** A seasonal message to past estimates that never signed, which costs nothing in ad spend.",
        "**Routing and alerts.** Each new lead goes to the right salesperson, with an alert so nobody waits for a callback. The leads themselves can come from [Facebook ads for roofers](/facebook-ads-for-roofers), [verified roofing leads](/verified-roofing-leads) campaigns or your existing sources, and [roofing contractor marketing](/roofing-marketing) ties it all together.",
      ],
    },
  ],
  faqs: [
    { q: "What is the best CRM for roofing companies?", a: "The best roofing CRM is the one your team actually uses, connected to your lead sources with automatic follow-up. Our case studies use GoHighLevel because it combines the pipeline, SMS, email, calendars and automations in one place." },
    { q: "Which CRM do you use?", a: "Our case studies use GoHighLevel. If you already use another CRM, tell us on the call and we'll explain the options." },
    { q: "What is AI follow-up?", a: "Automated follow-up that responds to leads and keeps the conversation going by text and email until they book an inspection or opt out." },
    { q: "Do I need your ads to use the CRM setup?", a: "The CRM and follow-up work best as part of the full system, but they can be set up for leads from your existing sources too." },
    { q: "What should a roofing CRM track?", a: "Every lead as a stage in one pipeline (new, contacted, inspection booked, estimate sent, won or lost) plus the source of each lead, so you can see cost per inspection and cost per signed job." },
    { q: "Can a CRM follow up on old roofing estimates?", a: "Yes. An automated sequence can reach past estimates that never signed with a seasonal message or offer, which can bring back jobs without extra ad spend." },
    { q: "How do I see which ads produce signed roofing jobs?", a: "Tag every lead with its source when it enters the CRM and move it through the pipeline to won or lost. Our case study dashboards track opportunities, pipeline value and won revenue this way." },
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
  title: "Roof Replacement & Residential Roofing Leads for $1M+ Roofers",
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
  proofSlugs: ["dallas-roofer-127500-closed-34-installs", "florida-roofer-111k-31-days", "texas-roofer-77k-closed-30-days", "texas-roofer-686-leads-8-days-0-down-offer", "1480-roofing-leads-4-77-cpl"],
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
    {
      id: "how-to-get",
      title: "How to get roof replacement leads",
      body: [
        "**1. Lead with a replacement offer, not a free inspection.** Financing, a clear warranty or a specific replacement package attracts homeowners who are planning a new roof, while a generic inspection offer attracts small repairs.",
        "**2. Show proof that you are established.** Use your reviews, finished roofs and crews in the ads, and make the landing page match the ad. See [roofing ad creatives](/roofing-ad-creatives) and the [Facebook ads for roofers](/facebook-ads-for-roofers) system behind them.",
        "**3. Qualify before you call.** Ask about homeownership, roof age, the type of work and timeline, and verify the phone number, so your estimators spend time on real replacement buyers. See [verified roofing leads](/verified-roofing-leads).",
        "**4. Follow up for weeks, not hours.** Replacement buyers compare quotes. Automated text and email keep you in front of them until they decide: see [roofing CRM automation](/roofing-crm-automation).",
      ],
    },
    {
      id: "won-revenue",
      title: "From residential roofing leads to won revenue",
      body: [
        "Lead counts do not pay for crews; signed roofs do. In the first 31 days with a new Florida client, the CRM showed [$111,200 in won revenue](/case-studies/florida-roofer-111k-31-days) with 26 opportunities won. A Texas roofing company won [$77,100 in 30 days](/case-studies/texas-roofer-77k-closed-30-days) from Meta ads and a dedicated roofing funnel. In both cases the system was set up to track every lead from first click to won job.",
        "To budget for replacement campaigns, compare your average job value with the cost per lead and close rate you can expect: see [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost).",
      ],
    },
  ],
  faqs: [
    { q: "Can you target only roof replacements?", a: "We build the offer, creative and qualifying questions around replacement buyers. Some repair inquiries still come in; qualification filters them before they reach your team." },
    { q: "Do financing offers work for roof replacements?", a: "In our Texas campaign, a $0-down, 0%-for-12-months offer produced 686 homeowner leads in 8 days. Financing offers require the lender's terms and the required disclosures." },
    { q: "How do you measure success?", a: "By booked inspections, installs and revenue, not just cost per lead. In Dallas, the campaign led to 34 installs and $127,500 closed in about 60 days." },
    { q: "Do you generate residential roofing leads?", a: "Yes. Our campaigns target homeowners for residential shingle, metal and replacement work, with qualifying questions to filter out small repairs when you want replacements." },
    { q: "How do I get more roof replacement leads?", a: "Use a replacement offer such as financing instead of a generic free inspection, show your reviews and real jobs in the ads, qualify leads on roof age and timeline, and follow up for several weeks while homeowners compare quotes." },
    { q: "What questions qualify a roof replacement lead?", a: "Whether they own the home, how old the roof is, what type of work they need, and when they want it done. A verified phone number confirms the lead is real before your team calls." },
    { q: "Do replacement leads turn into signed jobs?", a: "In our case studies, a Dallas roofer closed $127,500 and 34 installs in about 60 days, a Florida roofing company won $111,200 in 31 days, and a Texas roofing company won $77,100 in 30 days." },
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
  title: "Roofing Ads That Get Clicks: Creatives, Video & Offers",
  description:
    "Roofing video and image ads plus offer positioning for Meta, TikTok and YouTube Shorts, with click-through rates up to 3.79% in our roofing campaigns.",
  eyebrow: "Roofing ads and creatives",
  h1: "Roofing Ads and Creatives That Stop the Scroll and Get the Click",
  intro:
    "Creative is the biggest lever in paid social. We write the offer, the angles and the copy, and produce video, GIF and image ads from your real jobs for Meta, TikTok and YouTube Shorts.",
  heroPoints: ["Offer positioning that stands out from local competitors", "Video, GIF and image ads from your real work", "Tested weekly: keep winners, replace the rest"],
  serviceType: "Advertising creative for roofing companies",
  breadcrumb: "Roofing Ads",
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
    {
      id: "examples",
      title: "Roofing ad examples that work",
      body: [
        "**Financing offer.** A clear payment offer answers the biggest objection to a new roof. A $0-down, 0%-for-12-months offer took a Texas roofer from zero leads to [686 leads in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer). Lender terms and disclosures are required.",
        "**Local authority.** Ads built around your Google reviews, years in business and finished roofs in the area. That angle was behind [$127,500 closed and 34 installs in Dallas](/case-studies/dallas-roofer-127500-closed-34-installs).",
        "**Before and after.** A short vertical video or carousel of one real job, from the old roof to the finished one, filmed by your crew on a phone.",
        "**Owner to camera.** The owner explains the offer in under 30 seconds. It builds trust that stock footage cannot.",
        "**Storm and seasonal.** After a hail or wind event, an ad that names the affected area and offers a fast inspection. See [storm damage leads](/storm-damage-leads).",
        "More ideas, including referral, review and retargeting campaigns, are in [roofing advertising ideas](/blog/roofing-advertising-ideas).",
      ],
    },
    {
      id: "cost",
      title: "How much do roofing ads cost?",
      body: [
        "You set the budget; the creative decides how far it goes. Across our published roofing campaigns, cost per lead ranged from $3.75 to $24, and most of the lowest-cost campaigns held a click-through rate above 2%. A campaign that held [$4.77 per lead across 1,480 leads](/case-studies/1480-roofing-leads-4-77-cpl) did it with clear rules for launching, killing and scaling ads.",
        "For a full breakdown of what to budget, see [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost), and for the wider picture of where leads come from, read [how to get roofing leads](/blog/how-to-get-roofing-leads).",
      ],
    },
  ],
  faqs: [
    { q: "Do you make the creatives or do I?", a: "We do. We plan the angles and produce the ads, using footage and photos of your real jobs, crews and reviews where possible." },
    { q: "Which platforms are the creatives for?", a: "Meta (Facebook and Instagram) first, with vertical formats that also run on TikTok and YouTube Shorts." },
    { q: "How often do you refresh ads?", a: "We review performance weekly and replace weak ads before fatigue raises your costs." },
    { q: "What are the best roofing ads?", a: "Ads with a specific offer, such as financing, and real proof, such as your reviews, finished roofs and crew. In our campaigns, financing and local authority angles produced the strongest results, with click-through rates up to 3.79%." },
    { q: "How much do roofing ads cost?", a: "You choose the budget. Across our published roofing campaigns, cost per lead ranged from $3.75 to $24, depending on the market, the offer and the creative." },
    { q: "Do video ads work for roofers?", a: "Yes. Short vertical videos of real jobs, crews and the owner explaining the offer run across Facebook, Instagram Reels, TikTok and YouTube Shorts. One Texas campaign built on short videos from crews and jobs held a 3.79% click-through rate." },
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
  title: "Roofing Websites and Landing Pages That Convert",
  description:
    "Roofing website design and landing pages built to turn ad clicks into booked inspections. See what the best roofing websites do differently.",
  eyebrow: "Roofing websites, landing pages and funnels",
  h1: "Roofing Websites and Landing Pages That Turn Clicks Into Inspections",
  intro:
    "A great ad sent to a slow, generic page wastes money. We build landing pages and funnels that match each ad's offer, qualify the homeowner and send every lead straight into your CRM.",
  heroPoints: ["One page per offer, matched to the ad", "Qualifying questions and phone verification built in", "Connected to your CRM and follow-up"],
  serviceType: "Roofing website design",
  breadcrumb: "Roofing Landing Pages",
  stats: [
    { value: "850", label: "Website leads in 8 days via the client's funnel", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "$7.60", label: "Per website lead", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "215", label: "Validated leads: \"the funnel does the work\"", slug: "215-validated-roofing-leads-12-79-cpl" },
    { value: "$12.79", label: "Per validated lead", slug: "215-validated-roofing-leads-12-79-cpl" },
  ],
  problems: {
    title: "Where roofing funnels leak",
    intro: "Most roofing websites look fine and still lose leads. Each leak costs you inspections you already paid for.",
    cards: [
      { icon: "phone", title: "Hard to call on mobile", text: "The phone number is hard to tap on a phone, so the homeowner gives up before they reach you." },
      { icon: "layers", title: "Too many questions", text: "The form asks too many questions, and visitors leave halfway through." },
      { icon: "clock", title: "Slow pages", text: "Pages load slowly, and paid visitors leave before they see the offer." },
      { icon: "repeat", title: "Ad and page don't match", text: "The ad promises one thing while the page talks about something else." },
    ],
  },
  features: {
    eyebrow: "What we build",
    title: "Pages built to convert and qualify",
    intro: "**What the best roofing websites have in common:** fast loading, a clear phone number, local service area pages, real job photos, Google reviews, financing information and a simple quote form. These are the features we build into every roofing website design.",
    cards: [
      { icon: "zap", title: "One offer per page", text: "Free inspection, storm damage check or replacement quote.", slug: "texas-850-roofing-leads-8-days-7-60" },
      { icon: "phone", title: "Mobile first", text: "Tap-to-call, short forms and fast loading on any phone.", slug: "private-mastermind-roofing-agency-session" },
      { icon: "building", title: "Trust up front", text: "Reviews, licenses, warranties and real job photos above the fold.", slug: "dwy-onboarding-roofing-agency-buyer-journey" },
      { icon: "shield", title: "Built-in qualifying", text: "Questions on roof age, ownership and timeline.", slug: "215-validated-roofing-leads-12-79-cpl" },
    ],
  },
  proofTitle: "Funnel-driven results",
  proofIntro: "These pages power real campaigns, including 850 roofing leads in 8 days for a Texas roofer at $7.60 and 825 verified leads at $4.95 in five weeks.",
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
    intro: "A contact page on a general roofing website converts a small share of ad visitors because it offers many choices. A dedicated landing page has one message that matches the ad and one action. For paid traffic, the dedicated page almost always wins.",
    bad: { title: "Homepage or contact page", points: ["Many links, no single action", "Generic message for every visitor", "Long contact form", "Submissions in an inbox"] },
    good: { title: "Dedicated funnel", points: ["One offer, one action", "Message matches the ad exactly", "Short form with qualifying questions", "Straight into your CRM with follow-up"] },
  },
  guide: [
    {
      id: "website-vs-landing-page",
      title: "Roofing website vs roofing landing page",
      body: [
        "Your roofing website is your brand home: services, service areas, reviews and SEO. A landing page is a single-purpose page for an ad campaign. You need both. The website wins trust and organic search, and the landing page turns paid clicks into booked inspections.",
      ],
    },
    {
      id: "match",
      title: "Why the page must match the ad",
      body: [
        "If the ad says \"free storm damage inspection\", the page headline must say the same. When the message changes, homeowners leave. Matching the ad to the page is one of the easiest ways to lower cost per lead.",
        "The page is one part of [roofing marketing](/roofing-marketing) that books inspections. It needs [roofing ad creatives](/roofing-ad-creatives) in front of it and [roofing CRM automation](/roofing-crm-automation) behind it. Together they bring in [exclusive roofing leads](/) for your company alone.",
      ],
    },
  ],
  faqs: [
    { q: "What makes a good roofing website?", a: "A clear offer, fast mobile loading, tap-to-call, real photos, reviews, service area pages and a short quote form. It should make it easy for a homeowner to trust you and contact you in under a minute." },
    { q: "How much does a roofing website cost?", a: "A simple template site costs little, while a custom roofing website with landing pages and integrations costs more. Judge it by how many inspections it books, not by the design alone." },
    { q: "Do roofers need a landing page if they have a website?", a: "Yes, for paid ads. A landing page that matches the ad converts far more visitors than a general website, so you pay less for each lead." },
    { q: "What should a roofing landing page include?", a: "One headline that matches the ad, proof such as reviews and job photos, a short form or calendar, a phone number and a clear next step." },
    { q: "What are the best roofing website builders?", a: "WordPress, Webflow and funnel builders such as GoHighLevel are common. The builder matters less than speed, clear messaging and good forms." },
    { q: "How do I get more leads from my roofing website?", a: "Add a clear offer, shorten forms, add reviews and photos near the form, improve page speed and answer every lead within minutes." },
  ],
  related: [
    { href: "/roofing-ad-creatives", label: "Roofing ad creatives", text: "The ads that send the traffic" },
    { href: "/roofing-crm-automation", label: "Roofing CRM automation", text: "What happens after the form" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads", text: "Verification inside the funnel" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "The full system you own" },
  ],
  formTitle: "Get a free funnel review",
};


export const roofingMarketing: LandingDoc = {
  slug: "roofing-marketing",
  path: "/roofing-marketing",
  title: "Roofing Contractor Marketing That Books Inspections",
  description:
    "Roofing contractor marketing built as a system: ads, landing pages, follow-up and booked inspections. See real results and how to market a roofing company.",
  eyebrow: "Roofing contractor marketing",
  h1: "Roofing Contractor Marketing That Builds a System, Not Just Ads",
  intro:
    "Most roofing marketing stops at running ads. We build the whole client acquisition system for roofing contractors doing $1M+ a year: the offer, the creative, Meta ads, landing pages, CRM, AI follow-up and lead qualification, measured by booked inspections and signed jobs.",
  heroPoints: ["One team for offer, ads, pages, CRM and follow-up", "Exclusive leads under your brand, never shared", "Backed by a 90-day written agreement"],
  serviceType: "Roofing marketing",
  breadcrumb: "Roofing Marketing",
  stats: [
    { value: "$127.5K", label: "Closed, 34 installs in ~60 days (Dallas)", slug: "dallas-roofer-127500-closed-34-installs" },
    { value: "1,480", label: "Leads at $4.77 over five months", slug: "1480-roofing-leads-4-77-cpl" },
    { value: "686", label: "Homeowner leads in 8 days", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
    { value: "365", label: "OTP-verified leads, 4 locations", slug: "florida-365-otp-verified-leads-4-locations" },
  ],
  problems: {
    title: "Why roofing contractor marketing usually disappoints",
    intro: "Most roofing marketing fails for one of three reasons.",
    cards: [
      { icon: "megaphone", title: "Clicks, not inspections", text: "The agency sells clicks instead of inspections." },
      { icon: "users", title: "Shared leads", text: "The leads are shared with other roofers." },
      { icon: "clock", title: "Slow callbacks", text: "Nobody calls the lead back fast enough. A homeowner who asks for a quote and waits an hour has usually already booked someone else." },
      { icon: "layers", title: "The fix", text: "Good roofing marketing fixes all three: exclusive demand, fast follow-up and reporting on booked jobs." },
    ],
  },
  features: {
    eyebrow: "What's included",
    title: "Everything a roofing marketing agency should do, in one place",
    intro: "Each part links to a case study.",
    cards: [
      { icon: "wallet", title: "Ads and creative", text: "Facebook, Instagram and Google campaigns for replacement, repair, storm and insurance work, with video, image and before and after ads refreshed every week.", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
      { icon: "target", title: "Landing pages", text: "Mobile-first pages with one offer and a short qualifying form.", slug: "1480-roofing-leads-4-77-cpl" },
      { icon: "shield", title: "Follow-up and CRM", text: "Text and call within minutes, reminders before every inspection, and every lead tracked from first click to signed contract.", slug: "florida-365-otp-verified-leads-4-locations" },
      { icon: "building", title: "Reporting", text: "Cost per lead, cost per inspection and closed revenue, every week.", slug: "dallas-roofer-127500-closed-34-installs" },
    ],
  },
  proofTitle: "Roofing marketing results",
  proofIntro: "Results from real roofing campaigns: $127,500 in closed deals and 34 installs for a Dallas roofer, 280 qualified leads in 15 days for a Florida home service company and $546k for a roofing agency in 67 days.",
  proofSlugs: ["dallas-roofer-127500-closed-34-installs", "florida-home-services-280-leads-15-days", "roofing-agency-546k-67-days", "1480-roofing-leads-4-77-cpl", "texas-roofer-686-leads-8-days-0-down-offer"],
  process: [
    { title: "Plan", text: "Choose the job type, area and offer." },
    { title: "Launch", text: "Ads, landing page and form go live within days." },
    { title: "Qualify", text: "Each lead answers questions on roof age, ownership and timeline." },
    { title: "Contact", text: "Text and call within minutes, day or night." },
    { title: "Book", text: "The homeowner picks an inspection time on your calendar." },
    { title: "Report", text: "Cost per lead, cost per inspection and closed revenue, every week." },
  ],
  compare: {
    title: "Typical roofing marketing agency vs Roofing Systems",
    intro: "Five things to compare: who owns the ad account, lead exclusivity, what gets reported, follow-up and the contract.",
    bad: { title: "Typical agency", points: ["They own the ad account", "Leads are often shared", "Reports clicks", "Follow-up is your problem, often with a long lock-in"] },
    good: { title: "Roofing Systems", points: ["You own the ad account", "Exclusive leads", "Reports booked inspections and revenue", "Follow-up done for you, no long lock-in"] },
  },
  guide: [
    {
      id: "what",
      title: "What roofing marketing should include in 2026",
      body: [
        "Homeowners now compare roofers on their phone in minutes. Your marketing needs short video ads that show real roofs and real crews, a Google Business Profile with fresh photos and reviews, financing options on the landing page, and instant replies by text. AI follow-up that answers new leads at night is becoming standard for roofers who want to win the first conversation.",
        "Go deeper on each part: [roofing ads](/roofing-ad-creatives), [roofing websites](/roofing-landing-pages) and [Google Ads for roofers](/google-ads-for-roofers).",
      ],
    },
    {
      id: "choose",
      title: "How to choose a roofing marketing agency",
      body: [
        "Ask five questions before you sign. Do I own the ad account? Are the leads exclusive? Can you show real roofing results with numbers? How fast are leads contacted? What do you report each week? A good roofing marketing agency answers all five without hesitation. We answer them for [roofing leads](/) on our homepage.",
      ],
    },
  ],
  faqs: [
    { q: "How do you market a roofing company?", a: "Combine a strong Google Business Profile, reviews, a fast website and paid ads to homeowners in your area. Then follow up with every lead within minutes and track which campaigns produce signed roofs, not just leads." },
    { q: "What does a roofing marketing agency do?", a: "It plans and runs your ads, builds landing pages, creates video and image creatives, sets up follow-up and reports on results. The best agencies are measured on booked inspections and closed jobs." },
    { q: "How much does roofing marketing cost?", a: "It depends on your area and goals. Most roofers budget for ad spend plus a management fee. The useful number is your cost per signed job, which should be a small share of your average roof value." },
    { q: "What are the best roofing marketing ideas?", a: "Inspection offers, before and after videos, review campaigns, financing offers, retargeting ads and follow-up on old estimates are proven ideas that most roofers can launch in a week." },
    { q: "Is Facebook or Google better for roofing marketing?", a: "Google catches people already searching for a roofer. Facebook reaches homeowners before they search, often at a lower cost per lead. Many roofers use both, with Facebook for volume and Google for urgent repair searches." },
    { q: "How long does roofing marketing take to work?", a: "Paid campaigns can bring leads in the first week. SEO and reviews take months but lower costs over time. A good plan uses ads for quick wins and organic channels for the long term." },
  ],
  related: [
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "The system behind the results" },
    { href: "/facebook-ads-for-roofers", label: "Roofing Facebook ads", text: "How the ads are run" },
    { href: "/services", label: "All 30 services", text: "Everything we do for roofers" },
    { href: "/case-studies", label: "Case studies", text: "Every campaign, with the numbers" },
  ],
  relatedIntro: "**Roofing marketing ideas that work now:** run a free roof inspection offer for roofs older than 15 years, film a 30-second before and after video on every job, ask every happy customer for a Google review the same day, retarget website visitors with financing ads, and send past estimates a seasonal follow-up text.",
  formTitle: "Get your free roofing marketing plan",
};

export const googleAds: LandingDoc = {
  slug: "google-ads-for-roofers",
  path: "/google-ads-for-roofers",
  title: "Google Ads for Roofers: Costs, Setup and Results",
  description:
    "Google Ads for roofers explained: what roofing clicks cost, how to run campaigns, Local Services Ads and how Google compares with Facebook for leads.",
  eyebrow: "Guide · Google Ads for roofing companies",
  h1: "Google Ads for Roofers: What It Costs, How It Works and When It Pays",
  intro:
    "Google Ads catch homeowners already searching for a roofer, which makes clicks expensive. This guide explains the campaign types, what roofing keywords cost, and how Google compares with the Meta ads system we run for roofers.",
  heroPoints: ["Search ads, Local Services Ads and Performance Max explained", "Real cost-per-click data for roofing keywords", "When Meta ads produce cheaper leads, with our numbers"],
  serviceType: "Roofing advertising guidance",
  breadcrumb: "Google Ads for Roofers",
  stats: [
    { value: "$22.36", label: "Google CPC for \"roofing leads\" (Semrush, Nov 2026)", href: "#cost", source: "Read more" },
    { value: "$4.77", label: "Cost per lead, 1,480 Meta leads", slug: "1480-roofing-leads-4-77-cpl" },
    { value: "$5.31", label: "Cost per lead, 686 Meta leads", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
    { value: "$11.41", label: "Median cost per lead, 15 Meta campaigns", href: "/blog/roofing-facebook-ads-cost-per-lead", source: "See the study" },
  ],
  problems: {
    title: "Why Google Ads get expensive for roofers",
    intro: "Roofing is one of the most competitive categories on Google.",
    cards: [
      { icon: "users", title: "A crowded category", text: "Many companies bid on the same small set of searches." },
      { icon: "target", title: "The same few searches", text: "Searches such as \"roof repair near me\" and \"roof replacement\" carry most of the demand." },
      { icon: "wallet", title: "High cost per click", text: "With that much competition, the cost per click is high." },
      { icon: "repeat", title: "Budgets disappear", text: "Without tight targeting, negative keywords and a strong landing page, budgets disappear quickly." },
    ],
  },
  features: {
    eyebrow: "Campaign types",
    title: "The Google Ads options for roofing companies",
    intro: "**How to run Google Ads for roofing:** set up conversion tracking first. Use exact and phrase match on high-intent searches, add negative keywords such as \"jobs\" and \"DIY\", target only your service area, send traffic to a [landing page](/roofing-landing-pages) that matches the ad, and call every lead within five minutes.",
    cards: [
      { icon: "target", title: "Search ads", text: "Show up when homeowners search for roofers." },
      { icon: "map", title: "Local Services Ads", text: "Pay per lead with the Google Guaranteed badge." },
      { icon: "layers", title: "Performance Max", text: "Automated campaigns across Google, best with good conversion tracking." },
      { icon: "film", title: "Display and YouTube", text: "Retarget past visitors and build awareness." },
    ],
  },
  proofTitle: "What Meta ads produced for roofers (for comparison)",
  proofIntro: "For comparison, our Facebook and Instagram roofing campaigns have produced 1,480 leads at $4.77 each and 664 agency leads at $4.51. Meta often delivers lower cost per lead, while Google captures urgent searches.",
  proofSlugs: ["1480-roofing-leads-4-77-cpl", "roofing-agency-664-leads-4-51", "texas-roofer-686-leads-8-days-0-down-offer", "dallas-roofer-127500-closed-34-installs"],
  process: [
    { title: "Start with your numbers", text: "Know your close rate and average job value, so you know what a lead is worth." },
    { title: "Pick the channel by intent", text: "Google catches people searching now; Meta reaches homeowners before they search." },
    { title: "Match the landing page", text: "Each ad needs a page with the same offer and a short qualifying form." },
    { title: "Verify leads", text: "Phone verification removes fake numbers on any channel." },
    { title: "Follow up in minutes", text: "Paid leads cool fast. Automate the first text and email." },
    { title: "Compare cost per job", text: "Judge every channel on cost per signed job, not cost per click." },
  ],
  compare: {
    title: "Google Ads vs Meta ads for roofers",
    intro: "Google wins for urgent repairs, because the homeowner is already searching. Meta wins for replacement and storm campaigns, because you reach homeowners before they search. Many roofers run both, with Google for high-intent searches and Meta for steady volume. See how we run [Facebook ads for roofers](/facebook-ads-for-roofers).",
    bad: { title: "Google Ads", points: ["Reaches people already searching", "High intent, high cost per click", "Limited by search volume", "Bids rise in storm season"] },
    good: { title: "Meta ads (our system)", points: ["Reaches homeowners before they search", "Our roofing campaigns: $3.75–$24 per lead, median $11.41", "Scales beyond search demand", "Creative and offer drive the cost"] },
  },
  guide: [
    {
      id: "cost",
      title: "How much do Google Ads cost for roofers?",
      body: [
        "Cost depends on your city, season and competition. Clicks for roofing searches are among the more expensive in home services, and a lead often takes several clicks. Track cost per booked inspection, not cost per click, to see if the campaign really pays.",
        "Semrush data from November 2026 puts the average cost per click for \"roofing leads\" at **$22.36** and for \"google ads for roofers\" at **$18.77**. Judge Google next to every other channel in your [roofing marketing](/roofing-marketing) on cost per signed job.",
      ],
    },
    {
      id: "which",
      title: "Should roofers use Google Ads or Facebook ads?",
      body: [
        "Use Google when you need people who are searching right now and you can afford high click costs. Use Meta when you want more volume at a lower cost per lead, with the offer and creative doing the work. Our system is built on Meta: see [roofing Facebook ads](/facebook-ads-for-roofers) and [Instagram ads for roofers](/instagram-ads-for-roofers).",
      ],
    },
  ],
  faqs: [
    { q: "Do Google Ads work for roofers?", a: "Yes, especially for urgent repair and replacement searches. They work best with tight targeting, conversion tracking, a dedicated landing page and fast follow-up." },
    { q: "How much should a roofer spend on Google Ads?", a: "Start with a budget large enough to get meaningful data in your area for at least a month, then scale campaigns that produce booked inspections at a profitable cost." },
    { q: "What are Google Local Services Ads for roofers?", a: "They are pay-per-lead ads at the top of Google that show the Google Guaranteed or Screened badge. You pay for leads instead of clicks, and reviews strongly affect your ranking." },
    { q: "Is Google Ads or Facebook better for roofing leads?", a: "Google catches people already searching, while Facebook reaches homeowners earlier and often at a lower cost per lead. Many roofers get the best results using both." },
    { q: "How do I lower my roofing cost per click?", a: "Improve Quality Score with relevant ads and landing pages, use negative keywords, narrow the location and schedule ads for hours when you can answer." },
    { q: "Why are my roofing Google Ads not getting leads?", a: "Common causes are missing conversion tracking, broad keywords, slow or generic landing pages and slow follow-up." },
  ],
  related: [
    { href: "/facebook-ads-for-roofers", label: "Roofing Facebook ads", text: "The system we run" },
    { href: "/blog/roofing-facebook-ads-cost-per-lead", label: "Cost per lead study", text: "Data from 15 roofing campaigns" },
    { href: "/roofing-landing-pages", label: "Roofing landing pages", text: "Where any ad should land" },
    { href: "/roofing-marketing", label: "Roofing marketing", text: "The full system" },
  ],
  schema: "Article",
  formTitle: "Compare Google and Meta for your market",
};

export const commercialLeads: LandingDoc = {
  slug: "commercial-roofing-leads",
  path: "/commercial-roofing-leads",
  title: "Commercial Roofing Leads From Campaigns You Own",
  description:
    "Commercial roofing leads from campaigns in your own ad account. Reach property managers and building owners and see how to get commercial roofing leads.",
  eyebrow: "Commercial roofing lead generation",
  h1: "Commercial Roofing Leads From Campaigns You Own",
  intro:
    "Commercial roofing jobs are bigger and slower to close, so the leads need more qualification than a residential form fill. We build campaigns, landing pages and follow-up for commercial roofing companies, with exclusive leads under your brand.",
  heroPoints: ["Campaigns for flat, metal and tile commercial work", "Qualifying questions for property type, size and timeline", "Follow-up built for longer decision cycles"],
  serviceType: "Commercial roofing lead generation",
  breadcrumb: "Commercial Roofing Leads",
  stats: [
    { value: "664", label: "Verified B2B leads at $4.51 (roofing business owners)", slug: "roofing-agency-664-leads-4-51" },
    { value: "2.13%", label: "CTR with a skeptical B2B audience", slug: "roofing-agency-664-leads-4-51" },
    { value: "1,480", label: "Leads at $4.77 over five months", slug: "1480-roofing-leads-4-77-cpl" },
    { value: "$127.5K", label: "Closed in ~60 days (Dallas)", slug: "dallas-roofer-127500-closed-34-installs" },
  ],
  problems: {
    title: "Why commercial roofing leads are hard to buy",
    intro: "Building your own campaign is usually the most reliable way to get them.",
    cards: [
      { icon: "building", title: "Large jobs", text: "Commercial roofing jobs are large, so every lead needs proper qualification." },
      { icon: "users", title: "Several decision makers", text: "Owners, managers and boards all weigh in before a job is approved." },
      { icon: "clock", title: "Weeks to close", text: "Commercial jobs take weeks to close, so follow-up has to last." },
      { icon: "wallet", title: "Rare and shared", text: "Most lead sellers focus on homeowners, so commercial leads are rare, expensive and often shared." },
    ],
  },
  features: {
    eyebrow: "How we approach commercial",
    title: "Built for bigger jobs and longer decisions",
    intro: "Commercial campaigns target property managers, facility managers, building owners and HOA boards. The offer is usually a roof assessment or maintenance plan, and follow-up runs over weeks with reminders, proposals and site visits.",
    cards: [
      { icon: "target", title: "B2B targeting", text: "We've reached skeptical business audiences before: 664 verified leads from roofing business owners at $4.51.", slug: "roofing-agency-664-leads-4-51" },
      { icon: "shield", title: "Qualification first", text: "Questions on property type, roof size, timeline and decision role filter leads before your estimator calls." },
      { icon: "repeat", title: "Long-cycle follow-up", text: "SMS and email nurture keeps you in front of property owners until the budget is approved." },
      { icon: "layers", title: "Commercial landing pages", text: "Pages with project photos, certifications and a short qualifying form.", slug: "215-validated-roofing-leads-12-79-cpl" },
    ],
  },
  proofTitle: "Campaign results behind the system",
  proofIntro: "The same system has produced results for residential roofers and roofing agencies, including $546k for an agency in 67 days and 1,024 OTP-verified leads for a pay-per-lead agency. We do not publish commercial-only numbers yet; we share them as soon as a commercial campaign has completed reporting.",
  proofSlugs: ["roofing-agency-546k-67-days", "ppl-agency-1024-otp-verified-roofing-leads", "roofing-agency-664-leads-4-51", "dallas-roofer-127500-closed-34-installs"],
  process: PROCESS_BASE,
  compare: {
    title: "Bought commercial leads vs your own campaigns",
    intro: "Bought leads arrive fast but are often shared and out of date. Your own campaign builds a list of real decision makers who asked to hear from you, and that list keeps its value after the campaign ends.",
    bad: { title: "Bought lists", points: ["Often residential mixed in", "Shared with other contractors", "No qualification for size or timeline", "No follow-up"] },
    good: { title: "Your own campaigns", points: ["Targeted to commercial decision makers", "Exclusive to your company", "Qualified on property type, size and timeline", "Nurtured until they're ready"] },
  },
  guide: [
    {
      id: "how",
      title: "How to get commercial roofing leads",
      body: [
        "**1.** Target property and facility managers with roof assessment offers.",
        "**2.** Build relationships with property management firms and general contractors.",
        "**3.** Offer preventive maintenance plans that lead to replacement work.",
        "**4.** Keep a strong Google Business Profile with commercial project photos.",
        "**5.** Follow up with every inquiry for several weeks.",
        "The same system that brings in [exclusive roofing leads](/) for residential roofers runs inside our [roofing marketing](/roofing-marketing). See the numbers in our [case studies](/case-studies), and use [storm damage leads](/storm-damage-leads) campaigns after severe weather hits commercial roofs.",
      ],
    },
  ],
  faqs: [
    { q: "How do I get commercial roofing leads?", a: "Target property managers, facility managers and building owners with roof assessment or maintenance offers, build referral relationships with property management firms and follow up consistently over weeks." },
    { q: "Are commercial roofing leads worth more than residential?", a: "Usually yes. Commercial jobs are larger and often lead to repeat maintenance work, although they take longer to close." },
    { q: "Where can I find commercial roofing leads?", a: "Your own ad campaigns, property management networks, general contractor partnerships, commercial real estate groups and your Google Business Profile are the main sources." },
    { q: "Can Facebook ads generate commercial roofing leads?", a: "Yes, with targeting aimed at property and facility managers and an offer such as a free roof assessment. Follow-up is key because decisions take longer." },
    { q: "How long does it take to close a commercial roofing lead?", a: "Often several weeks or months, because budgets, approvals and site visits are involved. A structured follow-up process keeps you in the running." },
  ],
  related: [
    { href: "/roofing-marketing", label: "Roofing marketing", text: "The full system" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads", text: "Qualification before the call" },
    { href: "/roofing-crm-automation", label: "Roofing CRM", text: "Follow-up for long decisions" },
    { href: "/storm-damage-leads", label: "Storm damage leads", text: "Campaigns after severe weather" },
  ],
  formTitle: "Get commercial roofing leads",
};

export const stormLeads: LandingDoc = {
  slug: "storm-damage-leads",
  path: "/storm-damage-leads",
  title: "Storm Damage Roofing Leads: Exclusive Hail & Wind Leads",
  description:
    "Exclusive storm damage roofing leads from campaigns that scale up after hail and wind and pause when crews are full. Verified, with instant follow-up.",
  eyebrow: "Storm damage roofing leads",
  h1: "Storm Damage Roofing Leads, Ready When the Weather Hits",
  intro:
    "After hail and wind, every roofer and storm chaser in town floods the same feeds. We build storm campaigns that launch fast, target the affected areas, verify every lead and follow up within minutes, so homeowners talk to you first.",
  heroPoints: ["Campaigns that scale up after storms and pause when crews are full", "Targeting by affected ZIP codes and neighborhoods", "Verified leads with instant follow-up"],
  serviceType: "Storm damage roofing lead generation",
  breadcrumb: "Storm Damage Leads",
  stats: [
    { value: "25", label: "Leads on day one of a campaign ($3.75 each)", slug: "roofing-25-leads-one-day-3-75" },
    { value: "686", label: "Leads in the first 8 days", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
    { value: "261", label: "OTP-verified leads in 7 days, new account", slug: "261-otp-verified-leads-7-days-new-account" },
    { value: "365", label: "Verified leads with automated follow-up", slug: "florida-365-otp-verified-leads-4-locations" },
  ],
  problems: {
    title: "Why storm leads slip away",
    intro: "Storm demand is real, short and crowded.",
    cards: [
      { icon: "storm", title: "Everyone shows up at once", text: "Local roofers, out-of-state crews and lead sellers all target the same neighborhoods within days." },
      { icon: "clock", title: "Slow launch", text: "A campaign that takes two weeks to launch misses the busiest days." },
      { icon: "phone", title: "Junk and duplicate leads", text: "Storm leads are often resold to several contractors or filled in with fake numbers." },
      { icon: "shield", title: "Trust", text: "Homeowners worry about storm chasers. Ads must show you're local and established." },
    ],
  },
  features: {
    eyebrow: "How storm campaigns work",
    title: "Fast, local and verified",
    intro: "Built from the same system as the campaigns below.",
    cards: [
      { icon: "zap", title: "Fast launch", text: "Campaigns can produce leads from day one: 25 leads at $3.75 on a campaign's first day.", slug: "roofing-25-leads-one-day-3-75" },
      { icon: "map", title: "Affected-area targeting", text: "Target the ZIP codes and neighborhoods hit by the storm, not the whole metro." },
      { icon: "shield", title: "Verification", text: "OTP verification removes fake numbers: 261 verified leads in a new account's first 7 days.", slug: "261-otp-verified-leads-7-days-new-account" },
      { icon: "building", title: "Local trust", text: "Ads built around your reviews and local reputation, as in our Dallas campaign.", slug: "dallas-roofer-127500-closed-34-installs" },
    ],
  },
  proofTitle: "Campaign results behind the system",
  proofSlugs: ["roofing-25-leads-one-day-3-75", "texas-roofer-686-leads-8-days-0-down-offer", "261-otp-verified-leads-7-days-new-account", "florida-365-otp-verified-leads-4-locations"],
  process: [
    { title: "Prepare before storm season", text: "Creative, landing pages and CRM follow-up ready before the first storm." },
    { title: "Launch fast", text: "Turn campaigns on within hours of a storm in your service area." },
    { title: "Target affected areas", text: "Focus budget on the ZIP codes and neighborhoods that were hit." },
    { title: "Verify every lead", text: "Phone verification so your team calls real, local homeowners." },
    { title: "Respond in minutes", text: "Instant text and email, then fast calls to book inspections." },
    { title: "Pause when full", text: "Scale back when crews are booked, so you don't pay for leads you can't serve." },
  ],
  compare: {
    title: "Bought storm leads vs your own storm campaigns",
    intro: "Storm leads are worth most when they're yours alone.",
    bad: { title: "Bought storm leads", points: ["Often sold to several contractors", "Unverified numbers", "No control over volume", "Seller's brand, not yours"] },
    good: { title: "Your own storm campaigns", points: ["Exclusive to your company", "Phone-verified", "Scale up or pause in hours", "Your reviews and brand in every ad"] },
  },
  guide: [
    {
      id: "hail",
      title: "Hail and wind damage roofing leads",
      body: [
        "Hail and wind leads come in short, intense waves. In Texas, spring hail often hits North and Central Texas from about March to June; along the Gulf Coast and in Florida, the Atlantic hurricane season runs from 1 June to 30 November. A storm campaign works best when it is built before the season and switched on within hours of a storm in your service area.",
        "Target the ZIP codes and neighborhoods that were hit, not the whole metro, and send each area to a page that names it. One Florida client used [hyper-local funnels for Miami, Tampa and Orlando](/case-studies/florida-295-verified-roofing-leads-miami-tampa-orlando) with OTP verification, and the same structure works for storm-hit areas. See the seasonal detail for [roofing leads in Texas](/roofing-leads-texas) and [roofing leads in Florida](/roofing-leads-florida).",
      ],
    },
    {
      id: "not-storm-chaser",
      title: "How to get storm damage leads without looking like a storm chaser",
      body: [
        "After a storm, homeowners are wary of out-of-town crews knocking on doors. Ads that show your local address, your reviews and roofs you have finished nearby win their trust. Phone verification and an instant reply by text then show a real, organized company is on the other end.",
        "Storm leads are also time-sensitive, so follow-up has to run around the clock: see [roofing CRM automation](/roofing-crm-automation). The ads themselves run on the system described in [Facebook ads for roofers](/facebook-ads-for-roofers), and [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost) explains what to budget for a storm push.",
      ],
    },
    {
      id: "insurance",
      title: "Storm and insurance roofing leads",
      body: [
        "Storm leads often involve insurance claims. Ads should explain how you help homeowners with inspections and claims, without promising claim outcomes. Keep messaging compliant with your state's rules on insurance-related roofing advertising.",
        "We don't publish storm-specific case studies yet. The campaigns above show the parts of the system that matter most in a storm: fast launch, verification and follow-up. Read the [roofing lead follow-up guide](/blog/roofing-lead-follow-up).",
      ],
    },
  ],
  faqs: [
    { q: "Are storm damage leads exclusive?", a: "Yes. Campaigns run under your company name, so leads are never shared or resold." },
    { q: "How fast can a storm campaign start?", a: "With creative and pages prepared ahead of storm season, campaigns can launch within hours. One of our campaigns produced 25 leads on its first day." },
    { q: "Can I pause when my crews are full?", a: "Yes. Storm campaigns scale up after weather events and pause when you're booked." },
    { q: "What are hail damage roofing leads?", a: "Homeowners in hail-hit areas who ask for a roof inspection or repair after a storm. They are most valuable in the first days after the event, so the campaign has to be ready to launch and to respond within minutes." },
    { q: "When is storm season for roofers?", a: "It depends on the region. Spring hail often hits Texas from about March to June, and the Atlantic hurricane season runs from 1 June to 30 November, affecting Florida and the Gulf Coast." },
    { q: "How do you avoid looking like a storm chaser?", a: "Show your local address, reviews and nearby finished roofs in the ads, target only your service area, verify every lead and reply instantly, so homeowners see an established local company." },
    { q: "Do you have storm-specific case studies?", a: "Not published yet. Our case studies show the system's speed, verification and follow-up, which are what storm campaigns rely on." },
  ],
  related: [
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas", text: "Texas campaigns and results" },
    { href: "/roofing-leads-florida", label: "Roofing leads in Florida", text: "Florida campaigns and results" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads", text: "OTP verification" },
    { href: "/commercial-roofing-leads", label: "Commercial roofing leads", text: "Leads for commercial work" },
  ],
  formTitle: "Get ready for storm season",
};

export const landings = [instagramAds, texasLeads, floridaLeads, agencyLeads, verifiedLeads, crmAutomation, replacementLeads, adCreatives, landingPages, roofingMarketing, googleAds, commercialLeads, stormLeads];
