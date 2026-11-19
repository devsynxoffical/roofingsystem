import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, LayoutGrid } from "lucide-react";
import { Inline } from "@/components/content/ContentPage";
import { contextPoints, faqsFor, lessonsFor, overviewFor } from "@/lib/caseInsights";
import { Footer } from "@/components/Footer";
import { NOINDEX_CASES, caseMedia, caseStudies, getCaseStudy, type CaseStudy } from "@/lib/caseStudies";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c) return {};
  // add the brand to shorter titles while keeping them under ~65 characters
  const title = c.metaTitle.length <= 43 ? `${c.metaTitle} | ${site.name}` : c.metaTitle;
  const meta = pageMeta({ title, description: c.metaDescription, path: `/case-studies/${c.slug}` });
  const image = caseMedia(c).poster;
  return {
    ...meta,
    ...(NOINDEX_CASES.has(c.slug) ? { robots: { index: false, follow: true } } : {}),
    openGraph: { ...meta.openGraph, type: "article", publishedTime: c.date, modifiedTime: UPDATED, section: c.category, images: [{ url: image, alt: c.title }] },
    twitter: { ...meta.twitter, images: [image] },
  };
}

// Guides linked from each case study, chosen by what the case study is about
function guidesFor(c: CaseStudy) {
  const text = [c.title, c.summary, ...c.story, ...c.highlights].join(" ").toLowerCase();
  const out: { href: string; label: string; why: string }[] = [];
  if (/cost per lead|cpl|\$\d/.test(text))
    out.push({ href: "/blog/roofing-facebook-ads-cost-per-lead", label: "Roofing Facebook ads cost per lead", why: "How this compares with 15 campaigns" });
  if (/follow-up|follow up|crm|nurture|otp|verif/.test(text))
    out.push({ href: "/blog/roofing-lead-follow-up", label: "How to follow up on roofing leads", why: "The follow-up process behind verified leads" });
  if (/shared|\$80|\$100|\$150|garbage|junk|lead seller|pay-per-lead|ppl/.test(text))
    out.push({ href: "/blog/shared-vs-exclusive-roofing-leads", label: "Shared vs exclusive roofing leads", why: "Why owned leads beat bought ones" });
  out.push({ href: "/facebook-ads-for-roofers", label: "Facebook ads for roofers", why: "The ad system used in this campaign" });
  if (c.category !== "Masterminds") out.push({ href: "/instagram-ads-for-roofers", label: "Instagram ads for roofers", why: "Reels, Stories and Feed placements" });
  out.push({ href: "/roofing-lead-generation", label: "Roofing lead generation system", why: "Offer, funnel, CRM and qualification" });
  if (c.category === "Roofing Agencies") out.unshift({ href: "/lead-generation-for-roofing-agencies", label: "Lead generation for roofing agencies", why: "How we work with agencies" });
  if (/otp|verif|validat/.test(text)) out.unshift({ href: "/verified-roofing-leads", label: "Verified roofing leads", why: "How lead verification works" });
  if (/installs|closed/.test(text)) out.unshift({ href: "/roof-replacement-leads", label: "Roof replacement leads", why: "Campaigns built for high-value jobs" });
  if (/texas|dallas/.test(text)) out.unshift({ href: "/roofing-leads-texas", label: "Roofing leads in Texas", why: "All our Texas campaigns in one place" });
  if (/florida/.test(text)) out.unshift({ href: "/roofing-leads-florida", label: "Roofing leads in Florida", why: "All our Florida campaigns in one place" });
  if (c.category === "Masterminds") out.unshift({ href: "/privatemastermind", label: "Free mastermind training", why: "Watch a full recorded session" });
  return out.filter((g, i, a) => a.findIndex((x) => x.href === g.href) === i).slice(0, 6);
}

