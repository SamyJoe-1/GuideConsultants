/**
 * Homepage content — extracted verbatim from the original site so copy and SEO
 * text stay faithful. Section components consume this data.
 */

export interface ProgramCard {
  title: string;
  blurb: string;
  href: string;
  image: string;
  kind: "citizenship" | "golden-visa";
}

export interface Benefit {
  title: string;
  text: string;
  icon: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Testimonial {
  quote: string;
  program: string;
}

export const HERO = {
  title: "Second Passport, Golden Visa, Passport Index, Immigration, and Visas",
  cta: { label: "Get a free consultation", href: "/contact-us/" },
};

export const ABOUT = {
  eyebrow: "About Guide Consultants",
  cards: [
    {
      icon: "/images/2020/08/what-we-are-icon.png",
      title: "Who we are",
      text: "Founded in 2016, Guide Consultants set out to become a leading authorized agency in the Citizenship by Investment and Golden Visa programs.",
    },
    {
      icon: "/images/2020/08/what-we-do-icon.png",
      title: "What do we do?",
      text: "We leverage our extensive network and over 10 years of experience in the industry to provide hundreds of clients worldwide with their second citizenship and passport demands.",
    },
  ],
  cta: { label: "Learn More", href: "/about-us/" },
};

export const AUTHORIZED = {
  title: "Government Authorized Agent",
  text: "We are one of very few companies that are licensed by all the countries that offer Citizenship by Investment Programs in the Eastern Caribbean Region.",
  agents: [
    { country: "Antigua & Barbuda", href: "https://cip.gov.ag/how-to-apply/authorised-representatives/", image: "/images/2026/05/Antigua-Barbuda.png" },
    { country: "Dominica", href: "https://www.cbiu.gov.dm/dominica-citizenship/authorised-agents/", image: "/images/2026/05/Dominica.png" },
    { country: "Saint Kitts & Nevis", href: "https://ciu.gov.kn/international-marketing-agents/", image: "/images/2026/05/Saint-Kitts-Nevis.png" },
    { country: "Grenada", href: "https://imagrenada.gd/agents/", image: "/images/2026/05/Grenada.png" },
    { country: "Saint Lucia", href: "https://www.cipsaintlucia.com/market-agents-and-promotors", image: "/images/2026/05/Saint-Lucia.png" },
  ],
};

export const COMPARE = {
  title: "Citizenship by Investment and Golden Visa",
  citizenship: {
    title: "Citizenship by Investment",
    points: [
      "Permanent Citizenship",
      "Applicants will be issued a passport of the citizenship granting country (renewable every 5 – 10 years)",
      "Majority of the citizenship countries don’t require applicants to reside or visit the country",
      "Freedom to travel visa free to more than 140 countries & territories including Schengen countries and the UK",
    ],
    href: "/citizenship-by-investment/",
  },
  goldenVisa: {
    title: "Golden Visas",
    points: [
      "Residency permits have a set of requirements to fulfill in order to renew",
      "Applicants will be granted an ID card which acts as an international travel document",
      "Majority of the golden visa countries require applicants to visit and reside in the country for a minimum stay requirement which leads to Citizenship",
      "Residency permit holders can travel freely within countries in the Schengen zone",
    ],
    href: "/golden-visa/",
  },
};

export const PROGRAMS_INTRO =
  "While many countries around the world offer citizenship by investment and golden visa programs, twelve countries stand out as they have the most well known official and legal programs. These countries are Antigua & Barbuda, Dominica, Grenada, Saint Kitts & Nevis, Saint Lucia, Vanuatu, Malta, Cyprus, Portugal, Greece, Spain, Turkey and Montenegro.";

export const PROGRAMS: ProgramCard[] = [
  { title: "Dominica Citizenship Program", blurb: "Dominica is well known as one of the most reputed and affordable programs in the eastern Caribbean region.", href: "/citizenship-by-investment/dominica-citizenship/", image: "/images/2020/07/dominica-featured-image1.jpg", kind: "citizenship" },
  { title: "Saint Kitts and Nevis Citizenship Program", blurb: "St Kitts & Nevis holds strong credentials for being the oldest Citizenship by Investment program in the world, established in 1984.", href: "/citizenship-by-investment/saint-kitts-and-nevis-citizenship-program/", image: "/images/2020/07/st-kitts-img-3-2.jpg", kind: "citizenship" },
  { title: "Egypt Citizenship Program", blurb: "The Egyptian citizenship by investment program was established in 2019. Obtain Egyptian citizenship within 6 Months.", href: "/citizenship-by-investment/egypt-citizenship-program/", image: "/images/2023/07/Egypt-Citizenship-Program.webp", kind: "citizenship" },
  { title: "Saint Lucia Citizenship Program", blurb: "Saint Lucia has established the Citizenship program in 2016, after inheriting years of experiences from the other Caribbean countries.", href: "/citizenship-by-investment/saint-lucia-citizenship/", image: "/images/2020/07/st-lucia-featured-img.jpg", kind: "citizenship" },
  { title: "Turkey Citizenship Program", blurb: "Established in 2017, the Turkey Citizenship by Investment Scheme provides one of the fastest and simplest ways to secure a second passport.", href: "/citizenship-by-investment/turkey-citizenship/", image: "/images/2020/09/turkey-featured-image.jpg", kind: "citizenship" },
  { title: "Antigua and Barbuda Citizenship Program", blurb: "Antigua and Barbuda is known for the ease of access due to their international airport that serves as a terminal hub linking to other countries.", href: "/citizenship-by-investment/antigua-and-barbuda-citizenship/", image: "/images/2020/07/antigua-featured-img.jpg", kind: "citizenship" },
  { title: "Spain Golden Visa", blurb: "Spain residency program is known for its flexibility to applicants who wish to maintain their residency permit in Europe without living or visiting the country.", href: "/golden-visa/spain-golden-visa/", image: "/images/2020/07/citi-blog-img-9.jpg", kind: "golden-visa" },
  { title: "Grenada Citizenship Program", blurb: "Grenada citizenship is popular among investors due to the visa free access to China and their E-2 investor visa treaty with the USA.", href: "/citizenship-by-investment/grenada-citizenship/", image: "/images/2020/07/grenda-featured-img.jpg", kind: "citizenship" },
  { title: "Portugal Golden Visa", blurb: "Portugal residency program is one of the most sought-after due to the ability to apply for citizenship after 5 years without the need to reside in the country.", href: "/golden-visa/portugal-golden-visa/", image: "/images/2020/07/portugal-featured-img1.jpg", kind: "golden-visa" },
  { title: "Malta Citizenship Program", blurb: "Malta Citizenship by Investment program secures a direct route to acquire European citizenship.", href: "/citizenship-by-investment/malta-citizenship/", image: "/images/2020/07/malta-featured-img.jpg", kind: "citizenship" },
  { title: "Montenegro Citizenship Program", blurb: "Montenegro citizenship by investment program was launched in 2019, it allows foreign investors acquire European residency and citizenship within 6 months.", href: "/citizenship-by-investment/montenegro-citizenship/", image: "/images/2020/08/montenegro-featured-img.jpg", kind: "citizenship" },
  { title: "Cyprus Citizenship Program", blurb: "Cyprus offers the most assured path to Citizenship in Europe, popular among high net worth investors for its rapid citizenship through lucrative real estate.", href: "/citizenship-by-investment/cyprus-citizenship/", image: "/images/2020/07/cypurus-featured-img1.jpg", kind: "citizenship" },
  { title: "Malta Golden Visa", blurb: "Malta Residency Program offers low-risk investment to families who wish to acquire European residency permits quickly and legally.", href: "/golden-visa/malta-golden-visa/", image: "/images/2020/09/Malta.jpg", kind: "golden-visa" },
  { title: "Greece Golden Visa", blurb: "Greece Residency program is known for offering the lowest cost residency among the European residency by investment programs.", href: "/golden-visa/greece-golden-visa/", image: "/images/2020/07/greece-featured-img.jpg", kind: "golden-visa" },
  { title: "Cyprus Golden Visa", blurb: "Cyprus residency Permits can be obtained in just two months, making this one of the fastest and simplest investor visa programs in Europe.", href: "/golden-visa/cyprus-golden-visa/", image: "/images/2020/10/Cyprus.jpg", kind: "golden-visa" },
  { title: "Vanuatu Citizenship Program", blurb: "Vanuatu is the only country in the Asia-Pacific countries that offers Citizenship by Investment and is popular for its rapid processing time.", href: "/citizenship-by-investment/vanuatu-citizenship/", image: "/images/2020/07/vanuatu-featured-img1.jpg", kind: "citizenship" },
  { title: "US Gold Card Visa", blurb: "US Gold Card Visa — your gateway to residency in the United States, with a path to citizenship after at least 5 years of permanent residence.", href: "/golden-visa/us/", image: "/images/2025/06/us-golden-visa-1.webp", kind: "golden-visa" },
];

export const BENEFITS: Benefit[] = [
  { title: "Global Mobility", text: "Travel worldwide freely without the burden of visa rejection anymore, including visa free access to the Schengen zone and the UK.", icon: "/images/2020/08/global-mobility.png" },
  { title: "Family security", text: "Secure a better future for your children through high quality education and healthcare.", icon: "/images/2020/08/family-security.png" },
  { title: "Business opportunities", text: "Expand your business and start operating globally with easier access to the major business hubs.", icon: "/images/2020/08/business-op.png" },
  { title: "Tax Haven", text: "Preserve your wealth through a favorable tax regime in Europe or enjoy no tax liability offered in the Caribbean.", icon: "/images/2020/08/tax-haven.png" },
  { title: "Investment", text: "Invest in lucrative real estate deals that allow you to capitalize on your future by generating rental returns, with the prerogative to sell your assets within an average 5-year period.", icon: "/images/2020/08/investment.png" },
  { title: "Global Citizen", text: "Enjoy the freedom to relocate to Europe or other countries, away from political and economic instability.", icon: "/images/2020/08/global-citizen.png" },
];

export const FAQS: Faq[] = [
  { q: "How much does it cost to get a second passport?", a: "The price for a second passport differs from country to country. However, the option to get a second passport in countries that offer Citizenship by Investment is aimed at high net-worth individuals, the lowest costs start at $100,000 for a single applicant in the Caribbean while the highest costs climb to over $2 million in Cyprus." },
  { q: "How long does it take to get a second passport?", a: "The length of time to obtain a second passport differs from country to country. The Caribbean countries such as Dominica, St. Kitts and Nevis and St. Lucia offer one of the quickest routes to getting a second passport, which can be granted within 3 to 4 months. This can be contrasted with Spain, which requires applicants to reside permanently in the country for 10 years before applying for citizenship." },
  { q: "Why would you need a second passport?", a: "There are numerous benefits to having a second passport. Dual citizenship increases the numbers of countries in which you can live and work at (especially if your second passport is in the Schengen area). If you are worried about the future of your original country, it also gives you a “backup” country to move to, should you need it. A second passport can also open up many new countries around the world that you will be able to travel to visa-free such as the Schengen Zone, United Kingdom, Singapore, Hong Kong and many others." },
  { q: "Which countries offer Golden Visas?", a: "Many countries offer so-called Golden Visas, which are visas and permanent residency that is acquired through investment into the relevant country. Some popular options include Malta, Greece, Spain, Cyprus, Italy, and Portugal." },
  { q: "Which countries give Citizenship by Investment?", a: "There are many countries around the world that allow high-value investors to become citizens. Some of the most in-demand Citizenship by Investment options include Dominica, Saint Kitts and Nevis, Grenada, Antigua and Barbuda, Saint Lucia, Malta, and Cyprus." },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "I applied for a St Kitts and Nevis citizenship through Guide Consultants, and the process could not have gone more smoothly. Their team is very organized and professional. They are the best Citizenship by Investment company to use if you are looking for a second passport.", program: "St Kitts & Nevis Citizenship" },
  { quote: "My experience with Guide Consultants was incredible. I have applied for the Dominica Citizenship program with my family through them, and they were extremely responsive and transparent during the entire process. The time it took for us to receive our Dominica passports was only 3 months from the submission of the application.", program: "Dominica Citizenship" },
  { quote: "I have applied for Grenada Citizenship through Guide Consultants on the recommendation of a friend. Their team was highly responsive and attentive to all my inquiries, they have kept me updated through the entire process and made sure that everything was done perfectly. Special thanks to the CEO Mr Mahdi for his assistance in my application.", program: "Grenada Citizenship" },
];

export const WHY_US = {
  title: "Why do our clients choose us?",
  text: "We operate in complete transparency and provide tailored solutions based on our client needs, while always being fully compliant with government rules and regulations.",
  cta: { label: "Book Free Consultation", href: "/contact-us/" },
  stats: [
    { value: "2016", label: "Established" },
    { value: "10+", label: "Years of experience" },
    { value: "12+", label: "Programs offered" },
    { value: "100s", label: "Clients worldwide" },
  ],
};
