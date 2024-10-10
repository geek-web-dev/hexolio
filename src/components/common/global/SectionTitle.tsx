import { cn } from "@/lib/utils";
import styles from "@/app/styles.module.css";
const { hexagon } = styles;
import { useInView } from "react-intersection-observer";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { ref: titleRef, inView: animate } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      className={cn(
        "mb-12 select-none duration-1000",
        animate ? "opacity-25" : "opacity-0"
      )}
      ref={titleRef}
    >
      <h1
        className={cn(
          "relative text-[--pure-text] text-5xl first-letter:text-7xl uppercase tracking-[4px] font-[900] "
        )}
      >
        {title}
        <span className="absolute -left-2 top-[22px] bg-[--background] w-14 h-2 -rotate-45" />
      </h1>
      <div className="flex gap-4 items-center ml-1">
        <span className={cn(hexagon, "size-3 bg-[--pure-text] block")} />
        <p className="text-xl text-[--pure-text]">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
