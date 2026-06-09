import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Salespeople — Coaching & Career | Louie Bernstein",
  description: "Coaching, career guidance, and field-tested sales tactics for B2B salespeople from a 50-year sales leader and INC 500 founder.",
  openGraph: {
    title: "For Salespeople — Coaching & Career",
    description: "Coaching, career guidance, and field-tested sales tactics for B2B salespeople from a 50-year sales leader and INC 500 founder.",
    type: "article",
    url: "https://louiebernstein.com/salesperson",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "For Salespeople — Coaching & Career",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Salespeople — Coaching & Career",
    description: "Coaching, career guidance, and field-tested sales tactics for B2B salespeople from a 50-year sales leader and INC 500 founder.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/salesperson",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalespersonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
