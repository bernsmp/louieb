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

// Revalidate every 60 seconds — picks up CMS changes without blocking every request
export const revalidate = 60;

/** Strip HTML tags from CMS rich-text so schema.org receives plain text */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Louie Bernstein",
  "jobTitle": "Fractional Sales Leader",
  "url": "https://louiebernstein.com",
  "email": "Louie@LouieBernstein.com",
  "sameAs": [
    "https://www.linkedin.com/in/sales-processes/",
    "https://www.youtube.com/playlist?list=PL7HfhnqHyzRmGDUMDhcSgZW8pR7DhW_Hl",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Louie Bernstein",
  "url": "https://louiebernstein.com",
  "description": "Fractional Sales Leader for $1M–$10M ARR companies. INC 500 Founder with 9+ years helping technical founders build repeatable sales systems.",
};

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://louiebernstein.com',
    },
  };
}

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

  // Build FAQPage schema dynamically from Supabase so all questions are indexed
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (settings.faq.items ?? []).map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripHtml(item.answer),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
          imageUrl={settings.about.imageUrl as string | undefined}
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
