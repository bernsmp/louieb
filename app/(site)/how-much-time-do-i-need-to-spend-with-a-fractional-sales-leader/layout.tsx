import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Time Do I Need to Spend With a Fractional Sales Leader? | Louie Bernstein",
  description:
    "The founder time commitment is a curve, not a flat number. Heavy in weeks 1–2, light by month four. Here is the full 90-day breakdown for $1M–$10M ARR founders considering a Fractional Sales Leader.",
  keywords: [
    "how much time do I need to spend with a fractional sales leader",
    "fractional sales leader time commitment",
    "fractional sales leader founder time",
    "hours per week fractional sales leader",
    "fractional sales leader engagement cadence",
    "founder time with fractional VP of sales",
    "fractional sales leader 90 days",
    "fractional sales leader weekly schedule",
    "how often meet with fractional sales leader",
    "fractional sales leader onboarding time",
    "fractional sales leader for $1M to $10M ARR",
    "founder-led sales transition time",
  ],
  openGraph: {
    title: "How Much Time Do I Need to Spend With a Fractional Sales Leader? | Louie Bernstein",
    description:
      "Founder time is a curve, not a flat number. Heavy in weeks 1–2, almost nothing by month four. Here is the full 90-day breakdown.",
    type: "article",
    url: "https://louiebernstein.com/how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Much Time Do I Need to Spend With a Fractional Sales Leader?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Time Do I Need to Spend With a Fractional Sales Leader?",
    description:
      "Founder time is a curve, not a flat number. Heavy in weeks 1–2, almost nothing by month four. The full 90-day breakdown.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-much-time-do-i-need-to-spend-with-a-fractional-sales-leader",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function TimeWithFractionalSalesLeaderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
