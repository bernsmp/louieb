import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CRO Pricing: Real Numbers, No Surprises | Louie Bernstein",
  description:
    "Transparent Fractional CRO pricing — $6,000–$12,000/month vs. $400,000+ for a full-time VP of Sales. See exactly what you get, what it costs, and why the math works in your favor.",
  keywords: [
    "fractional CRO pricing",
    "fractional CRO cost",
    "how much does a fractional CRO cost",
    "fractional VP of sales cost",
    "fractional sales leader pricing",
    "outsourced sales leadership cost",
    "fractional executive pricing",
    "VP of sales salary small business",
    "fractional CRO vs full time",
    "sales leadership cost comparison",
  ],
  openGraph: {
    title: "Fractional CRO Pricing: Real Numbers, No Surprises",
    description:
      "What does a Fractional CRO actually cost? Real pricing, honest comparison to full-time alternatives, and what you get for your money.",
    type: "article",
    url: "https://louiebernstein.com/fractional-cro-pricing",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional CRO Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CRO Pricing: Real Numbers, No Surprises",
    description:
      "Fractional CRO: $6k–$12k/month. Full-time VP of Sales: $400k–$500k/year. The math is obvious. See the full breakdown.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-cro-pricing",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalCROPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
