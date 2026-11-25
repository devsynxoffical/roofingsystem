/*
  Long-form content for service pages and blog articles.
  Written from what Roofing Systems Co. actually offers. No invented statistics:
  where a number appears, it is the company's own published commitment.
*/

export type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] };

export type ContentDoc = {
  slug: string;
  path: string;
  kind: "service" | "article";
  serviceType?: string;
  title: string; // <title>
  description: string; // meta description
  eyebrow: string;
  h1: string;
  intro: string;
  published: string;
  updated: string;
  blocks: Block[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  breadcrumbs: { name: string; path: string }[];
  ctaTitle: string;
  /** 1-3 sentence direct answer shown at the top (answer engines quote this) */
  shortAnswer?: string;
};


export const facebookAdsForRoofers: ContentDoc = {
  slug: "facebook-ads-for-roofers",
  path: "/facebook-ads-for-roofers",
  kind: "service",
  serviceType: "Facebook and Instagram advertising for roofing companies",
  title: "Facebook Ads for Roofers: Exclusive Leads",
  description:
    "Facebook and Instagram ads for roofing companies, built into a full system: offer, creatives, landing page, CRM and AI follow-up that book inspections.",
  eyebrow: "Roofing Facebook ads",
  h1: "Roofing Facebook Ads That Book Inspections, Not Just Clicks",
  intro:
    "Most roofers who say Facebook ads \"don't work\" ran ads without the rest of the system behind them. We build and run Meta (Facebook and Instagram) ads for $1M+ roofing companies as one part of a complete client acquisition system, so every click has an offer, a page, a follow-up sequence and a qualification step waiting for it.",
  published: "2026-11-16",
  updated: "2026-11-24",
  breadcrumbs: [{ name: "Facebook Ads for Roofers", path: "/facebook-ads-for-roofers" }],
  ctaTitle: "See what a Meta ads system would look like for your roofing company",
  shortAnswer:
    "Facebook and Instagram ads work for roofers when they are one part of a full system: a specific offer, a matching landing page, instant follow-up and lead qualification. Ads sent to a bare quote form tend to produce low-intent leads; ads backed by that system book inspections.",
  blocks: [
    { type: "h2", id: "why-ads-fail", text: "Why Facebook ads fail for most roofing companies" },
    {
      type: "p",
      text: "People scrolling Facebook or Instagram are not searching for a roofer at that moment. That is the core difference from Google search ads, and it is why sending cold social traffic straight to a generic \"get a quote\" form usually produces a pile of cheap but low-intent leads that never pick up the phone.",
    },
    {
      type: "p",
      text: "The ads themselves are rarely the only problem. In almost every account we review, the breakdown happens somewhere between the click and the inspection:",
    },
    {
      type: "ul",
      items: [
        "**No real offer.** \"Free roof inspection\" is what every competitor already says. Without a reason to act now, homeowners scroll on.",
        "**One vendor runs the ads, another built the page.** Nobody owns the full journey, so the message on the ad and the message on the page do not match.",
        "**Slow or no follow-up.** A lead that waits hours for a call has usually already spoken to someone else, or forgotten they filled in the form.",
        "**No qualification.** Your sales team spends its week chasing renters, tire-kickers and jobs outside your service area.",
      ],
    },
    {
      type: "p",
      text: "This is what we mean on our homepage by roofing companies not having a lead problem but a [client acquisition system problem](/roofing-lead-generation).",
    },
    {
      type: "callout",
      title: "What it looks like with the system in place",
      text: "On a brand-new ad account with no pixel history, the same structure produced [261 OTP-verified roofing leads in 7 days at $14.80 each](/case-studies/261-otp-verified-leads-7-days-new-account). For a Dallas roofer with strong reviews, it turned into [$127,500 in closed deals and 34 installs](/case-studies/dallas-roofer-127500-closed-34-installs).",
    },

    { type: "h2", id: "what-we-build", text: "What we build around your Meta ads" },
    {
      type: "p",
      text: "Ads are one layer. We install every layer as one system, so each part is designed for the others:",
    },
    {
      type: "ol",
      items: [
        "**Offer positioning.** We work out an offer that is specific to your market and services, so the ad gives a homeowner a concrete reason to respond.",
        "**Ad creatives and copy.** Video, image and short-form creatives built for roofing, refreshed as performance data comes in.",
        "**Audience setup and segmentation.** Targeting built around intent, home value and service type rather than one broad audience. We walk through this in our free [audience segmentation training](/privatemastermind).",
        "**Landing page and funnel.** A page that matches the ad's promise and pre-sells the inspection, instead of a bare quote form.",
        "**CRM and AI follow-up.** Every lead lands in a CRM and gets an immediate response, followed by email and SMS sequences so nobody goes cold.",
        "**Lead qualification.** Leads are filtered before they reach your team, so your crew spends its time on homeowners who are ready to move forward.",
      ],
    },
    {
      type: "callout",
      title: "You own everything",
      text: "The ad account assets, landing pages, funnel, CRM, automations, creatives, copy and your customer data are yours, permanently. If we ever part ways, the system stays with your business.",
    },

    { type: "h2", id: "how-it-works", text: "How a roofing Meta ads campaign works with us" },
    { type: "h3", text: "1. Strategy call and fit check" },
    {
      type: "p",
      text: "We work with roofing companies already doing $1M+ a year. On a free strategy call we look at your market, services, current lead sources and capacity to take on more jobs, and decide together whether the system is a fit.",
    },
    { type: "h3", text: "2. Build and launch" },
    {
      type: "p",
      text: "We build the offer, creatives, landing page, CRM pipeline and follow-up sequences, then launch the campaigns. You do not need to write copy, design pages or set up software.",
    },
    { type: "h3", text: "3. Optimize toward booked appointments" },
    {
      type: "p",
      text: "We judge campaigns on qualified appointments and closed roofing projects, not on clicks or cost per lead alone. (For reference, here is [what cost per lead looked like across 15 of our roofing campaigns](/blog/roofing-facebook-ads-cost-per-lead).) Creatives, audiences and follow-up are adjusted as the data shows what is working in your market.",
    },
    { type: "h3", text: "4. You run the appointments and close" },
    {
      type: "p",
      text: "Your team does what it does best: inspections, estimates and closing. Everything before the appointment is handled by the system.",
    },

    { type: "h2", id: "results", text: "Roofing Facebook ads results" },
    {
      type: "ul",
      items: [
        "[1,480 roofing leads at $4.77 per lead](/case-studies/1480-roofing-leads-4-77-cpl) over five months, with clear rules for launching, killing and scaling ads.",
        "[1,865 roofing leads at $5.24 per lead](/case-studies/1865-roofing-leads-5-24-cpl-oct-jan) from October to January.",
        "[686 homeowner leads in 8 days at $5.31](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) for a Texas roofer, after switching to a $0-down financing offer.",
        "[850 leads in 8 days at $7.60](/case-studies/texas-850-roofing-leads-8-days-7-60) with a 3.79% click-through rate in a saturated Texas market.",
        "[$127,500 closed and 34 installs](/case-studies/dallas-roofer-127500-closed-34-installs) in about 60 days for a Dallas roofer, and [$111,200 won in 31 days](/case-studies/florida-roofer-111k-31-days) for a Florida roofing company.",
      ],
    },
    {
      type: "p",
      text: "Market by market detail is on [roofing leads in Texas](/roofing-leads-texas) and [roofing leads in Florida](/roofing-leads-florida), and the after-storm version of the system is on [storm damage leads](/storm-damage-leads).",
    },

    { type: "h2", id: "cost", text: "How much do Facebook ads cost for roofers?" },
    {
      type: "p",
      text: "You set the budget, and the offer, creative and follow-up decide what each lead costs. Across 15 of our roofing campaigns on Meta, cost per lead ranged from $3.75 to $24, with a median of $11.41. Budgets in our case studies ran from $93 for a single day to $24,902 for a pay-per-lead agency.",
    },
    {
      type: "p",
      text: "The full data is in our [roofing Facebook ads cost per lead study](/blog/roofing-facebook-ads-cost-per-lead), and [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost) compares it with shared and exclusive leads you can buy. Judge every campaign on cost per booked inspection and cost per signed job, not cost per lead alone.",
    },

    { type: "h2", id: "guarantee", text: "Backed by a written agreement" },
    {
      type: "p",
      text: "Every engagement comes with growth milestones we agree on in writing for the first 90 days. If we do not hit them, we keep working with no management fee until we do. There is no long-term contract lock-in. See our [income disclosure](/income-disclosure) for how to read results: outcomes vary by market and effort.",
    },

    { type: "h2", id: "who-its-for", text: "Who this is for, and who it is not for" },
    {
      type: "ul",
      items: [
        "**A fit:** roofing companies doing $1M+ a year that can handle more inspections and want predictable lead flow they own.",
        "**A fit:** owners tired of shared lead lists and agencies that report clicks instead of booked jobs.",
        "**Not a fit:** brand-new roofing companies still setting up crews and operations.",
        "**Not a fit:** anyone looking for the cheapest possible lead rather than a system that books qualified appointments.",
      ],
    },
    {
      type: "p",
      text: "Want to understand the difference between running your own campaigns and buying leads? Read [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
    },
  ],
  faqs: [
    {
      q: "Do Facebook ads work for roofing companies?",
      a: "They can, when they are part of a full system. Facebook and Instagram reach homeowners who are not actively searching, so the ad needs a strong offer, a matching landing page, fast follow-up and qualification behind it. Ads sent to a bare quote form usually produce low-intent leads.",
    },
    {
      q: "Are Facebook ads or Google ads better for roofers?",
      a: "They do different jobs. Google search ads catch homeowners already searching for a roofer; Meta ads create demand and stay in front of homeowners before they search. Many roofing companies use both. We specialize in the Meta side and the system that converts that traffic into appointments.",
    },
    {
      q: "What does the system include besides the ads?",
      a: "Offer positioning, ad creatives and copy, audience setup, landing pages and the sales funnel, CRM setup, AI follow-up, email and SMS sequences, and lead qualification, installed and managed for you.",
    },
    {
      q: "How much do Facebook ads cost for roofers?",
      a: "Across 15 of our roofing campaigns on Meta, cost per lead ranged from $3.75 to $24, with a median of $11.41. The budget is yours to set; the offer, creative and follow-up decide the cost per lead.",
    },
    {
      q: "How fast do Facebook ads produce roofing leads?",
      a: "Usually in the first days. In our case studies, one campaign produced 25 leads on its first day, a Texas campaign produced 686 leads in its first 8 days, and a brand-new ad account produced 261 phone-verified leads in its first 7 days.",
    },
    {
      q: "Do Facebook ads still work for roofers after Meta's Andromeda update?",
      a: "Yes. After the update, one of our roofing campaigns produced 537 qualified leads at $4.27 per lead in 13 days. Strong creative and a clear offer matter more than ever.",
    },
    {
      q: "Who owns the ad assets and leads?",
      a: "You do. Landing pages, funnel, CRM, automations, creatives, copy, follow-up sequences and your customer data are 100% yours, permanently.",
    },
    {
      q: "Is there a long-term contract?",
      a: "No. There is no long-term lock-in. Growth milestones for the first 90 days are agreed in writing, and if they are not hit we keep working with no management fee until they are.",
    },
  ],
  related: [
    { href: "/roofing-lead-generation", label: "Roofing lead generation system" },
    { href: "/instagram-ads-for-roofers", label: "Instagram ads for roofers" },
    { href: "/roofing-ad-creatives", label: "Roofing ad creatives and offers" },
    { href: "/privatemastermind", label: "Free training: audience segmentation for roofing ads" },
    { href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads" },
    { href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive roofing leads" },
  ],
};

export const roofingLeadGeneration: ContentDoc = {
  slug: "roofing-lead-generation",
  path: "/roofing-lead-generation",
  kind: "service",
  serviceType: "Lead generation and client acquisition for roofing companies",
  title: "Roofing Lead Generation Company: Exclusive Leads",
  description:
    "Stop renting shared roofing leads. We install a lead generation system you own: Meta ads, landing pages, CRM, AI follow-up and lead qualification.",
  eyebrow: "Roofing lead generation",
  h1: "A Roofing Lead Generation System You Own, Not Leads You Rent",
  intro:
    "Buying leads keeps you dependent on someone else's pipeline. We install a complete roofing lead generation system for $1M+ roofing companies (ads, pages, CRM, follow-up and qualification) that produces exclusive opportunities for your company and stays yours.",
  published: "2026-11-16",
  updated: "2026-11-23",
  breadcrumbs: [{ name: "Roofing Lead Generation", path: "/roofing-lead-generation" }],
  ctaTitle: "Find out what an owned lead generation system would produce in your market",
  shortAnswer:
    "A roofing lead generation system is the combination of ads, landing pages, a CRM, automated follow-up and lead qualification that a roofing company owns, instead of buying shared leads. The leads are exclusive to your company and the assets keep working after setup.",
  blocks: [
    { type: "h2", id: "rented-vs-owned", text: "Rented leads vs. an owned lead generation system" },
    {
      type: "p",
      text: "Most roofing companies get leads in one of three ways: referrals, buying leads from a lead seller, or running their own marketing. Referrals are great but hard to scale on demand. Bought leads are fast but often shared with other contractors, and the moment you stop paying, the flow stops. An owned system takes more setup, but every asset it builds (the ads, the pages, the audiences, the CRM and the customer list) keeps working for your company.",
    },
    {
      type: "p",
      text: "We break down the trade-offs in detail in [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
    },

    { type: "h2", id: "the-system", text: "The six parts of the system" },
    {
      type: "ol",
      items: [
        "**Offer positioning**: a specific, market-relevant reason for a homeowner to contact you instead of the next roofer, built into [roofing ad creatives](/roofing-ad-creatives) from your real jobs.",
        "**Paid traffic**: [Facebook and Instagram ads for roofers](/facebook-ads-for-roofers), with creatives and audiences built for roofing.",
        "**Landing pages and funnel**: [roofing landing pages](/roofing-landing-pages) that match each ad and pre-sell the inspection.",
        "**CRM**: every lead captured, tagged and tracked from first click to signed contract, with [roofing CRM automation](/roofing-crm-automation) doing the routine work.",
        "**AI follow-up**: an instant first response plus email and SMS sequences, so no lead is left waiting. See [how to follow up on roofing leads](/blog/roofing-lead-follow-up).",
        "**Qualification**: leads are screened and phone-verified before your sales team sees them, so time goes to homeowners who are ready. See [verified roofing leads](/verified-roofing-leads).",
      ],
    },
    {
      type: "p",
      text: "Each piece is built to work with the others. That is the difference from hiring one agency for ads, a freelancer for the website and a separate tool for follow-up, where hand-offs break and leads fall through the cracks.",
    },

    { type: "h2", id: "exclusive", text: "Exclusive to your company" },
    {
      type: "p",
      text: "Because the campaigns run under your brand, to your landing pages, into your CRM, the homeowners who respond are responding to you. They are not a list that is also being sold to the roofer down the road.",
    },
    {
      type: "p",
      text: "You can see what that looks like in practice in our [case studies](/case-studies), for example [1,480 roofing leads at $4.77 per lead over five months](/case-studies/1480-roofing-leads-4-77-cpl) and [1,024 OTP-verified leads for a pay-per-lead agency](/case-studies/ppl-agency-1024-otp-verified-roofing-leads).",
    },
    {
      type: "callout",
      title: "Ownership",
      text: "Landing pages, funnel, CRM, automations, ad creatives, copy, follow-up sequences and customer data are 100% yours, permanently. It becomes a business asset, not a monthly rental.",
    },

    { type: "h2", id: "results", text: "Roofing lead generation results" },
    {
      type: "ul",
      items: [
        "[1,865 roofing leads at $5.24 per lead](/case-studies/1865-roofing-leads-5-24-cpl-oct-jan) from October to January, by fixing what happens after the click.",
        "[$127,500 closed and 34 installs](/case-studies/dallas-roofer-127500-closed-34-installs) in about 60 days for a Dallas roofer.",
        "[$111,200 won in 31 days](/case-studies/florida-roofer-111k-31-days) for a Florida roofing company, after rebuilding its system before any ads ran.",
        "[$77,100 won in 30 days](/case-studies/texas-roofer-77k-closed-30-days) for a Texas roofing company, with 164 opportunities in the CRM.",
        "[1,068 exclusive roofing leads in 30 days at $17.40 per lead](/case-studies/agency-client-1068-exclusive-roofing-leads-17-40) for an agency client.",
      ],
    },
    {
      type: "p",
      text: "Across our published roofing campaigns, cost per lead ranges from $3.75 to $24, depending on the market, the offer and how strictly leads are verified. See the market detail for [roofing leads in Texas](/roofing-leads-texas) and [roofing leads in Florida](/roofing-leads-florida), and what to budget in [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost).",
    },

    { type: "h2", id: "compare-companies", text: "How to compare roofing lead generation companies" },
    {
      type: "p",
      text: "Most roofing lead generation companies fall into two groups: lead sellers that sell you contacts, and agencies or partners that build marketing under your brand. Before you sign with either, ask who owns the ad account and the data, whether leads are shared, how leads are verified, how fast they are contacted, and whether reporting goes past lead counts to booked inspections and signed jobs. Our checklist is in [how to choose a roofing lead generation company](/blog/how-to-choose-a-roofing-lead-generation-company).",
    },

    { type: "h2", id: "agencies", text: "Lead generation for roofing agencies" },
    {
      type: "p",
      text: "Some of our clients are agencies that sell marketing or leads to roofers. The same system works for them, from B2B campaigns that reach roofing business owners to OTP-verified homeowner leads they deliver to their own clients. See [lead generation for roofing agencies](/lead-generation-for-roofing-agencies), or browse [all our roofing services](/services).",
    },

    { type: "h2", id: "what-you-do", text: "What your team does" },
    {
      type: "p",
      text: "You run the appointments and close. We build and operate everything before the appointment: the offer, ads, pages, CRM, follow-up and qualification. You get qualified homeowners on your calendar instead of a spreadsheet of names to chase.",
    },

    { type: "h2", id: "guarantee", text: "Results backed in writing" },
    {
      type: "p",
      text: "We agree on growth milestones in writing for the first 90 days. If they are not hit, we continue working with no management fee until they are, and there is no long-term contract. Results vary by market, capacity and follow-through. See our [income disclosure](/income-disclosure).",
    },

    { type: "h2", id: "fit", text: "Is it a fit?" },
    {
      type: "ul",
      items: [
        "You are a roofing company doing $1M+ a year.",
        "You have the crew capacity to take on more inspections and jobs.",
        "You want a predictable pipeline you own instead of depending on lead sellers.",
      ],
    },
    {
      type: "p",
      text: "If that sounds like you, [book a free strategy call](/book). If you want to see how we think about targeting first, watch the free [audience segmentation training](/privatemastermind).",
    },
  ],
  faqs: [
    {
      q: "How is this different from buying roofing leads?",
      a: "Bought leads are often shared with several contractors and stop the moment you stop paying. We build a system that runs under your brand and into your CRM, so the opportunities are exclusive to you and the assets stay yours.",
    },
    {
      q: "What does a roofing lead generation system include?",
      a: "Offer positioning, Meta ads and creatives, landing pages and the sales funnel, CRM setup, AI follow-up with email and SMS sequences, and lead qualification.",
    },
    {
      q: "How fast will I see leads?",
      a: "Most clients see measurable lead growth within 30–45 days of launch, and every engagement includes growth milestones agreed in writing for the first 90 days.",
    },
    {
      q: "How much does roofing lead generation cost?",
      a: "It depends on your market, offer and how strictly leads are verified. Across our published roofing campaigns, cost per lead ranges from $3.75 to $24. The number that matters most is your cost per signed job.",
    },
    {
      q: "What is the best lead generation for roofing companies?",
      a: "For most $1M+ roofing companies, a system they own: ads under their brand, landing pages that match each ad, phone verification, instant follow-up and a CRM that tracks leads to signed jobs. Referrals and local search add to it but grow slowly.",
    },
    {
      q: "Do you work with roofing marketing agencies?",
      a: "Yes. We run campaigns for agencies that serve roofers, including B2B campaigns that reach roofing business owners and OTP-verified homeowner leads for pay-per-lead agencies.",
    },
    {
      q: "Who is Roofing Systems Co.?",
      a: "Roofing Systems Co. is a roofing lead generation and marketing company for US roofing contractors doing $1M+ a year. It builds an owned system of Meta ads, landing pages, phone verification and CRM follow-up. Across 18 published campaigns and 11,190 leads, cost per lead ranged from $3.75 to $24.",
    },
    {
      q: "Do I keep the system if we stop working together?",
      a: "Yes. The landing pages, funnel, CRM, automations, creatives, copy, sequences and customer data are yours permanently.",
    },
  ],
  related: [
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers" },
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas" },
    { href: "/roofing-leads-florida", label: "Roofing leads in Florida" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads" },
    { href: "/roofing-crm-automation", label: "Roofing CRM and follow-up automation" },
    { href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive roofing leads" },
    { href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads" },
  ],
};

export const sharedVsExclusive: ContentDoc = {
  slug: "shared-vs-exclusive-roofing-leads",
  path: "/blog/shared-vs-exclusive-roofing-leads",
  kind: "article",
  title: "Shared vs Exclusive Roofing Leads: What You Really Pay For",
  description:
    "Shared roofing leads, exclusive leads or your own lead system? A plain comparison of cost, quality, speed and ownership to help $1M+ roofers choose.",
  eyebrow: "Roofing lead generation",
  h1: "Shared vs. Exclusive Roofing Leads: What You're Really Paying For",
  intro:
    "Every roofing company that grows past referrals ends up asking the same question: should we buy leads, or build our own way of getting them? Here is a plain comparison of shared leads, exclusive leads and an owned lead generation system: what each one actually gives you, and where each one breaks.",
  published: "2026-11-16",
  updated: "2026-11-16",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Shared vs Exclusive Roofing Leads", path: "/blog/shared-vs-exclusive-roofing-leads" },
  ],
  ctaTitle: "Thinking about moving off bought leads?",
  shortAnswer:
    "Shared leads are sold to several roofers at once; exclusive leads are sold to one. Both are rented from a lead seller. An owned lead generation system is the third option: homeowners respond to your brand directly and the pages, CRM and data stay with you.",
  blocks: [
    { type: "h2", id: "definitions", text: "The three options, defined" },
    {
      type: "ul",
      items: [
        "**Shared leads**: a lead seller captures a homeowner's request and sells the same contact to several roofing companies. Whoever calls first usually has the advantage.",
        "**Exclusive leads**: the lead seller sells each contact to one company only. You pay more per lead, but you are not racing other roofers for the same homeowner.",
        "**An owned system**: you (or a partner working under your brand) run the ads, landing pages, CRM and follow-up. Homeowners respond directly to your company, and the assets stay with you.",
      ],
    },

    { type: "h2", id: "shared", text: "Shared leads: fast, cheap per lead, crowded" },
    {
      type: "p",
      text: "Shared leads are easy to start: sign up, set a service area, and contacts arrive. The trade-off is competition. The homeowner often hears from several roofers within minutes, so the conversation tends to become about who answered first and who is cheapest, not who is the best fit.",
    },
    {
      type: "ul",
      items: [
        "**Good for:** filling gaps quickly, testing a new service area.",
        "**Watch out for:** paying for contacts who never answer, price-driven buyers, and a pipeline that disappears when you stop paying.",
      ],
    },

    { type: "h2", id: "exclusive", text: "Exclusive leads: less competition, still rented" },
    {
      type: "p",
      text: "Exclusive leads remove the race against other contractors for that contact, which usually makes conversations easier. But you still do not control how the lead was generated, what the homeowner was promised, or how qualified they are, and the flow still belongs to the seller.",
    },
    {
      type: "ul",
      items: [
        "**Good for:** roofers who want more predictable conversations without building marketing in-house.",
        "**Watch out for:** vague definitions of \"exclusive\" and \"qualified\". Read the contract terms on refunds and replacements before you sign.",
      ],
    },

    { type: "h2", id: "owned", text: "An owned system: slower to set up, compounds over time" },
    {
      type: "p",
      text: "With your own system, the ads run under your name, the landing pages make your offer, and every lead goes into your CRM with your follow-up. It takes setup (offer, creatives, pages, automations), but each piece keeps working and improving, and the customer data is yours.",
    },
    {
      type: "p",
      text: "For a sense of scale: one Texas roofer went from zero leads to [686 homeowner inquiries in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) once an owned system with a clear offer was running, and another generated [825 verified leads at $4.95 each](/case-studies/825-verified-roofing-leads-4-95-cpl) in five weeks.",
    },
    {
      type: "ul",
      items: [
        "**Good for:** established roofing companies (we work with $1M+ roofers) that want predictable growth they control.",
        "**Watch out for:** doing it in pieces. Ads from one vendor, a website from another and follow-up in a third tool is where most owned setups break down.",
      ],
    },

    { type: "h2", id: "compare", text: "Side-by-side comparison" },
    {
      type: "ul",
      items: [
        "**Competition for the homeowner:** high for shared leads, low for exclusive leads, none for an owned system (they responded to your brand).",
        "**Control over the message and offer:** none with shared or exclusive leads, full with an owned system.",
        "**Qualification:** with shared and exclusive leads it depends on the seller; with an owned system you set the rules.",
        "**What you keep if you stop paying:** nothing with shared or exclusive leads; with an owned system you keep the pages, CRM, audiences, creatives and customer data.",
        "**Setup effort:** minimal for shared and exclusive leads, significant for an owned system unless a partner installs it.",
      ],
    },

    { type: "h2", id: "choose", text: "How to choose" },
    {
      type: "p",
      text: "If you need appointments next week and have no marketing in place, bought leads can bridge the gap. If you are an established roofing company planning for the next few years, the question is less \"what does a lead cost\" and more \"what does a booked, qualified inspection cost, and do I own the machine that produces it?\"",
    },
    {
      type: "p",
      text: "Whichever route you take, speed matters: a lead that waits is a lead someone else answers. Read [how to follow up on roofing leads](/blog/roofing-lead-follow-up) for a follow-up process you can apply to any lead source.",
    },
    {
      type: "callout",
      title: "How we approach it",
      text: "We install the owned option for $1M+ roofing companies: offer, [Facebook and Instagram ads](/facebook-ads-for-roofers), landing pages, CRM, AI follow-up and qualification, as one system. More on the [roofing lead generation system](/roofing-lead-generation).",
    },
  ],
  faqs: [
    {
      q: "What is the difference between shared and exclusive roofing leads?",
      a: "A shared lead is sold to several roofing companies at once, so you compete for the same homeowner. An exclusive lead is sold to only one company. Both are bought from a lead seller, so neither gives you ownership of the marketing that produced them.",
    },
    {
      q: "Are exclusive roofing leads worth the higher price?",
      a: "They can be, because you are not racing other contractors for the same contact. Check how the seller defines exclusive and qualified, and what happens with bad or unreachable leads, before signing.",
    },
    {
      q: "What is the alternative to buying roofing leads?",
      a: "Running your own lead generation: ads under your brand, your own landing pages, a CRM and a follow-up process. It takes more setup, but the homeowners respond directly to you and the assets stay with your company.",
    },
  ],
  related: [
    { href: "/roofing-lead-generation", label: "Roofing lead generation system" },
    { href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads" },
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers" },
    { href: "/blog", label: "All articles" },
  ],
};

export const leadFollowUp: ContentDoc = {
  slug: "roofing-lead-follow-up",
  path: "/blog/roofing-lead-follow-up",
  kind: "article",
  title: "How to Follow Up on Roofing Leads: A Speed-to-Lead System",
  description:
    "A practical roofing lead follow-up process: respond instantly, qualify, book the inspection and keep following up by call, text and email until they book.",
  eyebrow: "Roofing sales follow-up",
  h1: "How to Follow Up on Roofing Leads (and Book More Inspections)",
  intro:
    "Most roofing leads are not lost to a competitor's better price. They are lost to silence. The homeowner fills in a form, waits, gets busy, and books with whoever reached them first. Here is a follow-up process you can run on every lead, whatever the source.",
  published: "2026-11-16",
  updated: "2026-11-16",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Roofing Lead Follow-Up", path: "/blog/roofing-lead-follow-up" },
  ],
  ctaTitle: "Want this follow-up running automatically on every lead?",
  shortAnswer:
    "Respond to every roofing lead within minutes with an automatic text and email, call as soon as possible, qualify before driving out, book the inspection on the first conversation, and keep following up by call, text and email until the homeowner books or says no.",
  blocks: [
    { type: "h2", id: "speed", text: "1. Respond immediately, every time" },
    {
      type: "p",
      text: "The first response should happen within minutes, not at the end of the day. A homeowner who just asked about a roof is thinking about it right now; an hour later they are back at work, and the next roofer who calls gets the conversation.",
    },
    {
      type: "ul",
      items: [
        "Send an automatic text and email the moment a lead arrives, confirming you received the request and saying when someone will call.",
        "Call as soon as possible after that. If nobody answers, leave a short voicemail and follow with a text.",
        "Route new leads to whoever is available, rather than to one person's inbox.",
      ],
    },

    { type: "h2", id: "qualify", text: "2. Qualify before you drive out" },
    {
      type: "p",
      text: "An inspection costs your team time and fuel. A few questions up front protect that time and make the appointment more useful for the homeowner:",
    },
    {
      type: "ul",
      items: [
        "Do they own the home, and is the property inside your service area?",
        "What prompted the request: a leak, storm damage, an older roof, selling the home?",
        "Is there an insurance claim involved, or is it a retail job?",
        "Who else needs to be at the appointment to make a decision?",
        "What timeline are they working to?",
      ],
    },

    { type: "h2", id: "book", text: "3. Book the inspection on the first conversation" },
    {
      type: "p",
      text: "Offer two or three specific time slots instead of asking \"when works for you?\". Confirm by text straight away, and send a reminder the day before and on the morning of the appointment. Make rescheduling easy: a homeowner who can move the appointment is less likely to simply not show up.",
    },

    { type: "h2", id: "persist", text: "4. Keep following up after no answer" },
    {
      type: "p",
      text: "Many leads go quiet rather than say no. One unanswered call is not a decision. Set up a sequence that mixes calls, texts and emails over the following days and weeks, and stop only when the homeowner books, says no, or asks you to stop.",
    },
    {
      type: "ol",
      items: [
        "**Day 1:** instant text and email, first call, voicemail and follow-up text if unanswered.",
        "**Days 2–3:** another call at a different time of day, plus a short helpful text (for example, what to expect at an inspection).",
        "**First week:** an email with useful information: photos of common roof issues, how insurance inspections work in your area, your warranty.",
        "**Following weeks:** a lighter-touch check-in by text or email until the homeowner responds.",
      ],
    },
    {
      type: "callout",
      title: "Keep it helpful",
      text: "Follow-up works when each message gives the homeowner something useful or makes the next step easier. Ten messages of \"just checking in\" will be ignored; a reminder about a storm-damage inspection window will not.",
    },

    { type: "h2", id: "estimate", text: "5. Follow up after the estimate, too" },
    {
      type: "p",
      text: "Homeowners often collect several estimates before choosing. The roofer who follows up clearly (answering questions, explaining the scope, making it easy to say yes) is often the one who wins, even without the lowest price. Put post-estimate follow-up in the same system so it never depends on someone remembering.",
    },

    { type: "h2", id: "track", text: "6. Track everything in a CRM" },
    {
      type: "p",
      text: "If follow-up lives in someone's head or a notebook, it will slip in busy weeks, exactly when you have the most leads. A CRM shows every lead's status, who contacted them and when, and which leads need action today. It also tells you which lead sources produce booked jobs, not just form fills.",
    },
    {
      type: "callout",
      title: "Real example",
      text: "In a 16-day Florida campaign across 4 locations, every one of [365 OTP-verified leads](/case-studies/florida-365-otp-verified-leads-4-locations) was synced instantly to the CRM, nurtured by SMS and email, and routed to sales: follow-up running automatically, not from memory.",
    },

    { type: "h2", id: "automate", text: "Automating the process" },
    {
      type: "p",
      text: "Most of the steps above can run automatically: instant replies, reminders, follow-up sequences and pipeline updates. Your team then spends its time on the conversations that need a person. In the system we install for $1M+ roofers, every lead from our [Facebook and Instagram ads](/facebook-ads-for-roofers) goes into a CRM with AI follow-up, email and SMS sequences and qualification. See the full [roofing lead generation system](/roofing-lead-generation).",
    },
  ],
  faqs: [
    {
      q: "How fast should I respond to a roofing lead?",
      a: "Within minutes. Send an automatic text and email immediately, then call as soon as possible. The longer a lead waits, the more likely the homeowner has spoken to another roofer or moved on.",
    },
    {
      q: "How many times should I follow up with a roofing lead?",
      a: "Keep following up with a mix of calls, texts and emails until the homeowner books, says no, or asks you to stop. Many leads go quiet rather than decline, so a single unanswered call is not a decision.",
    },
    {
      q: "Should roofers use a CRM for follow-up?",
      a: "Yes. A CRM keeps every lead's status and history in one place, makes sure nothing is missed in busy weeks, and shows which lead sources turn into booked jobs.",
    },
  ],
  related: [
    { href: "/roofing-lead-generation", label: "Roofing lead generation system" },
    { href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive roofing leads" },
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers" },
    { href: "/blog", label: "All articles" },
  ],
};


const CS = (slug: string, label: string) => `[${label}](/case-studies/${slug})`;

export const costPerLeadStudy: ContentDoc = {
  slug: "roofing-facebook-ads-cost-per-lead",
  path: "/blog/roofing-facebook-ads-cost-per-lead",
  kind: "article",
  title: "Roofing Facebook Ads Cost Per Lead: Data From 15 Campaigns",
  description:
    "Real cost per lead from 15 roofing Meta ad campaigns and 7,765 leads: median $11.41, range $3.75 to $24, what drove it, and why CPL isn't everything.",
  eyebrow: "Original data · Roofing Meta ads",
  h1: "What Do Roofing Facebook Ads Cost Per Lead? Data From 15 Real Campaigns",
  intro:
    "Most published numbers on roofing Facebook ad costs are broad industry benchmarks. Here are the actual cost-per-lead results from 15 roofing campaigns we ran on Meta (Facebook and Instagram) between September 2025 and October 2026, with each campaign linked to its case study so you can check the numbers.",
  published: "2026-11-18",
  updated: "2026-11-18",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Roofing Facebook Ads Cost Per Lead", path: "/blog/roofing-facebook-ads-cost-per-lead" },
  ],
  ctaTitle: "Want your cost per lead benchmarked against these campaigns?",
  shortAnswer:
    "Across 15 roofing Meta ad campaigns and 7,765 homeowner leads, the median cost per lead was $11.41, ranging from $3.75 to $24. Commonly cited industry benchmarks put roofing Facebook leads at roughly $40 to $80. Cost per lead is only a starting point: what matters is cost per booked inspection and per signed job.",
  blocks: [
    { type: "h2", id: "headline-numbers", text: "The headline numbers" },
    {
      type: "ul",
      items: [
        "**15 campaigns, 7,765 leads** for roofing contractors and one roofing pay-per-lead agency.",
        "**Median cost per lead: $11.41.** Lowest $3.75 (day one of a campaign), highest $24.",
        "**13 of 15 campaigns came in under $15 per lead**, and 7 of 15 under $10.",
        "**Blended CPL $11.98** across the 9 campaigns that also reported total spend ($50,853 spent, 4,244 leads).",
      ],
    },
    {
      type: "p",
      text: "For comparison, published roofing benchmarks commonly cluster around $40 to $80 per lead on Facebook (see the [WebTonic roofing Meta ads statistics report](https://www.webtonic.io/blog/roofing-facebook-ads-statistics) and [JobNimbus on when Facebook ads work for roofers](https://jobnimbus.com/blog/why-facebook-ads-fail-roofers-and-when-they-actually-work)). Those are averages across very different accounts, so treat the gap as a sign of what a structured system can do, not a promise.",
    },

    { type: "h2", id: "campaign-data", text: "Campaign-by-campaign data" },
    {
      type: "table",
      caption: "Cost per lead by campaign (newest first). Each campaign links to its case study.",
      head: ["Campaign", "Leads", "Cost per lead", "Notes"],
      rows: [
        [CS("roofing-201-leads-14-45-cpl", "Roofing companies, Oct 2026"), "201", "$14.45", "First days after launch"],
        [CS("roofing-25-leads-one-day-3-75", "Florida & Bay Area, day one"), "25", "$3.75", "$93 spend, single day"],
        [CS("roofing-227-leads-14-cpl-28-days", "Roofing client, 28 days"), "227", "$14", "Verified leads, CTR above 2%"],
        [CS("215-validated-roofing-leads-12-79-cpl", "Roofing client, 28 days"), "215", "$12.79", "Multi-step validation, 2.33% CTR"],
        [CS("florida-home-services-280-leads-15-days", "Florida roofing, gutters & solar"), "280", "$11.41*", "15 days, 2.46% CTR"],
        [CS("roofing-154-leads-14-58-cpl", "Roofing client, 14 days"), "154", "$14.58", ""],
        [CS("261-otp-verified-leads-7-days-new-account", "Brand-new ad account, 7 days"), "261", "$14.80", "OTP-verified, no pixel history"],
        [CS("florida-365-otp-verified-leads-4-locations", "Florida, 4 locations, 16 days"), "365", "$19.50", "OTP-verified, CRM follow-up"],
        [CS("1480-roofing-leads-4-77-cpl", "One roofing client, Oct–Feb"), "1,480", "$4.77", "$26.77 CPM"],
        [CS("635-pre-qualified-roofing-leads-45-days", "Roofing client, 45 days"), "635", "$4–$6", "Pre-qualified"],
        [CS("825-verified-roofing-leads-4-95-cpl", "US roofer, Oct 25–Nov 27"), "825", "$4.95", "$1.33 CPC, $24 CPM"],
        [CS("texas-roofer-686-leads-8-days-0-down-offer", "Texas roofer, 8 days"), "686", "$5.31", "$0-down financing offer, 2.17% CTR"],
        [CS("537-qualified-leads-13-days-andromeda-update", "New client, first 13 days"), "537", "$4.27", "TX, FL & GA jobs"],
        [CS("ppl-agency-1024-otp-verified-roofing-leads", "Pay-per-lead agency"), "1,024", "$24", "OTP-verified, 1.63% CTR"],
        [CS("texas-850-roofing-leads-8-days-7-60", "Texas roofer, 8 days"), "850", "$7.60", "3.79% CTR"],
      ],
    },
    {
      type: "p",
      text: "*Calculated from the campaign's reported spend ($3,196) divided by leads (280). For the 45-day campaign reported as $4–$6, the median uses the $5 midpoint.",
    },

    { type: "h2", id: "what-drove-it", text: "What the lowest-CPL campaigns had in common" },
    {
      type: "p",
      text: "Reading across the case studies, the same few factors come up again and again:",
    },
    {
      type: "ol",
      items: [
        "**A specific offer, not \"free inspection\".** The Texas roofer that went from zero leads to 686 in 8 days switched to a $0-down, 0%-interest-for-12-months financing offer. (Financing claims need the lender's terms and the required disclosures.)",
        "**Creative that earns the click.** Most low-CPL campaigns held a click-through rate above 2%, and one reached 3.79%. A higher CTR usually means cheaper leads on Meta.",
        "**Targeting built around intent.** Audience segmentation and intent layering instead of one broad audience. We cover this in the free [audience segmentation training](/privatemastermind).",
        "**Lead verification.** Several campaigns used OTP (one-time passcode) verification, so every counted lead had a real, reachable phone number. Verified leads usually cost a little more but waste less sales time.",
        "**Speed.** Campaigns were launched and adjusted fast; the brand-new account with no pixel history still reached $14.80 per lead in its first week.",
      ],
    },

    { type: "h2", id: "cpl-is-not-everything", text: "Why cost per lead is not the number to optimize" },
    {
      type: "p",
      text: "A $5 lead that never answers the phone is more expensive than a $20 lead that books an inspection. The figure that pays the bills is cost per signed job. In the clearest example we have, a Dallas roofer turned its campaign into [$127,500 in closed deals and 34 installs in about 60 days](/case-studies/dallas-roofer-127500-closed-34-installs). That outcome depended as much on [fast follow-up](/blog/roofing-lead-follow-up) and qualification as on the ad cost.",
    },
    {
      type: "callout",
      title: "Definitions",
      text: "**Cost per lead (CPL):** ad spend divided by the number of leads. **OTP-verified lead:** a lead who confirmed their phone number with a one-time passcode. **CTR:** the share of people who saw the ad and clicked it. **CPM:** the cost of 1,000 ad impressions.",
    },

    { type: "h2", id: "limits", text: "How to read this data" },
    {
      type: "ul",
      items: [
        "These are our own campaigns, reported in the original posts; we have not mixed in third-party data.",
        "15 campaigns is a small sample, and markets, offers and seasons differ. Your results will differ too: see our [income disclosure](/income-disclosure).",
        "Lead definitions vary: some campaigns count form fills, others only OTP-verified or pre-qualified leads.",
        "Most campaigns report results from the first days or weeks; costs can rise or fall as campaigns mature.",
      ],
    },
    {
      type: "p",
      text: "Want to see how these numbers were produced? Read about [Facebook ads for roofers](/facebook-ads-for-roofers), the full [roofing lead generation system](/roofing-lead-generation), or browse all [case studies](/case-studies).",
    },
  ],
  faqs: [
    {
      q: "What is a good cost per lead for roofing Facebook ads?",
      a: "Across our 15 roofing Meta campaigns the median was $11.41 per lead, and 13 of 15 were under $15. Industry benchmarks commonly cited for roofing Facebook leads are around $40 to $80. A good CPL is one that turns into booked inspections and signed jobs at a profitable cost.",
    },
    {
      q: "Why are some roofing leads so much cheaper than others?",
      a: "In our campaigns the lowest costs came with a specific offer (such as $0-down financing), creative with a click-through rate above 2%, intent-based audience targeting and fast launch and iteration.",
    },
    {
      q: "Are cheap roofing leads lower quality?",
      a: "Not necessarily, but cheap leads can be unqualified. Verification (such as OTP phone verification), qualification questions and fast follow-up decide whether low-cost leads turn into appointments.",
    },
    {
      q: "Is cost per lead the best way to measure roofing ads?",
      a: "No. Cost per lead is a starting point; cost per booked inspection and cost per signed job show whether the ads are profitable.",
    },
  ],
  related: [
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers" },
    { href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads" },
    { href: "/case-studies", label: "All case studies" },
    { href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive roofing leads" },
  ],
};

export const services = [facebookAdsForRoofers, roofingLeadGeneration];

export const howToGetRoofingLeads: ContentDoc = {
  slug: "how-to-get-roofing-leads",
  path: "/blog/how-to-get-roofing-leads",
  kind: "article",
  title: "How to Get Roofing Leads: 9 Free and Paid Ways Compared",
  description:
    "How to get roofing leads in 2026: 9 free and paid methods compared by cost, speed and control, with real cost-per-lead data from 15 roofing campaigns.",
  eyebrow: "Roofing lead generation guide",
  h1: "How to Get Roofing Leads: 9 Free and Paid Ways, Compared",
  intro:
    "There is no single best way to get roofing leads. Free methods build trust but grow slowly; paid methods are fast but cost money every month. Here are the nine methods roofing companies use, what each one costs, and how to combine them.",
  published: "2026-11-20",
  updated: "2026-11-20",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "How to Get Roofing Leads", path: "/blog/how-to-get-roofing-leads" },
  ],
  ctaTitle: "Want a roofing lead system you own?",
  shortAnswer:
    "The best way to get roofing leads is to combine free sources (Google Business Profile, reviews, referrals and job-site marketing) with one paid channel you control, such as Meta ads under your own brand. Across 15 of our roofing Meta campaigns, the median cost per lead was $11.41.",
  blocks: [
    { type: "h2", id: "free", text: "Free ways to get roofing leads" },
    { type: "p", text: "Free roofing leads cost time instead of money. They are slower, but they build the reviews and reputation that make every paid channel cheaper." },
    {
      type: "ol",
      items: [
        "**Google Business Profile.** Complete every field, add real job photos weekly and answer every review. It is the free listing that shows in Google Maps for \"roofer near me\" searches.",
        "**Reviews.** Ask every happy customer for a Google review the day the job finishes. Reviews feed your Maps ranking and your ads: in [our Dallas campaign](/case-studies/dallas-roofer-127500-closed-34-installs), ads built around existing reviews led to $127,500 closed.",
        "**Referrals.** Give past customers a simple reason and a simple way to refer neighbors, such as a referral card left at handover.",
        "**Job-site marketing.** Yard signs and door hangers on the streets around each job reach neighbors who just watched your crew work.",
        "**Community groups.** Helpful answers in local Facebook groups and Nextdoor build recognition. Don't spam: share advice and photos.",
      ],
    },
    { type: "h2", id: "paid", text: "Paid ways to get roofing leads" },
    {
      type: "ol",
      items: [
        "**Meta ads (Facebook and Instagram).** Reach homeowners before they search, with an offer and creative you control. Our roofing campaigns ranged from $3.75 to $24 per lead; see the [cost per lead study](/blog/roofing-facebook-ads-cost-per-lead).",
        "**Google Ads and Local Services Ads.** Catch people already searching. Higher intent, higher cost: advertisers pay around $18–$22 per click for roofing lead keywords (Semrush, November 2026). More in [Google Ads for roofers](/google-ads-for-roofers).",
        "**Buying leads.** Fast, but leads are often shared with other contractors and stop when you stop paying. Compare options in [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
        "**Your own lead generation system.** Ads, landing pages, CRM and follow-up you own, so the assets keep working. This is what we build: [roofing lead generation](/roofing-lead-generation).",
      ],
    },
    { type: "h2", id: "facebook", text: "How to get roofing leads on Facebook" },
    { type: "p", text: "Facebook (and Instagram) leads come from paid Meta ads, not from posting on your page. The roofers in our case studies who got the cheapest leads followed the same four steps:" },
    {
      type: "ol",
      items: [
        "**Run a lead campaign, not a boosted post.** Boosts optimise for likes; lead campaigns optimise for homeowners who fill in a form.",
        "**Lead with a specific offer.** A $0-down financing offer produced [686 homeowner leads in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) for a Texas roofer.",
        "**Use real job photos and video.** Creative is what keeps click-through rates above 2% and cost per lead down.",
        "**Verify and follow up instantly.** Phone verification and an automatic text and email within minutes turn leads into inspections.",
      ],
    },
    { type: "p", text: "Across 15 of our roofing Meta campaigns, the median cost per lead was $11.41 ([full study](/blog/roofing-facebook-ads-cost-per-lead)). See how the system works in [roofing Facebook ads](/facebook-ads-for-roofers) and [Instagram ads for roofers](/instagram-ads-for-roofers)." },
    { type: "h2", id: "compare", text: "Which method is the best way to get roofing leads?" },
    {
      type: "table",
      caption: "Roofing lead sources compared. Costs are typical ranges; your market will differ.",
      head: ["Method", "Cost", "Speed", "Exclusive?"],
      rows: [
        ["Google Business Profile and reviews", "Free (time)", "Slow", "Yes"],
        ["Referrals and job-site marketing", "Low", "Slow", "Yes"],
        ["Community groups", "Free (time)", "Slow", "Yes"],
        ["Meta ads under your brand", "Ad spend; our median $11.41 per lead", "Fast", "Yes"],
        ["Google Ads / Local Services Ads", "High cost per click", "Fast", "Yes"],
        ["Bought leads", "Per lead, ongoing", "Fast", "Often shared"],
      ],
    },
    { type: "p", text: "For most $1M+ roofing companies, the best mix is free sources for trust plus one paid channel you own for predictable volume. Whatever the source, [follow-up decides whether a lead becomes a job](/blog/roofing-lead-follow-up)." },
    {
      type: "callout",
      title: "Don't forget follow-up",
      text: "The cheapest roofing lead is the one you already paid for. Respond within minutes, verify the number and keep following up. See [roofing CRM automation](/roofing-crm-automation).",
    },
  ],
  faqs: [
    { q: "How do I get free roofing leads?", a: "Through your Google Business Profile, reviews, referrals, yard signs and door hangers around jobs, and helpful posts in local community groups. They take time but cost little." },
    { q: "What is the best way to get roofing leads?", a: "Combine free sources that build trust with one paid channel you control. For many roofers that is Meta ads under their own brand; our 15 roofing campaigns had a median cost per lead of $11.41." },
    { q: "How do I get roofing leads on Facebook?", a: "Run a Meta lead campaign (not a boosted post) with a specific offer, real job photos or video, phone verification and instant follow-up. Across 15 of our roofing campaigns the median cost per lead was $11.41." },
    { q: "Should I buy roofing leads?", a: "Bought leads are fast but often shared with other roofers and stop when you stop paying. An owned system costs more effort up front but keeps working." },
    { q: "How fast can I get roofing leads?", a: "Paid ads can produce leads within days; one of our campaigns produced 25 leads on its first day. Free methods take weeks to months." },
  ],
  related: [
    { href: "/roofing-lead-generation", label: "Roofing lead generation system" },
    { href: "/blog/roofing-advertising-ideas", label: "Roofing advertising ideas" },
    { href: "/blog/roofing-facebook-ads-cost-per-lead", label: "Roofing Facebook ads cost per lead" },
    { href: "/google-ads-for-roofers", label: "Google Ads for roofers" },
  ],
};

export const roofingAdvertisingIdeas: ContentDoc = {
  slug: "roofing-advertising-ideas",
  path: "/blog/roofing-advertising-ideas",
  kind: "article",
  title: "12 Roofing Advertising Ideas That Get Homeowners to Call",
  description:
    "12 roofing advertising ideas that work in 2026: offers, video ads, review-led ads, storm campaigns and more, with real results from roofing campaigns.",
  eyebrow: "Roofing advertising ideas",
  h1: "12 Roofing Advertising Ideas That Get Homeowners to Call",
  intro:
    "Most roofing ads look the same: a stock photo and \"free inspection\". These ideas are built to stand out, and several come straight from campaigns we've run, with the numbers linked.",
  published: "2026-11-20",
  updated: "2026-11-20",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Roofing Advertising Ideas", path: "/blog/roofing-advertising-ideas" },
  ],
  ctaTitle: "Want these ideas built and run for you?",
  shortAnswer:
    "The roofing advertising ideas that work best lead with a specific offer (such as financing), use real job footage instead of stock photos, build on your reviews, and send every click to a matching landing page with fast follow-up.",
  blocks: [
    { type: "h2", id: "offers", text: "Offer ideas" },
    {
      type: "ol",
      items: [
        "**Financing offers.** A $0-down, 0%-for-12-months offer took a Texas roofer from zero leads to [686 in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer). Financing offers need the lender's terms and required disclosures.",
        "**Answer the fear, not the feature.** Speak to what worries homeowners (cost, mess, being upsold) instead of listing roofing materials.",
        "**A specific inspection promise.** Replace \"free inspection\" with something concrete, such as a photo report of the roof sent the same day.",
      ],
    },
    { type: "h2", id: "creative", text: "Creative ideas" },
    {
      type: "ol",
      items: [
        "**Owner-to-camera video.** A short vertical video of the owner explaining the offer builds trust fast.",
        "**Before and after.** Drone shots of the old and new roof on the same house.",
        "**Crew at work.** Real crews on real roofs beat stock photos every time.",
        "**Review-led ads.** In [Dallas](/case-studies/dallas-roofer-127500-closed-34-installs), ads built around the company's Google reviews and local reputation led to $127,500 closed and 34 installs.",
        "**Test several angles.** Run multiple creatives and keep only the ones that hold a click-through rate above 2%, as most of our lowest-cost campaigns did. More in [roofing ads](/roofing-ad-creatives).",
      ],
    },
    { type: "h2", id: "channels", text: "Channel and timing ideas" },
    {
      type: "ol",
      items: [
        "**Instagram Reels and Stories.** Vertical video placements inside your Meta campaigns: [Instagram ads for roofers](/instagram-ads-for-roofers).",
        "**Storm-response campaigns.** Prepared creative that launches within hours after hail or wind in your service area: [storm damage leads](/storm-damage-leads).",
        "**Retargeting.** Show follow-up ads to homeowners who watched your video or visited your page but didn't book.",
        "**Neighborhood targeting around jobs.** Advertise to the streets around a current job while the crew is there.",
      ],
    },
    {
      type: "callout",
      title: "Every idea needs a landing page and follow-up",
      text: "Great ads fail when the click lands on a slow homepage or the lead waits hours for a call. Pair ads with [roofing landing pages](/roofing-landing-pages) and [automated follow-up](/roofing-crm-automation).",
    },
  ],
  faqs: [
    { q: "What is the best way to advertise a roofing company?", a: "Lead with a specific offer, use real job footage and reviews, run ads on Meta or Google under your own brand, and send clicks to a matching landing page with fast follow-up." },
    { q: "Do financing offers work in roofing ads?", a: "They can. In our Texas campaign a $0-down, 0%-for-12-months offer produced 686 homeowner leads in 8 days. Financing offers require the lender's terms and disclosures." },
    { q: "Should roofing ads use video?", a: "Yes, short vertical video works well on Instagram Reels, Facebook and TikTok. Real crews, before-and-after footage and owner-to-camera clips perform better than stock imagery." },
    { q: "How do I know if a roofing ad is working?", a: "Track click-through rate, cost per lead and, most importantly, cost per booked inspection and signed job." },
  ],
  related: [
    { href: "/roofing-ad-creatives", label: "Roofing ads and creatives" },
    { href: "/blog/how-to-get-roofing-leads", label: "How to get roofing leads" },
    { href: "/instagram-ads-for-roofers", label: "Instagram ads for roofers" },
    { href: "/storm-damage-leads", label: "Storm damage leads" },
  ],
};


export const roofingLeadsCost: ContentDoc = {
  slug: "how-much-do-roofing-leads-cost",
  path: "/blog/how-much-do-roofing-leads-cost",
  kind: "article",
  title: "How Much Do Roofing Leads Cost? 2026 Prices by Source",
  description:
    "What roofing leads cost in 2026: Facebook ads (median $11.41 across 15 campaigns), Google clicks ($18–$22+), pay-per-lead vendors (~$55) and shared leads.",
  eyebrow: "Roofing lead pricing",
  h1: "How Much Do Roofing Leads Cost? 2026 Prices by Source",
  intro:
    "Roofing lead prices vary more by source than by market. Here is what each source costs, using our own campaign data, Semrush click prices and published vendor prices, with links so you can check every number.",
  published: "2026-11-23",
  updated: "2026-11-23",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "How Much Do Roofing Leads Cost?", path: "/blog/how-much-do-roofing-leads-cost" },
  ],
  ctaTitle: "Want to know what leads would cost in your market?",
  shortAnswer:
    "Roofing leads typically cost $4 to $25 each from your own Facebook and Instagram ads (median $11.41 across our 15 roofing campaigns), around $55 each from exclusive pay-per-lead vendors, and $18 to $42 per click on Google before a single form is filled. The number that matters most is cost per signed job.",
  blocks: [
    { type: "h2", id: "by-source", text: "Roofing lead cost by source" },
    {
      type: "table",
      caption: "Typical roofing lead costs by source. Sources linked in the text below.",
      head: ["Source", "Typical cost", "Exclusive?", "Notes"],
      rows: [
        ["Your own Meta ads (Facebook and Instagram)", "$3.75–$24 per lead (median $11.41)", "Yes", "Our 15 roofing campaigns"],
        ["Google Ads", "$18–$42 per click", "Yes", "Semrush CPC, Nov 2026; cost per lead is higher than per click"],
        ["Exclusive pay-per-lead vendors", "Around $55 per lead", "Yes", "Published Texas vendor price"],
        ["Shared lead sellers", "Varies", "No", "Same homeowner sold to several roofers"],
        ["Referrals, reviews, yard signs", "Free (time)", "Yes", "Slow but high trust"],
      ],
    },
    { type: "h2", id: "facebook", text: "Facebook and Instagram ads" },
    {
      type: "p",
      text: "Across 15 of our roofing campaigns on Meta, cost per lead ranged from $3.75 to $24 with a median of **$11.41**. The lowest costs came with a specific offer, creative holding a click-through rate above 2%, and fast follow-up. Every campaign is linked in the [roofing Facebook ads cost per lead study](/blog/roofing-facebook-ads-cost-per-lead).",
    },
    { type: "h2", id: "google", text: "Google Ads" },
    {
      type: "p",
      text: "Semrush data from November 2026 puts the average cost per click at **$22.36** for \"roofing leads\", **$42.46** for \"roofing leads texas\" and **$18.77** for \"google ads for roofers\". Only some clicks become leads, so cost per lead on Google is usually several times the click price. More in [Google Ads for roofers](/google-ads-for-roofers).",
    },
    { type: "h2", id: "vendors", text: "Pay-per-lead vendors" },
    {
      type: "p",
      text: "Exclusive pay-per-lead vendors publish prices around **$55 per lead** (for example, [99 Calls Texas roofing leads](https://99calls.com/locations/Texas/Roofing-Leads.htm)). Shared leads are cheaper per lead but go to several contractors at once. See [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
    },
    { type: "h2", id: "per-job", text: "Cost per signed job matters more" },
    {
      type: "p",
      text: "A cheap lead that never answers costs more than an expensive one that books. Track cost per inspection and per signed job. In [our Dallas campaign](/case-studies/dallas-roofer-127500-closed-34-installs), the result that mattered was **$127,500 closed and 34 installs** in about 60 days. [Phone verification](/verified-roofing-leads) and [fast follow-up](/blog/roofing-lead-follow-up) are what turn cheap leads into jobs.",
    },
    {
      type: "callout",
      title: "Lowering your cost per lead",
      text: "Use a specific offer, real job creative, verified forms and instant follow-up. We build all four as one system: [exclusive roofing leads](/).",
    },
  ],
  faqs: [
    { q: "How much does a roofing lead cost?", a: "From your own Facebook and Instagram ads, typically $4 to $25 (median $11.41 across our 15 roofing campaigns). Exclusive pay-per-lead vendors publish prices around $55. Google clicks alone cost $18 to $42." },
    { q: "Are cheaper roofing leads worse?", a: "Not necessarily. Cheap leads can be unqualified, but verification, qualifying questions and fast follow-up decide whether they turn into inspections." },
    { q: "Why are roofing leads more expensive in Texas?", a: "Competition. Semrush shows a $42.46 cost per click for \"roofing leads texas\", about double the national figure for \"roofing leads\". Our own Texas Meta campaigns still came in at $5.31 and $7.60 per lead." },
    { q: "Are roofing leads worth it?", a: "They are worth it when your cost per signed job stays well below the profit on a roof. Work it out as cost per lead divided by your close rate. For scale, a Dallas roofer in our case studies closed $127,500 from 34 installs, about $3,750 per job, so the cost to win each job has to stay well under that." },
    { q: "How much do shared vs exclusive roofing leads cost?", a: "Exclusive pay-per-lead vendors publish prices around $55 per lead. Shared leads cost less per lead but go to several roofers at once. Leads from your own Facebook and Instagram ads cost $3.75 to $24 in our 15 roofing campaigns, with a median of $11.41, and are exclusive to you." },
    { q: "What is the average cost of a roofing lead in 2026?", a: "Across 18 published roofing campaigns and 11,190 leads from Roofing Systems Co., the median cost per lead was $13.40, with a range of $3.75 to $24. Phone-verified campaigns had a median of $14.80 and standard campaigns $5.31. The full data is in the Roofing Lead Cost Report 2026." },
    { q: "What is a good cost per lead for roofing?", a: "One that produces booked inspections and signed jobs at a profit. As a benchmark, our 15 roofing Meta campaigns had a median of $11.41 per lead." },
  ],
  related: [
    { href: "/", label: "Exclusive roofing leads" },
    { href: "/blog/roofing-facebook-ads-cost-per-lead", label: "Roofing Facebook ads cost per lead study" },
    { href: "/roofing-leads-texas", label: "Roofing leads in Texas" },
    { href: "/google-ads-for-roofers", label: "Google Ads for roofers" },
  ],
};

export const chooseLeadGenCompany: ContentDoc = {
  slug: "how-to-choose-a-roofing-lead-generation-company",
  path: "/blog/how-to-choose-a-roofing-lead-generation-company",
  kind: "article",
  title: "How to Choose a Roofing Lead Generation Company",
  description:
    "Comparing roofing lead generation companies? Ask these 10 questions about exclusivity, verification, data ownership, proof and contracts before you sign.",
  eyebrow: "Roofing lead generation companies",
  h1: "How to Choose a Roofing Lead Generation Company: 10 Questions to Ask",
  intro:
    "Roofing lead generation companies range from lead sellers to full-service agencies. Some are excellent; some resell the same homeowner to five roofers. These 10 questions separate them quickly.",
  published: "2026-11-23",
  updated: "2026-11-23",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Choosing a Roofing Lead Generation Company", path: "/blog/how-to-choose-a-roofing-lead-generation-company" },
  ],
  ctaTitle: "Want our answers to all 10 questions?",
  shortAnswer:
    "Choose a roofing lead generation company that gives you exclusive leads, verifies phone numbers, lets you own the pages and data, shows real campaign numbers, measures cost per signed job and doesn't lock you into a long contract.",
  blocks: [
    { type: "h2", id: "types", text: "The four types of roofing lead generation companies" },
    {
      type: "ul",
      items: [
        "**Shared lead sellers:** sell each homeowner to several roofers. Cheap per lead, high competition per lead.",
        "**Exclusive pay-per-lead vendors:** one roofer per lead, priced per lead (around $55 in published Texas prices). You still rent the leads.",
        "**Marketing agencies:** run ads in your name. Quality depends on whether they also handle pages, follow-up and qualification.",
        "**System builders:** build ads, pages, CRM and follow-up you own. More setup, but the assets keep working. This is what we do: [roofing lead generation](/roofing-lead-generation).",
      ],
    },
    { type: "h2", id: "questions", text: "10 questions to ask before you sign" },
    {
      type: "ol",
      items: [
        "**Are the leads exclusive to my company?** If not, you are competing on every call. See [shared vs exclusive](/blog/shared-vs-exclusive-roofing-leads).",
        "**How do you verify leads?** Look for phone verification (OTP) and qualifying questions: [verified roofing leads](/verified-roofing-leads).",
        "**Who owns the ads, landing pages and customer data?** If you leave, what stays with you?",
        "**Can you show real roofing campaign numbers?** Ask for cost per lead, lead volume and ideally closed revenue. Ours are public: [case studies](/case-studies).",
        "**What does a lead cost, and what does a signed job cost?** Cost per job is the real number. Benchmarks in [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost).",
        "**How fast is the first contact?** Leads should get a text and email within minutes: [lead follow-up](/blog/roofing-lead-follow-up).",
        "**What offer and creative will you run?** A specific offer beats \"free inspection\": [roofing ads](/roofing-ad-creatives).",
        "**Do you work in my market?** Ask for results near you, for example [Texas](/roofing-leads-texas) or [Florida](/roofing-leads-florida).",
        "**How long is the contract?** Prefer written performance terms over long lock-ins.",
        "**What do the weekly reports show?** Inspections and jobs, not just clicks and impressions.",
      ],
    },
    { type: "h2", id: "red-flags", text: "Red flags" },
    {
      type: "ul",
      items: [
        "No real numbers, only testimonials.",
        "Leads delivered by spreadsheet or email with no CRM.",
        "Unclear whether leads are shared.",
        "Guarantees of a number of jobs (nobody controls whether homeowners buy).",
      ],
    },
    {
      type: "callout",
      title: "How we answer these questions",
      text: "Exclusive leads under your brand, OTP verification, assets you own, public case studies and a 90-day written agreement. See [exclusive roofing leads](/) or the full [list of services](/services).",
    },
  ],
  faqs: [
    { q: "What is the best roofing lead generation company?", a: "The best one for you gives exclusive, verified leads, lets you own the assets, shows real campaign numbers and measures cost per signed job. Use the 10 questions above to compare." },
    { q: "Which roofing lead generation companies should I compare?", a: "Compare four types: shared marketplaces such as Angi, HomeAdvisor and Thumbtack; exclusive lead vendors such as 99 Calls; Google Local Services Ads; and owned systems such as Roofing Systems Co. Judge each by exclusivity, verification, total cost, published results and who owns the data." },
    { q: "Should I buy leads or build my own system?", a: "Buying leads is faster to start; an owned system costs more effort up front but keeps working and the leads are exclusive. Many roofers start with one and move to the other." },
    { q: "How much do roofing lead generation companies charge?", a: "Pay-per-lead vendors price per lead (around $55 in published Texas prices); agencies usually charge a management fee plus ad spend. Our own Meta campaigns had a median ad cost of $11.41 per lead." },
  ],
  related: [
    { href: "/", label: "Exclusive roofing leads" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation system" },
    { href: "/blog/how-much-do-roofing-leads-cost", label: "How much do roofing leads cost?" },
    { href: "/case-studies", label: "Case studies" },
  ],
};


export const digitalMarketingRoofing: ContentDoc = {
  slug: "digital-marketing-for-roofing-companies",
  path: "/blog/digital-marketing-for-roofing-companies",
  kind: "article",
  title: "Digital Marketing for Roofing Companies: What Works",
  description:
    "Digital marketing for roofing companies in 2026: which channels bring roofing leads, what each costs, and how to measure it, with real campaign numbers.",
  eyebrow: "Digital marketing for roofers",
  h1: "Digital Marketing for Roofing Companies: What Works in 2026",
  intro:
    "Roofers hear a lot of advice about digital marketing. This guide compares the channels that actually bring roofing leads, what each one costs, and how to tell whether it is working, using numbers from roofing campaigns we have run.",
  published: "2026-11-24",
  updated: "2026-11-24",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Digital Marketing for Roofing Companies", path: "/blog/digital-marketing-for-roofing-companies" },
  ],
  ctaTitle: "Want a digital marketing plan for your roofing company?",
  shortAnswer:
    "Digital marketing for roofing companies works best as one system: paid social or search ads that reach homeowners in your area, a landing page that matches the ad, phone verification, instant follow-up and a CRM that tracks every lead to a signed job. Reviews and a strong Google Business Profile support it.",
  blocks: [
    { type: "h2", id: "what-it-includes", text: "What digital marketing for roofers includes" },
    {
      type: "ul",
      items: [
        "**Google Business Profile and reviews.** The listing homeowners see in Google Maps. Free, slow to build, and a trust signal for everything else.",
        "**Website and landing pages.** Your website explains the company; [roofing landing pages](/roofing-landing-pages) turn ad clicks into booked inspections.",
        "**Paid social (Facebook and Instagram).** Reaches homeowners before they search, with offers and video from your real jobs.",
        "**Search ads.** Google Ads and Local Services Ads catch people already searching for a roofer, at a higher cost per click.",
        "**Follow-up and CRM.** Instant text and email, reminders and a pipeline from first click to signed contract.",
        "**Email and SMS to past customers and estimates.** Reviews, referrals and old estimates that can still turn into jobs.",
      ],
    },

    { type: "h2", id: "channels", text: "Roofing marketing channels compared" },
    {
      type: "table",
      caption: "Typical costs by channel. Meta figures are from our 15 roofing campaigns; Google and vendor figures are cited in our cost guide.",
      head: ["Channel", "Best for", "Speed", "Typical cost"],
      rows: [
        ["Facebook and Instagram ads", "Steady homeowner leads, replacement and financing offers", "Days", "$3.75 to $24 per lead (median $11.41)"],
        ["Google Ads", "Urgent repair and replacement searches", "Days", "$18 to $42 per click"],
        ["Exclusive pay-per-lead vendors", "Quick volume without running ads", "Days", "Around $55 per lead"],
        ["Google Business Profile and reviews", "Local trust and map listings", "Months", "Free (time)"],
        ["Referrals and past customers", "High-trust jobs", "Ongoing", "Free (time)"],
      ],
    },
    {
      type: "p",
      text: "Sources and detail for every figure are in [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost) and our [cost per lead study across 15 roofing campaigns](/blog/roofing-facebook-ads-cost-per-lead).",
    },

    { type: "h2", id: "paid-social", text: "Paid social: where most of our roofing leads come from" },
    {
      type: "p",
      text: "Facebook and Instagram reach homeowners before they start comparing roofers, so the offer and the creative do the selling. Campaigns we have run produced [1,480 roofing leads at $4.77 each](/case-studies/1480-roofing-leads-4-77-cpl) over five months and [686 leads in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) for a Texas roofer with a $0-down financing offer. See how the system is built in [Facebook ads for roofers](/facebook-ads-for-roofers).",
    },

    { type: "h2", id: "search", text: "Search: Google Business Profile and Google Ads" },
    {
      type: "p",
      text: "Search catches homeowners who already need a roofer. A complete Google Business Profile with photos and recent reviews costs nothing but time. Google Ads and Local Services Ads cost more per click and are capped by how many people search, so they work best for urgent repairs. Our [Google Ads for roofers](/google-ads-for-roofers) guide covers campaign types and costs.",
    },

    { type: "h2", id: "pages", text: "Your website and landing pages" },
    {
      type: "p",
      text: "A roofing website builds trust and supports search. Paid traffic converts better on a landing page with one offer, proof near the form, tap-to-call and a short qualifying form. Pages like these powered [850 leads in 8 days at $7.60](/case-studies/texas-850-roofing-leads-8-days-7-60) for a Texas roofer.",
    },

    { type: "h2", id: "follow-up", text: "Follow-up and CRM: where the money is made" },
    {
      type: "p",
      text: "Most roofing leads are lost after they come in. An instant reply, reminders and a CRM that tracks each lead to a signed job turn the same ad spend into more revenue. For a Florida roofing company, the CRM showed [$111,200 in won revenue in 31 days](/case-studies/florida-roofer-111k-31-days). See [roofing CRM automation](/roofing-crm-automation).",
    },

    { type: "h2", id: "measure", text: "How to measure roofing digital marketing" },
    {
      type: "ol",
      items: [
        "**Cost per lead.** Useful for comparing ads, but never the whole story.",
        "**Contact rate.** How many leads your team actually reaches. Phone verification raises it.",
        "**Cost per booked inspection.** The first number that shows real demand.",
        "**Cost per signed job.** The number that decides whether marketing pays.",
        "**Revenue by source.** Which channel, ad and page produced the jobs, tracked in your CRM.",
      ],
    },

    { type: "h2", id: "agency", text: "Choosing a digital marketing agency for roofers" },
    {
      type: "p",
      text: "Ask who owns the ad account and the data, whether leads are exclusive, which real roofing results the agency can show with numbers, how fast leads are contacted and what is reported each week. Our full checklist is in [how to choose a roofing lead generation company](/blog/how-to-choose-a-roofing-lead-generation-company). We work as a [roofing marketing agency](/) for companies doing $1M+ a year; see our approach to [roofing contractor marketing](/roofing-marketing).",
    },
  ],
  faqs: [
    { q: "What is digital marketing for roofing companies?", a: "Using online channels to win roofing jobs: Google Business Profile and reviews, a website and landing pages, Facebook, Instagram and Google ads, and follow-up through a CRM, text and email. It works best when these parts are connected as one system." },
    { q: "What is the best digital marketing for roofers?", a: "The one that produces signed jobs at a profit in your market. For most $1M+ roofing companies that means paid social for steady homeowner leads, search for urgent repairs, a matching landing page and fast follow-up." },
    { q: "How much does digital marketing cost for a roofing company?", a: "It depends on your market and budget. In our 15 roofing campaigns on Facebook and Instagram, cost per lead ranged from $3.75 to $24, with a median of $11.41. Google Ads clicks for roofing searches cost around $18 to $42." },
    { q: "Is Facebook or Google better for roofing companies?", a: "Google catches people already searching, while Facebook reaches homeowners earlier and often at a lower cost per lead. Many roofing companies use both: Facebook for volume and Google for urgent repairs." },
    { q: "How do I know if my roofing marketing is working?", a: "Track cost per booked inspection and cost per signed job, not just cost per lead, and tag every lead with its source in your CRM so you can see which channel produced the revenue." },
  ],
  related: [
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers" },
    { href: "/google-ads-for-roofers", label: "Google Ads for roofers" },
    { href: "/roofing-landing-pages", label: "Roofing landing pages" },
    { href: "/roofing-crm-automation", label: "Roofing CRM automation" },
    { href: "/blog/how-much-do-roofing-leads-cost", label: "How much do roofing leads cost?" },
  ],
};

export const offSeasonRoofing: ContentDoc = {
  slug: "roofing-marketing-off-season",
  path: "/blog/roofing-marketing-off-season",
  kind: "article",
  title: "Roofing Marketing in the Off-Season: Keep Leads Coming",
  description:
    "How roofing companies keep leads coming between storms and in winter: replacement offers, old estimates, reviews and follow-up, with off-season results.",
  eyebrow: "Off-season roofing marketing",
  h1: "Roofing Marketing in the Off-Season: How to Keep Leads Coming",
  intro:
    "When the weather is quiet, many roofing calendars go quiet too. It does not have to happen: some of our strongest roofing campaigns ran between October and February. Here is what works when there is no storm to ride.",
  published: "2026-11-24",
  updated: "2026-11-24",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Roofing Marketing in the Off-Season", path: "/blog/roofing-marketing-off-season" },
  ],
  ctaTitle: "Want a plan for your slow season?",
  shortAnswer:
    "To get roofing leads in the off-season, shift from storm messaging to replacement and financing offers, contact old estimates and past customers, ask for reviews and referrals, and keep fast follow-up running. Campaigns we ran from October to February produced over 1,400 leads each at around $5 per lead.",
  blocks: [
    { type: "h2", id: "why-slow", text: "Why roofing leads slow down between storms" },
    {
      type: "p",
      text: "Many roofing companies depend on storms, referrals and door knocking. When the weather is quiet, demand from storm damage drops, but homeowners with ageing roofs still plan replacements, sell homes and compare quotes. The work is still there; the message has to change.",
    },

    { type: "h2", id: "results", text: "What worked between October and February" },
    {
      type: "table",
      caption: "Published roofing campaigns that ran in the off-season.",
      head: ["Campaign", "Period", "Result"],
      rows: [
        ["[1,865 roofing leads at $5.24](/case-studies/1865-roofing-leads-5-24-cpl-oct-jan)", "18 Oct 2025 to 14 Jan 2026", "1,865 leads, $9,770 spent"],
        ["[1,480 roofing leads at $4.77](/case-studies/1480-roofing-leads-4-77-cpl)", "October to February", "1,480 leads at $4.77 each"],
        ["[Dallas roofer, $127,500 closed](/case-studies/dallas-roofer-127500-closed-34-installs)", "18 Dec to 19 Feb", "$18,000 in late December, $75,600 in January, $33,900 in February; 34 installs"],
      ],
    },

    { type: "h2", id: "tactics", text: "7 ways to get roofing leads in the off-season" },
    {
      type: "ol",
      items: [
        "**Lead with replacement and financing offers.** A clear payment option answers the biggest objection to a new roof. A $0-down, 0%-for-12-months offer produced [686 leads in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) for a Texas roofer, with no storm involved. See [roof replacement leads](/roof-replacement-leads).",
        "**Contact old estimates.** Homeowners who got a quote and never signed are the warmest list you have. A seasonal message or offer costs nothing in ad spend.",
        "**Ask for reviews and referrals.** Quiet weeks are the time to ask every recent customer for a Google review and a referral.",
        "**Retarget past visitors.** People who visited your site or landing page in storm season can be reminded with financing and warranty ads.",
        "**Sell pre-season inspections.** Before hail season or the hurricane season, offer inspections to homeowners who want to be ready.",
        "**Keep follow-up running.** Off-season leads take longer to decide, so text and email sequences matter even more. See [roofing CRM automation](/roofing-crm-automation).",
        "**Add commercial maintenance.** Property managers plan roof work and budgets year-round. See [commercial roofing leads](/commercial-roofing-leads).",
      ],
    },

    { type: "h2", id: "budget", text: "Should you cut your ad budget in winter?" },
    {
      type: "p",
      text: "Not automatically. Fewer roofers advertise in quiet months, so a campaign with a strong replacement offer can keep cost per lead low, as the October to February campaigns above show. Judge it on cost per booked inspection and per signed job, and pause only when your crews are full. For budgeting, see [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost).",
    },

    { type: "h2", id: "storm-ready", text: "Use the quiet months to get storm-ready" },
    {
      type: "p",
      text: "The off-season is also the time to prepare: creative from this year's jobs, landing pages for each area you serve, and a CRM that can respond in minutes. When the next storm hits, the campaign is ready to launch the same day. See [storm damage leads](/storm-damage-leads) and the full [roofing lead generation](/roofing-lead-generation) system.",
    },
  ],
  faqs: [
    { q: "How do roofers get leads in the off-season?", a: "By switching from storm messaging to replacement and financing offers, contacting old estimates and past customers, asking for reviews and referrals, retargeting past visitors and keeping fast follow-up running." },
    { q: "Do roofing ads work in winter?", a: "Yes. Some of our strongest roofing campaigns ran in the off-season: 1,865 leads at $5.24 from October to January, and 1,480 leads at $4.77 from October to February." },
    { q: "Should roofers stop advertising when it is slow?", a: "Not automatically. Fewer competitors advertise in quiet months, so a strong replacement offer can keep costs low. Pause only when your crews are fully booked." },
    { q: "What is the best offer for off-season roofing leads?", a: "A replacement offer that answers the cost objection, such as financing. A $0-down, 0%-for-12-months offer produced 686 leads in 8 days for a Texas roofer. Financing offers need the lender's terms and disclosures." },
    { q: "Can a roofer close jobs in December and January?", a: "Yes. A Dallas roofer in our case studies closed $18,000 in the last two weeks of December and $75,600 in January, part of $127,500 and 34 installs in about 60 days." },
  ],
  related: [
    { href: "/roof-replacement-leads", label: "Roof replacement leads" },
    { href: "/storm-damage-leads", label: "Storm damage leads" },
    { href: "/roofing-crm-automation", label: "Roofing CRM automation" },
    { href: "/blog/how-to-get-roofing-leads", label: "How to get roofing leads" },
    { href: "/blog/roofing-advertising-ideas", label: "Roofing advertising ideas" },
  ],
};


