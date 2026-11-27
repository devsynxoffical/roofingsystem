import Link from "next/link";
import { preconnect } from "react-dom";
import { BOOKING_PATH } from "../lib/offer";
import { HeroVideo } from "./HeroVideo";

/*
  Homepage hero: full-screen background video (poster first, Vimeo player after load),
  dark brand overlay, two-line headline in the site font, a giant scrolling "engine" line, services strip,
  two calls to action and a proof line. Server component: only the video is client code,
  so the headline paints immediately (it is the page's LCP element).
*/
const SERVICES = ["Facebook Ads", "Roofing SEO", "Landing Pages", "Phone-Verified Leads", "CRM Follow-Up", "Google Ads"];

const PROOF = ["12+ years in roofing growth", "$50M+ in Meta ad spend managed", "$127,500 closed for one Dallas roofer", "90-day written agreement"];

const ENGINE = ["Roofing Client Acquisition", "Booked Inspections", "Signed Roofs"];

const rise = (delay: number) => ({ animation: `fade-up 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s both` });

export function Hero() {
  // Open connections to Vimeo in the <head> so the background video starts sooner.
  for (const host of ["https://player.vimeo.com", "https://f.vimeocdn.com", "https://i.vimeocdn.com", "https://vod-adaptive-ak.vimeocdn.com"]) {
    preconnect(host, { crossOrigin: "anonymous" });
  }
  return (
    <section
      className={`relative isolate flex min-h-[100svh] items-start overflow-hidden bg-[#050506] pb-14 pt-28 text-white md:items-center md:pb-20 md:pt-36`}
    >
      {/* Background: poster paints instantly, video fades in on top after load */}
      <picture>
        <source media="(max-width: 640px)" srcSet="/hero/hero-poster-sm.webp" />
        <img
          src="/hero/hero-poster.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 -z-20">
        <HeroVideo />
      </div>

      {/* Overlays: darken the bright dashboard footage, brand glow, vignette, grid */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#050506]/[0.7] md:bg-[#050506]/[0.62]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, rgba(237,28,36,0.22), transparent 70%), radial-gradient(40% 35% at 85% 75%, rgba(255,107,112,0.12), transparent 70%), linear-gradient(180deg, rgba(5,5,6,0.8) 0%, rgba(5,5,6,0.15) 30%, rgba(5,5,6,0.3) 70%, #050506 100%)",
        }}
      />
      <div aria-hidden="true" className="jobber-grid-dark pointer-events-none absolute inset-0 -z-10 opacity-30" />

      <div className="relative mx-auto w-full max-w-[1340px] px-4 text-center sm:px-6 md:px-8">
        {/* Eyebrow */}
        <p
          style={rise(0.05)}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-200 backdrop-blur-md sm:text-[11px] sm:tracking-[0.22em]"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24] shadow-[0_0_10px_#ed1c24]" />
          Digital Marketing for Roofers Doing $1M+
        </p>

        {/* Headline (H1, LCP: visible from first paint, only the slide is animated) */}
        <h1 className="mx-auto mt-5 max-w-[1240px] md:mt-6">
          <span
            className="block text-[1.9rem] font-medium leading-[1.05] tracking-[-0.03em] text-white/90 sm:text-5xl lg:text-[4rem]"
            style={{ animation: "hero-slide 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            The Roofing Marketing Agency
          </span>
          <span
            className="mt-1 block text-[2rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]"
            style={{ animation: "hero-slide 0.8s cubic-bezier(0.16,1,0.3,1) 0.08s both" }}
          >
            That Builds a <span className="text-gradient-animated">System You Own</span>
          </span>
        </h1>

        {/* Giant engine line, scrolling (decorative) */}
        <div aria-hidden="true" className="marquee-wrap relative -mx-4 mt-6 select-none sm:-mx-6 md:-mx-8 md:mt-10" style={rise(0.35)}>
          <div className="marquee-track-left" style={{ ["--marquee-duration" as string]: "38s" }}>
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center">
                {ENGINE.map((w) => (
                  <span key={w} className="flex items-center">
                    <span className="hero-engine whitespace-nowrap px-4 text-[2.6rem] font-black uppercase leading-none tracking-[-0.05em] sm:text-[5rem] lg:text-[7rem]">
                      {w}
                    </span>
                    <span className="mx-2 text-3xl text-[#ed1c24] drop-shadow-[0_0_18px_rgba(237,28,36,0.8)] sm:text-5xl lg:text-6xl">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p style={rise(0.45)} className="mx-auto mt-6 max-w-[760px] text-[15px] leading-relaxed text-zinc-200 sm:text-xl md:mt-10">
          We run the ads, the roofing SEO, the landing pages and the follow-up, then hand you a client acquisition system your
          company owns. <span className="font-bold text-white">Double your roofing revenue in 90 days</span>, or we keep working at
          no management fee until we do.
        </p>

        {/* Services strip */}
        <ul
          style={rise(0.55)}
          className="mx-auto mt-6 flex max-w-[980px] flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-3xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-md sm:rounded-full sm:px-6"
        >
          {SERVICES.map((s, i) => (
            <li key={s} className="flex items-center text-[12px] font-bold text-[#ff8a8e] sm:text-sm">
              {i > 0 && <span className="mx-2 h-1 w-1 rounded-full bg-[#ed1c24]/70 sm:mx-3" aria-hidden="true" />}
              {s}
            </li>
          ))}
        </ul>

        {/* Calls to action */}
        <div style={rise(0.65)} className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={BOOKING_PATH}
            className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#d4151c] via-[#ed1c24] to-[#ff5a3c] px-8 text-[13px] font-extrabold uppercase tracking-wider text-white shadow-[0_18px_50px_-12px_rgba(237,28,36,0.75)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:text-sm"
          >
            <span className="relative z-10">Book Your Free Strategy Call</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-8 text-[13px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors duration-300 hover:border-[#ed1c24]/70 hover:bg-white/[0.12] sm:w-auto sm:text-sm"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ed1c24]/90 text-[9px]" aria-hidden="true">▶</span>
            See Roofing Case Studies
          </Link>
        </div>

        {/* Proof line */}
        <ul style={rise(0.75)} className="mx-auto mt-8 flex max-w-[1000px] flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[12px] font-semibold text-zinc-300 sm:text-sm">
          {PROOF.map((p, i) => (
            <li key={p} className="flex items-center">
              {i > 0 && <span className="mx-2 h-1 w-1 rounded-full bg-[#ed1c24]" aria-hidden="true" />}
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll cue */}
      <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        <span className="relative h-10 w-[2px] overflow-hidden rounded-full bg-zinc-800">
          <span className="absolute inset-x-0 top-0 h-4 rounded-full bg-[#ed1c24]" style={{ animation: "scroll-y 1.6s ease-in-out infinite" }} />
        </span>
      </div>
    </section>
  );
}
