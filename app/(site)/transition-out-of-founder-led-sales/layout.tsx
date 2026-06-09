import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Transition Out of Founder-Led Sales Without Losing Momentum | Louie Bernstein",
  description: "The goal isn't to stop selling. It's to build a sales function that works without requiring you for every deal. Here's the 5-step path that actually holds.",
  openGraph: {
    title: "How to Transition Out of Founder-Led Sales Without Losing Momentum",
    description: "The goal isn't to stop selling. It's to build a sales function that works without requiring you for every deal. Here's the 5-step path that actually holds.",
    type: "article",
    url: "https://louiebernstein.com/transition-out-of-founder-led-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Transition Out of Founder-Led Sales Without Losing Momentum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Transition Out of Founder-Led Sales Without Losing Momentum",
    description: "The goal isn't to stop selling. It's to build a sales function that works without requiring you for every deal. Here's the 5-step path that actually holds.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/transition-out-of-founder-led-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function TransitionOutOfFounderLedSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
