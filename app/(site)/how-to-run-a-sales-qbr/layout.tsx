import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Run a Sales QBR for a Small B2B Team | Louie Bernstein",
  description:
    "Most QBR guides assume you have a RevOps team and 20 reps. This one is built for founders running 1-4 salespeople who want 90 minutes that actually changes something.",
  keywords: [
    "how to run a sales QBR",
    "sales quarterly business review small team",
    "QBR sales meeting agenda",
    "how to run a QBR",
    "quarterly business review sales team",
    "sales QBR template",
    "quarterly review small sales team",
    "sales QBR agenda founder",
    "how to do a sales QBR",
    "quarterly sales review B2B",
  ],
  openGraph: {
    title: "How to Run a Sales QBR for a Small B2B Team",
    description:
      "A QBR for a small team is one of the highest-leverage 90-minute investments a founder can make each quarter. Here is the exact format that makes it useful.",
    type: "article",
    url: "https://louiebernstein.com/how-to-run-a-sales-qbr",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Run a Sales QBR for a Small B2B Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run a Sales QBR for a Small B2B Team",
    description:
      "Skip the enterprise QBR template. Here is a lean 4-question format built for founders with small B2B teams.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-run-a-sales-qbr",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
