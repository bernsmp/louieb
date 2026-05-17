import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Will a Fractional Sales Leader Force a One-Size-Fits-All Playbook on My Business? | Louie Bernstein",
  description:
    "Short answer: no. A real Fractional Sales Leader observes your sales motion, codifies it into a custom playbook, and refines it every 90 days — never imports a template. Here is how the customization process actually works for $1M–$10M ARR founders.",
  keywords: [
    "fractional sales leader customization",
    "one size fits all sales playbook",
    "custom sales playbook for founders",
    "fractional sales leader unique business",
    "preserve sales DNA",
    "founder-led sales playbook",
    "custom sales process",
    "fractional sales leader methodology",
    "sales playbook for $1M $10M ARR",
    "how fractional sales leader works",
    "sales playbook customization",
    "fractional sales leader for unique business",
  ],
  openGraph: {
    title:
      "Will a Fractional Sales Leader Force a One-Size-Fits-All Playbook on My Unique Business?",
    description:
      "A real Fractional Sales Leader extracts your sales DNA into a custom playbook — they do not import templates. Here is how the customization process works.",
    type: "article",
    url: "https://louiebernstein.com/will-fractional-sales-leader-force-one-size-fits-all-playbook",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Will a Fractional Sales Leader Force a One-Size-Fits-All Playbook on My Unique Business?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Will a Fractional Sales Leader Force a One-Size-Fits-All Playbook on My Unique Business?",
    description:
      "A real Fractional Sales Leader codifies your sales DNA into a custom playbook — never imports a template.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/will-fractional-sales-leader-force-one-size-fits-all-playbook",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function OneSizeFitsAllPlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
