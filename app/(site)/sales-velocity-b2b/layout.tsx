import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Sales Velocity? The One Metric That Predicts Revenue Better Than Quota | Louie Bernstein",
  description: "Quota tells you if you hit the number. Sales velocity tells you why — and what's coming next. Here's the formula every $1M–$10M founder should understand, and how to use it to diagnose exactly what's…",
  openGraph: {
    title: "What Is Sales Velocity? The One Metric That Predicts Revenue Better Than Quota",
    description: "Quota tells you if you hit the number. Sales velocity tells you why — and what's coming next. Here's the formula every $1M–$10M founder should understand, and how to use it to diagnose exactly what's…",
    type: "article",
    url: "https://louiebernstein.com/sales-velocity-b2b",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is Sales Velocity? The One Metric That Predicts Revenue Better Than Quota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Sales Velocity? The One Metric That Predicts Revenue Better Than Quota",
    description: "Quota tells you if you hit the number. Sales velocity tells you why — and what's coming next. Here's the formula every $1M–$10M founder should understand, and how to use it to diagnose exactly what's…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-velocity-b2b",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesVelocityB2bLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
