import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Awards } from "@/components/sections/Awards";
import { getSiteSettings } from "@/lib/payload";

export default async function Home() {
  const settings = await getSiteSettings();

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
