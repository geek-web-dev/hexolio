import { cn } from "@/lib/utils";
import styles from "@/app/styles.module.css";
import { useInView } from "react-intersection-observer";
import ArrowLink from "../global/ArrowLink";
import { useResumeContext } from "@/context/ResumeContext";
const { hexagon } = styles;

type TimelineCardProps = {
  idx: number;
  resumePart: "working" | "education";
  year: {
    from: string;
    to: string;
  };
  at: string;
  event: string;
  description: string;
};

const TimelineCard = ({
  idx,
  resumePart,
  year: { from, to },
  at,
  event,
  description,
}: TimelineCardProps) => {
  const { ref: timelineCardRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  const { setIsResumeOpen, setResumePart, setResumeIdx } = useResumeContext();

  const openResumeHandler = () => {
    setResumeIdx(idx);
    setResumePart(resumePart);
    setIsResumeOpen(true);
  };

  return (
    <div
      className={cn(
        "relative w-[calc(100%-36px)] ml-auto z-20 mb-4",
        animate ? "translate-y-0" : "translate-y-4"
      )}
      ref={timelineCardRef}
      style={{ transition: "opacity 1000ms, transform 1000ms" }}
    >
      <div
        className={cn(
          "absolute -left-[26px] top-1.5 size-3 bg-[--paragraph]",
          hexagon
        )}
      />

      <div className="relative bg-[--paragraph] rounded-r-sm w-fit px-2 py-0.5 text-sm text-white dark:text-black font-[500] flex items-center gap-2">
        <span>{from}</span>
        <div className="w-4 bg-white/50 dark:bg-black/50 h-px relative" />
        <span>{to}</span>
        <div className="absolute -left-2 top-[50%] translate-y-[-50%] border-[4px] border-transparent border-r-[--paragraph]" />
      </div>

      <div className="bg-[--pure-background] p-4 mt-2 shadow-sm rounded-sm">
        <div className=" space-y-2">
          <h1 className="text-[--pure-text] text-xl">
            <span className="font-[500]">{event}</span> -{" "}
            <span className="text-[--main]">{at}</span>
          </h1>
          <p className="line-clamp-2">{description}</p>
        </div>

        <ArrowLink
          text="Show More"
          className="mt-4"
          handler={openResumeHandler}
        />
      </div>
    </div>
  );
};

export default TimelineCard;
