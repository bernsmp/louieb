import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Articles | Louie Bernstein - Sales Leadership Insights",
  description:
    "Read expert insights on sales leadership, team optimization, and sales process improvement from Louie Bernstein.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
            Articles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            Expert insights on sales leadership and team optimization
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.metadata.slug}
                href={`/articles/${article.metadata.slug}`}
                className="group rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-[#0966c2] hover:shadow-lg"
              >
                <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-[#0966c2]/10 to-[#0855a3]/10 overflow-hidden relative">
                  {article.metadata.image ? (
                    <Image
                      src={article.metadata.image}
                      alt={article.metadata.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#0966c2] flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide">
                        Article
                      </p>
                    </div>
                  )}
                </div>
                <h2 className="mt-6 font-sans text-2xl font-bold text-foreground group-hover:text-[#0966c2] transition-colors">
                  {article.metadata.title}
                </h2>
                <p className="mt-4 font-sans text-base text-muted-foreground line-clamp-3">
                  {article.metadata.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={article.metadata.date}>
                    {new Date(article.metadata.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="font-sans text-lg text-muted-foreground">
              Articles coming soon. Check back for expert insights on sales leadership.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
