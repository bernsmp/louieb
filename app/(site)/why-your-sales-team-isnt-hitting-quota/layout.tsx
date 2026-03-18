import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Sales Team Isn't Hitting Quota (And How to Fix It) | Louie Bernstein",
  description:
    "The real reasons your sales team isn't hitting quota — and the specific fixes for each one. From missing Sales Playbooks to broken pipeline stages to no daily training.",
  keywords: [
    "why sales team not hitting quota",
    "sales team not performing",
    "sales quota problems",
    "sales team hitting quota",
    "fix sales team performance",
    "sales team underperforming",
    "sales playbook missing",
    "sales management problems",
    "improve sales team results",
    "fractional sales leader",
    "sales team accountability",
    "sales KPIs small business",
  ],
  openGraph: {
    title: "Why Your Sales Team Isn't Hitting Quota (And How to Fix It)",
    description:
      "7 root causes why sales teams miss quota — with specific, actionable fixes for each one.",
    type: "article",
    url: "https://louiebernstein.com/why-your-sales-team-isnt-hitting-quota",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Your Sales Team Isn't Hitting Quota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your Sales Team Isn't Hitting Quota (And How to Fix It)",
    description:
      "It's almost never the salespeople. Here are the 7 real reasons your team is missing quota — and what to do about each one.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/why-your-sales-team-isnt-hitting-quota",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhySalesTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
