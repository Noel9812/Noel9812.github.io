import { MainTitle, SubTitle } from "../titles";
import { FaArrowRightLong } from "react-icons/fa6";
import { Section, WrapSection } from "../sections";
import { PrimaryText, TertiaryText } from "../texts";
import { ABOUT_ME, CURRENT_WORK, TESTIMONIALS } from "@/utils/data";

import Link from "next/link";
import Image from "next/image";
import AppLink from "../app-link";
import DotsSVG from "../assets/DotsSVG";
import DesignSVG from "../assets/DesignSVG";
import RectangleSVG from "../assets/RectangleSVG";

export default function About({ home = false }) {
  return (
    <Section className="relative overflow-hidden">
      <WrapSection className="grid grid-cols-1 gap-y-4 gap-x-10 md:grid-cols-[3fr_2fr]">
        {home ? (
          <SubTitle line>about-me</SubTitle>
        ) : (
          <MainTitle subText="Who am I?">about-me</MainTitle>
        )}
        <div className="hidden md:block"></div>

        <div className="m-auto flex flex-col gap-8">
          {home
            ? ABOUT_ME.slice(0, 3).map((text, index) => (
                <PrimaryText key={index}>{text}</PrimaryText>
              ))
            : ABOUT_ME.map((text, index) => (
                <PrimaryText key={index}>{text}</PrimaryText>
              ))}

          {home && (
            <AppLink href="about" className="flex items-center gap-4">
              <>
                Read More <FaArrowRightLong />
              </>
            </AppLink>
          )}
        </div>

        <div className="mt-15 mx-auto w-fit h-fit md:h-full md:mt-0">
          <div className="relative grow flex flex-col h-auto min-h-[200px] w-fit min-w-[250px] mx-auto">
            <Image
              src="/images/profile.svg"
              alt="About Me"
              fill={true}
              style={{ objectFit: 'contain' }}
              priority
              className="z-10"
            />

            <DotsSVG className="w-14 h-14 md:w-16 md:h-16 absolute bottom-[20%] right-0 z-10" />
            <DesignSVG className="w-26 h-26 absolute top-0 left-0" />
          </div>

          <div className="w-fit mx-auto border border-tertiary p-2 flex items-center gap-2.5">
            <span className="w-4 h-4 bg-purple"></span>
            <PrimaryText>Currently working on</PrimaryText>
            <TertiaryText>
              <Link
                href={CURRENT_WORK.LINK}
                className="hover:underline font-bold"
              >
                {CURRENT_WORK.WORK}
              </Link>
            </TertiaryText>
          </div>
        </div>
      </WrapSection>

      
      <DotsSVG className="w-20 h-20 absolute bottom-[5%] -right-4 hidden md:block" />

      {home ? (
        <>
          <RectangleSVG className="w-20 h-20 absolute top-[30%] -left-8 hidden md:block" />
        </>
      ) : (
        <>
          <DotsSVG className="w-20 h-20 absolute top-[40%] -left-8 hidden md:block" />
          <RectangleSVG className="w-28 h-28 absolute top-[10%] -right-4 hidden md:block" />
        </>
      )}
    </Section>
  );
}