export const startRoofingCompany: ContentDoc = {
  slug: "how-to-start-a-roofing-company",
  path: "/blog/how-to-start-a-roofing-company",
  kind: "article",
  title: "How to Start a Roofing Company: A Step-by-Step Guide",
  description:
    "How to start a roofing company: licensing and insurance, pricing, crews, suppliers, your first marketing and how to get roofing leads from day one.",
  eyebrow: "Starting a roofing business",
  h1: "How to Start a Roofing Company: 10 Steps From License to First Jobs",
  intro:
    "Starting a roofing company takes more than knowing how to roof. You need the right licenses and insurance, prices that cover your real costs, a crew and suppliers you can count on, and a steady way to find homeowners who need work. This guide walks through each step in order.",
  published: "2026-11-25",
  updated: "2026-11-25",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "How to Start a Roofing Company", path: "/blog/how-to-start-a-roofing-company" },
  ],
  ctaTitle: "Starting or scaling a roofing company?",
  shortAnswer:
    "To start a roofing company, choose your niche and market, form the business, get the contractor license your state requires, buy general liability and workers compensation insurance, set prices from your real costs, line up a crew and suppliers, build a simple website and Google Business Profile, and set up a way to get roofing leads before your first job ends.",
  blocks: [
    { type: "h2", id: "steps", text: "How to start a roofing company in 10 steps" },
    {
      type: "ol",
      items: [
        "**Pick your niche and market.** Residential replacement, repair, storm work or commercial roofing each need different crews, equipment and sales skills. Start with one.",
        "**Write a simple business plan.** Your service area, target jobs, startup costs, prices and how you will find customers.",
        "**Form the business.** Register the company, get a tax ID and open a business bank account.",
        "**Get licensed.** Roofing license rules differ by state and sometimes by city. Check your state's contractor licensing board before you take any job.",
        "**Get insured.** General liability and workers compensation are the basics most homeowners, general contractors and suppliers will ask about. Ask a commercial insurance agent what your state and your jobs require.",
        "**Set your prices from real costs.** Materials, labor, disposal, permits, insurance, vehicles, overhead and the profit you need on every job.",
        "**Line up suppliers and crews.** Open accounts with local roofing suppliers and decide between employees and subcontractors.",
        "**Get the right tools and vehicle.** Safety equipment first, then what your first jobs actually need.",
        "**Build your online presence.** A simple website, a complete Google Business Profile with real job photos, and a way to collect reviews after every job.",
        "**Set up a lead system.** Referrals alone rarely fill a calendar. Plan how you will get roofing leads every month.",
      ],
    },

    { type: "h2", id: "costs", text: "What it costs to start" },
    {
      type: "p",
      text: "Costs depend on your state, whether you buy or lease a vehicle and equipment, insurance premiums and how much marketing you do in the first months. Build a budget that covers several months of overhead before revenue arrives, because roofing jobs are often paid on completion and insurance-related work can take longer to pay.",
    },

    { type: "h2", id: "first-customers", text: "How to get your first roofing customers" },
    {
      type: "ul",
      items: [
        "**Friends, family and past employers.** Your first jobs often come from people who already trust you. Do them well and ask for a review and a referral.",
        "**Google Business Profile.** Free, and the first thing many homeowners check. Add real photos of every job.",
        "**Local partners.** Real estate agents, property managers and home inspectors see roofs that need work.",
        "**Paid ads.** Facebook and Instagram ads reach homeowners in your area before they search. Our published roofing campaigns ranged from $3.75 to $24 per lead. See [how to get roofing leads](/blog/how-to-get-roofing-leads).",
      ],
    },

    { type: "h2", id: "mistakes", text: "Mistakes that sink new roofing companies" },
    {
      type: "ul",
      items: [
        "Pricing jobs to win instead of to profit.",
        "Skipping insurance or licensing to start faster.",
        "Relying only on referrals or storm seasons, so the calendar empties in quiet months. See [roofing marketing in the off-season](/blog/roofing-marketing-off-season).",
        "Slow follow-up. Homeowners book whoever responds first. See [how to follow up on roofing leads](/blog/roofing-lead-follow-up).",
        "Buying shared leads that five other roofers are also calling. See [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
      ],
    },

    { type: "h2", id: "growing", text: "When you are ready to grow" },
    {
      type: "p",
      text: "Once the basics work, growth comes from a predictable flow of leads, fast follow-up and a sales process your team can repeat. Our system is built for roofing companies doing $1M+ a year; read [how to grow a roofing business](/blog/how-to-grow-a-roofing-business) for the next stage.",
    },
  ],
  faqs: [
    { q: "Do I need a license to start a roofing company?", a: "Rules differ by state and sometimes by city. Check your state's contractor licensing board before you take any job." },
    { q: "What insurance does a roofing company need?", a: "General liability and workers compensation are the basics homeowners, contractors and suppliers usually ask about. A commercial insurance agent can tell you what your state and jobs require." },
    { q: "How do new roofing companies get customers?", a: "Usually from people who already know them, a strong Google Business Profile, local partners and paid ads that reach homeowners in their service area." },
    { q: "How much do roofing leads cost for a new company?", a: "It depends on market and offer. Our published roofing campaigns ranged from $3.75 to $24 per lead." },
    { q: "Should I start with residential or commercial roofing?", a: "Most new roofing companies start with residential repair and replacement, which needs less equipment and has shorter sales cycles. Commercial work usually comes later." },
  ],
  related: [
    { href: "/blog/how-to-grow-a-roofing-business", label: "How to grow a roofing business" },
    { href: "/blog/how-to-get-roofing-leads", label: "How to get roofing leads" },
    { href: "/blog/free-roofing-leads", label: "Free roofing leads" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation" },
  ],
};

