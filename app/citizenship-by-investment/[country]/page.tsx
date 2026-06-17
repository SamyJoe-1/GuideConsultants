import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryDetail } from "@/components/templates/CountryDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { CBI_COUNTRIES, getCountry } from "@/content/countries";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

type Params = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return CBI_COUNTRIES.map((c) => ({ country: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country } = await params;
  const c = getCountry(country, "citizenship-by-investment");
  if (!c) return {};
  const url = `${SITE.url}${c.href}`;
  return {
    title: c.metaTitle || c.title,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: c.metaTitle || c.title, description: c.metaDescription, url, images: [c.heroImage] },
  };
}

export default async function Page({ params }: Params) {
  const { country } = await params;
  const c = getCountry(country, "citizenship-by-investment");
  if (!c) notFound();

  const url = `${SITE.url}${c.href}`;
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ url, title: c.metaTitle || c.title, description: c.metaDescription }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url + "/" },
            { name: "Citizenship by Investment", url: SITE.url + "/citizenship-by-investment/" },
            { name: c.name, url },
          ]),
          ...(c.faqs.length ? [faqSchema(c.faqs)] : []),
        ]}
      />
      <CountryDetail country={c} />
    </>
  );
}
