import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { articles, services } from "@/lib/content";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Roofing Marketing Blog: Leads, Ads & Follow-Up | Roofing Systems Co.",
  description:
    "Practical guides for roofing company owners on lead generation, Facebook and Instagram ads, follow-up and building a client acquisition system you own.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog" }])} />
      <main className="relative overflow-hidden bg-[#09090b] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem]">
          <div className="jobber-grid-dark absolute inset-0 opacity-25" />
          <div className="absolute left-1/2 top-0 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.14),transparent_70%)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[960px] px-5 pb-24 pt-32 md:px-8 md:pt-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24]" />
            Blog
          </span>
          <h1 className="mt-5 text-balance text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight">
            Roofing marketing guides for <span className="text-gradient-animated">$1M+ roofers</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Straight answers on getting more qualified roofing appointments: lead sources, ads, follow-up and the system
            that ties them together.
          </p>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={a.path}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#121215] p-7 transition hover:-translate-y-1 hover:border-[#ed1c24]/50"
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed1c24]">{a.eyebrow}</p>
                  <h2 className="mt-3 text-xl font-bold leading-snug text-white group-hover:text-[#ed1c24]">{a.h1}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{a.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Read the guide <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-extrabold tracking-tight">Our services</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.path}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#ed1c24]/50 hover:bg-[#ed1c24]/10"
                >
                  <span className="font-semibold">{s.breadcrumbs[s.breadcrumbs.length - 1].name}</span>
                  <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
