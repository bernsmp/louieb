import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Set Up HubSpot for a Small Sales Team | Louie Bernstein",
  description: "Most small teams set up HubSpot wrong — too complex, too many fields, no data standards. Here's the 6-step setup that actually gets used.",
  openGraph: {
    title: "How to Set Up HubSpot for a Small Sales Team",
    description: "Most small teams set up HubSpot wrong — too complex, too many fields, no data standards. Here's the 6-step setup that actually gets used.",
    type: "article",
    url: "https://louiebernstein.com/how-to-set-up-hubspot-for-small-sales-team",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Set Up HubSpot for a Small Sales Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Set Up HubSpot for a Small Sales Team",
    description: "Most small teams set up HubSpot wrong — too complex, too many fields, no data standards. Here's the 6-step setup that actually gets used.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-set-up-hubspot-for-small-sales-team",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToSetUpHubspotForSmallSalesTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
