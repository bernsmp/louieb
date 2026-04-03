import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Put a Salesperson on a Performance Improvement Plan (A Founder's Guide) | Louie Bernstein",
  description:
    "A sales PIP written for founders, not HR departments. Five steps to write one that actually works, the timeline that gives it teeth, and what to do when the plan ends.",
  keywords: [
    "sales performance improvement plan",
    "sales rep PIP template",
    "how to put sales rep on PIP",
    "salesperson performance improvement plan",
    "sales PIP small business",
    "sales PIP template founder",
    "how long should sales PIP last",
    "performance improvement plan sales team",
    "sales rep underperforming PIP",
    "how to write a sales PIP",
  ],
  openGraph: {
    title: "How to Put a Salesperson on a Performance Improvement Plan (A Founder's Guide)",
    description:
      "Most PIP guides are written for enterprise HR teams. This one is written for founders managing their first or second salesperson.",
    type: "article",
    url: "https://louiebernstein.com/sales-performance-improvement-plan",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Sales Performance Improvement Plan Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Put a Salesperson on a Performance Improvement Plan (A Founder's Guide)",
    description:
      "A sales PIP done right forces clarity on both sides. Here is the 5-step process designed for small teams and first-time sales managers.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-performance-improvement-plan",
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
