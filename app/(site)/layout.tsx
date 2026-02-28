import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { FloatingNavWrapper } from "@/components/FloatingNavWrapper";
import { Footer } from "@/components/Footer";
import { getSiteSettings, getSEOSettings } from "@/lib/cms";

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

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEOSettings()

  const defaultTitle = "Louie Bernstein - INC 500 Founder | Fractional Sales Leader for $1M–$10M ARR Companies"
  const defaultDescription = "Fractional Sales Leader for $1M–$10M ARR companies. INC 500 Founder with 9+ years helping technical and operational founders build repeatable sales systems — and stop being the bottleneck. Ready to break through? Let's talk."
  const defaultKeywords = "fractional sales leader, fractional sales leadership, sales consulting, sales team optimization, sales process consulting, sales training, $1M-$10M ARR, sales systems, sales team development"
  const defaultOgImage = "https://louiebernstein.com/logo/og-image.png"

  const title = seo.siteTitle || defaultTitle
  const description = seo.siteDescription || defaultDescription
  const keywords = seo.keywords || defaultKeywords
  const ogImage = seo.ogImageUrl || defaultOgImage

  return {
    title,
    description,
    keywords,
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
      title: seo.siteTitle || "Louie Bernstein - INC 500 Founder | Fractional Sales Leader",
      description: seo.siteDescription || "Fractional Sales Leader for $1M–$10M ARR companies. INC 500 Founder with 9+ years helping founders build repeatable sales systems and stop being the bottleneck.",
      url: "https://louiebernstein.com",
      siteName: "Louie Bernstein",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Louie Bernstein - Fractional Sales Leader",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.siteTitle || "Louie Bernstein - INC 500 Founder | Fractional Sales Leader",
      description: seo.siteDescription || "Fractional Sales Leader for $1M–$10M ARR companies. INC 500 Founder with 9+ years helping founders build repeatable sales systems and stop being the bottleneck.",
      images: [ogImage],
    },
  }
}

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SF7HLC3FGT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SF7HLC3FGT');
        `}
      </Script>
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

