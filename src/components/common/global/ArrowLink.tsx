import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import { colorMap, ColorType, pureBgMap } from "@/shared";
import { MoveLeft } from "lucide-react";

const ArrowLink = ({
  color,
  text,
  handler,
  className,
}: {
  color?: ColorType;
  text: string;
  handler?: () => void;
  className?: string;
}) => {
  const { cursorDefault, cursorFocus } = useCursorContext();
  return (
    <span
      className={cn(
        "flex items-center group relative w-fit",
        color
          ? colorMap[color]
          : "hover:!text-[--main] text-[#222] dark:text-[#ccc] duration-300",
        className
      )}
      onClick={handler}
      onMouseEnter={cursorFocus}
      onMouseLeave={cursorDefault}
    >
      {text}
      <MoveLeft
        size={16}
        className="translate-x-8 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 duration-300"
      />
      <span
        className={cn(
          "absolute bottom-0 left-0 w-[50%] group-hover:w-[80%] h-px opacity-40 duration-300",
          color
            ? pureBgMap[color]
            : "bg-[#222] dark:bg-[#ccc] group-hover:!bg-[--main]"
        )}
      />
    </span>
  );
};

export default ArrowLink;
