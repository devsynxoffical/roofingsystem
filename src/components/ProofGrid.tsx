"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TiltCard } from "./TiltCard";

const BASE = 400;
const MAX = 1640;

export function ProofGrid({ files }: { files: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {files.map((file) => {
          const height = expanded ? MAX : BASE;
          return (
            <TiltCard
              key={file}
              className="bg-white border border-zinc-200 shadow-sm"
            >
              <div className="flex h-full flex-col p-2">
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-zinc-100 transition-[height] duration-500 ease-out"
                  style={{ height }}
                >
                  <Image
                    src={`/media/proof/${file}`}
                    alt="Roofing campaign dashboard result"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-2 pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                      Campaign dashboard
                    </p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                      Live roofing result
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(file)}
                    className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    View full ↗
                  </button>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="rounded-full border border-zinc-200 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {expanded ? "Show less ↑" : "See more ↓"}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Campaign dashboard full view"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-black/80"
            onClick={() => setOpen(null)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="max-h-[88vh] w-auto max-w-[92vw] overflow-auto rounded-xl bg-white p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/media/proof/${open}`}
              alt="Roofing campaign dashboard result"
              width={1200}
              height={2000}
              className="h-auto max-h-[86vh] w-auto object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
