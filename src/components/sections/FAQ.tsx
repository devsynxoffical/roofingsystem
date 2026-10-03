"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { faqs, faqCategories } from "@/lib/data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function FaqItem({
  q,
  a,
  index,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <Reveal delay={Math.min(index * 0.04, 0.3)} y={18}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border transition-colors duration-500",
          open ? "border-lime/30 bg-panel" : "border-line bg-panel/50 hover:border-line-strong"
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
        >
          <span className="flex items-center gap-4">
            <span className="hidden font-mono text-[10px] text-dim sm:inline">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={cn("text-[1rem] font-semibold tracking-tight sm:text-lg", open ? "text-fog" : "text-mist")}>
              {q}
            </span>
          </span>
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
              open ? "rotate-180 border-lime bg-lime text-white" : "border-line text-dim"
            )}
          >
            <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>
        <div
          id={`faq-panel-${index}`}
          role="region"
          className={cn(
            "grid transition-all duration-500 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-6 pl-14 text-sm leading-relaxed text-mist sm:px-8 sm:pl-16">
              {a}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const inCategory = category === "All" || f.category === category;
      const inQuery =
        !q ||
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [category, query]);

  return (
    <Section id="faq" className="theme-light">
      <SectionHeading
        eyebrow="Questions, answered"
        title={
          <>
            Everything you{" "}
            <em className="font-semibold not-italic text-lime">want to know.</em>
          </>
        }
        subtitle="Straight answers — no fine print, no runaround. If your question isn't here, book a call and ask us directly."
      />

      {/* Controls */}
      <Reveal>
        <div className="mx-auto mb-8 flex max-w-3xl flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dim" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              aria-label="Search FAQ"
              className="w-full rounded-full border border-line bg-panel/70 py-3 pl-11 pr-4 text-sm text-fog placeholder:text-dim focus:border-lime/50 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter FAQ by category">
            {faqCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => {
                  setCategory(c);
                  setActive(null);
                }}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                  category === c
                    ? "border-lime bg-lime text-white"
                    : "border-line text-mist hover:border-line-strong hover:text-fog"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-3.5">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-mist">
            No results for “{query}”. Try a different search.
          </p>
        ) : (
          filtered.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              index={i}
              open={active === i}
              onToggle={() => setActive(active === i ? null : i)}
            />
          ))
        )}
      </div>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 text-center">
          <p className="text-sm text-dim">Still have questions?</p>
          <Button href={site.bookCallUrl} variant="outline" icon="up-right" ariaLabel="Ask us on a free strategy call">
            Ask us on a free strategy call
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
