import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Roofing Systems Co.",
  description:
    "How Roofing Systems Co. collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly to us, including your name, company name, email address, and phone number when you request a strategy call or otherwise contact us. We also collect limited technical information automatically, such as browser type and pages visited, to improve our site.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use the information we collect to respond to your inquiries, schedule strategy calls, deliver our services, communicate with you about our offerings, and improve our website and marketing. We do not sell your personal information.",
    ],
  },
  {
    heading: "3. Advertising & Tracking",
    body: [
      "Our website and campaigns may use advertising platforms such as Meta to reach audiences. These platforms may use cookies and similar technologies. Where required by law, we rely on the platforms' consent mechanisms for ad personalization.",
    ],
  },
  {
    heading: "4. Data Sharing",
    body: [
      "We do not sell, trade, or rent your personal information. We may share information with trusted service providers (such as hosting, analytics, and ad platforms) who help us operate our business, only to the extent necessary to provide those services, and subject to confidentiality obligations.",
    ],
  },
  {
    heading: "5. Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "6. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you, or ask us to stop sending you marketing communications. Contact us through the strategy call booking page to make a request.",
    ],
  },
  {
    heading: "7. Cookies",
    body: [
      "Our site and the tools we use may place cookies or similar local storage on your device. You can control cookies through your browser settings. Disabling cookies may affect how our site functions for you.",
    ],
  },
  {
    heading: "8. Children's Privacy",
    body: [
      "Our website and services are intended for businesses and are not directed to children under 16. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "9. Changes",
    body: [
      "We may update this Privacy Policy from time to time. Changes take effect when posted on this page with an updated revision date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 8, 2026"
      intro="This policy explains what information we collect, why we collect it, and how we protect it."
      sections={sections}
    />
  );
}
