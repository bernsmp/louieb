import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Manage an Underperforming Salesperson (Without Losing Another 6 Months) | Louie Bernstein",
  description:
    "Most founders wait too long, misdiagnose the problem, and either fire the wrong person or keep the wrong person. Here is the framework for diagnosing, coaching, and deciding — fast.",
  keywords: [
    "how to manage underperforming sales rep",
    "underperforming salesperson what to do",
    "sales rep not hitting quota",
    "how to handle poor sales performance",
    "salesperson performance management",
    "when to fire a salesperson",
    "sales team performance issues",
    "managing underperforming sales team",
    "sales performance problem",
    "how to improve salesperson performance",
  ],
  openGraph: {
    title: "How to Manage an Underperforming Salesperson (Without Losing Another 6 Months)",
    description:
      "Most founders misdiagnose underperformance. Here is the framework to tell a system problem from a person problem — and act on it quickly.",
    type: "article",
    url: "https://louiebernstein.com/how-to-manage-underperforming-salesperson",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Manage an Underperforming Salesperson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Manage an Underperforming Salesperson (Without Losing Another 6 Months)",
    description:
      "Is it the salesperson or the system? Most founders guess wrong. Here is how to diagnose and act fast.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-manage-underperforming-salesperson",
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
