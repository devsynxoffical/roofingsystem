"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Megaphone, Layers, Clock, ShieldAlert, CheckCircle2, type LucideIcon } from "lucide-react";

type Card = {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  stat: number;
  suffix: string;
  statLabel: string;
};

const PAIN_CARDS: Card[] = [
  {
    num: "01",
    icon: Megaphone,
    title: "Ads Without A Funnel",
    body: "Agencies run ads and call it marketing. Raw clicks don't book roof inspections — only a pre-sold journey does.",
    stat: 94,
    suffix: "%",
    statLabel: "Clicks wasted",
  },
  {
    num: "02",
    icon: Layers,
    title: "Funnels Nobody Owns",
    body: "One vendor builds pages, another runs traffic. Handoffs break and roofing leads drop through the cracks.",
    stat: 70,
    suffix: "%",
    statLabel: "Pipeline leaked",
  },
  {
    num: "03",
    icon: Clock,
    title: "Copy Without Follow-Up",
    body: "Great copy gets attention, but follow-up is where storm deals are won. 80% of sales require 5+ touchpoints.",
    stat: 80,
    suffix: "%",
    statLabel: "Sales need 5+ follow-ups",
  },
  {
    num: "04",
    icon: ShieldAlert,
    title: "No Single Ecosystem",
    body: "When customer journeys are fragmented across tools & freelancers, nothing compounds into scalable growth.",
    stat: 0,
    suffix: "",
    statLabel: "Unified system ownership",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- Headline: each word flips up in 3D ---------- */
function FlipWords({ text, className, delay = 0, show }: { text: string; className?: string; delay?: number; show: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" style={{ perspective: 600 }}>
          <motion.span
            className={`inline-block origin-bottom ${className ?? ""}`}
            initial={{ rotateX: -95, y: "60%", opacity: 0 }}
            animate={show ? { rotateX: 0, y: "0%", opacity: 1 } : undefined}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.05 }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ---------- Count-up stat ---------- */
function Stat({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || value === 0) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/* ---------- 3D card: scroll-driven entrance + mouse tilt + glare ---------- */
function PainCard({ card, index, progress }: { card: Card; index: number; progress: MotionValue<number> }) {
  const Icon = card.icon;

  // Scroll entrance: cards rise from a tilted "floor" one after another
  const start = index * 0.08;
  const end = start + 0.45;
  const rotateXScroll = useTransform(progress, [start, end], [65, 0]);
  const yScroll = useTransform(progress, [start, end], [160, 0]);
  const zScroll = useTransform(progress, [start, end], [-320, 0]);
  const opacity = useTransform(progress, [start, start + 0.2], [0, 1]);

  // Mouse tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(my, [0, 1], [12, -12]), { stiffness: 200, damping: 20 });
  const tiltY = useSpring(useTransform(mx, [0, 1], [-14, 14]), { stiffness: 200, damping: 20 });
  const rotateX = useTransform([rotateXScroll, tiltX], ([a, b]) => (a as number) + (b as number));
  const glareX = useTransform(mx, (v) => `${v * 100}%`);
  const glareY = useTransform(my, (v) => `${v * 100}%`);
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(237,28,36,0.28), transparent 55%)`
  );

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY: tiltY, y: yScroll, z: zScroll, opacity, transformStyle: "preserve-3d" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="group relative h-full will-change-transform"
    >
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#16161b] to-[#0e0e11] p-6 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:border-[#ed1c24]/50"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* glare follows cursor */}
        <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glare }} />
        {/* giant ghost number in the back layer */}
        <span
          className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[7rem] font-black leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-[#ed1c24]/10"
          style={{ transform: "translateZ(-20px)" }}
        >
          {card.num}
        </span>

        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
          <div className="flex items-center justify-between">
            <motion.div
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ed1c24]/30 bg-[#ed1c24]/10 text-[#ed1c24] shadow-[0_0_25px_-5px_rgba(237,28,36,0.5)]"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: index * 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
            <span className="font-mono text-xs font-bold text-zinc-500 transition-colors group-hover:text-[#ed1c24]">
              {card.num}
            </span>
          </div>
          <h3 className="mt-5 text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#ed1c24]">
            {card.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">{card.body}</p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4" style={{ transform: "translateZ(70px)" }}>
          <span className="font-mono text-2xl font-extrabold text-[#ed1c24] drop-shadow-[0_0_12px_rgba(237,28,36,0.5)]">
            <Stat value={card.stat} suffix={card.suffix} />
          </span>
          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">{card.statLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Section ---------- */
export function WhyScale() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingIn = useInView(headingRef, { once: true, margin: "0px 0px -15% 0px" });

  const { scrollYProgress: gridProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "center center"],
  });
  const smooth = useSpring(gridProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const floorShift = useTransform(sectionProgress, [0, 1], ["0%", "50%"]);
  const ringRotate = useTransform(sectionProgress, [0, 1], [0, 220]);
  const headlineZ = useTransform(sectionProgress, [0, 0.35], [-200, 0]);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-white/10 bg-[#09090b] py-20 sm:py-28"
    >
      {/* ===== 3D background ===== */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* perspective grid floor */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] overflow-hidden [perspective:600px]">
          <motion.div
            className="absolute inset-x-[-50%] top-0 h-[200%] origin-top"
            style={{
              rotateX: 68,
              backgroundPositionY: floorShift,
              backgroundImage:
                "linear-gradient(rgba(237,28,36,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(237,28,36,0.22) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, transparent, black 25%, black 50%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%, black 50%, transparent)",
            }}
          />
        </div>
        {/* rotating 3D rings */}
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2 [perspective:1000px]">
          <motion.div style={{ rotateY: ringRotate, rotateX: 72, transformStyle: "preserve-3d" }} className="relative h-[34rem] w-[34rem]">
            <div className="absolute inset-0 rounded-full border border-[#ed1c24]/25 shadow-[0_0_60px_rgba(237,28,36,0.15)]" />
            <div className="absolute inset-12 rounded-full border border-dashed border-white/10" />
            <div className="absolute inset-24 rounded-full border border-[#ed1c24]/15" />
          </motion.div>
        </div>
        <div className="absolute left-1/2 top-1/3 h-[35rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.14),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        {/* Header */}
        <motion.div className="mx-auto max-w-3xl text-center [transform-style:preserve-3d]" style={{ z: headlineZ, transformPerspective: 1000 }}>
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" />
            Why Growth Stalls
          </motion.span>

          <h2 ref={headingRef} className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            <FlipWords show={headingIn} text="Most roofing companies don't have a lead problem..." />
            <br />
            <FlipWords show={headingIn} text="they have a" delay={0.4} />{" "}
            <FlipWords show={headingIn} text="client acquisition system problem." className="text-gradient-animated" delay={0.55} />
          </h2>

          <motion.p
            className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-[1rem]"
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}
          >
            When agencies only run ads or freelancers only build pages, nobody owns the customer journey. Here are the 4
            critical leaks draining your ad spend.
          </motion.p>
        </motion.div>

        {/* 3D card stage */}
        <div ref={gridRef} className="mt-14 [perspective:1400px]">
          <div className="grid gap-5 [transform-style:preserve-3d] sm:grid-cols-2 lg:grid-cols-4">
            {PAIN_CARDS.map((card, i) => (
              <PainCard key={card.title} card={card} index={i} progress={smooth} />
            ))}
          </div>
        </div>

        {/* Bottom solution banner */}
        <motion.div
          className="mt-10 rounded-2xl border border-[#ed1c24]/30 bg-[#ed1c24]/10 p-6 backdrop-blur-md"
          initial={{ opacity: 0, rotateX: -40, y: 40 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
          style={{ transformPerspective: 1000, transformOrigin: "top center" }}
        >
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24] text-white shadow-lg">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <p className="text-xs font-medium leading-relaxed text-zinc-200 sm:text-sm">
              At <strong className="font-bold text-white">Roofing Systems Co.</strong>, we build one complete ecosystem where
              every part works together — from the first click to a{" "}
              <span className="font-bold text-white underline decoration-[#ed1c24]">qualified homeowner sitting on your calendar.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
