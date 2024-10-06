"use client";
import { Button } from "../../ui/button";
import { LucideIcon } from "lucide-react";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";

const HeroButton = ({
  text,
  Icon,
  className,
  variant = "regular",
}: {
  text: string;
  Icon: LucideIcon;
  className?: string;
  variant?: "regular" | "outlined";
}) => {
  const { cursorFocus, cursorDefault } = useCursorContext();
  return (
    <Button
      className={cn(
        className,
        "group w-32 relative overflow-hidden",
        variant === "regular"
          ? "bg-[--main] text-white"
          : "border-[2px] border-[--main] text-[--main]"
      )}
      title={text}
      onMouseEnter={cursorFocus}
      onMouseLeave={cursorDefault}
    >
      <span className="text-inherit transition-all duration-500 group-hover:-translate-x-32 select-none">
        {text}
      </span>
      <Icon
        strokeWidth={1.25}
        size={20}
        className="text-inherit duration-500 absolute opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0"
      />
    </Button>
  );
};

export default HeroButton;
