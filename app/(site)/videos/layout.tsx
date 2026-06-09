import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Leadership Videos | Louie Bernstein",
  description: "Short, practical videos on sales process, hiring, pipeline, forecasting, and founder-led sales transitions for $1M–$10M ARR founders.",
  openGraph: {
    title: "Sales Leadership Videos",
    description: "Short, practical videos on sales process, hiring, pipeline, forecasting, and founder-led sales transitions for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/videos",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Sales Leadership Videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Leadership Videos",
    description: "Short, practical videos on sales process, hiring, pipeline, forecasting, and founder-led sales transitions for $1M–$10M ARR founders.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/videos",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
