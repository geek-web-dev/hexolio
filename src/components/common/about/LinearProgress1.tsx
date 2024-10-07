"use client";
import { useEffect, useState } from "react";
import { bgMap, colorMap, ColorType, pureBgMap } from "@/shared";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

type LinearProgressProps = {
  title: string;
  value: number;
  color: ColorType;
  pathWidth?: number;
};

const LinearProgress1 = ({
  title,
  value,
  color,
  pathWidth = 6,
}: LinearProgressProps) => {
  if (value > 100) value = 100;
  else if (value < 0) value = 0;

  const [counter, setCounter] = useState(0);
  const [done, setDone] = useState(false);
  const { ref: progressRef, inView: animate } = useInView({
    triggerOnce: true,
  });

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
    if (animate && !done) startCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, done]);

  return (
    <div ref={progressRef}>
      <div className="flex justify-between items-center text-sm mb-3 font-semibold">
        <h3 className="text-[--paragraph]">{title}</h3>
        <span className={colorMap[color]}>{counter}%</span>
      </div>
      <div
        className={cn(
          "w-full rounded-e-sm relative overflow-hidden",
          bgMap[color]
        )}
        style={{ height: pathWidth }}
      >
        <div
          className={cn(
            "absolute h-full rounded-e-sm duration-2000 ease-in-out origin-left",
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
