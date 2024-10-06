"use client";
import { cn } from "@/lib/utils";
import { bgMap, colorMap, ColorType } from "@/shared";
import { LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

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
    <div className="flex items-end group" ref={funFactRef}>
      <div className="relative size-14">
        <div
          className={cn(
            hexagon,
            "absolute size-full flex items-center justify-center rounded-sm text-white duration-2000",
            animate ? "rotate-180" : "",
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
        <span className={cn("text-xl font-[600]", colorMap[color])}>
          {animate ? <CountUp startVal={0} end={count} /> : 0}
        </span>
        <h3 className="dark:text-[#ddd] capitalize text-nowrap font-[500]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Funfact;
