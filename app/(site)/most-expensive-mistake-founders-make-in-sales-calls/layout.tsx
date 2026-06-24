import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Most Expensive Mistake Founders Make in Sales Calls | Louie Bernstein",
  description:
    "The costliest sales-call mistake isn't a weak pitch. It's planning your reply while the prospect is still talking. Here's what listening to reply costs $1M–$10M founders, and how to fix it.",
  keywords: [
    "most expensive mistake in sales calls",
    "listening to reply vs listening to understand",
    "founder sales call mistakes",
    "active listening in sales",
    "how to listen on a sales call",
    "stop planning your reply sales",
    "discovery call listening",
    "why founders lose sales deals",
    "sales call mistakes founders make",
    "founder-led sales calls",
    "how to handle objections by listening",
    "fractional sales leader sales coaching",
  ],
  openGraph: {
    title: "The Most Expensive Mistake Founders Make in Sales Calls | Louie Bernstein",
    description:
      "It's planning your reply while the prospect is still talking. Here's what listening to reply costs you on a sales call, and how to fix it.",
    type: "article",
    url: "https://louiebernstein.com/most-expensive-mistake-founders-make-in-sales-calls",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The Most Expensive Mistake Founders Make in Sales Calls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Most Expensive Mistake Founders Make in Sales Calls",
    description:
      "It's planning your reply while the prospect is still talking. Here's why that loses deals, and how to fix it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/most-expensive-mistake-founders-make-in-sales-calls",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function ExpensiveSalesCallMistakeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
