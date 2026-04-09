import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Sales Leadership for Series A Companies | Why Investors Should Insist on It",
  description:
    "Series A companies need fractional sales leadership to build repeatable revenue systems before scaling. Discover why smart investors insist on fractional sales leaders — and the key benefits for Series A founders and small businesses ready to grow.",
  keywords: [
    "fractional sales leadership Series A",
    "fractional sales leader for startups",
    "Series A sales leadership",
    "fractional VP of sales Series A",
    "sales leadership after Series A",
    "investor fractional sales leader",
    "post Series A sales strategy",
    "fractional CRO Series A",
    "Series A revenue growth",
    "fractional sales leader benefits",
    "sales system for funded startups",
    "hire fractional sales leader Series A",
  ],
  openGraph: {
    title: "Fractional Sales Leadership for Series A Companies | Louie Bernstein",
    description:
      "Why investors should insist on fractional sales leadership for Series A companies — and how it delivers the key benefits of a repeatable revenue system without full-time executive costs.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leadership-series-a",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leadership for Series A Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leadership for Series A Companies",
    description:
      "Why investors should insist on fractional sales leadership at Series A — and how to build a repeatable revenue system without betting on a $400k hire.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leadership-series-a",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SeriesALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
