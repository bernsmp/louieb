/**
 * Payload CMS API utilities
 * 
 * Fetches content from the Payload CMS for the frontend.
 */

import { cache } from 'react';

// Use the site's own API for Payload data
// In production, use relative URL; in dev, use localhost
const PAYLOAD_URL = process.env.NODE_ENV === 'production' 
  ? 'https://louiebernstein.com' 
  : 'http://localhost:3000';

// Enable CMS fetching - Payload is now configured!
const CMS_ENABLED = true;

interface SiteSettings {
  hero: {
    headline: string;
    tagline: string;
    description: string;
    videoId: string;
    ctaPrimary: {
      text: string;
      url: string;
    };
    ctaSecondary: {
      text: string;
      url: string;
    };
  };
  credentials: {
    primary: string;
    secondary: string;
  };
  valueProposition: {
    headline: string;
    subheadline: string;
    description: string;
    ctaText: string;
    ctaUrl: string;
  };
  about: {
    headline: string;
    headlineAccent: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    calloutText: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  social: {
    linkedin: string;
    youtube: string;
    calendly: string;
  };
  newsletter: {
    name: string;
    playlistId: string;
    subscribeUrl: string;
  };
  course: {
    playlistId: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    keywords: string;
  };
}

// Default values (fallback when CMS is unavailable)
const defaultSettings: SiteSettings = {
  hero: {
    headline: 'Fractional Sales Leader',
    tagline: 'Less Spend. More Sales.',
    description: "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
    videoId: 'fCVKpcpD8tA',
    ctaPrimary: {
      text: 'Learn How It Works',
      url: '#process',
    },
    ctaSecondary: {
      text: 'Schedule a Discussion',
      url: 'https://calendly.com/louiebernstein/30minutes',
    },
  },
  credentials: {
    primary: 'LinkedIn Top Voice',
    secondary: '50+ Years Sales Experience',
  },
  valueProposition: {
    headline: 'A Fractional Sales Leader for Founders & CEOs',
    subheadline: 'Running $1M–$10M in Revenue',
    description: 'Forget the old-school sales director playbook. At this stage, you need precision—not overhead...',
    ctaText: 'Schedule a Discussion',
    ctaUrl: 'https://calendly.com/louiebernstein/30minutes',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/sales-processes/',
    youtube: 'https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
    calendly: 'https://calendly.com/louiebernstein/30minutes',
  },
  newsletter: {
    name: 'The Sunday Starter',
    playlistId: 'PL7HfhnqHyzRmd7GWRKTBURlmcC7TsbdPz',
    subscribeUrl: 'https://louiebernstein.substack.com',
  },
  course: {
    playlistId: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
  },
  contact: {
    email: 'Louie@LouieBernstein.com',
    phone: '(404)808-5326',
  },
  about: {
    headline: 'Fractional Sales Leadership',
    headlineAccent: 'for $1M–$10M ARR Companies',
    paragraph1: 'With over 9 years of experience as a Fractional Sales Leader, I specialize in helping technical and operational founders of companies with $1M–$10M ARR build repeatable sales systems and transition from leading sales themselves to managing high-performing sales teams.',
    paragraph2: 'My focus is on delivering systematic frameworks tailored for the critical growth stage where founders must document sales processes, onboard their first sales reps, and scale effectively without becoming a bottleneck.',
    paragraph3: 'I bring extensive expertise in sales leadership, sales and marketing alignment, and sales team development. My mission is to empower founders to optimize their time and resources while building scalable sales teams capable of generating predictable revenue.',
    calloutText: 'With a proven approach, I collaborate with businesses to develop actionable sales pipelines, implement effective scorecards for hiring, and establish reliable sales processes that drive sustainable growth.',
    stat1Value: '9+',
    stat1Label: 'Years as Fractional Sales Leader',
    stat2Value: '$1M–$10M',
    stat2Label: 'ARR Companies Served',
    stat3Value: 'INC 500',
    stat3Label: 'Scaled from Zero',
  },
  seo: {
    siteTitle: 'Louie Bernstein - Fractional Sales Leader',
    siteDescription: 'LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems.',
    keywords: 'fractional sales leader, sales consulting, sales team optimization',
  },
};

/**
 * Fetch site settings from Payload CMS
 * Uses React cache for deduplication during SSR
 */
export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  // If CMS is disabled or no URL configured, use defaults
  if (!CMS_ENABLED || !PAYLOAD_URL) {
    return defaultSettings;
  }

  try {
    const response = await fetch(`${PAYLOAD_URL}/api/globals/site-settings`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.warn('Failed to fetch site settings, using defaults');
      return defaultSettings;
    }

    const data = await response.json();
    
    // Merge with defaults to ensure all fields exist
    return mergeSettings(defaultSettings, data);
  } catch (error) {
    console.warn('Error fetching site settings:', error);
    return defaultSettings;
  }
});

/**
 * Merge CMS data with default settings
 */
function mergeSettings(defaults: SiteSettings, data: Partial<SiteSettings>): SiteSettings {
  return {
    hero: { ...defaults.hero, ...data.hero },
    credentials: { ...defaults.credentials, ...data.credentials },
    valueProposition: { ...defaults.valueProposition, ...data.valueProposition },
    about: { ...defaults.about, ...data.about },
    social: { ...defaults.social, ...data.social },
    newsletter: { ...defaults.newsletter, ...data.newsletter },
    course: { ...defaults.course, ...data.course },
    contact: { ...defaults.contact, ...data.contact },
    seo: { ...defaults.seo, ...data.seo },
  };
}

/**
 * Get about section data
 */
export async function getAboutData() {
  const settings = await getSiteSettings();
  return settings.about;
}

/**
 * Get hero section data
 */
export async function getHeroData() {
  const settings = await getSiteSettings();
  return {
    ...settings.hero,
    credentials: settings.credentials,
  };
}

/**
 * Get value proposition data
 */
export async function getValuePropositionData() {
  const settings = await getSiteSettings();
  return settings.valueProposition;
}

/**
 * Get contact data
 */
export async function getContactData() {
  const settings = await getSiteSettings();
  return {
    ...settings.contact,
    social: settings.social,
  };
}

/**
 * Get newsletter data
 */
export async function getNewsletterData() {
  const settings = await getSiteSettings();
  return settings.newsletter;
}

/**
 * Get course data
 */
export async function getCourseData() {
  const settings = await getSiteSettings();
  return settings.course;
}
