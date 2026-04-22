import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Do I Build a Sales System Without Hiring a Full-Time VP of Sales? | Louie Bernstein",
  description:
    "The exact foundational sales infrastructure $1M–$10M ARR founders need to build a scalable sales system — without the $400K risk of a full-time VP hire. Playbook, pipeline, qualification, and accountability in 60–90 days.",
  keywords: [
    "build sales system without VP of sales",
    "sales system without full-time VP",
    "foundational sales infrastructure",
    "how to build a sales system",
    "alternative to full-time VP of sales",
    "sales infrastructure for founders",
    "fractional sales leadership",
    "sales playbook for founders",
    "scale sales without VP",
    "sales operations for founders",
    "founder-led sales transition",
    "build sales machine $1M $10M ARR",
  ],
  openGraph: {
    title:
      "How Do I Build a Sales System Without Hiring a Full-Time VP of Sales?",
    description:
      "Foundational sales infrastructure for founders at $1M–$10M ARR. Build the machine before you hire the operator — playbook, pipeline, qualification, accountability.",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-sales-system-without-full-time-vp",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Do I Build a Sales System Without Hiring a Full-Time VP of Sales?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Do I Build a Sales System Without Hiring a Full-Time VP of Sales?",
    description:
      "Foundational sales infrastructure for founders at $1M–$10M ARR. Build the machine before you hire the operator.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/how-to-build-sales-system-without-full-time-vp",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function BuildSalesSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
