import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Diagnose Why Your Sales Team Isn't Growing Revenue | Louie Bernstein",
  description: "Before you fire someone, change the comp plan, or hire a VP of Sales — run this diagnosis. Flat or declining revenue has five root causes. This self-assessment tells you which one is yours.",
  openGraph: {
    title: "How to Diagnose Why Your Sales Team Isn't Growing Revenue",
    description: "Before you fire someone, change the comp plan, or hire a VP of Sales — run this diagnosis. Flat or declining revenue has five root causes. This self-assessment tells you which one is yours.",
    type: "article",
    url: "https://louiebernstein.com/diagnose-sales-team-problems",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Diagnose Why Your Sales Team Isn't Growing Revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Diagnose Why Your Sales Team Isn't Growing Revenue",
    description: "Before you fire someone, change the comp plan, or hire a VP of Sales — run this diagnosis. Flat or declining revenue has five root causes. This self-assessment tells you which one is yours.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/diagnose-sales-team-problems",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function DiagnoseSalesTeamProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
