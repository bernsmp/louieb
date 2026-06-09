import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Out of Founder-Led Sales | Louie Bernstein",
  description: "You built the company by selling it yourself. Now that's the thing holding you back. Here's the 5-step system to hand off sales without blowing up your revenue.",
  openGraph: {
    title: "How to Get Out of Founder-Led Sales",
    description: "You built the company by selling it yourself. Now that's the thing holding you back. Here's the 5-step system to hand off sales without blowing up your revenue.",
    type: "article",
    url: "https://louiebernstein.com/how-to-get-out-of-founder-led-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Get Out of Founder-Led Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Out of Founder-Led Sales",
    description: "You built the company by selling it yourself. Now that's the thing holding you back. Here's the 5-step system to hand off sales without blowing up your revenue.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-get-out-of-founder-led-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToGetOutOfFounderLedSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
