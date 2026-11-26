/*
  Extra content for each case study page, derived only from the case study's
  own reported numbers and text (see caseStudies.ts). Nothing here invents a
  result: comparisons are calculated from the other case studies, and the
  advice sections describe our standard process, chosen by what the case
  study mentions.
*/
import { caseStudies, type CaseStudy } from "./caseStudies";

const num = (v: string) => {
  const m = v.replace(/,/g, "").match(/(\d+(?:\.\d+)?)\s*(?:(?:[–-]|to)\s*\$?(\d+(?:\.\d+)?))?\s*(k)?/i);
  if (!m) return undefined;
  let n = m[2] ? (parseFloat(m[1]) + parseFloat(m[2])) / 2 : parseFloat(m[1]);
  if (m[3]) n *= 1000;
  return n;
};

export type CaseFacts = {
  leads?: number;
  leadsLabel?: string;
  cpl?: number;
  cplText?: string;
  spend?: number;
  spendText?: string;
  days?: number;
  ctr?: number;
  ctrText?: string;
};

export function caseFacts(c: CaseStudy): CaseFacts {
  const f: CaseFacts = {};
  for (const { label, value } of c.metrics) {
    const l = label.toLowerCase();
    if (/cost per lead|^per lead/.test(l) && value.includes("$")) {
      f.cpl = num(value);
      f.cplText = value;
    } else if (/lead/.test(l) && !/cpl|range/.test(l) && /^\d/.test(value)) {
      f.leads = num(value);
      f.leadsLabel = /^[A-Z]{2}/.test(label) ? label : label.toLowerCase();
    } else if (/spen[dt]/.test(l) && value.includes("$")) {
      f.spend = num(value);
      f.spendText = value;
    } else if (l === "days") {
      f.days = num(value);
    } else if (l === "ctr") {
      f.ctr = num(value);
      f.ctrText = value;
    }
  }
  // days stated only in the title, e.g. "in 8 Days", "45 Days", "28 days"
  if (!f.days) {
    const d = c.title.match(/(\d+)\s+days/i);
    if (d) f.days = parseInt(d[1], 10);
  }
  return f;
}

/** Roofing ad campaigns that reported a single cost per lead (used for the ranking). */
const ranked = caseStudies
  .filter((c) => c.category !== "Masterminds")
  .map((c) => ({ slug: c.slug, cpl: caseFacts(c).cpl }))
  .filter((x): x is { slug: string; cpl: number } => typeof x.cpl === "number")
  .sort((a, b) => a.cpl - b.cpl);

