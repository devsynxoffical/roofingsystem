"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/TiltCard";

const DASHBOARDS = [
  { file: "proof-695d97e2.png", label: "Campaign Dashboard #1" },
  { file: "proof-695d9820.png", label: "Campaign Dashboard #2" },
];

const COLLAPSED_H = 420;
const EXPANDED_H = 1800;

export function Results() {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  /* Close lightbox on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const height = expanded ? EXPANDED_H : COLLAPSED_H;

  return (
    <>
      <Section id="results" className="bg-ink">
        <SectionHeading
          eyebrow="Proven results"
          title={
            <>
              Real campaigns.{" "}
              <em className="font-semibold not-italic text-lime">
                Real numbers.
              </em>
            </>
          }
          subtitle="Live dashboards from roofing campaigns we've managed — real spend, real leads, real revenue. No mock-ups, no projections."
        />

        {/* Screenshot grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {DASHBOARDS.map((item, i) => (
            <Reveal key={item.file} delay={i * 0.08} y={40}>
              <TiltCard className="border border-line bg-panel">
                <div className="flex h-full flex-col p-2">
                  {/* Image container with expand/collapse */}
                  <div
                    className="relative w-full overflow-hidden rounded-xl bg-zinc-900 transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ height }}
                  >
                    <Image
                      src={`/media/proof/${item.file}`}
                      alt={item.label}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Fade overlay at bottom when collapsed */}
                    {!expanded && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-900 to-transparent" />
                    )}
                  </div>

                  {/* Card footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-2 pt-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-dim">
                        Campaign dashboard
                      </p>
                      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-lime">
                        Live roofing result
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLightbox(item.file)}
                      className="rounded-full border border-line-strong px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-fog transition hover:border-lime hover:text-lime"
                    >
                      View full ↗
                    </button>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Single centered "See more" button for both */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-line-strong bg-panel px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-fog transition-all duration-300 hover:border-lime hover:text-lime hover:shadow-[0_0_30px_-8px_rgba(237,28,36,0.35)]"
            >
              <span className="relative z-10">
                {expanded ? "Show less" : "See more"}
              </span>
              <svg
                viewBox="0 0 24 24"
                className={`relative z-10 h-4 w-4 transition-transform duration-500 ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
              {/* Hover glow */}
              <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-[var(--accent)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </Reveal>
      </Section>

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full campaign dashboard view"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-black/80"
            onClick={() => setLightbox(null)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="max-h-[90vh] w-auto max-w-[94vw] overflow-auto rounded-xl bg-zinc-950 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/media/proof/${lightbox}`}
              alt="Campaign dashboard full view"
              width={1200}
              height={2400}
              className="h-auto max-h-[88vh] w-auto rounded-lg object-contain"
              sizes="92vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
