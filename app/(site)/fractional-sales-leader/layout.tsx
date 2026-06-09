import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Sales Leader for $1M–$10M ARR Founders | Louie Bernstein",
  description: "A senior sales leader, embedded part-time, building the system, hiring the team, and removing the founder from day-to-day sales — for a fraction of the cost of a full-time VP.",
  openGraph: {
    title: "Fractional Sales Leader for $1M–$10M ARR Founders",
    description: "A senior sales leader, embedded part-time, building the system, hiring the team, and removing the founder from day-to-day sales — for a fraction of the cost of a full-time VP.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leader",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leader for $1M–$10M ARR Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leader for $1M–$10M ARR Founders",
    description: "A senior sales leader, embedded part-time, building the system, hiring the team, and removing the founder from day-to-day sales — for a fraction of the cost of a full-time VP.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalSalesLeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
