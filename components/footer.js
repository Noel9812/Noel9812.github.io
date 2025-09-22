import Logo from "./assets/LogoSVG";
import { WrapSection } from "./sections";
import { PROFILE_LINKS } from "@/utils/data";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-auto p-4 flex flex-col justify-center items-center border-t-1 border-t-primary text-primary text-base animate-fade-up animate-ease-in-out md:p-8">
      <WrapSection className="mt-7 mb-26 flex flex-col items-center justify-center gap-14">
        <div className="w-full flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h6 className="text-tertiary flex items-center gap-1">
                <Logo size={20} />
                Noel
              </h6>

              <a
                href={`mailto:${PROFILE_LINKS.EMAIL.LINK}`}
                className="hover:underline hover:text-tertiary"
              >
                {PROFILE_LINKS.EMAIL.LINK}
              </a>
            </div>

            <p className="text-tertiary">
              Web developer based in India
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-tertiary text-xl">Media</h6>

            <ul className="h-fit flex items-center gap-2 ">
              <li className="h-fit">
                <a
                  href={PROFILE_LINKS.GITHUB.LINK}
                  target="_blank"
                  className="p-0.5 h-fit flex items-center justify-center  transition-all duration-100 ease-in-out transform hover:text-tertiary hover:scale-110 hover:-translate-y-1"
                  title="My GitHub Profile"
                  aria-label="My GitHub Profile"
                  aria-describedby="github-profile-link"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </li>

              <li className="h-fit">
                <a
                  href={PROFILE_LINKS.LINKEDIN.LINK}
                  target="_blank"
                  className="p-0.5 h-fit flex items-center justify-center  transition-all duration-100 ease-in-out transform hover:text-tertiary hover:scale-110 hover:-translate-y-1"
                  title="My LinkedIn Profile"
                  aria-label="My LinkedIn Profile"
                  aria-describedby="linkedin-profile-link"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </li>

              <li className="h-fit">
                <a
                  href={PROFILE_LINKS.TWITTER.LINK}
                  target="_blank"
                  className="p-0.5 h-fit flex items-center justify-center  transition-all duration-100 ease-in-out transform hover:text-tertiary hover:scale-110 hover:-translate-y-1"
                  title="My X(Twitter) Profile"
                  aria-label="My X(Twitter) Profile"
                  aria-describedby="x-twitter-profile-link"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; Copyright {new Date().getFullYear()}, Noel Mathews</p>
      </WrapSection>
    </footer>
  );
};

export default Footer;