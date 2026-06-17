import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Phone, Mail, MapPin, Whatsapp } from "@/components/ui/Icons";
import { SITE, CONTACT } from "@/lib/site";
import { breadcrumbSchema, webPageSchema, organizationSchema } from "@/lib/schema";

const URL = `${SITE.url}/contact-us/`;
const TITLE = "Contact Us";
const DESC =
  "Get in touch with Guide Consultants. Book a free consultation with our expert advisors for Citizenship by Investment and Golden Visa programs. Office in Dubai, UAE.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL },
};

const cards = [
  { icon: MapPin, title: "Head Office", lines: [CONTACT.address], href: "https://maps.google.com/?q=Oud+Metha+Tower+Dubai", action: "Get directions" },
  { icon: Phone, title: "Call us", lines: [CONTACT.phonePrimary, CONTACT.phoneSecondary], href: `tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`, action: "Call now" },
  { icon: Mail, title: "Email us", lines: [CONTACT.email], href: `mailto:${CONTACT.email}`, action: "Send email" },
  { icon: Whatsapp, title: "WhatsApp", lines: ["Chat with an advisor"], href: CONTACT.whatsapp, action: "Start chat" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ url: URL, title: TITLE, description: DESC }),
          organizationSchema(),
          breadcrumbSchema([{ name: "Home", url: SITE.url + "/" }, { name: "Contact Us", url: URL }]),
        ]}
      />

      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <Container className="py-14 lg:py-20">
          <Breadcrumb tone="dark" items={[{ name: "Home", href: "/" }, { name: "Contact Us" }]} />
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">Let’s talk about your future</h1>
          <p className="mt-5 max-w-2xl text-white/80">
            Our expert advisors are ready to help you choose the right Citizenship by
            Investment or Golden Visa program. Reach out — your consultation is free and
            completely confidential.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-800">Get in touch</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {cards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.title}
                      href={c.href}
                      className="group rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-500 group-hover:bg-gold-100">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-4 font-bold text-navy-800">{c.title}</h3>
                      {c.lines.map((l) => (
                        <p key={l} className="mt-1 text-sm text-slate-600">{l}</p>
                      ))}
                      <span className="mt-3 inline-block text-sm font-semibold text-navy-500 link-underline">{c.action}</span>
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="Guide Consultants office location"
                  src="https://www.google.com/maps?q=Oud%20Metha%20Tower%20Dubai&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800">Book a free consultation</h2>
              <p className="mt-2 text-slate-600">Fill out the form and our Expert Advisor will reach out to you.</p>
              <div className="mt-6">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
