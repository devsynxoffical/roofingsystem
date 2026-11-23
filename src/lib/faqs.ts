// Shared FAQ content: used by the on-page FAQ chat and the FAQPage structured data.
export type Category = "The system" | "Results" | "Working together";

export type Faq = { q: string; a: string; cat: Category; tags: string[] };

export const faqs: Faq[] = [
  {
    q: "How do I get roofing leads?",
    a: "The most reliable way is to run your own ads to homeowners in your service area, send them to a short qualifying form and call every lead within five minutes. Referrals and door knocking help, but paid social and search campaigns are what make lead flow predictable every month.",
    cat: "The system",
    tags: ["Roofing leads", "Own ads"],
  },
  {
    q: "How much do roofing leads cost?",
    a: "Shared roofing leads are cheap per lead but are sold to several roofers. Leads from your own Facebook campaigns usually cost more per lead and convert far better. Our published campaigns range from $4.51 to $14.58 per lead, depending on market, season and offer.",
    cat: "Results",
    tags: ["Cost per lead", "$4.51 to $14.58"],
  },
  {
    q: "What are exclusive roofing leads?",
    a: "Exclusive roofing leads are homeowners who asked for a quote from you alone. Nobody else receives their details. Because you are the only company calling, contact rates and close rates are much higher than with shared lead lists.",
    cat: "The system",
    tags: ["Exclusive roofing leads"],
  },
  {
    q: "Are roofing leads from Facebook good quality?",
    a: "Yes, when the funnel qualifies them. We ask about roof age, homeownership, damage and timeline before a lead reaches you, and phone numbers can be verified with a one-time code. Weak leads are filtered out before your team spends time on them.",
    cat: "Results",
    tags: ["Facebook leads", "Verified"],
  },
  {
    q: "How do roofing companies get leads without storms?",
    a: "They target homeowners with older roofs, run replacement and financing offers, and follow up with past estimates. Storm campaigns add volume when weather hits, but a replacement campaign keeps the calendar full in quiet months.",
    cat: "Working together",
    tags: ["Replacement leads", "Storm leads"],
  },
  {
    q: "Can I get roofing leads for free?",
    a: "Free sources include Google Business Profile, referrals, local SEO and past customers. They are worth building, but they grow slowly. Paid campaigns are what most growing roofers use to add a predictable number of inspections each week.",
    cat: "Working together",
    tags: ["Free roofing leads"],
  },
  {
    q: "What makes the best roofing lead generation company?",
    a: "Look for exclusive leads, campaigns in your own ad account, real case results, fast follow-up and reporting on booked inspections and closed jobs, not just lead counts.",
    cat: "Working together",
    tags: ["Best roofing leads", "Lead generation companies"],
  },
];
