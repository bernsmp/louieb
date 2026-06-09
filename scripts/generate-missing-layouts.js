#!/usr/bin/env node
/*
 * Generates layout.tsx for every (site)/<slug>/ directory that has page.tsx but no layout.tsx.
 *
 * For SEO pages: extracts heroLine1 + heroAccent + heroDescription from v("key", "default") calls
 * and builds a unique Metadata export (title, description, canonical, OG, Twitter, robots).
 *
 * For utility pages without that pattern: falls back to UTILITY_OVERRIDES below.
 *
 * Run with: node scripts/generate-missing-layouts.js
 */
const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..', 'app', '(site)');
const BASE_URL = 'https://louiebernstein.com';
const DEFAULT_OG_IMAGE = 'https://louiebernstein.com/images/fractional-sales-leader-hero.png';

// Hand-tuned metadata for utility/hub pages that don't use the SEO hero pattern.
// title is just the page title — " | Louie Bernstein" is appended automatically.
const UTILITY_OVERRIDES = {
  'articles': {
    title: 'Sales Articles & Insights',
    description: 'Practical articles on fractional sales leadership, founder-led sales, sales process, hiring, and scaling revenue for $1M–$10M ARR founders.',
  },
  'blog': {
    title: 'Blog — Sales Leadership Insights',
    description: 'Field-tested thinking on fractional sales leadership, sales hiring, pipeline management, and building repeatable revenue at $1M–$10M ARR.',
  },
  'videos': {
    title: 'Sales Leadership Videos',
    description: 'Short, practical videos on sales process, hiring, pipeline, forecasting, and founder-led sales transitions for $1M–$10M ARR founders.',
  },
  'course': {
    title: 'The Founder Sales Course',
    description: 'A step-by-step course for founders building a repeatable sales system without hiring a full-time VP of Sales.',
  },
  'tools': {
    title: 'Free Sales Tools & Assessments',
    description: 'Free tools to diagnose your sales system — ROI calculator, sales readiness assessment, and more for $1M–$10M ARR founders.',
  },
  'faqs': {
    title: 'Fractional Sales Leader FAQs',
    description: 'Common questions about hiring a fractional sales leader: pricing, scope, results, how it compares to a full-time VP of Sales, and what to expect.',
  },
  'newsletter': {
    title: 'The Founder Sales Newsletter',
    description: 'Weekly tactics on sales process, hiring, pipeline, and revenue acceleration for founders building from $1M to $10M ARR.',
  },
  'privacy': {
    title: 'Privacy Policy',
    description: 'How louiebernstein.com collects, uses, and protects your information.',
    robotsIndex: false,
  },
  'site-map': {
    title: 'Site Map',
    description: 'Full directory of guides, articles, and resources on louiebernstein.com — fractional sales leadership for $1M–$10M ARR founders.',
  },
  'founders': {
    title: 'For Founders — Fractional Sales Leadership',
    description: 'Fractional sales leadership built for B2B founders at $1M–$10M ARR who are stuck in founder-led sales and not ready for a full-time VP.',
  },
  'entrepreneurs': {
    title: 'For Entrepreneurs — Fractional Sales Leadership',
    description: 'Fractional sales leadership for bootstrapped entrepreneurs who need a repeatable sales system without the cost of a full-time VP of Sales.',
  },
  'salesperson': {
    title: 'For Salespeople — Coaching & Career',
    description: 'Coaching, career guidance, and field-tested sales tactics for B2B salespeople from a 50-year sales leader and INC 500 founder.',
  },
  'fractional-sales-leader': {
    title: 'Fractional Sales Leader for $1M–$10M ARR Founders',
    description: 'A senior sales leader, embedded part-time, building the system, hiring the team, and removing the founder from day-to-day sales — for a fraction of the cost of a full-time VP.',
  },
};

