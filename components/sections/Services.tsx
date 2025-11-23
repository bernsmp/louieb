import { Icon } from "@/components/ui/Icon";

export function Services() {
  const services = [
    {
      title: "Sales Team Organization",
      description:
        "Structure your sales team for maximum efficiency. Clear roles, accountability, and reporting systems that keep everyone aligned.",
      icon: "/icons/business-team-6621979.svg",
      highlight: false,
    },
    {
      title: "Sales Process Optimization",
      description:
        "Streamline your sales process from lead to close. Eliminate bottlenecks and create a repeatable, scalable system.",
      icon: "/icons/efficiency-6622003.svg",
      highlight: true,
    },
    {
      title: "Sales Team Training",
      description:
        "Equip your team with the skills and knowledge they need. Customized training programs that address your specific challenges.",
      icon: "/icons/guidance-6622007.svg",
      highlight: false,
    },
    {
      title: "Sales Playbook Development",
      description:
        "Create a comprehensive playbook that ensures consistency. Scripts, emails, and processes that get everyone on the same page.",
      icon: "/icons/business-plan-11962831.svg",
      highlight: false,
    },
    {
      title: "Pipeline Management",
      description:
        "Implement proven pipeline management strategies. Forecast accurately and close more deals with predictable results.",
      icon: "/icons/scalable-11962814.svg",
      highlight: true,
    },
    {
      title: "CRM Implementation",
      description:
        "Set up and optimize your CRM for real results. Data-driven insights that help you make better decisions faster.",
      icon: "/icons/analytics-11962812.svg",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="bg-neutral-50 py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            What I Offer
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            Comprehensive sales leadership services designed to transform your team
          </p>
        </div>

        {/* Staggered grid layout */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl border bg-white p-8 transition-all duration-300
                ${service.highlight 
                  ? "border-neutral-900 shadow-lg lg:-mt-4 lg:shadow-xl" 
                  : "border-neutral-200 hover:border-neutral-300 hover:shadow-md"
                }
              `}
            >
              {/* Background accent for highlighted cards */}
              {service.highlight && (
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-neutral-900 opacity-5"></div>
              )}
              
              <div className="relative">
                <Icon src={service.icon} alt={service.title} size={64} />
                <h3 className={`mt-6 text-2xl font-bold ${service.highlight ? "text-neutral-900" : "text-neutral-800"}`}>
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
