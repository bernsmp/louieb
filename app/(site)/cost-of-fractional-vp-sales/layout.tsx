import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does a Fractional VP of Sales Cost? | Louie Bernstein",
  description: "The short answer: $6,000–$14,000/month. Here's what drives that range, what's included, and how it stacks up against the full-time alternative.",
  openGraph: {
    title: "What Does a Fractional VP of Sales Cost?",
    description: "The short answer: $6,000–$14,000/month. Here's what drives that range, what's included, and how it stacks up against the full-time alternative.",
    type: "article",
    url: "https://louiebernstein.com/cost-of-fractional-vp-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Does a Fractional VP of Sales Cost?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Does a Fractional VP of Sales Cost?",
    description: "The short answer: $6,000–$14,000/month. Here's what drives that range, what's included, and how it stacks up against the full-time alternative.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/cost-of-fractional-vp-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function CostOfFractionalVpSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
