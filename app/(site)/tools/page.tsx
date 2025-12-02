import { Metadata } from "next";
import Link from "next/link";
import { Calculator, BarChart, PieChart, TrendingUp, Target, Users } from "lucide-react";
import { getToolsPageData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Tools | Louie Bernstein - Sales Leadership Tools",
  description:
    "Free sales leadership tools and calculators to help you make better business decisions.",
};

// Map icon names to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  BarChart,
  PieChart,
  TrendingUp,
  Target,
  Users,
};

export default async function ToolsPage() {
  const pageData = await getToolsPageData();

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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pageData.tools.map((tool) => {
            const IconComponent = iconMap[tool.icon || 'Calculator'] || Calculator;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-[#0966c2] hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#0966c2] to-[#0855a3]">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h2 className="mt-6 font-sans text-2xl font-bold text-foreground group-hover:text-[#0966c2] transition-colors">
                  {tool.name}
                </h2>
                <p className="mt-4 font-sans text-base text-muted-foreground">
                  {tool.description}
                </p>
                <div className="mt-6 inline-flex items-center text-[#0966c2] font-medium">
                  Try it now
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
