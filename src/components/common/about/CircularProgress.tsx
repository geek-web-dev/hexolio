"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { bgHexMap, colorHexMap, colorMap, ColorType } from "@/shared";
import { useInView } from "react-intersection-observer";

type CircularProgressProps = {
  title: string;
  value: number;
  color: ColorType;
  size?: number;
  pathWidth?: number;
};

const CircularProgress = ({
  title,
  value,
  color,
  size = 122,
  pathWidth = 8,
}: CircularProgressProps) => {
  if (size > 140) size = 140;
  else if (size < 100) size = 100;

  if (value > 100) value = 100;
  else if (value < 0) value = 0;

  const [counter, setCounter] = useState(0);
  const [done, setDone] = useState(false);
  const { ref: progressRef, inView: animate } = useInView();

  const startCount = () => {
    setDone(true);
    const interval = setInterval(() => {
      setCounter((p) => {
        const newCounter = p + 1;
        if (newCounter === value) {
          clearInterval(interval);
        }
        return newCounter;
      });
    }, 2000 / value);
  };

  useEffect(() => {
    if (animate && !done) {
      startCount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, done]);

  return (
    <div ref={progressRef}>
      <div
        className="rounded-full flex justify-center items-center duration-1000 transition-colors"
        style={{
          background: `conic-gradient(${colorHexMap[color]} ${
            counter * 3.6
          }deg, ${bgHexMap[color]} 0deg)`,
          width: size,
          height: size,
        }}
      >
        <div
          className={cn("absolute rounded-full ", "bg-[--pure-background]")}
          style={{
            width: `calc(${size}px - ${pathWidth}px)`,
            height: `calc(${size}px - ${pathWidth}px)`,
          }}
        />

        <p className="relative m-0 text-center font-semibold flex flex-col gap-1">
          <span className="text-[--paragraph] text-sm">{title}</span>
          <span className={cn("percentage text-md", colorMap[color])}>
            {counter}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;
