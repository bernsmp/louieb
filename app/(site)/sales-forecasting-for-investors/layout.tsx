import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create a Sales Forecast Your Investors Will Actually Believe | Louie Bernstein",
  description: "Most founders present a wish list and call it a forecast. Here's how to build a bottoms-up revenue model that survives board scrutiny and closes investor confidence — not kills it.",
  openGraph: {
    title: "How to Create a Sales Forecast Your Investors Will Actually Believe",
    description: "Most founders present a wish list and call it a forecast. Here's how to build a bottoms-up revenue model that survives board scrutiny and closes investor confidence — not kills it.",
    type: "article",
    url: "https://louiebernstein.com/sales-forecasting-for-investors",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Create a Sales Forecast Your Investors Will Actually Believe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create a Sales Forecast Your Investors Will Actually Believe",
    description: "Most founders present a wish list and call it a forecast. Here's how to build a bottoms-up revenue model that survives board scrutiny and closes investor confidence — not kills it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-forecasting-for-investors",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesForecastingForInvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
