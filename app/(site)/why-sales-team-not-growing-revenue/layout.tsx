import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Sales Team Isn't Growing Revenue (And It's Not Their Fault) | Louie Bernstein",
  description: "Before you fire another rep, look at the system they're working. In most cases the reps aren't the problem — the process, the leadership, and the structure are.",
  openGraph: {
    title: "Why Your Sales Team Isn't Growing Revenue (And It's Not Their Fault)",
    description: "Before you fire another rep, look at the system they're working. In most cases the reps aren't the problem — the process, the leadership, and the structure are.",
    type: "article",
    url: "https://louiebernstein.com/why-sales-team-not-growing-revenue",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Your Sales Team Isn't Growing Revenue (And It's Not Their Fault)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your Sales Team Isn't Growing Revenue (And It's Not Their Fault)",
    description: "Before you fire another rep, look at the system they're working. In most cases the reps aren't the problem — the process, the leadership, and the structure are.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/why-sales-team-not-growing-revenue",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhySalesTeamNotGrowingRevenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
