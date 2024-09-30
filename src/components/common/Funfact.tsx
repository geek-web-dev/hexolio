import { cn } from "@/lib/utils";
import { bgMap, colorMap, ColorType } from "@/shared";
import { LucideIcon } from "lucide-react";

import { SmallHexagon } from "./HexagonBG";
import styles from "../../app/styles.module.css";
const { hexagon } = styles;

const Funfact = ({
  title,
  Icon,
  count,
  color,
}: {
  title: string;
  Icon: LucideIcon;
  count: number;
  color: ColorType;
}) => {
  return (
    <div className="flex items-end">
      <div
        className={cn(
          hexagon,
          "w-14 h-14 flex items-center justify-center rounded-sm text-white relative",
          bgMap[color]
        )}
      >
        <Icon strokeWidth={1} size={32} className={colorMap[color]} />
        <SmallHexagon className="w-12 h-12 bg-white opacity-[0.25]"></SmallHexagon>
      </div>
      <div className="ml-2">
        <span className={cn("text-xl font-[600]", colorMap[color])}>
          {count}
        </span>
        <h3 className="dark:text-[#ddd] capitalize text-nowrap font-[500]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Funfact;
