const phrases = [
  "Roofing client acquisition system",
  "Only for $1M+ roofers",
  "Double your roofing revenue in 90 days",
  "Backed by a written agreement",
  "Offer · Meta Ads · Creatives · Landing Pages · CRM · AI Follow-up",
  "You own everything",
];

export function Marquee() {
  const items = [...phrases, ...phrases, ...phrases];
  return (
    <div className="relative z-20">
      <div className="marquee-wrap">
        <div className="marquee-track items-center">
          {items.map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