export const salesTraining: ContentDoc = {
  slug: "roofing-sales-training",
  path: "/blog/roofing-sales-training",
  kind: "article",
  title: "Roofing Sales Training: How to Close More Roofing Jobs",
  description:
    "Roofing sales training for owners and reps: speed to lead, the inspection, presenting options, financing, follow-up and the habits that close more roofs.",
  eyebrow: "Roofing sales training",
  h1: "Roofing Sales Training: 7 Skills That Close More Roofing Jobs",
  intro:
    "Most roofing companies do not lose jobs on price. They lose them on speed, trust and follow-up. This roofing sales training covers the skills that move a homeowner from first contact to a signed contract, in the order they happen.",
  published: "2026-11-25",
  updated: "2026-11-25",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Roofing Sales Training", path: "/blog/roofing-sales-training" },
  ],
  ctaTitle: "Want leads your sales team can actually close?",
  shortAnswer:
    "Good roofing sales training teaches reps to respond within minutes, book the inspection on the first call, inspect thoroughly with photos, present clear options with financing, handle price objections with value, and follow up for weeks until the homeowner decides. Most lost roofing jobs are lost on speed and follow-up, not price.",
  blocks: [
    { type: "h2", id: "skills", text: "The 7 roofing sales skills" },
    {
      type: "ol",
      items: [
        "**Speed to lead.** Call new leads within minutes. A homeowner who waits an hour has often booked someone else. Automate the first text so nobody waits. See [how to follow up on roofing leads](/blog/roofing-lead-follow-up).",
        "**Book the inspection on the first call.** Offer two specific times instead of asking when works.",
        "**Build trust before the roof.** Arrive on time, introduce yourself, explain what you will check and how long it takes.",
        "**Inspect and document.** Take clear photos of every issue and show them to the homeowner. Photos turn a quote into a shared understanding.",
        "**Present options.** Good, better and best, with what each includes and the warranty. Homeowners like to choose.",
        "**Offer financing.** For replacements, a clear payment option answers the biggest objection. A $0-down, 0%-for-12-months offer produced [686 leads in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) for a Texas roofer. Financing offers need the lender's terms and disclosures.",
        "**Follow up until they decide.** Many homeowners collect several quotes. A short, helpful follow-up sequence keeps you in front of them.",
      ],
    },

    { type: "h2", id: "objections", text: "Handling the price objection" },
    {
      type: "p",
      text: "When a homeowner says another quote was cheaper, ask what was included. Compare materials, underlayment, ventilation, warranty, cleanup and who does the work. Show your photos again. Many homeowners choose the roofer who explained the most, not the cheapest one.",
    },

    { type: "h2", id: "lead-quality", text: "Sales training starts with better leads" },
    {
      type: "p",
      text: "No training fixes fake numbers or leads shared with five other roofers. Exclusive, phone-verified leads give your reps real conversations to practice on. See [verified roofing leads](/verified-roofing-leads) and [roofing CRM automation](/roofing-crm-automation) for the system that gets leads to your reps in minutes.",
    },

    { type: "h2", id: "measure", text: "What to measure" },
    {
      type: "ul",
      items: [
        "Time from lead to first contact.",
        "Contact rate: how many leads your team actually reaches.",
        "Inspection booking rate.",
        "Close rate by rep and by lead source.",
        "Average job value.",
      ],
    },

    { type: "h2", id: "mastermind", text: "Learn from roofing companies that are scaling" },
    {
      type: "p",
      text: "We share what is working in real roofing campaigns, from offers to follow-up, in our free [roofing business mastermind](/privatemastermind) recording. Results from those campaigns are in our [case studies](/case-studies).",
    },
  ],
  faqs: [
    { q: "What should roofing sales training cover?", a: "Speed to lead, booking the inspection, building trust, documenting the inspection with photos, presenting options, financing and follow-up." },
    { q: "How fast should a roofing rep call a new lead?", a: "Within minutes. Homeowners often book the first roofer who responds, so automate the first text and call as soon as you can." },
    { q: "How do roofing reps handle price objections?", a: "By comparing what each quote includes, such as materials, ventilation, warranty and cleanup, and showing inspection photos that explain the work." },
    { q: "Does financing help close roofing jobs?", a: "For replacements it often does, because cost is the biggest objection. Financing offers need the lender's terms and required disclosures." },
  ],
  related: [
    { href: "/privatemastermind", label: "Roofing business mastermind" },
    { href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads" },
    { href: "/blog/how-to-grow-a-roofing-business", label: "How to grow a roofing business" },
    { href: "/verified-roofing-leads", label: "Verified roofing leads" },
  ],
};

