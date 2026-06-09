import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Fractional Sales Leadership Worth It? | Louie Bernstein",
  description: "The honest answer: it depends on where you are and what you're willing to commit to. Here's when it works, when it doesn't, and what you should realistically expect.",
  openGraph: {
    title: "Is Fractional Sales Leadership Worth It?",
    description: "The honest answer: it depends on where you are and what you're willing to commit to. Here's when it works, when it doesn't, and what you should realistically expect.",
    type: "article",
    url: "https://louiebernstein.com/is-fractional-sales-leadership-worth-it",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Is Fractional Sales Leadership Worth It?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Fractional Sales Leadership Worth It?",
    description: "The honest answer: it depends on where you are and what you're willing to commit to. Here's when it works, when it doesn't, and what you should realistically expect.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/is-fractional-sales-leadership-worth-it",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function IsFractionalSalesLeadershipWorthItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
