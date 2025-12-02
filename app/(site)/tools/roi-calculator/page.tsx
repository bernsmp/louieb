import { Metadata } from "next";
import { ROICalculator } from "@/components/ROICalculator";
import { getROICalculatorPageData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Fractional Sales ROI Calculator | Louie Bernstein",
  description:
    "Calculate the ROI of hiring a Fractional Sales Leader vs. founder-led sales or a full-time VP hire. See how much you could save.",
};

export default async function ROICalculatorPage() {
  const pageData = await getROICalculatorPageData();

  return (
    <main className="py-24">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            {pageData.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            {pageData.subheadline}
          </p>
        </div>

        <div className="mt-12">
          <ROICalculator />
        </div>
      </div>
    </main>
  );
}
