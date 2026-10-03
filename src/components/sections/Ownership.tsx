"use client";

import { useEffect, useRef, Fragment } from "react";
import { KeyRound, ArrowRight, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { gsap, prefersReducedMotion, EASE } from "@/lib/motion";
import { ownershipSteps, ownershipAssets } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Ownership() {
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = flowRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll(".own-step, .own-conn"), { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 72%", once: true },
      });

      tl.fromTo(
        el.querySelectorAll(".own-step"),
        { opacity: 0, y: 48, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: EASE.outExpo, stagger: 0.18 }
      );

      el.querySelectorAll(".own-conn").forEach((conn, i) => {
        const line = conn.querySelector(".own-conn-line");
        const arrow = conn.querySelector(".own-conn-arrow");
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.6, ease: "power2.inOut", transformOrigin: "left" },
            i === 0 ? "-=0.7" : "-=0.55"
          );
        }
        if (arrow) {
          tl.fromTo(arrow, { opacity: 0, x: -8 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.35");
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="ownership">
      <SectionHeading
        eyebrow="No hostage-holding"
        title={
          <>
            Unlike most agencies...{" "}
            <em className="font-semibold not-italic text-lime">you own everything.</em>
          </>
        }
        subtitle="When we build your roofing Client Acquisition System, it becomes your business asset. No lock-ins, no hidden ownership, no dependence on another agency."
      />

      <div ref={flowRef} className="mx-auto max-w-4xl">
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {ownershipSteps.map((s, i) => (
            <Fragment key={s.step}>
              <div
                className={cn(
                  "own-step group relative flex-1 rounded-3xl border bg-panel p-7 text-center transition-colors duration-500 sm:p-9",
                  i === 2
                    ? "border-lime/40 bg-gradient-to-b from-lime/[0.09] to-panel"
                    : "border-line hover:border-line-strong"
                )}
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  {i === 2 ? <KeyRound className="h-6 w-6" strokeWidth={1.75} /> : <Sparkles className="h-6 w-6" strokeWidth={1.75} />}
                </span>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-dim">
                  {s.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-fog sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{s.body}</p>
              </div>

              {i < ownershipSteps.length - 1 && (
                <div className="own-conn flex items-center justify-center lg:w-16" aria-hidden="true">
                  <div className="flex w-full flex-col items-center lg:w-auto">
                    <span className="own-conn-line h-px w-full origin-left bg-gradient-to-r from-lime/20 to-lime lg:h-px lg:w-16" />
                    <ArrowRight className="own-conn-arrow -mt-[7px] h-3.5 w-3.5 text-lime lg:-mt-[7px]" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Assets */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl border border-line bg-panel/60 p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
                You own
              </p>
              <p className="text-xs text-lime">Written into the agreement</p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {ownershipAssets.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-line bg-ink/60 px-4 py-2 text-sm text-mist transition-colors duration-300 hover:border-lime/40 hover:text-fog"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
