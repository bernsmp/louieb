import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Sales Audit — And Does Your Business Need One? | Louie Bernstein",
  description: "If revenue isn't growing the way your activity levels suggest it should, something in your sales system is broken. A sales audit tells you exactly what — and where to fix it first.",
  openGraph: {
    title: "What Is a Sales Audit — And Does Your Business Need One?",
    description: "If revenue isn't growing the way your activity levels suggest it should, something in your sales system is broken. A sales audit tells you exactly what — and where to fix it first.",
    type: "article",
    url: "https://louiebernstein.com/what-is-a-sales-audit",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is a Sales Audit — And Does Your Business Need One?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Sales Audit — And Does Your Business Need One?",
    description: "If revenue isn't growing the way your activity levels suggest it should, something in your sales system is broken. A sales audit tells you exactly what — and where to fix it first.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-is-a-sales-audit",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatIsASalesAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
