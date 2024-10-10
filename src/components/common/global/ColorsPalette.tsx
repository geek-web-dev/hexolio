"use client";
import { main_color } from "@/config/global";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import { colors, ColorType, hexMap, pureBgMap } from "@/shared";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

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
          "fixed z-30 bg-[#222] hover:bg-[--main] size-6 flex justify-center items-center top-8 right-1 cursor-pointer group duration-300 select-none rounded-full",
          activePalette ? "bg-[--main]" : ""
        )}
        onClick={() => setActivePalette((p) => !p)}
      >
        <Palette
          size={16}
          strokeWidth={1.5}
          className={cn(
            "text-white group-hover:text-white group-hover:scale-105 duration-75",
            activePalette ? "text-white" : ""
          )}
          onMouseEnter={cursorFocus}
          onMouseLeave={cursorDefault}
        />
      </div>
      <div
        className={cn(
          "fixed right-0 top-16 w-6 bg-white dark:bg-[#222] flex flex-col py-1 gap-1 items-center duration-300 z-30 select-none rounded-full",
          activePalette ? " -translate-x-1" : "translate-x-[100%]"
        )}
      >
        {colors.map((c, i) => (
          <div
            key={i}
            className={cn(
              pureBgMap[c as ColorType],
              "size-4 hover:scale-95 duration-150 text-white text-sm flex justify-center items-center rounded-full",
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
