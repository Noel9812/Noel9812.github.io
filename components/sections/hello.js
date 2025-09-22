import { ORIENTATION } from "@/utils/contants";
import { Section, WrapSection } from "../sections";
import { PurpleText, PrimaryText } from "../texts";
import { TESTIMONIALS, SUMMARY } from "@/utils/data";

import Link from "next/link";
import AppLink from "../app-link";
import Carousel from "../carousel";
import QuoteCarousel from "../quote-carousel";
import RectangleSVG from "../assets/RectangleSVG";

export default function Hello() {
  return (
    <Section className="relative overflow-hidden">
      <WrapSection className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="m-auto flex flex-col gap-4">
            <h1 className="text-[32px] font-bold">
              Noel is a <PurpleText>web developer</PurpleText> {" "}
            </h1>
            <PrimaryText>{SUMMARY}</PrimaryText>
            <AppLink href="contact">Contact me!!</AppLink>
          </div>

          <div>
            <Carousel
              testimonials={TESTIMONIALS}
              orientation={ORIENTATION.VERTICAL}
            />
          </div>
        </div>

        <QuoteCarousel />
      </WrapSection>

      <RectangleSVG className="w-20 h-20 absolute bottom-[5%] -right-8 hidden md:block" />
    </Section>
  );
}
