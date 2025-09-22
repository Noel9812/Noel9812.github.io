import { Section, WrapSection, Seperator } from "@/components/sections";

import Header from "@/components/header";
import Hello from "@/components/sections/hello";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/completed-projects";

export default function Home() {
  return (
    <>
      <Hello />
      <Seperator />
      <Projects home />
      <Seperator />
      <Skills home />
      <Seperator />
      <About home />
      <Seperator />
      <Contact home />
    </>
  );
}
