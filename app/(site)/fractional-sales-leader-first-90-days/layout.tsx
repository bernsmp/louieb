import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Expect in the First 90 Days With a Fractional Sales Leader | Louie Bernstein",
  description:
    "Days 1-30 are for listening. Days 31-60 are for fixing. Days 61-90 are for making it stick. Here is exactly what should happen after you bring in a fractional sales leader.",
  keywords: [
    "fractional sales leader first 90 days",
    "what to expect fractional VP of sales",
    "fractional sales leader onboarding",
    "how long until fractional sales leader results",
    "fractional sales leader what they do",
    "fractional sales leadership timeline",
    "fractional VP sales first month",
    "fractional sales leader results timeline",
    "what does fractional sales leader do first",
    "hiring fractional sales leader expectations",
  ],
  openGraph: {
    title: "What to Expect in the First 90 Days With a Fractional Sales Leader",
    description:
      "Founders who bring in a fractional sales leader often don't know what good looks like. Here is the 90-day roadmap by phase, so you always know if it is working.",
    type: "article",
    url: "https://louiebernstein.com/fractional-sales-leader-first-90-days",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "What to Expect in the First 90 Days With a Fractional Sales Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Expect in the First 90 Days With a Fractional Sales Leader",
    description:
      "What should happen in month 1, month 2, and month 3? Here is the specific playbook for what a fractional sales leader delivers by phase.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/fractional-sales-leader-first-90-days",
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
