import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Every Sales Team Needs an Accountability Document | Louie Bernstein",
  description: "Most sales teams operate on unspoken expectations. When those expectations aren't met, founders manage behavior instead of outcomes.",
  openGraph: {
    title: "Why Every Sales Team Needs an Accountability Document",
    description: "Most sales teams operate on unspoken expectations. When those expectations aren't met, founders manage behavior instead of outcomes.",
    type: "article",
    url: "https://louiebernstein.com/sales-accountability-document",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Every Sales Team Needs an Accountability Document",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Every Sales Team Needs an Accountability Document",
    description: "Most sales teams operate on unspoken expectations. When those expectations aren't met, founders manage behavior instead of outcomes.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-accountability-document",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesAccountabilityDocumentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
