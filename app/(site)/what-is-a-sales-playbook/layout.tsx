import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Sales Playbook — And Does Your Business Have One? | Louie Bernstein",
  description: "If your sales process lives in your best rep's head, you don't have a playbook — you have a dependency. Here's what a real sales playbook contains and how to know if your business needs one.",
  openGraph: {
    title: "What Is a Sales Playbook — And Does Your Business Have One?",
    description: "If your sales process lives in your best rep's head, you don't have a playbook — you have a dependency. Here's what a real sales playbook contains and how to know if your business needs one.",
    type: "article",
    url: "https://louiebernstein.com/what-is-a-sales-playbook",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is a Sales Playbook — And Does Your Business Have One?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Sales Playbook — And Does Your Business Have One?",
    description: "If your sales process lives in your best rep's head, you don't have a playbook — you have a dependency. Here's what a real sales playbook contains and how to know if your business needs one.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-is-a-sales-playbook",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatIsASalesPlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
