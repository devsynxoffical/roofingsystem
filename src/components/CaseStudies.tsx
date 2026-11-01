"use client";

import { TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";

/*
  Real client case studies — taken from the recorded client interviews
  (same videos/posters as the Reviews section). Headlines and numbers are
  the ones stated on each recording's cover.
*/
const CASES = [
  {
    id: "edgar-mrr",
    client: "Edgar",
    headline: "Landed a new agency client on a $1,500/month retainer",
    body: "A 3-month deal worth $4,500 — booked from a lead that cost just $7 to acquire.",
    results: [
      ["$1,500", "per month"],
      ["$4,500", "deal value"],
      ["$7", "lead cost"],
    ],
    poster: "/media/reviews/poster-edgar-2.png",
    video: "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/6978f116d560857126a4804c.mp4",
  },
  {
    id: "marie-summit",
    client: "Marie",
    headline: "Took an online summit from zero results to 2,000+ registrations",
    body: "The same funnel-and-follow-up system, rebuilt around her event — from no traction to a full room.",
    results: [
      ["0", "before"],
      ["2,000+", "registrations"],
    ],
    poster: "/media/reviews/poster-ibam.png",
    video: "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/69624f62f8a93b0480751a4e.mp4",
  },
  {
    id: "edgar-jeremi",
    client: "Edgar & Jeremi",
    headline: "Getting high-ticket clients with the system",
    body: "How they use the exact acquisition framework — offer, ads, funnel and follow-up — to sign high-ticket clients.",
    results: [["High-ticket", "clients signed"]],
    poster: "/media/reviews/poster-edgar.png",
    video: "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/69624f63f8a93b76e0751a55.mp4",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative overflow-hidden border-b border-white/10 bg-[#090a0f] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="jobber-grid-dark absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-0 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
            <TrendingUp className="h-3.5 w-3.5" />
            Case Studies
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Real clients. <span className="text-gradient-animated">Real results.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-[1rem]">
            Hear it straight from the people running the system — what they had before, what changed, and the numbers
            that followed. Press play, sound on.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e0f15] transition-all duration-500 hover:-translate-y-1 hover:border-[#ed1c24]/50 hover:shadow-[0_20px_50px_-15px_rgba(237,28,36,0.35)]">
                <VideoPlayer src={c.video} cover={c.poster} title={`${c.client} case study`} aspect="aspect-[4/5]" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                    Case study 0{i + 1} · {c.client}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-white">{c.headline}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.body}</p>
                  <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-5">
                    {c.results.map(([n, l]) => (
                      <div key={l} className="min-w-[5.5rem] rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                        <p className="font-mono text-lg font-extrabold text-[#ed1c24]">{n}</p>
                        <p className="text-[11px] uppercase tracking-wider text-zinc-500">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
