import type { Metadata } from "next";
import { LegalPage, type LegalContent } from "@/components/templates/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import data from "@/content/generated/pages/privacy-policy.json";

const URL = `${SITE.url}/privacy-policy/`;
const content = data as LegalContent;

export const metadata: Metadata = {
  title: content.metaTitle || content.title,
  description: content.metaDescription,
  alternates: { canonical: URL },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        webPageSchema({ url: URL, title: content.title, description: content.metaDescription }),
        breadcrumbSchema([{ name: "Home", url: SITE.url + "/" }, { name: content.title, url: URL }]),
      ]} />
      <LegalPage data={content} />
    </>
  );
}
