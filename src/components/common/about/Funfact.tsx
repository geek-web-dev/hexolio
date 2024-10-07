"use client";
import { cn } from "@/lib/utils";
import { bgMap, colorMap, ColorType } from "@/shared";
import { LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";

import styles from "@/app/styles.module.css";
const { hexagon, centeredAbsolute } = styles;

const Funfact = ({
  title,
  Icon,
  count,
  color,
}: {
  title: string;
  Icon: LucideIcon;
  count: number;
  color: ColorType;
}) => {
  const { ref: funFactRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        "flex items-end duration-1000",
        animate ? "opacity-100" : "opacity-0"
      )}
      ref={funFactRef}
    >
      <div className="relative size-14">
        <div
          className={cn(
            hexagon,
            "absolute size-full flex items-center justify-center text-white",
            bgMap[color]
          )}
        >
          <div
            className={cn(
              "size-10 rounded-full blur-md",
              centeredAbsolute,
              bgMap[color]
            )}
          />
        </div>
        <Icon
          strokeWidth={1}
          size={28}
          className={cn(colorMap[color], centeredAbsolute)}
        />
      </div>
      <div className="ml-2">
        <span className={cn("text-xl font-[600] font-mono", colorMap[color])}>
          {count}
        </span>
        <h3 className="dark:text-[#ddd] capitalize text-nowrap font-[500]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Funfact;