const STUDY_MEDIAN = 11.41;
const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: n < 100 ? 2 : 0, maximumFractionDigits: n < 100 ? 2 : 0 })}`;

/** "The numbers in context" bullet points (markdown links allowed). */
export function contextPoints(c: CaseStudy): string[] {
  const f = caseFacts(c);
  const out: string[] = [];
  if (f.cpl !== undefined) {
    const rank = ranked.findIndex((x) => x.slug === c.slug) + 1;
    const rel =
      Math.abs(f.cpl - STUDY_MEDIAN) < 0.5 ? "in line with" : f.cpl < STUDY_MEDIAN ? `${money(STUDY_MEDIAN - f.cpl)} below` : `${money(f.cpl - STUDY_MEDIAN)} above`;
    out.push(
      `**Cost per lead:** ${f.cplText} is ${rel} the $11.41 median across the roofing campaigns in our [cost per lead study](/blog/roofing-facebook-ads-cost-per-lead)${
        rank ? `. Ranked from cheapest to most expensive, it is #${rank} of the ${ranked.length} roofing campaigns on this site that reported a cost per lead` : ""
      }.`,
    );
  }
  if (f.leads && f.days && f.days > 1)
    out.push(`**Lead flow:** ${f.leads.toLocaleString("en-US")} ${f.leadsLabel} over ${f.days} days is roughly ${Math.round(f.leads / f.days)} new leads a day.`);
  if (f.spend && f.leads)
    out.push(`**Budget:** ${f.spendText} in ad spend produced ${f.leads.toLocaleString("en-US")} ${f.leadsLabel}${f.cpl ? "" : `, about ${money(f.spend / f.leads)} each`}.`);
  if (f.ctr !== undefined)
    out.push(
      f.ctr >= 2
        ? `**Click-through rate:** ${f.ctrText} clears the 2% mark that most of our lowest-cost roofing campaigns cleared. A higher CTR usually means cheaper leads on Meta.`
        : `**Click-through rate:** ${f.ctrText}. This campaign used OTP verification, which filters out low-intent clicks, so a lower CTR is expected.`,
    );
  return out;
}

type Lesson = { test: RegExp; title: string; text: string };

const LESSONS: Lesson[] = [
  {
    test: /installs|closed|deals|revenue|\$546|\$127/,
    title: "Measure cost per signed job, not just cost per lead",
    text: "Leads only matter if they turn into inspections and contracts. Track every lead from the ad to the signed job so you can see which campaigns actually pay, then put more budget behind those. See how [follow-up turns leads into jobs](/blog/roofing-lead-follow-up).",
  },
  {
    test: /offer|financ|0-down|\$0|free inspection|positioning|positioned/,
    title: "Lead with a specific offer",
    text: "A generic \"free inspection\" looks like every other roofer in the feed. A clear, specific offer gives homeowners a reason to act now. Financing offers need the lender's terms and the required disclosures. More on offers in [Facebook ads for roofers](/facebook-ads-for-roofers).",
  },
  {
    test: /otp|verif|validat|pre-qualif|qualif/,
    title: "Verify and qualify leads before your team calls",
    text: "OTP phone verification and a few qualifying questions mean every lead your team calls is a real homeowner with a working number. Verified leads can cost a little more, but they waste far less sales time.",
  },
  {
    test: /follow-up|follow up|crm|nurture|speed|respond|\bai\b|ai-powered/,
    title: "Respond within minutes",
    text: "The roofer who answers first usually wins the inspection. An automatic text and email, followed by a fast call, keeps the homeowner warm. Our [roofing lead follow-up guide](/blog/roofing-lead-follow-up) walks through the full sequence.",
  },
  {
    test: /segment|audience|target|andromeda|intent|buyer journey/,
    title: "Build audiences around intent",
    text: "Instead of one broad audience, split targeting by homeowner situation and intent, and let the creative speak to each group. We teach this in the free [mastermind training](/privatemastermind).",
  },
  {
    test: /ctr|creative|hook|video/,
    title: "Test creative until click-through clears 2%",
    text: "Creative is the biggest lever on Meta. Launch several angles, keep the ones above a 2% click-through rate and replace the rest. Cheaper clicks lead to cheaper leads.",
  },
  {
    test: /new account|zero|pixel|from scratch|day 5|starting data/,
    title: "A new ad account is not a blocker",
    text: "Campaigns in brand-new accounts with no pixel history can still produce leads in the first week when the offer, creative and targeting are right. You do not need years of data to start.",
  },
  {
    test: /shared|\$80|\$100|lead seller|pay-per-lead|ppl|garbage|junk/,
    title: "Own your leads instead of renting them",
    text: "Shared leads are sold to several roofers at once. Leads from your own ads come to your company only, and the pages, data and CRM stay with you. Compare the options in [shared vs exclusive roofing leads](/blog/shared-vs-exclusive-roofing-leads).",
  },
];

const FALLBACKS: Lesson[] = [
  {
    test: /./,
    title: "Build a system you own",
    text: "Ads, landing pages, CRM, follow-up and qualification work best as one system. Here is how we install it: [roofing lead generation](/roofing-lead-generation).",
  },
  {
    test: /./,
    title: "Review the numbers every week",
    text: "Check cost per lead, click-through rate and booked inspections weekly. Cut the ads and audiences that are not working and move budget to the ones that are. See what normal looks like in our [cost per lead study](/blog/roofing-facebook-ads-cost-per-lead).",
  },
  {
    test: /./,
    title: "Respond within minutes",
    text: "The roofer who answers first usually wins the inspection. An automatic text and email, followed by a fast call, keeps the homeowner warm. Our [roofing lead follow-up guide](/blog/roofing-lead-follow-up) walks through the full sequence.",
  },
];

/** Up to three practical takeaways, picked by what the case study is about. */
export function lessonsFor(c: CaseStudy) {
  const text = [c.title, c.summary, ...c.story, ...c.highlights, ...c.metrics.map((m) => m.label)].join(" ").toLowerCase();
  const picked = LESSONS.filter((l) => l.test.test(text)).slice(0, 3);
  for (const f of FALLBACKS) if (picked.length < 3 && !picked.some((p) => p.title === f.title)) picked.push(f);
  return picked;
}

const GLOSSARY: { test: RegExp; term: string; text: string }[] = [
  { test: /cost per lead|per lead|cpl/, term: "Cost per lead (CPL)", text: "Total ad spend divided by the number of leads." },
  { test: /\bctr\b/, term: "Click-through rate (CTR)", text: "The share of people who saw the ad and clicked it." },
  { test: /\bcpm\b/, term: "CPM", text: "The cost of 1,000 ad impressions." },
  { test: /\bcpc\b/, term: "Cost per click (CPC)", text: "Ad spend divided by the number of link clicks." },
  { test: /otp/, term: "OTP-verified lead", text: "A lead who confirmed their phone number with a one-time passcode." },
  { test: /qualified|validated|verified/, term: "Qualified lead", text: "A lead that passed screening questions (for example homeowner, roof age or project type) before reaching sales." },
  { test: /\bdwy\b|done.with.you/, term: "Done-with-you (DWY)", text: "A program where we build the system alongside your team instead of running it for you." },
  { test: /mastermind/, term: "Mastermind", text: "A live working session where we review real ad accounts and campaigns with roofing business owners." },
];

export function glossaryFor(c: CaseStudy) {
  const text = [c.title, ...c.story, ...c.highlights, ...c.metrics.map((m) => m.label)].join(" ").toLowerCase();
  return GLOSSARY.filter((g) => g.test.test(text)).slice(0, 4);
}

const monthYear = (d: string) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", year: "numeric" });

export function overviewFor(c: CaseStudy) {
  const who =
    c.category === "Roofing Contractors"
      ? "a roofing contractor"
      : c.category === "Roofing Agencies"
        ? "a roofing marketing agency"
        : c.category === "Home Services"
          ? "a home services company"
          : "roofing business owners";
  const kind = c.category === "Masterminds" ? "This is a recorded mastermind session" : "This case study covers a campaign we ran";
  return `${kind} for ${who}, reported in ${monthYear(c.date)}. ${c.summary} Below you will find the full result, what drove it${
    c.category === "Masterminds" ? "" : ", how the numbers compare with our other roofing campaigns"
  } and what you can apply to your own roofing company.`;
}

export function faqsFor(c: CaseStudy): { q: string; a: string }[] {
  const f = caseFacts(c);
  const out: { q: string; a: string }[] = [];
  if (c.category === "Masterminds") {
    out.push({
      q: "What is the Roofing Systems Co. mastermind?",
      a: "A live working session where we review real roofing ad accounts and campaigns with business owners and agencies: targeting, creative, offers and follow-up. You can watch recorded training for free on the mastermind page.",
    });
    out.push({ q: "What was covered in this session?", a: c.highlights.join(". ") + "." });
  } else {
    if (f.leads)
      out.push({
        q: "How many leads did this roofing campaign generate?",
        a: `${f.leads.toLocaleString("en-US")} ${f.leadsLabel}${f.days ? ` in ${f.days} days` : ""}${f.cplText ? ` at ${f.cplText} per lead` : ""}${f.spendText ? `, on ${f.spendText} in ad spend` : ""}.`,
      });
    if (f.cplText)
      out.push({
        q: "What was the cost per lead?",
        a: `${f.cplText} per lead. The median across the roofing campaigns in our cost per lead study is $11.41, and commonly cited industry benchmarks for roofing Facebook leads are around $40 to $80.`,
      });
    if (!f.leads && !f.cplText)
      out.push({ q: "What were the results?", a: `${c.summary} Reported figures: ${c.metrics.map((m) => `${m.value} (${m.label.toLowerCase()})`).join(", ")}.` });
    out.push({ q: "What drove this result?", a: c.highlights.join(". ") + "." });
  }
  return out;
}
