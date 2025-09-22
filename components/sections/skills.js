import { SubTitle } from "../titles";
import { SKILLS } from "@/utils/data";
import { Section, WrapSection } from "../sections";

import SkillCard from "../skill-card";
import DotsSVG from "../assets/DotsSVG";
import DesignSVG from "../assets/DesignSVG";
import RectangleSVG from "../assets/RectangleSVG";

export default function Skills({ home = false }) {
  return (
    <Section>
      <WrapSection>
        <div
          className={`grid grid-cols-1 gap-y-4 gap-x-10 ${home ? "md:grid-cols-[3fr_4fr]" : ""}`}
        >
          <SubTitle line={home}>skills</SubTitle>
          {home && (
            <>
              <div className="hidden md:block"></div>

              <div className="relative hidden w-full h-[282px] md:block">
                <DotsSVG className="absolute top-[10%] left-0 w-18 h-18" />
                <DotsSVG className="absolute top-[40%] left-[40%] w-14 h-14" />

                <DesignSVG className="absolute bottom-0 left-0 w-38 h-38" />

                <RectangleSVG className="absolute top-0 right-[15%] w-24 h-24" />
                <RectangleSVG className="absolute bottom-[15%] right-[5%] w-16 h-16" />
              </div>
            </>
          )}

          <div
            className={`mt-0 grid grid-cols-2 gap-3 sm:grid-cols-3 ${home ? "" : "md:grid-cols-4 lg:grid-cols-5"}`}
          >
            <SkillCard title="Languages" skills={SKILLS.LANGUAGES} />
            <SkillCard title="Frameworks" skills={SKILLS.FRAMEWORKS} />
            <SkillCard title="Tools" skills={SKILLS.TOOLS} />
            {home && <div className="hidden sm:block"></div>}
            <SkillCard title="Database" skills={SKILLS.DATABASE} />
            <SkillCard title="Others" skills={SKILLS.OTHERS} />
          </div>
        </div>
      </WrapSection>
    </Section>
  );
}
