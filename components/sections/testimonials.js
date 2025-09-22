import { SubTitle } from "../titles";
import { TESTIMONIALS } from "@/utils/data";
import { Section, WrapSection } from "../sections";

import DotsSVG from "../assets/DotsSVG";
import RectangleSVG from "../assets/RectangleSVG";
import Carousel from "../carousel";
import Image from 'next/image';

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

export const TestimonialCard = ({ image, quote, name, title }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border border-primary/10 rounded-lg">
      <div className="relative w-16 h-16"> {/* Added relative positioning */}
        <Image
          src={image}
          alt={`${name}'s profile`}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <p className="text-primary/80">{quote}</p>
      <div>
        <h4 className="text-tertiary font-medium">{name}</h4>
        <p className="text-primary/60 text-sm">{title}</p>
      </div>
    </div>
  );
};
