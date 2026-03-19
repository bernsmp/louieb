import { MetadataRoute } from 'next';
import { getArticleSlugs, getArticleBySlug } from '@/lib/markdown';
import { getAllVideosWithSlugs, getAllBlogPostsWithSlugs } from '@/lib/cms';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://louiebernstein.com';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/fractional-sales-leader`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/roi-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/course`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fractional-sales-leader-vs-consultant`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/assessment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/salesperson`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // SEO landing pages
    {
      url: `${baseUrl}/fractional-cro-for-1m-10m-founders`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fractional-cro-pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fractional-vp-of-sales-for-small-businesses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/founder-led-sales-not-scaling`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-replace-founder-led-sales`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-hire-first-sales-rep`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-build-a-sales-process-after-1m-arr`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-build-a-sales-process-for-saas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/no-pipeline-what-to-do`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sales-team-not-hitting-quota`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-your-sales-team-isnt-hitting-quota`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-sales-reps-fail-in-startups`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/when-to-hire-a-fractional-cro`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
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
        lastModified: article ? new Date(article.metadata.date) : new Date(),
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
      lastModified: post.publishedDate ? new Date(post.publishedDate) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error('[sitemap] Failed to fetch blog posts:', e);
  }

  // Dynamic video routes — uses getAllVideosWithSlugs() to include ALL videos in the DB
  let videoRoutes: MetadataRoute.Sitemap = [];
  try {
    const videos = await getAllVideosWithSlugs();
    videoRoutes = videos.map((video) => ({
      url: `${baseUrl}/videos/${video.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error('[sitemap] Failed to fetch video slugs:', e);
  }

  return [...staticRoutes, ...articleRoutes, ...blogRoutes, ...videoRoutes];
}
