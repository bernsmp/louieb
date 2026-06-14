import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Am I Ready to Hire a VP of Sales Yet? 5 Things to Complete First | Louie Bernstein",
  description:
    "A VP of Sales scales an engine that already runs. Here are the 5 things $1M–$10M ARR founders must complete before hiring one — and how to know if you're ready or about to make a $400K mistake.",
  keywords: [
    "am I ready to hire a VP of sales",
    "when to hire a VP of sales",
    "ready to hire VP of sales",
    "things to do before hiring a VP of sales",
    "VP of sales readiness checklist",
    "should I hire a VP of sales",
    "hiring a VP of sales too early",
    "VP of sales for startups",
    "founder-led sales transition",
    "fractional sales leadership",
    "VP of sales vs fractional sales leader",
    "build sales system before VP",
  ],
  openGraph: {
    title: "Am I Ready to Hire a VP of Sales Yet? 5 Things to Complete First",
    description:
      "A VP of Sales scales an engine that already runs. The 5 things $1M–$10M ARR founders must finish before hiring one — and how to know if you're ready.",
    type: "article",
    url: "https://louiebernstein.com/am-i-ready-to-hire-a-vp-of-sales-yet",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Am I Ready to Hire a VP of Sales Yet?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Am I Ready to Hire a VP of Sales Yet? 5 Things to Complete First",
    description:
      "A VP of Sales scales an engine that already runs. The 5 things to finish before hiring one.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical: "https://louiebernstein.com/am-i-ready-to-hire-a-vp-of-sales-yet",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function ReadyToHireVpSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
