import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { getSiteSettings } from "@/lib/cms";

export const revalidate = 60;

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <main>
      <About
        headline={settings.about.headline}
        headlineAccent={settings.about.headlineAccent}
        imageUrl={settings.about.imageUrl}
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
    </main>
  );
}
