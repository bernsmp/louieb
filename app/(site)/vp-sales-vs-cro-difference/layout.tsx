import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VP of Sales vs. CRO: What\\u2019s the Difference? | Louie Bernstein",
  description: "These titles get used interchangeably at startups \\u2014 but they\\u2019re different roles that solve different problems. Hiring the wrong one at the wrong stage is a $200k\\u2013$300k mistake.",
  openGraph: {
    title: "VP of Sales vs. CRO: What\\u2019s the Difference?",
    description: "These titles get used interchangeably at startups \\u2014 but they\\u2019re different roles that solve different problems. Hiring the wrong one at the wrong stage is a $200k\\u2013$300k mistake.",
    type: "article",
    url: "https://louiebernstein.com/vp-sales-vs-cro-difference",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "VP of Sales vs. CRO: What\\u2019s the Difference?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VP of Sales vs. CRO: What\\u2019s the Difference?",
    description: "These titles get used interchangeably at startups \\u2014 but they\\u2019re different roles that solve different problems. Hiring the wrong one at the wrong stage is a $200k\\u2013$300k mistake.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/vp-sales-vs-cro-difference",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function VpSalesVsCroDifferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
