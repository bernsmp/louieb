import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Do I Design a Good Sales Comp Plan? | Louie Bernstein",
  description:
    "The 5 components of a good B2B sales compensation plan — base-to-variable split, quota math, trigger events, accelerators, and non-cash levers. Built for $1M–$10M ARR founders who need a plan that motivates reps and protects margin.",
  keywords: [
    "how to design a sales comp plan",
    "sales compensation plan design",
    "B2B sales comp plan",
    "sales comp plan that motivates reps",
    "base to variable split sales",
    "sales rep OTE",
    "sales quota and comp plan",
    "sales accelerators and decelerators",
    "B2B sales commission structure",
    "sales compensation for founders",
    "sales compensation $1M $10M ARR",
    "fractional sales leadership comp plan",
  ],
  openGraph: {
    title:
      "How Do I Design a Good Sales Comp Plan?",
    description:
      "How to put together a sales comp plan that motivates your sales team — base, variable, quota, trigger events, and accelerators. Built for $1M–$10M ARR founders.",
    type: "article",
    url: "https://louiebernstein.com/how-do-i-design-a-good-sales-comp-plan",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How Do I Design a Good Sales Comp Plan?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Do I Design a Good Sales Comp Plan?",
    description:
      "How to put together a sales comp plan that motivates your sales team. Base, variable, quota, trigger, and accelerators — built for $1M–$10M ARR founders.",
    images: [
      "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
    ],
  },
  alternates: {
    canonical:
      "https://louiebernstein.com/how-do-i-design-a-good-sales-comp-plan",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SalesCompPlanDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
