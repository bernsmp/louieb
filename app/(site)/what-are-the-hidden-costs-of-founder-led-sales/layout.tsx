import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What Are the Hidden Costs of Founder-Led Sales? | Louie Bernstein",
  description:
    "Founder-led sales is not free. The real bill — $600K to $1M+ a year, plus a 20–40% exit-valuation discount — never hits the P&L. Here is the math and the way out for $1M–$10M ARR founders.",
  keywords: [
    "hidden costs of founder-led sales",
    "founder-led sales cost",
    "what does founder-led sales cost",
    "founder dependency valuation discount",
    "exit valuation founder-led sales",
    "founder opportunity cost sales",
    "founder-led sales risks",
    "key person risk sales",
    "fractional sales leadership",
    "founder led sales $1M $10M ARR",
    "cost of founder selling",
    "scale out of founder-led sales",
  ],
  openGraph: {
    title:
      "What Are the Hidden Costs of Founder-Led Sales?",
    description:
      "Opportunity cost, pipeline risk, failed hires, and the exit-valuation discount. The actual annual bill — and how to stop paying it — for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/what-are-the-hidden-costs-of-founder-led-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Are the Hidden Costs of Founder-Led Sales?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Are the Hidden Costs of Founder-Led Sales?",
    description:
      "The real bill — $600K to $1M+ a year, plus a 20–40% exit-valuation discount — never hits the P&L. Here is the math and the way out.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/what-are-the-hidden-costs-of-founder-led-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HiddenCostsFounderLedSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
