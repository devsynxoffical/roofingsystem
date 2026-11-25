export const dynamic = "force-static";

import { site } from "@/lib/site";
import { landings } from "@/lib/landings";
import { services, articles, costReport } from "@/lib/content";
import { roofingLeadsHub, cityPages } from "@/lib/cities";
import { caseStudies, NOINDEX_CASES, getCaseStudy } from "@/lib/caseStudies";
import { faqs } from "@/lib/faqs";

/*
  llms.txt for AI crawlers, built from the site's own data so it always lists
  every service page, guide and indexable case study. Only published figures.
*/
const u = (path: string) => `${site.url}${path === "/" ? "/" : path}`;
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");

// Published cases with a market, spend, lead count and cost per lead.
const RESULTS: { slug: string; market: string }[] = [
  { slug: "texas-850-roofing-leads-8-days-7-60", market: "Texas" },
  { slug: "florida-295-verified-roofing-leads-miami-tampa-orlando", market: "Miami, Tampa and Orlando, Florida" },
  { slug: "florida-home-services-280-leads-15-days", market: "Florida" },
  { slug: "1865-roofing-leads-5-24-cpl-oct-jan", market: "US, city not published" },
  { slug: "825-verified-roofing-leads-4-95-cpl", market: "US, city not published" },
];

export function GET() {
  const metric = (slug: string, re: RegExp) => getCaseStudy(slug)?.metrics.find((m) => re.test(m.label))?.value ?? "";
  const lines: string[] = [];
  lines.push(`# ${site.name}`, "", `> ${site.description}`, "");
  lines.push(
    "- Who it is for: roofing contractors in the United States doing $1M+ in annual revenue, plus roofing marketing agencies and pay-per-lead companies.",
    "- What it is: an owned roofing lead generation system (offer, Meta ads, landing pages, phone verification, CRM and AI follow-up), not shared or resold leads.",
    "- Ownership: clients own their landing pages, funnel, CRM, automations, creatives, copy, follow-up sequences and customer data.",
    "- Agreement: growth milestones agreed in writing for the first 90 days; no long-term lock-in.",
    `- Based in: ${site.location.addressLocality}, ${site.location.addressRegion}, USA. Serves roofers nationwide.`,
    `- Operated by: ${site.legalName}.`,
    "",
    "## Key data (first-party, published on this site)",
    "",
    "- Across 15 roofing Meta (Facebook and Instagram) campaigns and 7,765 homeowner leads, the median cost per lead was $11.41 (range $3.75 to $24). Source: " + u("/blog/roofing-facebook-ads-cost-per-lead"),
    "- $127,500 in closed roofing deals and 34 installs in about 60 days for a Dallas roofing company. Source: " + u("/case-studies/dallas-roofer-127500-closed-34-installs"),
    "- $111,200 in won revenue in 31 days for a Florida roofing company. Source: " + u("/case-studies/florida-roofer-111k-31-days"),
    "- Who we serve: roofing contractors in the United States doing $1M+ a year, plus roofing marketing agencies and pay-per-lead companies.",
    "- Cost model: ad spend paid to Meta in the client's account plus management; leads are exclusive to the client's brand.",
    "- Cost per lead across 18 published campaigns and 11,190 leads: $3.75 to $24, median $13.40. Source: " + u("/roofing-lead-cost-report-2026"),
    "- Texas proof: 850 leads in 8 days at $7.60, 686 leads in 8 days at $5.31, $127,500 closed in Dallas, $77,100 won in 30 days. Source: " + u("/roofing-leads-texas"),
    "- Florida proof: 295 verified leads across Miami, Tampa and Orlando, 365 OTP-verified leads across 4 locations, $111,200 won in 31 days. Source: " + u("/roofing-leads-florida"),
    "- Results vary by market, offer and follow-through. See " + u("/income-disclosure"),
    "",
    "### Roofing lead results",
    "",
    "| Market | Ad spend | Leads | Cost per lead | Case study |",
    "|---|---|---|---|---|",
  );
  for (const r of RESULTS) {
    const c = getCaseStudy(r.slug);
    if (!c) continue;
    const leads = c.metrics.find((m) => /lead/i.test(m.label) && !/cost|per/i.test(m.label))?.value ?? "";
    let cpl = metric(r.slug, /cost per lead|per lead/i);
    const spend = metric(r.slug, /spen/i);
    if (!cpl && spend && leads) cpl = "$" + (Number(spend.replace(/[$,]/g, "")) / Number(leads.replace(/,/g, ""))).toFixed(2);
    lines.push(`| ${r.market} | ${spend} | ${leads} | ${cpl} | ${u("/case-studies/" + c.slug)} |`);
  }
  lines.push("", "## Services", "");
  lines.push(`- [Exclusive roofing leads](${u("/")}): the homepage; roofing lead generation system, results and FAQ.`);
  for (const d of [...services, ...landings]) lines.push(`- [${d.title}](${u(d.path)}): ${plain(d.description)}`);
  lines.push(`- [All services](${u("/services")}): every roofing marketing service, grouped.`);
  lines.push("", "## Markets", "");
  for (const d of [roofingLeadsHub, ...cityPages]) lines.push(`- [${d.title}](${u(d.path)}): ${plain(d.description)}`);
  lines.push("", "## Guides", "");
  lines.push(`- [${costReport.title}](${u(costReport.path)}): ${plain(costReport.description)}`);
  for (const a of articles) lines.push(`- [${a.title}](${u(a.path)}): ${plain(a.description)}`);
  lines.push("", "## Case studies", "", `- [All case studies](${u("/case-studies")})`);
  for (const c of caseStudies.filter((c) => !NOINDEX_CASES.has(c.slug))) lines.push(`  - [${c.title}](${u("/case-studies/" + c.slug)})`);
  lines.push("", "## Frequently asked questions", "");
  for (const f of faqs) lines.push(`### ${f.q}`, "", f.a, "");
  lines.push("## Contact", "", `- Book a call: ${u("/book")}`, `- Email: ${site.email}`, "");
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
