import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Sales Culture at a Small B2B Company | Louie Bernstein",
  description:
    "Sales culture is not a leaderboard or a motivational Slack channel. It is the set of behaviors your team repeats without being told. Here is how to build it intentionally.",
  keywords: [
    "how to build a sales culture",
    "sales culture small company",
    "building sales culture B2B",
    "sales culture small business",
    "how to improve sales team culture",
    "creating a sales culture startup",
    "sales culture remote team",
    "how to fix broken sales culture",
    "sales team culture building",
    "sales culture fractional leader",
  ],
  openGraph: {
    title: "How to Build a Sales Culture at a Small B2B Company",
    description:
      "Most founders confuse culture with perks. Real sales culture is built through rituals and accountability, not motivational content. Here is the 5-practice framework.",
    type: "article",
    url: "https://louiebernstein.com/how-to-build-sales-culture",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a Sales Culture at a Small B2B Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Sales Culture at a Small B2B Company",
    description:
      "A strong sales culture is not accidental. It is the result of specific rituals, accountability systems, and leadership behaviors repeated consistently.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-build-sales-culture",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
