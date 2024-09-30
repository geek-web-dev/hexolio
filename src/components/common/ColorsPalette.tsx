"use client";
import { main_color } from "@/config/global";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import { colors, ColorType, hexMap, pureBgMap } from "@/shared";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "../../app/styles.module.css";
const { hexagon } = styles;

const ColorsPalette = () => {
  const [activeColor, setActiveColor] = useState(0);
  const [activePalette, setActivePalette] = useState(false);

  const { cursorFocus, cursorDefault } = useCursorContext();

  useEffect(() => {
    setActiveColor(colors.indexOf(main_color));
    document.documentElement.style.setProperty(
      "--main",
      hexMap[main_color as ColorType]
    );
  }, []);

  return (
    <>
      <div
        className={cn(
          hexagon,
          "rounded-l-md fixed z-[75] bg-[--main] hover:bg-[--background] shadow-md w-6 h-6 flex justify-center items-center top-8 right-1 cursor-pointer group duration-300 select-none",
          activePalette ? "bg-white dark:bg-[#222]" : ""
        )}
        onClick={() => setActivePalette((p) => !p)}
      >
        <Palette
          size={16}
          strokeWidth={1.5}
          className={cn(
            "text-white group-hover:text-[--main] group-hover:scale-105 duration-75",
            activePalette ? "text-[--main]" : ""
          )}
          onMouseEnter={cursorFocus}
          onMouseLeave={cursorDefault}
        />
      </div>
      <div
        className={cn(
          "fixed w-6 bg-[--background] top-16  rounded-sm shadow-md flex flex-col py-1 gap-1 items-center duration-300 z-40 select-none",
          activePalette ? "right-1" : "-right-7"
        )}
      >
        {colors.map((c, i) => (
          <div
            key={i}
            className={cn(
              pureBgMap[c as ColorType],
              "w-4 h-4 rounded-sm hover:scale-95 duration-150 text-white flex justify-center items-center",
              activeColor === i ? "pointer-events-none" : "cursor-pointer"
            )}
            onClick={() => {
              setActiveColor(i);
              document.documentElement.style.setProperty(
                "--main",
                hexMap[c as ColorType]
              );
            }}
            onMouseEnter={cursorFocus}
            onMouseLeave={cursorDefault}
          >
            {activeColor === i ? "✓" : ""}
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorsPalette;
