import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Do I Jumpstart Revenue Acceleration and Get Quick Wins? | Louie Bernstein",
  description:
    "The Fractional Sales Leader method: four quick-win moves that surface and close the revenue already sitting in your $1M–$10M ARR business. Pipeline triage, qualification reset, win-back motion, and pricing audit — measurable revenue in 60–90 days.",
  keywords: [
    "revenue acceleration",
    "sales quick wins",
    "jumpstart revenue",
    "fractional sales leader method",
    "pipeline triage",
    "lost deal win-back",
    "sales qualification reset",
    "pricing audit B2B",
    "B2B revenue acceleration",
    "founder-led sales quick wins",
    "$1M $10M ARR revenue growth",
    "fast sales results without hiring",
  ],
  openGraph: {
    title:
      "How Do I Jumpstart Revenue Acceleration and Get Quick Wins?",
    description:
      "The Fractional Sales Leader method — four quick-win moves that produce measurable revenue in 60–90 days for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/how-do-i-jumpstart-revenue-acceleration-and-get-quick-wins",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Do I Jumpstart Revenue Acceleration and Get Quick Wins?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Do I Jumpstart Revenue Acceleration and Get Quick Wins?",
    description:
      "The Fractional Sales Leader method — four quick-win moves that produce measurable revenue in 60–90 days.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/how-do-i-jumpstart-revenue-acceleration-and-get-quick-wins",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function JumpstartRevenueAccelerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
