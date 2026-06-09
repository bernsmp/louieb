import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map | Louie Bernstein",
  description: "Full directory of guides, articles, and resources on louiebernstein.com — fractional sales leadership for $1M–$10M ARR founders.",
  openGraph: {
    title: "Site Map",
    description: "Full directory of guides, articles, and resources on louiebernstein.com — fractional sales leadership for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/site-map",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Site Map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map",
    description: "Full directory of guides, articles, and resources on louiebernstein.com — fractional sales leadership for $1M–$10M ARR founders.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/site-map",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SiteMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
