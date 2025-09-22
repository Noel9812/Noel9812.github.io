import { Seperator } from "@/components/sections";

import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FunFacts from "@/components/sections/fun-facts";
import Testimonials from "@/components/sections/testimonials";

export const metadata = {
  title: "About Noel Mathews | Web Developer",
  description:
    "Learn about Noel Mathews's journey, skills, and experience as a Web Developer.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Seperator />
      <Skills />
      <Seperator />
      <Testimonials />
      <Seperator />
      <FunFacts />
    </>
  );
}
