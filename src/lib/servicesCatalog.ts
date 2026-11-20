/*
  The 30 services shown on /services. Each is something the site already says
  Roofing Systems Co. does (homepage system, process and case studies). Each
  links to the page that covers it best, so there is one page per search intent.
*/
import type { IconName } from "./landings";

export type ServiceItem = { name: string; text: string; href: string; icon: IconName };
export type ServiceGroup = { id: string; title: string; intro: string; items: ServiceItem[] };

export const serviceGroups: ServiceGroup[] = [
  {
    id: "ads",
    title: "Advertising",
    intro: "Paid social campaigns built and managed for roofing companies.",
    items: [
      { name: "Facebook ads for roofers", text: "Done-for-you Meta ads built into a full acquisition system.", href: "/facebook-ads-for-roofers", icon: "megaphone" },
      { name: "Instagram ads for roofers", text: "Reels, Stories and Feed ads inside your Meta campaigns.", href: "/instagram-ads-for-roofers", icon: "camera" },
      { name: "Meta ads management", text: "Daily launch, management and optimisation of your campaigns.", href: "/facebook-ads-for-roofers", icon: "target" },
      { name: "Roofing video ads", text: "Short vertical videos from your crews, roofs and reviews.", href: "/roofing-ad-creatives", icon: "film" },
      { name: "TikTok and YouTube Shorts creatives", text: "Vertical creative formats that also run on TikTok and YouTube Shorts.", href: "/roofing-ad-creatives", icon: "film" },
      { name: "Google Ads vs Meta for roofers", text: "Costs, campaign types and when each channel makes sense.", href: "/google-ads-for-roofers", icon: "target" },
      { name: "Roofing offer positioning", text: "Offers that stand out from \"free inspection\", from financing to authority.", href: "/roofing-ad-creatives", icon: "wallet" },
      { name: "Financing offer campaigns", text: "$0-down and monthly-payment offers for replacement buyers (lender terms apply).", href: "/roof-replacement-leads", icon: "wallet" },
    ],
  },
  {
    id: "leads",
    title: "Lead generation",
    intro: "Exclusive homeowner leads from ads you own.",
    items: [
      { name: "Roofing lead generation system", text: "Ads, pages, CRM, follow-up and qualification you own.", href: "/roofing-lead-generation", icon: "layers" },
      { name: "Exclusive roofing leads", text: "Leads that respond to your brand only, never shared or resold.", href: "/blog/shared-vs-exclusive-roofing-leads", icon: "users" },
      { name: "Verified roofing leads", text: "OTP phone verification and multi-step validation on every lead.", href: "/verified-roofing-leads", icon: "shield" },
      { name: "Roof replacement leads", text: "Offers and creative aimed at high-value replacement projects.", href: "/roof-replacement-leads", icon: "building" },
      { name: "Residential roofing leads", text: "Homeowner leads for residential shingle and replacement work.", href: "/roof-replacement-leads", icon: "building" },
      { name: "Storm damage roofing leads", text: "Campaigns that scale up after storms and pause when crews are full.", href: "/storm-damage-leads", icon: "storm" },
      { name: "Commercial roofing leads", text: "Qualified leads for flat, metal and tile commercial roofing work.", href: "/commercial-roofing-leads", icon: "building" },
      { name: "Roofing leads in Texas", text: "686 leads in 8 days, 850 at $7.60 and $127,500 closed in Dallas.", href: "/roofing-leads-texas", icon: "map" },
      { name: "Roofing leads in Florida", text: "OTP-verified campaigns across single and multiple Florida locations.", href: "/roofing-leads-florida", icon: "map" },
    ],
  },
  {
    id: "conversion",
    title: "Conversion and follow-up",
    intro: "Everything that happens between the click and the signed contract.",
    items: [
      { name: "Roofing landing pages and funnels", text: "One page per offer, matched to the ad and connected to your CRM.", href: "/roofing-landing-pages", icon: "layers" },
      { name: "Roofing CRM setup (GoHighLevel)", text: "Pipeline, calendars, users and lead sources set up for you.", href: "/roofing-crm-automation", icon: "layers" },
      { name: "AI follow-up automation", text: "Conversational follow-up that keeps leads warm until they book.", href: "/roofing-crm-automation", icon: "zap" },
      { name: "SMS and email follow-up", text: "Instant text and email, then multi-day nurture sequences.", href: "/roofing-crm-automation", icon: "phone" },
      { name: "Appointment reminders", text: "Reminders before every inspection to cut no-shows.", href: "/roofing-crm-automation", icon: "clock" },
      { name: "Lead qualification", text: "Qualifying questions that filter renters and price shoppers.", href: "/verified-roofing-leads", icon: "target" },
      { name: "Speed-to-lead process", text: "A follow-up sequence that books inspections on the first conversation.", href: "/blog/roofing-lead-follow-up", icon: "clock" },
    ],
  },
  {
    id: "strategy",
    title: "Strategy, agencies and training",
    intro: "For owners and agencies who want to understand and scale the system.",
    items: [
      { name: "Roofing marketing strategy", text: "Market research, offer and channel plan for roofing contractors.", href: "/roofing-marketing", icon: "target" },
      { name: "Lead generation for roofing agencies", text: "Acquisition systems for roofing marketing agencies.", href: "/lead-generation-for-roofing-agencies", icon: "users" },
      { name: "Pay-per-lead company lead generation", text: "Verified homeowner leads for pay-per-lead businesses.", href: "/lead-generation-for-roofing-agencies", icon: "shield" },
      { name: "Ad account audits", text: "Live audits of real roofing ad accounts and data.", href: "/case-studies/private-mastermind-roofing-agency-session", icon: "megaphone" },
      { name: "Done-with-you onboarding", text: "We fix the buyer journey alongside your team.", href: "/case-studies/dwy-onboarding-roofing-agency-buyer-journey", icon: "repeat" },
      { name: "Private mastermind and training", text: "Free recorded training on audience segmentation for roofing ads.", href: "/privatemastermind", icon: "film" },
    ],
  },
];

export const allServices = serviceGroups.flatMap((g) => g.items);
