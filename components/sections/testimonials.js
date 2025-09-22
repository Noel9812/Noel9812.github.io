import { SubTitle } from "../titles";
import { TESTIMONIALS } from "@/utils/data";
import { Section, WrapSection } from "../sections";

import DotsSVG from "../assets/DotsSVG";
import RectangleSVG from "../assets/RectangleSVG";
import Carousel from "../carousel";

export default function Testimonials() {
  return (
    <Section>
      <WrapSection>
        <SubTitle className="mb-4">testimonials</SubTitle>

        <div className="mt-10">
          <Carousel testimonials={TESTIMONIALS} />
        </div>
      </WrapSection>

      <DotsSVG className="w-20 h-20 absolute bottom-[5%] -right-4 hidden md:block" />
      <RectangleSVG className="w-30 h-30 absolute top-[30%] -left-8 hidden md:block" />
    </Section>
  );
}
