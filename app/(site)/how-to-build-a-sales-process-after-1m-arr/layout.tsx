import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Sales Process After $1M ARR | Louie Bernstein",
  description:
    "The exact framework for building a repeatable sales process after hitting $1M ARR — Sales Playbook, ICP definition, action-based pipeline, KPIs, daily training, and accountability systems.",
  keywords: [
    "how to build a sales process after 1M ARR",
    "sales process for startups",
    "build sales process small business",
    "sales process 1M ARR",
    "repeatable sales process founder",
    "sales playbook startup",
    "sales system after 1M ARR",
    "scale sales process",
    "founder sales process",
    "sales process small business",
    "build sales team after 1M ARR",
    "fractional sales leader",
  ],
  openGraph: {
    title: "How to Build a Sales Process After $1M ARR",
    description:
      "You hit $1M ARR. Now what? Here's the exact framework for building a sales process that scales — without the founder closing every deal.",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-a-sales-process-after-1m-arr",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a Sales Process After $1M ARR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Sales Process After $1M ARR",
    description:
      "The exact framework to build a repeatable sales process after $1M ARR — from Sales Playbook to KPIs to daily training.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-build-a-sales-process-after-1m-arr",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToBuildSalesProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
