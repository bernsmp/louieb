import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Benefits of Hiring a Fractional Sales Leader for Small Businesses | Louie Bernstein",
  description:
    "The key benefits of hiring a fractional sales leader for small businesses: repeatable systems, expert team management, faster growth — at 60–80% less than a full-time VP. Also the preferred model for Series A companies building scalable revenue before their next raise.",
  keywords: [
    "fractional sales leader benefits",
    "benefits of fractional sales leader",
    "fractional sales leader small business",
    "hire fractional sales leader",
    "fractional VP of sales benefits",
    "fractional sales leader cost",
    "outsourced sales leadership benefits",
    "fractional sales leader ROI",
    "small business sales leadership",
    "fractional sales management benefits",
    "part-time sales leader benefits",
    "fractional CRO benefits",
  ],
  openGraph: {
    title: "Key Benefits of Hiring a Fractional Sales Leader for Small Businesses",
    description:
      "Repeatable systems, expert team management, and faster growth at 60–80% less than a full-time hire. These are the key benefits small businesses and Series A companies get from fractional sales leadership.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leader-benefits-small-business",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Key Benefits of Hiring a Fractional Sales Leader for Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Benefits of Hiring a Fractional Sales Leader for Small Businesses",
    description:
      "The key benefits of hiring a fractional sales leader — systems, team management, and revenue growth at a fraction of the cost of a full-time VP of Sales.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader-benefits-small-business",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function BenefitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
