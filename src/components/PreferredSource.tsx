/*
  "Preferred source on Google" button. It is only a link to Google's
  preferences page for this domain; a logged-in visitor can tick the box there
  to see more of the site in their Top Stories. Nothing is installed.
*/
export const PREFERRED_SOURCE_URL = "https://www.google.com/preferences/source?q=roofingsystems.co";

function GoogleG() {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white" aria-hidden>
      <svg viewBox="0 0 48 48" className="h-4 w-4">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
    </span>
  );
}

export function PreferredSourceButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-lg bg-[#1a73e8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1765cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8] ${className}`}
    >
      <GoogleG />
      Make Roofing Systems Co. a preferred source on Google
    </a>
  );
}

/** End-of-article prompt for blog posts. */
export function PreferredSourceCallout() {
  return (
    <aside className="mt-12 rounded-2xl border border-[#1a73e8]/25 bg-[#e8f0fe] p-6 text-zinc-900">
      <p className="text-lg font-bold">Found this useful?</p>
      <p className="mt-1 text-[0.95rem] leading-relaxed text-zinc-700">
        Add Roofing Systems Co. as a preferred source on Google to see more of our roofing marketing guides in your search results.
      </p>
      <PreferredSourceButton className="mt-4" />
    </aside>
  );
}
