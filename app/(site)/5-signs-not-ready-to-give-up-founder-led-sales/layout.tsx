import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Signs You\'re Not Ready to Give Up Founder-Led Sales | Louie Bernstein',
  description:
    '5 signs you\'re not ready to give up founder-led sales — and what to build before you do. A practical checklist for B2B founders at $1M to $10M ARR.',
  keywords: [
    '5 signs not ready to give up founder-led sales',
    'founder-led sales readiness',
    'when to stop founder-led sales',
    'founder-led sales transition signs',
    'is founder-led sales still working',
    'founder-led sales checklist',
    'how to know when to hire a salesperson',
    'founder still doing sales',
    'founder sales process readiness',
    'signs founder should stay in sales',
    'founder-led sales too early to exit',
    'fractional sales leader founder transition',
  ],
  openGraph: {
    title: '5 Signs You\'re Not Ready to Give Up Founder-Led Sales | Louie Bernstein',
    description:
      '5 signs you\'re not ready to give up founder-led sales — and what to build before you do. A practical checklist for B2B founders at $1M to $10M ARR.',
    type: 'article',
    url: 'https://louiebernstein.com/5-signs-not-ready-to-give-up-founder-led-sales',
    siteName: 'Louie Bernstein',
    locale: 'en_US',
    images: [
      {
        url: 'https://louiebernstein.com/images/fractional-sales-leader-hero.png',
        width: 1920,
        height: 1080,
        alt: '5 Signs You\'re Not Ready to Give Up Founder-Led Sales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Signs You\'re Not Ready to Give Up Founder-Led Sales',
    description:
      '5 signs you\'re not ready to give up founder-led sales — and what to build before you do.',
    images: ['https://louiebernstein.com/images/fractional-sales-leader-hero.png'],
  },
  alternates: {
    canonical: 'https://louiebernstein.com/5-signs-not-ready-to-give-up-founder-led-sales',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
}

export default function FiveSignsNotReadyFounderLedSalesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
