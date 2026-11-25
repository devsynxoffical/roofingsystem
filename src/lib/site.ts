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
  { label: "Blog", href: "/blog" },
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
    { label: "Roof repair leads", href: "/roof-repair-leads" },
    { label: "Storm damage leads", href: "/storm-damage-leads" },
    { label: "Commercial roofing leads", href: "/commercial-roofing-leads" },
    { label: "Roofing leads by market", href: "/roofing-leads" },
    { label: "Roofing leads in Texas", href: "/roofing-leads-texas" },
    { label: "Roofing leads in Florida", href: "/roofing-leads-florida" },
    { label: "Pay per lead roofing", href: "/pay-per-lead-roofing" },
  ] },
  { group: "Marketing and ads", links: [
    { label: "Roofing contractor marketing", href: "/roofing-marketing" },
    { label: "Facebook ads for roofers", href: "/facebook-ads-for-roofers" },
    { label: "Instagram ads for roofers", href: "/instagram-ads-for-roofers" },
    { label: "Google Ads for roofers", href: "/google-ads-for-roofers" },
    { label: "Roofing ads", href: "/roofing-ad-creatives" },
    { label: "Roofing SEO", href: "/roofing-seo" },
    { label: "Roofing website design", href: "/roofing-website-design" },
  ] },
  { group: "Systems and guides", links: [
    { label: "Roofing websites and landing pages", href: "/roofing-landing-pages" },
    { label: "Roofing CRM automation", href: "/roofing-crm-automation" },
    { label: "Lead generation for roofing agencies", href: "/lead-generation-for-roofing-agencies" },
    { label: "Best roofing lead generation companies", href: "/best-roofing-lead-generation-companies" },
    { label: "How much do roofing leads cost?", href: "/blog/how-much-do-roofing-leads-cost" },
    { label: "How to get roofing leads", href: "/blog/how-to-get-roofing-leads" },
    { label: "Roofing advertising ideas", href: "/blog/roofing-advertising-ideas" },
    { label: "All services", href: "/services" },
  ] },
] as const;

/** Blog articles, shown in the "Blog" dropdown (desktop) and the mobile menu. */
export const blogLinks = [
  { group: "Roofing leads", links: [
    { label: "How much do roofing leads cost?", href: "/blog/how-much-do-roofing-leads-cost" },
    { label: "How to get roofing leads", href: "/blog/how-to-get-roofing-leads" },
    { label: "Shared vs exclusive roofing leads", href: "/blog/shared-vs-exclusive-roofing-leads" },
    { label: "How to choose a lead generation company", href: "/blog/how-to-choose-a-roofing-lead-generation-company" },
    { label: "Free roofing leads", href: "/blog/free-roofing-leads" },
  ] },
  { group: "Marketing and follow-up", links: [
    { label: "Digital marketing for roofing companies", href: "/blog/digital-marketing-for-roofing-companies" },
    { label: "Roofing marketing in the off-season", href: "/blog/roofing-marketing-off-season" },
    { label: "Roofing marketing ideas", href: "/blog/roofing-marketing-ideas" },
    { label: "How to grow a roofing business", href: "/blog/how-to-grow-a-roofing-business" },
    { label: "Roofing advertising ideas", href: "/blog/roofing-advertising-ideas" },
    { label: "Facebook ads cost per lead study", href: "/blog/roofing-facebook-ads-cost-per-lead" },
    { label: "How to follow up on roofing leads", href: "/blog/roofing-lead-follow-up" },
    { label: "Roofing lead cost report 2026", href: "/roofing-lead-cost-report-2026" },
    { label: "All articles", href: "/blog" },
  ] },
] as const;

export const navCta = {
  label: "Book Free Strategy Call",
  href: site.bookCallUrl,
} as const;
