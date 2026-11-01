"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { BOOKING_PATH } from "../lib/offer";
import { AuroraBg } from "./AuroraBg";
import { CountUp } from "./CountUp";

const trustBadges = [
  "12+ Years Experience",
  "$50M+ Managed in Meta Ads",
  "100% Done-For-You",
];

type HeroCard = {
  src: string;
  alt: string;
  label: string;
  left: string;
  top: string;
  width: number;
  height: number;
  z: number;
  rot: number;
  scale: number;
  floatDur: number;
  delay: number;
};

const heroCards: HeroCard[] = [
  {
    src: "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=900&q=80",
    alt: "Roofing crew installing shingles",
    label: "Full Roof Replacement",
    left: "52%", top: "54%", width: 300, height: 380, z: 20, rot: -2, scale: 1.08,
    floatDur: 6.5, delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1673645652350-6a4c31c1c78f?w=800&q=80",
    alt: "Metal roofing with sky",
    label: "Metal Roofing",
    left: "16%", top: "16%", width: 210, height: 290, z: 10, rot: -10, scale: 0.95,
    floatDur: 8, delay: 0.6,
  },
  {
    src: "https://images.unsplash.com/photo-1755114203680-d39d95efa82c?w=800&q=80",
    alt: "Aerial view of a house roof",
    label: "Residential Roofs",
    left: "81%", top: "14%", width: 215, height: 295, z: 30, rot: 9, scale: 1.02,
    floatDur: 7.2, delay: 1.1,
  },
  {
    src: "https://images.unsplash.com/photo-1599446328861-1e1eca848454?w=800&q=80",
    alt: "Roofer in a hard hat on a roof",
    label: "Certified Crews",
    left: "80%", top: "76%", width: 200, height: 270, z: 15, rot: -5, scale: 0.92,
    floatDur: 8.4, delay: 0.3,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(smy, [0, 1], [8, -8]);
  const rotateY = useTransform(smx, [0, 1], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#09090b] pt-32 pb-24 md:pt-36 md:pb-28 text-white"
    >
      {/* Backdrop */}
      <div className="jobber-grid-dark absolute inset-0 pointer-events-none" aria-hidden="true" />
      <AuroraBg />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <span className="absolute right-[-10%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-zinc-800/80" />
        <span className="absolute right-[2%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[var(--accent)]/25" />
        <span className="absolute right-[9%] top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full border border-[var(--accent)]/40 animate-ping" style={{ animationDuration: "4.5s" }} />
      </div>
      {/* Blend into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <motion.div style={{ y: contentY, opacity: fade }}>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
              Done-For-You Roofing Client Acquisition
            </motion.span>
            <h1 className="font-futura text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3rem]">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.15}
                className="block"
              >
                We Will Install Our Proprietary{" "}
                <span className="text-gradient-animated">Roofing Systems™</span>{" "}
                Into Your Roofing Company...
              </motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-4 text-lg font-bold tracking-tight text-[var(--accent)] sm:text-xl lg:text-2xl"
            >
              Double Your Roofing Revenue Within The Next 90 Days...
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.45}
              className="mt-3 max-w-md text-base font-medium leading-relaxed text-zinc-300 sm:text-lg"
            >
              Or We&apos;ll Continue Working For You At No Management Fee Until We Do.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.55}
              className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-extrabold text-white">
                ✓
              </span>
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                Backed By A Written Agreement.
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.75}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href={BOOKING_PATH}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ed1c24] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_35px_-5px_rgba(237,28,36,0.6)] transition-all duration-300 hover:bg-[#ff2a1f] hover:shadow-[0_0_50px_-5px_rgba(237,28,36,0.85)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Book Your Free Strategy Call</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24]/80 hover:bg-white/[0.12] hover:text-white hover:shadow-[0_0_25px_-5px_rgba(237,28,36,0.3)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>See System Workflow</span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.95}
              className="mt-10 pt-8 border-t border-zinc-800 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-wider"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[9px] font-extrabold text-white">
                    ✓
                  </span>
                  <span>{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D photo stack */}
          <motion.div
            style={{ y: sceneY, opacity: fade }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[560px] [perspective:1200px]"
          >
            <div
              aria-hidden
              className="spin-ring absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-700/70 sm:h-[500px] sm:w-[500px]"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[80px]"
            />

            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative h-[440px] sm:h-[520px]"
            >
              {heroCards.map((card) => (
                <div
                  key={card.src}
                  className="absolute"
                  style={{ left: card.left, top: card.top, zIndex: card.z, transform: "translate(-50%, -50%)" }}
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: card.floatDur, delay: card.delay, ease: "easeInOut" }}
                    style={{ rotate: card.rot, scale: card.scale }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: card.delay + 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                      whileHover={{ scale: 1.04, rotate: 0 }}
                      className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.85)]"
                      style={{ width: card.width, height: card.height }}
                    >
                      <Image
                        src={card.src}
                        alt={card.alt}
                        width={card.width}
                        height={card.height}
                        className="h-full w-full object-cover object-center transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-white">
                        <p className="text-xs font-extrabold tracking-tight">{card.label}</p>
                        <span className="flex h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute left-[-2%] top-[6%] z-40"
            >
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
                <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                  <p className="display text-2xl font-extrabold text-[var(--accent)]">
                    <CountUp end={50} prefix="$" suffix="M+" />
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Managed in Meta Ads
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating chip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute bottom-[4%] right-0 z-40"
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.8 }}>
                <div className="flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/95 px-4 py-2 shadow-xl backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="text-xs font-extrabold text-white">90-Day Written Guarantee</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-8 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
          <span className="relative h-10 w-[2px] overflow-hidden rounded-full bg-zinc-800">
            <motion.span
              aria-hidden
              className="absolute inset-x-0 top-0 h-4 rounded-full bg-[var(--accent)]"
              animate={{ y: [-16, 40] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
