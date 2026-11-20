// Shared FAQ content: used by the on-page FAQ chat and the FAQPage structured data.
export type Category = "The system" | "Results" | "Working together";

export type Faq = { q: string; a: string; cat: Category; tags: string[] };

export const faqs: Faq[] = [
  {
    q: "What exactly is Roofing Systems™?",
    a: "It's a complete done-for-you client acquisition system built for roofing companies. We handle offer positioning, Meta ads, ad creatives, landing pages, the full sales funnel, CRM setup, AI follow-up, email and SMS sequences, and lead qualification — all managed for you.",
    cat: "The system",
    tags: ["Ads", "Funnels", "CRM"],
  },
  {
    q: "Who is this for?",
    a: "Roofing contractors doing $1M+ in annual revenue who want predictable, repeatable growth instead of lead-dependent chaos. If you're tired of overpaying for marketing with nothing to show for it, this is built for you.",
    cat: "Working together",
    tags: ["$1M+ roofers"],
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable lead growth within 30–45 days of launch. Every engagement is backed by mutually agreed growth milestones we commit to hitting within the first 90 days.",
    cat: "Results",
    tags: ["30–45 days", "90-day milestones"],
  },
  {
    q: "What happens if it doesn't work?",
    a: "We continue working for you at no management fee until we help you hit the agreed milestones. Everything is backed by a written agreement, so the risk sits on us, not you.",
    cat: "Results",
    tags: ["Guarantee", "Written agreement"],
  },
  {
    q: "Do I actually own the assets?",
    a: "Yes. Landing pages, sales funnel, CRM, automations, ad creatives, copy, follow-up sequences, and your customer data are 100% yours — permanently. It becomes a business asset you own outright.",
    cat: "The system",
    tags: ["Ownership", "Your data"],
  },
  {
    q: "Is there a long-term contract lock-in?",
    a: "No. We don't lock you in with long-term contracts. We earn the renewal by delivering results, not by trapping you in a commitment.",
    cat: "Working together",
    tags: ["No lock-in"],
  },
  {
    q: "Where do your roofing leads come from?",
    a: "From Meta ads (Facebook and Instagram) we run under your company name, sent to landing pages we build for you. Every lead is phone-verified and followed up automatically. They're not bought lists.",
    cat: "The system",
    tags: ["Roofing leads", "Meta ads"],
  },
  {
    q: "Are your roofing leads exclusive, or for sale to other roofers?",
    a: "Exclusive. Homeowners respond to your brand, so leads go to your company only. Unlike roofing leads for sale from lead sellers, they're never shared or resold.",
    cat: "The system",
    tags: ["Exclusive roofing leads"],
  },
  {
    q: "Can you get roofing leads near me?",
    a: "Yes. Campaigns target your service area by metro, county, ZIP code or radius anywhere in the US. See our Texas and Florida results on the case studies page.",
    cat: "Working together",
    tags: ["Roofing leads near me"],
  },
  {
    q: "How is this different from a traditional agency?",
    a: "Agencies run ads and hand you raw, unqualified leads. We build and operate the entire acquisition engine end-to-end — and our proprietary qualification process filters leads before they ever reach your sales team, so your crew spends time closing roofing projects, not chasing tire-kickers.",
    cat: "The system",
    tags: ["End-to-end", "Qualified leads"],
  },
];
