import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/LandingPage";
import { cityPages } from "@/lib/cities";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return cityPages.map((c) => ({ city: c.slug }));
}

const find = (slug: string) => cityPages.find((c) => c.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const doc = find((await params).city);
  if (!doc) return {};
  return pageMeta({ title: doc.title, description: doc.description, path: doc.path });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const doc = find((await params).city);
  if (!doc) notFound();
  return <LandingPage doc={doc} />;
}
