import { cn } from "@/lib/utils";
import { bgHoverMap, colorMap, ColorType, pureBgMap } from "@/shared";
import { LucideIcon, Plus } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import styles from "@/app/styles.module.css";
import { useServiceContext } from "@/context/ServiceContext";
import ArrowLink from "../global/ArrowLink";
import { useCursorContext } from "@/context/CursorContext";
import ImageOverlay from "../global/ImageOverlay";
const {
  iconWrapParent,
  iconWrap,
  icon,
  goToLeft,
  goToRight,
  face,
  back,
  hexagon,
  showAnimation,
  centeredAbsolute,
} = styles;

type ServiceProps = {
  service: string;
  description: string;
  Icon: LucideIcon;
  image: string;
  color: ColorType;
  price: number;
  idx: number;
  doShowAnimation?: boolean;
};

const Service = ({
  service,
  description,
  Icon,
  image,
  color,
  price,
  idx,
  doShowAnimation = false,
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
        doShowAnimation ? showAnimation : "",
        "bg-[--pure-background] hover:shadow-md duration-1000 dark:shadow-none transition-shadow overflow-hidden z-0 rounded-lg",
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
            sizes="50vw"
            className="object-cover"
          />

          <ImageOverlay />

          <Link
            to="contact"
            className={cn(
              centeredAbsolute,
              "size-12 bg-white rounded-full opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center shadow-md",
              bgHoverMap[color],
              "hover:text-white"
            )}
            title={`Get ${service} service`}
            onClick={() => {
              setServiceIdx(idx);
              setIsGetService(true);
            }}
            onMouseEnter={cursorFocus}
            onMouseLeave={cursorDefault}
          >
            <Plus size={24} strokeWidth={1.5} />
          </Link>

          <div
            className={cn(
              "size-14 absolute right-0 -bottom-7 duration-1000 ease-in-out z-10",
              animate ? "-translate-x-2" : "translate-x-[100%]",
              iconWrap
            )}
          >
            <div className={cn(icon, goToLeft)}>
              <div className={cn(hexagon, face)}>
                <ServiceIcon Icon={Icon} color={color} isFrontFace={true} />
              </div>
              <div className={cn(back, hexagon, face)}>
                <ServiceIcon Icon={Icon} color={color} isFrontFace={false} />
              </div>
            </div>
          </div>
          <div
            className={cn(
              "absolute left-0 top-2 w-[90px] h-[36px] duration-1000 ease-in-out z-10",
              animate ? "translate-x-2" : "translate-x-[-100%]",
              iconWrap
            )}
          >
            <div className={cn(icon, goToRight)}>
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
        "size-14 flex items-center justify-center",
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
        "font-[500] tracking-widest w-[90px] h-[32px] flex items-center justify-center text-sm rounded-lg",
        isFrontFace ? "bg-[--background]" : pureBgMap[color],
        isFrontFace ? colorMap[color] : "text-white"
      )}
    >
      ${price}/hour
    </div>
  );
};

export default Service;
