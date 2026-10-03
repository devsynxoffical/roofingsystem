import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "DMCA Policy | Roofing Systems Co.",
  description: "Copyright complaints and takedown policy for Roofing Systems Co.",
};

const sections = [
  {
    heading: "1. Copyright Complaints",
    body: [
      "Roofing Systems Co. respects the intellectual property rights of others and expects our users and partners to do the same. If you believe that material on our site or in our campaigns infringes your copyright, you may submit a notice of infringement as described below.",
    ],
  },
  {
    heading: "2. Filing a Notice",
    body: [
      "A valid notice must include: (a) identification of the copyrighted work claimed to be infringed; (b) identification of the material that is claimed to be infringing, with enough detail for us to locate it; (c) your contact information; (d) a statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or the law; and (e) a statement, under penalty of perjury, that the information in your notice is accurate and that you are authorized to act on behalf of the owner.",
    ],
  },
  {
    heading: "3. Counter-Notification",
    body: [
      "If you believe material you posted was removed by mistake or misidentification, you may submit a counter-notification containing: identification of the material and its location before removal, a statement under penalty of perjury that you have a good-faith belief the material was removed by mistake or misidentification, your contact information, and consent to jurisdiction. Upon a valid counter-notification we may restore the material while the dispute is resolved.",
    ],
  },
  {
    heading: "4. Repeat Infringers",
    body: [
      "In appropriate circumstances, we may terminate accounts or relationships of users or partners who are repeat infringers.",
    ],
  },
  {
    heading: "5. Contact",
    body: [
      "DMCA notices and counter-notifications should be submitted through the strategy call booking page on this site, or to the contact information provided there.",
    ],
  },
];

export default function DmcaPage() {
  return (
    <LegalPage
      title="DMCA Policy"
      updated="August 8, 2026"
      intro="This page explains how copyright infringement claims are handled."
      sections={sections}
    />
  );
}
