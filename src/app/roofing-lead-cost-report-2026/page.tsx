import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { costReport as doc } from "@/lib/content";
import { pageMeta, JsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({ title: doc.title, description: doc.description, path: doc.path }),
};

// Dataset schema so search engines and AI answer engines can cite the figures as original data.
const dataset = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Roofing Lead Cost Report 2026",
  description:
    "Cost per lead from 18 published roofing lead generation campaigns (11,190 leads) run on Facebook and Instagram between August 2025 and October 2026. Median $13.40, range $3.75 to $24; phone-verified campaigns median $14.80, standard campaigns median $5.31.",
  url: `${site.url}${doc.path}`,
  creator: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  temporalCoverage: "2025-08/2026-10",
  spatialCoverage: { "@type": "Country", name: "United States" },
  variableMeasured: ["Cost per lead (USD)", "Leads per campaign"],
  keywords: ["roofing leads", "cost per lead", "roofing lead generation", "Facebook ads for roofers"],
  isAccessibleForFree: true,
  datePublished: doc.published,
  dateModified: doc.updated,
};

export default function Page() {
  return (
    <>
      <JsonLd data={dataset} />
      <ContentPage doc={doc} />
    </>
  );
}
