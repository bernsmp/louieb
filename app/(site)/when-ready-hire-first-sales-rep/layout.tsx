import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Know When You're Ready to Hire Your First Sales Rep | Louie Bernstein",
  description: "The answer isn't a revenue number. It's a checklist — and most founders skip the most important item on it.",
  openGraph: {
    title: "How to Know When You're Ready to Hire Your First Sales Rep",
    description: "The answer isn't a revenue number. It's a checklist — and most founders skip the most important item on it.",
    type: "article",
    url: "https://louiebernstein.com/when-ready-hire-first-sales-rep",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Know When You're Ready to Hire Your First Sales Rep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Know When You're Ready to Hire Your First Sales Rep",
    description: "The answer isn't a revenue number. It's a checklist — and most founders skip the most important item on it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/when-ready-hire-first-sales-rep",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhenReadyHireFirstSalesRepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
