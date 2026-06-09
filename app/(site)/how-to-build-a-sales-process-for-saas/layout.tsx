import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Sales Process for SaaS | Louie Bernstein",
  description: "SaaS sales has unique challenges — trials, expansion revenue, churn risk, product-led vs. sales-led growth. Here's the exact process for building a repeatable sales system that converts trials and…",
  openGraph: {
    title: "How to Build a Sales Process for SaaS",
    description: "SaaS sales has unique challenges — trials, expansion revenue, churn risk, product-led vs. sales-led growth. Here's the exact process for building a repeatable sales system that converts trials and…",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-a-sales-process-for-saas",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a Sales Process for SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Sales Process for SaaS",
    description: "SaaS sales has unique challenges — trials, expansion revenue, churn risk, product-led vs. sales-led growth. Here's the exact process for building a repeatable sales system that converts trials and…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-build-a-sales-process-for-saas",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToBuildASalesProcessForSaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
