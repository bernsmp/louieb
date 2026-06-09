import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Founder-Led Sales — And Why It Eventually Breaks | Louie Bernstein",
  description: "Every founder starts here. You close the first deals yourself — and it works. Then it stops working. Here's the lifecycle of founder-led sales and the moment you need to change it.",
  openGraph: {
    title: "What Is Founder-Led Sales — And Why It Eventually Breaks",
    description: "Every founder starts here. You close the first deals yourself — and it works. Then it stops working. Here's the lifecycle of founder-led sales and the moment you need to change it.",
    type: "article",
    url: "https://louiebernstein.com/what-is-founder-led-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is Founder-Led Sales — And Why It Eventually Breaks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Founder-Led Sales — And Why It Eventually Breaks",
    description: "Every founder starts here. You close the first deals yourself — and it works. Then it stops working. Here's the lifecycle of founder-led sales and the moment you need to change it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-is-founder-led-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatIsFounderLedSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
