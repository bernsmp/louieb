import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Louie Bernstein - Sales Leadership Insights",
  description:
    "Read expert insights on sales leadership, team optimization, and sales process improvement from Louie Bernstein.",
};

export default function ArticlesPage() {
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-[#0966c2] hover:shadow-lg"
            >
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-muted">
                <p className="font-sans text-sm text-muted-foreground">
                  Article Coming Soon
                </p>
              </div>
              <h2 className="mt-6 font-sans text-2xl font-bold text-foreground">
                Sales Article {item}
              </h2>
              <p className="mt-4 font-sans text-base text-muted-foreground">
                Stay tuned for expert insights on sales leadership and team
                optimization.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
