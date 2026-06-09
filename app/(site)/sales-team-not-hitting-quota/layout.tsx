import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Sales Team Isn\\u2019t Hitting Quota. Here\\u2019s How to Diagnose It. | Louie Bernstein",
  description: "Before you fire your reps or set new targets, answer five questions. The answers will tell you exactly what\\u2019s broken \\u2014 and what to fix first.",
  openGraph: {
    title: "Your Sales Team Isn\\u2019t Hitting Quota. Here\\u2019s How to Diagnose It.",
    description: "Before you fire your reps or set new targets, answer five questions. The answers will tell you exactly what\\u2019s broken \\u2014 and what to fix first.",
    type: "article",
    url: "https://louiebernstein.com/sales-team-not-hitting-quota",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Your Sales Team Isn\\u2019t Hitting Quota. Here\\u2019s How to Diagnose It.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Sales Team Isn\\u2019t Hitting Quota. Here\\u2019s How to Diagnose It.",
    description: "Before you fire your reps or set new targets, answer five questions. The answers will tell you exactly what\\u2019s broken \\u2014 and what to fix first.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/sales-team-not-hitting-quota",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesTeamNotHittingQuotaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
