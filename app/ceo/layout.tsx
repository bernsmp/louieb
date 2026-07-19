import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://louiebernstein.com"),
  title: "The Founder's Corner™ | Build a Company That Grows Without You",
  description:
    "Still the real sales department in your company? In 12 weeks, build a sales system your team can run. One hour a week with a 50-year sales leader. Book a free discovery call.",
  alternates: {
    canonical: "https://louiebernstein.com/ceo",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "The Founder's Corner™ | Build a Company That Grows Without You",
    description:
      "Still the real sales department in your company? In 12 weeks, build a sales system your team can run. One hour a week with a 50-year sales leader.",
    url: "https://louiebernstein.com/ceo",
    siteName: "Louie Bernstein",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/founders-corner-ceo.png",
        width: 1200,
        height: 630,
        alt: "The Founder's Corner™ — Build a Company That Grows Without You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founder's Corner™ | Build a Company That Grows Without You",
    description:
      "Still the real sales department in your company? In 12 weeks, build a sales system your team can run. One hour a week with a 50-year sales leader.",
    images: ["/og/founders-corner-ceo.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from hiring a VP of Sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A VP is a six-figure bet on one person, and most do not last two years. This builds the system first, so any rep can run it, at a fraction of the cost. When you are ready to hire, you hire into something that works.",
      },
    },
    {
      "@type": "Question",
      name: "I am not at $1M yet. Can this still help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Earlier-stage founders use this to build the right habits before the wrong ones set in. We start where you are.",
      },
    },
    {
      "@type": "Question",
      name: "How much of my time does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One hour a week on our call, plus the work we agree on between sessions. It is built to give you time back, not take it.",
      },
    },
    {
      "@type": "Question",
      name: "What happens on the call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We look at where your sales stand, name the one thing keeping sales stuck on you, and decide together if this is a fit. No pitch. If it is not right, I will tell you.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first 12 weeks build the foundation, so I ask for that commitment. After that it is month to month.",
      },
    },
    {
      "@type": "Question",
      name: "What if I want you more hands-on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask about my full Fractional Sales Leadership Program, where I build it with you week to week.",
      },
    },
  ],
};

export default function CeoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
