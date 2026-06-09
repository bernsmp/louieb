import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Scale Revenue from $1M to $10M The Founder's Roadmap | Louie Bernstein",
  description: "Most founders who hit $1M know how to sell. Almost none of them know how to build a sales system that scales without them. Here is the four-phase roadmap that covers the gap.",
  openGraph: {
    title: "How to Scale Revenue from $1M to $10M The Founder's Roadmap",
    description: "Most founders who hit $1M know how to sell. Almost none of them know how to build a sales system that scales without them. Here is the four-phase roadmap that covers the gap.",
    type: "article",
    url: "https://louiebernstein.com/how-to-scale-revenue-1m-to-10m",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Scale Revenue from $1M to $10M The Founder's Roadmap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Scale Revenue from $1M to $10M The Founder's Roadmap",
    description: "Most founders who hit $1M know how to sell. Almost none of them know how to build a sales system that scales without them. Here is the four-phase roadmap that covers the gap.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-scale-revenue-1m-to-10m",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToScaleRevenue1mTo10mLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
