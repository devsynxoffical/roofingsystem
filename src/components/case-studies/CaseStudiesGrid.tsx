"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, ImageIcon } from "lucide-react";
import { CATEGORIES, caseMedia, type CaseCategory, type CaseStudy } from "@/lib/caseStudies";

/** Muted looping preview that only plays while the card is on screen. */
function CardVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}

export function CaseStudiesGrid({ items }: { items: CaseStudy[] }) {
  const [filter, setFilter] = useState<CaseCategory | "All">("All");
  const shown = filter === "All" ? items : items.filter((c) => c.category === filter);
  const count = (c: CaseCategory) => items.filter((i) => i.category === c).length;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {(["All", ...CATEGORIES] as const).map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-bold transition-all sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-base ${
                active
                  ? "border-white bg-white text-[#b3121a] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]"
                  : "border-white/25 bg-black/15 text-white hover:border-white/60 hover:bg-black/25"
              }`}
            >
              {c}
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-extrabold ${
                  active ? "bg-[#ed1c24] text-white" : "bg-[#09090b]/60 text-[#ffb36b]"
                }`}
              >
                {c === "All" ? items.length : count(c)}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((c) => {
          const m = caseMedia(c);
          return (
            <li key={c.slug}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#121215] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#09090b]">
                  {m.video ? (
                    <CardVideo src={m.video} poster={m.poster} title={c.title} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.poster}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                    {m.video ? <Play className="h-3 w-3 fill-current text-[#ed1c24]" /> : <ImageIcon className="h-3 w-3 text-[#ed1c24]" />}
                    {c.category}
                  </span>
                  <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
                    {c.metrics.slice(0, 2).map((x) => (
                      <span key={x.label} className="rounded-lg bg-[#ed1c24] px-2.5 py-1 text-xs font-extrabold text-white shadow-lg">
                        {x.value} <span className="font-semibold text-white/80">{x.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-[1.05rem] font-bold leading-snug text-white group-hover:text-[#ff6b70]">{c.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{c.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    View case study <ArrowUpRight className="h-4 w-4 text-[#ed1c24] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
