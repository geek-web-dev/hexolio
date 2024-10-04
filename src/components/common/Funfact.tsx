import { cn } from "@/lib/utils";
import { bgMap, colorMap, ColorType } from "@/shared";
import { LucideIcon } from "lucide-react";
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
        <Icon strokeWidth={1} size={28} className={colorMap[color]} />
        <div
          className={cn(
            "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] size-10 rounded-full blur-md",
            bgMap[color]
          )}
        />
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
