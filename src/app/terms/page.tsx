import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Roofing Systems Co.",
  description:
    "Terms of Service for Roofing Systems Co. and the roofing client acquisition system.",
};

const sections = [
  {
    heading: "1. Agreement",
    body: [
      "By accessing or using the Roofing Systems Co. website or engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, please discontinue use of the site and services.",
    ],
  },
  {
    heading: "2. Services",
    body: [
      "Roofing Systems Co. provides client acquisition systems for roofing companies, including but not limited to offer positioning, Meta advertising, creative production, landing pages, funnel architecture, CRM setup, and AI-powered follow-up. Services are delivered as described in your written agreement with us.",
    ],
  },
  {
    heading: "3. Eligibility",
    body: [
      "Our services and guarantee are available to roofing companies operating at a minimum revenue level of $1,000,000 per year unless otherwise agreed in writing. We reserve the right to decline service to any applicant at our sole discretion.",
    ],
  },
  {
    heading: "4. Payments & Refunds",
    body: [
      "Fees, payment schedules, and any guarantee terms are set out in the written agreement signed by both parties. All amounts due must be paid on the schedule agreed in writing. Refunds are governed by the terms of your agreement, including the 90-day written guarantee where applicable.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    body: [
      "All assets we build for you — landing pages, funnels, CRM, automations, ad creatives, copy, follow-up sequences, and customer data — are owned by you once delivered and fully paid for, as described in your agreement. Our own website content, branding, and proprietary methodology remain the property of Roofing Systems Co.",
    ],
  },
  {
    heading: "6. Results Disclaimer",
    body: [
      "Results shown are not typical and are not a promise or guarantee of future performance. Every roofing business is different. Outcomes depend on your execution, lead follow-up, closing ability, and local market conditions. You alone are responsible for running the appointments and closing the sales.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Roofing Systems Co. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits or revenues, arising out of or relating to your use of the site or our services.",
    ],
  },
  {
    heading: "8. Changes",
    body: [
      "We may update these Terms of Service from time to time. Changes take effect when posted on this page with an updated revision date. Continued use of the site or services after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    heading: "9. Contact",
    body: [
      "Questions about these Terms of Service can be sent to our team through the strategy call booking page on this site.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="August 8, 2026"
      intro="These terms govern your use of the Roofing Systems Co. website and services. Please read them carefully."
      sections={sections}
    />
  );
}
