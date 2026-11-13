import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { MastermindPage } from "../../components/MastermindPage";
import { AUDIENCE_FUNNEL } from "../../lib/funnels";

export const metadata: Metadata = pageMeta({
  title: AUDIENCE_FUNNEL.metaTitle,
  description: AUDIENCE_FUNNEL.metaDescription,
  path: "/privatemastermind",
});

export default function AudienceSegmentationMastermindPage() {
  return <MastermindPage funnel={AUDIENCE_FUNNEL} layout="case-studies" />;
}
