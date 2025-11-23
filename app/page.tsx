import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Awards } from "@/components/sections/Awards";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ValueProposition />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Awards />
    </main>
  );
}
