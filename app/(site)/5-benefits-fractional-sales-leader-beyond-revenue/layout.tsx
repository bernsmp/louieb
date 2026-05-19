import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What Are the 5 Benefits of a Fractional Sales Leader for a Small Business? | Louie Bernstein",
  description:
    "Five benefits of a Fractional Sales Leader that have nothing to do with revenue — your calendar back, an honest forecast, hiring mistakes caught early, board-ready sales artifacts, and a sales operating system that outlives any single leader.",
  keywords: [
    "5 benefits of a fractional sales leader",
    "benefits of fractional sales leader",
    "fractional sales leader for small business",
    "non-revenue benefits fractional sales leader",
    "fractional sales leadership benefits",
    "founder-led sales bottleneck",
    "fractional sales leader founder calendar",
    "sales forecast accuracy small business",
    "sales hiring mistakes fractional leader",
    "board-ready sales pipeline",
    "sales operating system",
    "Louie Bernstein fractional sales leader",
  ],
  openGraph: {
    title:
      "What Are the 5 Benefits of a Fractional Sales Leader for a Small Business?",
    description:
      "And these have nothing to do with revenue. Calendar, forecast, hiring, board credibility, and a sales operating system that lasts.",
    type: "article",
    url: "https://louiebernstein.com/5-benefits-fractional-sales-leader-beyond-revenue",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "5 Benefits of a Fractional Sales Leader for a Small Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Are the 5 Benefits of a Fractional Sales Leader for a Small Business?",
    description:
      "And these have nothing to do with revenue. The five things founders actually call me for.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/5-benefits-fractional-sales-leader-beyond-revenue",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FiveBenefitsBeyondRevenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
