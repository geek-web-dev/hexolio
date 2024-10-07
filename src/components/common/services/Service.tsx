import { cn } from "@/lib/utils";
import { bg75Map, colorMap, ColorType, pureBgMap } from "@/shared";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import styles from "@/app/styles.module.css";
import { useServiceContext } from "@/context/ServiceContext";
import ArrowLink from "../global/ArrowLink";
import { useCursorContext } from "@/context/CursorContext";
import ImageOverlay from "../global/ImageOverlay";
const { iconWrapParent, iconWrap, icon, face, back, hexagon } = styles;

type ServiceProps = {
  service: string;
  description: string;
  Icon: LucideIcon;
  image: string;
  color: ColorType;
  price: number;
  idx: number;
};

const Service = ({
  service,
  description,
  Icon,
  image,
  color,
  price,
  idx,
}: ServiceProps) => {
  const { ref: serviceRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  const { cursorDefault, cursorFocus } = useCursorContext();

  const { setIsServiceOpen, setServiceIdx, setIsGetService } =
    useServiceContext();

  const openServiceHandler = () => {
    setServiceIdx(idx);
    setIsServiceOpen(true);
  };

  return (
    <div
      className={cn(
        "bg-[--pure-background] rounded-sm border border-[--line-color] hover:shadow-md duration-1000 dark:shadow-none transition-shadow overflow-hidden z-0",
        iconWrapParent
      )}
      ref={serviceRef}
    >
      <div className="group">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={service}
            fill
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 75vw, 90vw"
            className="object-cover"
          />

          <ImageOverlay />

          <div
            className={cn(
              "size-14 absolute right-0 -bottom-7 duration-1000 ease-in-out z-10",
              animate ? "-translate-x-4" : "translate-x-[100%]",
              iconWrap
            )}
          >
            <div className={icon}>
              <div className={cn(hexagon, face)}>
                <ServiceIcon Icon={Icon} color={color} isFrontFace={true} />
              </div>
              <Link
                to="contact"
                className={cn(
                  back,
                  hexagon,
                  face,
                  "hover:opacity-75 duration-300"
                )}
                onMouseEnter={cursorFocus}
                onMouseLeave={cursorDefault}
                title={`Get ${service} service`}
                onClick={() => {
                  setServiceIdx(idx);
                  setIsGetService(true);
                }}
              >
                <ServiceIcon Icon={Icon} color={color} isFrontFace={false} />
              </Link>
            </div>
          </div>
          <div
            className={cn(
              "absolute left-0 bottom-4 w-[90px] h-[36px] duration-1000 ease-in-out z-10",
              animate ? "translate-x-4" : "translate-x-[-100%]",
              iconWrap
            )}
          >
            <div className={icon}>
              <div className={face}>
                <ServicePrice price={price} isFrontFace={true} color={color} />
              </div>
              <div className={cn(back, face)}>
                <ServicePrice price={price} isFrontFace={false} color={color} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h2 className="font-[500] text-lg text-[--pure-text] uppercase">
            {service}
          </h2>
          <p className="text line-clamp-1">{description}</p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <ArrowLink
          color={color}
          text="Know more"
          handler={openServiceHandler}
        />
      </div>
    </div>
  );
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
        "rounded-sm size-14 flex items-center justify-center",
        isFrontFace ? "bg-[--background]" : pureBgMap[color],
        isFrontFace ? colorMap[color] : "text-white"
      )}
    >
      <Icon size={28} strokeWidth={1} className="text-inherit" />
    </div>
  );
};

const ServicePrice = ({
  price,
  isFrontFace,
  color,
}: {
  price: number;
  isFrontFace: boolean;
  color: ColorType;
}) => {
  return (
    <div
      className={cn(
        "font-[500] tracking-widest w-[90px] h-[36px] flex items-center justify-center text-sm",
        isFrontFace ? "bg-white/95 dark:bg-black/75" : bg75Map[color],
        isFrontFace ? colorMap[color] : "text-white"
      )}
    >
      ${price}/hour
    </div>
  );
};

export default Service;
