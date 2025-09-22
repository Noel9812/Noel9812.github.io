import { PrimaryText } from "../texts";
import { CONTACT_INFO } from "@/utils/data";
import { ContactForm } from "../contact-form";
import { MainTitle, SubTitle } from "../titles";
import { Section, WrapSection } from "../sections";
import {
  FaLinkedinIn,
  FaArrowRightLong,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

import Link from "next/link";
import AppLink from "../app-link";
import SkillCard from "../skill-card";
import DotsSVG from "../assets/DotsSVG";
import DesignSVG from "../assets/DesignSVG";
import RectangleSVG from "../assets/RectangleSVG";

export default function Contact({ home = false }) {
  return (
    <Section className="relative overflow-hidden">
      <WrapSection className="grid grid-cols-1 gap-y-4 gap-x-10 md:grid-cols-[2fr_3fr]">
        {home ? (
          <SubTitle line>contacts</SubTitle>
        ) : (
          <MainTitle subText="Want to reach out?">contacts</MainTitle>
        )}
        <div className="hidden md:block"></div>

        <div className="mb-auto flex flex-col gap-8">
          {CONTACT_INFO.NOTE.map((text, index) => (
            <PrimaryText key={index}>{text}</PrimaryText>
          ))}

          {home && (
            <AppLink href="contact" className="flex items-center gap-4">
              <>
                Reach out <FaArrowRightLong />
              </>
            </AppLink>
          )}
        </div>

        <div className={`mt-0 grid grid-cols-1 gap-3 md:grid-cols-2`}>
          {/* <div className="hidden md:block"></div> */}

          <div className="relative hidden w-full h-[282px] md:block">
            <DotsSVG className="absolute top-[5%] left-[19%] w-18 h-18" />
            {/* <DotsSVG className="absolute top-[40%] left-[40%] w-14 h-14" /> */}

            <DesignSVG className="absolute bottom-0 right-0 w-38 h-38" />

            <RectangleSVG className="absolute top-0 left-[15%] w-24 h-24" />
            {/* <RectangleSVG className="absolute bottom-[15%] right-[5%] w-16 h-16" /> */}
          </div>

          <div className="mt-5 md:mt-0">
            <SkillCard
              title="Message me"
              skills={[
                <Link
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  key={CONTACT_INFO.EMAIL}
                  className="flex items-center gap-3 py-2 px-3 hover:underline"
                >
                  <FaEnvelope className="text-2xl" />
                  {CONTACT_INFO.EMAIL}
                </Link>,
                <Link
                  href={`tel:${CONTACT_INFO.PHONE}`}
                  key={CONTACT_INFO.PHONE}
                  className="flex items-center gap-3 py-2 px-3 hover:underline"
                >
                  <FaPhone className="text-2xl" />
                  {CONTACT_INFO.PHONE}
                </Link>,
                <Link
                  href={`https://www.linkedin.com/in/${CONTACT_INFO.LINKEDIN}`}
                  key={CONTACT_INFO.LINKEDIN}
                  className="flex items-center gap-3 py-2 px-3 hover:underline"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-2xl" />
                  @NoelMathews
                </Link>,
              ]}
              block
            />
          </div>
        </div>

        {!home && <ContactForm />}
      </WrapSection>

      <DotsSVG className="w-20 h-20 absolute bottom-[5%] -left-14 hidden md:block" />

      {home ? (
        <>
          <RectangleSVG className="w-20 h-20 absolute top-[30%] -left-8 hidden md:block" />
        </>
      ) : (
        <>
          <DotsSVG className="w-20 h-20 absolute top-[40%] -left-8 hidden md:block" />
          <RectangleSVG className="w-18 h-18 absolute top-[10%] -right-4 hidden md:block" />
        </>
      )}
    </Section>
  );
}
