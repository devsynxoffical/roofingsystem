import type { LucideIcon } from "lucide-react";
import {
  Target,
  FileText,
  Megaphone,
  Funnel,
  MessageSquare,
  CalendarCheck,
  CalendarCheck2,
  TrendingUp,
  BarChart3,
  PenTool,
  ShieldCheck,
  Database,
  BadgeCheck,
  Bot,
  Mail,
  Palette,
  Activity,
} from "lucide-react";

/* ============================================================
   Why most roofing companies never scale
   ============================================================ */
export const whyNotScale = [
  {
    title: "Ads without a funnel",
    body: "An agency runs your roofing ads and calls it marketing. But raw clicks don't book inspections — only a pre-sold journey does.",
    stat: "Clicks",
    statLabel: "Not roofers",
  },
  {
    title: "Funnels nobody owns",
    body: "Somebody builds the landing page, somebody else runs the traffic. Nobody owns the full journey — so most roofing leads go cold.",
    stat: "Broken",
    statLabel: "Handoffs between vendors",
  },
  {
    title: "Copy, but no follow-up",
    body: "Great copy can't qualify, nurture or book storm leads. Follow-up is where the deals are won — and in the fragmented way, it never happens.",
    stat: "80%",
    statLabel: "Of sales need 5+ follow-ups",
  },
  {
    title: "No one owns the journey",
    body: "The roofing customer journey is split across agencies, freelancers and tools. When no single system owns it, nothing compounds.",
    stat: "0",
    statLabel: "Systems owning it all",
  },
] as const;

/* ============================================================
   What makes Roofing Systems™ different
   ============================================================ */
export const differentiators = [
  {
    icon: Funnel,
    title: "Complete Done-For-You Roofing Client Acquisition System",
    body: "We install every piece — offer positioning, Meta Ads, creatives, landing pages, CRM, AI automations, qualification and follow-up. Your only job is to close roofing jobs.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Lead Qualification & Multi-Validation Process",
    body: "A proprietary multi-validation process filters leads before they reach your calendar — lifting booking and show-up rates on inspections.",
  },
  {
    icon: Bot,
    title: "CRM + AI Follow-Up Automations Included",
    body: "Every roofing lead automatically enters your CRM, nurtured by email, SMS, reminders and AI follow-up around the clock.",
  },
  {
    icon: Database,
    title: "Everything We Build Becomes Your Business Asset",
    body: "Everything we build becomes your business asset. No lock-ins, no hidden ownership, no dependence on another agency.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Focused Growth Strategy — Not Just More Leads",
    body: "Not just more leads — a growth strategy engineered around closed revenue, cost per booked appointment and predictable compounding.",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Written Guarantee — Risk Reversed",
    body: "Everything is backed in writing. If we don't help you hit the agreed growth milestones within 90 days, we keep working at no management fee until we do.",
  },
] as const;

/* ============================================================
   8-step roofing client acquisition process
   ============================================================ */
export const acquisitionSteps: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Target,
    title: "Market Research & Customer Analysis",
    body: "We identify exactly who your ideal roofing clients are and what makes them book.",
  },
  {
    icon: FileText,
    title: "Offer Positioning",
    body: "We package and position your roofing service so it stands out from local competitors.",
  },
  {
    icon: Megaphone,
    title: "Messaging & Creative Development",
    body: "We create ad copy and creatives that attract premium homeowners, not price shoppers.",
  },
  {
    icon: Funnel,
    title: "Landing Pages & Sales Funnel",
    body: "We build high-converting landing pages and funnels that turn traffic into booked inspections.",
  },
  {
    icon: BarChart3,
    title: "Meta Ads Management",
    body: "We launch, manage and optimise your roofing campaigns every day.",
  },
  {
    icon: MessageSquare,
    title: "CRM & AI Automations",
    body: "Every lead automatically enters your CRM with automated email, SMS, reminders and follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Lead Qualification",
    body: "Our proprietary multi-validation process filters leads before they reach your calendar — improving booking and show-up rates.",
  },
  {
    icon: CalendarCheck,
    title: "Close Premium Roofing Clients",
    body: "You simply attend the inspections and close the jobs while our system works in the background.",
  },
] as const;

/* ============================================================
   Everything included
   ============================================================ */
export const includedServices: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  { icon: PenTool, title: "Offer Positioning", body: "Your roofing offer packaged and positioned to stand out from local competitors." },
  { icon: Megaphone, title: "Messaging Strategy", body: "A clear message that speaks directly to your ideal roofing client." },
  { icon: BarChart3, title: "Meta Ads", body: "Campaigns launched, managed and optimised on a daily basis." },
  { icon: Palette, title: "Ad Creatives", body: "Scroll-stopping creatives engineered to attract premium homeowners." },
  { icon: FileText, title: "Landing Pages", body: "High-converting pages built around your specific roofing offer." },
  { icon: Funnel, title: "Complete Sales Funnel", body: "The full journey from first click to booked roofing inspection." },
  { icon: Database, title: "CRM Setup", body: "Every roofing lead organised in one clean, automated pipeline." },
  { icon: Bot, title: "AI Automations", body: "AI-driven nurture and outreach that runs around the clock." },
  { icon: Mail, title: "Email Sequences", body: "Automated email follow-up that sells while you sleep." },
  { icon: MessageSquare, title: "SMS Follow-Up", body: "Text sequences that keep every lead warm and engaged." },
  { icon: CalendarCheck2, title: "Appointment Reminders", body: "Confirmations and reminders that protect your inspection show rate." },
  { icon: ShieldCheck, title: "Lead Qualification System", body: "Multi-validation filtering before leads ever hit your calendar." },
  { icon: CalendarCheck, title: "Calendar Booking System", body: "A booking flow that syncs directly to your calendar." },
  { icon: TrendingUp, title: "Ongoing Optimisation", body: "Daily tweaks and scaling decisions based on real campaign data." },
  { icon: Activity, title: "Weekly Reporting & Analytics", body: "Transparent reporting so you always know exactly what your ad spend is producing." },
] as const;

