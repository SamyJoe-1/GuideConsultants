import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { AuthorizedAgent } from "@/components/sections/AuthorizedAgent";
import { CompareCards } from "@/components/sections/CompareCards";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { Benefits } from "@/components/sections/Benefits";
import { LatestNews } from "@/components/sections/LatestNews";
import { FaqSection } from "@/components/sections/FaqSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, faqSchema } from "@/lib/schema";
import { FAQS } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(FAQS)]} />
      <Hero />
      <AboutIntro />
      <AuthorizedAgent />
      <CompareCards />
      <ProgramsGrid />
      <ConsultationCta />
      <Benefits />
      <LatestNews />
      <FaqSection />
      <Testimonials />
      <WhyUs />
    </>
  );
}
