import type { Metadata } from "next";
import { site } from "./site";
import { faqs } from "./faqs";

/*
  Structured data (schema.org JSON-LD) for search engines and AI answer engines.
  Only facts already stated on the site are used here — no ratings or reviews.
  Social profiles are left out until the real profile URLs replace the
  placeholders in site.socials.
*/

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

const realSocials = site.socials
  .map((s) => s.href)
  .filter((href) => new URL(href).pathname.replace(/\/$/, "") !== "");

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      foundingDate: String(site.founded),
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.addressLocality,
        addressRegion: site.location.addressRegion,
        addressCountry: site.location.addressCountry,
      },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Roofing contractors doing $1M+ in annual revenue",
      },
      knowsAbout: [
        "Roofing marketing",
        "Roofing lead generation",
        "Client acquisition systems for roofing companies",
        "Meta (Facebook and Instagram) ads for roofers",
        "Roofing landing pages and sales funnels",
        "CRM setup and AI follow-up for contractors",
        "Lead qualification",
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Done-for-you roofing client acquisition system",
          serviceType: "Marketing and client acquisition for roofing companies",
          description:
            "Offer positioning, Meta ads, ad creatives, landing pages, sales funnel, CRM setup, AI follow-up, email and SMS sequences, and lead qualification, installed and managed for roofing contractors.",
          provider: { "@id": ORG_ID },
          areaServed: { "@type": "Country", name: "United States" },
        },
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        url: `${site.url}${site.bookCallUrl}`,
        availableLanguage: ["English"],
      },
      ...(realSocials.length ? { sameAs: realSocials } : {}),
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

/** Renders JSON-LD. `<` is escaped so content can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Per-page metadata: canonical URL plus matching Open Graph / Twitter tags. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      title,
      description,
      url: path || "/",
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: Double your roofing revenue in 90 days` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}
