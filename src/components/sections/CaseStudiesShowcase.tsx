import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { ShowcaseCard } from "./ShowcaseCard";
import { Reveal } from "@/components/Reveal";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/caseStudies";
import { site } from "@/lib/site";

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

/** Homepage "results" section: featured case studies (reference: "We show you the numbers"). */
export function CaseStudiesShowcase() {
  const items = FEATURED.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));

  return (
    <section id="results" className="relative overflow-hidden bg-white py-20 text-zinc-900 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="jobber-grid-light absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(237,28,36,0.10),transparent_70%)]" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d55] to-[#ed1c24] px-5 py-2 text-[13px] font-extrabold uppercase italic tracking-tight text-white shadow-[0_12px_30px_-10px_rgba(237,28,36,0.55)]">
            <TrendingUp className="h-4 w-4" />
            We don&apos;t just talk about results.
          </span>

          <h2 className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[clamp(2.1rem,5.2vw,4.2rem)] font-extrabold uppercase leading-none tracking-[-0.045em] lg:flex-nowrap">
            <span className="whitespace-nowrap text-zinc-950">We show you</span>
            <span className="numbers-badge inline-block -rotate-2 whitespace-nowrap rounded-[1.1rem] bg-[#ed1c24] px-6 pb-3 pt-2 italic text-white shadow-[0_18px_40px_-12px_rgba(237,28,36,0.6)] transition-transform duration-300 hover:rotate-0 hover:scale-105">
              The numbers.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-[1.0625rem] leading-relaxed text-zinc-600 sm:text-xl">
            Every number below comes from a real client account of our roofing marketing company: <strong className="font-extrabold text-zinc-950">$127,500 in closed deals and 34 installs</strong> for
            a Dallas roofer, 1,480 roofing leads at $4.77 each, 850 leads in 8 days for a Texas roofer at $7.60 and 825 verified leads at $4.95
            in five weeks. Read them all in our{" "}
            <Link href="/case-studies" className="font-bold text-zinc-950 underline decoration-[#ed1c24]/60 underline-offset-4 hover:text-[#d4151c]">roofing case studies</Link>.
          </p>

          <p className="mt-6 text-[13px] font-extrabold uppercase tracking-[0.12em] text-zinc-500 sm:text-[1rem]">
            Real roofers. Real ad spend. Real results. <span className="text-[#d4151c]">({caseStudies.length} case studies &amp; proofs)</span>
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <li key={c.slug}>
              <ShowcaseCard c={c} index={i} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-zinc-900 transition hover:border-[#ed1c24]/60 hover:text-[#d4151c]"
          >
            {`Explore all ${caseStudies.length} case studies & proofs`}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={site.bookCallUrl}
            className="group inline-flex items-center gap-2 rounded-full bg-[#d4151c] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_18px_40px_-12px_rgba(237,28,36,0.6)] hover:bg-[#b3111a] transition hover:-translate-y-0.5"
          >
            Book a Strategy Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
