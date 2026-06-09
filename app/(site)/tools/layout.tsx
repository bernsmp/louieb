import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Sales Tools & Assessments | Louie Bernstein",
  description: "Free tools to diagnose your sales system — ROI calculator, sales readiness assessment, and more for $1M–$10M ARR founders.",
  openGraph: {
    title: "Free Sales Tools & Assessments",
    description: "Free tools to diagnose your sales system — ROI calculator, sales readiness assessment, and more for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/tools",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Free Sales Tools & Assessments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Sales Tools & Assessments",
    description: "Free tools to diagnose your sales system — ROI calculator, sales readiness assessment, and more for $1M–$10M ARR founders.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/tools",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
