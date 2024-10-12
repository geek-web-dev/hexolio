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
        "flex items-center duration-1000 gap-4",
        animate ? "opacity-100" : "opacity-0"
      )}
      ref={funFactRef}
    >
      <div className="relative size-16">
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
          size={32}
          className={cn(colorMap[color], centeredAbsolute)}
        />
      </div>
      <div className="space-y-2 leading-none">
        <span
          className={cn(
            "text-xl font-[600] font-mono leading-none",
            colorMap[color]
          )}
        >
          {count}
        </span>
        <h3 className="text-[--sub-text] capitalize text-nowrap font-[500]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Funfact;
