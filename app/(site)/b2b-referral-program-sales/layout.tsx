import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a B2B Referral Program That Generates Warm Leads Consistently | Louie Bernstein",
  description: "Most founders rely on referrals but have no system to generate them. They happen when a customer happens to think of you — not because you made a specific ask through a repeatable process.",
  openGraph: {
    title: "How to Build a B2B Referral Program That Generates Warm Leads Consistently",
    description: "Most founders rely on referrals but have no system to generate them. They happen when a customer happens to think of you — not because you made a specific ask through a repeatable process.",
    type: "article",
    url: "https://louiebernstein.com/b2b-referral-program-sales",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Build a B2B Referral Program That Generates Warm Leads Consistently",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a B2B Referral Program That Generates Warm Leads Consistently",
    description: "Most founders rely on referrals but have no system to generate them. They happen when a customer happens to think of you — not because you made a specific ask through a repeatable process.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/b2b-referral-program-sales",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function B2bReferralProgramSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
