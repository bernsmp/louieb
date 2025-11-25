interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  headline?: string;
  subheadline?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  { number: "01", title: "Initial Consultation", description: "We start with a deep dive into your current sales operations. I'll assess your team, processes, and challenges to create a customized plan." },
  { number: "02", title: "Strategic Planning", description: "Together, we'll develop a roadmap for improvement. Clear objectives, measurable KPIs, and a timeline that works for your business." },
  { number: "03", title: "Implementation", description: "I'll work directly with your team to implement new systems and processes. Hands-on training ensures everyone knows exactly what to do." },
  { number: "04", title: "Optimization & Growth", description: "Continuous improvement is key. We'll monitor results, make adjustments, and scale what works to drive consistent growth." },
];

export function Process({
  headline = "How It Works",
  subheadline = "A proven process that delivers measurable results",
  steps = defaultSteps,
}: ProcessProps) {
  const processSteps = steps.length > 0 ? steps : defaultSteps;

  return (
    <section id="process" className="bg-white py-32">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            {subheadline}
          </p>
        </div>

        <div className="mt-20 space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col gap-8 rounded-2xl border-2 border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-xl lg:flex-row lg:items-center lg:gap-12 lg:p-10"
            >
              <div className="flex-shrink-0">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-neutral-900 text-4xl font-bold text-white shadow-lg transition-transform group-hover:scale-110 lg:h-28 lg:w-28 lg:text-5xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-neutral-900 lg:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
