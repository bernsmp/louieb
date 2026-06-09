import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Founder Sales Course | Louie Bernstein",
  description: "A step-by-step course for founders building a repeatable sales system without hiring a full-time VP of Sales.",
  openGraph: {
    title: "The Founder Sales Course",
    description: "A step-by-step course for founders building a repeatable sales system without hiring a full-time VP of Sales.",
    type: "article",
    url: "https://louiebernstein.com/course",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The Founder Sales Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founder Sales Course",
    description: "A step-by-step course for founders building a repeatable sales system without hiring a full-time VP of Sales.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/course",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
