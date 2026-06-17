import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/templates/ArticlePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { NEWS, getArticle } from "@/content/news";
import { SITE } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return NEWS.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SITE.url}/news/${a.slug}/`;
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: url },
    openGraph: { type: "article", title: a.title, description: a.excerpt, url, images: [a.image], publishedTime: a.date },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const url = `${SITE.url}/news/${a.slug}/`;
  const related = NEWS.filter((n) => n.slug !== a.slug).slice(0, 3);
  return (
    <>
      <JsonLd data={[
        articleSchema({ url, title: a.title, description: a.excerpt, image: a.image, datePublished: a.date, section: a.category }),
        breadcrumbSchema([
          { name: "Home", url: SITE.url + "/" },
          { name: "News", url: SITE.url + "/news/" },
          { name: a.title, url },
        ]),
      ]} />
      <ArticlePage article={a} basePath="/news" sectionLabel="News" related={related} />
    </>
  );
}
