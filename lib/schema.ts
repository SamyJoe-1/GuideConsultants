/**
 * JSON-LD structured-data builders. Mirrors the Yoast graph used by the
 * original site (Organization, WebSite, BreadcrumbList, FAQPage, Article).
 */
import { SITE, CONTACT } from "@/lib/site";

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url + "/",
    logo: {
      "@type": "ImageObject",
      url: SITE.url + SITE.logo,
    },
    description: SITE.description,
    foundingDate: String(SITE.founded),
    email: CONTACT.email,
    telephone: CONTACT.phonePrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 43, 13th floor, Oud Metha Tower",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [CONTACT.facebook],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.url + "/",
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function webPageSchema({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema({
  url,
  title,
  description,
  image,
  datePublished,
  section,
}: {
  url: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished,
    dateModified: datePublished,
    articleSection: section,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": ORG_ID, name: SITE.name },
    publisher: { "@id": ORG_ID },
  };
}
