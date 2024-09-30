"use client";
import { Button } from "../ui/button";
import { FileSearch, Mail } from "lucide-react";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";

const HeroButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const { cursorFocus, cursorDefault } = useCursorContext();
  return (
    <Button
      className={cn(
        className,
        "group w-32 relative overflow-hidden text-white"
      )}
      title={text}
      onMouseEnter={cursorFocus}
      onMouseLeave={cursorDefault}
    >
      <span className="text-white transition-all duration-500 group-hover:-translate-x-32 select-none">
        {text}
      </span>
      <FileSearch
        strokeWidth={1.25}
        color="white"
        size={20}
        className="duration-500 absolute opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0"
      />
    </Button>
  );
};

export default HeroButton;
