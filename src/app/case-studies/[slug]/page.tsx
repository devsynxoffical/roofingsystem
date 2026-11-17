import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { caseMedia, caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c) return {};
  const meta = pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/case-studies/${c.slug}` });
  const image = caseMedia(c).poster;
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: c.date, images: [{ url: image, alt: c.title }] },
    twitter: { ...meta.twitter, images: [image] },
  };
}

const iso = (s: number) => `PT${Math.floor(s / 60)}M${s % 60}S`;

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();
  const m = caseMedia(c);
  const url = `${site.url}/case-studies/${c.slug}`;
  const idx = caseStudies.indexOf(c);
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const related = caseStudies.filter((x) => x.slug !== c.slug && x.category === c.category).concat(caseStudies.filter((x) => x.category !== c.category)).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.metaDescription,
    url,
    mainEntityOfPage: url,
    datePublished: c.date,
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

  return (
    <>
      <JsonLd data={articleSchema} />
      {videoSchema && <JsonLd data={videoSchema} />}
      <JsonLd data={breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }, { name: c.title, path: `/case-studies/${c.slug}` }])} />

      <main className="relative overflow-hidden bg-[#09090b] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-gradient-to-b from-[#7d0c12]/70 to-transparent" />
        <div className="container-x relative pb-20 pt-32 md:pt-40">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li aria-hidden>/</li>
              <li className="text-zinc-200" aria-current="page">{c.category}</li>
            </ol>
          </nav>

          <div className={`mt-8 grid items-start gap-10 ${portrait ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]" : "lg:grid-cols-1"}`}>
            <header className={portrait ? "" : "max-w-4xl"}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#ff6b70]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24]" />
                Case study · {c.category}
              </span>
              <h1 className="mt-5 text-balance text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight">{c.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-300">{c.summary}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {c.metrics.map((x) => (
                  <div key={x.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">{x.label}</dt>
                    <dd className="mt-1 font-mono text-2xl font-extrabold text-[#ff4d55]">{x.value}</dd>
                  </div>
                ))}
              </dl>
            </header>

            <figure className={`overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] ${portrait ? "mx-auto w-full max-w-md lg:row-span-2" : ""}`}>
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
              <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-xs text-zinc-400">
                <span>
                  Posted{" "}
                  <time dateTime={c.date}>
                    {new Date(c.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </time>
                </span>
                <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#ff6b70]">
                  <ExternalLink className="h-3.5 w-3.5" /> View on {c.platform ?? "Instagram"}
                </a>
              </figcaption>
            </figure>

            <article className={portrait ? "" : "max-w-3xl"}>
              <h2 className="text-2xl font-extrabold tracking-tight">The result</h2>
              {c.story.map((p, i) => (
                <p key={i} className="mt-4 text-[1.0625rem] leading-[1.8] text-zinc-300">{p}</p>
              ))}

              {c.extraVideos && c.extraVideos.length > 0 && (
                <>
                  <h2 className="mt-10 text-2xl font-extrabold tracking-tight">More from this campaign</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {c.extraVideos.map((v) => (
                      <figure key={v.file} className="overflow-hidden rounded-2xl border border-white/10 bg-black">
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
                        <figcaption className="px-3 py-2 text-right text-xs">
                          <a href={v.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-300 hover:text-white">
                            View original post ↗
                          </a>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </>
              )}

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">{c.category === "Masterminds" ? "What we covered" : "What drove it"}</h2>
              <ul className="mt-4 space-y-3">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[1.0625rem] leading-relaxed text-zinc-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ed1c24]" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-zinc-500">
                Figures are from the campaign as reported in the original post. Results vary by market, offer and
                follow-through — see our <Link href="/income-disclosure" className="underline underline-offset-4 hover:text-white">income disclosure</Link>.
                {" "}Learn how the system works: <Link href="/roofing-lead-generation" className="underline underline-offset-4 hover:text-white">roofing lead generation</Link> and{" "}
                <Link href="/facebook-ads-for-roofers" className="underline underline-offset-4 hover:text-white">Facebook ads for roofers</Link>.
              </p>

              <div className="mt-10 rounded-3xl border border-[#ed1c24]/30 bg-gradient-to-br from-[#ed1c24]/15 via-[#121215] to-[#121215] p-7">
                <h2 className="text-xl font-extrabold">Want a system like this for your roofing company?</h2>
                <p className="mt-2 text-zinc-300">Book a free 1:1 strategy call — for roofing companies doing $1M+ a year.</p>
                <Link
                  href={site.bookCallUrl}
                  className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#ed1c24] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#c4181e]"
                >
                  Book your free strategy call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          </div>

          <section aria-labelledby="more" className="mt-20">
            <div className="flex items-center justify-between gap-4">
              <h2 id="more" className="text-2xl font-extrabold tracking-tight">More case studies</h2>
              <Link href="/case-studies" className="text-sm font-semibold text-zinc-300 hover:text-white">See all →</Link>
            </div>
            <ul className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/case-studies/${r.slug}`} className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-[#121215] p-4 transition hover:border-[#ed1c24]/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={caseMedia(r).poster} alt="" loading="lazy" className="h-24 w-20 shrink-0 rounded-xl object-cover" />
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#ff6b70]">{r.category}</span>
                      <span className="mt-1 block text-sm font-bold leading-snug text-white group-hover:text-[#ff6b70]">{r.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap justify-between gap-3 text-sm">
              <Link href={`/case-studies/${prev.slug}`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white">
                <ArrowLeft className="h-4 w-4" /> Previous
              </Link>
              <Link href={`/case-studies/${next.slug}`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white">
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
