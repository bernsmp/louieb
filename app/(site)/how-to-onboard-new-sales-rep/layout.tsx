import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Onboard a New Sales Rep in 30, 60, and 90 Days | Louie Bernstein",
  description: "Most reps fail in the first 90 days because no one told them what success looked like by when. Here's the milestone-based onboarding plan that gets new reps to full productivity — without a 6-month…",
  openGraph: {
    title: "How to Onboard a New Sales Rep in 30, 60, and 90 Days",
    description: "Most reps fail in the first 90 days because no one told them what success looked like by when. Here's the milestone-based onboarding plan that gets new reps to full productivity — without a 6-month…",
    type: "article",
    url: "https://louiebernstein.com/how-to-onboard-new-sales-rep",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Onboard a New Sales Rep in 30, 60, and 90 Days",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Onboard a New Sales Rep in 30, 60, and 90 Days",
    description: "Most reps fail in the first 90 days because no one told them what success looked like by when. Here's the milestone-based onboarding plan that gets new reps to full productivity — without a 6-month…",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-onboard-new-sales-rep",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HowToOnboardNewSalesRepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
