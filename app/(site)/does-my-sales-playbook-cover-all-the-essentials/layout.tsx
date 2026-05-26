import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does My Sales Playbook Cover All the Essentials? | Louie Bernstein",
  description:
    "Most $1M to $10M ARR founders think they have a Sales Playbook. Most of them don't. Here's the 5-point checklist to find out if yours is real or just a document.",
  keywords: [
    "sales playbook checklist",
    "sales playbook essentials",
    "does my sales playbook cover everything",
    "what should be in a sales playbook",
    "sales playbook for founders",
    "sales playbook for small business",
    "fractional sales leader playbook",
    "sales playbook ICP",
    "sales playbook qualification",
    "sales playbook objection handling",
    "sales playbook pricing rules",
    "sales playbook for 1m to 10m",
  ],
  openGraph: {
    title: "Does My Sales Playbook Cover All the Essentials? | Louie Bernstein",
    description:
      "Here's the 5-point checklist to find out if your Sales Playbook is real or just a document nobody opens.",
    type: "article",
    url: "https://louiebernstein.com/does-my-sales-playbook-cover-all-the-essentials",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Does My Sales Playbook Cover All the Essentials?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does My Sales Playbook Cover All the Essentials?",
    description:
      "The 5-point checklist for $1M to $10M ARR founders to find out if their Sales Playbook is real or just a document.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/does-my-sales-playbook-cover-all-the-essentials",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesPlaybookChecklistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
