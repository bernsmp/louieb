import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Shorten Your B2B Sales Cycle Without Discounting, Pushing, or Pressuring Buyers | Louie Bernstein",
  description: "A long sales cycle isn't usually a buyer problem. It's a process problem — on your side. Here are the five tactics that remove friction, compress deal timelines, and generate revenue faster without…",
  openGraph: {
    title: "How to Shorten Your B2B Sales Cycle Without Discounting, Pushing, or Pressuring Buyers",
    description: "A long sales cycle isn't usually a buyer problem. It's a process problem — on your side. Here are the five tactics that remove friction, compress deal timelines, and generate revenue faster without…",
    type: "article",
    url: "https://louiebernstein.com/how-to-shorten-sales-cycle",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Shorten Your B2B Sales Cycle Without Discounting, Pushing, or Pressuring Buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Shorten Your B2B Sales Cycle Without Discounting, Pushing, or Pressuring Buyers",
    description: "A long sales cycle isn't usually a buyer problem. It's a process problem — on your side. Here are the five tactics that remove friction, compress deal timelines, and generate revenue faster without…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-shorten-sales-cycle",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToShortenSalesCycleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
