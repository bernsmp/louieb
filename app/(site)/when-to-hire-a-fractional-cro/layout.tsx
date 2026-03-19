import { Metadata } from "next";

export const metadata: Metadata = {
  title: "When to Hire a Fractional CRO: 7 Signs You're Ready | Louie Bernstein",
  description:
    "Not sure if it's time to hire a Fractional CRO? Here are 7 clear signs your $1M–$10M business needs embedded sales leadership — and what to do about it.",
  keywords: [
    "when to hire a fractional CRO",
    "fractional CRO timing",
    "do I need a fractional CRO",
    "signs you need a fractional CRO",
    "when to hire fractional sales leader",
    "fractional chief revenue officer",
    "founder-led sales replacement",
    "sales leadership small business",
    "when to hire VP of sales",
    "fractional sales executive",
  ],
  openGraph: {
    title: "When to Hire a Fractional CRO: 7 Signs You're Ready",
    description:
      "7 clear signals that your company needs a Fractional CRO right now — and what happens if you wait.",
    type: "article",
    url: "https://louiebernstein.com/when-to-hire-a-fractional-cro",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "When to Hire a Fractional CRO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "When to Hire a Fractional CRO: 7 Signs You're Ready",
    description:
      "7 signals that it's time to bring in a Fractional CRO — before founder-led sales costs you the company.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/when-to-hire-a-fractional-cro",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function WhenToHireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
