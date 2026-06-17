import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const URL = `${SITE.url}/about-us/`;
const TITLE = "About Us";
const DESC =
  "Founded in 2016, Guide Consultants is a leading government-authorized agency for Citizenship by Investment and Golden Visa programs, serving clients worldwide from Dubai.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL },
};

const intro = [
  { title: "Who are we?", text: "Founded in 2016, Guide Consultants set out to become a leading authorized agency in the Citizenship by Investment programs of the Eastern Caribbean region." },
  { title: "What do we do?", text: "We leverage our extensive network and over 10 years of experience in the industry, to provide thousands of clients worldwide with their second citizenship and passport demands." },
  { title: "Why us?", text: "We operate in complete transparency and provide tailored solutions based on our client needs, while always being fully compliant with government rules and regulations." },
];

const pillars = [
  { title: "Our Mission", image: "/images/2020/07/ab-our-mission.jpg", text: "We work with governments to help our clients obtain Citizenship by Investment and gain the freedom of traveling without borders limitations. We are an authorized agency and service specialists that create exceptional value for our clients through a highly secure, reliable, and transparent process." },
  { title: "Our Vision", image: "/images/2020/07/ab-our-vision.jpg", text: "To be a global leader in the Citizenship by Investment and Golden Visa industry. We help families leverage their investments to build safer, more stable lives, free from political uncertainty and nationality-based restrictions, empowering clients with global mobility and the right to relocate and settle in the country of their choice." },
  { title: "Our Values", image: "/images/2020/07/ab-our-value.jpg", text: "Respect for the individual, integrity in all acts, and client value creation. We value diversity, operate in full transparency and confidentiality, and build long-term relationships — at Guide Consultants, our clients become a part of our family." },
];

const values = [
  { title: "Respect for Individual", text: "Valuing diversity and unique contributions, maintaining an open environment and treating each person with respect to reflect Guide Consultants’ core values." },
  { title: "Integrity", text: "Being ethical and honest in all acts, while operating in full transparency with clients to maintain openness and confidentiality." },
  { title: "Client Value Creation", text: "Enabling clients to acquire their new citizenship and creating a long-term relationship by being responsive and relevant to any post-service requirements." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ url: URL, title: TITLE, description: DESC }),
          breadcrumbSchema([{ name: "Home", url: SITE.url + "/" }, { name: "About Us", url: URL }]),
        ]}
      />

      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <Container className="py-14 lg:py-20">
          <Breadcrumb tone="dark" items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">About Guide Consultants</h1>
          <p className="mt-5 max-w-2xl text-white/80">
            A trusted, government-authorized partner helping investors and their families
            secure a second citizenship and global mobility since {SITE.founded}.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {intro.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-white p-7 shadow-soft">
                <h2 className="text-xl font-bold text-navy-800">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-14 text-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl">
              <Image src="/images/2022/08/Guide-map.webp" alt="Guide Consultants global coverage" width={720} height={500} className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Our Geographical Coverage</h2>
              <p className="mt-4 text-white/80">
                Our headquarters is based in Dubai, while we operate globally with offices and
                partnerships across the MENA region, Africa, Asia, Europe and the Caribbean.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-xl bg-white/10 p-5 text-center">
                  <dt className="text-3xl font-bold text-gold-300">1000+</dt>
                  <dd className="mt-1 text-sm text-white/70">Clients served</dd>
                </div>
                <div className="rounded-xl bg-white/10 p-5 text-center">
                  <dt className="text-3xl font-bold text-gold-300">15</dt>
                  <dd className="mt-1 text-sm text-white/70">Programs & jurisdictions</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:1024px) 100vw, 380px" className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-navy-800">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="Our Values" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 shadow-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-500 font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-navy-800">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCta />
    </>
  );
}
