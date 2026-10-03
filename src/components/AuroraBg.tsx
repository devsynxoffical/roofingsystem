export function AuroraBg({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="aurora-blob aurora-blob-a -top-24 left-[4%] h-[320px] w-[320px] bg-[var(--accent)]/20" />
      <div className="aurora-blob aurora-blob-b top-1/4 right-[-6%] h-[300px] w-[300px] bg-[#ff5c5c]/15" />
      <div className="aurora-blob aurora-blob-c bottom-[-14%] left-1/3 h-[360px] w-[360px] bg-white/[0.04]" />
    </div>
  );
}
