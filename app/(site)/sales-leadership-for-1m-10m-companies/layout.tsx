import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Leadership Built for $1M\\u2013$10M Companies | Louie Bernstein",
  description: "The $1M\\u2013$10M stage is where most sales systems break. You\\u2019ve outgrown founder-led sales but you\\u2019re not big enough for a $250k VP.",
  openGraph: {
    title: "Sales Leadership Built for $1M\\u2013$10M Companies",
    description: "The $1M\\u2013$10M stage is where most sales systems break. You\\u2019ve outgrown founder-led sales but you\\u2019re not big enough for a $250k VP.",
    type: "article",
    url: "https://louiebernstein.com/sales-leadership-for-1m-10m-companies",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Sales Leadership Built for $1M\\u2013$10M Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Leadership Built for $1M\\u2013$10M Companies",
    description: "The $1M\\u2013$10M stage is where most sales systems break. You\\u2019ve outgrown founder-led sales but you\\u2019re not big enough for a $250k VP.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-leadership-for-1m-10m-companies",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesLeadershipFor1m10mCompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
