export const site = {
  name: "Roofing Systems Co.",
  legalName: "Vaishali Media Productions LLC",
  url: "https://www.roofingsystems.co",
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
    "Roofing Systems Co. installs a done-for-you client acquisition system for $1M+ roofing contractors: offer positioning, Meta Ads, creatives, landing pages, CRM, AI follow-up and qualification. Double your revenue in 90 days, backed in writing.",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
} as const;

/** Social profiles with a real profile path; bare placeholders like https://facebook.com are hidden. */
export const socialLinks = site.socials.filter((s) => new URL(s.href).pathname.replace(/\/$/, "") !== "");

export const nav = [
  { label: "System", href: "#process" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Mastermind", href: "/privatemastermind" },
  { label: "Results", href: "#results" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Service and landing pages, shown in the "Services" dropdown (desktop) and the mobile menu. */
export const serviceLinks = [
  { group: "Roofing leads", links: [
    { label: "Exclusive roofing leads", href: "/" },
    { label: "Verified roofing leads", href: "/verified-roofing-leads" },
    { label: "Roof replacement leads", href: "/roof-replacement-leads" },
    { label: "Storm damage leads", href: "/storm-damage-leads" },
    { label: "Commercial roofing leads", href: "/commercial-roofing-leads" },
    { label: "Roofing leads in Texas", href: "/roofing-leads-texas" },
    { label: "Roofing leads in Florida", href: "/roofing-leads-florida" },
  ] },
  { group: "Marketing and ads", links: [
    { label: "Roofing contractor marketing", href: "/roofing-marketing" },
    { label: "Facebook ads for roofers", href: "/facebook-ads-for-roofers" },
    { label: "Instagram ads for roofers", href: "/instagram-ads-for-roofers" },
    { label: "Google Ads for roofers", href: "/google-ads-for-roofers" },
    { label: "Roofing ads", href: "/roofing-ad-creatives" },
  ] },
  { group: "Systems and guides", links: [
    { label: "Roofing websites and landing pages", href: "/roofing-landing-pages" },
    { label: "Roofing CRM automation", href: "/roofing-crm-automation" },
    { label: "Lead generation for roofing agencies", href: "/lead-generation-for-roofing-agencies" },
    { label: "How much do roofing leads cost?", href: "/blog/how-much-do-roofing-leads-cost" },
    { label: "All services", href: "/services" },
  ] },
] as const;

export const navCta = {
  label: "Book Free Strategy Call",
  href: site.bookCallUrl,
} as const;
