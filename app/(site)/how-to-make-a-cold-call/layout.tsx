import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Make a Cold Call That Actually Books Meetings | Louie Bernstein",
  description: "Cold calling is harder than cold email, and it converts at twice the rate. Here is the structure that earns conversations with B2B founders, plus 5 openers that consistently break through, and the…",
  openGraph: {
    title: "How to Make a Cold Call That Actually Books Meetings",
    description: "Cold calling is harder than cold email, and it converts at twice the rate. Here is the structure that earns conversations with B2B founders, plus 5 openers that consistently break through, and the…",
    type: "article",
    url: "https://louiebernstein.com/how-to-make-a-cold-call",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Make a Cold Call That Actually Books Meetings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Cold Call That Actually Books Meetings",
    description: "Cold calling is harder than cold email, and it converts at twice the rate. Here is the structure that earns conversations with B2B founders, plus 5 openers that consistently break through, and the…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-make-a-cold-call",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToMakeAColdCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
