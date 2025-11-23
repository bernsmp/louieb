import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  description: string;
  keywords?: string;
  author: string;
  date: string;
  slug: string;
}

export interface Article {
  metadata: ArticleMetadata;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getArticleSlugs(): string[] {
  try {
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }
    return fs
      .readdirSync(articlesDirectory)
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading article slugs:', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        title: data.title || '',
        description: data.description || '',
        keywords: data.keywords || '',
        author: data.author || 'Louie Bernstein',
        date: data.date || new Date().toISOString(),
        slug,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => {
      const dateA = new Date(a.metadata.date).getTime();
      const dateB = new Date(b.metadata.date).getTime();
      return dateB - dateA; // Newest first
    });

  return articles;
}

