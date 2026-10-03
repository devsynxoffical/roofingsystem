import type { Metadata } from "next";
import { MastermindPage } from "../../components/MastermindPage";
import { AUDIENCE_FUNNEL } from "../../lib/funnels";

export const metadata: Metadata = {
  title: AUDIENCE_FUNNEL.metaTitle,
  description: AUDIENCE_FUNNEL.metaDescription,
};

export default function AudienceSegmentationMastermindPage() {
  return <MastermindPage funnel={AUDIENCE_FUNNEL} />;
}
