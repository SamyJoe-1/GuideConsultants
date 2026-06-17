import Link from "next/link";
import Image from "next/image";
import {
  SITE,
  CONTACT,
  FOOTER_CITIZENSHIP,
  FOOTER_GOLDEN_VISA,
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL,
} from "@/lib/site";
import { Phone, Mail, MapPin, Whatsapp, Facebook } from "@/components/ui/Icons";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-gold-300">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-900 text-white">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image src={SITE.logo} alt={SITE.name} width={84} height={72} className="h-14 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A leading government-authorized agency for Citizenship by Investment and
              Golden Visa programs, helping clients worldwide secure a second passport
              and global mobility since {SITE.founded}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONTACT.facebook}
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold-300 hover:text-navy-900"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.whatsapp}
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-whatsapp hover:text-white"
              >
                <Whatsapp className="h-4 w-4" />
              </a>
            </div>
            <Image
              src="/images/2021/05/imc_logo-09.svg"
              alt="Investment Migration Council member"
              width={120}
              height={60}
              className="mt-6 h-12 w-auto opacity-90"
            />
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <LinkColumn title="Citizenship" links={FOOTER_CITIZENSHIP} />
            <div className="space-y-8">
              <LinkColumn title="Golden Visa" links={FOOTER_GOLDEN_VISA} />
            </div>
            <LinkColumn title="Quick Links" links={FOOTER_QUICK_LINKS} />
          </div>

          {/* Contact + newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-300">Head Office</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <span className="flex flex-col">
                  <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`} className="hover:text-white">{CONTACT.phonePrimary}</a>
                  <a href={`tel:${CONTACT.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-white">{CONTACT.phoneSecondary}</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </li>
            </ul>
            <h3 className="mt-7 text-sm font-bold uppercase tracking-wider text-gold-300">Newsletter</h3>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-5 text-sm text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. This website is
            operated by Guide Consultants LLC.
          </p>
          <ul className="flex items-center gap-5">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
