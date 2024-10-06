"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Tool = ({
  name,
  image,
  duration,
}: {
  name: string;
  image: string;
  duration: number;
}) => {
  const { ref: toolRef, inView: animate } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      className="flex flex-col items-center justify-center rounded-sm p-4 border border-[--line-color]"
      ref={toolRef}
    >
      <div className="relative">
        <Image
          src={image}
          width={38}
          height={38}
          alt={name}
          loading="lazy"
          className={cn(
            animate ? "opacity-100" : "opacity-0",
            "transition-opacity"
          )}
          style={{ transitionDuration: `${duration}ms` }}
        />
      </div>
      <span className="text-[--pure-text] text-[11px] uppercase mt-2 tracking-widest font-[600] opacity-75 px-2 rounded-sm text-center">
        {name}
      </span>
    </div>
  );
};

export default Tool;
