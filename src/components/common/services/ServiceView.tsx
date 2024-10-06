"use cilent";
import { cn } from "@/lib/utils";
import { useServiceContext } from "@/context/ServiceContext";
import { services } from "@/config/services";
import { bg75Map, colorMap, ColorType } from "@/shared";
import ArrowLink from "../global/ArrowLink";
import { Link } from "react-scroll";
import Image from "next/image";
import ViewCardSlider from "../global/ViewCardSlider";

import styles from "@/app/styles.module.css";
const { hexagon } = styles;

const ServiceView = ({ serviceIdx }: { serviceIdx: number }) => {
  const { setIsServiceOpen, setServiceIdx, setIsGetService } =
    useServiceContext();
  const service = services[serviceIdx];
  const color = service.color as ColorType;

  return (
    <ViewCardSlider
      color={color}
      closeHandler={() => setIsServiceOpen(false)}
      idx={serviceIdx}
      setIdx={setServiceIdx}
      list={services}
    >
      <div className="space-y-4">
        <div className="relative size-[108px] flex items-center justify-center border border-[--line-color] z-0">
          <Image
            src={service.image}
            alt={service.service}
            fill
            sizes="33vw"
            className="relative object-cover h-full z-10"
          />
          <div
            className={cn(
              "absolute -right-3 -bottom-3 size-6 z-0",
              bg75Map[color],
              hexagon
            )}
          />
        </div>

        <h1 className="text-3xl font-bold uppercase text-[--pure-text]">
          {service.service}
        </h1>

        <p>{service.description}</p>

        <span className={cn("block", colorMap[color])}>
          ${service.price} / hour
          <span className="text-[--paragraph] ">
            {" "}
            - for {service.service} service
          </span>
        </span>

        <Link
          to="contact"
          className="block font-semibold"
          onClick={() => {
            setIsServiceOpen(false);
            setIsGetService(true);
          }}
        >
          <ArrowLink color={color} text={"Get the service"} />
        </Link>
      </div>

      <div
        className={cn(
          "absolute -left-24 -top-24 size-48 z-[-1]",
          bg75Map[color],
          hexagon
        )}
      />
    </ViewCardSlider>
  );
};

export default ServiceView;
