"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const Tool = ({
  name,
  image,
  duration,
}: {
  name: string;
  image: string;
  duration: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center border border-[--line-color] rounded-sm p-4">
      <Image
        src={image}
        width={38}
        height={38}
        alt={name}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={cn(
          isLoading ? "opacity-0" : "opacity-100",
          "transition-opacity"
        )}
        style={{ transitionDuration: `${duration}ms` }}
      />
      <span className="text-[--pure-text] text-[11px] uppercase mt-2 tracking-widest font-[600] opacity-75 bg-[--pure-background] px-2 rounded-sm text-center">
        {name}
      </span>
    </div>
  );
};

export default Tool;
