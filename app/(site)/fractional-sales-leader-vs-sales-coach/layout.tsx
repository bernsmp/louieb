import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Sales Leader vs. Sales Coach: What's the Difference? | Louie Bernstein",
  description: "Founders confuse these two roles constantly — and hiring the wrong one is an expensive mistake. Here's how to tell them apart and know which one you actually need.",
  openGraph: {
    title: "Fractional Sales Leader vs. Sales Coach: What's the Difference?",
    description: "Founders confuse these two roles constantly — and hiring the wrong one is an expensive mistake. Here's how to tell them apart and know which one you actually need.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leader-vs-sales-coach",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leader vs. Sales Coach: What's the Difference?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leader vs. Sales Coach: What's the Difference?",
    description: "Founders confuse these two roles constantly — and hiring the wrong one is an expensive mistake. Here's how to tell them apart and know which one you actually need.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader-vs-sales-coach",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalSalesLeaderVsSalesCoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