function listMissingLayouts() {
  return fs
    .readdirSync(SITE_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .filter((e) => !e.name.startsWith('(') && !e.name.startsWith('[') && !e.name.startsWith('_'))
    .filter((e) => {
      const dir = path.join(SITE_DIR, e.name);
      return fs.existsSync(path.join(dir, 'page.tsx')) && !fs.existsSync(path.join(dir, 'layout.tsx'));
    })
    .map((e) => e.name)
    .sort();
}

// Extract first v("key", "default value") string for a given key.
// Handles single and double-quoted defaults, escaped quotes, and unicode chars.
function extractV(source, key) {
  const patterns = [
    new RegExp(`v\\(\\s*["']${key}["']\\s*,\\s*"((?:[^"\\\\]|\\\\.)*)"`, 's'),
    new RegExp(`v\\(\\s*["']${key}["']\\s*,\\s*'((?:[^'\\\\]|\\\\.)*)'`, 's'),
  ];
  for (const re of patterns) {
    const m = source.match(re);
    if (m) {
      // Unescape \" and \'
      return m[1].replace(/\\"/g, '"').replace(/\\'/g, "'").trim();
    }
  }
  return null;
}

function buildTitle(heroLine1, heroAccent) {
  if (!heroLine1) return null;
  // Many pages split a sentence: "Fractional CRO vs." + "Full-Time CRO"
  // Some end with punctuation: "Sales Pipeline Stages:" + "How to Define Them..."
  // Glue with a space unless line1 ends with em-dash or colon.
  let combined = heroLine1;
  if (heroAccent) {
    const trimmed = heroLine1.trim();
    const accent = heroAccent.trim();
    // If line1 ends with punctuation, just append. Otherwise add space.
    if (/[—:?!.]$/.test(trimmed)) {
      combined = `${trimmed} ${accent}`;
    } else if (accent.startsWith('—') || accent.startsWith('-')) {
      combined = `${trimmed} ${accent}`;
    } else {
      combined = `${trimmed} ${accent}`;
    }
  }
  // Collapse whitespace.
  return combined.replace(/\s+/g, ' ').trim();
}

function shorten(text, max = 160) {
  if (!text) return '';
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  // Trim to the last sentence boundary or word.
  const cut = clean.slice(0, max);
  const lastPeriod = cut.lastIndexOf('.');
  if (lastPeriod > max * 0.6) return cut.slice(0, lastPeriod + 1);
  const lastSpace = cut.lastIndexOf(' ');
  return cut.slice(0, lastSpace) + '…';
}

function tsEscape(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function pascalFromSlug(slug) {
  const pascal = slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
  // JS identifiers can't start with a digit.
  return /^\d/.test(pascal) ? `Page${pascal}` : pascal;
}

function buildLayoutSource({ slug, title, description, robotsIndex = true }) {
  const url = `${BASE_URL}/${slug}`;
  const fullTitle = `${title} | Louie Bernstein`;
  const shortDesc = shorten(description, 200);
  const componentName = `${pascalFromSlug(slug)}Layout`;

  const robotsBlock = robotsIndex
    ? `  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },`
    : `  robots: {
    index: false,
    follow: true,
  },`;

  return `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${tsEscape(fullTitle)}",
  description: "${tsEscape(shortDesc)}",
  openGraph: {
    title: "${tsEscape(title)}",
    description: "${tsEscape(shortDesc)}",
    type: "article",
    url: "${url}",
    siteName: "Louie Bernstein",
    locale: "en_US",
    images: [
      {
        url: "${DEFAULT_OG_IMAGE}",
        width: 1920,
        height: 1080,
        alt: "${tsEscape(title)}",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "${tsEscape(title)}",
    description: "${tsEscape(shortDesc)}",
    images: ["${DEFAULT_OG_IMAGE}"],
  },
  alternates: {
    canonical: "${url}",
  },
${robotsBlock}
};

export default function ${componentName}({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;
}

function main() {
  const slugs = listMissingLayouts();
  console.log(`Found ${slugs.length} pages missing layout.tsx\n`);

  const report = { seo: [], utility: [], fallback: [] };

  for (const slug of slugs) {
    const pagePath = path.join(SITE_DIR, slug, 'page.tsx');
    const layoutPath = path.join(SITE_DIR, slug, 'layout.tsx');
    const source = fs.readFileSync(pagePath, 'utf8');

    let title, description, robotsIndex = true;
    const override = UTILITY_OVERRIDES[slug];

    if (override) {
      title = override.title;
      description = override.description;
      if (override.robotsIndex === false) robotsIndex = false;
      report.utility.push(slug);
    } else {
      const heroLine1 = extractV(source, 'heroLine1');
      const heroAccent = extractV(source, 'heroAccent');
      const heroDescription = extractV(source, 'heroDescription');
      title = buildTitle(heroLine1, heroAccent);
      description = heroDescription;

      if (!title || !description) {
        // Fallback: use slug-derived title + generic description so the page at least gets unique metadata.
        const fallbackTitle = slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        title = title || fallbackTitle;
        description =
          description ||
          `Practical guidance on ${fallbackTitle.toLowerCase()} for B2B founders at $1M–$10M ARR. Field-tested by Louie Bernstein, fractional sales leader and INC 500 founder.`;
        report.fallback.push(slug);
      } else {
        report.seo.push(slug);
      }
    }

    const layout = buildLayoutSource({ slug, title, description, robotsIndex });
    fs.writeFileSync(layoutPath, layout, 'utf8');
  }

  console.log(`SEO pages (extracted from hero):  ${report.seo.length}`);
  console.log(`Utility pages (override applied): ${report.utility.length}`);
  console.log(`Fallback (no hero pattern found): ${report.fallback.length}`);

  if (report.fallback.length) {
    console.log('\nFallback pages (may need manual review):');
    for (const s of report.fallback) console.log(`  - ${s}`);
  }
}

main();
