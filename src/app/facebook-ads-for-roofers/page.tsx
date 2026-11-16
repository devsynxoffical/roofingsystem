import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { facebookAdsForRoofers as doc } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: doc.title, description: doc.description, path: doc.path });

export default function Page() {
  return <ContentPage doc={doc} />;
}
