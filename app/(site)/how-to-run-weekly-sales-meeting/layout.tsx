import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Run a Weekly Sales Meeting That Actually Works | Louie Bernstein",
  description: "Most weekly sales meetings are status reports dressed up as coaching. Here's the 45-minute agenda that moves pipeline, develops reps, and ends on time — every week.",
  openGraph: {
    title: "How to Run a Weekly Sales Meeting That Actually Works",
    description: "Most weekly sales meetings are status reports dressed up as coaching. Here's the 45-minute agenda that moves pipeline, develops reps, and ends on time — every week.",
    type: "article",
    url: "https://louiebernstein.com/how-to-run-weekly-sales-meeting",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Run a Weekly Sales Meeting That Actually Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run a Weekly Sales Meeting That Actually Works",
    description: "Most weekly sales meetings are status reports dressed up as coaching. Here's the 45-minute agenda that moves pipeline, develops reps, and ends on time — every week.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-run-weekly-sales-meeting",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToRunWeeklySalesMeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
