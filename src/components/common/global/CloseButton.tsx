"use client";
import styles from "@/app/styles.module.css";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import { ColorType, pureBgMap } from "@/shared";
import { X } from "lucide-react";
const { showAnimation } = styles;

const CloseButton = ({
  color,
  handler,
  className,
}: {
  color?: ColorType;
  handler: () => void;
  className?: string;
}) => {
  const { cursorDefault, cursorFocus } = useCursorContext();
  return (
    <div
      className={cn(
        color ? pureBgMap[color] : "bg-[--main]",
        "fixed size-8 z-[42] flex items-center justify-center text-white",
        showAnimation,
        "hover:!opacity-75",
        className
      )}
      onClick={handler}
      onMouseOver={cursorFocus}
      onMouseLeave={cursorDefault}
    >
      <X />
    </div>
  );
};

export default CloseButton;
