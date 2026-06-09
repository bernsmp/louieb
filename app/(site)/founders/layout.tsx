import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Founders — Fractional Sales Leadership | Louie Bernstein",
  description: "Fractional sales leadership built for B2B founders at $1M–$10M ARR who are stuck in founder-led sales and not ready for a full-time VP.",
  openGraph: {
    title: "For Founders — Fractional Sales Leadership",
    description: "Fractional sales leadership built for B2B founders at $1M–$10M ARR who are stuck in founder-led sales and not ready for a full-time VP.",
    type: "article",
    url: "https://louiebernstein.com/founders",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "For Founders — Fractional Sales Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Founders — Fractional Sales Leadership",
    description: "Fractional sales leadership built for B2B founders at $1M–$10M ARR who are stuck in founder-led sales and not ready for a full-time VP.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/founders",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FoundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
