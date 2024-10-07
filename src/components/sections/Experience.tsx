"use client";
import { experience } from "@/config/experience";
import TimelineCard from "../common/experience/TimelineCard";
import SectionTitle from "../common/global/SectionTitle";

import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import { BriefcaseBusiness, GraduationCap, LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import styles from "@/app/styles.module.css";
const { hexagon, centeredAbsolute } = styles;

const Line = ({ title, Icon }: { title: string; Icon: LucideIcon }) => {
  const { ref: lineRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div
        className={cn(
          "w-px bg-[#ddd] dark:bg-[#222] absolute -top-12 left-4 z-10 h-[calc(100%+96px)]"
        )}
        ref={lineRef}
      >
        <div
          className={cn(
            "size-8 bg-[--paragraph] absolute -top-2 left-[50%] translate-x-[-50%] rounded-full"
          )}
        >
          <Icon
            className={cn(centeredAbsolute, "text-[--pure-background]")}
            size={20}
            strokeWidth={1.25}
          />
          <div className="absolute top-[50%] translate-y-[-50%] left-16  z-10 px-4  bg-[--background]">
            <h1 className="font-[900] text-[--paragraph] opacity-75 uppercase text-2xl tracking-widest">
              {title}
            </h1>
          </div>
        </div>
        <div
          className={cn(
            hexagon,
            "size-8 bg-[--paragraph] absolute bottom-0 left-[50%] translate-x-[-50%]"
          )}
        >
          {" "}
          <Icon
            className={cn(centeredAbsolute, "text-[--pure-background]")}
            size={20}
            strokeWidth={1.25}
          />
        </div>
      </div>
      <div
        className={cn(
          "h-[0.5px] w-full bg-[--paragraph] absolute left-0 -top-10 z-0 opacity-25 duration-1000 origin-left",
          animate ? "scale-x-100" : "scale-x-0"
        )}
      />
    </>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <MaxWidthWrapper>
        <SectionTitle
          title="experience"
          description="my education & working history"
        />
        <div className="mt-24 mb-32 grid lg:grid-cols-2 gap-4">
          <div className="relative">
            <div className="grid gap-4">
              {experience.education.map((item, i) => (
                <TimelineCard
                  key={i}
                  idx={i}
                  resumePart={"education"}
                  {...item}
                />
              ))}
            </div>
            <Line title="education" Icon={GraduationCap} />
          </div>
          <div className="relative lg:mt-0 mt-32">
            <div className="grid gap-4">
              {experience.working.map((item, i) => (
                <TimelineCard
                  key={i}
                  idx={i}
                  resumePart={"working"}
                  {...item}
                />
              ))}
            </div>
            <Line title="working" Icon={BriefcaseBusiness} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
