import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Run a Sales Pipeline Review Without It Becoming a Waste of Time | Louie Bernstein",
  description: "Most pipeline reviews are theater — status updates that nobody learns from and nothing changes after. Here are the five questions that turn a pipeline review into an accountability engine.",
  openGraph: {
    title: "How to Run a Sales Pipeline Review Without It Becoming a Waste of Time",
    description: "Most pipeline reviews are theater — status updates that nobody learns from and nothing changes after. Here are the five questions that turn a pipeline review into an accountability engine.",
    type: "article",
    url: "https://louiebernstein.com/how-to-run-a-sales-pipeline-review",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Run a Sales Pipeline Review Without It Becoming a Waste of Time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run a Sales Pipeline Review Without It Becoming a Waste of Time",
    description: "Most pipeline reviews are theater — status updates that nobody learns from and nothing changes after. Here are the five questions that turn a pipeline review into an accountability engine.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-run-a-sales-pipeline-review",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToRunASalesPipelineReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
