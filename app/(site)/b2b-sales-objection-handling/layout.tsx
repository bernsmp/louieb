import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Sales Objection Handling: How to Respond to the 7 Most Common Objections | Louie Bernstein",
  description: "Every lost deal has an objection somewhere in it. Most reps respond to the objection they hear, not the one that's actually driving it.",
  openGraph: {
    title: "B2B Sales Objection Handling: How to Respond to the 7 Most Common Objections",
    description: "Every lost deal has an objection somewhere in it. Most reps respond to the objection they hear, not the one that's actually driving it.",
    type: "article",
    url: "https://louiebernstein.com/b2b-sales-objection-handling",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "B2B Sales Objection Handling: How to Respond to the 7 Most Common Objections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Sales Objection Handling: How to Respond to the 7 Most Common Objections",
    description: "Every lost deal has an objection somewhere in it. Most reps respond to the objection they hear, not the one that's actually driving it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/b2b-sales-objection-handling",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function B2bSalesObjectionHandlingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
