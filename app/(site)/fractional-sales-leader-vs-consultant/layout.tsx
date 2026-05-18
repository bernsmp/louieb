import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fractional Sales Leader vs Consultant: Key Differences | Louie Bernstein",
  description:
    "A consultant hands you a strategy. A Fractional Sales Leader runs the team, builds the playbook, and is accountable for the number. Here's when each one is the right call at $1M–$10M ARR.",
  keywords: [
    "fractional sales leader vs consultant",
    "fractional sales leader",
    "sales consultant",
    "fractional VP of sales",
    "sales leadership comparison",
    "hire fractional sales leader",
    "sales consultant vs fractional",
    "fractional executive",
    "sales leadership options",
    "outsourced sales leadership",
    "part-time sales leader",
    "founder-led sales",
    "fractional CSO",
    "fractional chief sales officer",
  ],
  openGraph: {
    title: "Fractional Sales Leader vs Consultant: Key Differences Explained",
    description:
      "Why embedded leadership beats outside advice at $1M–$10M ARR — and when a consultant is still the right call.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leader-vs-consultant",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Fractional Sales Leader vs Consultant Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Sales Leader vs Consultant: Key Differences",
    description:
      "A consultant hands you a strategy. A Fractional Sales Leader builds the team that hits the number. Here's when to hire which.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader-vs-consultant",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalSalesLeaderVsConsultantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
