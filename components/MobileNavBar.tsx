"use client";

import Link from "next/link";
import { MouseEvent } from "react";
import { usePathname } from "next/navigation";

import { navBarLinks } from "@/constants";
import ThemeSwitcher from "./ThemeSwitcher";

const MobileNavBar = ({
  setIsMobileMenuOpen,
}: {
  setIsMobileMenuOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <aside
      className="bg-white_darkBG-1 fixed right-0 top-[4.375rem] z-10 flex h-screen w-full max-w-[16.375rem] items-center p-3"
      onClick={handleClick}
    >
      <div className="flex w-full flex-col gap-9">
        <div className="flex flex-col">
          {navBarLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`rounded px-4 py-3 ${isActive ? "bg-natural-1_darkBG-3 semibold-16 text-primary" : "text-natural-6_natural-7"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="ml-4 flex">
          <ThemeSwitcher />
        </div>
      </div>
    </aside>
  );
};

export default MobileNavBar;
