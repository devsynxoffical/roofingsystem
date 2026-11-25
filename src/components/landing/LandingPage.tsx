import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  CheckCircle2,
  Clock,
  CloudLightning,
  Film,
  Image as ImageIcon,
  Layers,
  MapPin,
  Megaphone,
  Phone,
  Repeat,
  ShieldCheck,
  Target,
  Users,
  Wallet,
  XCircle,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Inline } from "@/components/content/ContentPage";
import { FaqSection } from "@/components/FaqSection";
import { LeadForm } from "@/components/landing/LeadForm";
import { ProofGallery, type ProofItem } from "@/components/landing/ProofGallery";
import { caseMedia, getCaseStudy, type CaseStudy } from "@/lib/caseStudies";
import type { IconName, LandingDoc } from "@/lib/landings";
import { JsonLd, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const ICONS: Record<IconName, LucideIcon> = {
  megaphone: Megaphone,
  users: Users,
  image: ImageIcon,
  clock: Clock,
  camera: Camera,
  film: Film,
  layers: Layers,
  target: Target,
  shield: ShieldCheck,
  map: MapPin,
  wallet: Wallet,
  zap: Zap,
  storm: CloudLightning,
  repeat: Repeat,
  phone: Phone,
  building: Building2,
};

const cases = (slugs: string[]) => slugs.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));

