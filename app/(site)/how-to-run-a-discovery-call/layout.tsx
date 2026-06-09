import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Run a Sales Discovery Call That Actually Moves Deals Forward | Louie Bernstein",
  description: "Most discovery calls are status checks in disguise. Here are the 8 questions that separate real discovery from a pleasant conversation that leads nowhere — plus a comparison table and call scorecard…",
  openGraph: {
    title: "How to Run a Sales Discovery Call That Actually Moves Deals Forward",
    description: "Most discovery calls are status checks in disguise. Here are the 8 questions that separate real discovery from a pleasant conversation that leads nowhere — plus a comparison table and call scorecard…",
    type: "article",
    url: "https://louiebernstein.com/how-to-run-a-discovery-call",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Run a Sales Discovery Call That Actually Moves Deals Forward",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run a Sales Discovery Call That Actually Moves Deals Forward",
    description: "Most discovery calls are status checks in disguise. Here are the 8 questions that separate real discovery from a pleasant conversation that leads nowhere — plus a comparison table and call scorecard…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-run-a-discovery-call",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToRunADiscoveryCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
