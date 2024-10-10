"use cilent";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import CloseButton from "../global/CloseButton";
import Overlay from "../global/Overlay";
import styles from "@/app/styles.module.css";
import React, { ReactNode } from "react";
import { colorMap, ColorType } from "@/shared";
import { useCursorContext } from "@/context/CursorContext";
const { showAnimation } = styles;

const IndicatorButton = ({
  isLeft,
  handler,
}: {
  isLeft: boolean;
  handler: () => void;
}) => {
  const { cursorDefault, cursorFocus } = useCursorContext();
  return (
    <div
      className={cn(
        showAnimation,
        "fixed size-8 z-40 bg-[--line-color] select-none xl:bottom-[calc(25%-3rem)] bottom-[calc(10%-3rem)] flex justify-center items-center rounded-sm",
        "hover:!opacity-75",
        isLeft
          ? "xl:right-[calc(25%+3rem)] right-[calc(10%+3rem)]"
          : "xl:right-[25%] right-[10%]"
      )}
      onClick={handler}
      onMouseOver={cursorFocus}
      onMouseLeave={cursorDefault}
    >
      {isLeft ? (
        <ChevronLeft className="text-[--pure-text]" />
      ) : (
        <ChevronRight className="text-[--pure-text]" />
      )}
    </div>
  );
};

const ViewCardSlider = ({
  children,
  closeHandler,
  color,
  idx,
  setIdx,
  list,
}: {
  children: ReactNode;
  closeHandler: () => void;
  color?: ColorType;
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>;
  list: any[];
}) => {
  const decrease = () => {
    if (!idx) setIdx(list.length);
    setIdx((p) => p - 1);
  };
  const increase = () => {
    if (idx === list.length - 1) setIdx(0);
    else setIdx((p) => p + 1);
  };

  return (
    <>
      <CloseButton
        className="xl:right-[25%] xl:top-[calc(25%-3rem)] right-[10%] top-[calc(10%-3rem)]"
        color={color}
        handler={closeHandler}
      />

      <Overlay handler={closeHandler} />

      <div
        className={cn(
          "fixed z-[42] bg-[--pure-background] overflow-y-auto overflow-x-hidden  xl:size-[50%] size-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-[--line-color] rounded-lg",
          "scrollbar-thumb-[#333] dark:scrollbar-thumb-[#999] scrollbar-thin scrollbar-track-transparent p-4",
          showAnimation
        )}
      >
        <div className="absolute right-4 top-4 font-semibold text-[--pure-text] bg-[--background] py-0.5 px-2 z-10 rounded-sm">
          <span className={color ? colorMap[color] : "text-[--main]"}>
            {idx + 1}
          </span>
          /{list.length}
        </div>
        {children}
      </div>

      <IndicatorButton isLeft={true} handler={decrease} />
      <IndicatorButton isLeft={false} handler={increase} />
    </>
  );
};

export default ViewCardSlider;
