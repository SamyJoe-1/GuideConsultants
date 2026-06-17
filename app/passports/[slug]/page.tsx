import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PassportDetail } from "@/components/templates/PassportDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { PASSPORTS, getPassport } from "@/content/passports";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PASSPORTS.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getPassport(slug);
  if (!p) return {};
  const url = `${SITE.url}${p.href}`;
  return {
    title: p.metaTitle || p.title,
    description: p.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: p.metaTitle || p.title, description: p.metaDescription, url, images: [p.heroImage] },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const p = getPassport(slug);
  if (!p) notFound();
  const url = `${SITE.url}${p.href}`;
  return (
    <>
      <JsonLd data={[
        webPageSchema({ url, title: p.metaTitle || p.title, description: p.metaDescription }),
        breadcrumbSchema([
          { name: "Home", url: SITE.url + "/" },
          { name: "Passports", url: SITE.url + "/passport-ranking/" },
          { name: p.name, url },
        ]),
        ...(p.faqs.length ? [faqSchema(p.faqs)] : []),
      ]} />
      <PassportDetail passport={p} />
    </>
  );
}
