export const dynamic = "force-static";

import { site } from "@/lib/site";
import { landings, type LandingDoc } from "@/lib/landings";
import { services, articles, costReport, type ContentDoc, type Block } from "@/lib/content";
import { roofingLeadsHub, cityPages } from "@/lib/cities";
import { faqs } from "@/lib/faqs";

/*
  llms-full.txt: the full text of the key pages in one plain-text file for AI
  crawlers (companion to /llms.txt). Built from the same data as the pages.
*/
const u = (path: string) => `${site.url}${path}`;
const md = (s: string) =>
  s.replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, (_, t, h) => `${t} (${u(h)})`).replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)").replace(/\*\*/g, "");

function landing(d: LandingDoc): string[] {
  const out = [`## ${d.h1}`, `URL: ${u(d.path)}`, "", md(d.intro), ""];
  out.push(`### ${d.problems.title}`, ...d.problems.cards.map((c) => `- ${c.title}: ${md(c.text)}`), "");
  out.push(`### ${d.features.title}`, ...d.features.cards.map((c) => `- ${c.title}: ${md(c.text)}`), "");
  for (const g of d.guide) out.push(`### ${g.title}`, ...g.body.map(md), "");
  out.push("### FAQ", ...d.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`]), "");
  return out;
}

function block(b: Block): string[] {
  switch (b.type) {
    case "h2":
      return ["", `### ${b.text}`];
    case "h3":
      return [`#### ${b.text}`];
    case "p":
      return [md(b.text)];
    case "ul":
    case "ol":
      return b.items.map((i, n) => `${b.type === "ol" ? `${n + 1}.` : "-"} ${md(i)}`);
    case "callout":
      return [`${b.title}: ${md(b.text)}`];
    case "table":
      return [b.caption, b.head.join(" | "), ...b.rows.map((r) => r.map(md).join(" | "))];
  }
}

function content(d: ContentDoc): string[] {
  const out = [`## ${d.h1}`, `URL: ${u(d.path)}`, ""];
  if (d.shortAnswer) out.push(`Short answer: ${md(d.shortAnswer)}`, "");
  out.push(md(d.intro), ...d.blocks.flatMap(block), "", "### FAQ", ...d.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`]), "");
  return out;
}

export function GET() {
  const lines: string[] = [
    `# ${site.name}: full text of key pages`,
    "",
    `> ${site.description}`,
    "",
    `Summary file: ${u("/llms.txt")}. All figures come from published case studies at ${u("/case-studies")}.`,
    "",
    "## Homepage FAQ",
    `URL: ${u("/")}`,
    ...faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`]),
    "",
  ];
  for (const d of [...services]) lines.push(...content(d));
  for (const d of [...landings, roofingLeadsHub, ...cityPages]) lines.push(...landing(d));
  lines.push(...content(costReport));
  for (const d of articles) lines.push(...content(d));
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
