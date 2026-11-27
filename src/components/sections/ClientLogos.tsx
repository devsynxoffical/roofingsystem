/*
  "Trusted by" client logo strip, shown directly under the homepage hero.
  Each logo file is trimmed to its artwork, and w/h are display sizes balanced by visual
  area (wide wordmarks get less height, compact marks more), so the row reads as one even
  line. One seamless CSS marquee: no JavaScript, pauses on hover, and becomes a static
  wrapped grid for visitors who ask for reduced motion.
*/
const LOGOS: { src: string; alt: string; w: number; h: number }[] = [
  { src: "/logos/clients/client-01.webp", alt: "Wealthery", w: 88, h: 59 },
  { src: "/logos/clients/client-02.webp", alt: "Simple 4U", w: 72, h: 72 },
  { src: "/logos/clients/client-03.webp", alt: "Growth Foundry", w: 119, h: 44 },
  { src: "/logos/clients/client-04.webp", alt: "Client monogram logo", w: 82, h: 63 },
  { src: "/logos/clients/client-05.webp", alt: "Keychain", w: 96, h: 54 },
  { src: "/logos/clients/client-06.webp", alt: "Sova House", w: 49, h: 72 },
  { src: "/logos/clients/client-07.webp", alt: "Collins Mobile", w: 70, h: 72 },
  { src: "/logos/clients/client-08.webp", alt: "Lucky Growth Partners", w: 88, h: 59 },
  { src: "/logos/clients/client-10.webp", alt: "Heritage Outdoor Living", w: 96, h: 54 },
  { src: "/logos/clients/client-11.webp", alt: "Master Roofing", w: 102, h: 51 },
  { src: "/logos/clients/client-12.webp", alt: "Physical Evidence Bio-Optimization Center", w: 112, h: 46 },
  { src: "/logos/clients/client-13.webp", alt: "T-Mobile", w: 121, h: 27 },
  { src: "/logos/clients/client-15.webp", alt: "Insane Biz Growth", w: 83, h: 63 },
  { src: "/logos/clients/client-16.webp", alt: "Spark Marketing", w: 134, h: 35 },
  { src: "/logos/clients/client-17.webp", alt: "Dr. Bea Merscher Kinderheilkunde", w: 72, h: 72 },
  { src: "/logos/clients/client-18.webp", alt: "Canada Solar Now", w: 135, h: 29 },
  { src: "/logos/clients/client-19.webp", alt: "ADA Comply Guy", w: 114, h: 46 },
  { src: "/logos/clients/client-20.webp", alt: "Grand Canyon Home Services", w: 79, h: 66 },
  { src: "/logos/clients/client-21.webp", alt: "Marching Maids Referral Agency", w: 78, h: 67 },
  { src: "/logos/clients/client-22.webp", alt: "Heart Heating, Cooling, Plumbing, Electric", w: 126, h: 35 },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="client-logos-row flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {LOGOS.map((l) => (
        <li key={l.src} className="flex h-[72px] shrink-0 items-center justify-center px-6 sm:px-9 md:h-[88px] md:px-11">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={l.src}
            alt={hidden ? "" : l.alt}
            width={l.w}
            height={l.h}
            loading="lazy"
            decoding="async"
            className="client-logo h-auto max-w-none opacity-70 transition-opacity duration-300 hover:opacity-100"
            style={{ width: `calc(${l.w}px * var(--logo-scale))` }}
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientLogos() {
  return (
    <section aria-label="Trusted by our clients" className="client-logos relative border-y border-zinc-200 bg-white py-8 text-zinc-900 md:py-10">
      <p className="mx-auto flex max-w-[1240px] items-center justify-center gap-4 px-5 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-500 md:text-xs">
        <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-zinc-300 sm:block" aria-hidden="true" />
        Trusted by our clients
        <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-zinc-300 sm:block" aria-hidden="true" />
      </p>
      <div className="marquee-wrap mt-5 md:mt-6">
        <div className="client-logos-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
