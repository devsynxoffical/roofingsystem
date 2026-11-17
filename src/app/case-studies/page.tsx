import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { caseStudies } from "@/lib/caseStudies";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Roofing Marketing Case Studies & Results | Roofing Systems Co.",
  description:
    "Real roofing campaigns, real ad spend, real numbers: lead volume, cost per lead and revenue results from roofing contractors and roofing agencies we work with.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Roofing marketing case studies",
    url: `${site.url}/case-studies`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/case-studies/${c.slug}`,
        name: c.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={listSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }])} />

      <main className="relative overflow-hidden bg-[#09090b] text-white">
        {/* Red hero band, in the site's accent colour */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#b3121a] via-[#a3101a] to-[#09090b] pb-20 pt-36 md:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="jobber-grid-dark absolute inset-0 opacity-20" />
            <div className="absolute left-1/2 top-24 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,90,60,0.35),transparent_65%)] blur-3xl" />
          </div>

          <div className="container-x relative">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d2e] to-[#ed1c24] px-5 py-2 text-sm font-extrabold uppercase italic tracking-tight text-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/25">
                <TrendingUp className="h-4 w-4" />
                We don&apos;t just talk about scaling.
              </span>

              <h1 className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[clamp(2.4rem,7vw,5rem)] font-black uppercase leading-none tracking-[-0.04em]">
                <span>We show you</span>
                <span className="inline-block -rotate-2 rounded-2xl bg-gradient-to-r from-[#ff5a2e] to-[#ed1c24] px-5 pb-2 pt-1 italic shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/20">
                  the numbers.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                From the first click to booked inspections, we&apos;ve helped <strong className="font-extrabold">roofing companies</strong>{" "}
                and <strong className="font-extrabold">roofing agencies</strong> turn ad spend into a predictable pipeline.
              </p>

              <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.18em] text-[#ffb36b] sm:text-base">
                {`Real roofers. Real ad spend. Real results. (${caseStudies.length} case studies & proofs)`}
              </p>
            </div>

            <div className="mt-10">
              <CaseStudiesGrid items={caseStudies} />
            </div>
          </div>
        </section>

        <section className="container-x relative pb-24 pt-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#ed1c24]/30 bg-gradient-to-br from-[#ed1c24]/15 via-[#121215] to-[#121215] p-8 text-center sm:p-12">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Want numbers like these for your roofing company?</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-300">
              Book a free strategy call. We&apos;ll look at your market and current lead flow and show you what we would
              install — backed by a written agreement. Results vary; see our{" "}
              <Link href="/income-disclosure" className="underline decoration-[#ed1c24] underline-offset-4 hover:text-white">
                income disclosure
              </Link>
              .
            </p>
            <Link
              href={site.bookCallUrl}
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#ed1c24] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:bg-[#c4181e]"
            >
              Book your free strategy call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
