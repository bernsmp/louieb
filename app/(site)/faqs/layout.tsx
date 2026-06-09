import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Sales Leader FAQs | Louie Bernstein",
  description: "Common questions about hiring a fractional sales leader: pricing, scope, results, how it compares to a full-time VP of Sales, and what to expect.",
  openGraph: {
    title: "Fractional Sales Leader FAQs",
    description: "Common questions about hiring a fractional sales leader: pricing, scope, results, how it compares to a full-time VP of Sales, and what to expect.",
    type: "article",
    url: "https://louiebernstein.com/faqs",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leader FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leader FAQs",
    description: "Common questions about hiring a fractional sales leader: pricing, scope, results, how it compares to a full-time VP of Sales, and what to expect.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/faqs",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
