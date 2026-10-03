import type { Metadata } from "next";
import { MastermindPage } from "../../components/MastermindPage";
import { ADS_COPY_FUNNEL } from "../../lib/funnels";

export const metadata: Metadata = {
  title: ADS_COPY_FUNNEL.metaTitle,
  description: ADS_COPY_FUNNEL.metaDescription,
};

export default function AdsCopyMastermindPage() {
  return <MastermindPage funnel={ADS_COPY_FUNNEL} />;
}
