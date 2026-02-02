import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { ParticlesBackground } from "@/components/particles-background";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
