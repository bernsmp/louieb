import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Go-to-Market Strategy for a $1M–$10M B2B Business | Louie Bernstein",
  description: "Most founders have a sales process. Few have a go-to-market strategy. The difference is what separates companies that stall at $3M from companies that break through to $10M.",
  openGraph: {
    title: "How to Build a Go-to-Market Strategy for a $1M–$10M B2B Business",
    description: "Most founders have a sales process. Few have a go-to-market strategy. The difference is what separates companies that stall at $3M from companies that break through to $10M.",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-a-go-to-market-strategy",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a Go-to-Market Strategy for a $1M–$10M B2B Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Go-to-Market Strategy for a $1M–$10M B2B Business",
    description: "Most founders have a sales process. Few have a go-to-market strategy. The difference is what separates companies that stall at $3M from companies that break through to $10M.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-build-a-go-to-market-strategy",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToBuildAGoToMarketStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
