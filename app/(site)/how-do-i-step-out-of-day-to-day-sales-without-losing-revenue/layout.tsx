import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Do I Step Out of Day-to-Day Sales Without Losing Revenue? | Louie Bernstein",
  description:
    "The 90-day, sequenced founder step-out playbook for $1M–$10M ARR companies. Document the motion, install pipeline discipline, hand off accounts on a schedule — and keep revenue flat or growing.",
  keywords: [
    "how to step out of day-to-day sales",
    "founder step out of sales without losing revenue",
    "founder sales transition",
    "stop being the bottleneck in sales",
    "founder-led sales handoff",
    "transition out of founder-led sales",
    "founder sales exit playbook",
    "fractional sales leader handoff",
    "90 day sales handoff",
    "step out of pipeline as founder",
    "scaling sales beyond founder",
    "founder sales step-out plan",
  ],
  openGraph: {
    title:
      "How Do I Step Out of Day-to-Day Sales Without Losing Revenue?",
    description:
      "A sequenced 90-day handoff for $1M–$10M ARR founders. Day 1 is not an announcement — it is a recording, a successor, and a written playbook. Here is what each phase looks like.",
    type: "article",
    url: "https://louiebernstein.com/how-do-i-step-out-of-day-to-day-sales-without-losing-revenue",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Do I Step Out of Day-to-Day Sales Without Losing Revenue?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Do I Step Out of Day-to-Day Sales Without Losing Revenue?",
    description:
      "A 90-day, sequenced step-out playbook for $1M–$10M ARR founders. Hold the quarter while you exit the pipeline.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/how-do-i-step-out-of-day-to-day-sales-without-losing-revenue",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function StepOutDayToDaySalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
