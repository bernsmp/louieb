import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CRO vs. Full-Time CRO | Louie Bernstein",
  description: "The right answer depends on your ARR, your sales org complexity, and what you actually need right now. Here's how to think through the decision — and avoid the expensive mistake of hiring wrong.",
  openGraph: {
    title: "Fractional CRO vs. Full-Time CRO",
    description: "The right answer depends on your ARR, your sales org complexity, and what you actually need right now. Here's how to think through the decision — and avoid the expensive mistake of hiring wrong.",
    type: "article",
    url: "https://louiebernstein.com/fractional-cro-vs-full-time-cro",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional CRO vs. Full-Time CRO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CRO vs. Full-Time CRO",
    description: "The right answer depends on your ARR, your sales org complexity, and what you actually need right now. Here's how to think through the decision — and avoid the expensive mistake of hiring wrong.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-cro-vs-full-time-cro",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalCroVsFullTimeCroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
