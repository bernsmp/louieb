import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Articles & Insights | Louie Bernstein",
  description: "Practical articles on fractional sales leadership, founder-led sales, sales process, hiring, and scaling revenue for $1M–$10M ARR founders.",
  openGraph: {
    title: "Sales Articles & Insights",
    description: "Practical articles on fractional sales leadership, founder-led sales, sales process, hiring, and scaling revenue for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/articles",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Sales Articles & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Articles & Insights",
    description: "Practical articles on fractional sales leadership, founder-led sales, sales process, hiring, and scaling revenue for $1M–$10M ARR founders.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/articles",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
