import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { useCursorContext } from "@/context/CursorContext";
import ToolTip from "./ToolTip";

const PageProgress = () => {
  const [scroll, setScroll] = useState(0);
  const { cursorFocus, cursorDefault } = useCursorContext();

  useEffect(() => {
    const scrollHandler = () => {
      setScroll(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <div
      className="fixed right-2 sm:bottom-4 bottom-16 z-30 cursor-pointer group rounded-full "
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      aria-label="back to home section"
    >
      <div
        className="rounded-full flex justify-center items-center duration-1000 transition-colors size-14"
        style={{
          background: `conic-gradient(var(--main) ${scroll}%, var(--line-color) 0)`,
        }}
      >
        <div
          className={cn("absolute rounded-full bg-[--background] size-[53px]")}
        />
        <div
          className=" rounded-full flex justify-center items-center duration-300 cursor-pointer group"
          onMouseEnter={cursorFocus}
          onMouseLeave={cursorDefault}
        >
          <Home
            size={20}
            className="relative text-[--pure-text]"
            strokeWidth={1.5}
          />
          <ToolTip title="home" />
        </div>
      </div>
    </div>
  );
};

export default PageProgress;
