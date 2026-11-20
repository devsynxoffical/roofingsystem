import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { roofingMarketing as doc } from "@/lib/landings";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: doc.title, description: doc.description, path: doc.path });

export default function Page() {
  return <LandingPage doc={doc} />;
}
