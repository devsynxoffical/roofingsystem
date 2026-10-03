import { Reveal } from "./Reveal";
import { AuroraBg } from "./AuroraBg";
import { Marquee } from "./ui/Marquee";
import { SplitReveal } from "./ui/SplitReveal";

const testimonialsRow1 = [
  {
    quote:
      "We went from 8 calls a week to 40+ booked inspections in 60 days. The qualification system is a game changer.",
    name: "Marcus D.",
  },
  {
    quote:
      "First agency that actually owns the funnel for us. Cost per lead dropped 50% within the first month.",
    name: "Sarah K.",
  },
  {
    quote:
      "The AI follow-up alone paid for the whole system. No more roof repair leads dying in the inbox.",
    name: "James R.",
  },
  {
    quote:
      "We booked $635K in roofing projects from just $29K in ad spend. The math finally works.",
    name: "Daniel T.",
  },
];

const testimonialsRow2 = [
  {
    quote:
      "Everything is in writing. They put their money where their mouth is with the 90-day guarantee.",
    name: "Chris M.",
  },
  {
    quote:
      "Their team runs our ads, CRM, and follow-ups. We just run inspections and close roofing jobs.",
    name: "Aaron B.",
  },
  {
    quote:
      "Premium homeowners, not price shoppers. The lead quality completely changed our sales process.",
    name: "Mike P.",
  },
  {
    quote:
      "Went from chasing leads to a pipeline that books itself. Hands down the best money we&apos;ve spent.",
    name: "Tony S.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[#ed1c24]" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: { quote: string; name: string } }) {
  return (
    <figure className="hover-card mx-3 flex h-full w-[320px] shrink-0 flex-col rounded-2xl border border-line bg-panel p-6 sm:w-[360px]">
      <Stars />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-mist">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <p className="text-sm font-extrabold text-fog">{t.name}</p>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-20 text-fog md:py-28">
      <AuroraBg className="opacity-60" />
      <div className="relative mx-auto max-w-[88rem] px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff6b70]">
            <span className="inline-block h-px w-8 bg-[#ed1c24]" />
            What Roofers Say
          </span>
          <SplitReveal as="h2" mode="lines" className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-fog sm:text-4xl lg:text-5xl">
            Roofing companies that{" "}
            <span className="text-gradient-red">trust the system</span>
          </SplitReveal>
          <p className="mt-4 text-mist text-base leading-relaxed">
            Real owners. Real numbers. Here&apos;s what happens when a roofing
            company stops renting leads and starts owning its pipeline.
          </p>
        </Reveal>
      </div>

      {/* Marquee row 1 */}
      <div className="mt-12">
        <Marquee speed={45}>
          {testimonialsRow1.map((t, i) => (
            <TestimonialCard key={`row1-${i}`} t={t} />
          ))}
        </Marquee>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="mt-4">
        <Marquee speed={50} reverse>
          {testimonialsRow2.map((t, i) => (
            <TestimonialCard key={`row2-${i}`} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
