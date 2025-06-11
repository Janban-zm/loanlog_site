"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface LinkItem {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: LinkItem[];
  logoSrc: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, logoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Scroll listener to toggle navbar background
    const handleScroll = () => {
      if (isDesktop) {
        setIsScrolled(window.scrollY > 20);
      }
    };

    // Resize listener to handle dropdown reversion on desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
        setIsOpen(false); // Ensure dropdown closes in desktop mode
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  return (
    <div
      className={`${
        isScrolled ? "fixed top-0 left-0 right-0 z-50" : "absolute z-50"
      } w-full transition-all duration-300 ${
        isScrolled ? "bg-blue-300" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between py-4 px-8 lg:px-40">
        {/* Logo */}
        <Link href={links[0]?.href || "/frontend/public"}>
          <div className="flex items-center cursor-pointer">
            <Image
              src={logoSrc}
              alt="Logo"
              width={40}
              height={40}
              className="shadow-md"
            />
            <h2
              className={`ml-2 text-lg font-extrabold hidden lg:block  ${
                isScrolled ? "text-white" : "text-blue-950"
              } `}
            >
              {"loanlytix"}
            </h2>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        {!isDesktop && (
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 z-50"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className={`w-6 h-6 text-white hover:text-sky-500`} />
            ) : (
              <FiMenu className={`w-6 h-6 text-white hover:text-sky-500`} />
            )}
          </button>
        )}

        {/* Desktop Links */}
        <div className={`hidden lg:flex space-x-1`}>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <Button
                variant="link"
                className={`${
                  isScrolled ? "text-white" : "text-black"
                } hover:text-blue-400 active:text-gray-500 text-xs`}
              >
                {" "}
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        {!isDesktop && isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 70, damping: 12 }}
            className="fixed top-16 left-0 w-full h-screen bg-white z-40 flex flex-col text-gray-800  items-center p-6 space-y-4 "
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-lg hover:bg-zinc-400 active:bg-zinc-400"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
