import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Sales Team After $1M ARR | Louie Bernstein",
  description: "Hitting $1M is proof of concept. Building a team to get to $5M is a completely different challenge — and most founders approach it wrong.",
  openGraph: {
    title: "How to Build a Sales Team After $1M ARR",
    description: "Hitting $1M is proof of concept. Building a team to get to $5M is a completely different challenge — and most founders approach it wrong.",
    type: "article",
    url: "https://louiebernstein.com/build-sales-team-after-1m-arr",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a Sales Team After $1M ARR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Sales Team After $1M ARR",
    description: "Hitting $1M is proof of concept. Building a team to get to $5M is a completely different challenge — and most founders approach it wrong.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/build-sales-team-after-1m-arr",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function BuildSalesTeamAfter1mArrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
