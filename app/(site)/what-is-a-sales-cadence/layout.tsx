import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Sales Cadence? How to Build One That Books Meetings | Louie Bernstein",
  description: "A sales cadence is a structured, multi-touch outreach sequence that systematically moves a cold prospect toward a meeting.",
  openGraph: {
    title: "What Is a Sales Cadence? How to Build One That Books Meetings",
    description: "A sales cadence is a structured, multi-touch outreach sequence that systematically moves a cold prospect toward a meeting.",
    type: "article",
    url: "https://louiebernstein.com/what-is-a-sales-cadence",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is a Sales Cadence? How to Build One That Books Meetings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Sales Cadence? How to Build One That Books Meetings",
    description: "A sales cadence is a structured, multi-touch outreach sequence that systematically moves a cold prospect toward a meeting.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-is-a-sales-cadence",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatIsASalesCadenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
