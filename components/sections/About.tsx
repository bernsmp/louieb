interface AboutProps {
  headline?: string;
  headlineAccent?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  calloutText?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
}

export function About({
  headline = "Fractional Sales Leadership",
  headlineAccent = "for $1M–$10M ARR Companies",
  paragraph1 = "With over 9 years of experience as a Fractional Sales Leader, I specialize in helping technical and operational founders of companies with $1M–$10M ARR build repeatable sales systems and transition from leading sales themselves to managing high-performing sales teams.",
  paragraph2 = "My focus is on delivering systematic frameworks tailored for the critical growth stage where founders must document sales processes, onboard their first sales reps, and scale effectively without becoming a bottleneck.",
  paragraph3 = "I bring extensive expertise in sales leadership, sales and marketing alignment, and sales team development. My mission is to empower founders to optimize their time and resources while building scalable sales teams capable of generating predictable revenue.",
  calloutText = "With a proven approach, I collaborate with businesses to develop actionable sales pipelines, implement effective scorecards for hiring, and establish reliable sales processes that drive sustainable growth.",
  stat1Value = "9+",
  stat1Label = "Years as Fractional Sales Leader",
  stat2Value = "$1M–$10M",
  stat2Label = "ARR Companies Served",
  stat3Value = "INC 500",
  stat3Label = "Scaled from Zero",
}: AboutProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: Content */}
          <div>
            <h2 className="text-5xl font-bold leading-tight text-neutral-900 md:text-6xl lg:text-7xl">
              {headline}{" "}
              <span className="text-neutral-500">{headlineAccent}</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
              <p>{paragraph3}</p>
            </div>
            <div className="mt-10 rounded-2xl border-l-4 border-neutral-900 bg-neutral-50 p-6">
              <p className="text-lg font-semibold leading-relaxed text-neutral-900 md:text-xl">
                {calloutText}
              </p>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-12">
              {/* Stats or visual elements */}
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-neutral-900">{stat1Value}</div>
                  <div className="mt-2 text-lg text-neutral-600">{stat1Label}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-neutral-900">{stat2Value}</div>
                  <div className="mt-2 text-lg text-neutral-600">{stat2Label}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-neutral-900">{stat3Value}</div>
                  <div className="mt-2 text-lg text-neutral-600">{stat3Label}</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-neutral-900 opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-neutral-900 opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
