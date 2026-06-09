import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Sales Enablement? And Why Your Small Team Desperately Needs It | Louie Bernstein",
  description: "Sales enablement is the system that gives your reps everything they need to sell consistently — the content, training, process, tools, and coaching. Without it, your team is improvising.",
  openGraph: {
    title: "What Is Sales Enablement? And Why Your Small Team Desperately Needs It",
    description: "Sales enablement is the system that gives your reps everything they need to sell consistently — the content, training, process, tools, and coaching. Without it, your team is improvising.",
    type: "article",
    url: "https://louiebernstein.com/what-is-sales-enablement",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What Is Sales Enablement? And Why Your Small Team Desperately Needs It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Sales Enablement? And Why Your Small Team Desperately Needs It",
    description: "Sales enablement is the system that gives your reps everything they need to sell consistently — the content, training, process, tools, and coaching. Without it, your team is improvising.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/what-is-sales-enablement",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhatIsSalesEnablementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
