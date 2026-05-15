import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Can a Fractional Sales Leader Lead My Team If They're Only Here Two Days a Week? | Louie Bernstein",
  description:
    "The objection is real — but it is pointed at the wrong thing. Leadership is not presence. Here is how a Fractional Sales Leader leads a team they see two days a week through cadence, accountability, playbook, and decision authority.",
  keywords: [
    "fractional sales leader two days a week",
    "how does a fractional sales leader lead a team",
    "part-time sales leader",
    "fractional vs full-time sales manager",
    "fractional sales leader credibility",
    "sales leadership without daily presence",
    "fractional sales leader operating cadence",
    "sales accountability document",
    "fractional sales leader objection",
    "fractional sales leader part-time management",
    "B2B fractional sales leadership",
    "fractional sales leader $1M $10M ARR",
  ],
  openGraph: {
    title:
      "How Can a Fractional Sales Leader Lead My Team If They're Only Here Two Days a Week?",
    description:
      "Leadership is not presence. It is the system that runs when no one is in the room. How a Fractional Sales Leader actually leads on two days — and the other five.",
    type: "article",
    url: "https://louiebernstein.com/can-fractional-sales-leader-lead-team-part-time",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Can a Fractional Sales Leader Lead My Team If They're Only Here Two Days a Week?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Can a Fractional Sales Leader Lead My Team If They're Only Here Two Days a Week?",
    description:
      "Leadership is not presence. It is the system that runs when no one is in the room.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/can-fractional-sales-leader-lead-team-part-time",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function FractionalLeaderPartTimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
