import type { GlobalConfig } from 'payload'

const CMS_DEPLOY_WEBHOOK_URL =
  process.env.CMS_DEPLOY_WEBHOOK_URL ||
  process.env.SLACK_BOT_CMS_WEBHOOK_URL ||
  'https://louie-slack-bot.onrender.com/webhooks/cms-update'

// Revalidation endpoint URL (same site)
const REVALIDATE_URL = process.env.NODE_ENV === 'production'
  ? 'https://louiebernstein.com/api/revalidate'
  : 'http://localhost:3000/api/revalidate'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // 1. Trigger instant cache revalidation
        const revalidateSecret = process.env.REVALIDATE_SECRET
        if (revalidateSecret) {
          try {
            const revalidateResponse = await fetch(REVALIDATE_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-revalidate-secret': revalidateSecret,
              },
            })

            if (revalidateResponse.ok) {
              req.payload.logger?.info('[SiteSettings] Cache revalidation triggered successfully.')
            } else {
              req.payload.logger?.warn(
                `[SiteSettings] Cache revalidation failed: ${revalidateResponse.status}`
              )
            }
          } catch (error) {
            req.payload.logger?.warn(
              `[SiteSettings] Cache revalidation error: ${(error as Error)?.message}`
            )
          }
        }

        // 2. Call external webhook (Slack notification, etc.)
        if (!CMS_DEPLOY_WEBHOOK_URL) {
          return
        }

        try {
          const response = await fetch(CMS_DEPLOY_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              collection: 'site-settings',
              doc,
            }),
          })

          if (!response.ok) {
            req.payload.logger?.error(
              `[SiteSettings] Deploy webhook responded with ${response.status}: ${await response
                .text()
                .catch(() => 'no body')}`
            )
          } else {
            req.payload.logger?.info('[SiteSettings] Deploy webhook triggered successfully.')
          }
        } catch (error) {
          req.payload.logger?.error(
            `[SiteSettings] Failed to call deploy webhook: ${(error as Error)?.message}`
          )
        }
      },
    ],
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
    // About Section
    {
      name: 'about',
      type: 'group',
      label: 'About Section',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'Fractional Sales Leadership',
        },
        {
          name: 'headlineAccent',
          type: 'text',
          defaultValue: 'for $1M–$10M ARR Companies',
        },
        {
          name: 'paragraph1',
          type: 'textarea',
          label: 'First Paragraph',
          defaultValue: 'With over 9 years of experience as a Fractional Sales Leader, I specialize in helping technical and operational founders of companies with $1M–$10M ARR build repeatable sales systems and transition from leading sales themselves to managing high-performing sales teams.',
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          label: 'Second Paragraph',
          defaultValue: 'My focus is on delivering systematic frameworks tailored for the critical growth stage where founders must document sales processes, onboard their first sales reps, and scale effectively without becoming a bottleneck.',
        },
        {
          name: 'paragraph3',
          type: 'textarea',
          label: 'Third Paragraph',
          defaultValue: 'I bring extensive expertise in sales leadership, sales and marketing alignment, and sales team development. My mission is to empower founders to optimize their time and resources while building scalable sales teams capable of generating predictable revenue.',
        },
        {
          name: 'calloutText',
          type: 'textarea',
          label: 'Highlighted Callout Box',
          defaultValue: 'With a proven approach, I collaborate with businesses to develop actionable sales pipelines, implement effective scorecards for hiring, and establish reliable sales processes that drive sustainable growth.',
        },
        {
          name: 'stat1Value',
          type: 'text',
          label: 'Stat 1 - Value',
          defaultValue: '9+',
        },
        {
          name: 'stat1Label',
          type: 'text',
          label: 'Stat 1 - Label',
          defaultValue: 'Years as Fractional Sales Leader',
        },
        {
          name: 'stat2Value',
          type: 'text',
          label: 'Stat 2 - Value',
          defaultValue: '$1M–$10M',
        },
        {
          name: 'stat2Label',
          type: 'text',
          label: 'Stat 2 - Label',
          defaultValue: 'ARR Companies Served',
        },
        {
          name: 'stat3Value',
          type: 'text',
          label: 'Stat 3 - Value',
          defaultValue: 'INC 500',
        },
        {
          name: 'stat3Label',
          type: 'text',
          label: 'Stat 3 - Label',
          defaultValue: 'Scaled from Zero',
        },
      ],
    },
    // Services Section
    {
      name: 'services',
      type: 'group',
      label: 'Services Section',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'What I Offer',
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: 'Comprehensive sales leadership services designed to transform your team',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Service Items',
          minRows: 1,
          maxRows: 8,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'icon', type: 'text', admin: { description: 'Icon path (e.g., /icons/business-team.svg)' } },
            { name: 'highlight', type: 'checkbox', defaultValue: false },
          ],
        },
      ],
    },
    // Process Section
    {
      name: 'process',
      type: 'group',
      label: 'Process Section (How It Works)',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'How It Works',
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: 'A proven process that delivers measurable results',
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Process Steps',
          minRows: 1,
          maxRows: 6,
          fields: [
            { name: 'number', type: 'text', required: true, admin: { description: 'Step number (e.g., 01, 02)' } },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },
    // FAQ Section
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'Frequently Asked Questions',
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: 'Everything you need to know about fractional sales leadership',
        },
        {
          name: 'items',
          type: 'array',
          label: 'FAQ Items',
          minRows: 1,
          maxRows: 15,
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
      ],
    },
    // Awards Section
    {
      name: 'awards',
      type: 'group',
      label: 'Awards Section',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'Recognized Excellence',
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: 'Award-winning sales consulting and leadership',
        },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Awards Image URL',
          defaultValue: 'https://d1yei2z3i6k35z.cloudfront.net/1671832/64e3c2e5505e3_fourawards.png',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Louie Bernstein has received four prestigious awards for excellence in sales consulting and leadership.',
        },
      ],
    },
    // Testimonials Section (header only - items managed in Testimonials collection)
    {
      name: 'testimonialsSection',
      type: 'group',
      label: 'Testimonials Section Header',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'What Clients Say',
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: 'Real results from real businesses',
        },
      ],
    },
    // Footer
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        {
          name: 'tagline',
          type: 'text',
          defaultValue: 'Fractional Sales Leader',
        },
        {
          name: 'slogan',
          type: 'text',
          defaultValue: 'Less Spend. More Sales.',
        },
        {
          name: 'copyrightName',
          type: 'text',
          defaultValue: 'Louie Bernstein',
        },
      ],
    },
    // Videos Page
    {
      name: 'videosPage',
      type: 'group',
      label: 'Videos Page',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'Sales Videos',
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: 'The most popular sales training content, handpicked for you',
        },
        {
          name: 'playlistId',
          type: 'text',
          defaultValue: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
          admin: { description: 'Main YouTube playlist ID' },
        },
        {
          name: 'featuredVideos',
          type: 'array',
          label: 'Featured Videos',
          minRows: 1,
          maxRows: 8,
          fields: [
            { name: 'videoId', type: 'text', required: true, admin: { description: 'YouTube video ID' } },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
    // Newsletter Page
    {
      name: 'newsletterPage',
      type: 'group',
      label: 'Newsletter Page',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'The Sunday Starter',
        },
        {
          name: 'tagline',
          type: 'text',
          defaultValue: 'Delivered to Accelerate Your Success',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Every Sunday, get actionable sales insights, strategies, and tips delivered straight to your LinkedIn inbox. Join thousands of sales professionals who start their week right with The Sunday Starter.',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Subscribe on LinkedIn',
        },
        {
          name: 'benefitsHeadline',
          type: 'text',
          defaultValue: "What You'll Get",
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefit Cards',
          minRows: 1,
          maxRows: 6,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'icon', type: 'text' },
          ],
        },
        {
          name: 'finalCtaHeadline',
          type: 'text',
          defaultValue: 'Ready to Start Your Week Right?',
        },
        {
          name: 'finalCtaDescription',
          type: 'text',
          defaultValue: 'Join thousands of sales professionals who get The Sunday Starter every week',
        },
      ],
    },
    // Course Page
    {
      name: 'coursePage',
      type: 'group',
      label: 'Course Page',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: "The Founder's and CEO's Sales System",
        },
        {
          name: 'tagline',
          type: 'text',
          defaultValue: 'Build, optimize, and scale your sales team—without the full-time cost',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: "A complete 20-step system created by a Fractional Sales Leader who's been where you are. Decades of experience, distilled into actionable frameworks that work.",
        },
        {
          name: 'resultsBadge',
          type: 'text',
          defaultValue: '61% sales increase • 120+ hiring questions • 20-step system',
        },
        {
          name: 'modulesHeadline',
          type: 'text',
          defaultValue: 'What You Get With This Course',
        },
        {
          name: 'modulesSubheadline',
          type: 'text',
          defaultValue: 'A complete 20-step sales system with everything you need to build, optimize, and scale',
        },
        {
          name: 'modules',
          type: 'array',
          label: 'Course Modules',
          minRows: 1,
          maxRows: 20,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'benefit', type: 'textarea' },
            { name: 'icon', type: 'text' },
          ],
        },
        {
          name: 'previewHeadline',
          type: 'text',
          defaultValue: 'Preview the Course',
        },
        {
          name: 'previewVideos',
          type: 'array',
          label: 'Preview Videos',
          minRows: 1,
          maxRows: 10,
          fields: [
            { name: 'videoId', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
          ],
        },
        {
          name: 'resultsHeadline',
          type: 'text',
          defaultValue: 'Real Results From Real Businesses',
        },
        {
          name: 'results',
          type: 'array',
          label: 'Result Stats',
          minRows: 1,
          maxRows: 6,
          fields: [
            { name: 'metric', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
            { name: 'source', type: 'text' },
          ],
        },
        {
          name: 'caseStudyQuote',
          type: 'textarea',
          defaultValue: 'Louie helped us increase sales 61% year-over-year working on a part-time arrangement as a fractional sales manager.',
        },
        {
          name: 'caseStudyAttribution',
          type: 'text',
          defaultValue: 'Client Case Study',
        },
        {
          name: 'finalCtaHeadline',
          type: 'text',
          defaultValue: 'Start Building Your Sales System Today',
        },
        {
          name: 'finalCtaDescription',
          type: 'text',
          defaultValue: 'Get instant access to all 20 modules, templates, scripts, and resources',
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