export function LandingPage({ doc }: { doc: LandingDoc }) {
  const url = `${site.url}${doc.path}`;
  const crumbs = doc.breadcrumbs ?? [{ name: doc.breadcrumb, path: doc.path }];
  const proof: ProofItem[] = cases(doc.proofSlugs).map((c) => {
    const m = caseMedia(c);
    return { slug: c.slug, title: c.title, summary: c.summary, poster: m.poster, video: m.video, metrics: c.metrics };
  });

  const serviceSchema = doc.schema === "Article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.h1,
    description: doc.description,
    dateModified: doc.updated,
    url,
    mainEntityOfPage: url,
    author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
    publisher: { "@id": `${site.url}/#organization` },
    about: doc.serviceType,
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    name: doc.h1,
    serviceType: doc.serviceType,
    dateModified: doc.updated,
    description: doc.description,
    url,
    provider: { "@id": `${site.url}/#organization` },
    ...(doc.areaCity
      ? { areaServed: { "@type": "City", name: doc.areaCity.name, containedInPlace: { "@type": "State", name: doc.areaCity.state } } }
      : doc.areaServed ? { areaServed: { "@type": "State", name: doc.areaServed } } : { areaServed: { "@type": "Country", name: "United States" } }),
    audience: { "@type": "BusinessAudience", name: "Roofing companies doing $1M+ in annual revenue" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: doc.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <main className="relative overflow-x-clip bg-white text-zinc-900">
        {/* HERO */}
        <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="jobber-grid-light absolute inset-0 opacity-25" />
            <div className="absolute -top-24 left-1/3 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.28),transparent_70%)] blur-3xl" />
          </div>
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <nav aria-label="Breadcrumb" className="text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                <Link href="/" className="hover:text-[#ed1c24]">Home</Link>
                {crumbs.map((c, i) => (
                  <span key={c.path}>
                    {" "}<span aria-hidden>/</span>{" "}
                    {i < crumbs.length - 1 ? <Link href={c.path} className="hover:text-[#ed1c24]">{c.name}</Link> : <span className="text-zinc-600">{c.name}</span>}
                  </span>
                ))}
              </nav>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d4151c]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" /> {doc.eyebrow}
              </span>
              <h1 className="mt-5 text-balance text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight">{doc.h1}</h1>
              <p className="mt-3 text-sm text-zinc-500">
                Updated <time dateTime={doc.updated}>{new Date(doc.updated + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">{doc.intro}</p>
              <ul className="mt-7 space-y-3">
                {doc.heroPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[1rem] text-zinc-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ed1c24]" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#get-started" className="group inline-flex items-center gap-2 rounded-full bg-[#d4151c] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#b3111a]">
                  Get my free breakdown <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#results" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-bold text-zinc-900 transition hover:border-zinc-400">
                  See the results
                </a>
              </div>
            </div>
            <LeadForm id="get-started" form={`${doc.slug}-hero`} title={doc.formTitle} market={doc.market} />
          </div>
        </section>

        {/* STATS */}
        <section aria-label="Key results" className="border-y border-zinc-200 bg-zinc-50 py-10">
          <ul className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4">
            {doc.stats.map((s) => (
              <li key={s.label}>
                <Link href={s.href ?? `/case-studies/${s.slug}`} className="group block h-full rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#ed1c24]/50">
                  <p className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-sm leading-snug text-zinc-500">{s.label}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#d4151c]">
                    {s.source ?? "Case study"} <ArrowUpRight className="h-3 w-3" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* PROBLEMS (light) */}
        <section className="bg-white py-20 text-zinc-900 md:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">The problem</p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{doc.problems.title}</h2>
              <p className="mt-4 text-lg text-zinc-600"><Inline text={doc.problems.intro} /></p>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {doc.problems.cards.map((c) => {
                const Icon = ICONS[c.icon];
                return (
                  <li key={c.title} className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-[#ed1c24]/40 hover:bg-white hover:shadow-[0_20px_50px_-25px_rgba(237,28,36,0.45)]">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24] transition group-hover:bg-[#ed1c24] group-hover:text-[#ed1c24]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-zinc-600">{c.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* FEATURES with interactive image cards */}
        <section className="py-20 md:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">{doc.features.eyebrow}</p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{doc.features.title}</h2>
              <p className="mt-4 text-lg text-zinc-500"><Inline text={doc.features.intro} /></p>
            </div>
            <ul className="mt-12 grid gap-5 md:grid-cols-2">
              {doc.features.cards.map((c) => {
                const Icon = ICONS[c.icon];
                const cs = c.slug ? getCaseStudy(c.slug) : undefined;
                const img = cs ? caseMedia(cs).poster : undefined;
                const inner = (
                  <>
                    {!img && (
                      <div className="relative grid h-52 place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,rgba(237,28,36,0.18),transparent_60%),linear-gradient(135deg,#fff1f2,#ffffff)]">
                        <div className="jobber-grid-light absolute inset-0 opacity-30" aria-hidden />
                        <Icon className="relative h-20 w-20 text-[#ed1c24] transition duration-500 group-hover:scale-110 group-hover:rotate-3" strokeWidth={1.25} aria-hidden />
                      </div>
                    )}
                    {img && (
                      <div className="relative h-52 overflow-hidden bg-black">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={cs?.title ?? ""} loading="lazy" className="relative h-full w-full object-contain transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                          Read case study <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </div>
                    )}
                    <div className="flex gap-4 p-6">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ed1c24]/15 text-[#ed1c24]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-lg font-bold text-zinc-900 group-hover:text-[#d4151c]">{c.title}</span>
                        <span className="mt-2 block text-[0.95rem] leading-relaxed text-zinc-500">{c.text}</span>
                      </span>
                    </div>
                  </>
                );
                const cls = "group block h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-[#ed1c24]/50";
                return <li key={c.title}>{cs ? <Link href={`/case-studies/${cs.slug}`} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>}</li>;
              })}
            </ul>
          </div>
        </section>

        {/* RESULTS: interactive gallery */}
        <section id="results" className="scroll-mt-24 border-y border-zinc-200 bg-zinc-50 py-20 md:py-24">
          <div className="container-x">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">Proof</p>
                <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{doc.proofTitle}</h2>
                <p className="mt-3 text-zinc-500">{doc.proofIntro ? <Inline text={doc.proofIntro} /> : "Pick a result to see the campaign and its numbers."}</p>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 self-start rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-bold transition hover:border-zinc-400 sm:self-auto">
                All case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10">
              <ProofGallery items={proof} />
            </div>
          </div>
        </section>

        {/* PROCESS (light) */}
        <section className="bg-zinc-50 py-20 text-zinc-900 md:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">How it works</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">From first ad to booked inspection</h2>
            </div>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {doc.process.map((p, i) => (
                <li key={p.title} className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]">
                  <span className="absolute -right-2 -top-6 text-[6rem] font-black leading-none text-zinc-100" aria-hidden>{i + 1}</span>
                  <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#d4151c] text-sm font-extrabold text-white">{i + 1}</span>
                  <h3 className="relative mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="relative mt-2 text-[0.95rem] leading-relaxed text-zinc-600">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* COMPARE */}
        <section className="py-20 md:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{doc.compare.title}</h2>
              <p className="mt-4 text-lg text-zinc-500"><Inline text={doc.compare.intro} /></p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
              {[doc.compare.bad, doc.compare.good].map((col, i) => (
                <div key={col.title} className={`rounded-3xl border p-7 ${i ? "border-[#ed1c24]/50 bg-gradient-to-br from-[#ed1c24]/20 to-white" : "border-zinc-200 bg-white"}`}>
                  <h3 className="text-xl font-extrabold">{col.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[0.98rem] text-zinc-700">
                        {i ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ed1c24]" /> : doc.slug === "instagram-ads-for-roofers" ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" /> : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />}
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUIDE (light) */}
        <section className="bg-white py-20 text-zinc-900 md:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="max-w-3xl [&_a]:!text-zinc-900">
              {doc.guide.map((g, i) => (
                <div key={g.id} className={i ? "mt-12" : ""}>
                  <h2 id={g.id} className="scroll-mt-28 text-2xl font-extrabold tracking-tight sm:text-3xl">{g.title}</h2>
                  {g.body.map((p, j) => (
                    <p key={j} className="mt-4 text-[1.0625rem] leading-[1.8] text-zinc-700 [&_strong]:!text-zinc-900">
                      <Inline text={p} />
                    </p>
                  ))}
                </div>
              ))}
            </article>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-[#ed1c24]/25 bg-gradient-to-br from-[#fff1f2] to-white p-6 text-zinc-900 shadow-[0_25px_60px_-35px_rgba(237,28,36,0.5)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">Free breakdown</p>
                <p className="mt-3 text-xl font-extrabold leading-snug">See what this would look like in your market</p>
                <p className="mt-2 text-sm text-zinc-500">For roofing companies doing $1M+ a year.</p>
                <a href="#final-form" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4151c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b3111a]">
                  Get started <ArrowRight className="h-4 w-4" />
                </a>
                <ul className="mt-6 space-y-2 border-t border-zinc-200 pt-5 text-sm">
                  {doc.guide.map((g) => (
                    <li key={g.id}><a href={`#${g.id}`} className="text-zinc-600 hover:text-[#d4151c]">{g.title}</a></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ: same chat-style FAQ as the homepage */}
        <FaqSection items={doc.faqs} />

        {/* RELATED */}
        <section className="pb-20">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold tracking-tight">Keep reading</h2>
            {doc.relatedIntro && <p className="mt-3 max-w-3xl text-zinc-600"><Inline text={doc.relatedIntro} /></p>}
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {doc.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#ed1c24]/50">
                    <span className="font-bold text-zinc-900 group-hover:text-[#d4151c]">{r.label}</span>
                    <span className="mt-1 flex-1 text-sm text-zinc-500">{r.text}</span>
                    <ArrowRight className="mt-4 h-4 w-4 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#a3101a] py-20 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(237,28,36,0.7),transparent_70%)]" aria-hidden />
          <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">For roofers doing $1M+ a year</p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Ready for leads that are yours alone?</h2>
              <p className="mt-5 max-w-lg text-lg text-white/85">
                Tell us about your company. We&apos;ll look at your market and show you the offer, ads and follow-up we would build, on a free call.
              </p>
            </div>
            <LeadForm id="final-form" form={`${doc.slug}-final`} title="Book your free strategy call" market={doc.market} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
