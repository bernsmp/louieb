import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Founder Sales Newsletter | Louie Bernstein",
  description: "Weekly tactics on sales process, hiring, pipeline, and revenue acceleration for founders building from $1M to $10M ARR.",
  openGraph: {
    title: "The Founder Sales Newsletter",
    description: "Weekly tactics on sales process, hiring, pipeline, and revenue acceleration for founders building from $1M to $10M ARR.",
    type: "article",
    url: "https://louiebernstein.com/newsletter",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The Founder Sales Newsletter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founder Sales Newsletter",
    description: "Weekly tactics on sales process, hiring, pipeline, and revenue acceleration for founders building from $1M to $10M ARR.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/newsletter",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
