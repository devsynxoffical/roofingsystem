import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content/ContentPage";
import { articles, getArticle } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const doc = getArticle((await params).slug);
  if (!doc) return {};
  const meta = pageMeta({ title: doc.title, description: doc.description, path: doc.path });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: doc.published, modifiedTime: doc.updated },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const doc = getArticle((await params).slug);
  if (!doc) notFound();
  return <ContentPage doc={doc} />;
}
