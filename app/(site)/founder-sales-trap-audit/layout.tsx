import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Founder Sales Trap Self-Audit | Free 20-Question Assessment | Louie Bernstein",
  description:
    "20 yes/no questions to find out if you are the bottleneck holding back your own sales growth. Free 3-minute self-audit for B2B founders at $1M–$10M ARR — get your score and exactly which sales systems to build next.",
  keywords: [
    "founder sales trap",
    "founder-led sales audit",
    "sales self-audit",
    "founder sales assessment",
    "am I the sales bottleneck",
    "founder-led sales quiz",
    "sales systems audit",
    "b2b founder sales assessment",
    "sales process audit",
    "free sales audit",
  ],
  openGraph: {
    title: "The Founder Sales Trap Self-Audit",
    description:
      "20 questions to find out if you are the bottleneck holding back your own sales growth. Free 3-minute self-audit for B2B founders.",
    type: "website",
    url: "https://louiebernstein.com/founder-sales-trap-audit",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "The Founder Sales Trap Self-Audit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founder Sales Trap Self-Audit",
    description:
      "20 questions to find out if you are the bottleneck holding back your own sales growth. Free 3-minute self-audit for B2B founders.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/founder-sales-trap-audit",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FounderSalesTrapAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
