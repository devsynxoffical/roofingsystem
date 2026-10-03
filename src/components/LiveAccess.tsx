import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";

const points = [
  "Live campaign dashboards",
  "Lead sheets & call status",
  "Creative performance visibility",
  "Full spend transparency",
];

export function LiveAccess() {
  return (
    <section className="divider-slash">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="section-shell bg-transparent text-white lg:pr-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--red)]">
            Complete visibility
          </p>
          <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4rem)]">
            CHECK
            <br />
            EVERYTHING
            <br />
            <span className="text-[var(--red)]">LIVE</span>
          </h2>
          <p className="mt-5 max-w-md text-base text-white/65">
            No black boxes. You get complete access so you always know what is
            running, converting, and where every dollar goes.
          </p>
        </div>

        <div className="section-shell bg-transparent text-black lg:pl-12">
          <div className="border border-black/10 bg-white/90 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:p-9">
            <h3 className="display text-3xl text-black md:text-4xl">
              WHAT YOU SEE
            </h3>
            <ul className="mt-6 space-y-4">
              {points.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-black/10 pb-4 text-sm font-medium text-black/75 last:border-0 md:text-base"
                >
                  <span className="flex h-7 w-7 items-center justify-center bg-[var(--red)] text-xs font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href={BOOKING_PATH} className="cta-btn mt-8 w-full">
              <span className="display text-xl tracking-[0.06em]">
                GET LIVE ACCESS
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                Onboarding starts after approval
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
