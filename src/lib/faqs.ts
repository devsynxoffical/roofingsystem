// Shared FAQ content: used by the on-page FAQ chat and the FAQPage structured data.
export type Category = "The system" | "Results" | "Working together";

export type Faq = { q: string; a: string; cat: Category; tags: string[] };

export const faqs: Faq[] = [
  {
    q: "What does a roofing marketing agency do?",
    a: "A roofing marketing agency finds homeowners who need a roof and turns them into booked inspections for a roofing company. Roofing Systems Co. does this as one system: Facebook and Instagram ads, roofing SEO, landing pages, phone verification, CRM follow-up and weekly reporting on booked inspections and signed jobs, all inside accounts the roofer owns.",
    cat: "The system",
    tags: ["Roofing marketing agency"],
  },
  {
    q: "What roofing marketing services do you offer?",
    a: "Our roofing marketing services cover offer positioning, Facebook ads for roofing companies, ad creatives, landing pages, phone-verified lead forms, roofing SEO, CRM setup, AI follow-up and appointment reminders. Everything feeds one CRM, with weekly reporting on cost per lead, booked inspections and closed revenue.",
    cat: "The system",
    tags: ["Roofing marketing services", "Roofing marketing company"],
  },
  {
    q: "Do you offer SEO services for roofing companies?",
    a: "Yes. Our roofing company SEO covers your Google Business Profile, a service page for every job type and city you serve, technical fixes so Google can index the site, helpful content and real local links. Roofing contractor SEO takes months, so we run it alongside paid ads that bring leads in the first weeks.",
    cat: "The system",
    tags: ["Roofing SEO company", "Seo services for roofers"],
  },
  {
    q: "What is digital marketing for roofers?",
    a: "Digital marketing for roofers is every online channel that brings a roofing company new jobs: paid social and search ads, SEO and Google Business Profile, a website that converts, reviews and automated follow-up. It works best as one connected system, so every lead is answered fast and tracked to a signed job.",
    cat: "The system",
    tags: ["Digital marketing for roofers", "Digital marketing for roofing companies"],
  },
  {
    q: "Do Facebook ads work for roofing companies?",
    a: "Yes, when the funnel qualifies homeowners and the team calls fast. Across our 18 published roofing campaigns, cost per lead ranged from $3.75 to $24, with a median of $13.40. A Dallas roofer closed $127,500 and 34 installs in about 60 days from these campaigns.",
    cat: "Results",
    tags: ["Facebook ads for roofing companies", "$13.40 median"],
  },
  {
    q: "How long does roofing SEO take to work?",
    a: "Roofer SEO services usually take several months to move rankings, because Google needs time to crawl new pages, trust the site and see reviews build up. That is why we pair SEO with paid ads: the ads bring booked inspections now, and SEO lowers the cost per lead over time.",
    cat: "Results",
    tags: ["Roofer seo services", "SEO timeline"],
  },
  {
    q: "How do I choose between roofing marketing companies?",
    a: "Ask who owns the ad account, website and data, whether leads are exclusive, which real roofing results they can show with numbers, how fast leads are contacted, and whether they report booked inspections and signed jobs rather than clicks. The best roofer marketing answers all five clearly.",
    cat: "Working together",
    tags: ["Roofing marketing companies", "Best roofer marketing"],
  },
  {
    q: "Who owns the ads, website and data?",
    a: "You do. As your roofing digital marketing agency, we build the ad account, landing pages, Google Business Profile and CRM inside your own accounts. If you stop working with us, the campaigns, pages, reviews and lead data stay with your roofing company.",
    cat: "Working together",
    tags: ["Roofing digital marketing agency", "You own it"],
  },
];
