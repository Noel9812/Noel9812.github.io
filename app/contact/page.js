import { Seperator } from "@/components/sections";

import Contact from "@/components/sections/contact";
import AllMedia from "@/components/sections/all-media";

export const metadata = {
  title: "Contact Noel Mathews | Web Developer",
  description:
    "Reach out to Noel Mathews for inquiries, collaborations, or just to say hello!",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Seperator />
      <AllMedia />
    </>
  );
}
