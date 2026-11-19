"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

export type ProofItem = {
  slug: string;
  title: string;
  summary: string;
  poster: string;
  video?: string;
  metrics: { value: string; label: string }[];
};

/** Interactive proof viewer: pick a result on the left, see its media and numbers on the right. */
export function ProofGallery({ items }: { items: ProofItem[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const c = items[active];

  const select = (i: number) => {
    setActive(i);
    setPlaying(false);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <ol className="grid gap-3" role="tablist" aria-label="Results">
        {items.map((it, i) => (
          <li key={it.slug}>
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => select(i)}
              onMouseEnter={() => select(i)}
              className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition ${
                i === active ? "border-[#ed1c24] bg-[#ed1c24]/10 shadow-[0_10px_40px_-20px_rgba(237,28,36,0.8)]" : "border-white/10 bg-white/[0.03] hover:border-white/25"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.poster} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-xl bg-black object-cover" />
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-snug text-white">{it.title}</span>
                <span className="mt-1 block font-mono text-xs text-[#ff6b70]">{it.metrics.slice(0, 2).map((m) => `${m.value} ${m.label.replace(/^[A-Z][a-z]/, (x) => x.toLowerCase())}`).join(" · ")}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e11]">
        <AnimatePresence mode="wait">
          <motion.div key={c.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            <div className="relative aspect-video bg-black">
              {playing && c.video ? (
                <video src={c.video} poster={c.poster} controls autoPlay playsInline className="h-full w-full object-contain">
                  <track kind="captions" />
                </video>
              ) : (
                <>
                  {/* blurred backdrop keeps portrait media looking full-width */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.poster} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.poster} alt={c.title} className="relative h-full w-full object-contain" />
                  {c.video && (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 grid place-items-center"
                      aria-label={`Play video: ${c.title}`}
                    >
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-[#ed1c24] text-white shadow-[0_0_40px_rgba(237,28,36,0.7)] transition hover:scale-110">
                        <Play className="ml-1 h-6 w-6 fill-white" />
                      </span>
                    </button>
                  )}
                </>
              )}
            </div>
            <div className="p-6">
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <dt className="text-[10px] uppercase tracking-wider text-zinc-500">{m.label}</dt>
                    <dd className="mt-1 font-mono text-lg font-extrabold text-[#ff4d55]">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">{c.summary}</p>
              <Link href={`/case-studies/${c.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#ff6b70]">
                Read the full case study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
