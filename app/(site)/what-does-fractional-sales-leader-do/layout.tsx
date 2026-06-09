import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does a Fractional Sales Leader Actually Do Week to Week? | Louie Bernstein",
  description: "The question founders ask most before engaging. Here's the honest, specific answer — what gets done, when, and why it moves revenue.",
  openGraph: {
    title: "What Does a Fractional Sales Leader Actually Do Week to Week?",
    description: "The question founders ask most before engaging. Here's the honest, specific answer — what gets done, when, and why it moves revenue.",
    type: "article",
    url: "https://louiebernstein.com/what-does-fractional-sales-leader-do",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Does a Fractional Sales Leader Actually Do Week to Week?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Does a Fractional Sales Leader Actually Do Week to Week?",
    description: "The question founders ask most before engaging. Here's the honest, specific answer — what gets done, when, and why it moves revenue.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-does-fractional-sales-leader-do",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatDoesFractionalSalesLeaderDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
