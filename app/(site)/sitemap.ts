import { MetadataRoute } from 'next';
import { getArticleSlugs, getArticleBySlug } from '@/lib/markdown';
import { getAllVideoSlugs } from '@/lib/cms';

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
  ];

  // Dynamic article routes
  const articleSlugs = getArticleSlugs();
  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => {
    const article = getArticleBySlug(slug);
    return {
      url: `${baseUrl}/articles/${slug}`,
      lastModified: article ? new Date(article.metadata.date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  // Dynamic video routes
  const videoSlugs = await getAllVideoSlugs();
  const videoRoutes: MetadataRoute.Sitemap = videoSlugs.map((slug) => ({
    url: `${baseUrl}/videos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes, ...videoRoutes];
}

