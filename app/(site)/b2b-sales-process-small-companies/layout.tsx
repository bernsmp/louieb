import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Sales Process of Small Companies The 5 Stages That Actually Work | Louie Bernstein",
  description: "Most small B2B companies copy an enterprise sales process and wonder why it never gets used. Here is the 5 stage process that works for a $1M to $10M ARR team, the exit gates that make forecasts…",
  openGraph: {
    title: "B2B Sales Process of Small Companies The 5 Stages That Actually Work",
    description: "Most small B2B companies copy an enterprise sales process and wonder why it never gets used. Here is the 5 stage process that works for a $1M to $10M ARR team, the exit gates that make forecasts…",
    type: "article",
    url: "https://louiebernstein.com/b2b-sales-process-small-companies",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "B2B Sales Process of Small Companies The 5 Stages That Actually Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Sales Process of Small Companies The 5 Stages That Actually Work",
    description: "Most small B2B companies copy an enterprise sales process and wonder why it never gets used. Here is the 5 stage process that works for a $1M to $10M ARR team, the exit gates that make forecasts…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/b2b-sales-process-small-companies",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function B2bSalesProcessSmallCompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
