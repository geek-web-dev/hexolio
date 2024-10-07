"use client";
import { bgMap, colorMap, ColorType, pureBgMap } from "@/shared";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const LinearProgress1 = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: ColorType;
}) => {
  const { ref: progressRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={progressRef}>
      <div className="flex justify-between items-center text-sm mb-3 font-semibold">
        <h3 className="text-[--paragraph]">{title}</h3>
        <span className={cn(colorMap[color], "font-mono")}>{value}%</span>
      </div>
      <div
        className={cn(
          "w-full rounded-e-sm relative overflow-hidden h-1.5",
          bgMap[color]
        )}
      >
        <div
          className={cn(
            "absolute h-full rounded-e-sm duration-1000 ease-in-out origin-left",
            animate ? "scale-x-100" : "scale-x-0",
            pureBgMap[color]
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default LinearProgress1;
