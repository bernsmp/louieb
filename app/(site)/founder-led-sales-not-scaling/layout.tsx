import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder-Led Sales Isn't Scaling. | Louie Bernstein",
  description: "You're still the best salesperson in your company. That was an asset at $500k ARR. At $2M ARR, it's the ceiling. Here's the exact process for replacing yourself — without losing momentum.",
  openGraph: {
    title: "Founder-Led Sales Isn't Scaling.",
    description: "You're still the best salesperson in your company. That was an asset at $500k ARR. At $2M ARR, it's the ceiling. Here's the exact process for replacing yourself — without losing momentum.",
    type: "article",
    url: "https://louiebernstein.com/founder-led-sales-not-scaling",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Founder-Led Sales Isn't Scaling.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder-Led Sales Isn't Scaling.",
    description: "You're still the best salesperson in your company. That was an asset at $500k ARR. At $2M ARR, it's the ceiling. Here's the exact process for replacing yourself — without losing momentum.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/founder-led-sales-not-scaling",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FounderLedSalesNotScalingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
