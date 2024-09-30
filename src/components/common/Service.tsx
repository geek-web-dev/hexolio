import { cn } from "@/lib/utils";
import { bg75Map, colorMap, ColorType, pureBgMap } from "@/shared";
import { LucideIcon } from "lucide-react";

import styles from "../../app/styles.module.css";
import { SmallHexagon } from "./HexagonBG";
const { iconWrapParent, iconWrap, icon, face, front, back, hexagon } = styles;

type ServiceProps = {
  service: string;
  description: string;
  Icon: LucideIcon;
  color: ColorType;
  price: number;
};

const ServiceIcon = ({
  color,
  Icon,
  isFrontFace,
}: {
  color: ColorType;
  Icon: LucideIcon;
  isFrontFace: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-sm w-14 h-14 flex items-center justify-center relative",
        isFrontFace ? bg75Map[color] : pureBgMap[color]
      )}
    >
      <Icon size={28} strokeWidth={1.25} className="text-white" />
    </div>
  );
};

const Service = ({
  service,
  description,
  Icon,
  color,
  price,
}: ServiceProps) => {
  return (
    <div
      className={cn(
        "group bg-[--pure-background] p-4 rounded-sm border border-[--line-color] hover:shadow-md duration-500 dark:shadow-white/5 transition-shadow",
        iconWrapParent
      )}
    >
      <div className="flex gap-2 items-end">
        <div className={cn("w-14 h-14", iconWrap)}>
          <div className={cn("relative", icon)}>
            <div className={cn(front, hexagon, face)}>
              <ServiceIcon Icon={Icon} color={color} isFrontFace={true} />
              <SmallHexagon className="w-12 h-12">
                <SmallHexagon className="w-10 h-10"></SmallHexagon>
              </SmallHexagon>
            </div>
            <div className={cn(back, hexagon, face)}>
              <ServiceIcon Icon={Icon} color={color} isFrontFace={false} />
              <SmallHexagon className="w-12 h-12">
                <SmallHexagon className="w-10 h-10"></SmallHexagon>
              </SmallHexagon>
            </div>
          </div>
        </div>
        <div className="font-[500]">
          <span className={cn("tracking-widest", colorMap[color])}>
            ${price}/hour
          </span>
          <h2 className="text-lg text-[--pure-text] uppercase font-[600]">
            {service}
          </h2>
        </div>
      </div>
      <p className="mt-2 text">{description}</p>
    </div>
  );
};

export default Service;
