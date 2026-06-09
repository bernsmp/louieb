import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Forecasting for Small Business How to Actually Predict Revenue | Louie Bernstein",
  description: "Stop guessing and start forecasting. Here's the practical system small businesses use to predict revenue accurately — without a complex CRM or a data analyst.",
  openGraph: {
    title: "Sales Forecasting for Small Business How to Actually Predict Revenue",
    description: "Stop guessing and start forecasting. Here's the practical system small businesses use to predict revenue accurately — without a complex CRM or a data analyst.",
    type: "article",
    url: "https://louiebernstein.com/sales-forecasting-for-small-business",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Sales Forecasting for Small Business How to Actually Predict Revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Forecasting for Small Business How to Actually Predict Revenue",
    description: "Stop guessing and start forecasting. Here's the practical system small businesses use to predict revenue accurately — without a complex CRM or a data analyst.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-forecasting-for-small-business",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesForecastingForSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
