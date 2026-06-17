import type { Metadata } from "next";
import { ProgramHub } from "@/components/templates/ProgramHub";
import { JsonLd } from "@/components/seo/JsonLd";
import { GV_COUNTRIES } from "@/content/countries";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const URL = `${SITE.url}/golden-visa/`;
const TITLE = "Golden Visa Programs";
const DESC =
  "Secure European residency through a Golden Visa. Compare the leading Residency by Investment programs in Portugal, Greece, Spain, Malta and Cyprus.";

const INTRO =
  "Golden Visa, also known as Investor Visa, is a Residency by Investment program offered by various European countries for investors who wish to migrate and live in Europe, or to maintain a second residency permit. The countries that offer Residency by Investment — including Portugal, Greece, Spain, Malta and Cyprus — are among the most beautiful in the world, with hospitable people, wonderful climates and excellent investment opportunities. The Golden Visa program is the most popular route to acquire European citizenship, with most countries allowing applicants to apply for permanent residency and citizenship within five to ten years.";

const BENEFITS = [
  "Residency in a leading European country",
  "Visa-free travel across the Schengen Zone",
  "A clear path to permanent residency and citizenship",
  "Real estate investment that can generate returns",
  "Family included in a single application",
  "Access to European healthcare and education",
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ url: URL, title: TITLE, description: DESC }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url + "/" },
            { name: "Golden Visa", url: URL },
          ]),
        ]}
      />
      <ProgramHub
        kind="golden-visa"
        title="Your Guide to a Golden Visa"
        intro={INTRO}
        countries={GV_COUNTRIES}
        benefits={BENEFITS}
      />
    </>
  );
}
