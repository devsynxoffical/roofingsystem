import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { roofingLeadsHub as doc } from "@/lib/cities";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: doc.title, description: doc.description, path: doc.path });

export default function Page() {
  return <LandingPage doc={doc} />;
}
