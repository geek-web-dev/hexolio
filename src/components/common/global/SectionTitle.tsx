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
    <h1
      className={cn(
        "relative md:text-8xl sm:text-6xl text-5xl",
        "mb-24 select-none duration-1000 ease-out text-[--pure-text] font-extrabold text-center uppercase w-fit mx-auto",
        animate
          ? "opacity-100 translate-y-0 scale-y-100"
          : "opacity-0 translate-y-24 scale-y-50"
      )}
      ref={titleRef}
    >
      <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:size-48 sm:size-32 size-24 bg-[--line-color] rounded-full z-[-1] opacity-35" />
      {title}
    </h1>
  );
};

export default SectionTitle;
