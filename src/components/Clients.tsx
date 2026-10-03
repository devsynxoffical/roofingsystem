import Image from "next/image";

const clients = [
  {
    name: "Darrell Stern",
    title: "Webinar Scaling Coach",
    badge: "19K Followers",
    photo: "/media/clients/client-darrell.jpg",
  },
  {
    name: "Pierce Grimes",
    title: "7-Figure Agency Owner",
    badge: "Two Comma Club Winner",
    photo: "/media/clients/client-pierce.webp",
  },
  {
    name: "Officer Baker",
    title: "Hollywood Celebrity",
    badge: "1.5M Followers",
    photo: "/media/clients/client-officer-baker.jpg",
  },
  {
    name: "Jesse Rogers · Casper SMC",
    title: "Online Trading Coach",
    badge: "537K Subscribers",
    photo: "/media/clients/client-jesse.webp",
  },
  {
    name: "Tim Burd",
    title: "9-Figure Agency Owner",
    badge: "101K Followers",
    photo: "/media/clients/client-tim-burd.webp",
  },
  {
    name: "Dr. Amy",
    title: "Cancer Researcher",
    badge: "259K Subscribers",
    photo: "/media/clients/client-dr-amy.webp",
  },
  {
    name: "Travis Stephenson",
    title: "9-Figure Agency Owner",
    badge: "114K Followers",
    photo: "/media/clients/client-travis.webp",
  },
  {
    name: "Dr. Bea Kinderaerztin",
    title: "Pediatrician",
    badge: "144K Followers",
    photo: "/media/clients/client-dr-bea.jpg",
  },
  {
    name: "Steven Juergensen",
    title: "Founder @ Vedgenutrition",
    badge: "87K Followers",
    photo: "/media/clients/client-steven.jpg",
  },
  {
    name: "Rafael Cintron",
    title: "E-commerce Coach",
    badge: "55.7K Subscribers",
    photo: "/media/clients/client-rafael.jpg",
  },
  {
    name: "Sarah Grace Fitness",
    title: "NPC Figure Competitor",
    badge: "94K Followers",
    photo: "/media/clients/client-sarah.jpg",
  },
  {
    name: "Mark Shay",
    title: "Agency Owner & Coach",
    badge: "29.8K Followers",
    photo: "/media/clients/client-mark.jpg",
  },
  {
    name: "Jared Van Yperen",
    title: "Founder @ Vintage Muscle",
    badge: "21K Followers",
    photo: "/media/clients/client-jared.jpg",
  },
  {
    name: "M Mahdi Syed",
    title: "Business Scaling Coach",
    badge: "Two Comma Club Winner",
    photo: "/media/clients/client-mahdi.jpg",
  },
  {
    name: "Aref Jomah",
    title: "7-Figure Agency Scaling Coach",
    badge: "Two Comma Club Winner",
    photo: "/media/clients/client-aref.jpg",
  },
  {
    name: "Jimmy Rutkowsky",
    title: "7-Figure Agency Owner",
    badge: "7.2K Followers",
    photo: "/media/clients/client-jimmy.webp",
  },
  {
    name: "Marie Grace Berg",
    title: "Agency Owner",
    badge: "7K Followers",
    photo: "/media/clients/client-marie.jpg",
  },
];

function ClientCard({
  client,
  tilt,
}: {
  client: (typeof clients)[number];
  tilt: number;
}) {
  return (
    <div
      className="clients-card rounded-2xl border border-white/10 bg-[var(--ink-soft)] px-5 py-6 text-center"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-[var(--red)]/50">
        <Image
          src={client.photo}
          alt={client.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <p className="display mt-4 text-sm leading-snug text-white">
        {client.name}
      </p>
      <p className="mt-1 text-xs text-white/55">{client.title}</p>
      <span className="mt-3 inline-block border border-[var(--red)]/40 bg-[var(--red)]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--red-bright)]">
        {client.badge}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: (typeof clients)[number][];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="clients-marquee">
      <div className={`clients-marquee-track ${reverse ? "clients-reverse" : ""}`}>
        {doubled.map((client, i) => (
          <ClientCard
            key={`${client.name}-${i}`}
            client={client}
            tilt={(i % 2 === 0 ? 1 : -1) * 1.6}
          />
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section id="clients" className="section-shell overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Clients & proof</p>
            <h2 className="display mt-3 text-[clamp(2rem,4vw,3.2rem)] text-[var(--ink)]">
              Trusted by creators,
              <br />
              coaches & operators.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] md:justify-self-end">
            From high-ticket coaches to 9-figure agency owners, the same ads
            system, scaled across countless verticals. Hover to pause, scroll
            for the full roster.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          <MarqueeRow items={clients.slice(0, 9)} />
          <MarqueeRow items={clients.slice(9)} reverse />
        </div>
      </div>
    </section>
  );
}
