// Payload CMS API utilities

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'

export interface SiteSettings {
  hero: {
    headline: string
    tagline: string
    description: string
    videoId: string
    ctaPrimary: { text: string; url: string }
    ctaSecondary: { text: string; url: string }
  }
  valueProposition: {
    headline: string
    subheadline: string
    description: string
    ctaText: string
  }
  credentials: {
    primary: string
    secondary: string
  }
  social: {
    linkedin: string
    youtube: string
    calendly: string
  }
  newsletter: {
    name: string
    playlistId: string
    subscribeUrl: string
  }
  course: {
    playlistId: string
  }
  contact: {
    email: string
    phone: string
  }
  seo: {
    siteTitle: string
    siteDescription: string
    keywords: string
  }
}

// Default values in case API is unavailable
const defaultSettings: SiteSettings = {
  hero: {
    headline: 'Fractional Sales Leader',
    tagline: 'Less Spend. More Sales.',
    description: "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
    videoId: 'fCVKpcpD8tA',
    ctaPrimary: { text: 'Learn How It Works', url: '#process' },
    ctaSecondary: { text: 'Schedule a Discussion', url: 'https://calendly.com/louiebernstein/30minutes' },
  },
  valueProposition: {
    headline: "It's not how much you sell.",
    subheadline: "It's how much you take home.",
    description: "Every dollar you spend on inefficient sales processes is a dollar you don't take home. Let's fix that.",
    ctaText: "Let's Get Going!",
  },
  credentials: {
    primary: 'LinkedIn Top Voice',
    secondary: '50+ Years Sales Experience',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/sales-processes/',
    youtube: 'https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
    calendly: 'https://calendly.com/louiebernstein/30minutes',
  },
  newsletter: {
    name: 'The Sunday Starter',
    playlistId: 'PL7HfhnqHyzRmd7GWRKTBURlmcC7TsbdPz',
    subscribeUrl: 'https://www.linkedin.com/newsletters/the-sunday-starter-6914239256987131904/',
  },
  course: {
    playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
  },
  contact: {
    email: 'Louie@LouieBernstein.com',
    phone: '(404) 808-5326',
  },
  seo: {
    siteTitle: 'Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader',
    siteDescription: 'LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems and high-performing sales teams.',
    keywords: 'fractional sales leader, sales consulting, sales team optimization',
  },
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/api/globals/site-settings`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    
    if (!res.ok) {
      console.warn('Failed to fetch site settings, using defaults')
      return defaultSettings
    }
    
    const data = await res.json()
    
    // Merge with defaults to ensure all fields exist
    return {
      hero: { ...defaultSettings.hero, ...data.hero },
      valueProposition: { ...defaultSettings.valueProposition, ...data.valueProposition },
      credentials: { ...defaultSettings.credentials, ...data.credentials },
      social: { ...defaultSettings.social, ...data.social },
      newsletter: { ...defaultSettings.newsletter, ...data.newsletter },
      course: { ...defaultSettings.course, ...data.course },
      contact: { ...defaultSettings.contact, ...data.contact },
      seo: { ...defaultSettings.seo, ...data.seo },
    }
  } catch (error) {
    console.warn('Error fetching site settings:', error)
    return defaultSettings
  }
}

