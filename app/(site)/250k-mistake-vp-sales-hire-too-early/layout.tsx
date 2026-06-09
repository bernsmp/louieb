import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The $250,000 Mistake: Hiring a VP of Sales Too Early | Louie Bernstein",
  description: "It's the most expensive mistake early-stage founders make in sales. Here's exactly how it happens — and how to avoid it.",
  openGraph: {
    title: "The $250,000 Mistake: Hiring a VP of Sales Too Early",
    description: "It's the most expensive mistake early-stage founders make in sales. Here's exactly how it happens — and how to avoid it.",
    type: "article",
    url: "https://louiebernstein.com/250k-mistake-vp-sales-hire-too-early",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The $250,000 Mistake: Hiring a VP of Sales Too Early",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The $250,000 Mistake: Hiring a VP of Sales Too Early",
    description: "It's the most expensive mistake early-stage founders make in sales. Here's exactly how it happens — and how to avoid it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/250k-mistake-vp-sales-hire-too-early",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function Page250kMistakeVpSalesHireTooEarlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
