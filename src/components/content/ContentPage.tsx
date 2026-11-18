import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarCheck, CheckCircle2, Clock, Hammer, Rocket, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ShowcaseCard } from "@/components/sections/ShowcaseCard";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/seo";
import { articles, services, type Block, type ContentDoc } from "@/lib/content";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

// Case studies shown as proof on every service page and article
const PROOF = [
  "dallas-roofer-127500-closed-34-installs",
  "1480-roofing-leads-4-77-cpl",
  "texas-roofer-686-leads-8-days-0-down-offer",
  "825-verified-roofing-leads-4-95-cpl",
];

const linkCls = "font-semibold text-white underline decoration-[#ed1c24] decoration-2 underline-offset-4 transition-colors hover:text-[#ff6b70]";

/** Renders [text](/href) links and **bold** inside a paragraph string. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href} className={linkCls}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
              {label}
            </a>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-white">{bold[1]}</strong>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={block.id} className="mt-16 scroll-mt-28 border-t border-white/10 pt-10 text-2xl font-extrabold leading-tight tracking-tight text-white first:mt-0 first:border-0 first:pt-0 sm:text-[2rem]">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-8 text-lg font-bold leading-snug text-white sm:text-xl">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-5 text-[1.0625rem] leading-[1.85] text-zinc-300">
          <Inline text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-[1.0625rem] leading-[1.7] text-zinc-300">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ed1c24]" aria-hidden />
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <li key={i} className="relative rounded-2xl border border-white/10 bg-[#121215] p-5 pt-12 text-[0.98rem] leading-[1.7] text-zinc-300">
              <span className="absolute left-5 top-4 font-extrabold text-[#ed1c24]">{String(i + 1).padStart(2, "0")}</span>
              <Inline text={item} />
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto" data-lenis-prevent>
            <table className="w-full min-w-[560px] border-collapse text-left text-[0.95rem]">
              <thead className="bg-white/[0.05] text-xs uppercase tracking-[0.12em] text-zinc-400">
                <tr>
                  {block.head.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {block.rows.map((r, i) => (
                  <tr key={i} className="transition-colors hover:bg-white/[0.03]">
                    {r.map((c, j) => (
                      <td key={j} className={`px-4 py-3 ${j === 2 ? "font-bold text-[#ff6b70]" : j === 0 ? "text-zinc-200" : "text-zinc-400"}`}>
                        <Inline text={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="border-t border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-400">{block.caption}</figcaption>
        </figure>
      );
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border-l-4 border-[#ed1c24] bg-gradient-to-r from-[#ed1c24]/12 to-transparent p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b70]">{block.title}</p>
          <p className="mt-2 text-[1.0625rem] leading-[1.75] text-zinc-200">
            <Inline text={block.text} />
          </p>
        </aside>
      );
  }
}

const textOf = (b: Block) =>
  b.type === "ul" || b.type === "ol" ? b.items.join(" ") : b.type === "table" ? b.rows.flat().join(" ") : "text" in b ? b.text : "";

const STEPS = [
  { icon: CalendarCheck, title: "Strategy call", text: "We look at your market, numbers and capacity, and decide together whether the system is a fit." },
  { icon: Hammer, title: "We build & launch", text: "Offer, creatives, landing pages, CRM and follow-up — installed and launched for you." },
  { icon: Rocket, title: "You close the jobs", text: "Qualified homeowners land on your calendar. Your team runs the inspections and closes." },
];

export function ContentPage({ doc }: { doc: ContentDoc }) {
  const url = `${site.url}${doc.path}`;
  const isArticle = doc.kind === "article";
  const toc = doc.blocks.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const words = doc.blocks.map(textOf).join(" ").split(/\s+/).length + doc.faqs.map((f) => f.a).join(" ").split(/\s+/).length;
  const minutes = Math.max(2, Math.round(words / 220));
  const proof = PROOF.map(getCaseStudy).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const otherServices = services.filter((s) => s.path !== doc.path);
  const otherArticles = articles.filter((a) => a.path !== doc.path);

  const mainSchema = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: doc.h1,
        description: doc.description,
        url,
        mainEntityOfPage: url,
        datePublished: doc.published,
        dateModified: doc.updated,
        image: `${site.url}/opengraph-image`,
        inLanguage: "en-US",
        wordCount: words,
        ...(doc.shortAnswer ? { abstract: doc.shortAnswer } : {}),
        author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
        publisher: { "@id": `${site.url}/#organization` },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: doc.h1,
        description: doc.shortAnswer ?? doc.description,
        url,
        serviceType: doc.serviceType,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "BusinessAudience", audienceType: "Roofing contractors doing $1M+ in annual revenue" },
      };
  const faqSchema = doc.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: doc.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      <JsonLd data={mainSchema} />
      <JsonLd data={breadcrumbSchema(doc.breadcrumbs)} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <main className="relative overflow-x-clip bg-[#09090b] text-white">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="jobber-grid-dark absolute inset-0 opacity-25" />
            <div className="absolute -top-20 left-1/3 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.2),transparent_70%)] blur-3xl" />
          </div>
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div>
              <nav aria-label="Breadcrumb" className="text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  {doc.breadcrumbs.map((b, i) => (
                    <li key={b.path} className="flex items-center gap-2">
                      <span aria-hidden>/</span>
                      {i === doc.breadcrumbs.length - 1 ? (
                        <span className="text-zinc-300" aria-current="page">{b.name}</span>
                      ) : (
                        <Link href={b.path} className="hover:text-white">{b.name}</Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ff4d55]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" />
                {doc.eyebrow}
              </span>
              <h1 className="mt-5 text-balance text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight">{doc.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">{doc.intro}</p>
              {isArticle && (
                <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
                  <span>By <strong className="font-semibold text-zinc-200">{site.name}</strong></span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {minutes} min read</span>
                  <span>
                    Updated{" "}
                    <time dateTime={doc.updated}>{new Date(doc.updated + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                  </span>
                </p>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={site.bookCallUrl}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:-translate-y-0.5"
                >
                  Book a free strategy call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/40 hover:bg-white/5">
                  <TrendingUp className="h-4 w-4" /> See case studies
                </Link>
              </div>
            </div>

            {/* Right: results snapshot (services) or guide contents (articles) */}
            {isArticle ? (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400"><BookOpen className="h-4 w-4 text-[#ed1c24]" /> In this guide</p>
                <ol className="mt-5 space-y-1">
                  {toc.map((h, i) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-[0.95rem] text-zinc-300 transition hover:bg-white/5 hover:text-white">
                        <span className="mt-0.5 text-xs font-bold text-[#ed1c24]">{String(i + 1).padStart(2, "0")}</span>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#ed1c24]/15 via-[#121215] to-[#121215] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b70]">Recent client results</p>
                <ul className="mt-5 divide-y divide-white/10">
                  {proof.slice(0, 3).map((c) => (
                    <li key={c.slug}>
                      <Link href={`/case-studies/${c.slug}`} className="group flex items-center justify-between gap-4 py-4">
                        <span>
                          <span className="block text-2xl font-extrabold text-white">{c.metrics[0].value} <span className="text-base font-semibold text-zinc-400">{c.metrics[0].label.toLowerCase()}</span></span>
                          <span className="mt-1 block text-sm text-zinc-400 group-hover:text-zinc-200">{c.summary}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/case-studies" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#ff6b70]">
                  All {caseStudies.length} case studies <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ── HOW IT WORKS (services) ───────────────────────── */}
        {!isArticle && (
          <section className="border-b border-white/10 bg-[#0c0c0f] py-14">
            <div className="container-x grid gap-4 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#ed1c24]/15 text-[#ed1c24]"><s.icon className="h-6 w-6" /></span>
                  <span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Step {i + 1}</span>
                    <span className="mt-1 block text-lg font-bold text-white">{s.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-zinc-400">{s.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── BODY + STICKY SIDEBAR ─────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <article className="min-w-0 max-w-[780px]">
              {doc.shortAnswer && (
                <div className="mb-14 rounded-2xl border border-[#ed1c24]/35 bg-gradient-to-br from-[#ed1c24]/12 to-transparent p-6 sm:p-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b70]">Short answer</p>
                  <p className="mt-3 text-lg font-medium leading-relaxed text-white">{doc.shortAnswer}</p>
                </div>
              )}
              {doc.blocks.map((b, i) => (
                <BlockView key={i} block={b} />
              ))}
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                <nav aria-label="On this page" className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">On this page</p>
                  <ol className="mt-3 space-y-1">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="block rounded-lg px-2 py-1.5 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">{h.text}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="rounded-2xl border border-[#ed1c24]/30 bg-gradient-to-br from-[#ed1c24]/20 to-[#121215] p-5">
                  <p className="text-lg font-extrabold leading-snug">{doc.ctaTitle}</p>
                  <p className="mt-2 text-sm text-zinc-300">Free 1:1 call for roofing companies doing $1M+ a year.</p>
                  <Link href={site.bookCallUrl} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ed1c24] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c4181e]">
                    Book a strategy call <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">{isArticle ? "Our services" : "Related"}</p>
                  <ul className="mt-3 space-y-1">
                    {(isArticle ? services : [...otherServices, ...articles]).map((d) => (
                      <li key={d.path}>
                        <Link href={d.path} className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white">
                          {d.breadcrumbs[d.breadcrumbs.length - 1].name}
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#ed1c24] transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── PROOF: CASE STUDIES ───────────────────────────── */}
        <section className="relative overflow-hidden bg-[#a3101a] py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(237,28,36,0.65),transparent_70%)]" aria-hidden />
          <div className="container-x relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Proof, not promises</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Results from real roofing campaigns</h2>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 self-start rounded-full border border-white/30 bg-black/20 px-5 py-2.5 text-sm font-bold transition hover:bg-black/30 sm:self-auto">
                All {caseStudies.length} case studies <ArrowRight className="h-4 w-4" />
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

        {/* ── FAQ ───────────────────────────────────────────── */}
        {doc.faqs.length > 0 && (
          <section aria-labelledby="faq" className="border-b border-white/10 py-16 md:py-24">
            <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4d55]">FAQ</p>
                <h2 id="faq" className="mt-3 scroll-mt-28 text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently asked questions</h2>
                <p className="mt-4 max-w-sm text-zinc-400">
                  Still have a question? <Link href={site.bookCallUrl} className={linkCls}>Ask us on a free call</Link> or read the <Link href="/#faq" className={linkCls}>full FAQ</Link>.
                </p>
              </div>
              <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
                {doc.faqs.map((f, i) => (
                  <details key={f.q} className="group p-5 sm:p-6" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-semibold text-white">
                      {f.q}
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/15 text-[#ed1c24] transition-transform group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-zinc-300">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── KEEP READING ──────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{isArticle ? "Keep reading" : "Learn more"}</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {[...(isArticle ? otherArticles : articles), ...otherServices].slice(0, 3).map((d) => (
                <li key={d.path}>
                  <Link href={d.path} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#121215] p-6 transition hover:-translate-y-1 hover:border-[#ed1c24]/50">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b70]">{d.kind === "article" ? "Guide" : "Service"}</span>
                    <span className="mt-3 text-lg font-bold leading-snug text-white group-hover:text-[#ff6b70]">{d.h1}</span>
                    <span className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">{d.description}</span>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      {d.kind === "article" ? "Read the guide" : "See the service"} <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="pb-20">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ed1c24]/30 bg-gradient-to-br from-[#ed1c24]/25 via-[#121215] to-[#121215] p-8 text-center sm:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b70]">For roofers doing $1M+ a year</p>
              <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{doc.ctaTitle}</h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-300">
                Book a free 1:1 strategy call. We look at your market, your numbers and your lead flow, and show you exactly what we would install — backed by a written agreement.
              </p>
              <Link href={site.bookCallUrl} className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#ed1c24] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:bg-[#c4181e]">
                Book your free strategy call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