/* ============================================================
   Ownership
   ============================================================ */
export const ownershipSteps = [
  {
    step: "01",
    title: "We build",
    body: "We construct the entire roofing acquisition system — ads, funnel, automation, CRM, the lot.",
  },
  {
    step: "02",
    title: "Everything transfers",
    body: "From day one, every account, asset and audience is registered under your name.",
  },
  {
    step: "03",
    title: "You own it all",
    body: "When we part ways, the system stays with you. No hostage-holding. No exit fees.",
  },
] as const;

export const ownershipAssets = [
  "Landing Pages",
  "Sales Funnel",
  "CRM",
  "Automations",
  "Ad Creatives",
  "Copy",
  "Follow-Up Sequences",
  "Customer Data",
] as const;

/* ============================================================
   Roofing niches we've worked with
   ============================================================ */
export const industries: string[] = [
  "Residential Roofing",
  "Commercial Roofing",
  "Storm Damage Restoration",
  "Metal Roofing",
  "Solar Roofing",
  "Insurance Claims Roofing",
  "Roof Repair",
  "New Construction Roofing",
  "Shingle Roofing",
  "TPO & EPDM Flat Roofs",
  "Slate & Tile Roofing",
  "Gutters & Exteriors",
  "Roof Inspections",
  "Hail Damage Specialists",
  "Siding & Windows",
  "Attic Insulation",
  "Ventilation Systems",
  "Emergency Tarping Services",
  "Re-Roofing",
  "Commercial Tear-Offs",
  "Green / Cool Roofs",
  "Roof Maintenance Programs",
  "Multi-Family Roofing",
  "Property Management Roofing",
  "Home Builders",
  "General Contractors",
  "Roofing Supply & Distribution",
  "Gutter Installation",
] as const;

/* ============================================================
   Comparison
   ============================================================ */
export const comparisonRows: {
  label: string;
  agency: string | boolean;
  qlx: string | boolean;
  highlight?: boolean;
}[] = [
  { label: "Runs ads", agency: "Yes", qlx: "Complete roofing client acquisition system" },
  { label: "Delivers leads", agency: "Yes", qlx: "Premium roofing client acquisition" },
  { label: "Follow-up", agency: "Limited", qlx: "AI follow-up" },
  { label: "CRM", agency: false, qlx: true },
  { label: "Automation", agency: false, qlx: true },
  { label: "Ownership", agency: false, qlx: true, highlight: true },
  { label: "Guarantee", agency: false, qlx: true, highlight: true },
] as const;

/* ============================================================
   FAQ
   ============================================================ */
export const faqCategories = ["All", "The System", "Ownership", "Onboarding"] as const;

export const faqs: {
  q: string;
  a: string;
  category: (typeof faqCategories)[number];
}[] = [
  {
    q: "Who is this for?",
    a: "Roofing contractors doing $1M+ in annual revenue who want predictable, repeatable growth instead of lead-dependent chaos. If you're below that, this system isn't the right fit for you yet.",
    category: "The System",
  },
  {
    q: "Is this completely done-for-you?",
    a: "Yes. We handle offer positioning, Meta Ads, ad creatives, landing pages, CRM, AI automations, lead qualification and follow-up. Your only job is to show up for the inspections and close roofing jobs.",
    category: "The System",
  },
  {
    q: "Do I own everything?",
    a: "Yes — written into the engagement. Landing pages, funnels, CRM, automations, ad creatives, copy, follow-up sequences and customer data all become your business assets. No lock-ins, no hidden ownership.",
    category: "Ownership",
  },
  {
    q: "How long does implementation take?",
    a: "Most systems are live within weeks. You'll start seeing traffic and booked inspections during implementation — you don't wait 90 days just to get started.",
    category: "Onboarding",
  },
  {
    q: "What roofing niches do you work with?",
    a: "Residential, commercial, storm damage, metal, solar, insurance claims, flat roofs and more — 25+ roofing niches and counting.",
    category: "The System",
  },
  {
    q: "What happens on the strategy call?",
    a: "We audit your offer, traffic and numbers, show you the exact system we'd install for your roofing market, and lay out what it takes to double your revenue in 90 days. No pressure, no obligation.",
    category: "Onboarding",
  },
  {
    q: "How is this different from a marketing agency?",
    a: "Agencies run ads and hand you raw, unqualified leads. We build and operate a complete roofing acquisition ecosystem — from the first click to a qualified homeowner on your calendar — and back it with a written guarantee.",
    category: "The System",
  },
  {
    q: "What's included?",
    a: "Offer positioning, messaging, Meta Ads, creatives, landing pages, complete sales funnel, CRM, AI automations, email sequences, SMS follow-up, appointment reminders, lead qualification, calendar booking and ongoing optimisation.",
    category: "The System",
  },
] as const;

/* ============================================================
   Testimonials (floating cards / final CTA)
   ============================================================ */
export const testimonials = [
  {
    quote: "First agency that actually owns the funnel for us. Cost per lead dropped 50% within the first month.",
    name: "Sarah K.",
    role: "Co-Founder, Summit Roofing Co.",
  },
  {
    quote: "We booked $635K in roofing projects from just $29K in ad spend. The math finally works.",
    name: "Daniel T.",
    role: "Titan Roofing",
  },
  {
    quote: "Premium homeowners, not price shoppers. The lead quality completely changed our sales process.",
    name: "Mike P.",
    role: "Sterling Roofing Group",
  },
] as const;
