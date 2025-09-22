import { ProjectCard } from "../project-card";
import { MainTitle, SubTitle } from "../titles";
import { FEATURED_PROJECTS } from "@/utils/data";
import { Section, WrapSection } from "../sections";

import Link from "next/link";
import AppLink from "../app-link";
import DotsSVG from "../assets/DotsSVG";
import RectangleSVG from "../assets/RectangleSVG";

const Projects = ({ home = false }) => {
  return (
    <Section className="relative overflow-hidden">
      <WrapSection >
        {home ? (
          <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-y-4 gap-x-10">
            <SubTitle line>projects</SubTitle>

            <Link href="projects" className="ml-auto hover:underline hover:text-purple hidden md:inline">
              {`${'View all ~~>'}`}
            </Link>
          </div>
        ) : (
          <div>
            <MainTitle subText="List of my projects">my-projects</MainTitle>

            <SubTitle>projects</SubTitle>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_PROJECTS.slice(0, home ? 3 : FEATURED_PROJECTS.length).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {home && (
          <div className="mt-10 md:hidden">
            <AppLink href="projects" className="ml-auto hover:underline hover:text-purple">
              {`${'View all ~~>'}`}
            </AppLink>
          </div>
        )}
      </WrapSection>

      <DotsSVG className="w-20 h-20 absolute top-[5%] -left-14 hidden md:block" />
      <RectangleSVG className="w-20 h-20 absolute top-[30%] -right-8 hidden md:block" />
    </Section>
  );
}

export default Projects;
