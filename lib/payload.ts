/**
 * Payload CMS API utilities
 * 
 * Fetches content from the Payload CMS for the frontend.
 */

import { cache } from 'react';

const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || '';

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
  // If no Payload URL configured, use defaults
  if (!PAYLOAD_URL) {
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
    return deepMerge(defaultSettings, data);
  } catch (error) {
    console.warn('Error fetching site settings:', error);
    return defaultSettings;
  }
});

/**
 * Deep merge two objects
 */
function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  
  for (const key in source) {
    const sourceValue = source[key];
    const targetValue = result[key];
    
    if (
      sourceValue !== null &&
      sourceValue !== undefined &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue)
    ) {
      result[key] = deepMerge(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>
      ) as T[typeof key];
    } else if (sourceValue !== null && sourceValue !== undefined) {
      result[key] = sourceValue as T[typeof key];
    }
  }
  
  return result;
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