export const marketingIdeas: ContentDoc = {
  slug: "roofing-marketing-ideas",
  path: "/blog/roofing-marketing-ideas",
  kind: "article",
  title: "Roofing Marketing Ideas and Strategies That Work",
  description:
    "Roofing marketing ideas and strategies for 2026: reviews, referrals, Google Business Profile, partnerships, retargeting, old estimates and paid ads.",
  eyebrow: "Roofing marketing ideas",
  h1: "15 Roofing Marketing Ideas and Strategies That Bring In Jobs",
  intro:
    "Good roofing marketing is not one big campaign. It is a set of habits and channels that keep homeowners finding and choosing you all year. These ideas go beyond ads; for ad-specific ideas, see our roofing advertising ideas.",
  published: "2026-11-25",
  updated: "2026-11-25",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Roofing Marketing Ideas", path: "/blog/roofing-marketing-ideas" },
  ],
  ctaTitle: "Want these ideas turned into a system?",
  shortAnswer:
    "The roofing marketing strategies that work best combine a strong Google Business Profile and reviews, referrals and local partners, a fast website with a page for every service, paid ads with a specific offer, and fast follow-up on every lead, including old estimates. Measure each by cost per signed job.",
  blocks: [
    { type: "h2", id: "reputation", text: "Reputation and referrals" },
    {
      type: "ol",
      items: [
        "**Ask for a review after every job.** Send the link the same day, while the homeowner is happy.",
        "**Reply to every review.** Thank happy customers and answer complaints calmly.",
        "**Run a referral program.** A simple thank-you for every referral that becomes a job.",
        "**Yard signs and truck wraps.** Every job site advertises to the neighbors.",
        "**Neighbor letters.** When you finish a roof, let the neighbors know, with photos of the work.",
      ],
    },

    { type: "h2", id: "online", text: "Online presence" },
    {
      type: "ol",
      items: [
        "**Complete your Google Business Profile.** Categories, service areas, photos and posts. See [roofing SEO](/roofing-seo).",
        "**A page for every service.** Repair, replacement, storm and commercial work each deserve their own page. See [roofing website design](/roofing-website-design).",
        "**Before and after content.** Short videos of real jobs for your site and social media.",
        "**Answer homeowner questions.** Articles on cost, materials and insurance help homeowners trust you before they call.",
      ],
    },

    { type: "h2", id: "partners", text: "Partnerships" },
    {
      type: "ol",
      items: [
        "**Real estate agents and home inspectors.** They see roofs that need work before a sale.",
        "**Property managers.** A steady source of repair and commercial work. See [commercial roofing leads](/commercial-roofing-leads).",
      ],
    },

    { type: "h2", id: "paid", text: "Paid marketing and follow-up" },
    {
      type: "ol",
      items: [
        "**Facebook and Instagram ads with a specific offer.** A $0-down financing offer produced [686 leads in 8 days](/case-studies/texas-roofer-686-leads-8-days-0-down-offer) for a Texas roofer. See [Facebook ads for roofers](/facebook-ads-for-roofers).",
        "**Retarget website visitors.** Remind people who looked but did not call, with financing and warranty ads.",
        "**Follow up on old estimates.** Homeowners who got a quote and never signed are your warmest list.",
        "**Respond in minutes.** The best marketing is wasted if leads wait hours. See [roofing CRM automation](/roofing-crm-automation).",
      ],
    },

    { type: "h2", id: "strategy", text: "Turning ideas into a roofing marketing strategy" },
    {
      type: "p",
      text: "Pick a few ideas you can run every week, track which ones produce signed jobs, and put more into those. Paid ads bring volume quickly; reviews, referrals and SEO lower your cost over time. For ad creative ideas, read [roofing advertising ideas](/blog/roofing-advertising-ideas); for how it fits together, see [digital marketing for roofing companies](/blog/digital-marketing-for-roofing-companies) and [roofing marketing](/roofing-marketing).",
    },
  ],
  faqs: [
    { q: "What are the best roofing marketing ideas?", a: "Reviews after every job, a referral program, a complete Google Business Profile, a page for every service, local partners, paid ads with a specific offer, retargeting and follow-up on old estimates." },
    { q: "What is a good roofing marketing strategy?", a: "Combine a few channels you can run every week, respond to leads in minutes, and measure each channel by cost per signed job." },
    { q: "How do roofers get more reviews?", a: "Ask every happy customer the same day the job is finished and send a direct link to your Google review page." },
    { q: "What is the fastest roofing marketing?", a: "Paid ads with a clear offer usually bring leads fastest. Reviews, referrals and SEO build more slowly but lower costs over time." },
  ],
  related: [
    { href: "/blog/roofing-advertising-ideas", label: "Roofing advertising ideas" },
    { href: "/blog/digital-marketing-for-roofing-companies", label: "Digital marketing for roofing companies" },
    { href: "/roofing-marketing", label: "Roofing marketing agency" },
    { href: "/roofing-seo", label: "Roofing SEO" },
  ],
};

