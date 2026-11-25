/*
  City and market pages (/roofing-leads and /roofing-leads/{city}-{st}).
  Local facts come from public sources linked on each page:
  NOAA Storm Events Database (county reports, 2021 to 2025) and the US Census
  Bureau American Community Survey 5-year estimates (2019 to 2023, table DP04).
  Proof comes only from the site's own case studies.
*/
import type { LandingDoc } from "./landings";

const NOAA = "https://www.ncei.noaa.gov/stormevents/";
const acs = (geo: string) => `https://data.census.gov/table/ACSDP5Y2023.DP04?g=${geo}`;

export const roofingLeadsHub: LandingDoc = {
  slug: "roofing-leads",
  path: "/roofing-leads",
  title: "Roofing Leads Near Me: Markets We Serve",
  description:
    "Exclusive roofing leads by market: Texas, Florida, Dallas, Houston, Miami and Nashville, with local storm and housing data and real campaign results.",
  eyebrow: "Roofing leads by market",
  h1: "Roofing Leads Near You: Exclusive Leads by State and City",
  intro:
    "We run roofing lead campaigns anywhere in the US, targeted to the ZIP codes, counties or radius you serve. Our published results come mostly from Texas and Florida, so those markets have their own pages, along with city pages for Dallas, Houston, Miami and Nashville. Every lead is exclusive to your company.",
  heroPoints: ["Campaigns targeted to your exact service area", "Market pages with local storm and housing data", "Real results from Texas and Florida campaigns"],
  serviceType: "Roofing lead generation by market",
  breadcrumb: "Roofing Leads",
  stats: [
    { value: "$127.5K", label: "Closed by a Dallas roofer in about 60 days", slug: "dallas-roofer-127500-closed-34-installs" },
    { value: "295", label: "Verified leads across Miami, Tampa and Orlando", slug: "florida-295-verified-roofing-leads-miami-tampa-orlando" },
    { value: "850", label: "Leads in 8 days for a Texas roofer", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "$111.2K", label: "Won in 31 days by a Florida roofer", slug: "florida-roofer-111k-31-days" },
  ],
  problems: {
    title: "Why roofing leads near you are hard to find",
    intro: "Local demand is real, but most lead sources are not built around your service area.",
    cards: [
      { icon: "map", title: "Leads outside your area", text: "Statewide lists send you homeowners your crews cannot reach." },
      { icon: "users", title: "Shared with local rivals", text: "The same homeowner gets calls from every roofer in town." },
      { icon: "storm", title: "Storm spikes, then nothing", text: "Leads arrive in waves after storms and dry up in quiet months." },
      { icon: "clock", title: "Slow first contact", text: "Local homeowners book the first roofer who calls back." },
    ],
  },
  features: {
    eyebrow: "How we target",
    title: "Built around the area you serve",
    intro: "The same system runs in every market; the targeting, offers and proof change by area.",
    cards: [
      { icon: "map", title: "ZIP, county or radius", text: "Campaigns reach only the areas your crews serve, and budget follows the best areas." },
      { icon: "storm", title: "Local storm timing", text: "Offers and budgets follow each market's hail and storm season." },
      { icon: "shield", title: "Verified leads", text: "Phone verification removes fake numbers in every market.", slug: "florida-365-otp-verified-leads-4-locations" },
      { icon: "building", title: "Local proof", text: "Ads built around your reviews and finished roofs in that area.", slug: "dallas-roofer-127500-closed-34-installs" },
    ],
  },
  proofTitle: "Results by market",
  proofIntro: "Published results from Texas and Florida campaigns.",
  proofSlugs: ["dallas-roofer-127500-closed-34-installs", "florida-295-verified-roofing-leads-miami-tampa-orlando", "texas-roofer-77k-closed-30-days", "florida-roofer-111k-31-days"],
  process: [
    { title: "Map your area", text: "We start from the ZIP codes, counties or radius you actually serve." },
    { title: "Read the market", text: "Storm season, housing stock and competition shape the offer." },
    { title: "Build local creative", text: "Your reviews, crews and finished roofs in that area." },
    { title: "Launch and verify", text: "Campaigns go live with phone verification on every lead." },
    { title: "Follow up fast", text: "Every lead gets an instant text and email, then a call." },
    { title: "Move budget to winners", text: "Each week, budget shifts to the areas with the best cost per inspection." },
  ],
  compare: {
    title: "Statewide lead lists vs local campaigns",
    intro: "Where the lead comes from decides whether your crew can serve it.",
    bad: { title: "Statewide lists", points: ["Leads outside your area", "Often shared", "Same offer everywhere", "No local proof"] },
    good: { title: "Local campaigns", points: ["Only your service area", "Exclusive to your company", "Offers for your market", "Your local reviews and jobs"] },
  },
  guide: [
    {
      id: "texas",
      title: "Roofing leads in Texas",
      body: [
        "Texas has our strongest published proof: [a Dallas roofer closed $127,500 and 34 installs](/case-studies/dallas-roofer-127500-closed-34-installs) in about 60 days, and Texas campaigns produced leads at $5.31 and $7.60 each. See the [Texas hub](/roofing-leads-texas), plus city pages for [roofing leads in Dallas](/roofing-leads/dallas-tx) and [roofing leads in Houston](/roofing-leads/houston-tx).",
      ],
    },
    {
      id: "florida",
      title: "Roofing leads in Florida",
      body: [
        "In Florida, city-specific funnels for Miami, Tampa and Orlando produced [295 verified leads](/case-studies/florida-295-verified-roofing-leads-miami-tampa-orlando), and a Florida roofing company won [$111,200 in 31 days](/case-studies/florida-roofer-111k-31-days). See the [Florida hub](/roofing-leads-florida) and [roofing leads in Miami](/roofing-leads/miami-fl). Tampa and Orlando are covered on the Florida hub.",
      ],
    },
    {
      id: "tennessee",
      title: "Roofing leads in Nashville",
      body: [
        "Nashville has the highest search demand of the cities we track. We have no published Nashville campaign yet, and the [Nashville page](/roofing-leads/nashville-tn) says so, using national results and local storm and housing data instead.",
      ],
    },
    {
      id: "near-me",
      title: "Roofing leads near me: anywhere else in the US",
      body: [
        "Outside these markets, the same system runs anywhere in the US, targeted to your service area. Start with [roofing lead generation](/roofing-lead-generation), see what leads cost in the [roofing lead cost report](/roofing-lead-cost-report-2026), or [book a free strategy call](/book) for a breakdown of your market.",
      ],
    },
  ],
  faqs: [
    { q: "Can I get roofing leads near me?", a: "Yes. Campaigns target the ZIP codes, counties or radius you serve anywhere in the US, so every lead is in an area your crews can reach." },
    { q: "Which markets have published results?", a: "Texas and Florida, including a Dallas roofer that closed $127,500 and city-specific Florida campaigns in Miami, Tampa and Orlando." },
    { q: "Are local roofing leads exclusive?", a: "Yes. Campaigns run under your company name, so leads go to your company only." },
    { q: "Do you work in my city if it is not listed?", a: "Yes. City pages cover markets with published proof or high search demand; the same system runs anywhere in the US." },
    { q: "How much do roofing leads cost by market?", a: "Our Texas campaigns produced leads at $5.31 and $7.60; verified Florida campaigns ran at $19.50 and $22.58. Across all published campaigns the range was $3.75 to $24." },
  ],
  related: [
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas", text: "State hub and Texas results" },
    { href: "/roofing-leads-florida", label: "Roofing leads in Florida", text: "State hub and Florida results" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation", text: "The system behind every market" },
    { href: "/case-studies", label: "Case studies", text: "Every campaign, with numbers" },
  ],
  updated: "2026-11-25",
  formTitle: "Get a breakdown of your market",
};

export const dallas: LandingDoc = {
  slug: "dallas-tx",
  path: "/roofing-leads/dallas-tx",
  title: "Roofing Leads in Dallas, TX: Exclusive Leads for Roofers",
  description:
    "Exclusive roofing leads for Dallas roofers, from a system that closed $127,500 for a Dallas company. Local hail data, Texas costs per lead and Dallas FAQs.",
  eyebrow: "Roofing leads · Dallas, TX",
  h1: "Exclusive Roofing Leads for Dallas Roofers",
  intro:
    "Dallas roofers get exclusive homeowner leads from Meta ads run under their own name, verified and followed up within minutes. Our Texas campaigns produced leads at $5.31 and $7.60 each, and one Dallas company closed $127,500 and 34 installs in about 60 days. Campaigns can start producing leads in the first days.",
  heroPoints: ["Proven in Dallas: $127,500 closed, 34 installs", "Built around Dallas County hail season", "Targeted by ZIP code across the metro"],
  market: "Texas",
  areaServed: "Texas",
  areaCity: { name: "Dallas", state: "Texas" },
  serviceType: "Roofing lead generation in Dallas, Texas",
  breadcrumb: "Dallas",
  breadcrumbs: [
    { name: "Roofing Leads", path: "/roofing-leads" },
    { name: "Texas", path: "/roofing-leads-texas" },
    { name: "Dallas", path: "/roofing-leads/dallas-tx" },
  ],
  stats: [
    { value: "$127.5K", label: "Closed by a Dallas roofer, 34 installs", slug: "dallas-roofer-127500-closed-34-installs" },
    { value: "136", label: "Hail reports in Dallas County, 2021 to 2025 (NOAA)", href: "#market", source: "See data" },
    { value: "49.5%", label: "Dallas homes built before 1980 (Census ACS)", href: "#market", source: "See data" },
    { value: "$5.31 to $7.60", label: "Per lead on our Texas campaigns", slug: "texas-850-roofing-leads-8-days-7-60" },
  ],
  problems: {
    title: "What makes Dallas a hard roofing market",
    intro: "Dallas has steady roofing demand, and that is exactly why it is crowded.",
    cards: [
      { icon: "storm", title: "Hail brings everyone", text: "After a North Texas hail event, local roofers and out-of-town crews target the same neighborhoods within days." },
      { icon: "users", title: "Shared lead lists", text: "Bought Dallas leads are often sold to several roofers, so every call becomes a race." },
      { icon: "building", title: "Trust is the deciding factor", text: "Dallas homeowners have seen storm chasers. They want a local company with reviews." },
      { icon: "clock", title: "Speed decides the job", text: "In a market this busy, the first roofer to call back usually books the inspection." },
    ],
  },
  features: {
    eyebrow: "Built for Dallas",
    title: "How we run roofing campaigns in Dallas",
    intro: "These are the parts that produced the Dallas results below.",
    cards: [
      { icon: "building", title: "Local authority", text: "Ads built around the company's Google reviews and reputation in Dallas, not a generic free inspection.", slug: "dallas-roofer-127500-closed-34-installs" },
      { icon: "map", title: "ZIP-level targeting", text: "Budget goes to the Dallas ZIP codes your crews serve and where hail has hit." },
      { icon: "wallet", title: "Financing offers", text: "A $0-down, 0%-for-12-months offer produced 686 leads in 8 days for a Texas roofer. Lender terms required.", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
      { icon: "repeat", title: "Follow-up that closes", text: "Every lead gets a text and email within minutes, then structured follow-up until the job is signed." },
    ],
  },
  proofTitle: "Dallas and Texas results",
  proofIntro: "The Dallas case study leads; the other Texas campaigns show cost per lead and volume.",
  proofSlugs: ["dallas-roofer-127500-closed-34-installs", "texas-roofer-77k-closed-30-days", "texas-850-roofing-leads-8-days-7-60"],
  process: [
    { title: "Pick your Dallas areas", text: "We map the ZIP codes and suburbs your crews cover across Dallas County and nearby." },
    { title: "Position the company", text: "Reviews, years in business and local jobs become the core of the ad." },
    { title: "Time it to hail season", text: "Budget rises in spring hail months and after storm events." },
    { title: "Launch on Meta", text: "Facebook and Instagram campaigns under your company name, in English and Spanish if you serve both." },
    { title: "Verify and follow up", text: "Phone verification, then an instant text and email on every lead." },
    { title: "Track to signed jobs", text: "We measure cost per inspection and closed revenue, as in the Dallas case study." },
  ],
  compare: {
    title: "Bought Dallas leads vs your own Dallas campaign",
    intro: "In a crowded market, owning the campaign is what keeps leads exclusive.",
    bad: { title: "Bought Dallas leads", points: ["Often shared with local rivals", "Statewide, not your ZIP codes", "Generic offer", "Nothing you keep"] },
    good: { title: "Your Dallas campaign", points: ["Exclusive to your company", "Only the ZIP codes you serve", "Built on your local reviews", "You keep ads, pages and data"] },
  },
  guide: [
    {
      id: "market",
      title: "The Dallas roofing market in numbers",
      body: [
        "**Hail is frequent.** NOAA's Storm Events Database lists 136 hail reports in Dallas County from 2021 to 2025, 110 of them with hail one inch or larger and the largest at 4 inches. Most came in May, April and March ([NOAA Storm Events Database](" + NOAA + ")).",
        "**Storm losses are large.** The same county records list more than $1.3 billion in reported property damage across all storm event types in those five years, including flash flooding as well as hail ([NOAA Storm Events Database](" + NOAA + ")).",
        "**The housing stock is older.** About 49.5% of homes in the city of Dallas were built before 1980, and 42.4% of occupied homes are owner-occupied, with a median home value of $295,300 ([US Census Bureau, ACS 2019 to 2023](" + acs("160XX00US4819000") + ")).",
      ],
    },
    {
      id: "results",
      title: "What the Dallas campaign produced",
      body: [
        "Starting on 18 December, a Dallas roofing company closed $18,000 and 5 installs by 31 December, $75,600 and 21 installs in January, and $33,900 and 8 installs from 1 to 19 February: [$127,500 and 34 installs](/case-studies/dallas-roofer-127500-closed-34-installs) in just over 60 days. The ads positioned the company as one of the most trusted roofers in Dallas from the first second.",
      ],
    },
    {
      id: "season",
      title: "When is hail season in Dallas?",
      body: [
        "In Dallas County, hail reports cluster from March through June, with May the busiest month in the 2021 to 2025 NOAA data. We raise budgets ahead of that window and right after hail events, and run [roof replacement](/roof-replacement-leads) and financing offers the rest of the year. See [storm damage leads](/storm-damage-leads).",
      ],
    },
    {
      id: "lead-types",
      title: "Roofing lead types for Dallas roofers",
      body: [
        "**Storm and hail.** The biggest spring opportunity in Dallas County, with inspection offers launched after each hail event: [storm damage leads](/storm-damage-leads). **Replacement.** With about half of Dallas homes built before 1980, many roofs are due for replacement whatever the weather: [roof replacement leads](/roof-replacement-leads). **Repair.** Leaks and missing shingles between storms: [roof repair leads](/roof-repair-leads). **Commercial.** Property managers across the metroplex: [commercial roofing leads](/commercial-roofing-leads). If you also want to rank organically in Dallas, see [roofing SEO](/roofing-seo).",
      ],
    },
    {
      id: "nearby",
      title: "Areas near Dallas we target",
      body: [
        "Campaigns can cover Dallas and nearby cities such as Plano, Frisco, Arlington, Irving and Garland, set by ZIP code to match where your crews work. For the rest of the state, see [roofing leads in Texas](/roofing-leads-texas) and [roofing leads in Houston](/roofing-leads/houston-tx).",
      ],
    },
  ],
  faqs: [
    { q: "Are roofing leads in Dallas exclusive?", a: "Yes. Campaigns run under your company name, so every Dallas homeowner who responds is contacting your company only." },
    { q: "When is hail season in Dallas?", a: "In NOAA's 2021 to 2025 records for Dallas County, hail reports cluster from March through June, with May the busiest month." },
    { q: "How much do roofing leads cost in Dallas?", a: "Our Texas campaigns produced leads at $5.31 and $7.60 each. Cost depends on the offer, season and how strictly leads are verified." },
    { q: "Do you have Dallas results?", a: "Yes. A Dallas roofing company closed $127,500 and 34 installs in just over 60 days with our system." },
    { q: "Can you target only parts of Dallas?", a: "Yes. We target by ZIP code, county or radius, so leads come only from the areas your crews serve." },
  ],
  related: [
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas", text: "The Texas hub" },
    { href: "/roofing-leads/houston-tx", label: "Roofing leads in Houston", text: "Texas Gulf Coast" },
    { href: "/storm-damage-leads", label: "Storm damage leads", text: "After hail and wind" },
    { href: "/roofing-leads", label: "All markets", text: "Roofing leads by market" },
  ],
  updated: "2026-11-25",
  formTitle: "Get your free Dallas market breakdown",
};

export const houston: LandingDoc = {
  slug: "houston-tx",
  path: "/roofing-leads/houston-tx",
  title: "Roofing Leads in Houston, TX: Exclusive Leads for Roofers",
  description:
    "Exclusive roofing leads for Houston roofers: Harris County storm data, Texas costs per lead, Gulf season timing and campaigns targeted by ZIP code.",
  eyebrow: "Roofing leads · Houston, TX",
  h1: "Exclusive Roofing Leads for Houston Roofers",
  intro:
    "Houston roofers get exclusive homeowner leads from campaigns under their own brand, targeted to the ZIP codes they serve across Harris County. Our Texas campaigns produced leads at $5.31 and $7.60 each. We do not have a Houston-only case study yet, so the proof below comes from our Texas campaigns, including Dallas.",
  heroPoints: ["Texas-proven system: $5.31 and $7.60 per lead", "Timed to spring storms and the Gulf season", "Targeted by ZIP code across Harris County"],
  market: "Texas",
  areaServed: "Texas",
  areaCity: { name: "Houston", state: "Texas" },
  serviceType: "Roofing lead generation in Houston, Texas",
  breadcrumb: "Houston",
  breadcrumbs: [
    { name: "Roofing Leads", path: "/roofing-leads" },
    { name: "Texas", path: "/roofing-leads-texas" },
    { name: "Houston", path: "/roofing-leads/houston-tx" },
  ],
  stats: [
    { value: "110", label: "Thunderstorm wind reports, Harris County 2021 to 2025 (NOAA)", href: "#market", source: "See data" },
    { value: "1M+", label: "Housing units in the city of Houston (Census ACS)", href: "#market", source: "See data" },
    { value: "850", label: "Leads in 8 days for a Texas roofer at $7.60", slug: "texas-850-roofing-leads-8-days-7-60" },
    { value: "$77.1K", label: "Won in 30 days by a Texas roofing company", slug: "texas-roofer-77k-closed-30-days" },
  ],
  problems: {
    title: "What Houston roofers are up against",
    intro: "Houston is huge, spread out and hit by more than one kind of storm.",
    cards: [
      { icon: "map", title: "A metro too big to cover", text: "Leads from across the metro waste drive time. Campaigns need to follow your crews' areas." },
      { icon: "storm", title: "Wind as well as hail", text: "Thunderstorm wind reports outnumber hail reports in Harris County, so damage offers must cover both." },
      { icon: "users", title: "Shared and resold leads", text: "Bought Houston leads often reach several contractors at once." },
      { icon: "clock", title: "Long hurricane season", text: "The Atlantic season runs from 1 June to 30 November, and demand can spike at any point in it." },
    ],
  },
  features: {
    eyebrow: "Built for Houston",
    title: "How we run roofing campaigns in Houston",
    intro: "The Texas system, adjusted for the Gulf Coast.",
    cards: [
      { icon: "map", title: "Area-by-area budgets", text: "Separate targeting for the parts of Harris County and nearby cities you serve." },
      { icon: "storm", title: "Wind and hail offers", text: "Inspection offers for wind and hail damage, ready to launch after a storm." },
      { icon: "zap", title: "Texas-tested creative", text: "Creative that held a 3.79% click-through rate on a Texas campaign of 850 leads.", slug: "texas-850-roofing-leads-8-days-7-60" },
      { icon: "repeat", title: "Bilingual follow-up", text: "Ads and follow-up in English and Spanish when your team serves both." },
    ],
  },
  proofTitle: "Texas results behind the Houston system",
  proofIntro: "No Houston-only case study is published yet. These are our Texas campaigns.",
  proofSlugs: ["texas-roofer-686-leads-8-days-0-down-offer", "537-qualified-leads-13-days-andromeda-update", "texas-850-roofing-leads-8-days-7-60"],
  process: [
    { title: "Choose your Houston areas", text: "We set targeting by ZIP code to match where your crews work in and around Harris County." },
    { title: "Plan for two seasons", text: "Spring hail and wind, then the Gulf hurricane season from June to November." },
    { title: "Build the offer", text: "Wind and hail inspections after storms, replacement and financing the rest of the year." },
    { title: "Launch on Meta", text: "Facebook and Instagram campaigns under your company name, with Spanish creative where it fits." },
    { title: "Verify every lead", text: "Phone verification before the lead reaches your team." },
    { title: "Report weekly", text: "Cost per lead, per inspection and signed jobs, by area." },
  ],
  compare: {
    title: "Metro-wide lead lists vs a Houston campaign you own",
    intro: "In a metro this size, where the lead comes from decides whether it is profitable.",
    bad: { title: "Metro-wide lists", points: ["Leads across the whole metro", "Shared with other contractors", "One generic offer", "Stops when you stop paying"] },
    good: { title: "Your Houston campaign", points: ["Only your areas", "Exclusive to your company", "Wind, hail and replacement offers", "You keep the system"] },
  },
  guide: [
    {
      id: "market",
      title: "The Houston roofing market in numbers",
      body: [
        "**Wind is the most common storm report.** NOAA's Storm Events Database lists 110 thunderstorm wind reports in Harris County from 2021 to 2025, plus 77 hail reports (68 of them one inch or larger, the largest 2 inches) and 13 tornadoes ([NOAA Storm Events Database](" + NOAA + ")).",
        "**Hail peaks in spring.** Harris County hail reports were most frequent in March, June and May over those five years ([NOAA Storm Events Database](" + NOAA + ")).",
        "**A very large, older housing stock.** The city of Houston has about 1,023,112 housing units; about 48.3% were built before 1980, 42.0% of occupied homes are owner-occupied, and the median home value is $253,400 ([US Census Bureau, ACS 2019 to 2023](" + acs("160XX00US4835000") + ")).",
      ],
    },
    {
      id: "proof",
      title: "What our Texas campaigns produced",
      body: [
        "A Texas roofer got [850 leads in 8 days at $7.60](/case-studies/texas-850-roofing-leads-8-days-7-60) with a 3.79% click-through rate, another got [686 leads in 8 days at $5.31](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) with a $0-down offer, and a Texas roofing company won [$77,100 in 30 days](/case-studies/texas-roofer-77k-closed-30-days). We will publish Houston-specific results when a Houston campaign completes reporting.",
      ],
    },
    {
      id: "season",
      title: "Storm seasons in Houston",
      body: [
        "Houston roofers deal with spring hail and wind, then the Atlantic hurricane season from 1 June to 30 November. A campaign built before the season can launch within hours of a storm in your areas. See [storm damage leads](/storm-damage-leads) and [roof repair leads](/roof-repair-leads).",
      ],
    },
    {
      id: "lead-types",
      title: "Roofing lead types for Houston roofers",
      body: [
        "**Wind damage.** Thunderstorm wind is the most common storm report in Harris County, so wind inspections lead after severe weather: [storm damage leads](/storm-damage-leads). **Repair.** Storms and heavy rain bring leak and damage calls between major events: [roof repair leads](/roof-repair-leads). **Replacement.** Nearly half the city's housing was built before 1980: [roof replacement leads](/roof-replacement-leads). **Commercial.** Warehouses, offices and apartment complexes across the metro: [commercial roofing leads](/commercial-roofing-leads).",
      ],
    },
    {
      id: "nearby",
      title: "Areas near Houston we target",
      body: [
        "Campaigns can cover Houston and nearby cities such as Pasadena, Pearland, Sugar Land, Katy and The Woodlands, set by ZIP code. For North Texas, see [roofing leads in Dallas](/roofing-leads/dallas-tx); for the whole state, the [Texas hub](/roofing-leads-texas).",
      ],
    },
  ],
  faqs: [
    { q: "Are Houston roofing leads exclusive?", a: "Yes. Campaigns run under your company name, so leads go to your company only." },
    { q: "Do you have Houston case studies?", a: "Not yet. Our Texas campaigns, including Dallas, show the results; we will publish Houston results when a Houston campaign completes reporting." },
    { q: "What storms cause roof damage in Houston?", a: "In NOAA's 2021 to 2025 records for Harris County, thunderstorm wind reports were most common, followed by hail, with tornadoes and the Gulf hurricane season adding risk." },
    { q: "How much do roofing leads cost in Houston?", a: "Our Texas campaigns produced leads at $5.31 and $7.60 each. Houston costs depend on offer, season and verification." },
    { q: "Can you run Spanish-language roofing ads in Houston?", a: "Yes, when your team can serve Spanish-speaking homeowners, with follow-up in the same language." },
  ],
  related: [
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas", text: "The Texas hub" },
    { href: "/roofing-leads/dallas-tx", label: "Roofing leads in Dallas", text: "North Texas" },
    { href: "/roof-repair-leads", label: "Roof repair leads", text: "Leaks and wind damage" },
    { href: "/roofing-leads", label: "All markets", text: "Roofing leads by market" },
  ],
  updated: "2026-11-25",
  formTitle: "Get your free Houston market breakdown",
};

export const miami: LandingDoc = {
  slug: "miami-fl",
  path: "/roofing-leads/miami-fl",
  title: "Roofing Leads in Miami, FL: Exclusive Leads for Roofers",
  description:
    "Exclusive, verified roofing leads for Miami roofers, from city-specific funnels that produced 295 verified leads across Miami, Tampa and Orlando.",
  eyebrow: "Roofing leads · Miami, FL",
  h1: "Exclusive Roofing Leads for Miami Roofers",
  intro:
    "Miami roofers get exclusive, phone-verified homeowner leads from a city-specific funnel under their own brand. A Florida campaign with separate funnels for Miami, Tampa and Orlando produced 295 verified leads at $22.58 each, and our verified Florida campaigns ran between $19.50 and $22.58 per lead.",
  heroPoints: ["Miami-specific funnel, proven in Florida", "Every lead verified with a one-time code", "Targeted to owner-occupied neighborhoods"],
  market: "Florida",
  areaServed: "Florida",
  areaCity: { name: "Miami", state: "Florida" },
  serviceType: "Roofing lead generation in Miami, Florida",
  breadcrumb: "Miami",
  breadcrumbs: [
    { name: "Roofing Leads", path: "/roofing-leads" },
    { name: "Florida", path: "/roofing-leads-florida" },
    { name: "Miami", path: "/roofing-leads/miami-fl" },
  ],
  stats: [
    { value: "295", label: "Verified leads across Miami, Tampa and Orlando", slug: "florida-295-verified-roofing-leads-miami-tampa-orlando" },
    { value: "30.7%", label: "Owner-occupied homes in the city of Miami (Census ACS)", href: "#market", source: "See data" },
    { value: "52.4%", label: "Miami homes built before 1980 (Census ACS)", href: "#market", source: "See data" },
    { value: "$111.2K", label: "Won in 31 days by a Florida roofing company", slug: "florida-roofer-111k-31-days" },
  ],
  problems: {
    title: "What makes Miami different",
    intro: "Miami roofing demand is real, but the market behaves differently from most US cities.",
    cards: [
      { icon: "users", title: "Mostly renters", text: "Only about three in ten occupied homes in the city are owner-occupied, so broad ads reach many people who cannot hire a roofer." },
      { icon: "building", title: "Condos and multi-family", text: "Many buildings are run by associations and property managers, which is a commercial sale, not a homeowner sale." },
      { icon: "storm", title: "A long storm season", text: "The Atlantic hurricane season runs from 1 June to 30 November." },
      { icon: "phone", title: "Fake and wrong numbers", text: "Unverified forms waste calls; verification matters more in a crowded market." },
    ],
  },
  features: {
    eyebrow: "Built for Miami",
    title: "How we run roofing campaigns in Miami",
    intro: "Lessons from the Miami, Tampa and Orlando campaign.",
    cards: [
      { icon: "map", title: "A Miami-only funnel", text: "A page and campaign for Miami alone, run side by side with other Florida cities.", slug: "florida-295-verified-roofing-leads-miami-tampa-orlando" },
      { icon: "shield", title: "OTP verification", text: "Every lead confirms a one-time code before it reaches your team.", slug: "florida-365-otp-verified-leads-4-locations" },
      { icon: "target", title: "Owner-occupied targeting", text: "Targeting and qualifying questions that focus on homeowners, not renters." },
      { icon: "repeat", title: "Bilingual campaigns", text: "Ads and follow-up in English and Spanish when your team serves both." },
    ],
  },
  proofTitle: "Miami and Florida results",
  proofIntro: "The Miami, Tampa and Orlando campaign leads; the others are Florida campaigns.",
  proofSlugs: ["florida-295-verified-roofing-leads-miami-tampa-orlando", "florida-365-otp-verified-leads-4-locations", "florida-roofer-111k-31-days", "florida-home-services-280-leads-15-days"],
  process: [
    { title: "Define your Miami area", text: "Neighborhoods and ZIP codes your crews serve in Miami-Dade." },
    { title: "Focus on owners", text: "Targeting and form questions that screen out renters." },
    { title: "Build the Miami page", text: "A city-specific page with your reviews and Miami jobs." },
    { title: "Launch and verify", text: "Campaigns go live with OTP verification on every lead." },
    { title: "Follow up in their language", text: "Instant text and email, in English or Spanish." },
    { title: "Compare cities", text: "If you serve other Florida cities, campaigns run side by side and budget follows results." },
  ],
  compare: {
    title: "Broad Florida lists vs a Miami funnel",
    intro: "In a renter-heavy city, targeting decides how many leads are real buyers.",
    bad: { title: "Broad Florida lists", points: ["Renters and owners mixed", "Often shared", "Numbers not verified", "No Miami-specific page"] },
    good: { title: "Your Miami funnel", points: ["Focused on homeowners", "Exclusive to your company", "Every number verified", "A page built for Miami"] },
  },
  guide: [
    {
      id: "market",
      title: "The Miami roofing market in numbers",
      body: [
        "**Owners are a minority.** Only about 30.7% of occupied homes in the city of Miami are owner-occupied, and about 23.1% of housing units are single-family detached homes ([US Census Bureau, ACS 2019 to 2023](" + acs("160XX00US1245000") + ")).",
        "**The housing stock is old and valuable.** About 52.4% of Miami's homes were built before 1980, and the median value of owner-occupied homes is $475,200 ([US Census Bureau, ACS 2019 to 2023](" + acs("160XX00US1245000") + ")).",
        "**Storms beyond hurricanes.** NOAA's Storm Events Database lists 43 thunderstorm wind reports, 23 hail reports and 7 tornadoes in Miami-Dade County from 2021 to 2025, with hail most often in April and May ([NOAA Storm Events Database](" + NOAA + ")).",
      ],
    },
    {
      id: "results",
      title: "What the Miami, Tampa and Orlando campaign produced",
      body: [
        "We built hyper-local funnels for Miami, Tampa and Orlando, each with OTP-verified lead capture. From 1 to 13 February 2026, the campaigns produced [295 verified leads from $6,662 of ad spend](/case-studies/florida-295-verified-roofing-leads-miami-tampa-orlando), at $22.58 per lead. A separate Florida roofing company won [$111,200 in 31 days](/case-studies/florida-roofer-111k-31-days).",
      ],
    },
    {
      id: "condo",
      title: "Condo and association roofing in Miami",
      body: [
        "With many multi-family buildings, a share of Miami roofing work is decided by associations and property managers. That is a longer, commercial sale with several decision makers. See [commercial roofing leads](/commercial-roofing-leads) for how we approach it.",
      ],
    },
    {
      id: "lead-types",
      title: "Roofing lead types for Miami roofers",
      body: [
        "**Homeowner replacement.** Fewer owners, but high home values, so each replacement is a large job: [roof replacement leads](/roof-replacement-leads). **Associations and buildings.** Condo boards and property managers decide many roofs: [commercial roofing leads](/commercial-roofing-leads). **Storm response.** Wind and hurricane season inspections: [storm damage leads](/storm-damage-leads). **Repair.** Leak repairs after heavy rain: [roof repair leads](/roof-repair-leads). For organic rankings in South Florida, see [roofing SEO](/roofing-seo).",
      ],
    },
    {
      id: "nearby",
      title: "Areas near Miami we target",
      body: [
        "Campaigns can cover Miami and nearby cities such as Hialeah, Miami Beach, Coral Gables, Doral and Kendall, set by ZIP code. Tampa and Orlando are covered on the [Florida hub](/roofing-leads-florida); for Texas markets, see [roofing leads in Dallas](/roofing-leads/dallas-tx).",
      ],
    },
  ],
  faqs: [
    { q: "Are Miami roofing leads exclusive and verified?", a: "Yes. Campaigns run under your company name, and every lead confirms its phone number with a one-time code before it reaches you." },
    { q: "Do you have Miami results?", a: "Yes. A Florida campaign with separate funnels for Miami, Tampa and Orlando produced 295 verified leads at $22.58 each." },
    { q: "How do you avoid renter leads in Miami?", a: "With targeting and qualifying questions that focus on homeowners, since only about 30.7% of occupied homes in the city are owner-occupied." },
    { q: "When is storm season in Miami?", a: "The Atlantic hurricane season runs from 1 June to 30 November. NOAA records also show thunderstorm wind and spring hail in Miami-Dade County." },
    { q: "Can you run Spanish-language roofing ads in Miami?", a: "Yes, with follow-up in Spanish when your team serves Spanish-speaking homeowners." },
  ],
  related: [
    { href: "/roofing-leads-florida", label: "Roofing leads in Florida", text: "The Florida hub, Tampa and Orlando" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads", text: "How OTP verification works" },
    { href: "/commercial-roofing-leads", label: "Commercial roofing leads", text: "Associations and managers" },
    { href: "/roofing-leads", label: "All markets", text: "Roofing leads by market" },
  ],
  updated: "2026-11-25",
  formTitle: "Get your free Miami market breakdown",
};

export const nashville: LandingDoc = {
  slug: "nashville-tn",
  path: "/roofing-leads/nashville-tn",
  title: "Roofing Leads in Nashville, TN: Exclusive Leads for Roofers",
  description:
    "Exclusive roofing leads for Nashville roofers: Davidson County storm and housing data, national campaign results and how we would run a Nashville campaign.",
  eyebrow: "Roofing leads · Nashville, TN",
  h1: "Exclusive Roofing Leads for Nashville Roofers",
  intro:
    "Nashville roofers can get exclusive homeowner leads from campaigns under their own brand, targeted to the parts of Davidson County and nearby cities they serve. We have not published a Nashville campaign yet, so this page uses our national results, where cost per lead ranged from $3.75 to $24, plus local storm and housing data.",
  heroPoints: ["Exclusive leads under your company name", "Built around wind and spring storm risk", "Honest proof: national results, clearly labeled"],
  areaCity: { name: "Nashville", state: "Tennessee" },
  serviceType: "Roofing lead generation in Nashville, Tennessee",
  breadcrumb: "Nashville",
  breadcrumbs: [
    { name: "Roofing Leads", path: "/roofing-leads" },
    { name: "Nashville", path: "/roofing-leads/nashville-tn" },
  ],
  stats: [
    { value: "181", label: "Thunderstorm wind reports, Davidson County 2021 to 2025 (NOAA)", href: "#market", source: "See data" },
    { value: "53.0%", label: "Owner-occupied homes in Nashville (Census ACS)", href: "#market", source: "See data" },
    { value: "1,480", label: "Leads at $4.77 on a national campaign", slug: "1480-roofing-leads-4-77-cpl" },
    { value: "$3.75 to $24", label: "Cost per lead across our published campaigns", href: "/roofing-lead-cost-report-2026", source: "See the report" },
  ],
  problems: {
    title: "What Nashville roofers deal with",
    intro: "Nashville has more owners than most big cities, and storm risk that is easy to underestimate.",
    cards: [
      { icon: "storm", title: "Wind more than hail", text: "Thunderstorm wind reports far outnumber hail reports in Davidson County, so damage often comes from wind." },
      { icon: "map", title: "A spread-out metro", text: "Leads from across Middle Tennessee waste drive time unless targeting follows your crews." },
      { icon: "users", title: "Shared leads", text: "Bought leads are often sent to several roofers at once." },
      { icon: "clock", title: "Busy spring", text: "Hail and severe storms cluster in spring, when every roofer is busy at once." },
    ],
  },
  features: {
    eyebrow: "Built for Nashville",
    title: "How we would run a Nashville campaign",
    intro: "The same system as our published campaigns, set up for Middle Tennessee.",
    cards: [
      { icon: "storm", title: "Wind damage offers", text: "Inspection offers for wind and storm damage, ready to launch after severe weather." },
      { icon: "wallet", title: "Replacement and financing", text: "For the many owner-occupied homes, replacement offers with financing answer the cost objection.", slug: "texas-roofer-686-leads-8-days-0-down-offer" },
      { icon: "target", title: "Steady volume", text: "Clear rules for launching, killing and scaling ads held $4.77 per lead across 1,480 leads.", slug: "1480-roofing-leads-4-77-cpl" },
      { icon: "map", title: "Targeted by area", text: "Davidson County and nearby cities, set by ZIP code to match your crews." },
    ],
  },
  proofTitle: "National results behind the Nashville system",
  proofIntro: "No Nashville campaign is published yet. These are our strongest national results.",
  proofSlugs: ["1480-roofing-leads-4-77-cpl", "1865-roofing-leads-5-24-cpl-oct-jan", "825-verified-roofing-leads-4-95-cpl", "261-otp-verified-leads-7-days-new-account"],
  process: [
    { title: "Map Middle Tennessee", text: "We set targeting to the Nashville areas and nearby cities your crews cover." },
    { title: "Plan for spring and wind", text: "Budget rises with spring storms; wind damage offers are ready year-round." },
    { title: "Build the Nashville page", text: "A page with your reviews and local jobs, matched to the ad." },
    { title: "Launch on Meta", text: "Facebook and Instagram campaigns under your company name." },
    { title: "Verify and follow up", text: "Phone verification and an instant text and email on every lead." },
    { title: "Publish results", text: "Weekly reporting, and a Nashville case study once there are results to share." },
  ],
  compare: {
    title: "Bought Nashville leads vs your own campaign",
    intro: "Without local proof yet, owning the campaign is what keeps quality in your control.",
    bad: { title: "Bought leads", points: ["Often shared", "Seller's offer and pages", "No control over quality", "Stops when you stop paying"] },
    good: { title: "Your Nashville campaign", points: ["Exclusive to your company", "Your offer and your reviews", "Verification you control", "You keep the system"] },
  },
  guide: [
    {
      id: "market",
      title: "The Nashville roofing market in numbers",
      body: [
        "**Wind is the main storm risk.** NOAA's Storm Events Database lists 181 thunderstorm wind reports in Davidson County from 2021 to 2025, compared with 38 hail reports and 9 tornadoes ([NOAA Storm Events Database](" + NOAA + ")).",
        "**Hail peaks in spring.** Davidson County hail reports were most frequent in May and March over those five years, and 25 of the 38 were hail one inch or larger ([NOAA Storm Events Database](" + NOAA + ")).",
        "**More owners than most big cities.** In Nashville-Davidson, 53.0% of occupied homes are owner-occupied, about half of housing units are single-family detached, 42.3% were built before 1980, and the median home value is $383,100 ([US Census Bureau, ACS 2019 to 2023](" + acs("160XX00US4752006") + ")).",
      ],
    },
    {
      id: "proof",
      title: "Our proof, honestly labeled",
      body: [
        "We have not run a published Nashville campaign yet. Our national results include [1,480 leads at $4.77](/case-studies/1480-roofing-leads-4-77-cpl), [1,865 leads at $5.24](/case-studies/1865-roofing-leads-5-24-cpl-oct-jan), a Dallas roofer that [closed $127,500](/case-studies/dallas-roofer-127500-closed-34-installs) and a Florida roofing company that [won $111,200 in 31 days](/case-studies/florida-roofer-111k-31-days). Full cost data is in the [roofing lead cost report](/roofing-lead-cost-report-2026).",
      ],
    },
    {
      id: "offers",
      title: "Offers that fit Nashville",
      body: [
        "With more owner-occupied homes than many large cities, replacement and financing offers have a bigger audience. After severe storms, wind damage inspections lead. See [roof replacement leads](/roof-replacement-leads) and [storm damage leads](/storm-damage-leads).",
      ],
    },
    {
      id: "lead-types",
      title: "Roofing lead types for Nashville roofers",
      body: [
        "**Replacement for owners.** With 53% of homes owner-occupied and many single-family houses, replacement campaigns have a large audience: [roof replacement leads](/roof-replacement-leads). **Wind and storm.** Severe thunderstorms are the leading damage source in Davidson County: [storm damage leads](/storm-damage-leads). **Repair.** Fast-response repair campaigns for leaks between storms: [roof repair leads](/roof-repair-leads). **Commercial.** Property managers and business owners across Middle Tennessee: [commercial roofing leads](/commercial-roofing-leads).",
      ],
    },
    {
      id: "nearby",
      title: "Areas near Nashville we target",
      body: [
        "Campaigns can cover Nashville and nearby cities such as Franklin, Brentwood, Murfreesboro, Hendersonville and Mount Juliet, set by ZIP code. Our other city pages are [roofing leads in Dallas](/roofing-leads/dallas-tx) and [roofing leads in Miami](/roofing-leads/miami-fl).",
      ],
    },
  ],
  faqs: [
    { q: "Are Nashville roofing leads exclusive?", a: "Yes. Campaigns run under your company name, so leads go to your company only." },
    { q: "Do you have Nashville results?", a: "Not yet. This page uses our national results, clearly labeled, and we will publish Nashville results when a campaign completes reporting." },
    { q: "What causes most roof damage in Nashville?", a: "In NOAA's 2021 to 2025 records for Davidson County, thunderstorm wind reports were far more common than hail, with spring the busiest time for hail." },
    { q: "How much do roofing leads cost in Nashville?", a: "We have no Nashville figure yet. Across our published campaigns, cost per lead ranged from $3.75 to $24." },
    { q: "Do you cover cities around Nashville?", a: "Yes, including Franklin, Brentwood, Murfreesboro, Hendersonville and Mount Juliet, set by ZIP code." },
  ],
  related: [
    { href: "/roofing-leads", label: "All markets", text: "Roofing leads by market" },
    { href: "/roofing-leads/dallas-tx", label: "Roofing leads in Dallas", text: "Our strongest city proof" },
    { href: "/roof-replacement-leads", label: "Roof replacement leads", text: "Offers for owners" },
    { href: "/roofing-lead-cost-report-2026", label: "Cost report 2026", text: "What leads cost" },
  ],
  updated: "2026-11-25",
  formTitle: "Get your free Nashville market breakdown",
};

export const cityPages = [dallas, houston, miami, nashville];
