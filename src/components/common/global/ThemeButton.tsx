"use client";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import { Sun } from "lucide-react";
import { useState } from "react";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { is_dark_theme } from "@/config/global";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(is_dark_theme);

  const { cursorFocus, cursorDefault } = useCursorContext();

  const toggleHander = () => {
    setIsDark((p) => !p);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={cn(
        "fixed z-30 bg-[#222] backdrop-blur-sm shadow-md size-6 flex justify-center items-center top-1 right-1 cursor-pointer group duration-300 rounded-full",
        "hover:bg-white dark:hover:bg-orange-500"
      )}
      onClick={toggleHander}
      onMouseEnter={cursorFocus}
      onMouseLeave={cursorDefault}
    >
      {isDark ? (
        <Sun
          className="text-orange-500/90 group-hover:text-white group-hover:scale-105 duration-300"
          size={16}
          strokeWidth={2}
        />
      ) : (
        <FAI
          icon={faMoon}
          className="text-white/90 group-hover:text-black group-hover:scale-105 duration-300 w-4 h-4 -rotate-[30deg]"
          strokeWidth={2}
        />
      )}
    </div>
  );
};

export default ThemeButton;
