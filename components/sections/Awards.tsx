interface AwardsProps {
  headline?: string;
  subheadline?: string;
  imageUrl?: string;
  description?: string;
}

export function Awards({
  headline = "Recognized Excellence",
  subheadline = "Award-winning sales consulting and leadership",
  imageUrl = "https://d1yei2z3i6k35z.cloudfront.net/1671832/64e3c2e5505e3_fourawards.png",
  description = "Louie Bernstein has received four prestigious awards for excellence in sales consulting and leadership.",
}: AwardsProps) {
  return (
    <section className="bg-neutral-50 py-32">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            {subheadline}
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="relative rounded-3xl border-2 border-neutral-900 bg-white p-8 shadow-2xl lg:p-12">
            <img
              src={imageUrl}
              alt="Awards"
              className="h-auto w-full max-w-3xl"
            />
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-neutral-900 opacity-10 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-neutral-900 opacity-10 blur-xl"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-neutral-900 md:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
