import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Sales Pipeline That Actually Fills Itself | Louie Bernstein",
  description: "Most $1M–$10M ARR businesses don't have a pipeline problem — they have a pipeline structure problem. Here's the 5-layer system that creates consistent, predictable deal flow without founder…",
  openGraph: {
    title: "How to Build a Sales Pipeline That Actually Fills Itself",
    description: "Most $1M–$10M ARR businesses don't have a pipeline problem — they have a pipeline structure problem. Here's the 5-layer system that creates consistent, predictable deal flow without founder…",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-a-sales-pipeline",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a Sales Pipeline That Actually Fills Itself",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Sales Pipeline That Actually Fills Itself",
    description: "Most $1M–$10M ARR businesses don't have a pipeline problem — they have a pipeline structure problem. Here's the 5-layer system that creates consistent, predictable deal flow without founder…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-build-a-sales-pipeline",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToBuildASalesPipelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