export const growRoofingBusiness: ContentDoc = {
  slug: "how-to-grow-a-roofing-business",
  path: "/blog/how-to-grow-a-roofing-business",
  kind: "article",
  title: "How to Grow a Roofing Business: 8 Steps That Scale",
  description:
    "How to grow a roofing business: predictable leads, fast follow-up, a repeatable sales process, crews, cash flow and the numbers to track as you scale.",
  eyebrow: "Growing a roofing business",
  h1: "How to Grow a Roofing Business: 8 Steps From Referrals to a Predictable Pipeline",
  intro:
    "Most roofing companies grow to a point on referrals and storm work, then stall. Getting past that point takes a predictable source of leads, follow-up that never lets a lead go cold, a sales process your team can repeat and the crews and cash to deliver. Here are the steps, with real numbers from roofing campaigns we have run.",
  published: "2026-11-25",
  updated: "2026-11-25",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "How to Grow a Roofing Business", path: "/blog/how-to-grow-a-roofing-business" },
  ],
  ctaTitle: "Ready to grow past referrals?",
  shortAnswer:
    "To grow a roofing business, build a lead source you control instead of relying on referrals and storms, respond to every lead within minutes, use a repeatable sales process, track cost per signed job by source, and add crews and cash reserves before you scale ad spend.",
  blocks: [
    { type: "h2", id: "steps", text: "8 steps to grow a roofing business" },
    {
      type: "ol",
      items: [
        "**Know your numbers.** Average job value, close rate, cost per lead and cost per signed job by source. You cannot scale what you do not measure.",
        "**Build a lead source you control.** Referrals and storms are great but unpredictable. Paid campaigns under your own brand bring a steady flow. A Dallas roofer closed [$127,500 and 34 installs in about 60 days](/case-studies/dallas-roofer-127500-closed-34-installs) with this kind of system.",
        "**Respond in minutes.** Automate the first text and email, and call fast. See [roofing CRM automation](/roofing-crm-automation).",
        "**Make sales repeatable.** A clear inspection, presentation and follow-up process that every rep follows. See [roofing sales training](/blog/roofing-sales-training).",
        "**Add replacement and financing offers.** Bigger tickets and offers that answer the cost objection.",
        "**Keep the calendar full in quiet months.** Old estimates, reviews, referrals and replacement campaigns. See [roofing marketing in the off-season](/blog/roofing-marketing-off-season).",
        "**Grow crews before you grow ads.** More leads than you can serve wastes money and damages reviews.",
        "**Protect cash flow.** Roofing jobs are often paid on completion. Keep reserves before scaling spend.",
      ],
    },

    { type: "h2", id: "results", text: "What growth looks like in real numbers" },
    {
      type: "table",
      caption: "Published results from roofing companies using an owned lead system.",
      head: ["Company", "Period", "Result"],
      rows: [
        ["[Dallas roofer](/case-studies/dallas-roofer-127500-closed-34-installs)", "About 60 days", "$127,500 closed, 34 installs"],
        ["[Florida roofing company](/case-studies/florida-roofer-111k-31-days)", "31 days", "$111,200 won, 26 jobs"],
        ["[Texas roofing company](/case-studies/texas-roofer-77k-closed-30-days)", "30 days", "$77,100 won, 164 opportunities"],
      ],
    },

    { type: "h2", id: "stall", text: "Why roofing companies stall" },
    {
      type: "ul",
      items: [
        "The owner still sells every job, so growth stops when the owner's calendar is full.",
        "Leads come from shared lists, so every call is a price war. See [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
        "Nobody tracks which marketing produces signed jobs, so budget goes to the wrong places.",
        "Follow-up lives in someone's head instead of a CRM.",
      ],
    },

    { type: "h2", id: "system", text: "Growth is a system, not a campaign" },
    {
      type: "p",
      text: "The roofing companies that grow steadily treat leads, follow-up and sales as one system they own. That is what we build for roofing companies doing $1M+ a year: see [roofing lead generation](/roofing-lead-generation), [roofing marketing](/roofing-marketing) and the free [roofing business mastermind](/privatemastermind).",
    },
  ],
  faqs: [
    { q: "How do I grow my roofing business?", a: "Build a lead source you control, respond to every lead within minutes, use a repeatable sales process, track cost per signed job, and add crews and cash reserves before scaling ad spend." },
    { q: "Why do roofing companies stop growing?", a: "Usually because the owner still sells every job, leads are shared or unpredictable, follow-up is slow, or nobody tracks which marketing produces signed jobs." },
    { q: "How fast can a roofing company grow with paid leads?", a: "It depends on market, offer and capacity. In our case studies, a Florida roofing company won $111,200 in 31 days and a Dallas roofer closed $127,500 in about 60 days." },
    { q: "Should I grow crews or marketing first?", a: "Make sure you can deliver the work first. More leads than your crews can serve wastes ad spend and hurts reviews." },
  ],
  related: [
    { href: "/blog/how-to-start-a-roofing-company", label: "How to start a roofing company" },
    { href: "/blog/roofing-sales-training", label: "Roofing sales training" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation" },
    { href: "/privatemastermind", label: "Roofing business mastermind" },
  ],
};

