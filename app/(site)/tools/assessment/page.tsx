import { Metadata } from "next";
import { AssessmentQuiz } from "./AssessmentQuiz";
import { getAllVideosWithSlugs } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Do You Need a Fractional Sales Manager? | Free Assessment | Louie Bernstein",
  description:
    "Take this free 2-minute assessment to find out if your business needs a fractional sales manager. Get personalized recommendations based on your sales team's current state.",
  keywords:
    "fractional sales manager assessment, fractional sales leader quiz, do I need a sales manager, sales leadership assessment, fractional sales needs assessment, sales team readiness quiz",
  openGraph: {
    title: "Do You Need a Fractional Sales Manager? | Free Assessment",
    description:
      "Take this free 2-minute assessment to find out if your business needs a fractional sales manager. Get personalized recommendations based on your sales team's current state.",
    url: "https://louiebernstein.com/tools/assessment",
    type: "website",
  },
};

export default async function AssessmentPage() {
  const allVideos = await getAllVideosWithSlugs();

  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: "Do You Need a Fractional Sales Manager? Assessment",
    description:
      "An 8-question assessment to help you determine if your business needs a fractional sales manager. Get personalized recommendations based on your sales team's current state.",
    url: "https://louiebernstein.com/tools/assessment",
    educationalLevel: "Business Decision Makers",
    audience: {
      "@type": "Audience",
      audienceType: "CEOs, Founders, Sales Leaders",
    },
    publisher: {
      "@type": "Person",
      name: "Louie Bernstein",
      url: "https://louiebernstein.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <main className="py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
              Do You Need a Fractional Sales Manager?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
              Take this free 2-minute assessment to get a personalized recommendation based on your sales team's current state.
            </p>
          </div>

          <div className="mt-12">
            <AssessmentQuiz videos={allVideos} />
          </div>
        </div>
      </main>
    </>
  );
}
