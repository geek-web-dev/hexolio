import { bgMap, colorMap, ColorType } from "@/shared";
import { LucideIcon } from "lucide-react";

import styles from "@/app/styles.module.css";
import { cn } from "@/lib/utils";
const { hexagon } = styles;

type ContactInfoProp = {
  title: string;
  Icon: LucideIcon;
  info: string;
  color: ColorType;
};

const ContactInfo = ({ title, Icon, info, color }: ContactInfoProp) => {
  return (
    <div className="relative p-4 flex flex-col items-center justify-center bg-[--pure-background] space-y-4 shadow-sm hover:shadow-md duration-1000 transition-shadow rounded-lg">
      <div
        className={cn(
          hexagon,
          bgMap[color],
          "size-20 flex justify-center items-center relative"
        )}
      >
        <Icon size={40} strokeWidth={0.5} className={colorMap[color]} />
        <div
          className={cn(
            "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] size-10 rounded-full blur-md",
            bgMap[color]
          )}
        />
      </div>

      <h3 className="tracking-wider dark:text-white">{title}</h3>
      <p>{info}</p>
    </div>
  );
};

export default ContactInfo;
