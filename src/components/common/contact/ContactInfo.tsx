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
    <div className="flex items-center gap-4">
      <div
        className={cn(
          hexagon,
          "size-16 flex justify-center items-center relative bg-[--pure-background]"
        )}
      >
        <Icon size={32} strokeWidth={0.75} className={colorMap[color]} />
        <div
          className={cn(
            "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] size-10 rounded-full blur-lg",
            bgMap[color]
          )}
        />
      </div>

      <div className="flex flex-col justify-center gap-1">
        <h3 className="tracking-wider text-[--sub-text]">{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
