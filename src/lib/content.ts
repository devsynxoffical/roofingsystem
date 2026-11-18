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
  title: "Facebook Ads for Roofers: Done-for-You Meta Ads System",
  description:
    "Facebook and Instagram ads for roofing companies, built into a full system: offer, creatives, landing page, CRM and AI follow-up that book inspections.",
  eyebrow: "Meta ads for roofing companies",
  h1: "Facebook Ads for Roofers That Book Inspections, Not Just Clicks",
  intro:
    "Most roofers who say Facebook ads \"don't work\" ran ads without the rest of the system behind them. We build and run Meta (Facebook and Instagram) ads for $1M+ roofing companies as one part of a complete client acquisition system, so every click has an offer, a page, a follow-up sequence and a qualification step waiting for it.",
  published: "2026-11-16",
  updated: "2026-11-16",
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
      a: "Offer positioning, ad creatives and copy, audience setup, landing pages and the sales funnel, CRM setup, AI follow-up, email and SMS sequences, and lead qualification — installed and managed for you.",
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
  title: "Roofing Lead Generation System for $1M+ Roofers",
  description:
    "Stop renting shared roofing leads. We install a lead generation system you own: Meta ads, landing pages, CRM, AI follow-up and lead qualification.",
  eyebrow: "Roofing lead generation",
  h1: "A Roofing Lead Generation System You Own — Not Leads You Rent",
  intro:
    "Buying leads keeps you dependent on someone else's pipeline. We install a complete roofing lead generation system for $1M+ roofing companies — ads, pages, CRM, follow-up and qualification — that produces exclusive opportunities for your company and stays yours.",
  published: "2026-11-16",
  updated: "2026-11-16",
  breadcrumbs: [{ name: "Roofing Lead Generation", path: "/roofing-lead-generation" }],
  ctaTitle: "Find out what an owned lead generation system would produce in your market",
  shortAnswer:
    "A roofing lead generation system is the combination of ads, landing pages, a CRM, automated follow-up and lead qualification that a roofing company owns, instead of buying shared leads. The leads are exclusive to your company and the assets keep working after setup.",
  blocks: [
    { type: "h2", id: "rented-vs-owned", text: "Rented leads vs. an owned lead generation system" },
    {
      type: "p",
      text: "Most roofing companies get leads in one of three ways: referrals, buying leads from a lead seller, or running their own marketing. Referrals are great but hard to scale on demand. Bought leads are fast but often shared with other contractors, and the moment you stop paying, the flow stops. An owned system takes more setup, but every asset it builds — the ads, the pages, the audiences, the CRM and the customer list — keeps working for your company.",
    },
    {
      type: "p",
      text: "We break down the trade-offs in detail in [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
    },

    { type: "h2", id: "the-system", text: "The six parts of the system" },
    {
      type: "ol",
      items: [
        "**Offer positioning** — a specific, market-relevant reason for a homeowner to contact you instead of the next roofer.",
        "**Paid traffic** — [Facebook and Instagram ads for roofers](/facebook-ads-for-roofers), with creatives and audiences built for roofing.",
        "**Landing pages and funnel** — pages that match each ad and pre-sell the inspection.",
        "**CRM** — every lead captured, tagged and tracked from first click to signed contract.",
        "**AI follow-up** — an instant first response plus email and SMS sequences, so no lead is left waiting. See [how to follow up on roofing leads](/blog/roofing-lead-follow-up).",
        "**Qualification** — leads are screened before your sales team sees them, so time goes to homeowners who are ready.",
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
      text: "Landing pages, funnel, CRM, automations, ad creatives, copy, follow-up sequences and customer data are 100% yours — permanently. It becomes a business asset, not a monthly rental.",
    },

    { type: "h2", id: "what-you-do", text: "What your team does" },
    {
      type: "p",
      text: "You run the appointments and close. We build and operate everything before the appointment: the offer, ads, pages, CRM, follow-up and qualification. You get qualified homeowners on your calendar instead of a spreadsheet of names to chase.",
    },

    { type: "h2", id: "guarantee", text: "Results backed in writing" },
    {
      type: "p",
      text: "We agree on growth milestones in writing for the first 90 days. If they are not hit, we continue working with no management fee until they are, and there is no long-term contract. Results vary by market, capacity and follow-through — see our [income disclosure](/income-disclosure).",
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
      q: "Who is this for?",
      a: "Roofing contractors doing $1M+ in annual revenue who want predictable, repeatable growth and have the capacity to handle more appointments.",
    },
    {
      q: "Do I keep the system if we stop working together?",
      a: "Yes. The landing pages, funnel, CRM, automations, creatives, copy, sequences and customer data are yours permanently.",
    },
  ],
  related: [
    { href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers" },
    { href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive roofing leads" },
    { href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads" },
    { href: "/privatemastermind", label: "Free training: audience segmentation" },
  ],
};

export const sharedVsExclusive: ContentDoc = {
  slug: "shared-vs-exclusive-roofing-leads",
  path: "/blog/shared-vs-exclusive-roofing-leads",
  kind: "article",
  title: "Shared vs Exclusive Roofing Leads: What You Really Pay For",
  description:
    "Shared roofing leads, exclusive leads or your own lead generation system? A plain comparison of cost, quality, speed and ownership to help $1M+ roofers choose.",
  eyebrow: "Roofing lead generation",
  h1: "Shared vs. Exclusive Roofing Leads: What You're Really Paying For",
  intro:
    "Every roofing company that grows past referrals ends up asking the same question: should we buy leads, or build our own way of getting them? Here is a plain comparison of shared leads, exclusive leads and an owned lead generation system — what each one actually gives you, and where each one breaks.",
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
        "**Shared leads** — a lead seller captures a homeowner's request and sells the same contact to several roofing companies. Whoever calls first usually has the advantage.",
        "**Exclusive leads** — the lead seller sells each contact to one company only. You pay more per lead, but you are not racing other roofers for the same homeowner.",
        "**An owned system** — you (or a partner working under your brand) run the ads, landing pages, CRM and follow-up. Homeowners respond directly to your company, and the assets stay with you.",
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
      text: "Exclusive leads remove the race against other contractors for that contact, which usually makes conversations easier. But you still do not control how the lead was generated, what the homeowner was promised, or how qualified they are — and the flow still belongs to the seller.",
    },
    {
      type: "ul",
      items: [
        "**Good for:** roofers who want more predictable conversations without building marketing in-house.",
        "**Watch out for:** vague definitions of \"exclusive\" and \"qualified\" — read the contract terms on refunds and replacements before you sign.",
      ],
    },

    { type: "h2", id: "owned", text: "An owned system: slower to set up, compounds over time" },
    {
      type: "p",
      text: "With your own system, the ads run under your name, the landing pages make your offer, and every lead goes into your CRM with your follow-up. It takes setup — offer, creatives, pages, automations — but each piece keeps working and improving, and the customer data is yours.",
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
        "**Competition for the homeowner:** shared — high; exclusive — low; owned — none, they responded to your brand.",
        "**Control over the message and offer:** shared — none; exclusive — none; owned — full.",
        "**Qualification:** shared and exclusive — depends on the seller; owned — you set the rules.",
        "**What you keep if you stop paying:** shared and exclusive — nothing; owned — pages, CRM, audiences, creatives and customer data.",
        "**Setup effort:** shared — minimal; exclusive — minimal; owned — significant, unless a partner installs it.",
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
      text: "We install the owned option for $1M+ roofing companies — offer, [Facebook and Instagram ads](/facebook-ads-for-roofers), landing pages, CRM, AI follow-up and qualification — as one system. More on the [roofing lead generation system](/roofing-lead-generation).",
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
    "A practical roofing lead follow-up process: respond instantly, qualify, book the inspection and keep following up by call, text and email until they decide.",
  eyebrow: "Roofing sales follow-up",
  h1: "How to Follow Up on Roofing Leads (and Book More Inspections)",
  intro:
    "Most roofing leads are not lost to a competitor's better price — they are lost to silence. The homeowner fills in a form, waits, gets busy, and books with whoever reached them first. Here is a follow-up process you can run on every lead, whatever the source.",
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
    { type: "h2", id: "speed", text: "1. Respond immediately — every time" },
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
        "What prompted the request — a leak, storm damage, an older roof, selling the home?",
        "Is there an insurance claim involved, or is it a retail job?",
        "Who else needs to be at the appointment to make a decision?",
        "What timeline are they working to?",
      ],
    },

    { type: "h2", id: "book", text: "3. Book the inspection on the first conversation" },
    {
      type: "p",
      text: "Offer two or three specific time slots instead of asking \"when works for you?\". Confirm by text straight away, and send a reminder the day before and on the morning of the appointment. Make rescheduling easy — a homeowner who can move the appointment is less likely to simply not show up.",
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
        "**First week:** an email with useful information — photos of common roof issues, how insurance inspections work in your area, your warranty.",
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
      text: "Homeowners often collect several estimates before choosing. The roofer who follows up clearly — answering questions, explaining the scope, making it easy to say yes — is often the one who wins, even without the lowest price. Put post-estimate follow-up in the same system so it never depends on someone remembering.",
    },

    { type: "h2", id: "track", text: "6. Track everything in a CRM" },
    {
      type: "p",
      text: "If follow-up lives in someone's head or a notebook, it will slip in busy weeks — exactly when you have the most leads. A CRM shows every lead's status, who contacted them and when, and which leads need action today. It also tells you which lead sources produce booked jobs, not just form fills.",
    },
    {
      type: "callout",
      title: "Real example",
      text: "In a 16-day Florida campaign across 4 locations, every one of [365 OTP-verified leads](/case-studies/florida-365-otp-verified-leads-4-locations) was synced instantly to the CRM, nurtured by SMS and email, and routed to sales: follow-up running automatically, not from memory.",
    },

    { type: "h2", id: "automate", text: "Automating the process" },
    {
      type: "p",
      text: "Most of the steps above can run automatically: instant replies, reminders, follow-up sequences and pipeline updates. Your team then spends its time on the conversations that need a person. In the system we install for $1M+ roofers, every lead from our [Facebook and Instagram ads](/facebook-ads-for-roofers) goes into a CRM with AI follow-up, email and SMS sequences and qualification — see the full [roofing lead generation system](/roofing-lead-generation).",
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
export const articles = [costPerLeadStudy, sharedVsExclusive, leadFollowUp];
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
