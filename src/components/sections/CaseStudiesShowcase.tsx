import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

// Strongest roofing results, shown on the homepage; the rest live on /case-studies
const FEATURED = [
  "dallas-roofer-127500-closed-34-installs",
  "1480-roofing-leads-4-77-cpl",
  "texas-850-roofing-leads-8-days-7-60",
  "texas-roofer-686-leads-8-days-0-down-offer",
  "ppl-agency-1024-otp-verified-roofing-leads",
  "825-verified-roofing-leads-4-95-cpl",
  "florida-home-services-280-leads-15-days",
  "roofing-201-leads-14-45-cpl",
];

/** Homepage "results" section: featured case studies instead of dashboard screenshots. */
export function CaseStudiesShowcase() {
  const items = FEATURED.map(getCaseStudy).filter((c): c is NonNullable<typeof c> => Boolean(c));
  return (
    <section id="results" className="relative overflow-hidden border-b border-white/10 bg-[#09090b] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="jobber-grid-dark absolute inset-0 opacity-25" />
        <div className="absolute left-1/2 top-0 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.14),transparent_70%)] blur-3xl" />
      </div>
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#ff4d55]">
            <TrendingUp className="h-3.5 w-3.5" />
            Case studies
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Real campaigns. <span className="text-gradient-animated">Real numbers.</span>
          </h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            Leads, cost per lead and closed revenue from roofing campaigns we run — straight from the ad accounts.
          </p>
        </Reveal>

        <div className="mt-12">
          <CaseStudiesGrid items={items} showFilters={false} />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:shadow-[0_0_45px_-5px_rgba(237,28,36,1)]"
          >
            See all {caseStudies.length} case studies
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
