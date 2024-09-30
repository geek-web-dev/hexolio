import { colorMap, ColorType } from "@/shared";
import { LucideIcon } from "lucide-react";

type ContactInfoProp = {
  title: string;
  Icon: LucideIcon;
  info: string;
  color: ColorType;
};

const ContactInfo = ({ title, Icon, info, color }: ContactInfoProp) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center space-y-4 bg-[--pure-background] rounded-sm border border-[--line-color]">
      <Icon size={38} strokeWidth={0.75} className={colorMap[color]} />
      <h3 className="tracking-wider dark:text-white">{title}</h3>
      <p>{info}</p>
    </div>
  );
};

export default ContactInfo;
