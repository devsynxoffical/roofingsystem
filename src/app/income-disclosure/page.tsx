import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Income Disclosure | Roofing Systems Co.",
  description:
    "Income disclaimer and disclosure for Roofing Systems Co. results and earnings claims.",
};

const sections = [
  {
    heading: "1. Results Are Not Guaranteed",
    body: [
      "Any results, revenue figures, or return-on-investment examples shown by Roofing Systems Co. are illustrative only. They are not typical, and they are not a promise or guarantee of future earnings or business performance.",
    ],
  },
  {
    heading: "2. Earnings Depend On You",
    body: [
      "Your results depend on many factors outside our control, including how well you follow up on leads, your appointment conversion rate, your sales ability, pricing, market conditions, and seasonality. You are solely responsible for running appointments and closing sales.",
    ],
  },
  {
    heading: "3. Guarantee Is In Writing",
    body: [
      "The only guarantee we offer is the one described in your written agreement, including the 90-day guarantee terms agreed in writing. No verbal statement, testimonial, or marketing claim creates an additional guarantee.",
    ],
  },
  {
    heading: "4. Testimonials & Endorsements",
    body: [
      "Testimonials reflect the experience of individual clients and do not represent the experience of all clients. They are not a guarantee of your results.",
    ],
  },
  {
    heading: "5. Investment Risk",
    body: [
      "Marketing spend, advertising platforms, and business outcomes carry inherent risk. You should make business decisions based on your own judgment and professional advice.",
    ],
  },
];

export default function IncomeDisclosurePage() {
  return (
    <LegalPage
      title="Income Disclosure"
      updated="August 8, 2026"
      intro="Important disclosure about results, earnings, and the only guarantee we provide."
      sections={sections}
    />
  );
}
