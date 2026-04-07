import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder-Led Sales Exit Checklist | Louie Bernstein",
  description:
    "5 things that must be true before you hand off sales as a founder. A practical checklist with a test for each item so you know exactly where you stand.",
  keywords: [
    "founder-led sales exit checklist",
    "how to exit founder-led sales",
    "founder-led sales transition checklist",
    "am I ready to exit founder-led sales",
    "when to hand off sales as a founder",
    "founder sales transition readiness",
    "exit founder-led sales checklist",
    "founder-led sales handoff",
    "how to stop doing all the sales yourself",
    "founder-led sales exit strategy",
  ],
  openGraph: {
    title: "Founder-Led Sales Exit Checklist",
    description:
      "Most founders exit founder-led sales too early and without the infrastructure to make it stick. This 5-item checklist tells you exactly what needs to be in place first.",
    type: "article",
    url: "https://louiebernstein.com/founder-led-sales-exit-checklist",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Founder-Led Sales Exit Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder-Led Sales Exit Checklist",
    description:
      "5 things that must be true before you hand off sales. Each item has a test at the bottom so you know whether you have actually passed it.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/founder-led-sales-exit-checklist",
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
