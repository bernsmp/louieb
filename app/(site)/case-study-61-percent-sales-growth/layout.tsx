import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: 61% Sales Growth in One Year | Louie Bernstein",
  description: "How a B2B professional services company went from founder-dependent, stalled revenue to a functioning sales team and 61% growth — in 12 months.",
  openGraph: {
    title: "Case Study: 61% Sales Growth in One Year",
    description: "How a B2B professional services company went from founder-dependent, stalled revenue to a functioning sales team and 61% growth — in 12 months.",
    type: "article",
    url: "https://louiebernstein.com/case-study-61-percent-sales-growth",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Case Study: 61% Sales Growth in One Year",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: 61% Sales Growth in One Year",
    description: "How a B2B professional services company went from founder-dependent, stalled revenue to a functioning sales team and 61% growth — in 12 months.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/case-study-61-percent-sales-growth",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function CaseStudy61PercentSalesGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
