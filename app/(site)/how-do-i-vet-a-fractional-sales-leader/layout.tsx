import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Do I Vet a Fractional Sales Leader? 5 Things to Look For | Louie Bernstein",
  description:
    "The 5 vetting tests every $1M–$10M ARR founder should run before hiring a Fractional Sales Leader. Artifacts, references, 90-day plans, and walk-away criteria — the difference between an operator and an advisor.",
  keywords: [
    "how to vet a Fractional Sales Leader",
    "vet Fractional Sales Leader",
    "hire Fractional Sales Leader",
    "Fractional Sales Leader checklist",
    "Fractional Sales Leader vetting",
    "what to look for Fractional Sales Leader",
    "Fractional Sales Leader interview",
    "Fractional Sales Leader references",
    "Fractional Sales Leader 90 day plan",
    "Fractional Sales Leader for founders",
    "Fractional Sales Leader 1M 10M ARR",
    "Accountabilities Document Fractional Sales Leader",
  ],
  openGraph: {
    title: "How Do I Vet a Fractional Sales Leader? 5 Things to Look For",
    description:
      "The 5 vetting tests every $1M–$10M ARR founder should run before hiring a Fractional Sales Leader — artifacts, references, 90-day plans, and walk-away criteria.",
    type: "article",
    url: "https://louiebernstein.com/how-do-i-vet-a-fractional-sales-leader",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Do I Vet a Fractional Sales Leader?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Do I Vet a Fractional Sales Leader? 5 Things to Look For",
    description:
      "The 5 vetting tests every $1M–$10M ARR founder should run before hiring a Fractional Sales Leader.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/how-do-i-vet-a-fractional-sales-leader",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function VetFractionalSalesLeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
