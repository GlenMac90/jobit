"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";

import JobItLogo from "./JobItLogo";
import { navBarLinks } from "@/constants";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileNavBar from "./MobileNavBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="bg-white_darkBG-1 flex-center fixed top-0 z-50 flex h-[4.375rem] w-screen border-b-natural-5 px-6 dark:border-b-darkBG-3">
        <div className="flex size-full max-w-[80rem] items-center justify-between">
          <JobItLogo className="hidden sm:flex" />
          <div className="hidden h-full gap-[1.875rem] sm:flex">
            {navBarLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  href={link.path}
                  key={link.name}
                  className={`flex h-full items-center border-b-green-500 ${isActive ? "medium-16 border-b border-b-primary text-primary " : "regular-16 text-natural-6"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {isMobileMenuOpen ? (
            <JobItLogo />
          ) : (
            <button
              className="flex sm:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Image
                src="/menu-button.svg"
                height={24}
                width={24}
                alt="Button to open the mobile navigation bar"
              />
            </button>
          )}

          {isMobileMenuOpen ? (
            <button
              className="text-xl text-natural-8 dark:text-natural-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <IoMdClose />
            </button>
          ) : (
            <ThemeSwitcher />
          )}
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed z-40 h-screen w-full bg-black/50 dark:bg-white/10"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <MobileNavBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
