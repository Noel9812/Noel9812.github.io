import { Seperator } from "@/components/sections";
//import AIProjects from "@/components/sections/ai-projects";
import Projects from "@/components/sections/completed-projects";
//import OtherProjects from "@/components/sections/other-projects";
//import UtilProjects from "@/components/sections/util-projects";

export const metadata = {
  title: "Noel Mathews Projects | Web Developer",
  description: "Discover Noel Mathews's projects, showcasing his expertise in software engineering and web development.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <Seperator />
      
      <Seperator />
      
      <Seperator />
      
    </>
  );
}

/*
<AIProjects />
<UtilProjects />
<OtherProjects/>
*/