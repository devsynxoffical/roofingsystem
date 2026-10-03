export const site = {
  name: "Roofing Systems Co.",
  legalName: "Vaishali Media Productions LLC",
  url: "https://roofingsystems.co",
  bookCallUrl: "/book",
  email: "vaishali@milliondollarmedia.us",
  phone: "+91 82877 82334",
  founded: 2015,
  location: {
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  description:
    "Roofing Systems Co. installs a done-for-you client acquisition system for $1M+ roofing contractors — offer positioning, Meta Ads, creatives, landing pages, CRM, AI follow-up and qualification. Double your revenue in 90 days, backed in writing.",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
} as const;

export const nav = [
  { label: "System", href: "#different" },
  { label: "Results", href: "#results" },
  { label: "Industries", href: "#industries" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "FAQ", href: "#faq" },
] as const;

export const navCta = {
  label: "Book Free Strategy Call",
  href: site.bookCallUrl,
} as const;
