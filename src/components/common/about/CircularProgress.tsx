"use client";
import { cn } from "@/lib/utils";
import { bgHexMap, colorHexMap, colorMap, ColorType } from "@/shared";
import { useInView } from "react-intersection-observer";

const CircularProgress = ({
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
    <div
      ref={progressRef}
      className={cn("duration-1000", animate ? "opacity-100" : "opacity-0")}
    >
      <div
        className="rounded-full flex justify-center items-center transition-colors size-[122px]"
        style={{
          background: `conic-gradient(${colorHexMap[color]} ${value}%, ${bgHexMap[color]} 0%)`,
        }}
      >
        <div
          className={
            "absolute rounded-full bg-[--pure-background] size-[114px]"
          }
        />

        <p className="relative m-0 text-center font-semibold flex flex-col gap-1">
          <span className="text-[--paragraph] text-sm">{title}</span>
          <span className={cn("percentage text-md", colorMap[color])}>
            {value}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;
