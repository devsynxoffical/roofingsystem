"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, Play } from "lucide-react";
import { caseMedia, type CaseStudy } from "@/lib/caseStudies";

// short labels so the metric pill never truncates
const short = (l: string) =>
  l
    .toLowerCase()
    .replace(/cost per lead|per lead/, "CPL")
    .replace(/^(otp-verified|verified|qualified|website|homeowner|pre-qualified|validated) leads$/, "leads")
    .replace("closed deals", "closed");

/** Interactive case study card: 3D tilt + glare toward the cursor, muted video preview on hover. */
export function ShowcaseCard({ c, index }: { c: CaseStudy; index: number }) {
  const m = caseMedia(c);
  const href = `/case-studies/${c.slug}`;
  const pill = c.metrics
    .slice(0, 2)
    .map((x) => `${x.value} ${short(x.label)}`)
    .join("  |  ");

  const videoRef = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 220, damping: 22 });
  const glare = useTransform([mx, my], ([x, y]) => `radial-gradient(circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,255,255,0.18), transparent 55%)`);

  const enter = () => {
    if (!m.video || window.matchMedia("(hover: none)").matches) return;
    setPreviewing(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };
  const leave = () => {
    mx.set(0.5);
    my.set(0.5);
    setPreviewing(false);
    videoRef.current?.pause();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.09 }}
      style={{ perspective: 1100 }}
      className="h-full"
    >
      <motion.article
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width);
          my.set((e.clientY - r.top) / r.height);
        }}
        onPointerEnter={enter}
        onPointerLeave={leave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0e0e11] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow] duration-500 hover:border-white/35 hover:shadow-[0_45px_80px_-30px_rgba(0,0,0,0.95)]"
      >
        {/* media */}
        <Link href={href} className="relative block aspect-[1/1.05] overflow-hidden bg-[#09090b]" aria-label={c.title}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m.poster} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={m.poster}
            alt={c.title}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 group-hover:scale-[1.05] ${previewing ? "opacity-0" : "opacity-100"}`}
          />
          {m.video && (
            <video
              ref={videoRef}
              src={m.video}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${previewing ? "opacity-100" : "opacity-0"}`}
            />
          )}
          <motion.span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glare }} />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0e0e11] to-transparent" />
          {m.video && (
            <span
              className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur transition-all duration-300 ${
                previewing ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" /> Preview
            </span>
          )}
          <span
            className="absolute bottom-3 right-3 max-w-[calc(100%-1.5rem)] truncate whitespace-pre rounded-full bg-gradient-to-r from-[#ed1c24] to-[#ff4d55] px-3.5 py-1.5 text-[12px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(237,28,36,0.8)] ring-1 ring-white/20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
            style={{ transform: "translateZ(30px)" }}
          >
            {pill}
          </span>
        </Link>

        {/* text */}
        <div className="flex flex-1 flex-col px-5 pb-5 pt-4" style={{ transform: "translateZ(20px)" }}>
          <h3 className="line-clamp-2 text-[1.02rem] font-bold leading-snug tracking-tight text-white">
            <Link href={href} className="transition-colors hover:text-[#ff6b70]">
              {c.title}
            </Link>
          </h3>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 mt-auto">
            <Link
              href={href}
              className="group/btn inline-flex items-center gap-1.5 rounded-full border border-[#ed1c24]/50 px-4 py-2 text-[13px] font-bold text-[#ff6b70] transition hover:border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white"
            >
              View Breakdown <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
            {m.video ? (
              <Link href={href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-300 transition hover:text-white">
                <Play className="h-3.5 w-3.5" /> Play Video
              </Link>
            ) : (
              <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-300 transition hover:text-white">
                <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" /> View Proof
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
