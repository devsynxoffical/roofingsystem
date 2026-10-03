"use client";

import Image from "next/image";

const logos = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/media/logos/logo-${n}.png`;
});

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#09090b] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#09090b] to-transparent md:w-24" />
      <div
        className={`${reverse ? "marquee-track-reverse" : "marquee-track"} items-center gap-8 px-4 md:gap-10`}
      >
        {items.map((src, i) => (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt={`Partner logo ${i + 1}`}
            width={207}
            height={207}
            className="h-24 w-auto shrink-0 opacity-70 transition duration-500 hover:scale-105 hover:opacity-100 md:h-28"
          />
        ))}
      </div>
    </div>
  );
}

export function LogoStrip() {
  return (
    <section className="border-b border-zinc-800 bg-[#09090b] pb-14 md:pb-16">
      <div className="mx-auto mb-8 max-w-7xl px-5 text-center md:px-8">
        <div className="pill-badge-red mx-auto w-fit">
          <span className="dot-red" />
          <span>Brands we work with</span>
        </div>
        <h2 className="display mt-3 text-2xl text-white md:text-3xl">
          Roofing companies. One ads system.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">
          Operators across every roofing niche, from residential replacements
          to commercial storm work, running the same acquisition machine.
        </p>
      </div>
      <Row />
      <div className="mt-3">
        <Row reverse />
      </div>
    </section>
  );
}
