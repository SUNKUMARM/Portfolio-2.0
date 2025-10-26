import { CursorParticles } from "@/components/CursorParticles";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CursorParticles />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
