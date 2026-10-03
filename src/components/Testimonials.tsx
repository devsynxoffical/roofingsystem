const testimonials = [
  {
    name: "Vaishali Kapoor",
    date: "Dec 10",
    excerpt:
      "Most coaches run free webinars and somehow still end up paying a premium just to get people in the room. High CPL, low shows, zero buyers, the usual cycle.",
    banner: "WE PUT A $7 GATE AND 462 PAID WITHOUT THINKING",
    tone: "red" as const,
  },
  {
    name: "Gaurav Kapoor",
    date: "Dec 25",
    excerpt:
      "Roofers won't like this… but it needs to be said. If your marketer says roofing leads can't be scaled cheap, fire them.",
    banner: "635 LEADS IN 45 DAYS WITH ULTRA-LOW CPMS",
    tone: "yellow" as const,
  },
  {
    name: "Vaishali Kapoor",
    date: "Nov 26",
    excerpt:
      "We scaled a simple $99/month offer into a recurring cash machine. $29K in ad spend → $86K revenue → 810 paying members in 30 days.",
    banner: "$29K SPEND → $86K REVENUE IN 30 DAYS",
    tone: "red" as const,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f4f4f4] section-pad">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] tracking-[0.06em] text-black">
          CLIENT TESTIMONIALS
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.date}`}
              className="overflow-hidden border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="border-b border-black/5 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--red)] font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">{item.name}</p>
                    <p className="text-xs text-black/45">{item.date}</p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4">
                <p className="text-sm leading-relaxed text-black/75">
                  {item.excerpt}
                </p>
              </div>

              <div className="relative min-h-[160px] bg-[#111] p-5">
                <div
                  className={`absolute inset-x-0 top-0 px-3 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.06em] ${
                    item.tone === "red"
                      ? "bg-[var(--red)] text-white"
                      : "bg-[#f5c518] text-black"
                  }`}
                >
                  Result Snapshot
                </div>
                <p className="mt-10 font-[family-name:var(--font-display)] text-2xl leading-tight tracking-[0.02em] text-white">
                  {item.banner}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
