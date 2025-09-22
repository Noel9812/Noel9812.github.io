"use client";

import { WrapSection } from "./sections";
import { useState, useEffect } from "react";
import { PROFILE_LINKS } from "@/utils/data";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6";

import Link from "next/link";
import Logo from "./assets/LogoSVG";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const links = [
    { label: "home", path: "/" },
    { label: "works", path: "/projects" },
    { label: "about-me", path: "/about" },
    { label: "contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 flex flex-col justify-center items-center md:px-8 bg-secondary">
      <WrapSection className="pt-8 pb-2 flex items-center justify-between gap-4 w-full">
        <Link href="/" className="text-base font-bold flex items-center gap-2">
          <Logo size={20} />
          Noel
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={` ${isMenuOpen ? "fixed inset-0 top-[72px] z-40 bg-secondary" : "hidden"} md:static md:inset-auto md:top-auto md:z-auto md:ml-auto md:block`}
        >
          <ul
            className={`flex flex-col items-center justify-center gap-8 h-full md:h-auto md:flex-row md:justify-start`}
          >
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li
                  key={`${link.label}-${link.path}`}
                  className="w-full text-center md:w-auto md:text-left"
                >
                  <Link
                    className={`${isActive ? "text-tertiary font-medium border-y-purple" : "border-y-transparent hover:text-tertiary"} w-full py-4 block border-y text-primary hover:font-medium hover:border-y-purple transition-colors duration-200 md:border-t-transparent md:hover:border-t-transparent md:w-auto md:py-2`}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-purple">#</span> {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Side Social Links (Desktop) */}
            <li
              className={`${isMenuOpen ? "block" : "hidden"} w-full mt-24 md:w-auto md:mt-0 md:block md:fixed md:top-0 md:left-1 md:text-primary lg:left-[4%]`}
            >
              <div className="hidden mb-4 h-[30vh] w-[1px] bg-primary rounded-full m-auto md:block"></div>

              <ul className="flex justify-center gap-8 h-fit md:flex-col md:items-center md:justify-start md:gap-3">
                <li className="h-fit">
                  <a
                    href={PROFILE_LINKS.GITHUB.LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-0.5 h-fit flex items-center justify-center transition-all duration-100 ease-in-out transform hover:text-tertiary hover:scale-110 hover:-translate-y-1 md:hover:translate-x-1"
                    title="My GitHub Profile"
                    aria-label="My GitHub Profile"
                  >
                    <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
                  </a>
                </li>

                <li className="h-fit">
                  <a
                    href={PROFILE_LINKS.LINKEDIN.LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-0.5 h-fit flex items-center justify-center transition-all duration-100 ease-in-out transform hover:text-tertiary hover:scale-110 hover:-translate-y-1 md:hover:translate-x-1"
                    title="My LinkedIn Profile"
                    aria-label="My LinkedIn Profile"
                  >
                    <FaLinkedinIn className="h-6 w-6 md:h-8 md:w-8" />
                  </a>
                </li>

                <li className="h-fit">
                  <a
                    href={`mailto:${PROFILE_LINKS.EMAIL.LINK}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-0.5 h-fit flex items-center justify-center transition-all duration-100 ease-in-out transform hover:text-tertiary hover:scale-110 hover:-translate-y-1 md:hover:translate-x-1"
                    title="Email me"
                    aria-label="Email me"
                  >
                    <FaEnvelope className="h-6 w-6 md:h-8 md:w-8" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </WrapSection>
    </header>
  );
};

export default Header;
