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

  return (
    <main>
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
      <Services 
        headline={settings.services.headline}
        subheadline={settings.services.subheadline}
        items={settings.services.items}
      />
      <ValueProposition 
        headline={settings.valueProposition.headline}
        subheadline={settings.valueProposition.subheadline}
        description={settings.valueProposition.description}
        ctaText={settings.valueProposition.ctaText}
      />
      <Testimonials
        headline={settings.testimonialsSection.headline}
        subheadline={settings.testimonialsSection.subheadline}
        testimonials={testimonials}
      />
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
      <Process 
        headline={settings.process.headline}
        subheadline={settings.process.subheadline}
        steps={settings.process.steps}
      />
      <FAQ 
        headline={settings.faq.headline}
        subheadline={settings.faq.subheadline}
        items={settings.faq.items}
      />
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
      <Awards 
        headline={settings.awards.headline}
        subheadline={settings.awards.subheadline}
        imageUrl={settings.awards.imageUrl}
        description={settings.awards.description}
      />
    </main>
  );
}
