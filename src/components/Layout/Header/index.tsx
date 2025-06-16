"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";

const sectionIds = ["home", "about-section", "menu", "gallery", "contact"];

const Header: React.FC = () => {
  const { theme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => setSticky(window.scrollY >= 20);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "bg-white shadow-lg dark:bg-gray-600 py-4"
          : "bg-black/40 backdrop-blur-md py-6"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto max-w-screen-xl flex items-center justify-between px-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink
                key={index}
                item={item}
                sticky={sticky}
                activeSection={activeSection}
              />
            ))}
          </nav>

          {/* Right-side icons */}
          <div className="flex items-center gap-4">
            <Link
              href="tel:0451558600"
              className={`text-sm sm:text-base font-medium flex items-center gap-2 transition-colors duration-300 ${
                sticky
                  ? "text-charcoal hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              <Icon icon="solar:phone-bold" className="text-xl text-primary" />
              +(61)451558600
            </Link>

            <Link
              href="#menu-section"
              className="hidden lg:block text-primary bg-primary/15 hover:text-white hover:bg-primary font-medium text-lg py-4 px-8 rounded-full"
            >
              Order Now
            </Link>

            {/* Hamburger Icon */}
            <button
              onClick={() => setNavbarOpen(true)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Open mobile menu"
            >
              <span className={`block w-6 h-0.5 mb-1 ${sticky ? "bg-black" : "bg-white"}`} />
              <span className={`block w-6 h-0.5 mb-1 ${sticky ? "bg-black" : "bg-white"}`} />
              <span className={`block w-6 h-0.5 ${sticky ? "bg-black" : "bg-white"}`} />
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ clipPath: "circle(0% at 100% 0%)" }}
              animate={{ clipPath: "circle(150% at 50% 50%)" }}
              exit={{ clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 w-screen h-screen bg-white dark:bg-charcoal text-black dark:text-offwhite z-50 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setNavbarOpen(false)}
                className="absolute top-6 right-6 text-3xl z-50 text-black dark:text-white"
                aria-label="Close menu"
              >
                <Icon icon="line-md:close" />
              </button>

              {/* Centered & Animated Menu */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.6,
                    },
                  },
                }}
                className="flex flex-col justify-center items-center h-full px-4 text-center"
              >
                <ul className="flex flex-col gap-6 sm:gap-8 text-lg sm:text-xl font-semibold">
                  {headerData.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <MobileHeaderLink item={item} />
                    </motion.li>
                  ))}
                </ul>

                {/* Order Now CTA */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-8"
                >
                  <Link
                    href="#menu-section"
                    onClick={() => setNavbarOpen(false)}
                    className="inline-block text-sm sm:text-base text-primary border border-primary px-5 sm:px-6 py-2 rounded-full hover:bg-primary hover:text-black transition"
                  >
                    Order Now
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
