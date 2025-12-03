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
    // ==========================================
    // SECTION 1: HOMEPAGE
    // All content that appears on the homepage
    // ==========================================
    {
      type: 'collapsible',
      label: 'Homepage',
      admin: {
        initCollapsed: true,
        description: 'All content sections that appear on the main landing page',
      },
      fields: [
        // Hero Section
        {
          type: 'collapsible',
          label: 'Hero Section',
          admin: {
            initCollapsed: true,
            description: 'The main banner at the top of the homepage',
          },
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'headline',
                  type: 'text',
                  label: 'Main Headline',
                  admin: {
                    description: 'Large text at the top (e.g., "Fractional Sales Leader")',
                  },
                  defaultValue: 'Fractional Sales Leader',
                },
                {
                  name: 'tagline',
                  type: 'text',
                  label: 'Tagline',
                  admin: {
                    description: 'Short catchy phrase below headline',
                  },
                  defaultValue: 'Less Spend. More Sales.',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                  admin: {
                    description: 'Longer paragraph explaining your value proposition',
                  },
                  defaultValue: "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
                },
                {
                  name: 'videoId',
                  type: 'text',
                  label: 'YouTube Video ID',
                  admin: {
                    description: 'The ID from YouTube URL (e.g., "fCVKpcpD8tA" from youtube.com/watch?v=fCVKpcpD8tA)',
                  },
                  defaultValue: 'fCVKpcpD8tA',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'ctaPrimary',
                      type: 'group',
                      label: 'Primary Button',
                      admin: { width: '50%' },
                      fields: [
                        { name: 'text', type: 'text', label: 'Button Text', defaultValue: 'Learn How It Works' },
                        { name: 'url', type: 'text', label: 'Button URL', defaultValue: '#process' },
                      ],
                    },
                    {
                      name: 'ctaSecondary',
                      type: 'group',
                      label: 'Secondary Button',
                      admin: { width: '50%' },
                      fields: [
                        { name: 'text', type: 'text', label: 'Button Text', defaultValue: 'Schedule a Discussion' },
                        { name: 'url', type: 'text', label: 'Button URL', defaultValue: 'https://calendly.com/louiebernstein/30minutes' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Credentials Badge
        {
          type: 'collapsible',
          label: 'Credentials Badge',
          admin: {
            initCollapsed: true,
            description: 'The badge shown near the hero (LinkedIn Top Voice, etc.)',
          },
          fields: [
            {
              name: 'credentials',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'primary',
                  type: 'text',
                  label: 'Primary Credential',
                  admin: { description: 'Main credential (e.g., "LinkedIn Top Voice")' },
                  defaultValue: 'LinkedIn Top Voice',
                },
                {
                  name: 'secondary',
                  type: 'text',
                  label: 'Secondary Credential',
                  admin: { description: 'Supporting credential' },
                  defaultValue: '50+ Years Sales Experience',
                },
              ],
            },
          ],
        },
        // About Section
        {
          type: 'collapsible',
          label: 'About Section',
          admin: {
            initCollapsed: true,
            description: 'The "About Louie" section on the homepage',
          },
          fields: [
            {
              name: 'about',
              type: 'group',
              label: false,
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'headline',
                      type: 'text',
                      label: 'Headline',
                      admin: { width: '50%' },
                      defaultValue: 'Fractional Sales Leadership',
                    },
                    {
                      name: 'headlineAccent',
                      type: 'text',
                      label: 'Headline Accent',
                      admin: { width: '50%', description: 'Colored text after headline' },
                      defaultValue: 'for $1M–$10M ARR Companies',
                    },
                  ],
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
                  label: 'Callout Box Text',
                  admin: { description: 'Highlighted text in the callout box' },
                  defaultValue: 'With a proven approach, I collaborate with businesses to develop actionable sales pipelines, implement effective scorecards for hiring, and establish reliable sales processes that drive sustainable growth.',
                },
                {
                  type: 'collapsible',
                  label: 'Statistics',
                  admin: {
                    initCollapsed: true,
                    description: 'The 3 stat badges in the About section',
                  },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'stat1Value', type: 'text', label: 'Stat 1 Value', defaultValue: '9+', admin: { width: '50%' } },
                        { name: 'stat1Label', type: 'text', label: 'Stat 1 Label', defaultValue: 'Years as Fractional Sales Leader', admin: { width: '50%' } },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        { name: 'stat2Value', type: 'text', label: 'Stat 2 Value', defaultValue: '$1M–$10M', admin: { width: '50%' } },
                        { name: 'stat2Label', type: 'text', label: 'Stat 2 Label', defaultValue: 'ARR Companies Served', admin: { width: '50%' } },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        { name: 'stat3Value', type: 'text', label: 'Stat 3 Value', defaultValue: 'INC 500', admin: { width: '50%' } },
                        { name: 'stat3Label', type: 'text', label: 'Stat 3 Label', defaultValue: 'Scaled from Zero', admin: { width: '50%' } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Value Proposition Section
        {
          type: 'collapsible',
          label: 'Value Proposition Section',
          admin: {
            initCollapsed: true,
            description: 'The "It\'s not how much you sell" section',
          },
          fields: [
            {
              name: 'valueProposition',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Headline', defaultValue: "It's not how much you sell." },
                { name: 'subheadline', type: 'text', label: 'Subheadline', defaultValue: "It's how much you take home." },
                { name: 'description', type: 'textarea', label: 'Description', defaultValue: "Every dollar you spend on inefficient sales processes is a dollar you don't take home. Let's fix that." },
                { name: 'ctaText', type: 'text', label: 'Button Text', defaultValue: "Let's Get Going!" },
              ],
            },
          ],
        },
        // Fractional Sales Leader Section
        {
          type: 'collapsible',
          label: 'Fractional Sales Leader Section',
          admin: {
            initCollapsed: true,
            description: 'The marketing section targeting founders stuck in sales',
          },
          fields: [
            {
              name: 'fractionalSalesLeader',
              type: 'group',
              label: false,
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'headline',
                      type: 'text',
                      label: 'Headline',
                      admin: { width: '50%' },
                      defaultValue: 'Fractional Sales Leader for the',
                    },
                    {
                      name: 'headlineAccent',
                      type: 'text',
                      label: 'Headline Accent (colored)',
                      admin: { width: '50%' },
                      defaultValue: 'Founder Trapped in Sales',
                    },
                  ],
                },
                {
                  name: 'hook',
                  type: 'text',
                  label: 'Hook Line',
                  admin: { description: 'Bold text below the headline' },
                  defaultValue: "You built this. From nothing. Now you're stuck.",
                },
                {
                  name: 'paragraph1',
                  type: 'textarea',
                  label: 'Paragraph 1',
                  admin: { description: 'The pain point paragraph about $1M-$10M trap' },
                  defaultValue: "That brutal climb from $1M to $10M in revenue? It's a trap. You know you're the bottleneck, the one still running sales calls, but the thought of a $250k+ VP of Sales gamble makes your stomach churn. And those big consulting firms with their \"proprietary systems\"? They've never felt the grind of scaling from zero. They don't get it.",
                },
                {
                  name: 'paragraph2',
                  type: 'text',
                  label: 'Paragraph 2 (Short)',
                  admin: { description: 'The short emphatic response' },
                  defaultValue: 'I do.',
                },
                {
                  name: 'paragraph3',
                  type: 'textarea',
                  label: 'Paragraph 3',
                  admin: { description: 'What a Fractional Sales Leader is' },
                  defaultValue: "A Fractional Sales Leader isn't just another line item on your P&L. It's your path to freedom. It's for the technical or operational founder who needs more than just a manager; you need a partner who has walked this exact path and scaled a company from the ground up to the INC 500.",
                },
                {
                  name: 'paragraph4',
                  type: 'textarea',
                  label: 'Paragraph 4',
                  admin: { description: 'The value proposition' },
                  defaultValue: "Forget the corporate jargon. This is about building a repeatable sales machine tailored for your business, so you can transition from being the Chief Salesperson back to being the CEO. We'll build your sales playbook, coach your team, and implement a pipeline you can actually trust.",
                },
                {
                  name: 'calloutText',
                  type: 'textarea',
                  label: 'Callout Box Text',
                  admin: { description: 'The highlighted text in the callout box' },
                  defaultValue: "Stop letting sales management steal your time and kill your growth. Let's build the system that frees you.",
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'ctaText',
                      type: 'text',
                      label: 'CTA Button Text',
                      admin: { width: '50%' },
                      defaultValue: "Let's Talk",
                    },
                    {
                      name: 'ctaUrl',
                      type: 'text',
                      label: 'CTA Button URL',
                      admin: { width: '50%' },
                      defaultValue: 'https://calendly.com/louiebernstein/30minutes',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Services Section
        {
          type: 'collapsible',
          label: 'Services Section',
          admin: {
            initCollapsed: true,
            description: 'The "What I Offer" section with service cards',
          },
          fields: [
            {
              name: 'services',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Headline', defaultValue: 'What I Offer' },
                { name: 'subheadline', type: 'text', label: 'Subheadline', defaultValue: 'Comprehensive sales leadership services designed to transform your team' },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Service Items',
                  admin: {
                    description: 'Add up to 8 services',
                    initCollapsed: true,
                  },
                  minRows: 1,
                  maxRows: 8,
                  fields: [
                    { name: 'title', type: 'text', label: 'Service Title', required: true },
                    { name: 'description', type: 'textarea', label: 'Description', required: true },
                    { name: 'icon', type: 'text', label: 'Icon Path', admin: { description: 'Path to icon (e.g., /icons/business-team.svg)' } },
                    { name: 'highlight', type: 'checkbox', label: 'Highlight this service?', defaultValue: false, admin: { description: 'Highlighted services get special styling' } },
                  ],
                },
              ],
            },
          ],
        },
        // Process Section
        {
          type: 'collapsible',
          label: 'Process Section (How It Works)',
          admin: {
            initCollapsed: true,
            description: 'The step-by-step process section',
          },
          fields: [
            {
              name: 'process',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Headline', defaultValue: 'How It Works' },
                { name: 'subheadline', type: 'text', label: 'Subheadline', defaultValue: 'A proven process that delivers measurable results' },
                {
                  name: 'steps',
                  type: 'array',
                  label: 'Process Steps',
                  admin: {
                    description: 'Add up to 6 steps',
                    initCollapsed: true,
                  },
                  minRows: 1,
                  maxRows: 6,
                  fields: [
                    { name: 'number', type: 'text', label: 'Step Number', required: true, admin: { description: 'e.g., "01", "02"' } },
                    { name: 'title', type: 'text', label: 'Step Title', required: true },
                    { name: 'description', type: 'textarea', label: 'Description', required: true },
                  ],
                },
              ],
            },
          ],
        },
        // FAQ Section
        {
          type: 'collapsible',
          label: 'FAQ Section',
          admin: {
            initCollapsed: true,
            description: 'Frequently Asked Questions',
          },
          fields: [
            {
              name: 'faq',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Headline', defaultValue: 'Frequently Asked Questions' },
                { name: 'subheadline', type: 'text', label: 'Subheadline', defaultValue: 'Everything you need to know about fractional sales leadership' },
                {
                  name: 'items',
                  type: 'array',
                  label: 'FAQ Items',
                  admin: {
                    description: 'Add up to 15 questions',
                    initCollapsed: true,
                  },
                  minRows: 1,
                  maxRows: 15,
                  fields: [
                    { name: 'question', type: 'text', label: 'Question', required: true },
                    { name: 'answer', type: 'textarea', label: 'Answer', required: true },
                  ],
                },
              ],
            },
          ],
        },
        // Testimonials Section Header
        {
          type: 'collapsible',
          label: 'Testimonials Section Header',
          admin: {
            initCollapsed: true,
            description: 'Header text only - testimonials are managed in the Testimonials collection',
          },
          fields: [
            {
              name: 'testimonialsSection',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Headline', defaultValue: 'What Clients Say' },
                { name: 'subheadline', type: 'text', label: 'Subheadline', defaultValue: 'Real results from real businesses' },
              ],
            },
          ],
        },
        // Awards Section
        {
          type: 'collapsible',
          label: 'Awards Section',
          admin: {
            initCollapsed: true,
            description: 'The awards/recognition section',
          },
          fields: [
            {
              name: 'awards',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Headline', defaultValue: 'Recognized Excellence' },
                { name: 'subheadline', type: 'text', label: 'Subheadline', defaultValue: 'Award-winning sales consulting and leadership' },
                {
                  name: 'imageUrl',
                  type: 'text',
                  label: 'Awards Image URL',
                  admin: { description: 'URL to the awards image' },
                  defaultValue: 'https://d1yei2z3i6k35z.cloudfront.net/1671832/64e3c2e5505e3_fourawards.png',
                },
                { name: 'description', type: 'textarea', label: 'Description', defaultValue: 'Louie Bernstein has received four prestigious awards for excellence in sales consulting and leadership.' },
              ],
            },
          ],
        },
        // Contact Section
        {
          type: 'collapsible',
          label: 'Contact Section',
          admin: {
            initCollapsed: true,
            description: 'Labels and text for the Contact section on the homepage',
          },
          fields: [
            {
              name: 'contactSection',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Section Headline', defaultValue: "Let's Talk" },
                { name: 'description', type: 'text', label: 'Section Description', defaultValue: 'Ready to transform your sales team? Get in touch today.' },
                { name: 'emailLabel', type: 'text', label: 'Email Card Label', defaultValue: 'Email' },
                { name: 'phoneLabel', type: 'text', label: 'Phone Card Label', defaultValue: 'Phone' },
                { name: 'ctaButtonText', type: 'text', label: 'CTA Button Text', defaultValue: 'Schedule a 30-Minute Call' },
              ],
            },
          ],
        },
      ],
    },

    // ==========================================
    // SECTION 2: VIDEOS PAGE
    // ==========================================
    {
      type: 'collapsible',
      label: 'Videos Page (/videos)',
      admin: {
        initCollapsed: true,
        description: 'Content for the Videos page',
      },
      fields: [
        {
          name: 'videosPage',
          type: 'group',
          label: false,
          fields: [
            { name: 'headline', type: 'text', label: 'Page Headline', defaultValue: 'Sales Videos' },
            { name: 'subheadline', type: 'text', label: 'Page Subheadline', defaultValue: 'The most popular sales training content, handpicked for you' },
            {
              name: 'playlistId',
              type: 'text',
              label: 'YouTube Playlist ID',
              admin: { description: 'The playlist ID for the full playlist embed' },
              defaultValue: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl',
            },
            {
              name: 'featuredVideos',
              type: 'array',
              label: 'Featured Videos',
              admin: {
                description: 'The highlighted videos shown at the top',
                initCollapsed: true,
              },
              minRows: 1,
              maxRows: 8,
              fields: [
                { name: 'videoId', type: 'text', label: 'YouTube Video ID', required: true, admin: { description: 'The ID from the YouTube URL' } },
                { name: 'title', type: 'text', label: 'Video Title', required: true },
                { name: 'description', type: 'textarea', label: 'Description' },
              ],
            },
            { name: 'featuredShortsHeadline', type: 'text', label: 'Featured Shorts Section Headline', defaultValue: 'Featured Shorts' },
            { name: 'playlistHeadline', type: 'text', label: 'Playlist Section Headline', defaultValue: 'Complete Sales Leadership Playlist' },
            { name: 'watchOnYoutubeText', type: 'text', label: 'Watch on YouTube Link Text', defaultValue: 'Watch on YouTube →' },
            { name: 'watchMoreButtonText', type: 'text', label: 'Watch More Button Text', defaultValue: 'Watch More Videos on YouTube' },
          ],
        },
      ],
    },

    // ==========================================
    // SECTION 3: NEWSLETTER PAGE
    // ==========================================
    {
      type: 'collapsible',
      label: 'Newsletter Page (/newsletter)',
      admin: {
        initCollapsed: true,
        description: 'Content for the Newsletter page',
      },
      fields: [
        {
          name: 'newsletterPage',
          type: 'group',
          label: false,
          fields: [
            { name: 'headline', type: 'text', label: 'Page Headline', defaultValue: 'The Sunday Starter' },
            { name: 'tagline', type: 'text', label: 'Tagline', defaultValue: 'Delivered to Accelerate Your Success' },
            { name: 'description', type: 'textarea', label: 'Description', defaultValue: 'Every Sunday, get actionable sales insights, strategies, and tips delivered straight to your LinkedIn inbox. Join thousands of sales professionals who start their week right with The Sunday Starter.' },
            { name: 'ctaText', type: 'text', label: 'CTA Button Text', defaultValue: 'Subscribe on LinkedIn' },
            { name: 'benefitsHeadline', type: 'text', label: 'Benefits Section Headline', defaultValue: "What You'll Get" },
            {
              name: 'benefits',
              type: 'array',
              label: 'Benefit Cards',
              admin: { initCollapsed: true },
              minRows: 1,
              maxRows: 6,
              fields: [
                { name: 'title', type: 'text', label: 'Title', required: true },
                { name: 'description', type: 'textarea', label: 'Description', required: true },
                { name: 'icon', type: 'text', label: 'Icon Path' },
              ],
            },
            { name: 'finalCtaHeadline', type: 'text', label: 'Final CTA Headline', defaultValue: 'Ready to Start Your Week Right?' },
            { name: 'finalCtaDescription', type: 'text', label: 'Final CTA Description', defaultValue: 'Join thousands of sales professionals who get The Sunday Starter every week' },
            { name: 'featuredContentHeadline', type: 'text', label: 'Featured Content Section Headline', defaultValue: 'Featured Newsletter Content' },
            { name: 'featuredContentDescription', type: 'text', label: 'Featured Content Description', defaultValue: 'Watch exclusive videos and content from The Sunday Starter' },
            { name: 'finalCtaButtonText', type: 'text', label: 'Final CTA Button Text', defaultValue: 'Subscribe Now' },
          ],
        },
      ],
    },

    // ==========================================
    // SECTION 4: COURSE PAGE
    // ==========================================
    {
      type: 'collapsible',
      label: 'Course Page (/course)',
      admin: {
        initCollapsed: true,
        description: 'Content for the Course page',
      },
      fields: [
        {
          name: 'coursePage',
          type: 'group',
          label: false,
          fields: [
            { name: 'headline', type: 'text', label: 'Page Headline', defaultValue: "The Founder's and CEO's Sales System" },
            { name: 'tagline', type: 'text', label: 'Tagline', defaultValue: 'Build, optimize, and scale your sales team—without the full-time cost' },
            { name: 'description', type: 'textarea', label: 'Description', defaultValue: "A complete 20-step system created by a Fractional Sales Leader who's been where you are. Decades of experience, distilled into actionable frameworks that work." },
            { name: 'resultsBadge', type: 'text', label: 'Results Badge Text', defaultValue: '61% sales increase • 120+ hiring questions • 20-step system' },
            {
              type: 'collapsible',
              label: 'Course Modules',
              admin: { initCollapsed: true },
              fields: [
                { name: 'modulesHeadline', type: 'text', label: 'Modules Section Headline', defaultValue: 'What You Get With This Course' },
                { name: 'modulesSubheadline', type: 'text', label: 'Modules Section Subheadline', defaultValue: 'A complete 20-step sales system with everything you need to build, optimize, and scale' },
                {
                  name: 'modules',
                  type: 'array',
                  label: 'Course Modules',
                  minRows: 1,
                  maxRows: 20,
                  fields: [
                    { name: 'title', type: 'text', label: 'Module Title', required: true },
                    { name: 'description', type: 'textarea', label: 'Description', required: true },
                    { name: 'benefit', type: 'textarea', label: 'Benefit' },
                    { name: 'icon', type: 'text', label: 'Icon Path' },
                  ],
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Preview Videos',
              admin: { initCollapsed: true },
              fields: [
                { name: 'previewHeadline', type: 'text', label: 'Preview Section Headline', defaultValue: 'Preview the Course' },
                {
                  name: 'previewVideos',
                  type: 'array',
                  label: 'Preview Videos',
                  minRows: 1,
                  maxRows: 10,
                  fields: [
                    { name: 'videoId', type: 'text', label: 'YouTube Video ID', required: true },
                    { name: 'title', type: 'text', label: 'Video Title', required: true },
                    { name: 'description', type: 'textarea', label: 'Description' },
                  ],
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Results Section',
              admin: { initCollapsed: true },
              fields: [
                { name: 'resultsHeadline', type: 'text', label: 'Results Section Headline', defaultValue: 'Real Results From Real Businesses' },
                {
                  name: 'results',
                  type: 'array',
                  label: 'Result Stats',
                  minRows: 1,
                  maxRows: 6,
                  fields: [
                    { name: 'metric', type: 'text', label: 'Metric', required: true },
                    { name: 'description', type: 'text', label: 'Description', required: true },
                    { name: 'source', type: 'text', label: 'Source' },
                  ],
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Case Study & CTA',
              admin: { initCollapsed: true },
              fields: [
                { name: 'caseStudyQuote', type: 'textarea', label: 'Case Study Quote', defaultValue: 'Louie helped us increase sales 61% year-over-year working on a part-time arrangement as a fractional sales manager.' },
                { name: 'caseStudyAttribution', type: 'text', label: 'Attribution', defaultValue: 'Client Case Study' },
                { name: 'finalCtaHeadline', type: 'text', label: 'Final CTA Headline', defaultValue: 'Start Building Your Sales System Today' },
                { name: 'finalCtaDescription', type: 'text', label: 'Final CTA Description', defaultValue: 'Get instant access to all 20 modules, templates, scripts, and resources' },
              ],
            },
          ],
        },
      ],
    },

    // ==========================================
    // SECTION 5: TOOLS PAGES
    // ==========================================
    {
      type: 'collapsible',
      label: 'Tools Pages (/tools)',
      admin: {
        initCollapsed: true,
        description: 'Content for Tools landing page and individual tools',
      },
      fields: [
        // Tools Landing Page
        {
          type: 'collapsible',
          label: 'Tools Landing Page',
          admin: {
            initCollapsed: true,
            description: 'The main /tools page',
          },
          fields: [
            {
              name: 'toolsPage',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Page Headline', defaultValue: 'Tools' },
                { name: 'description', type: 'text', label: 'Page Description', defaultValue: 'Free tools to help you make smarter sales decisions' },
                {
                  name: 'tools',
                  type: 'array',
                  label: 'Tools',
                  admin: {
                    description: 'List of available tools',
                    initCollapsed: true,
                  },
                  minRows: 1,
                  maxRows: 10,
                  fields: [
                    { name: 'name', type: 'text', label: 'Tool Name', required: true },
                    { name: 'description', type: 'textarea', label: 'Description', required: true },
                    { name: 'href', type: 'text', label: 'Link URL', required: true, admin: { description: 'e.g., /tools/roi-calculator' } },
                    { name: 'icon', type: 'text', label: 'Icon Name', admin: { description: 'Lucide icon name (e.g., Calculator, BarChart)' } },
                  ],
                },
              ],
            },
          ],
        },
        // ROI Calculator Page
        {
          type: 'collapsible',
          label: 'ROI Calculator Page',
          admin: {
            initCollapsed: true,
            description: 'The /tools/roi-calculator page',
          },
          fields: [
            {
              name: 'roiCalculatorPage',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', label: 'Page Headline', defaultValue: 'Fractional Sales ROI Calculator' },
                { name: 'subheadline', type: 'text', label: 'Page Subheadline', defaultValue: 'You be the judge if a Fractional Sales Leader makes financial sense' },
              ],
            },
          ],
        },
      ],
    },

    // ==========================================
    // SECTION 6: SITE SETTINGS
    // ==========================================
    {
      type: 'collapsible',
      label: 'Site Settings',
      admin: {
        initCollapsed: true,
        description: 'Global settings: social links, contact info, footer, and SEO',
      },
      fields: [
        // Social Links
        {
          type: 'collapsible',
          label: 'Social Links',
          admin: {
            initCollapsed: true,
            description: 'Links to social media profiles',
          },
          fields: [
            {
              name: 'social',
              type: 'group',
              label: false,
              fields: [
                { name: 'linkedin', type: 'text', label: 'LinkedIn URL', defaultValue: 'https://www.linkedin.com/in/louiebernstein/' },
                { name: 'youtube', type: 'text', label: 'YouTube URL', defaultValue: 'https://www.youtube.com/@LouieBernstein' },
                { name: 'calendly', type: 'text', label: 'Calendly URL', defaultValue: 'https://calendly.com/louiebernstein/30minutes' },
              ],
            },
          ],
        },
        // Contact Info
        {
          type: 'collapsible',
          label: 'Contact Information',
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'contact',
              type: 'group',
              label: false,
              fields: [
                { name: 'email', type: 'text', label: 'Email Address', defaultValue: 'Louie@LouieBernstein.com' },
                { name: 'phone', type: 'text', label: 'Phone Number', defaultValue: '(404) 808-5326' },
              ],
            },
          ],
        },
        // Newsletter Settings
        {
          type: 'collapsible',
          label: 'Newsletter Settings',
          admin: {
            initCollapsed: true,
            description: 'General newsletter configuration',
          },
          fields: [
            {
              name: 'newsletter',
              type: 'group',
              label: false,
              fields: [
                { name: 'name', type: 'text', label: 'Newsletter Name', defaultValue: 'The Sunday Starter' },
                { name: 'playlistId', type: 'text', label: 'YouTube Playlist ID', defaultValue: 'PL7HfhnqHyzRmd7GWRKTBURlmcC7TsbdPz', admin: { description: 'Playlist for newsletter page videos' } },
                { name: 'subscribeUrl', type: 'text', label: 'Subscribe URL', defaultValue: 'https://www.linkedin.com/newsletters/the-sunday-starter-6914239256987131904/' },
              ],
            },
          ],
        },
        // Course Settings
        {
          type: 'collapsible',
          label: 'Course Settings',
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'course',
              type: 'group',
              label: false,
              fields: [
                { name: 'playlistId', type: 'text', label: 'Course Playlist ID', defaultValue: 'PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl', admin: { description: 'Main YouTube playlist for course page' } },
              ],
            },
          ],
        },
        // Footer
        {
          type: 'collapsible',
          label: 'Footer',
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'footer',
              type: 'group',
              label: false,
              fields: [
                { name: 'tagline', type: 'text', label: 'Footer Tagline', defaultValue: 'Fractional Sales Leader' },
                { name: 'slogan', type: 'text', label: 'Footer Slogan', defaultValue: 'Less Spend. More Sales.' },
                { name: 'copyrightName', type: 'text', label: 'Copyright Name', defaultValue: 'Louie Bernstein' },
                { name: 'quickLinksLabel', type: 'text', label: 'Quick Links Section Label', defaultValue: 'Quick Links' },
                { name: 'getInTouchLabel', type: 'text', label: 'Get In Touch Section Label', defaultValue: 'Get In Touch' },
              ],
            },
          ],
        },
        // SEO
        {
          type: 'collapsible',
          label: 'SEO Settings',
          admin: {
            initCollapsed: true,
            description: 'These settings affect how your site appears in search results',
          },
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'siteTitle',
                  type: 'text',
                  label: 'Site Title',
                  admin: { description: 'The title that appears in browser tabs and search results' },
                  defaultValue: 'Louie Bernstein - LinkedIn Top Voice | Fractional Sales Leader',
                },
                {
                  name: 'siteDescription',
                  type: 'textarea',
                  label: 'Site Description',
                  admin: { description: 'The description that appears in search results (keep under 160 characters)' },
                  defaultValue: 'LinkedIn Top Voice | Fractional Sales Leader helping $1M–$10M ARR companies build repeatable sales systems and high-performing sales teams.',
                },
                {
                  name: 'keywords',
                  type: 'text',
                  label: 'Keywords',
                  admin: { description: 'Comma-separated keywords for SEO' },
                  defaultValue: 'fractional sales leader, sales consulting, sales team optimization',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
