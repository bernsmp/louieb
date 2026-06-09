import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Revenue Operations (RevOps)? A Plain-English Guide for Founders | Louie Bernstein",
  description: "RevOps is one of the most buzzed-about concepts in B2B sales — and one of the least understood by founders who need it most.",
  openGraph: {
    title: "What Is Revenue Operations (RevOps)? A Plain-English Guide for Founders",
    description: "RevOps is one of the most buzzed-about concepts in B2B sales — and one of the least understood by founders who need it most.",
    type: "article",
    url: "https://louiebernstein.com/what-is-revenue-operations-revops",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is Revenue Operations (RevOps)? A Plain-English Guide for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Revenue Operations (RevOps)? A Plain-English Guide for Founders",
    description: "RevOps is one of the most buzzed-about concepts in B2B sales — and one of the least understood by founders who need it most.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-is-revenue-operations-revops",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatIsRevenueOperationsRevopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
