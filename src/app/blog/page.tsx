import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, BookOpen, Clock, Lightbulb, MessageSquare, Scale, Search, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ShowcaseCard } from "@/components/sections/ShowcaseCard";
import { articles, services, type Block, type ContentDoc } from "@/lib/content";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Roofing Marketing Blog: Leads, Ads & Follow-Up Guides",
  description:
    "Practical guides for roofing company owners on lead generation, Facebook and Instagram ads, follow-up and building a client acquisition system you own.",
  path: "/blog",
});

const textOf = (b: Block) =>
  b.type === "ul" || b.type === "ol" ? b.items.join(" ") : b.type === "table" ? b.rows.flat().join(" ") : "text" in b ? b.text : "";
const minutes = (d: ContentDoc) =>
  Math.max(2, Math.round((d.blocks.map(textOf).join(" ").split(/\s+/).length + d.faqs.map((f) => f.a).join(" ").split(/\s+/).length) / 220));

// Icon per article, so cards are easy to tell apart
const ICONS: Record<string, typeof BookOpen> = {
  "roofing-facebook-ads-cost-per-lead": BarChart3,
  "shared-vs-exclusive-roofing-leads": Scale,
  "roofing-lead-follow-up": MessageSquare,
  "how-to-get-roofing-leads": Search,
  "roofing-advertising-ideas": Lightbulb,
};

const PROOF = ["dallas-roofer-127500-closed-34-installs", "1480-roofing-leads-4-77-cpl", "texas-roofer-686-leads-8-days-0-down-offer", "825-verified-roofing-leads-4-95-cpl"];

const fmt = (d: string) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function BlogIndex() {
  const [featured, ...rest] = articles;
  const proof = PROOF.map(getCaseStudy).filter((c): c is NonNullable<typeof c> => Boolean(c));

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Blog`,
    url: `${site.url}/blog`,
    publisher: { "@id": `${site.url}/#organization` },
    blogPost: articles.map((a) => ({ "@type": "BlogPosting", headline: a.h1, url: `${site.url}${a.path}`, datePublished: a.published })),
  };

  return (
    <>
      <JsonLd data={listSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog" }])} />
      <main className="relative overflow-x-clip bg-white text-zinc-900">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-200 pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="jobber-grid-light absolute inset-0 opacity-25" />
            <div className="absolute -top-20 left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.2),transparent_70%)] blur-3xl" />
          </div>
          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              <Link href="/" className="hover:text-[#ed1c24]">Home</Link> <span aria-hidden>/</span> <span className="text-zinc-600">Blog</span>
            </nav>
            <div className="mt-6 grid items-end gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d4151c]">
                  <BookOpen className="h-3.5 w-3.5" /> Roofing marketing blog
                </span>
                <h1 className="mt-5 text-balance text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight">
                  Guides and data for <span className="text-gradient-animated">$1M+ roofing companies</span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
                  Straight answers on getting more qualified roofing appointments: lead sources, Meta ads, follow-up and the
                  system that ties them together, backed by numbers from our own campaigns.
                </p>
              </div>
              <ul className="grid grid-cols-3 gap-3">
                {[
                  [String(articles.length), "Guides"],
                  [String(caseStudies.length), "Case studies"],
                  ["7,765", "Leads analysed"],
                ].map(([v, l]) => (
                  <li key={l} className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <p className="text-2xl font-extrabold sm:text-3xl">{v}</p>
                    <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{l}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="py-14 md:py-20">
          <div className="container-x">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Featured</p>
            <Link
              href={featured.path}
              className="group mt-4 grid overflow-hidden rounded-[2rem] border border-zinc-200 bg-white transition hover:border-[#ed1c24]/50 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
            >
              <div className="p-7 sm:p-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b3111a]">{featured.eyebrow}</span>
                <h2 className="mt-3 text-balance text-2xl font-extrabold leading-tight tracking-tight group-hover:text-[#d4151c] sm:text-[2.1rem]">{featured.h1}</h2>
                {featured.shortAnswer && <p className="mt-4 leading-relaxed text-zinc-600">{featured.shortAnswer}</p>}
                <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {minutes(featured)} min read</span>
                  <span>{fmt(featured.updated)}</span>
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4151c] px-6 py-3 text-sm font-bold text-white transition group-hover:bg-[#b3111a]">
                  Read the study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="relative flex flex-col justify-center gap-3 bg-gradient-to-br from-[#ed1c24] to-[#a3101a] p-7 sm:p-10">
                {[
                  ["$11.41", "Median cost per lead"],
                  ["13 / 15", "Campaigns under $15 per lead"],
                  ["7,765", "Homeowner leads analysed"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-white p-5 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.5)] transition group-hover:-translate-y-0.5">
                    <p className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">{v}</p>
                    <p className="mt-1 text-sm text-zinc-600">{l}</p>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </section>

        {/* ALL GUIDES */}
        <section className="pb-16 md:pb-24">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">All guides</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {rest.map((a) => {
                const Icon = ICONS[a.slug] ?? BookOpen;
                return (
                  <li key={a.slug}>
                    <Link href={a.path} className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#ed1c24]/50">
                      <span className="flex items-center justify-between gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ed1c24]/15 text-[#ed1c24]"><Icon className="h-5 w-5" /></span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500"><Clock className="h-3.5 w-3.5" /> {minutes(a)} min read</span>
                      </span>
                      <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#b3111a]">{a.eyebrow}</span>
                      <span className="mt-2 text-xl font-bold leading-snug text-zinc-900 group-hover:text-[#d4151c]">{a.h1}</span>
                      <span className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{a.description}</span>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
                        Read the guide <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <h2 className="mt-16 text-2xl font-extrabold tracking-tight sm:text-3xl">Our services</h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#ed1c24]/50 hover:bg-[#ed1c24]/10">
                    <span>
                      <span className="block text-lg font-bold text-zinc-900">{s.breadcrumbs[s.breadcrumbs.length - 1].name}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-zinc-500">{s.description}</span>
                    </span>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#ed1c24] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROOF */}
        <section className="relative overflow-hidden bg-[#a3101a] py-16 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(237,28,36,0.65),transparent_70%)]" aria-hidden />
          <div className="container-x relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">The data behind the guides</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Results from real roofing campaigns</h2>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 self-start rounded-full border border-white/30 bg-black/20 px-5 py-2.5 text-sm font-bold transition hover:bg-black/30 sm:self-auto">
                <TrendingUp className="h-4 w-4" /> All {caseStudies.length} case studies
              </Link>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {proof.map((c, i) => (
                <li key={c.slug}>
                  <ShowcaseCard c={c} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-x">
            <div className="rounded-[2rem] border border-[#ed1c24]/30 bg-gradient-to-br from-[#ed1c24]/25 via-white to-white p-8 text-center sm:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">For roofers doing $1M+ a year</p>
              <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Rather have us build it for you?
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-600">
                Book a free 1:1 strategy call. We look at your market and lead flow and show you what we would install, backed by a written agreement.
              </p>
              <Link href={site.bookCallUrl} className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4151c] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:bg-[#b3111a]">
                Book your free strategy call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
