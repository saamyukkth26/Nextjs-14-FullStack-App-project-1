import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Projects } from "@/components/Projects/Projects";
import { Education } from "@/components/Education/Education";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
