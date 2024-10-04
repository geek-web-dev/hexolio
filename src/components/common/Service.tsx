import { cn } from "@/lib/utils";
import { bgMap, colorMap, ColorType, pureBgMap } from "@/shared";
import { LucideIcon } from "lucide-react";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import styles from "../../app/styles.module.css";
const { iconWrapParent, iconWrap, icon, face, front, back, hexagon } = styles;

type ServiceProps = {
  service: string;
  description: string;
  Icon: LucideIcon;
  image: string;
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
        "rounded-sm w-16 h-16 flex items-center justify-center relative",
        isFrontFace ? "bg-[--background]" : pureBgMap[color],
        isFrontFace ? colorMap[color] : "text-white"
      )}
    >
      <Icon size={32} strokeWidth={1.25} className="text-inherit" />
    </div>
  );
};

const Service = ({
  service,
  description,
  Icon,
  image,
  color,
  price,
}: ServiceProps) => {
  const { ref: serviceRef, inView: animate } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      className={cn(
        "group bg-[--pure-background] rounded-sm border border-[--line-color] hover:shadow-md duration-500 dark:shadow-white/5 transition-shadow overflow-hidden z-0",
        iconWrapParent
      )}
      ref={serviceRef}
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={service}
          fill
          sizes=""
          loading="lazy"
          className={cn(
            animate ? "opacity-100" : "opacity-0",
            "transition-opacity duration-1000",
            "object-cover"
          )}
        />
        <div className="absolute left-0 top-0 bg-black/15 size-full group-hover:bg-black/0 duration-1000" />
        <div
          className={cn(
            "size-16 absolute right-4 -bottom-8 duration-2000 ease-in-out z-[1]",
            animate ? "translate-x-0" : "translate-x-[100%]",
            iconWrap
          )}
        >
          <div className={cn("relative", icon)}>
            <div className={cn(front, hexagon, face)}>
              <ServiceIcon Icon={Icon} color={color} isFrontFace={true} />
            </div>
            <div className={cn(back, hexagon, face)}>
              <ServiceIcon Icon={Icon} color={color} isFrontFace={false} />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "absolute bottom-[-2px] left-[50%] translate-x-[-50%] h-[2px] duration-1000 z-[0] w-[0%] group-hover:w-[100%]",
            pureBgMap[color]
          )}
        />
      </div>

      <div className="p-4">
        <div className="font-[500] space-y-1">
          <span className={cn("tracking-widest", colorMap[color])}>
            ${price}/hour
          </span>
          <h2 className="text-lg text-[--pure-text] uppercase font-[600]">
            {service}
          </h2>
        </div>
        <p className="mt-4 text">{description}</p>
      </div>
    </div>
  );
};

export default Service;
