import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Do Pipeline Stages Have to Do With Pipeline Velocity? | Louie Bernstein",
  description: "If you know each pipeline stage length, you can predict how quickly deals move, or stall. Here's how stage timing drives sales velocity for $1M–$10M founders.",
  keywords: [
    "pipeline stages",
    "pipeline velocity",
    "sales velocity",
    "sales cycle length",
    "time in stage",
    "sales pipeline stages",
    "pipeline bottleneck",
    "sales forecasting",
    "fractional sales leader",
    "founder-led sales",
  ],
  openGraph: {
    title: "What Do Pipeline Stages Have to Do With Pipeline Velocity?",
    description: "If you know each pipeline stage length, you can predict how quickly deals move, or stall. Here's how stage timing drives sales velocity.",
    type: "article",
    url: "https://louiebernstein.com/what-do-pipeline-stages-have-to-do-with-pipeline-velocity",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Do Pipeline Stages Have to Do With Pipeline Velocity?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Do Pipeline Stages Have to Do With Pipeline Velocity?",
    description: "If you know each pipeline stage length, you can predict how quickly deals move, or stall. Here's how stage timing drives sales velocity.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-do-pipeline-stages-have-to-do-with-pipeline-velocity",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function PipelineStagesVelocityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
