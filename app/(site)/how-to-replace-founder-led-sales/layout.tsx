import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Replace Founder-Led Sales Without Losing Momentum | Louie Bernstein",
  description:
    "A step-by-step framework for replacing founder-led sales — without losing deals, momentum, or your best customers. Build the system, hire the team, step back.",
  keywords: [
    "how to replace founder-led sales",
    "founder-led sales replacement",
    "transition from founder-led sales",
    "scaling past founder-led sales",
    "build a sales team founder",
    "founder sales transition",
    "sales system for founders",
    "sales playbook for founders",
    "hire first salesperson startup",
    "fractional sales leader founder",
    "stop doing founder-led sales",
  ],
  openGraph: {
    title: "How to Replace Founder-Led Sales Without Losing Momentum",
    description:
      "The exact steps to transition your company out of founder-led sales — and build a sales machine that runs without you.",
    type: "article",
    url: "https://louiebernstein.com/how-to-replace-founder-led-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Replace Founder-Led Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Replace Founder-Led Sales Without Losing Momentum",
    description:
      "Stop being your company's only salesperson. Here's the exact framework to replace founder-led sales and build a team that sells without you.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-replace-founder-led-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToReplaceFounderLedSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
