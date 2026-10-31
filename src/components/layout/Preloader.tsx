"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const FORMATS = ["VSLs", "Images", "GIFs", "Videos", "UGC", "AI Videos", "Short Form"];
const DURATION = 2600; // ms for the counter to reach 100
const STORAGE_KEY = "rs-preloader-seen";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let skip = false;
    try {
      skip =
        !!sessionStorage.getItem(STORAGE_KEY) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* noop */
    }
    if (skip) {
      const id = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(id);
    }

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-in-out so it feels like real loading
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setCount(Math.round(eased * 100));
      setWordIndex(Math.min(FORMATS.length - 1, Math.floor(t * FORMATS.length)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else
        setTimeout(() => {
          try {
            sessionStorage.setItem(STORAGE_KEY, "1");
          } catch {
            /* noop */
          }
          setVisible(false);
        }, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.documentElement.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col justify-between overflow-hidden bg-[#070709] px-6 py-6 text-white sm:px-10 sm:py-8"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-live="polite"
          aria-label="Loading"
        >
          {/* glow + grid */}
          <div className="pointer-events-none absolute inset-0">
            <div className="jobber-grid-dark absolute inset-0 opacity-20" />
            <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(237,28,36,0.18),transparent_65%)] blur-2xl" />
          </div>

          {/* top row */}
          <div className="relative flex items-center justify-between">
            <Image src="/logo.png" alt="Roofing Systems Co." width={300} height={100} priority className="h-9 w-auto sm:h-11" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
              Loading creative engine
            </span>
          </div>

          {/* center: cycling formats */}
          <div className="relative flex flex-col items-center text-center">
            <span className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-[#ed1c24] sm:text-xs">
              We create
            </span>
            <div className="relative h-[1.25em] w-full overflow-hidden text-[clamp(3rem,12vw,10rem)] font-extrabold leading-[1.2] tracking-tight">
              <AnimatePresence initial={false}>
                <motion.span
                  key={FORMATS[wordIndex]}
                  className="absolute inset-x-0 top-0 block whitespace-nowrap"
                  initial={{ y: "100%", rotateX: -70, opacity: 0 }}
                  animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                  exit={{ y: "-100%", rotateX: 70, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformPerspective: 800 }}
                >
                  {FORMATS[wordIndex] === "AI Videos" || FORMATS[wordIndex] === "Short Form" ? (
                    <span className="text-gradient-animated">{FORMATS[wordIndex]}</span>
                  ) : (
                    FORMATS[wordIndex]
                  )}
                  <span className="text-[#ed1c24]">.</span>
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {FORMATS.map((f, i) => (
                <span
                  key={f}
                  className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                    i <= wordIndex
                      ? "border-[#ed1c24]/60 bg-[#ed1c24]/10 text-white"
                      : "border-white/10 text-zinc-600"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* bottom: progress + counter */}
          <div className="relative">
            <div className="flex items-end justify-between">
              <span className="max-w-[14rem] text-xs leading-relaxed text-zinc-500 sm:text-sm">
                Scroll-stopping creative for $1M+ roofing companies.
              </span>
              <span className="font-mono text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none tabular-nums">
                {count}
                <span className="text-[#ed1c24]">%</span>
              </span>
            </div>
            <div className="mt-4 h-[2px] w-full overflow-hidden bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#c4181e] to-[#ff2a1f] shadow-[0_0_12px_#ed1c24]"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
