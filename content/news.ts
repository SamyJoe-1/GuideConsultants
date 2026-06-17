/** News articles. Card metadata + body live here; the home page shows the 3 most recent. */
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string; // ISO
  category: string;
  body?: string[]; // paragraphs (filled for mirrored articles)
}

export const NEWS: Article[] = [
  {
    slug: "eu-confirms-2026-timeline-for-digital-border-system-and-etias-rollout",
    title: "EU Confirms 2026 Timeline For Digital Border System And ETIAS",
    excerpt:
      "The European Union’s digital border control system will be fully enforced across all external borders, with ETIAS expected to follow in the last quarter of 2026.",
    image: "/images/2025/12/digital-border-system-and-etias.webp",
    date: "2025-12-08",
    category: "Travel & Visas",
    body: [
      "The European Union’s digital border control system, known as the Entry/Exit System (EES), will be fully enforced across all external borders, marking one of the most significant changes to travel into the Schengen Area in decades.",
      "The European Travel Information and Authorisation System (ETIAS) is expected to follow in the last quarter of 2026, requiring visa-exempt travellers to obtain a travel authorisation before entering the bloc.",
      "For holders of second passports from Caribbean and other visa-free nations, understanding these new requirements will be essential to maintaining smooth, visa-free access to Europe.",
    ],
  },
  {
    slug: "trump-suspends-us-green-card-lottery-after-brown-university-shooting",
    title: "Trump Orders Suspension of Green Card Lottery",
    excerpt:
      "President Donald J. Trump has ordered the suspension of the Diversity Visa (DV1) Lottery Program, citing national-security reviews.",
    image: "/images/2025/12/trump-orders-suspension-of-green-card-lottery.webp",
    date: "2025-12-03",
    category: "Immigration",
    body: [
      "President Donald J. Trump has ordered the suspension of the Diversity Visa (DV1) Lottery Program, a long-standing route that granted permanent residency to tens of thousands of applicants each year.",
      "The administration cited national-security reviews as the basis for the pause, leaving prospective applicants uncertain about the program’s future.",
      "The move underscores why many investors are turning to citizenship by investment and golden visa programs, which offer more predictable and secure pathways to residency and a second passport.",
    ],
  },
  {
    slug: "trump-launches-gold-card-immigration-program-direct-path-citizenship",
    title: "‘Trump Gold Card’ Goes Live With $1m fee for Fast-Track Entry",
    excerpt:
      "A new immigration program backed by U.S. President Donald Trump is offering wealthy foreign nationals a fast-track route to U.S. residency for a $1 million fee.",
    image: "/images/2025/12/trump-gold-card.webp",
    date: "2025-12-01",
    category: "Golden Visa",
    body: [
      "A new immigration program backed by U.S. President Donald Trump is offering wealthy foreign nationals a fast-track route to U.S. residency for a $1 million fee, in what officials describe as a ‘Gold Card’ pathway.",
      "The program positions the United States alongside a growing number of countries competing for high-net-worth migrants through investment-based residency schemes.",
      "Guide Consultants advises clients on how the US Gold Card compares with established golden visa and citizenship by investment options worldwide.",
    ],
  },
];

export const getArticle = (slug: string) => NEWS.find((n) => n.slug === slug);
