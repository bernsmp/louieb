import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { getArticleSlugs, getArticleBySlug } from '@/lib/markdown';
import { getAllVideosWithSlugs, getAllBlogPostsWithSlugs } from '@/lib/cms';

const baseUrl = 'https://louiebernstein.com';

// Routes whose children are added dynamically (we still keep the index page).
const DYNAMIC_PARENTS = new Set(['articles', 'blog', 'videos']);

// Routes that should never appear in the sitemap.
const EXCLUDED_ROUTES = new Set<string>([]);

// Per-route priority overrides. Anything not listed gets DEFAULT_PRIORITY.
const PRIORITY_OVERRIDES: Record<string, number> = {
  '': 1.0,
  'fractional-sales-leader': 0.9,
  'fractional-cro-for-1m-10m-founders': 0.9,
  'fractional-vp-of-sales-for-small-businesses': 0.9,
  'fractional-sales-leader-vs-consultant': 0.9,
  articles: 0.9,
  blog: 0.8,
  videos: 0.8,
  tools: 0.8,
  'tools/roi-calculator': 0.8,
  'tools/assessment': 0.7,
  'founder-sales-trap-audit': 0.8,
  course: 0.8,
  faqs: 0.8,
  newsletter: 0.7,
  about: 0.7,
  privacy: 0.3,
  'site-map': 0.5,
};

const DEFAULT_PRIORITY = 0.7;

function discoverStaticRoutes(): string[] {
  const siteDir = path.join(process.cwd(), 'app', '(site)');
  try {
    return fs
      .readdirSync(siteDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter(
        (name) =>
          !name.startsWith('[') && // dynamic segment
          !name.startsWith('(') && // route group
          !name.startsWith('_') && // private folder
          !EXCLUDED_ROUTES.has(name) &&
          fs.existsSync(path.join(siteDir, name, 'page.tsx'))
      )
      .sort();
  } catch (e) {
    console.error('[sitemap] Failed to read (site) directory:', e);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticSlugs = discoverStaticRoutes();

  // Homepage + every static (site) directory that has a page.tsx
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: PRIORITY_OVERRIDES[''] ?? DEFAULT_PRIORITY,
    },
    ...staticSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: DYNAMIC_PARENTS.has(slug)
        ? ('weekly' as const)
        : ('monthly' as const),
      priority: PRIORITY_OVERRIDES[slug] ?? DEFAULT_PRIORITY,
    })),
    // Tool sub-pages (not auto-discovered by the top-level scan)
    {
      url: `${baseUrl}/tools/roi-calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: PRIORITY_OVERRIDES['tools/roi-calculator'] ?? DEFAULT_PRIORITY,
    },
    {
      url: `${baseUrl}/tools/assessment`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: PRIORITY_OVERRIDES['tools/assessment'] ?? DEFAULT_PRIORITY,
    },
  ];

  // Dynamic article routes
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const articleSlugs = getArticleSlugs();
    articleRoutes = articleSlugs.map((slug) => {
      const article = getArticleBySlug(slug);
      return {
        url: `${baseUrl}/articles/${slug}`,
        lastModified: article ? new Date(article.metadata.date) : now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    });
  } catch (e) {
    console.error('[sitemap] Failed to fetch article slugs:', e);
  }

  // Dynamic blog post routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = await getAllBlogPostsWithSlugs();
    blogRoutes = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedDate ? new Date(post.publishedDate) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error('[sitemap] Failed to fetch blog posts:', e);
  }

  // Dynamic video routes
  let videoRoutes: MetadataRoute.Sitemap = [];
  try {
    const videos = await getAllVideosWithSlugs();
    videoRoutes = videos.map((video) => ({
      url: `${baseUrl}/videos/${video.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error('[sitemap] Failed to fetch video slugs:', e);
  }

  return [...staticRoutes, ...articleRoutes, ...blogRoutes, ...videoRoutes];
}
