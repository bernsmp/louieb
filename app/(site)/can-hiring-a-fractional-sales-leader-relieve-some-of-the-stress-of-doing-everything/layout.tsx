import { Metadata } from "next";

const URL =
  "https://louiebernstein.com/can-hiring-a-fractional-sales-leader-relieve-some-of-the-stress-of-doing-everything";

export const metadata: Metadata = {
  title:
    "Can Hiring a Fractional Sales Leader Relieve the Stress of Doing Everything? | Louie Bernstein",
  description:
    "For $1M–$10M ARR founders running their own sales floor: the math, the milestones, and the personal change that come from hiring a Fractional Sales Leader instead of a $400K VP.",
  keywords: [
    "fractional sales leader",
    "founder-led sales",
    "fractional sales leadership cost",
    "fractional sales leader vs VP of sales",
    "founder bottleneck sales",
    "sales leadership for founders",
    "$1M $10M ARR sales",
    "stress of being founder salesperson",
    "fractional sales leader ROI",
    "what does a fractional sales leader do",
  ],
  authors: [{ name: "Louie Bernstein" }],
  openGraph: {
    title:
      "Can Hiring a Fractional Sales Leader Relieve the Stress of Doing Everything?",
    description:
      "Founder-led selling at $1M–$10M ARR can cost $1.8M a year in opportunity cost. Here is how a Fractional Sales Leader takes that off your plate — without the $400K VP risk.",
    type: "article",
    url: URL,
    siteName: "Louie Bernstein",
    locale: "en_US",
    publishedTime: "2026-05-09",
    authors: ["Louie Bernstein"],
    images: [
      {
        url: "https://louiebernstein.com/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Can Hiring a Fractional Sales Leader Relieve the Stress of Doing Everything?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Can Hiring a Fractional Sales Leader Relieve the Stress of Doing Everything?",
    description:
      "Founder-led selling at $1M–$10M ARR can cost $1.8M a year. Here is how a Fractional Sales Leader takes that off your plate.",
    images: ["https://louiebernstein.com/logo/og-image.png"],
  },
  alternates: {
    canonical: URL,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function CanFslRelieveStressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
