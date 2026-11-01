"use client";

import { FormEvent, useEffect, useState } from "react";
import { ChevronRight, Check } from "lucide-react";

const TZ = "America/Phoenix";

/** Live clock for the office time zone. Renders placeholders until mounted to avoid hydration mismatch. */
export function OfficeClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  return (
    <span className="font-mono text-5xl font-bold tabular-nums tracking-tight text-white sm:text-6xl" suppressHydrationWarning>
      {time ?? "--:--:--"}
    </span>
  );
}

/** Newsletter field. Note: not wired to an email provider yet — it only confirms on screen. */
export function LoopForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-8 flex items-center gap-2 border-b border-white/15 pb-4 text-sm font-semibold text-white">
        <Check className="h-4 w-4 text-[#ed1c24]" /> You&apos;re in. Watch your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="group mt-8 flex items-center gap-3 border-b border-white/15 pb-3 focus-within:border-[#ed1c24]">
      <input
        type="email"
        required
        placeholder="Your email"
        aria-label="Your email"
        className="w-full bg-transparent py-1 text-[1rem] text-white outline-none placeholder:text-zinc-500"
      />
      <button type="submit" aria-label="Subscribe" className="text-[#ed1c24] transition-transform hover:translate-x-1">
        <ChevronRight className="h-6 w-6" strokeWidth={3} />
      </button>
    </form>
  );
}
