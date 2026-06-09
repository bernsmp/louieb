import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Close More Deals Without Discounting Your Price | Louie Bernstein",
  description: "Discounting doesn't close deals — it trains buyers to wait and colleagues to expect it. Here are the 6 non-price closing levers that protect your margin and move deals to signature.",
  openGraph: {
    title: "How to Close More Deals Without Discounting Your Price",
    description: "Discounting doesn't close deals — it trains buyers to wait and colleagues to expect it. Here are the 6 non-price closing levers that protect your margin and move deals to signature.",
    type: "article",
    url: "https://louiebernstein.com/how-to-close-deals-without-discounting",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Close More Deals Without Discounting Your Price",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Close More Deals Without Discounting Your Price",
    description: "Discounting doesn't close deals — it trains buyers to wait and colleagues to expect it. Here are the 6 non-price closing levers that protect your margin and move deals to signature.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-close-deals-without-discounting",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToCloseDealsWithoutDiscountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
