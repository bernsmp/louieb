import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'Fractional Sales Leader',
        },
        {
          name: 'tagline',
          type: 'text',
          defaultValue: 'Less Spend. More Sales.',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
        },
        {
          name: 'videoId',
          type: 'text',
          admin: {
            description: 'YouTube video ID for hero section',
          },
          defaultValue: 'fCVKpcpD8tA',
        },
        {
          name: 'ctaPrimary',
          type: 'group',
          fields: [
            { name: 'text', type: 'text', defaultValue: 'Learn How It Works' },
            { name: 'url', type: 'text', defaultValue: '#process' },
          ],
        },
        {
          name: 'ctaSecondary',
          type: 'group',
          fields: [
            { name: 'text', type: 'text', defaultValue: 'Schedule a Discussion' },
            { name: 'url', type: 'text', defaultValue: 'https://calendly.com/louiebernstein/30minutes' },
          ],
        },
      ],
    },
    // Social Links
    {
      name: 'social',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
          defaultValue: 'https://www.linkedin.com/in/louiebernstein/',
        },
        {
          name: 'youtube',
          type: 'text',
          defaultValue: 'https://www.youtube.com/@LouieBernstein',
        },
        {
          name: 'calendly',
          type: 'text',
          defaultValue: 'https://calendly.com/louiebernstein/30minutes',
        },
      ],
    },
    // Newsletter
    {
      name: 'newsletter',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          defaultValue: 'The Sunday Starter',
        },
        {
          name: 'playlistId',
          type: 'text',
          defaultValue: 'PL7HfhnqHyzRmd7GWRKTBURlmcC7TsbdPz',
          admin: {
            description: 'YouTube playlist ID for newsletter page',
          },
        },
        {
          name: 'subscribeUrl',
          type: 'text',
          defaultValue: 'https://www.linkedin.com/newsletters/the-sunday-starter-6914239256987131904/',
        },
      ],
    },
    // Course
    {
      name: 'course',
      type: 'group',
      fields: [
        {
          name: 'playlistId',
          type: 'text',
          defaultValue: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
          admin: {
            description: 'YouTube playlist ID for course page',
          },
        },
      ],
    },
    // Contact
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'email',
          type: 'text',
          defaultValue: 'Louie@LouieBernstein.com',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '(404) 808-5326',
        },
      ],
    },
    // Value Proposition Section
    {
      name: 'valueProposition',
      type: 'group',
      label: 'Value Proposition Section',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: "It's not how much you sell.",
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: "It's how much you take home.",
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: "Every dollar you spend on inefficient sales processes is a dollar you don't take home. Let's fix that.",
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: "Let's Get Going!",
        },
      ],
    },
    // Credentials/Badge
    {
      name: 'credentials',
      type: 'group',
      label: 'Credentials Badge',
      fields: [
        {
          name: 'primary',
          type: 'text',
          defaultValue: 'LinkedIn Top Voice',
        },
        {
          name: 'secondary',
          type: 'text',
          defaultValue: '50+ Years Sales Experience',
        },
      ],
    },
    // SEO
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'siteTitle',
          type: 'text',
          defaultValue: 'Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader',
        },
        {
          name: 'siteDescription',
          type: 'textarea',
          defaultValue: 'LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems and high-performing sales teams.',
        },
        {
          name: 'keywords',
          type: 'text',
          defaultValue: 'fractional sales leader, sales consulting, sales team optimization',
        },
      ],
    },
  ],
}

