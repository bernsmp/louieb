import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Is Your Sales Process Actually Hurting Your B2B Growth? | Louie Bernstein",
  description:
    "$1M–$10M ARR founders accidentally build sales processes meant for a Fortune 500 — 12 stages, 20 required fields, dashboards nobody reads. Diagnose the four signs your process is hurting growth and right-size it to your stage.",
  keywords: [
    "is my sales process hurting growth",
    "B2B sales process problems",
    "over-engineered sales process",
    "right-size sales process",
    "sales process for $1M to $10M ARR",
    "sales process mistakes founders make",
    "stage-appropriate sales process",
    "fix broken sales process",
    "B2B sales pipeline stages",
    "fractional sales leadership",
    "founder-led sales transition",
    "simplify sales process",
  ],
  openGraph: {
    title:
      "Is Your Sales Process Actually Hurting Your B2B Growth?",
    description:
      "Did you accidentally build a system meant for a Fortune 500 instead of your stage of business? Four signs your sales process is hurting growth — and how to right-size it.",
    type: "article",
    url: "https://louiebernstein.com/is-your-sales-process-actually-hurting-your-b2b-growth",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Is Your Sales Process Actually Hurting Your B2B Growth?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Is Your Sales Process Actually Hurting Your B2B Growth?",
    description:
      "Four signs your sales process is hurting growth — and how to right-size it for your $1M–$10M ARR stage.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/is-your-sales-process-actually-hurting-your-b2b-growth",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesProcessHurtingGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
