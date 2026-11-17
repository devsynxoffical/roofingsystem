import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Play, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { caseMedia, caseStudies, getCaseStudy, type CaseStudy } from "@/lib/caseStudies";
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

function ShowcaseCard({ c }: { c: CaseStudy }) {
  const m = caseMedia(c);
  const href = `/case-studies/${c.slug}`;
  // short labels so the pill never truncates
  const short = (l: string) =>
    l
      .toLowerCase()
      .replace(/cost per lead|per lead/, "CPL")
      .replace(/^(otp-verified|verified|qualified|website|homeowner|pre-qualified|validated) leads$/, "leads")
      .replace("closed deals", "closed");
  const pill = c.metrics
    .slice(0, 2)
    .map((x) => `${x.value} ${short(x.label)}`)
    .join("  |  ");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0e0e11] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_40px_70px_-30px_rgba(0,0,0,0.95)]">
      {/* media */}
      <Link href={href} className="relative block aspect-[1/1.05] overflow-hidden bg-[#09090b]" aria-label={c.title}>
        {/* blurred fill + the whole image, uncropped */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={m.poster} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={m.poster}
          alt={c.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0e0e11] to-transparent" />
        {m.video && (
          <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        )}
        <span className="absolute bottom-3 right-3 max-w-[calc(100%-1.5rem)] truncate whitespace-pre rounded-full bg-gradient-to-r from-[#ed1c24] to-[#ff4d55] px-3.5 py-1.5 text-[12px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(237,28,36,0.8)] ring-1 ring-white/20">
          {pill}
        </span>
      </Link>

      {/* text */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="line-clamp-2 text-[1.02rem] font-bold leading-snug tracking-tight text-white">
          <Link href={href} className="hover:text-[#ff6b70]">
            {c.title}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4 mt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#ed1c24]/50 px-4 py-2 text-[13px] font-bold text-[#ff6b70] transition hover:border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white"
          >
            View Breakdown <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          {m.video ? (
            <Link href={href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-300 transition hover:text-white">
              <Play className="h-3.5 w-3.5" /> Play Video
            </Link>
          ) : (
            <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-300 transition hover:text-white">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" /> View Proof
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Homepage "results" section: featured case studies (reference: "We show you the numbers"). */
export function CaseStudiesShowcase() {
  const items = FEATURED.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));

  return (
    <section id="results" className="relative overflow-hidden bg-[#a3101a] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(237,28,36,0.65),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_45%,transparent_50%,rgba(40,0,4,0.6)_100%)]" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d55] to-[#ed1c24] px-5 py-2 text-[13px] font-extrabold uppercase italic tracking-tight text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.55)] ring-1 ring-white/30">
            <TrendingUp className="h-4 w-4" />
            We don&apos;t just talk about results.
          </span>

          <h2 className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[clamp(2.1rem,5.2vw,4.2rem)] font-extrabold uppercase leading-none tracking-[-0.045em] lg:flex-nowrap">
            <span className="whitespace-nowrap">We show you</span>
            <span className="inline-block -rotate-2 whitespace-nowrap rounded-[1.1rem] bg-white px-6 pb-3 pt-2 italic text-[#ed1c24] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)]">
              The numbers.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-[1.0625rem] leading-relaxed text-white/90 sm:text-xl">
            From the first click to closed jobs, we&apos;ve helped <strong className="font-extrabold text-white">roofing companies</strong> turn
            ad spend into <strong className="font-extrabold text-white">booked inspections and signed roofs</strong>.
          </p>

          <p className="mt-6 text-[13px] font-extrabold uppercase tracking-[0.12em] text-white/80 sm:text-[1rem]">
            Real roofers. Real ad spend. Real results. <span className="text-white">({caseStudies.length} case studies &amp; proofs)</span>
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <li key={c.slug}>
              <ShowcaseCard c={c} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur transition hover:border-white/50 hover:bg-black/30"
          >
            {`Explore all ${caseStudies.length} case studies & proofs`}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={site.bookCallUrl}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-[#ed1c24] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5"
          >
            Book a Strategy Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
