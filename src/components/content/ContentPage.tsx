import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/seo";
import type { Block, ContentDoc } from "@/lib/content";

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
            <Link key={i} href={href} className="font-semibold text-white underline decoration-[#ed1c24] underline-offset-4 hover:text-[#ed1c24]">
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-[#ed1c24] underline-offset-4 hover:text-[#ed1c24]">
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
        <h2 id={block.id} className="mt-14 scroll-mt-28 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-8 text-lg font-bold leading-snug text-white sm:text-xl">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-5 text-[1.0625rem] leading-[1.8] text-zinc-300">
          <Inline text={block.text} />
        </p>
      );
    case "ul":
    case "ol": {
      const List = block.type === "ul" ? "ul" : "ol";
      return (
        <List className={`mt-5 space-y-3 ${block.type === "ol" ? "list-decimal pl-6 marker:font-bold marker:text-[#ed1c24]" : ""}`}>
          {block.items.map((item, i) => (
            <li key={i} className={`text-[1.0625rem] leading-[1.75] text-zinc-300 ${block.type === "ul" ? "flex gap-3" : "pl-1"}`}>
              {block.type === "ul" && <CheckCircle2 className="mt-1.5 h-4 w-4 shrink-0 text-[#ed1c24]" aria-hidden />}
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border border-[#ed1c24]/30 bg-[#ed1c24]/[0.07] p-6">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed1c24]">{block.title}</p>
          <p className="mt-2 text-[1.0625rem] leading-[1.75] text-zinc-200">
            <Inline text={block.text} />
          </p>
        </aside>
      );
  }
}

export function ContentPage({ doc }: { doc: ContentDoc }) {
  const url = `${site.url}${doc.path}`;
  const toc = doc.blocks.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");

  const mainSchema =
    doc.kind === "article"
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
          author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          name: doc.h1,
          description: doc.description,
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

      <main className="relative overflow-hidden bg-[#09090b] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem]">
          <div className="jobber-grid-dark absolute inset-0 opacity-25" />
          <div className="absolute left-1/2 top-0 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.14),transparent_70%)] blur-3xl" />
        </div>

        <article className="relative mx-auto max-w-[820px] px-5 pb-20 pt-32 md:px-8 md:pt-40">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
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

          <header className="mt-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24]" />
              {doc.eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight">
              {doc.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">{doc.intro}</p>
            {doc.kind === "article" && (
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                By {site.name} · Updated{" "}
                <time dateTime={doc.updated}>
                  {new Date(doc.updated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.bookCallUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-[#ed1c24] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:bg-[#c4181e]"
              >
                Book a free strategy call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </header>

          {toc.length > 2 && (
            <nav aria-label="On this page" className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">On this page</p>
              <ol className="mt-3 space-y-2">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-[0.95rem] text-zinc-300 hover:text-white">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div>
            {doc.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>

          {doc.faqs.length > 0 && (
            <section aria-labelledby="faq" className="mt-16">
              <h2 id="faq" className="scroll-mt-28 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
                {doc.faqs.map((f) => (
                  <details key={f.q} className="group p-5 sm:p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-semibold text-white">
                      {f.q}
                      <span className="mt-1 text-[#ed1c24] transition-transform group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-zinc-300">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-16 rounded-3xl border border-[#ed1c24]/30 bg-gradient-to-br from-[#ed1c24]/15 via-[#121215] to-[#121215] p-8 sm:p-10">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed1c24]">For roofers doing $1M+ a year</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">{doc.ctaTitle}</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-zinc-300">
              Book a free 1:1 strategy call. We look at your market, your numbers and your current lead flow, and show you
              exactly what we would install — backed by a written agreement.
            </p>
            <Link
              href={site.bookCallUrl}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#ed1c24] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#c4181e]"
            >
              Book your free strategy call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </section>

          {doc.related.length > 0 && (
            <nav aria-label="Related" className="mt-14">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Keep reading</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {doc.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#ed1c24]/50 hover:bg-[#ed1c24]/10"
                    >
                      <span className="font-semibold text-white">{r.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
