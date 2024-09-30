"use client";
import { cn } from "@/lib/utils";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CursorContextProps = {
  cursorDefault: () => void;
  cursorFocus: () => void;
};

export const CursorContext = createContext({} as CursorContextProps);

export const useCursorContext = () => useContext(CursorContext);

export const CursorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariants, setCursorVariants] = useState<"default" | "focus">(
    "default"
  );

  const cursorFocus = () => {
    setCursorVariants("focus");
  };
  const cursorDefault = () => {
    setCursorVariants("default");
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const variants = {
    default: {
      width: 38,
      height: 38,
      transform: `translate(${cursorPosition.x}px,${cursorPosition.y}px)`,
    },
    focus: {
      width: 45,
      height: 45,
      transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
    },
  };

  return (
    <CursorContext.Provider value={{ cursorDefault, cursorFocus }}>
      <div
        style={variants[cursorVariants]}
        className={cn(
          "customCursor fixed top-0 left-0 pointer-events-none z-[99] duration-300",
          "bg-gradient-to-br from-black via-[--main] to-[--main] dark:from-white dark:via-[--main] dark:to-[--main]"
        )}
      />
      {children}
    </CursorContext.Provider>
  );
};
