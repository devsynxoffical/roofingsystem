import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { landings } from "@/lib/landings";
import { articles, services } from "@/lib/content";
import { NOINDEX_CASES, caseStudies } from "@/lib/caseStudies";

// Every public page on the site. Add new pages here so search engines find them.
const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; updated?: string }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/privatemastermind", priority: 0.9, changeFrequency: "monthly" },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" },
  ...services.map((d) => ({ path: d.path, priority: 0.9, changeFrequency: "monthly" as const, updated: d.updated })),
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...landings.map((d) => ({ path: d.path, priority: 0.9, changeFrequency: "monthly" as const })),
  { path: "/case-studies", priority: 0.9, changeFrequency: "weekly" },
  ...caseStudies.filter((c) => !NOINDEX_CASES.has(c.slug)).map((c) => ({ path: `/case-studies/${c.slug}`, priority: 0.7, changeFrequency: "monthly" as const, updated: c.date })),
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  ...articles.map((d) => ({ path: d.path, priority: 0.7, changeFrequency: "monthly" as const, updated: d.updated })),
  { path: "/income-disclosure", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/dmca", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency, updated }) => ({
    url: `${site.url}${path}`,
    lastModified: updated ? new Date(updated) : lastModified,
    changeFrequency,
    priority,
  }));
}
