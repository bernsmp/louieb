import { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Pipeline. What to Do Right Now. | Louie Bernstein",
  description: "An empty pipeline today means no revenue in 60–90 days. Here's why it happened, what to do this week, and how to build a prospecting engine that keeps the pipeline full.",
  openGraph: {
    title: "No Pipeline. What to Do Right Now.",
    description: "An empty pipeline today means no revenue in 60–90 days. Here's why it happened, what to do this week, and how to build a prospecting engine that keeps the pipeline full.",
    type: "article",
    url: "https://louiebernstein.com/no-pipeline-what-to-do",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "No Pipeline. What to Do Right Now.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Pipeline. What to Do Right Now.",
    description: "An empty pipeline today means no revenue in 60–90 days. Here's why it happened, what to do this week, and how to build a prospecting engine that keeps the pipeline full.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/no-pipeline-what-to-do",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function NoPipelineWhatToDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
