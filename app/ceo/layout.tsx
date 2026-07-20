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

export default function CeoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Note: FAQPage JSON-LD is emitted by the page component (app/ceo/page.tsx)
  // so it stays in sync with FAQ copy edited in the CMS.
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
