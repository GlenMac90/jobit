"use client";

import Image from "next/image";

import { useTheme } from "@/context/ThemeProvider";
import { sun, moon } from "@/public";

const ThemeSwitcher = () => {
  const { mode, setMode } = useTheme();

  const setTheme = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.theme = "dark";
    } else {
      setMode("light");
      localStorage.theme = "light";
    }
  };

  const buttonPosition = mode === "dark" && "translate-x-5";

  return (
    <div className="flex items-center gap-3">
      <Image
        src={sun}
        height={24}
        width={24}
        alt="Image of the sun, representing the light mode setting of the application"
      />
      <button
        className="bg-natural-2_darkBG-3 relative flex h-6 w-11 items-center rounded-full p-0.5"
        onClick={setTheme}
      >
        <div
          className={`absolute size-5 rounded-full bg-primary transition duration-300 ${buttonPosition}`}
        />
      </button>
      <Image
        src={moon}
        height={24}
        width={24}
        alt="Image of the moon, representing the dark mode setting of the application"
      />
    </div>
  );
};

export default ThemeSwitcher;
