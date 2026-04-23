import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Do I Know If My CRM Data Is Actually Accurate? | Louie Bernstein",
  description:
    "Five field tests that tell you whether your CRM is reporting truth or fiction — plus the four sentences every $1M–$10M ARR founder should tell their salespeople to keep the data honest. No new software required.",
  keywords: [
    "CRM data accuracy",
    "is my CRM accurate",
    "how to audit CRM data",
    "CRM data hygiene",
    "pipeline data accuracy",
    "forecast reliability",
    "sales rep CRM discipline",
    "what to tell salespeople about CRM",
    "CRM required fields",
    "pipeline review cadence",
    "sales forecast accuracy",
    "CRM for founder-led sales",
    "fix CRM hygiene without new software",
    "$1M $10M ARR sales operations",
  ],
  openGraph: {
    title:
      "How Do I Know If My CRM Data Is Actually Accurate?",
    description:
      "Five tests for CRM accuracy and the four sentences to tell your reps so the forecast stops lying. Written for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/how-do-i-know-if-my-crm-data-is-actually-accurate",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Do I Know If My CRM Data Is Actually Accurate?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Do I Know If My CRM Data Is Actually Accurate?",
    description:
      "Five tests for CRM accuracy and the four sentences to tell your reps so the forecast stops lying.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/how-do-i-know-if-my-crm-data-is-actually-accurate",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function CrmDataAccuracyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
