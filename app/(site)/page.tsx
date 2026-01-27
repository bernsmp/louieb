import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Testimonials } from "@/components/sections/Testimonials";
import { FractionalSalesLeader } from "@/components/sections/FractionalSalesLeader";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Awards } from "@/components/sections/Awards";
import { getSiteSettings, getTestimonials } from "@/lib/cms";

// Make this page dynamic so CMS changes are reflected immediately
export const dynamic = 'force-dynamic';

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
      {isVisible(settings.services) && (
        <Services
          headline={settings.services.headline}
          subheadline={settings.services.subheadline}
          items={settings.services.items}
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
      {isVisible(settings.testimonialsSection) && (
        <Testimonials
          headline={settings.testimonialsSection.headline}
          subheadline={settings.testimonialsSection.subheadline}
          testimonials={testimonials}
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
      {isVisible(settings.process) && (
        <Process
          headline={settings.process.headline}
          subheadline={settings.process.subheadline}
          steps={settings.process.steps}
        />
      )}
      {isVisible(settings.faq) && (
        <FAQ
          headline={settings.faq.headline}
          subheadline={settings.faq.subheadline}
          items={settings.faq.items}
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
  );
}
