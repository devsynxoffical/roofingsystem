import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/*
  Compact link block for pages Google has already indexed (mastermind, case
  studies), so crawlers reach the main roofing-leads pages faster.
*/
const LINKS = [
  { href: "/", label: "Exclusive roofing leads" },
  { href: "/roofing-leads-texas", label: "Roofing leads in Texas" },
  { href: "/roofing-leads-florida", label: "Roofing leads in Florida" },
  { href: "/roofing-lead-generation", label: "Roofing lead generation" },
  { href: "/roofing-marketing", label: "Roofing marketing" },
  { href: "/facebook-ads-for-roofers", label: "Roofing Facebook ads" },
  { href: "/verified-roofing-leads", label: "Verified roofing leads" },
  { href: "/services", label: "All services" },
  { href: "/blog/how-to-get-roofing-leads", label: "How to get roofing leads" },
  { href: "/blog/roofing-facebook-ads-cost-per-lead", label: "Roofing cost per lead study" },
];

export function ExploreLinks({ dark = false }: { dark?: boolean }) {
  return (
    <section aria-labelledby="explore" className={dark ? "bg-[#09090b] py-14 text-white" : "bg-white py-14 text-zinc-900"}>
      <div className="container-x">
        <h2 id="explore" className="text-center text-2xl font-extrabold tracking-tight">Explore roofing leads and marketing</h2>
        <ul className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-2.5">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  dark ? "border-white/15 bg-white/[0.04] text-zinc-200 hover:border-[#ed1c24]/60 hover:text-white" : "border-zinc-200 bg-white text-zinc-700 shadow-sm hover:border-[#ed1c24]/40 hover:text-[#d4151c]"
                }`}
              >
                {l.label} <ArrowUpRight className="h-3.5 w-3.5 text-[#ed1c24]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
