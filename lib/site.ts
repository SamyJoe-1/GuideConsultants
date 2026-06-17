/**
 * Single source of truth for site-wide configuration: brand, contact details,
 * supported locales, and the full navigation information architecture.
 * Consumed by the header, footer, sitemap and structured data.
 */

export const SITE = {
  name: "Guide Consultants",
  shortName: "Guide",
  url: "https://www.guideconsultants.com",
  // Title/description mirror the original homepage SEO.
  title: "Citizenship by Investment | Guide Consultants",
  description:
    "Citizenship by Investment programs is the immediate entryway to a second passport or second Citizenship. Starting From $150,000.",
  founded: 2016,
  logo: "/images/2022/01/Group-2.svg",
} as const;

export const CONTACT = {
  phonePrimary: "+971 54 252 2229",
  phoneSecondary: "+971 4 3858850",
  whatsapp: "https://wa.me/+971542522229",
  email: "info@guideconsultants.com",
  address: "Office 43, 13th floor, Oud Metha Tower, Dubai, UAE",
  facebook: "https://www.facebook.com/guidecitizenship",
} as const;

export type LocaleCode =
  | "en" | "ar" | "fr" | "fa" | "ru" | "tr" | "zh-hans" | "es";

export interface Locale {
  code: LocaleCode;
  label: string;
  flag: string;
  dir: "ltr" | "rtl";
  /** Path prefix for this locale ("" for the default/root English site). */
  prefix: string;
  htmlLang: string;
}

export const LOCALES: Locale[] = [
  { code: "en", label: "English", flag: "/images/flags/gb.svg", dir: "ltr", prefix: "", htmlLang: "en" },
  { code: "ar", label: "عربي", flag: "/images/flags/ae.svg", dir: "rtl", prefix: "/ar", htmlLang: "ar" },
  { code: "fr", label: "Français", flag: "/images/flags/fr.svg", dir: "ltr", prefix: "/fr", htmlLang: "fr" },
  { code: "fa", label: "فارسی", flag: "/images/flags/ir.svg", dir: "rtl", prefix: "/fa", htmlLang: "fa" },
  { code: "ru", label: "Русский", flag: "/images/flags/ru.svg", dir: "ltr", prefix: "/ru", htmlLang: "ru" },
  { code: "tr", label: "Türkçe", flag: "/images/flags/tr.svg", dir: "ltr", prefix: "/tr", htmlLang: "tr" },
  { code: "zh-hans", label: "中文", flag: "/images/flags/cn.svg", dir: "ltr", prefix: "/zh-hans", htmlLang: "zh-Hans" },
  { code: "es", label: "Español", flag: "/images/flags/es.svg", dir: "ltr", prefix: "/es", htmlLang: "es" },
];

export const DEFAULT_LOCALE = LOCALES[0];

/** hreflang map for <link rel="alternate"> and metadata.alternates.languages. */
export const HREFLANG: Record<string, string> = {
  "x-default": SITE.url + "/",
  en: SITE.url + "/",
  ar: SITE.url + "/ar/",
  fr: SITE.url + "/fr/",
  fa: SITE.url + "/fa/",
  ru: SITE.url + "/ru/",
  tr: SITE.url + "/tr/",
  "zh-hans": SITE.url + "/zh-hans/",
  es: SITE.url + "/es/",
};

export interface NavChild {
  label: string;
  href: string;
  image?: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** Visual treatment of the dropdown. */
  mega?: "grid" | "list";
}

export const NAV: NavItem[] = [
  {
    label: "Citizenship",
    href: "/citizenship-by-investment/",
    mega: "grid",
    children: [
      { label: "Dominica", href: "/citizenship-by-investment/dominica-citizenship/", image: "/images/2020/10/Dominica.jpg" },
      { label: "Saint Kitts and Nevis", href: "/citizenship-by-investment/saint-kitts-and-nevis-citizenship-program/", image: "/images/2020/10/St-Kitts-Nevis.jpg" },
      { label: "Grenada", href: "/citizenship-by-investment/grenada-citizenship/", image: "/images/2020/10/Grenada.jpg" },
      { label: "Antigua & Barbuda", href: "/citizenship-by-investment/antigua-and-barbuda-citizenship/", image: "/images/2020/10/Antigua-Barbuda.jpg" },
      { label: "Saint Lucia", href: "/citizenship-by-investment/saint-lucia-citizenship/", image: "/images/2020/10/st.-lucia.png" },
      { label: "Montenegro", href: "/citizenship-by-investment/montenegro-citizenship/", image: "/images/2020/10/montenegro.jpg" },
      { label: "Vanuatu", href: "/citizenship-by-investment/vanuatu-citizenship/", image: "/images/2020/10/Vanuatu.png" },
      { label: "Malta", href: "/citizenship-by-investment/malta-citizenship/", image: "/images/2020/10/Malta.jpg" },
      { label: "Cyprus", href: "/citizenship-by-investment/cyprus-citizenship/", image: "/images/2020/10/Cyprus.jpg" },
      { label: "Turkey", href: "/citizenship-by-investment/turkey-citizenship/", image: "/images/2020/10/turkey.png" },
      { label: "Egypt", href: "/citizenship-by-investment/egypt-citizenship-program/", image: "/images/2023/07/egypt.webp" },
    ],
  },
  {
    label: "Golden Visa",
    href: "/golden-visa/",
    mega: "grid",
    children: [
      { label: "Cyprus", href: "/golden-visa/cyprus-golden-visa/", image: "/images/2020/10/Cyprus.jpg" },
      { label: "Greece", href: "/golden-visa/greece-golden-visa/", image: "/images/2020/10/Greece.jpg" },
      { label: "Malta", href: "/golden-visa/malta-golden-visa/", image: "/images/2020/10/Malta.jpg" },
      { label: "Portugal", href: "/golden-visa/portugal-golden-visa/", image: "/images/2020/10/Portugal.jpg" },
      { label: "Spain", href: "/golden-visa/spain-golden-visa/", image: "/images/2020/10/Spain.jpg" },
      { label: "US Gold Card Visa", href: "/golden-visa/us/", image: "/images/2025/09/usa.jpg" },
    ],
  },
  {
    label: "Passports",
    href: "/passport-ranking/",
    mega: "list",
    children: [
      { label: "Antigua and Barbuda Passport", href: "/passports/antigua-and-barbuda-passport/" },
      { label: "Dominica Passport", href: "/passports/dominica-passport/" },
      { label: "Grenada Passport", href: "/passports/grenada-passport/" },
      { label: "Saint Kitts & Nevis Passport", href: "/passports/st-kitts-passport/" },
      { label: "Saint Lucia Passport", href: "/passports/saint-lucia-passport/" },
      { label: "Turkey Passport", href: "/passports/turkey-passport/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "News", href: "/news/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
];

/** Footer link groups (mirrors the original footer). */
export const FOOTER_CITIZENSHIP: NavChild[] =
  NAV[0].children!.slice(0, 10);

export const FOOTER_GOLDEN_VISA: NavChild[] =
  NAV[1].children!.slice(0, 5);

export const FOOTER_QUICK_LINKS: NavChild[] = [
  { label: "Passport Ranking", href: "/passport-ranking/" },
  { label: "About Us", href: "/about-us/" },
  { label: "News", href: "/news/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const FOOTER_LEGAL: NavChild[] = [
  { label: "Terms of use", href: "/terms-of-use/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
];
