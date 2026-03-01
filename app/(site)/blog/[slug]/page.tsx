import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, getAllBlogPostsWithSlugs, getBlogPageData } from "@/lib/cms";

// Parse inline markdown links [text](url) into React elements
function renderInlineLinks(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, linkText, href] = match;
      const isInternal = href.startsWith('/') || href.startsWith('https://louiebernstein.com');
      const internalPath = href.replace('https://louiebernstein.com', '') || '/';
      if (isInternal) {
        return (
          <Link key={i} href={internalPath} className="text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]">
            {linkText}
          </Link>
        );
      }
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-[#0966c2] underline underline-offset-2 hover:text-[#0855a3]">
          {linkText}
        </a>
      );
    }
    return part;
  });
}

// Revalidate blog post pages every 60 seconds so Supabase content
// changes appear automatically without a full redeploy.
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPostsWithSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Louie Bernstein",
    };
  }

  return {
    title: `${post.title} | Louie Bernstein`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author || "Louie Bernstein"],
      images: post.image ? [post.image] : [],
    },
  };
}

// Generate BlogPosting schema for this specific post
function generateBlogPostSchema(post: {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedDate: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://louiebernstein.com/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    articleBody: post.content,
    datePublished: post.publishedDate,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author || "Louie Bernstein",
      url: "https://louiebernstein.com",
    },
    publisher: {
      "@type": "Person",
      name: "Louie Bernstein",
      url: "https://louiebernstein.com",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, pageData, allPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getBlogPageData(),
    getAllBlogPostsWithSlugs(),
  ]);

  if (!post) {
    notFound();
  }

  // Get other posts for "More Posts" section
  const otherPosts = allPosts.filter((p) => p.slug !== slug);

  const postSchema = generateBlogPostSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <main className="py-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center font-sans text-sm text-muted-foreground hover:text-foreground"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {pageData.postPageBackLinkText}
          </Link>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 overflow-hidden rounded-2xl border-2 border-[#0966c2] shadow-lg">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Post Header */}
          <div className="mb-8">
            <p className="font-sans text-sm text-muted-foreground">
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {post.author && ` · ${post.author}`}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-primary md:text-4xl">
              {post.title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#0966c2]/10 px-3 py-1 font-sans text-xs text-[#0966c2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="font-sans text-lg text-foreground leading-relaxed mb-4">
                {renderInlineLinks(paragraph)}
              </p>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <div className="mt-8">
            <a
              href={post.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#0966c2] px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0855a3] hover:shadow-lg"
            >
              {pageData.postPageReadOnLinkedInText}
            </a>
          </div>

          {/* More Posts Section */}
          {otherPosts.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="mb-8 font-sans text-2xl font-bold text-foreground">
                {pageData.postPageMorePostsHeadline}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherPosts.slice(0, 3).map((otherPost) => (
                  <Link
                    key={otherPost.slug}
                    href={`/blog/${otherPost.slug}`}
                    className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-[#0966c2] hover:shadow-md"
                  >
                    {otherPost.image ? (
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={otherPost.image}
                          alt={otherPost.imageAlt || otherPost.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-gradient-to-br from-[#0966c2]/10 to-[#0966c2]/5 flex items-center justify-center">
                        <span className="text-3xl text-[#0966c2]/30">📝</span>
                      </div>
                    )}
                    <div className="p-4">
                      <p className="font-sans text-xs text-muted-foreground">
                        {new Date(otherPost.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h3 className="mt-1 font-sans text-sm font-semibold text-foreground group-hover:text-[#0966c2]">
                        {otherPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
