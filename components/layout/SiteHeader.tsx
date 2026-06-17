"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, CONTACT, SITE, type NavItem } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Phone, Whatsapp, ChevronDown, Menu, Close, ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact strip */}
      <div className="hidden bg-navy-900 text-white/90 lg:block">
        <div className="container-px flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
              <Whatsapp className="h-4 w-4 text-gold-300" />
              {CONTACT.phonePrimary}
            </a>
            <a href={`tel:${CONTACT.phoneSecondary.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-gold-300" />
              {CONTACT.phoneSecondary}
            </a>
          </div>
          <LanguageSwitcher tone="light" />
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-line bg-white/95 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_8px_30px_-18px_rgba(0,11,40,0.45)]",
        )}
      >
        <div className="container-px flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link href="/" aria-label={SITE.name} className="flex shrink-0 items-center gap-2">
            <Image src={SITE.logo} alt={SITE.name} width={74} height={64} className="h-11 w-auto lg:h-14" priority />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact-us/" variant="gold" size="sm" className="hidden sm:inline-flex">
              Get a free consultation
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-navy-700 xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 xl:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-950/50 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Image src={SITE.logo} alt={SITE.name} width={60} height={52} className="h-10 w-auto" />
            <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-md p-1.5 text-navy-700">
              <Close className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-2 py-3">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-line/70">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-3 py-3 text-left font-semibold text-navy-800"
                        onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                        aria-expanded={expanded === item.label}
                      >
                        {item.label}
                        <ChevronDown className={cn("h-5 w-5 transition-transform", expanded === item.label && "rotate-180")} />
                      </button>
                      {expanded === item.label && (
                        <ul className="pb-2">
                          <li>
                            <Link href={item.href} className="block rounded-md px-5 py-2 text-sm font-medium text-gold-400">
                              All {item.label}
                            </Link>
                          </li>
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} className="block rounded-md px-5 py-2 text-sm text-slate-600 hover:bg-navy-50">
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="block px-3 py-3 font-semibold text-navy-800">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-line px-5 py-4">
            <Button href="/contact-us/" variant="gold" className="w-full">
              Get a free consultation
            </Button>
            <div className="mt-4 flex items-center justify-between">
              <a href={CONTACT.whatsapp} className="inline-flex items-center gap-2 text-sm font-medium text-navy-700">
                <Whatsapp className="h-5 w-5 text-whatsapp" /> WhatsApp
              </a>
              <LanguageSwitcher tone="dark" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="rounded-full px-3.5 py-2 text-[15px] font-semibold text-navy-700 transition-colors hover:text-gold-400"
        >
          {item.label}
        </Link>
      </li>
    );
  }
  return (
    <li className="group relative">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-semibold text-navy-700 transition-colors group-hover:text-gold-400"
      >
        {item.label}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </Link>

      {/* Dropdown panel */}
      <div
        className={cn(
          "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200",
          "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
        )}
      >
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-[0_30px_60px_-25px_rgba(0,11,40,0.45)]",
            item.mega === "grid" ? "w-[640px]" : "w-[460px]",
          )}
        >
          {item.mega === "grid" ? (
            <div className="grid grid-cols-3 gap-2">
              {item.children.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group/card flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-navy-50"
                >
                  {c.image && (
                    <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-lg">
                      <Image src={c.image} alt="" fill sizes="56px" className="object-cover transition-transform duration-300 group-hover/card:scale-110" />
                    </span>
                  )}
                  <span className="text-sm font-medium leading-tight text-navy-700">{c.label}</span>
                </Link>
              ))}
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-1">
              {item.children.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-gold-400"
                  >
                    {c.label}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link
            href={item.href}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-navy-50 py-2.5 text-sm font-semibold text-navy-600 transition-colors hover:bg-navy-100"
          >
            View all {item.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </li>
  );
}
