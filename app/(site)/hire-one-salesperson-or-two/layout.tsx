import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Hire One Salesperson or Two? The Answer Might Surprise You | Louie Bernstein",
  description: "Most founders default to hiring one rep to \"test the waters.\" That instinct is wrong. Here's why two reps give you better data, lower risk, and faster results.",
  openGraph: {
    title: "Should You Hire One Salesperson or Two? The Answer Might Surprise You",
    description: "Most founders default to hiring one rep to \"test the waters.\" That instinct is wrong. Here's why two reps give you better data, lower risk, and faster results.",
    type: "article",
    url: "https://louiebernstein.com/hire-one-salesperson-or-two",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "Should You Hire One Salesperson or Two? The Answer Might Surprise You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Should You Hire One Salesperson or Two? The Answer Might Surprise You",
    description: "Most founders default to hiring one rep to \"test the waters.\" That instinct is wrong. Here's why two reps give you better data, lower risk, and faster results.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/hire-one-salesperson-or-two",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HireOneSalespersonOrTwoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
