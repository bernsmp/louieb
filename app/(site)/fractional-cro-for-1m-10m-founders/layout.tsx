import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CRO for $1M–$10M Founders | Louie Bernstein",
  description:
    "A Fractional CRO gives $1M–$10M founders the revenue leadership they need to escape founder-led sales — without the $400k full-time hire. Build repeatable pipeline and a team that sells without you.",
  keywords: [
    "fractional CRO for founders",
    "fractional chief revenue officer",
    "CRO for small business",
    "fractional CRO 1M 10M ARR",
    "founder-led sales replacement",
    "fractional sales leadership",
    "hire fractional CRO",
    "revenue leadership small business",
    "part-time CRO",
    "outsourced CRO",
    "fractional VP of sales",
    "sales system for founders",
  ],
  openGraph: {
    title: "Fractional CRO for $1M–$10M Founders",
    description:
      "Stop closing every deal yourself. Get a Fractional CRO without the $400k price tag — and build a sales team that runs without you.",
    type: "article",
    url: "https://louiebernstein.com/fractional-cro-for-1m-10m-founders",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional CRO for $1M–$10M Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CRO for $1M–$10M Founders | Louie Bernstein",
    description:
      "Enterprise-grade revenue leadership for founders with $1M–$10M ARR. Build a real sales team — without a $400k hire.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-cro-for-1m-10m-founders",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalCROLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
