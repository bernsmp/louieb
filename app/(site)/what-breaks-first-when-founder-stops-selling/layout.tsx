import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Breaks First When a Founder Stops Selling? | Louie Bernstein",
  description:
    "Most founders find out what's fragile only after they step back from sales. Here's what breaks in the first 60 days — and what to build before the handoff so the transition sticks.",
  keywords: [
    "what breaks when founder stops selling",
    "founder stops selling problems",
    "founder-led sales transition failure",
    "what happens when founder leaves sales",
    "founder sales handoff problems",
    "sales transition founder",
    "founder pipeline collapse",
    "how to exit founder-led sales",
    "founder sales dependency risks",
    "fractional sales leader transition",
    "sales system after founder steps back",
    "founder-led sales breakdown",
  ],
  openGraph: {
    title: "What Breaks First When a Founder Stops Selling? | Louie Bernstein",
    description:
      "Most founders find out what's fragile only after they step back. Here's what breaks in the first 60 days — and what to fix before the handoff.",
    type: "article",
    url: "https://louiebernstein.com/what-breaks-first-when-founder-stops-selling",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Breaks First When a Founder Stops Selling?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Breaks First When a Founder Stops Selling?",
    description:
      "Most founders find out what's fragile only after they step back. Here's what breaks in the first 60 days — and what to fix before the handoff.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-breaks-first-when-founder-stops-selling",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatBreaksFounderSellingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
