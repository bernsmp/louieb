import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional VP of Sales for Small Businesses | Louie Bernstein",
  description:
    "A Fractional VP of Sales gives small businesses enterprise-grade sales leadership at a fraction of the cost. Build systems, manage teams, and create predictable revenue — without a $400k hire.",
  keywords: [
    "fractional VP of sales",
    "fractional VP of sales small business",
    "outsourced VP of sales",
    "part-time VP of sales",
    "fractional sales leader",
    "hire VP of sales small business",
    "fractional sales management",
    "sales leadership for startups",
    "affordable VP of sales",
    "fractional sales executive",
    "small business sales leadership",
    "sales team management small business",
  ],
  openGraph: {
    title: "Fractional VP of Sales for Small Businesses | Louie Bernstein",
    description:
      "Enterprise-grade sales leadership for small businesses — without the $400k price tag. Build a real sales system with a Fractional VP of Sales.",
    type: "article",
    url: "https://louiebernstein.com/fractional-vp-of-sales-for-small-businesses",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional VP of Sales for Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional VP of Sales for Small Businesses",
    description:
      "Stop running sales yourself. Get a Fractional VP of Sales who builds the system, manages the team, and creates predictable revenue.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-vp-of-sales-for-small-businesses",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalVPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
