import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Sales Leadership ROI: What Does the Investment Actually Return? | Louie Bernstein",
  description: "Before you commit, you want to know what you're actually buying. Here are the real numbers — cost vs. full-time hire, time to results, and revenue impact — without the sales pitch.",
  openGraph: {
    title: "Fractional Sales Leadership ROI: What Does the Investment Actually Return?",
    description: "Before you commit, you want to know what you're actually buying. Here are the real numbers — cost vs. full-time hire, time to results, and revenue impact — without the sales pitch.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leadership-roi",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leadership ROI: What Does the Investment Actually Return?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leadership ROI: What Does the Investment Actually Return?",
    description: "Before you commit, you want to know what you're actually buying. Here are the real numbers — cost vs. full-time hire, time to results, and revenue impact — without the sales pitch.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leadership-roi",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalSalesLeadershipRoiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
