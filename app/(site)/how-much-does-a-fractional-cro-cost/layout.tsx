import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does a Fractional CRO Cost? | Louie Bernstein",
  description: "The range is $6,000–$14,000/month depending on scope and hours. Here's exactly what each level includes, what drives the price, and how it compares to a full-time hire.",
  openGraph: {
    title: "How Much Does a Fractional CRO Cost?",
    description: "The range is $6,000–$14,000/month depending on scope and hours. Here's exactly what each level includes, what drives the price, and how it compares to a full-time hire.",
    type: "article",
    url: "https://louiebernstein.com/how-much-does-a-fractional-cro-cost",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Much Does a Fractional CRO Cost?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does a Fractional CRO Cost?",
    description: "The range is $6,000–$14,000/month depending on scope and hours. Here's exactly what each level includes, what drives the price, and how it compares to a full-time hire.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-much-does-a-fractional-cro-cost",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowMuchDoesAFractionalCroCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
