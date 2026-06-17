import type { Metadata } from "next";
import { ArticleListing } from "@/components/templates/ArticlePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { NEWS } from "@/content/news";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const URL = `${SITE.url}/news/`;
const TITLE = "News";
const DESC = "The latest immigration, citizenship, golden visa and travel news from around the world, curated by Guide Consultants.";

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
        breadcrumbSchema([{ name: "Home", url: SITE.url + "/" }, { name: "News", url: URL }]),
      ]} />
      <ArticleListing
        sectionLabel="News"
        title="Latest News & Updates"
        intro="Stay informed with the latest developments in citizenship, residency, immigration and global travel."
        articles={NEWS}
        basePath="/news"
      />
    </>
  );
}
