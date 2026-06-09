import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Sales Tech Stack? The Minimum Setup for a $1M–$10M Business | Louie Bernstein",
  description: "Most founders either overbuild their tech stack before they have the process to use it, or underbuild until everything breaks.",
  openGraph: {
    title: "What Is a Sales Tech Stack? The Minimum Setup for a $1M–$10M Business",
    description: "Most founders either overbuild their tech stack before they have the process to use it, or underbuild until everything breaks.",
    type: "article",
    url: "https://louiebernstein.com/sales-tech-stack-for-small-business",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is a Sales Tech Stack? The Minimum Setup for a $1M–$10M Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Sales Tech Stack? The Minimum Setup for a $1M–$10M Business",
    description: "Most founders either overbuild their tech stack before they have the process to use it, or underbuild until everything breaks.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-tech-stack-for-small-business",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesTechStackForSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
