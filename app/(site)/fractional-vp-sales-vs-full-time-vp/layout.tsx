import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional VP of Sales vs. Full-Time VP | Louie Bernstein",
  description: "The question isn't which is better. It's which is right for where you are now. At $1M–$10M ARR, the answer is almost always fractional — and here's why.",
  openGraph: {
    title: "Fractional VP of Sales vs. Full-Time VP",
    description: "The question isn't which is better. It's which is right for where you are now. At $1M–$10M ARR, the answer is almost always fractional — and here's why.",
    type: "article",
    url: "https://louiebernstein.com/fractional-vp-sales-vs-full-time-vp",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional VP of Sales vs. Full-Time VP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional VP of Sales vs. Full-Time VP",
    description: "The question isn't which is better. It's which is right for where you are now. At $1M–$10M ARR, the answer is almost always fractional — and here's why.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-vp-sales-vs-full-time-vp",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalVpSalesVsFullTimeVpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
