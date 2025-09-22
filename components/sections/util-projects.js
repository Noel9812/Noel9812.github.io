/*import { UTIL_PROJECTS } from "@/utils/data";
import { ProjectCard } from "../project-card";
import { MainTitle, SubTitle } from "../titles";
import { Section, WrapSection } from "../sections";

import Link from "next/link";
import DotsSVG from "../assets/DotsSVG";
import RectangleSVG from "../assets/RectangleSVG";

const UtilProjects = () => {
  return (
    <Section className="relative overflow-hidden">
      <WrapSection >
        <SubTitle line>util-projects</SubTitle>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {UTIL_PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} image={false} lineClamp="5" />
          ))}
        </div>
      </WrapSection>

      <DotsSVG className="w-20 h-20 absolute top-[40%] -left-8 hidden md:block" />
      <RectangleSVG className="w-18 h-18 absolute top-[10%] -right-4 hidden md:block" />
    </Section>
  );
}

export default UtilProjects;
*/