import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { FloatingNavWrapper } from "@/components/FloatingNavWrapper";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader for $1M–$10M ARR Companies",
  description:
    "LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems and high-performing sales teams. I've scaled from zero to INC 500. Ready to break through? Let's talk.",
  keywords:
    "fractional sales leader, fractional sales leadership, sales consulting, sales team optimization, sales process consulting, sales training, $1M-$10M ARR, sales systems, sales team development",
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader",
    description:
      "LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems. I've scaled from zero to INC 500.",
    url: "https://louiebernstein.com",
    siteName: "Louie Bernstein",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://louiebernstein.com/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Louie Bernstein - Fractional Sales Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader",
    description:
      "LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems. I've scaled from zero to INC 500.",
    images: ["https://louiebernstein.com/logo/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Louie Bernstein",
    url: "https://louiebernstein.com",
    description:
      "Louie Bernstein provides fractional sales leadership consulting to organize, optimize and train sales teams. Less spend, more sales.",
    email: "Louie@LouieBernstein.com",
    telephone: "(404)808-5326",
    industry: "Sales Consulting",
    sameAs: [
      "https://www.linkedin.com/in/sales-processes/",
      "https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fractional Sales Leadership",
    description:
      "Louie Bernstein provides fractional sales leadership and consulting services to organize, optimize, and train sales teams. He helps drive sales results for clients.",
    serviceType: "Sales consulting",
    provider: {
      "@type": "Person",
      name: "Louie Bernstein",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is fractional sales leadership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fractional sales leadership is an outsourced service where an experienced sales leader works part-time with a company to organize, optimize, and train their sales team.",
        },
      },
      {
        "@type": "Question",
        name: "How does fractional sales leadership work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A fractional sales leader integrates with your existing sales team, assessing current processes, identifying areas for improvement, and implementing strategies to boost sales performance. They provide guidance, training, and support on a part-time basis.",
        },
      },
      {
        "@type": "Question",
        name: "Who is fractional sales leadership for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fractional sales leadership is ideal for small to medium-sized businesses that want to improve their sales processes and results without the cost of hiring a full-time sales executive.",
        },
      },
      {
        "@type": "Question",
        name: "How much does fractional sales leadership cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing for fractional sales leadership varies depending on the scope of the engagement and the specific needs of the client. Contact Louie Bernstein for a customized quote.",
        },
      },
      {
        "@type": "Question",
        name: "What is the time commitment for fractional sales leadership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The time commitment is flexible and can be adapted to the client's needs. Engagements typically range from a few months to a year or more, with the fractional sales leader working on a part-time basis.",
        },
      },
      {
        "@type": "Question",
        name: "What results can I expect from fractional sales leadership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients can expect improved sales processes, increased team efficiency, and ultimately, higher sales revenue. Past clients have reported significant improvements in their sales performance after working with Louie Bernstein.",
        },
      },
      {
        "@type": "Question",
        name: "What is the process for working with a fractional sales leader?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The process typically involves an initial consultation to assess the client's current sales situation and goals, followed by the development of a customized strategy. The fractional sales leader then works with the team to implement the strategy, provide training, and monitor progress.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        <FloatingNavWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