const UPDATED = "2026-11-18";
const iso = (s: number) => `PT${Math.floor(s / 60)}M${s % 60}S`;

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();
  const m = caseMedia(c);
  const url = `${site.url}/case-studies/${c.slug}`;
  const idx = caseStudies.indexOf(c);
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const marketOf = (x: CaseStudy) => {
    const t = [x.title, ...x.story].join(" ").toLowerCase();
    return /texas|dallas/.test(t) ? "tx" : /florida/.test(t) ? "fl" : "";
  };
  const others = caseStudies.filter((x) => x.slug !== c.slug && x.slug !== next.slug);
  const related = [
    ...others.filter((x) => marketOf(c) && marketOf(x) === marketOf(c)),
    ...others.filter((x) => x.category === c.category),
    ...others,
  ].filter((x, i, a) => a.indexOf(x) === i).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.metaDescription,
    url,
    mainEntityOfPage: url,
    datePublished: c.date,
    dateModified: UPDATED,
    articleSection: c.category,
    about: c.category === "Masterminds" ? "Roofing marketing training" : "Roofing lead generation with Meta ads",
    image: `${site.url}${m.poster}`,
    author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
    publisher: { "@id": `${site.url}/#organization` },
    isBasedOn: c.sourceUrl,
  };
  const videoSchema = m.video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: c.title,
        description: c.metaDescription,
        thumbnailUrl: `${site.url}${m.poster}`,
        contentUrl: `${site.url}${m.video}`,
        uploadDate: c.date,
        ...(c.durationSec ? { duration: iso(c.durationSec) } : {}),
      }
    : null;

  // portrait and square media sit beside the text; landscape spans the full width
  const portrait = c.orientation !== "landscape";
  const guides = guidesFor(c);
  const context = contextPoints(c);
  const lessons = lessonsFor(c);
  const faqs = faqsFor(c);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const toc = [
    { id: "overview", label: "Overview" },
    { id: "result", label: "The result" },
    { id: "drivers", label: c.category === "Masterminds" ? "What we covered" : "What drove it" },
    ...(context.length ? [{ id: "context", label: "The numbers in context" }] : []),
    { id: "apply", label: "How to apply this" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <JsonLd data={articleSchema} />
      {videoSchema && <JsonLd data={videoSchema} />}
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }, { name: c.title, path: `/case-studies/${c.slug}` }])} />

      <main className="relative overflow-hidden bg-white text-zinc-900">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-gradient-to-b from-[#fde2e4] to-transparent" />
        <div className="container-x relative pb-20 pt-32 md:pt-40">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-[#ed1c24]">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/case-studies" className="hover:text-[#ed1c24]">Case Studies</Link></li>
              <li aria-hidden>/</li>
              <li className="text-zinc-700" aria-current="page">{c.category}</li>
            </ol>
          </nav>

          {/* Case study navigation */}
          <nav aria-label="Case study navigation" className="mt-5 flex items-stretch justify-between gap-2 rounded-2xl border border-zinc-200 bg-white/90 p-1.5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur">
            <Link href={`/case-studies/${prev.slug}`} rel="prev" className="group inline-flex min-w-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900">
              <ArrowLeft className="h-4 w-4 shrink-0 text-[#ed1c24] transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden truncate sm:inline">Previous</span>
            </Link>
            <Link href="/case-studies" className="hidden items-center gap-1.5 self-center text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 hover:text-[#ed1c24] md:inline-flex">
              <LayoutGrid className="h-3.5 w-3.5" /> Case study {idx + 1} of {caseStudies.length}
            </Link>
            <Link href={`/case-studies/${next.slug}`} rel="next" className="group inline-flex min-w-0 items-center gap-3 rounded-xl bg-[#ed1c24] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(237,28,36,0.7)] transition hover:bg-[#c4181e]">
              <span className="min-w-0 text-left">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">Next case study</span>
                <span className="block max-w-[11rem] truncate sm:max-w-[22rem]">{next.title}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </nav>

          {/* Top: title + media */}
          <div className={`mt-8 grid items-center gap-10 ${portrait ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]" : "lg:grid-cols-1"}`}>
            <header className={portrait ? "" : "max-w-4xl"}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#d4151c]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24]" />
                Case study · {c.category}
              </span>
              <h1 className="mt-5 text-balance text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight">{c.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">{c.summary}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {c.metrics.map((x) => (
                  <div key={x.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">{x.label}</dt>
                    <dd className="mt-1 font-mono text-2xl font-extrabold text-[#d4151c]">{x.value}</dd>
                  </div>
                ))}
              </dl>
            </header>

            <figure className={`overflow-hidden rounded-3xl border border-zinc-200 bg-black shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] ${portrait ? "mx-auto w-full max-w-md" : "mx-auto w-full max-w-5xl"}`}>
              {m.video ? (
                <video
                  src={m.video}
                  poster={m.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className={`w-full ${c.orientation === "square" ? "aspect-square object-cover" : portrait ? "aspect-[9/14] object-cover" : "aspect-video object-contain"} bg-black`}
                >
                  <track kind="captions" />
                </video>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.poster} alt={c.title} className="mx-auto w-full max-w-xl object-contain" />
              )}
            </figure>
          </div>

          {/* Body + sticky sidebar */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
            <article className="min-w-0 max-w-3xl">
              <h2 id="overview" className="scroll-mt-28 text-2xl font-extrabold tracking-tight">Overview</h2>
              <p className="mt-4 text-[1.0625rem] leading-[1.8] text-zinc-600">{overviewFor(c)}</p>

              <h2 id="result" className="mt-10 scroll-mt-28 text-2xl font-extrabold tracking-tight">The result</h2>
              {c.story.map((p, i) => (
                <p key={i} className="mt-4 text-[1.0625rem] leading-[1.8] text-zinc-600">{p}</p>
              ))}

              {c.extraVideos && c.extraVideos.length > 0 && (
                <>
                  <h2 className="mt-10 text-2xl font-extrabold tracking-tight">More from this campaign</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {c.extraVideos.map((v) => (
                      <figure key={v.file} className="overflow-hidden rounded-2xl border border-zinc-200 bg-black">
                        <video
                          src={`/case-studies/${v.file}.mp4`}
                          poster={`/case-studies/${v.file}.jpg`}
                          controls
                          playsInline
                          preload="none"
                          className={`w-full bg-black ${v.orientation === "portrait" ? "aspect-[9/14] object-cover" : v.orientation === "square" ? "aspect-square object-cover" : "aspect-video object-contain"}`}
                        >
                          <track kind="captions" />
                        </video>
                      </figure>
                    ))}
                  </div>
                </>
              )}

              <h2 id="drivers" className="mt-10 scroll-mt-28 text-2xl font-extrabold tracking-tight">{c.category === "Masterminds" ? "What we covered" : "What drove it"}</h2>
              <ul className="mt-4 space-y-3">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[1.0625rem] leading-relaxed text-zinc-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ed1c24]" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>

              {context.length > 0 && (
                <>
                  <h2 id="context" className="mt-12 scroll-mt-28 text-2xl font-extrabold tracking-tight">The numbers in context</h2>
                  <ul className="mt-4 space-y-3">
                    {context.map((t) => (
                      <li key={t} className="rounded-xl border border-zinc-200 bg-white p-4 text-[1rem] leading-relaxed text-zinc-600">
                        <Inline text={t} />
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2 id="apply" className="mt-12 scroll-mt-28 text-2xl font-extrabold tracking-tight">How to apply this to your roofing company</h2>
              <ol className="mt-5 space-y-4">
                {lessons.map((l, i) => (
                  <li key={l.title} className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ed1c24] text-sm font-extrabold">{i + 1}</span>
                    <span>
                      <span className="block text-lg font-bold leading-snug text-zinc-900">{l.title}</span>
                      <span className="mt-2 block text-[1rem] leading-relaxed text-zinc-600"><Inline text={l.text} /></span>
                    </span>
                  </li>
                ))}
              </ol>

              <h2 id="faq" className="mt-12 scroll-mt-28 text-2xl font-extrabold tracking-tight">Frequently asked questions</h2>
              <div className="mt-4 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
                {faqs.map((f) => (
                  <details key={f.q} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <ChevronDown className="h-4 w-4 shrink-0 text-[#ed1c24] transition-transform group-open:rotate-180" aria-hidden />
                    </summary>
                    <p className="mt-3 leading-relaxed text-zinc-600">{f.a}</p>
                  </details>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-zinc-500">
                Figures are from the campaign as reported in the original post. Results vary by market, offer and
                follow-through — see our <Link href="/income-disclosure" className="underline underline-offset-4 hover:text-[#ed1c24]">income disclosure</Link>.
                {" "}Learn how the system works: <Link href="/roofing-lead-generation" className="underline underline-offset-4 hover:text-[#ed1c24]">roofing lead generation</Link> and{" "}
                <Link href="/facebook-ads-for-roofers" className="underline underline-offset-4 hover:text-[#ed1c24]">Facebook ads for roofers</Link>. Compare this result with{" "}
                <Link href="/blog/roofing-facebook-ads-cost-per-lead" className="underline underline-offset-4 hover:text-[#ed1c24]">cost per lead across 15 roofing campaigns</Link>.
              </p>

            </article>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Campaign snapshot</p>
                <dl className="mt-4 divide-y divide-zinc-200 text-sm">
                  <div className="flex justify-between gap-3 py-2.5"><dt className="text-zinc-500">Category</dt><dd className="text-right font-semibold text-zinc-900">{c.category}</dd></div>
                  <div className="flex justify-between gap-3 py-2.5"><dt className="text-zinc-500">Reported</dt><dd className="text-right font-semibold text-zinc-900">{new Date(c.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", year: "numeric" })}</dd></div>
                  {c.metrics.map((x) => (
                    <div key={x.label} className="flex justify-between gap-3 py-2.5"><dt className="text-zinc-500">{x.label}</dt><dd className="text-right font-bold text-[#d4151c]">{x.value}</dd></div>
                  ))}
                </dl>
              </div>

              <nav aria-label="Related guides" className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">How we do it</p>
                <ul className="mt-3 space-y-1">
                  {guides.map((g) => (
                    <li key={g.href}>
                      <Link href={g.href} className="group flex items-start justify-between gap-2 rounded-lg px-2 py-2.5 transition hover:bg-zinc-100">
                        <span>
                          <span className="block text-sm font-semibold text-zinc-900 group-hover:text-[#d4151c]">{g.label}</span>
                          <span className="mt-0.5 block text-xs text-zinc-500">{g.why}</span>
                        </span>
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ed1c24] transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-5 lg:sticky lg:top-28">
              <nav aria-label="On this page" className="hidden rounded-2xl border border-zinc-200 bg-white p-5 lg:block">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">On this page</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {toc.map((t) => (
                    <li key={t.id}><a href={`#${t.id}`} className="text-zinc-600 hover:text-[#d4151c]">{t.label}</a></li>
                  ))}
                </ul>
              </nav>

              <div className="rounded-2xl border border-[#ed1c24]/30 bg-gradient-to-br from-[#ed1c24]/20 to-white p-5">
                <p className="text-lg font-extrabold leading-snug">Want results like this for your roofing company?</p>
                <p className="mt-2 text-sm text-zinc-600">Free 1:1 strategy call for roofing companies doing $1M+ a year.</p>
                <Link href={site.bookCallUrl} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ed1c24] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c4181e]">
                  Book a strategy call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              </div>
            </aside>
          </div>

          {/* Up next */}
          <Link
            href={`/case-studies/${next.slug}`}
            className="group mt-20 grid overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-[#fff1f2] to-white shadow-[0_25px_60px_-40px_rgba(237,28,36,0.6)] transition hover:-translate-y-1 hover:border-[#ed1c24]/40 sm:grid-cols-[220px_minmax(0,1fr)]"
          >
            <div className="relative h-48 overflow-hidden bg-black sm:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={caseMedia(next).poster} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={caseMedia(next).poster} alt={next.title} loading="lazy" className="relative h-full w-full object-contain transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4151c]">Up next · {next.category}</p>
              <p className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-zinc-900 group-hover:text-[#d4151c]">{next.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {next.metrics.slice(0, 3).map((x) => (
                  <span key={x.label} className="rounded-full bg-white px-3 py-1 text-sm font-bold text-zinc-900 ring-1 ring-zinc-200">
                    <span className="text-[#ed1c24]">{x.value}</span> {x.label.toLowerCase()}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
                Read the next case study <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          <section aria-labelledby="more" className="mt-16">
            <div className="flex items-center justify-between gap-4">
              <h2 id="more" className="text-2xl font-extrabold tracking-tight">More case studies</h2>
              <Link href="/case-studies" className="text-sm font-semibold text-zinc-600 hover:text-[#ed1c24]">See all →</Link>
            </div>
            <ul className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/case-studies/${r.slug}`} className="group flex h-full gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-[#ed1c24]/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={caseMedia(r).poster} alt="" loading="lazy" className="h-24 w-20 shrink-0 rounded-xl object-cover" />
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#d4151c]">{r.category}</span>
                      <span className="mt-1 block text-sm font-bold leading-snug text-zinc-900 group-hover:text-[#d4151c]">{r.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap justify-between gap-3 text-sm">
              <Link href={`/case-studies/${prev.slug}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#ed1c24]">
                <ArrowLeft className="h-4 w-4" /> Previous
              </Link>
              <Link href={`/case-studies/${next.slug}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#ed1c24]">
                Next <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
