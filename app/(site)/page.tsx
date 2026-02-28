import { Hero } from "@/components/Hero";
import { FractionalSalesLeader } from "@/components/sections/FractionalSalesLeader";
import { Transformation } from "@/components/sections/Transformation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { SecondaryCTA } from "@/components/sections/SecondaryCTA";
import { FAQ } from "@/components/sections/FAQ";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Awards } from "@/components/sections/Awards";
import { getSiteSettings, getTestimonials } from "@/lib/cms";

// Make this page dynamic so CMS changes are reflected immediately
export const dynamic = 'force-dynamic';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Fractional Sales Leader?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Fractional Sales Leader is an experienced sales executive who works with your company part-time to build sales systems, processes, and teams — without the cost of a full-time VP of Sales hire."
      }
    },
    {
      "@type": "Question",
      "name": "How is a Fractional Sales Leader different from a VP of Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A VP of Sales is a full-time hire typically costing $200K+ per year. A Fractional Sales Leader provides the same strategic expertise at a fraction of the cost, working part-time while you build the systems needed before making a full-time hire."
      }
    },
    {
      "@type": "Question",
      "name": "When should a founder stop doing their own sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When sales is preventing you from running and growing your business. If you're closing most deals yourself and can't step away without revenue dropping, you need a system — not just a salesperson."
      }
    },
    {
      "@type": "Question",
      "name": "What size company do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I work with B2B founders at companies with $1M–$10M in ARR who are stuck in founder-led sales and need to build repeatable systems before hiring their first salesperson or sales team."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most founders see a meaningful shift within the first 90 days — a documented process, consistent outbound activity, and a pipeline they can actually manage and forecast."
      }
    }
  ]
};

export default async function Home() {
  const [settings, testimonials] = await Promise.all([
    getSiteSettings(),
    getTestimonials(),
  ]);

  // Helper function to check if section should be visible
  // Defaults to true if visibility field is not set
  const isVisible = (section: Record<string, unknown>) => {
    return section.visible !== false;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <main>
      {isVisible(settings.hero) && (
        <Hero
          headline={settings.hero.headline}
          tagline={settings.hero.tagline}
          description={settings.hero.description}
          videoId={settings.hero.videoId}
          credentialPrimary={settings.credentials.primary}
          credentialSecondary={settings.credentials.secondary}
          ctaPrimaryText={settings.hero.ctaPrimary.text}
          ctaPrimaryUrl={settings.hero.ctaPrimary.url}
          ctaSecondaryText={settings.hero.ctaSecondary.text}
          ctaSecondaryUrl={settings.hero.ctaSecondary.url}
        />
      )}
      {isVisible(settings.fractionalSalesLeader) && (
        <FractionalSalesLeader
          headline={settings.fractionalSalesLeader.headline}
          headlineAccent={settings.fractionalSalesLeader.headlineAccent}
          hook={settings.fractionalSalesLeader.hook}
          paragraph1={settings.fractionalSalesLeader.paragraph1}
          paragraph2={settings.fractionalSalesLeader.paragraph2}
          paragraph3={settings.fractionalSalesLeader.paragraph3}
          paragraph4={settings.fractionalSalesLeader.paragraph4}
          calloutText={settings.fractionalSalesLeader.calloutText}
          ctaText={settings.fractionalSalesLeader.ctaText}
          ctaUrl={settings.fractionalSalesLeader.ctaUrl}
        />
      )}
      <Transformation />
      {isVisible(settings.testimonialsSection) && (
        <Testimonials
          headline={settings.testimonialsSection.headline}
          subheadline={settings.testimonialsSection.subheadline}
          testimonials={testimonials}
        />
      )}
      {isVisible(settings.process) && (
        <Process
          headline={settings.process.headline}
          subheadline={settings.process.subheadline}
          steps={settings.process.steps}
        />
      )}
      {isVisible(settings.valueProposition) && (
        <ValueProposition
          headline={settings.valueProposition.headline}
          subheadline={settings.valueProposition.subheadline}
          description={settings.valueProposition.description}
          ctaText={settings.valueProposition.ctaText}
        />
      )}
      <SecondaryCTA />
      {isVisible(settings.faq) && (
        <FAQ
          headline={settings.faq.headline}
          subheadline={settings.faq.subheadline}
          items={settings.faq.items}
        />
      )}
      {isVisible(settings.about) && (
        <About
          headline={settings.about.headline}
          headlineAccent={settings.about.headlineAccent}
          paragraph1={settings.about.paragraph1}
          paragraph2={settings.about.paragraph2}
          paragraph3={settings.about.paragraph3}
          calloutText={settings.about.calloutText}
          stat1Value={settings.about.stat1Value}
          stat1Label={settings.about.stat1Label}
          stat2Value={settings.about.stat2Value}
          stat2Label={settings.about.stat2Label}
          stat3Value={settings.about.stat3Value}
          stat3Label={settings.about.stat3Label}
        />
      )}
      {isVisible(settings.contactSection) && (
        <Contact
          email={settings.contact.email}
          phone={settings.contact.phone}
          calendlyUrl={settings.social.calendly}
          headline={settings.contactSection.headline}
          description={settings.contactSection.description}
          emailLabel={settings.contactSection.emailLabel}
          phoneLabel={settings.contactSection.phoneLabel}
          ctaButtonText={settings.contactSection.ctaButtonText}
        />
      )}
      {isVisible(settings.awards) && (
        <Awards
          headline={settings.awards.headline}
          subheadline={settings.awards.subheadline}
          imageUrl={settings.awards.imageUrl}
          description={settings.awards.description}
        />
      )}
    </main>
    </>
  );
}
