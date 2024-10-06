"use client";
import Link from "next/link";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { social_links } from "@/config/global";
import { cn } from "@/lib/utils";
import { colorHoverMap, ColorType, pureBgMap } from "@/shared";
import { useCursorContext } from "@/context/CursorContext";

import styles from "@/app/styles.module.css";
const { hexagon } = styles;

const SocialLinks = () => {
  const { cursorFocus, cursorDefault } = useCursorContext();
  return (
    <div className="flex flex-wrap gap-2 rounded-l-sm ml-2 mt-2">
      {social_links.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          target="_blank"
          className={cn(
            hexagon,
            "group size-8 flex items-center justify-center text-white hover:bg-white duration-300",
            item.color === "black"
              ? "bg-[#222]"
              : pureBgMap[item.color as ColorType],
            colorHoverMap[item.color as ColorType],
            item.color === "black" ? "dark:hover:text-black" : ""
          )}
          onMouseEnter={cursorFocus}
          onMouseLeave={cursorDefault}
        >
          <FAI
            icon={item.Icon}
            className="group-hover:scale-110 text-inherit size-[16px]"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
