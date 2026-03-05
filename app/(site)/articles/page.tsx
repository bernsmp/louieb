import { Metadata } from "next";
import { getAllArticles } from "@/lib/markdown";
import { getArticlesPageData, getArticlesOrder } from "@/lib/cms";
import { ArticleGrid } from "./ArticleGrid";

export const metadata: Metadata = {
  title: "Articles | Louie Bernstein - Sales Leadership Insights",
  description:
    "Read expert insights on sales leadership, team optimization, and sales process improvement from Louie Bernstein.",
  alternates: {
    canonical: "https://louiebernstein.com/articles",
  },
};

export default async function ArticlesPage() {
  const [rawArticles, pageData, customOrder] = await Promise.all([
    Promise.resolve(getAllArticles()),
    getArticlesPageData(),
    getArticlesOrder(),
  ]);

  const articles = customOrder.length > 0
    ? [...rawArticles].sort((a, b) => {
        const aIdx = customOrder.indexOf(a.metadata.slug)
        const bIdx = customOrder.indexOf(b.metadata.slug)
        if (aIdx === -1 && bIdx === -1) return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
        if (aIdx === -1) return 1
        if (bIdx === -1) return -1
        return aIdx - bIdx
      })
    : rawArticles;

  return (
    <main className="py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
            {pageData.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            {pageData.description}
          </p>
        </div>

        <ArticleGrid articles={articles} />
      </div>
    </main>
  );
}
