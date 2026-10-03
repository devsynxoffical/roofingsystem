import { ProofGrid } from "./ProofGrid";
import { Reveal } from "./Reveal";

const DASHBOARDS = ["proof-695d97e2.png", "proof-695d9820.png"];

export function ProofGallery() {
  return (
    <section id="results" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="pill-badge-red mb-3 w-fit">
              <span className="dot-red" />
              <span>Proof wall</span>
            </div>
            <h2 className="display text-[clamp(2rem,4.5vw,3.4rem)] tracking-tight text-zinc-950">
              Real dashboards.
              <br />
              <span className="text-[var(--accent)]">Real leads.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-zinc-500 md:justify-self-end md:text-base">
              Real spend. Real results. Tap &quot;See more&quot; to scroll
              deeper into a campaign, or &quot;View full&quot; for the complete
              dashboard, the same transparency you get with live access.
            </p>
          </Reveal>
        </div>

        <ProofGrid files={DASHBOARDS} />
      </div>
    </section>
  );
}
