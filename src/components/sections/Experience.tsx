import { experience } from "@/config/experience";
import TimelineCard from "../common/TimelineCard";
import SectionTitle from "../common/SectionTitle";

import styles from "../../app/styles.module.css";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
const { hexagon } = styles;

const Line = ({ title }: { title: string }) => {
  return (
    <>
      <div className="w-px h-[calc(100%+96px)] bg-[--main] absolute -top-12 left-4 z-[1]">
        <div
          className={cn(
            "w-4 h-4 bg-[--main] absolute top-0 left-[50%] translate-x-[-50%]"
          )}
        >
          <h1 className="font-[800] absolute text-[--main] top-[50%] translate-y-[-50%] left-8 uppercase text-2xl bg-[--background] z-10 px-2">
            {title}
          </h1>
        </div>
        <div
          className={cn(
            hexagon,
            "w-4 h-4 bg-[--main] absolute bottom-0 left-[50%] translate-x-[-50%]"
          )}
        />
      </div>
      <div className="w-full h-[0.5px] bg-[--main] absolute left-0 -top-10 z-[0]" />
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
        <div className="mt-20 mb-32 grid lg:grid-cols-2 gap-4">
          <div className="relative">
            <div className="grid gap-4">
              {experience.education.map((item, i) => (
                <TimelineCard key={i} {...item} />
              ))}
            </div>
            <Line title="education" />
          </div>
          <div className="relative lg:mt-0 mt-32">
            <div className="grid gap-4">
              {experience.working.map((item, i) => (
                <TimelineCard key={i} {...item} />
              ))}
            </div>
            <Line title="working" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
