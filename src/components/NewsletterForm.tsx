"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-5 rounded-full border border-[var(--lime)]/60 bg-[var(--lime)]/15 px-5 py-3 text-sm font-semibold text-white">
        ✓ You&apos;re in. Watch your inbox.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-5 flex overflow-hidden rounded-full border border-white/15 bg-white/10 focus-within:border-[var(--lime)]"
    >
      <input
        type="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        className="w-full bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/35"
      />
      <button
        type="submit"
        className="shrink-0 bg-[var(--purple)] px-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[var(--purple-dark)]"
      >
        Subscribe
      </button>
    </form>
  );
}
