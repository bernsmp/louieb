import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPageData, getAllBlogPostsWithSlugs, getFeaturedBlogPosts } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getBlogPageData();

  const title = `${pageData.headline} | Louie Bernstein`;
  const description = pageData.subheadline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

// Generate BlogPosting schema for SEO
function generateBlogSchema(posts: Array<{ title: string; excerpt: string; slug: string; publishedDate: string; author?: string }>) {
  const blogPostings = posts.map((post) => ({
    "@type": "BlogPosting",
    "@id": `https://louiebernstein.com/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
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
  }));

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sales Insights Blog",
    description: "Sales insights and lessons from Louie Bernstein",
    url: "https://louiebernstein.com/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPostings.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: post,
      })),
    },
  };
}

export default async function BlogPage() {
  const pageData = await getBlogPageData();
  const featuredPosts = await getFeaturedBlogPosts();
  const allPosts = await getAllBlogPostsWithSlugs();
  const blogSchema = generateBlogSchema(allPosts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
              {pageData.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
              {pageData.subheadline}
            </p>
          </div>

          {/* Featured Posts Grid */}
          <div className="mt-16">
            <div className="mb-12">
              <h2 className="mb-8 font-sans text-3xl font-bold text-foreground">
                {pageData.featuredPostsHeadline}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl border-2 border-[#0966c2] bg-card p-4 shadow-lg transition-all hover:shadow-xl"
                  >
                    {/* Thumbnail */}
                    {post.image ? (
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#0966c2]/10 to-[#0966c2]/5 flex items-center justify-center">
                        <span className="text-4xl text-[#0966c2]/30">📝</span>
                      </div>
                    )}
                    <div className="mt-4">
                      <p className="font-sans text-xs text-muted-foreground">
                        {new Date(post.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h3 className="mt-1 font-sans text-lg font-semibold text-foreground group-hover:text-[#0966c2]">
                        {post.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="mt-3 inline-block font-sans text-sm font-medium text-[#0966c2]">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Posts Links */}
            {allPosts.length > 4 && (
              <div className="mt-10 text-center">
                <h3 className="mb-4 font-sans text-lg font-semibold text-foreground">
                  {pageData.allPostsHeadline}
                </h3>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {allPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="font-sans text-[#0966c2] hover:underline"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* LinkedIn CTA */}
            <div className="mt-12 text-center">
              <a
                href={pageData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#0966c2] px-8 py-4 font-sans text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#0855a3] hover:shadow-xl"
              >
                {pageData.linkedInCtaText}
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
