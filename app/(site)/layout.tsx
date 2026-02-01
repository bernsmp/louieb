import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "../globals.css";
import { FloatingNavWrapper } from "@/components/FloatingNavWrapper";
import { Footer } from "@/components/Footer";
import { getSiteSettings } from "@/lib/cms";

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

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
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
      </head>
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        <FloatingNavWrapper />
        {children}
        <Footer 
          tagline={settings.footer.tagline}
          slogan={settings.footer.slogan}
          copyrightName={settings.footer.copyrightName}
          email={settings.contact.email}
          phone={settings.contact.phone}
          linkedin={settings.social.linkedin}
          youtube={settings.social.youtube}
        />
      </body>
    </html>
  );
}

