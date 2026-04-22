import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Why Does My Revenue Feel Unpredictable Month to Month? | Louie Bernstein",
  description:
    "Why B2B founders at $1M–$10M ARR experience unpredictable monthly revenue — and the exact sales infrastructure that converts feast-or-famine cycles into a forecastable pipeline. Diagnose the cause, install the fix in 60–90 days.",
  keywords: [
    "why is my revenue unpredictable",
    "unpredictable monthly revenue",
    "revenue fluctuations B2B",
    "what are revenue fluctuations",
    "feast or famine sales cycle",
    "lumpy revenue founder-led sales",
    "how to stabilize monthly revenue",
    "sales pipeline predictability",
    "sales forecasting for founders",
    "revenue predictability $1M $10M ARR",
    "fix inconsistent sales months",
    "fractional sales leader revenue",
    "why sales pipeline is lumpy",
    "monthly revenue volatility B2B",
  ],
  openGraph: {
    title: "Why Does My Revenue Feel Unpredictable Month to Month?",
    description:
      "The diagnostic for founders watching revenue bounce between record months and empty ones — and the infrastructure that ends the roller coaster.",
    type: "article",
    url: "https://louiebernstein.com/why-does-my-revenue-feel-unpredictable-month-to-month",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Does My Revenue Feel Unpredictable Month to Month?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Does My Revenue Feel Unpredictable Month to Month?",
    description:
      "Founders at $1M–$10M ARR: here's why your pipeline feels lumpy — and how to make it forecastable.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/why-does-my-revenue-feel-unpredictable-month-to-month",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RevenueUnpredictableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
