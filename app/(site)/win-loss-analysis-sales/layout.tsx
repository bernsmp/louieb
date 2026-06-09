import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Run a Win/Loss Analysis And What to Do With What You Find | Louie Bernstein",
  description: "Most companies lose the same deals for the same reasons, quarter after quarter, because nobody ever studied why they lost.",
  openGraph: {
    title: "How to Run a Win/Loss Analysis And What to Do With What You Find",
    description: "Most companies lose the same deals for the same reasons, quarter after quarter, because nobody ever studied why they lost.",
    type: "article",
    url: "https://louiebernstein.com/win-loss-analysis-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Run a Win/Loss Analysis And What to Do With What You Find",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run a Win/Loss Analysis And What to Do With What You Find",
    description: "Most companies lose the same deals for the same reasons, quarter after quarter, because nobody ever studied why they lost.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/win-loss-analysis-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WinLossAnalysisSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
