"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Scale, PenLine, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { gsap, prefersReducedMotion, EASE } from "@/lib/motion";
import { site } from "@/lib/site";
import Link from "next/link";

const PARTICLES = [
  { top: "15%", left: "6%", size: 6, delay: "0s", color: "#ed1c24" },
  { top: "28%", left: "92%", size: 4, delay: "1.2s", color: "#ff7a90" },
  { top: "68%", left: "4%", size: 5, delay: "0.6s", color: "#ff2a1f" },
  { top: "82%", left: "88%", size: 4, delay: "1.8s", color: "#ed1c24" },
];

const POINTS = [
  {
    title: "Written Into Every Engagement",
    desc: "Binding contractual guarantee included standard in every single client agreement.",
  },
  {
    title: "Covers Mutually Agreed Growth Milestones",
    desc: "Target metrics defined and agreed upon together prior to launch.",
  },
  {
    title: "No Management Fee Until We Deliver",
    desc: "We work completely free of management fees if milestones aren't hit in 90 days.",
  },
];

function ContractDoc() {
  const docRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = docRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
        defaults: { ease: EASE.outExpo },
      });

      tl.fromTo(
        el,
        { y: 40, rotateX: 10, opacity: 0 },
        { y: 0, rotateX: 0, opacity: 1, duration: 1.1 }
      );

      tl.fromTo(
        el.querySelectorAll(".spec-item"),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        "-=0.6"
      );

      tl.fromTo(
        el.querySelector(".doc-sign"),
        { scale: 0, rotate: -10 },
        { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2.2)" },
        "-=0.3"
      );

      tl.fromTo(
        el.querySelector(".doc-stamp"),
        { scale: 2.2, opacity: 0, rotate: -30 },
        { scale: 1, opacity: 1, rotate: -14, duration: 0.5, ease: "back.out(2.8)" },
        "-=0.2"
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={docRef}
      className="relative mx-auto w-full max-w-lg rounded-3xl border border-white/20 bg-[#0d0e14]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_30px_70px_-15px_rgba(237,28,36,0.3)] transition-all duration-500 hover:border-[#ed1c24]/50"
    >
      {/* Background ambient laser glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ed1c24] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[#ed1c24] opacity-15 blur-3xl" />

      {/* Top Bar / Header */}
      <div className="flex items-center justify-between pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ed1c24]/15 border border-[#ed1c24]/40 text-[#ed1c24] shadow-[0_0_15px_rgba(237,28,36,0.3)]">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <span className="block font-futura text-base font-extrabold tracking-tight text-white">
              Roofing Systems™
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Contract #90D-DFY-GUARANTEE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Verified
        </div>
      </div>

      {/* Agreement Specifications Grid */}
      <div className="mt-6 space-y-3">
        <div className="spec-item flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-[#ed1c24]" />
            <span className="text-xs font-semibold text-zinc-300">Growth Milestone</span>
          </div>
          <span className="font-mono text-xs font-bold text-white">2X Revenue (90 Days)</span>
        </div>

        <div className="spec-item flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-[#ed1c24]" />
            <span className="text-xs font-semibold text-zinc-300">Management Fee</span>
          </div>
          <span className="font-mono text-xs font-bold text-emerald-400">$0 / Free Until Target Met</span>
        </div>

        <div className="spec-item flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <Lock className="h-4 w-4 text-[#ed1c24]" />
            <span className="text-xs font-semibold text-zinc-300">Contract Binding</span>
          </div>
          <span className="font-mono text-xs font-bold text-white">100% Written Agreement</span>
        </div>
      </div>

      {/* Signature & Seal Footer */}
      <div className="mt-7 flex items-end justify-between pt-5 border-t border-white/10">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-400">
            Executed & Certified
          </p>
          <svg viewBox="0 0 120 45" className="doc-sign mt-1 h-12 w-32" fill="none" aria-hidden="true">
            <path
              d="M4 38 C 22 8, 34 28, 44 14 C 52 5, 60 36, 74 20 C 84 8, 92 30, 104 12 C 110 4, 114 8, 116 6"
              stroke="#ed1c24"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="block font-mono text-[9px] text-zinc-400 mt-1">Roofing Systems Co. Leadership</span>
        </div>

        {/* 3D Holographic Stamp */}
        <div
          className="doc-stamp flex h-24 w-24 rotate-[-14deg] items-center justify-center rounded-full border-4 border-double border-[#ed1c24] bg-gradient-to-br from-[#ed1c24]/20 via-[#ed1c24]/10 to-transparent shadow-[0_0_30px_rgba(237,28,36,0.4)] backdrop-blur-md"
        >
          <span className="text-center font-mono text-[10px] font-extrabold uppercase leading-tight tracking-wider text-white">
            100% <br />
            RISK-FREE <br />
            <span className="text-[#ed1c24]">90-DAY</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function Guarantee() {
  return (
    <Section id="guarantee" className="relative overflow-hidden bg-[#070709] py-20 sm:py-28 border-y border-white/10">
      {/* Background radial laser effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="jobber-grid-dark absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[45rem] w-[65rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.16),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/30 to-transparent" />

        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute animate-float rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0.5,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#ed1c24]/10 border border-[#ed1c24]/30 px-4 py-1.5 shadow-[0_0_20px_rgba(237,28,36,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ed1c24] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ed1c24]"></span>
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
                  Risk Reversed
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                We take the risk... <br />
                <span className="text-gradient-animated">
                  not you.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-pretty text-base sm:text-lg leading-relaxed text-zinc-300">
                If we don&apos;t help you achieve the mutually agreed growth milestones within the
                first 90 days after implementing your roofing Client Acquisition System, we&apos;ll
                continue working for you at{" "}
                <strong className="text-white font-bold underline decoration-[#ed1c24] underline-offset-4">
                  no management fee
                </strong>{" "}
                until we do. Everything is backed by a written agreement.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-7 grid gap-3.5">
                {POINTS.map((pt) => (
                  <div
                    key={pt.title}
                    className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4.5 backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24]/50 hover:bg-white/[0.06] hover:translate-x-1"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]/15 border border-[#ed1c24]/30 text-[#ed1c24] transition-transform duration-300 group-hover:scale-110">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base leading-snug">{pt.title}</h4>
                      <p className="mt-0.5 text-xs text-zinc-400 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href={site.bookCallUrl}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ed1c24] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_35px_-5px_rgba(237,28,36,0.6)] transition-all duration-300 hover:bg-[#ff2a1f] hover:shadow-[0_0_50px_-5px_rgba(237,28,36,0.85)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Claim a Strategy Call</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2.5 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2.5 text-xs text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span>Spots are extremely limited each month.</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Holographic Digital Contract Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <ContractDoc />

            <div className="animate-float-slow absolute -right-2 -top-6 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl border border-[#ed1c24]/40 bg-[#ed1c24]/15 backdrop-blur-md shadow-[0_0_25px_rgba(237,28,36,0.35)] hidden sm:flex lg:-right-6">
              <PenLine className="h-6 w-6 text-[#ed1c24]" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
