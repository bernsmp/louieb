import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Pipeline Stages: How to Define Them So Your Team Uses Them the Same Way | Louie Bernstein",
  description: "Most CRM pipeline stages are vague labels that mean different things to different reps. Without entry and exit criteria, stage advancement is based on optimism — not evidence.",
  openGraph: {
    title: "Sales Pipeline Stages: How to Define Them So Your Team Uses Them the Same Way",
    description: "Most CRM pipeline stages are vague labels that mean different things to different reps. Without entry and exit criteria, stage advancement is based on optimism — not evidence.",
    type: "article",
    url: "https://louiebernstein.com/sales-pipeline-stages",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Sales Pipeline Stages: How to Define Them So Your Team Uses Them the Same Way",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Pipeline Stages: How to Define Them So Your Team Uses Them the Same Way",
    description: "Most CRM pipeline stages are vague labels that mean different things to different reps. Without entry and exit criteria, stage advancement is based on optimism — not evidence.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-pipeline-stages",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesPipelineStagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
