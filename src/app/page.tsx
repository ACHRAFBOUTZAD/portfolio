import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { VelocityMarquee } from "@/components/animations/VelocityMarquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <VelocityMarquee text="Software Engineer · DevOps · Real-time Systems · IoT" />
        <About />
        <Skills />
        <Projects />
        <VelocityMarquee text="Let's build · Ship fast · Scale smart" baseVelocity={-3} />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
