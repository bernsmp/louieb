import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Sales Leadership for Private Equity | Louie Bernstein",
  description:
    "PE-backed companies need sales leadership that moves at PE speed. A fractional sales leader is operational in days — protecting revenue, accelerating value creation, and preparing the sales org for exit.",
  keywords: [
    "fractional sales leadership private equity",
    "fractional sales leader PE-backed company",
    "fractional VP of sales portfolio company",
    "sales leadership for PE-backed companies",
    "fractional CRO private equity",
    "PE portfolio company sales leadership",
    "value creation sales leadership private equity",
    "fractional sales leader portfolio company",
    "private equity sales diligence",
    "exit-ready sales organization",
  ],
  openGraph: {
    title: "Fractional Sales Leadership for Private Equity",
    description:
      "PE-backed companies and portfolio companies need sales leadership that moves at PE speed. Here is what a fractional sales leader does across the full hold cycle.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leadership-for-private-equity",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leadership for Private Equity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leadership for Private Equity",
    description:
      "A full-time VP of Sales search takes six months. A fractional sales leader is operational in days — with full accountability for the number.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leadership-for-private-equity",
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
