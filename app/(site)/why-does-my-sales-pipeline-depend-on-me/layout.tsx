import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Does My Sales Pipeline Depend Entirely on Me? | Louie Bernstein",
  description:
    "If your pipeline slows when you step back, the problem is structure — not effort. Here's why founder pipeline dependency happens at $1M–$10M ARR and how to fix it before it limits your growth.",
  keywords: [
    "why does my sales pipeline depend on me",
    "founder pipeline dependency",
    "founder-led sales pipeline problem",
    "sales pipeline depends on founder",
    "founder-dependent sales",
    "how to stop being the only salesperson",
    "founder sales bottleneck",
    "sales pipeline structure for founders",
    "founder pipeline fix",
    "fractional sales leader founder dependency",
    "sales system for $1M to $10M",
    "how to scale out of founder-led sales",
  ],
  openGraph: {
    title: "Why Does My Sales Pipeline Depend Entirely on Me? | Louie Bernstein",
    description:
      "If your pipeline slows when you step back, the problem is structure — not effort. Here's why founder pipeline dependency happens and how to fix it.",
    type: "article",
    url: "https://louiebernstein.com/why-does-my-sales-pipeline-depend-on-me",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Why Does My Sales Pipeline Depend Entirely on Me?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Does My Sales Pipeline Depend Entirely on Me?",
    description:
      "If your pipeline slows when you step back, the problem is structure — not effort. Here's what's causing it and how to fix it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/why-does-my-sales-pipeline-depend-on-me",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FounderPipelineDependencyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