export const freeRoofingLeads: ContentDoc = {
  slug: "free-roofing-leads",
  path: "/blog/free-roofing-leads",
  kind: "article",
  title: "Free Roofing Leads: 9 Honest Ways to Get Them",
  description:
    "Free roofing leads are real but slow. 9 honest ways to get them, from reviews and referrals to partners and old estimates, and when to pay instead.",
  eyebrow: "Free roofing leads",
  h1: "Free Roofing Leads: 9 Honest Ways to Get Them, and When to Pay Instead",
  intro:
    "There is no list of free roofing leads waiting to be downloaded. But there are free ways to get homeowners to call you. They cost time instead of money, they grow slowly, and they work best alongside a paid source you control. Here are the ones that work.",
  published: "2026-11-25",
  updated: "2026-11-25",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Free Roofing Leads", path: "/blog/free-roofing-leads" },
  ],
  ctaTitle: "Need more leads than free channels can bring?",
  shortAnswer:
    "Free roofing leads come from referrals, reviews, a complete Google Business Profile, local partners, neighbor marketing, old estimates and helpful content. They cost time rather than money and grow slowly, so most growing roofing companies pair them with a paid lead source they control.",
  blocks: [
    { type: "h2", id: "ways", text: "9 ways to get free roofing leads" },
    {
      type: "ol",
      items: [
        "**Referrals from past customers.** Ask at the end of every job and thank people who refer.",
        "**Google reviews.** Send the review link the same day the job is done.",
        "**Google Business Profile.** Complete categories, service areas and real job photos. See [roofing SEO](/roofing-seo).",
        "**Neighbor marketing.** Yard signs and a note to neighbors when you finish a roof.",
        "**Old estimates.** Homeowners who got a quote and never signed. A seasonal follow-up costs nothing.",
        "**Real estate agents and home inspectors.** They see roofs that need work before a sale.",
        "**Property managers.** A source of repair and commercial work. See [commercial roofing leads](/commercial-roofing-leads).",
        "**Helpful content.** Answer the questions homeowners search for on your website.",
        "**Community presence.** Local groups, events and sponsorships where homeowners already gather.",
      ],
    },

    { type: "h2", id: "limits", text: "The limits of free roofing leads" },
    {
      type: "p",
      text: "Free channels are worth building, but they are slow and hard to scale on demand. You cannot turn on more referrals the week your crews are free. That is why most roofing companies past their first year add a paid source they control.",
    },

    { type: "h2", id: "paid", text: "Free vs paid roofing leads" },
    {
      type: "table",
      caption: "Paid figures are from our published roofing campaigns.",
      head: ["Source", "Cost", "Speed", "Control"],
      rows: [
        ["Referrals and reviews", "Free (time)", "Slow", "Low"],
        ["Google Business Profile", "Free (time)", "Months", "Medium"],
        ["Your own Facebook and Instagram ads", "$3.75 to $24 per lead", "Days", "High"],
        ["Shared lead marketplaces", "Per lead, varies", "Days", "Low"],
      ],
    },
    {
      type: "p",
      text: "For a full breakdown of paid options, see [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost) and the [roofing lead cost report](/roofing-lead-cost-report-2026). For every channel side by side, read [how to get roofing leads](/blog/how-to-get-roofing-leads).",
    },
  ],
  faqs: [
    { q: "Can you get roofing leads for free?", a: "Yes, through referrals, reviews, a complete Google Business Profile, local partners, neighbor marketing and old estimates. They cost time instead of money and grow slowly." },
    { q: "What is the best free source of roofing leads?", a: "For most roofers, referrals and reviews from past customers, because those homeowners already trust you." },
    { q: "Are free roofing lead lists real?", a: "Be careful. Downloaded lists of homeowners are not people asking for a roofer. Real leads are homeowners who contacted you or asked for a quote." },
    { q: "When should a roofer pay for leads?", a: "When free channels cannot fill the calendar on demand. A paid source you control lets you add leads when your crews have capacity." },
  ],
  related: [
    { href: "/blog/how-to-get-roofing-leads", label: "How to get roofing leads" },
    { href: "/blog/how-much-do-roofing-leads-cost", label: "How much do roofing leads cost?" },
    { href: "/blog/roofing-marketing-ideas", label: "Roofing marketing ideas" },
    { href: "/roofing-lead-generation", label: "Roofing lead generation" },
  ],
};

