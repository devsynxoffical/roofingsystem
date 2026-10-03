"use client";

import { useState } from "react";
import Image from "next/image";
import { BOOKING_PATH } from "../../lib/offer";
import { Reveal } from "../Reveal";
import { SplitReveal } from "./SplitReveal";
import { Button } from "./Button";

const accordionItems = [
  {
    id: 1,
    title: "Roof Replacement",
    imageUrl: "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Storm & Insurance Repair",
    imageUrl: "https://images.unsplash.com/photo-1669215526577-c25a8f063677?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Metal Roofing",
    imageUrl: "https://images.unsplash.com/photo-1673645652350-6a4c31c1c78f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Residential Shingles",
    imageUrl: "https://images.unsplash.com/photo-1590365876016-da05ac533e83?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Commercial & Tile",
    imageUrl: "https://images.unsplash.com/photo-1528223871781-8f4c984f6164?q=80&w=1600&auto=format&fit=crop",
  },
];

function AccordionItem({
  item,
  isActive,
  onSelect,
}: {
  item: (typeof accordionItems)[number];
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onSelect}
      onMouseEnter={onSelect}
      style={{ width: isActive ? "58%" : "9%" }}
      className={`
        relative flex-none overflow-hidden rounded-2xl cursor-pointer text-left outline-none
        transition-all duration-700 ease-in-out
      `}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35 transition-colors duration-500" />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{ background: isActive ? "linear-gradient(to top, rgba(9,9,11,0.85), transparent 65%)" : "none" }}
      />
      <span
        className={`
          absolute text-white font-extrabold tracking-tight transition-all duration-300 ease-in-out
          ${isActive
            ? "bottom-6 left-6 -translate-x-0 translate-y-0 rotate-0 text-base sm:text-lg"
            : "bottom-10 left-1/2 -translate-x-1/2 rotate-90 text-sm sm:text-base whitespace-nowrap origin-bottom"}
        `}
      >
        {item.title}
      </span>
    </button>
  );
}

export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="roofing-work" className="section-shell bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
          <div className="w-full md:w-[38%] text-center md:text-left">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ed1c24]">
              <span className="inline-block h-px w-8 bg-[#ed1c24]" />
              The Work We Scale
            </span>
            <SplitReveal as="h2" mode="lines" className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
              From Shingles To Steel.{" "}
              <span className="text-gradient-animated">One Roof At A Time.</span>
            </SplitReveal>
            <p className="mt-5 text-base sm:text-lg text-zinc-500 leading-relaxed">
              Residential, commercial, storm damage, metal, tile — our
              acquisition system fills pipelines for every type of roofing
              company, with homeowners who are ready to invest.
            </p>
            <Button
              href={BOOKING_PATH}
              variant="primary"
              size="lg"
              className="mt-7"
            >
              Get Roofs In Your Pipeline
            </Button>
          </div>

          <div className="w-full md:w-[62%]">
            <div
              className="relative flex h-[420px] sm:h-[480px] w-full items-stretch justify-between"
              onMouseLeave={() => setActiveIndex(0)}
            >
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
