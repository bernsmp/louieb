import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticleSlugs } from "@/lib/markdown";
import { ArticleContent } from "@/components/ArticleContent";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.metadata.title} | Louie Bernstein`,
    description: article.metadata.description,
    keywords: article.metadata.keywords,
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.description,
      type: "article",
      publishedTime: article.metadata.date,
      authors: [article.metadata.author],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="py-24">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/articles"
            className="text-[#0966c2] hover:underline font-sans text-sm"
          >
            ← Back to Articles
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl mb-4">
            {article.metadata.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 text-base text-muted-foreground font-sans mb-8">
            <span>By {article.metadata.author}</span>
            <span>•</span>
            <time dateTime={article.metadata.date}>
              {new Date(article.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <ArticleContent content={article.content} />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <p className="font-sans text-sm text-muted-foreground">
                Share this article:
              </p>
              <div className="flex gap-2 mt-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://louiebernstein.com/articles/${slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0966c2] hover:underline font-sans text-sm"
                >
                  LinkedIn
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `https://louiebernstein.com/articles/${slug}`
                  )}&text=${encodeURIComponent(article.metadata.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0966c2] hover:underline font-sans text-sm"
                >
                  Twitter
                </a>
              </div>
            </div>
            <Link
              href="/articles"
              className="text-[#0966c2] hover:underline font-sans text-sm font-semibold"
            >
              View All Articles →
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