export const insuranceLeads: ContentDoc = {
  slug: "roofing-leads-from-insurance-companies",
  path: "/blog/roofing-leads-from-insurance-companies",
  kind: "article",
  title: "How to Get Roofing Leads From Insurance Companies",
  description:
    "Can roofers get leads from insurance companies? How insurance-related roofing work really comes in, the relationships that help, and the rules to follow.",
  eyebrow: "Insurance roofing leads",
  h1: "How to Get Roofing Leads From Insurance Companies (and What Actually Works)",
  intro:
    "Insurance companies do not usually hand roofing leads to contractors. But a lot of roofing work involves an insurance claim, and there are honest ways to be the roofer homeowners call when it does. This guide explains how insurance-related roofing work comes in, the relationships that help and the rules to respect.",
  published: "2026-11-25",
  updated: "2026-11-25",
  breadcrumbs: [
    { name: "Blog", path: "/blog" },
    { name: "Roofing Leads From Insurance Companies", path: "/blog/roofing-leads-from-insurance-companies" },
  ],
  ctaTitle: "Want storm and insurance-related leads in your market?",
  shortAnswer:
    "Insurance companies rarely send leads directly to roofers. Insurance-related roofing work usually comes from homeowners after a storm, so roofers get it through storm campaigns, a strong local reputation, relationships with local insurance agents and contractor networks some carriers use, and by helping homeowners through inspections without promising claim outcomes.",
  blocks: [
    { type: "h2", id: "how", text: "How insurance-related roofing work really comes in" },
    {
      type: "p",
      text: "After hail or wind, homeowners check their roofs, file claims and look for a roofer. The insurer pays according to the policy, but the homeowner usually chooses who does the work. So the real question is how to be the roofer that homeowner trusts and finds first.",
    },

    { type: "h2", id: "ways", text: "6 honest ways to get insurance-related roofing leads" },
    {
      type: "ol",
      items: [
        "**Run storm campaigns in affected areas.** Target the ZIP codes hit by a storm with an inspection offer. See [storm damage leads](/storm-damage-leads).",
        "**Build relationships with local insurance agents.** Independent agents get asked by their clients which roofer to call. Be the one they trust.",
        "**Learn about contractor networks.** Some carriers and claims programs work with approved contractor networks. Requirements and availability vary by carrier and state.",
        "**Know the claims process.** Homeowners value a roofer who documents damage with clear photos and explains the inspection and claims steps.",
        "**Get reviews that mention storm work.** Homeowners after a storm look for a local, established company, not a storm chaser.",
        "**Follow up for weeks.** Claims take time. Keep in touch until the homeowner is ready.",
      ],
    },

    { type: "h2", id: "rules", text: "Rules to respect" },
    {
      type: "ul",
      items: [
        "Do not promise a claim outcome. Only the insurer decides what is covered.",
        "Rules on contractors and claims differ by state. Some states restrict what contractors can say or offer about deductibles and claims. Check your state's rules before you advertise.",
        "Keep your license and insurance current, and show them. Homeowners and agents check.",
      ],
    },

    { type: "h2", id: "storm", text: "When the next storm hits" },
    {
      type: "p",
      text: "A campaign that is ready before storm season can launch within hours in affected areas, with phone verification and instant follow-up. See [storm damage leads](/storm-damage-leads), our seasonal notes for [Texas](/roofing-leads-texas) and [Florida](/roofing-leads-florida), and [how to follow up on roofing leads](/blog/roofing-lead-follow-up).",
    },
  ],
  faqs: [
    { q: "Do insurance companies give roofing leads?", a: "Rarely directly. Homeowners usually choose their own roofer after filing a claim, so roofers win this work through storm campaigns, local reputation and relationships with insurance agents." },
    { q: "How do roofers work with insurance agents?", a: "By building trust with local independent agents, whose clients often ask which roofer to call after a storm." },
    { q: "Can a roofer promise the insurance will pay?", a: "No. Only the insurer decides what is covered. Roofers can document damage and explain the inspection and claims steps." },
    { q: "Are there rules for insurance roofing work?", a: "Yes, and they differ by state. Some states restrict what contractors can offer or say about deductibles and claims, so check your state's rules before advertising." },
  ],
  related: [
    { href: "/storm-damage-leads", label: "Storm damage leads" },
    { href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads" },
    { href: "/blog/free-roofing-leads", label: "Free roofing leads" },
    { href: "/roof-repair-leads", label: "Roof repair leads" },
  ],
};

export const costReport: ContentDoc = {
  slug: "roofing-lead-cost-report-2026",
  path: "/roofing-lead-cost-report-2026",
  kind: "article",
  title: "Roofing Lead Cost Report 2026: Data From 18 Campaigns",
  description:
    "Roofing lead costs from 18 published campaigns and 11,190 leads: median $13.40 per lead, a $3.75 to $24 range, verified vs standard leads and cost drivers.",
  eyebrow: "Data report",
  h1: "Roofing Lead Cost Report 2026: What 18 Campaigns and 11,190 Leads Cost",
  intro:
    "This report pulls together every published roofing campaign on this site that lists a cost per lead: 18 campaigns and 11,190 leads, run on Facebook and Instagram between August 2025 and October 2026. Client names are left out. Each figure links to its full case study.",
  published: "2026-11-25",
  updated: "2026-11-25",
  breadcrumbs: [{ name: "Roofing Lead Cost Report 2026", path: "/roofing-lead-cost-report-2026" }],
  ctaTitle: "Want to know what leads would cost in your market?",
  shortAnswer:
    "Across 18 published roofing campaigns and 11,190 leads, cost per lead ranged from $3.75 to $24, with a median of $13.40. Phone-verified campaigns had a median of $14.80 per lead; standard campaigns had a median of $5.31. Verification adds cost per lead but removes fake and unreachable numbers.",
  blocks: [
    { type: "h2", id: "headline", text: "Headline numbers" },
    {
      type: "table",
      caption: "All 18 published campaigns with a cost per lead.",
      head: ["Measure", "Value", "Notes"],
      rows: [
        ["Campaigns", "18", "Every published case study on this site that lists a cost per lead"],
        ["Leads", "11,190", "Sum of the lead counts in those case studies"],
        ["Median cost per lead", "$13.40", "Half the campaigns were below, half above"],
        ["Lowest", "$3.75", "[25 leads on a campaign's first day](/case-studies/roofing-25-leads-one-day-3-75)"],
        ["Highest", "$24", "[1,024 OTP-verified leads for a pay-per-lead agency](/case-studies/ppl-agency-1024-otp-verified-roofing-leads)"],
      ],
    },

    { type: "h2", id: "how-much", text: "How much do roofing leads cost?" },
    {
      type: "p",
      text: "In our published campaigns, between $3.75 and $24 per lead, with a median of $13.40. Where a campaign falls in that range depends mostly on the offer, the creative, the market and how strictly leads are verified. Cost per lead is only the first number: what matters is cost per booked inspection and cost per signed job.",
    },

    { type: "h2", id: "all", text: "Every campaign in the report" },
    {
      type: "table",
      caption: "Sorted by cost per lead. Links open the full case study.",
      head: ["Campaign", "Leads", "Cost per lead"],
      rows: [
        ["[First-day campaign](/case-studies/roofing-25-leads-one-day-3-75)", "25", "$3.75"],
        ["[After Meta's Andromeda update](/case-studies/537-qualified-leads-13-days-andromeda-update)", "537", "$4.27"],
        ["[Roofing agency, B2B](/case-studies/roofing-agency-664-leads-4-51)", "664", "$4.51"],
        ["[Five-month campaign](/case-studies/1480-roofing-leads-4-77-cpl)", "1,480", "$4.77"],
        ["[Five weeks, verified](/case-studies/825-verified-roofing-leads-4-95-cpl)", "825", "$4.95"],
        ["[October to January](/case-studies/1865-roofing-leads-5-24-cpl-oct-jan)", "1,865", "$5.24"],
        ["[Texas, $0-down offer](/case-studies/texas-roofer-686-leads-8-days-0-down-offer)", "686", "$5.31"],
        ["[Texas, 8 days](/case-studies/texas-850-roofing-leads-8-days-7-60)", "850", "$7.60"],
        ["[28 days, validated](/case-studies/215-validated-roofing-leads-12-79-cpl)", "215", "$12.79"],
        ["[28 days, verified](/case-studies/roofing-227-leads-14-cpl-28-days)", "227", "$14.00"],
        ["[Since October 6](/case-studies/roofing-201-leads-14-45-cpl)", "201", "$14.45"],
        ["[14 days](/case-studies/roofing-154-leads-14-58-cpl)", "154", "$14.58"],
        ["[New ad account, OTP-verified](/case-studies/261-otp-verified-leads-7-days-new-account)", "261", "$14.80"],
        ["[Agency client, exclusive](/case-studies/agency-client-1068-exclusive-roofing-leads-17-40)", "1,068", "$17.40"],
        ["[Florida, 4 locations, OTP-verified](/case-studies/florida-365-otp-verified-leads-4-locations)", "365", "$19.50"],
        ["[14 days, OTP-verified](/case-studies/448-otp-verified-roofing-leads-20-10-cpl)", "448", "$20.10"],
        ["[Miami, Tampa and Orlando, verified](/case-studies/florida-295-verified-roofing-leads-miami-tampa-orlando)", "295", "$22.58"],
        ["[Pay-per-lead agency, OTP-verified](/case-studies/ppl-agency-1024-otp-verified-roofing-leads)", "1,024", "$24.00"],
      ],
    },

    { type: "h2", id: "verified", text: "Verified vs standard leads" },
    {
      type: "table",
      caption: "Campaigns whose case study describes leads as verified, OTP-verified or validated, compared with the rest.",
      head: ["Group", "Campaigns", "Median cost per lead"],
      rows: [
        ["Phone-verified or validated", "9", "$14.80"],
        ["Standard", "9", "$5.31"],
      ],
    },
    {
      type: "p",
      text: "Verification adds a step for the homeowner, so fewer people finish the form and each lead costs more. In exchange, numbers are real and reachable before your team calls. For many roofing companies the higher cost per lead is offset by fewer wasted calls. See [verified roofing leads](/verified-roofing-leads).",
    },

    { type: "h2", id: "markets", text: "Texas and Florida" },
    {
      type: "p",
      text: "The two Texas campaigns in the report came in at $5.31 and $7.60 per lead; neither case study describes its leads as verified. The two Florida roofing campaigns, at $19.50 and $22.58, used OTP verification across several locations. With only two campaigns per state, the difference says more about verification than about the state itself. Market detail is on [roofing leads in Texas](/roofing-leads-texas) and [roofing leads in Florida](/roofing-leads-florida).",
    },

    { type: "h2", id: "drivers", text: "What drives roofing cost per lead" },
    {
      type: "ul",
      items: [
        "**The offer.** A specific offer, such as $0-down financing, took one Texas roofer from zero leads to 686 in 8 days at $5.31.",
        "**Creative.** Most of the lowest-cost campaigns held a click-through rate above 2%; the Texas 850-lead campaign reached 3.79%.",
        "**Verification.** OTP and multi-step validation raise cost per lead and lower the share of bad numbers.",
        "**Scale and time.** Long-running campaigns, such as 1,480 leads at $4.77 over five months, keep cost per lead low with clear rules for launching, killing and scaling ads.",
      ],
    },

    { type: "h2", id: "method", text: "Method and limits" },
    {
      type: "p",
      text: "Included: every case study on roofingsystems.co that states a single cost per lead, as published on 25 November 2026. Excluded: case studies without a cost per lead, ranges instead of a single figure, and the Florida home service campaign that also covered gutters and solar. Campaigns differ in market, offer, budget and length, so treat these numbers as real benchmarks, not a quote for your market. An earlier study of 15 of these campaigns is in [roofing Facebook ads cost per lead](/blog/roofing-facebook-ads-cost-per-lead).",
    },
    {
      type: "p",
      text: "You may cite this report with a link to this page. For what leads would cost in your area, see [how much roofing leads cost](/blog/how-much-do-roofing-leads-cost) or [book a free strategy call](/book).",
    },
  ],
  faqs: [
    { q: "How much do roofing leads cost in 2026?", a: "Across 18 published roofing campaigns and 11,190 leads, cost per lead ranged from $3.75 to $24, with a median of $13.40." },
    { q: "Do verified roofing leads cost more?", a: "Yes, per lead. Phone-verified campaigns had a median of $14.80 per lead, compared with $5.31 for standard campaigns, but verified numbers are real and reachable." },
    { q: "Where does the data come from?", a: "From every published case study on this site that lists a single cost per lead. Client names are left out and each figure links to its case study." },
    { q: "Can I cite this report?", a: "Yes, with a link to this page." },
  ],
  related: [
    { href: "/blog/how-much-do-roofing-leads-cost", label: "How much do roofing leads cost?" },
    { href: "/blog/roofing-facebook-ads-cost-per-lead", label: "Facebook ads cost per lead study" },
    { href: "/pay-per-lead-roofing", label: "Pay per lead roofing" },
    { href: "/case-studies", label: "All case studies" },
  ],
};

export const articles = [costPerLeadStudy, roofingLeadsCost, chooseLeadGenCompany, howToGetRoofingLeads, digitalMarketingRoofing, offSeasonRoofing, startRoofingCompany, growRoofingBusiness, salesTraining, marketingIdeas, freeRoofingLeads, insuranceLeads, roofingAdvertisingIdeas, sharedVsExclusive, leadFollowUp];
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
