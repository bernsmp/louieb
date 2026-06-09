import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Sales Leadership Insights | Louie Bernstein",
  description: "Field-tested thinking on fractional sales leadership, sales hiring, pipeline management, and building repeatable revenue at $1M–$10M ARR.",
  openGraph: {
    title: "Blog — Sales Leadership Insights",
    description: "Field-tested thinking on fractional sales leadership, sales hiring, pipeline management, and building repeatable revenue at $1M–$10M ARR.",
    type: "article",
    url: "https://louiebernstein.com/blog",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Blog — Sales Leadership Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Sales Leadership Insights",
    description: "Field-tested thinking on fractional sales leadership, sales hiring, pipeline management, and building repeatable revenue at $1M–$10M ARR.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
