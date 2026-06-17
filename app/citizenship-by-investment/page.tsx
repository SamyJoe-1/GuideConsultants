import type { Metadata } from "next";
import { ProgramHub } from "@/components/templates/ProgramHub";
import { JsonLd } from "@/components/seo/JsonLd";
import { CBI_COUNTRIES } from "@/content/countries";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const URL = `${SITE.url}/citizenship-by-investment/`;
const TITLE = "Citizenship by Investment Programs";
const DESC =
  "Acquire a second citizenship and passport through the world’s leading Citizenship by Investment programs — permanent citizenship, visa-free travel and no residency required.";

const INTRO =
  "Citizenship by Investment programs are immediate entryways to a second passport wherein applicants are granted permanent citizenship and passport after making an investment in the citizenship-granting country without the need of residing or visiting the country. The main CBI program options include a non-refundable contribution (donation) or government-approved real estate investment. Acquiring a second passport from these countries gives visa-free access to more than 130 countries including the Schengen territory, UK, Singapore and Hong Kong, alongside new business opportunities and advantages.";

const BENEFITS = [
  "Permanent citizenship passed to future generations",
  "Visa-free access to 140+ countries",
  "No residency or visit requirement in most programs",
  "Full dual-citizenship rights retained",
  "Citizenship in as little as 3–4 months",
  "Favourable or zero tax treatment",
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
            { name: "Citizenship by Investment", url: URL },
          ]),
        ]}
      />
      <ProgramHub
        kind="citizenship"
        title="Your Guide to a Second Citizenship"
        intro={INTRO}
        countries={CBI_COUNTRIES}
        benefits={BENEFITS}
      />
    </>
  );
}
