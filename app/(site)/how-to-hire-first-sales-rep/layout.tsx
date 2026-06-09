import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Hire Your First Sales Rep | Louie Bernstein",
  description: "Most founders hire their first salesperson too early, into a company with no system, and then wonder why it didn't work. Here's what to build before you hire, what to look for, and how to set your…",
  openGraph: {
    title: "How to Hire Your First Sales Rep",
    description: "Most founders hire their first salesperson too early, into a company with no system, and then wonder why it didn't work. Here's what to build before you hire, what to look for, and how to set your…",
    type: "article",
    url: "https://louiebernstein.com/how-to-hire-first-sales-rep",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Hire Your First Sales Rep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Hire Your First Sales Rep",
    description: "Most founders hire their first salesperson too early, into a company with no system, and then wonder why it didn't work. Here's what to build before you hire, what to look for, and how to set your…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-hire-first-sales-rep",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToHireFirstSalesRepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
