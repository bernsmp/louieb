import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What's the Best Way to Exit Founder-Led Sales? | Louie Bernstein",
  description:
    "Use a founder-led sales exit checklist. Five non-negotiable items, a stage-by-stage handover, and a 90-day exit that holds — for $1M–$10M ARR founders ready to step out of every deal without revenue dropping.",
  keywords: [
    "exit founder-led sales",
    "founder-led sales exit",
    "founder-led sales exit checklist",
    "how to exit founder-led sales",
    "stop selling as a founder",
    "stage-by-stage sales handover",
    "founder out of sales",
    "transition out of founder-led sales",
    "best way to exit founder sales",
    "B2B founder sales handover",
    "$1M $10M ARR sales transition",
    "fractional sales leader exit",
  ],
  openGraph: {
    title:
      "What's the Best Way to Exit Founder-Led Sales?",
    description:
      "Five-item exit checklist, stage-by-stage handover, and a 90-day exit that actually holds — for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/what-is-the-best-way-to-exit-founder-led-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What's the Best Way to Exit Founder-Led Sales?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What's the Best Way to Exit Founder-Led Sales?",
    description:
      "Use the exit checklist: five items, stage-by-stage handover, 90 days to a real exit.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/what-is-the-best-way-to-exit-founder-led-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function BestWayToExitFounderLedSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
