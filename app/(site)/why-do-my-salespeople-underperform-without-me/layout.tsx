import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Do My Salespeople Underperform Without Me Involved? | Louie Bernstein",
  description:
    "If your salespeople only perform when you are in the room, the problem is not your salespeople. It is what you never built for them. Here are the five root causes and what to fix first.",
  keywords: [
    "why do salespeople underperform without founder",
    "salespeople underperform without me",
    "sales team depends on founder",
    "why salespeople need me in the room",
    "founder dependent sales team",
    "salespeople underperform when I step back",
    "how to fix sales team underperformance",
    "sales team not performing without founder",
    "sales dependency founder",
    "sales process only works when founder involved",
  ],
  openGraph: {
    title: "Why Do My Salespeople Underperform Without Me Involved?",
    description:
      "If your salespeople only perform when you are in the room, the problem is not your salespeople. It is what you never built for them. Five root causes and what to fix first.",
    type: "article",
    url: "https://louiebernstein.com/why-do-my-salespeople-underperform-without-me",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Do My Salespeople Underperform Without Me Involved?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Do My Salespeople Underperform Without Me Involved?",
    description:
      "Your salespeople are not the problem. The system you never built for them is. Here are the five root causes.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/why-do-my-salespeople-underperform-without-me",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
