import { Metadata } from "next";
import { ROICalculator } from "@/components/ROICalculator";
import { getROICalculatorPageData } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Free Fractional Sales ROI Calculator | Compare Costs & Savings | Louie Bernstein",
  description:
    "Free interactive ROI calculator to compare Fractional Sales Leader vs Founder-Led Sales vs Full-Time VP Hire. Calculate 6-month costs, savings, and missed revenue. No signup required.",
  keywords:
    "fractional sales calculator, sales roi calculator, fractional sales leader cost calculator, sales leader roi tool, compare fractional sales vs vp, sales leadership calculator, fractional sales roi tool",
  openGraph: {
    title: "Free Fractional Sales ROI Calculator - Compare Costs & Savings",
    description:
      "Calculate ROI of Fractional Sales Leadership. Compare costs vs founder-led sales and full-time VP hires. See potential savings.",
    url: "https://louiebernstein.com/tools/roi-calculator",
    type: "website",
  },
};

export default async function ROICalculatorPage() {
  const pageData = await getROICalculatorPageData();

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fractional Sales ROI Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Calculate the ROI of hiring a Fractional Sales Leader vs. founder-led sales or a full-time VP hire. Compare costs and savings over 6 months.",
    url: "https://louiebernstein.com/tools/roi-calculator",
    featureList: [
      "Compare Fractional Sales Leader vs Founder-Led Sales",
      "Compare Fractional Sales Leader vs Full-Time VP Hire",
      "Calculate 6-month cost savings",
      "Estimate missed revenue opportunities",
      "Customizable input fields with tooltips",
      "Real-time calculations",
      "Downloadable results",
    ],
    provider: {
      "@type": "Person",
      name: "Louie Bernstein",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
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
    </>
  );
}
