"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "done";

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
      />
    </div>
  );
}

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Hook this to Formspree / API / CRM later.
    window.setTimeout(() => setStatus("done"), 700);
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-xs md:p-10">
        <span className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-emerald-100 text-2xl mb-4">
          ✓
        </span>
        <p className="text-2xl font-extrabold text-zinc-950 tracking-tight">
          Application Received
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          We&apos;ll review your details and reach out to confirm your call.
          $1M+ roofers only, unqualified applications are declined.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4"
        >
          Back to main page →
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs md:p-8"
    >
      {/* Form Header */}
      <div className="mb-7 flex items-center justify-between gap-4 border-b border-zinc-100 pb-6">
        <div>
          <p className="text-xl font-extrabold text-zinc-950 tracking-tight">
            Book Strategy Call
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Application for $1M+ roofing companies
          </p>
        </div>
        <Image
          src="/logo.png"
          alt="Roofing Systems Co."
          width={80}
          height={56}
          className="hidden h-10 w-auto object-contain sm:block"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company name" name="company" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
            Annual revenue
          </label>
          <select
            name="revenue"
            required
            defaultValue=""
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
          >
            <option value="" disabled>
              Select revenue range
            </option>
            <option value="under-1m">Under $1M, Do not apply</option>
            <option value="1-3m">$1M – $3M</option>
            <option value="3-5m">$3M – $5M</option>
            <option value="5m-plus">$5M+</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
            Preferred call time
          </label>
          <input
            name="preferredTime"
            required
            placeholder="e.g. Tue / Thu mornings EST"
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-300 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
            Anything we should know?
          </label>
          <textarea
            name="notes"
            rows={4}
            placeholder="Current lead sources, team size, markets…"
            className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-300 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-left text-sm text-zinc-500">
        <input
          type="checkbox"
          name="qualify"
          required
          className="mt-1 accent-[var(--accent)]"
        />
        <span>
          I confirm my roofing company does{" "}
          <strong className="text-zinc-900">$1M+ annual revenue</strong> and I
          understand this offer is only for qualified roofers.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-accent mt-8 w-full py-4 text-sm font-bold disabled:cursor-wait disabled:opacity-70 shadow-md"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application, Double Revenue in 90 Days"}
      </button>
    </form>
  );
}
