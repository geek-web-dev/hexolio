"use client";
import { experience } from "@/config/experience";
import TimelineCard from "../common/experience/TimelineCard";
import SectionTitle from "../common/global/SectionTitle";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import { BriefcaseBusiness, GraduationCap, LucideIcon } from "lucide-react";
import styles from "@/app/styles.module.css";
import { useState } from "react";
import ArrowLink from "../common/global/ArrowLink";
const { hexagon, centeredAbsolute, showAnimation } = styles;

const History = ({
  resumePart,
  Icon,
}: {
  resumePart: "education" | "working";
  Icon: LucideIcon;
}) => {
  const [showAll, setShowAll] = useState(false);
  const MAX = 3;

  return (
    <>
      <div className="grid gap-8">
        {experience[resumePart].slice(0, MAX).map((item, i) => (
          <TimelineCard key={i} idx={i} resumePart={resumePart} {...item} />
        ))}

        {showAll
          ? experience[resumePart]
              .slice(MAX)
              .map((item, i) => (
                <TimelineCard
                  key={i}
                  idx={i}
                  resumePart={resumePart}
                  projectIdx={i}
                  {...item}
                />
              ))
          : ""}
      </div>
      <Line title={resumePart} Icon={Icon} isShowAll={showAll} />
      <div className="ml-9">
        {experience[resumePart].length > MAX && !showAll ? (
          <ArrowLink
            text={`Show All (+${experience[resumePart].length - MAX})`}
            handler={() => setShowAll(true)}
            className="mx-auto mt-12 text-xl"
          />
        ) : null}
      </div>
    </>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <MaxWidthWrapper>
        <SectionTitle
          title="experience"
          description="My education & working history"
        />
        <div className="mt-24 mb-32 grid lg:grid-cols-2 gap-4">
          <div className="relative">
            <History resumePart="education" Icon={GraduationCap} />
          </div>

          <div className="relative lg:mt-0 mt-32">
            <History resumePart="working" Icon={BriefcaseBusiness} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Line = ({
  title,
  Icon,
  isShowAll,
}: {
  title: string;
  Icon: LucideIcon;
  isShowAll: boolean;
}) => {
  return (
    <>
      <div className="h-[0.5px] w-full bg-[--line-color] absolute left-0 -top-10 z-0" />
      <div
        className={cn(
          "w-px bg-[--line-color] absolute -top-12 left-4 z-10 h-[calc(100%+96px)]"
        )}
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
        {isShowAll ? (
          <div
            className={cn(
              hexagon,
              showAnimation,
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
        ) : null}
      </div>
    </>
  );
};

export default Experience;
