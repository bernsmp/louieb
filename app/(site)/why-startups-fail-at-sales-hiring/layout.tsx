import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Startups Fail at Sales Hiring | Louie Bernstein",
  description: "Most startup sales hires fail within 12 months. The reasons are almost always the same — and almost always preventable. Here are the six root causes, and exactly what to do differently.",
  openGraph: {
    title: "Why Startups Fail at Sales Hiring",
    description: "Most startup sales hires fail within 12 months. The reasons are almost always the same — and almost always preventable. Here are the six root causes, and exactly what to do differently.",
    type: "article",
    url: "https://louiebernstein.com/why-startups-fail-at-sales-hiring",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Startups Fail at Sales Hiring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Startups Fail at Sales Hiring",
    description: "Most startup sales hires fail within 12 months. The reasons are almost always the same — and almost always preventable. Here are the six root causes, and exactly what to do differently.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/why-startups-fail-at-sales-hiring",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhyStartupsFailAtSalesHiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
