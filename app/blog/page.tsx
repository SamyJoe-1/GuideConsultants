import type { Metadata } from "next";
import { ArticleListing } from "@/components/templates/ArticlePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { BLOG } from "@/content/blog";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const URL = `${SITE.url}/blog/`;
const TITLE = "Blog";
const DESC = "Expert guides and insights on citizenship by investment, golden visas, second passports and global mobility from Guide Consultants.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        webPageSchema({ url: URL, title: TITLE, description: DESC }),
        breadcrumbSchema([{ name: "Home", url: SITE.url + "/" }, { name: "Blog", url: URL }]),
      ]} />
      <ArticleListing
        sectionLabel="Blog"
        title="Insights & Guides"
        intro="In-depth guides on second citizenship, golden visas, passports and the world of global mobility."
        articles={BLOG}
        basePath="/blog"
      />
    </>
  );
}
