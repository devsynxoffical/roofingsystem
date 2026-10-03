import Link from "next/link";

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[840px] px-5 pb-24 pt-32 md:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
          Roofing Systems Co.
        </p>
        <h1 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-[15px] font-medium leading-relaxed text-zinc-600">{intro}</p>
        <p className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-400">
          Last updated: {updated}
        </p>

        <div className="mt-12 space-y-10 border-t border-zinc-200 pt-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-medium tracking-[-0.01em] text-gray-900">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-zinc-200 pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-gray-800"
          >
            Back to home
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
