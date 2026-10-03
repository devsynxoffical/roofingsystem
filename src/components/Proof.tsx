const proofs = [
  {
    tag: "ROOFING SCALE",
    metric: "635 LEADS",
    detail: "45 days · ultra-low CPMs",
    tone: "yellow" as const,
  },
  {
    tag: "HIGH-TICKET GATE",
    metric: "462 PAID",
    detail: "$7 seat · no freebie hunters",
    tone: "red" as const,
  },
  {
    tag: "RECURRING OFFER",
    metric: "$86K REVENUE",
    detail: "$29K spend · 810 members",
    tone: "red" as const,
  },
  {
    tag: "CALL VOLUME",
    metric: "300–500",
    detail: "Qualified sales calls / month",
    tone: "yellow" as const,
  },
  {
    tag: "CPL DROP",
    metric: "UNTAPPED INTERESTS",
    detail: "Hidden Ads Manager angles",
    tone: "red" as const,
  },
  {
    tag: "CROSS-NICHE",
    metric: "REPEATABLE MACHINE",
    detail: "Proven beyond one vertical",
    tone: "yellow" as const,
  },
];

export function Proof() {
  return (
    <section className="bg-white text-black section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-[0.03em] text-[var(--red)]">
            A PROVEN SYSTEM WITH A MASSIVE TRACK RECORD
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/70 md:text-lg">
            If it works in one niche, it doesn&apos;t mean anything. We&apos;ve
            proven it works everywhere. This isn&apos;t a one-off win, it&apos;s
            a client acquisition machine that repeats results across industries.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proofs.map((item) => (
            <article
              key={item.tag}
              className="proof-frame group relative min-h-[220px] bg-[#0d0d0d] p-6 text-white"
            >
              <div
                className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${
                  item.tone === "red"
                    ? "bg-[var(--red)] text-white"
                    : "bg-[#f5c518] text-black"
                }`}
              >
                {item.tag}
              </div>
              <p className="mt-8 font-[family-name:var(--font-display)] text-4xl tracking-[0.02em] md:text-5xl">
                {item.metric}
              </p>
              <p className="mt-3 text-sm text-white/60">{item.detail}</p>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--red)] transition duration-500 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#book" className="cta-btn min-w-[280px] md:min-w-[360px]">
            <span className="font-[family-name:var(--font-display)] text-xl tracking-[0.06em] md:text-2xl">
              LET&apos;S SCALE MY SALES CALLS
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
              Book Your Free 1:1 Call Now
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
