import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Interview a Fractional Sales Leader | Louie Bernstein",
  description:
    "Most founders hire a fractional sales leader after one good conversation. These are the five questions that separate real operators from consultants with new job titles.",
  keywords: [
    "how to interview a fractional sales leader",
    "fractional sales leader interview questions",
    "how to evaluate a fractional sales leader",
    "what to ask when hiring a fractional sales leader",
    "fractional sales leader hiring guide",
    "fractional sales leader red flags",
    "hiring fractional sales leader",
    "fractional sales leader questions to ask",
    "how to vet a fractional sales leader",
    "fractional VP of sales interview",
  ],
  openGraph: {
    title: "How to Interview a Fractional Sales Leader",
    description:
      "Five questions that tell you whether you are talking to a real operator or someone who added 'fractional' to their title when it became a trending search term.",
    type: "article",
    url: "https://louiebernstein.com/how-to-interview-a-fractional-sales-leader",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "https://louiebernstein.com/images/fractional-sales-leader-hero.png",
        width: 1920,
        height: 1080,
        alt: "How to Interview a Fractional Sales Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Interview a Fractional Sales Leader",
    description:
      "Five interview questions that reveal whether a fractional sales leader is a real operator or just a consultant with a new title.",
    images: ["https://louiebernstein.com/images/fractional-sales-leader-hero.png"],
  },
  alternates: {
    canonical: "https://louiebernstein.com/how-to-interview-a-fractional-sales-leader",
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
