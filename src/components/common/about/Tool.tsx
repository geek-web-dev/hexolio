import { cn } from "@/lib/utils";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Tool = ({
  name,
  image,
  duration,
}: {
  name: string;
  image: string;
  duration: number;
}) => {
  const { ref: toolRef, inView: animate } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="flex flex-col items-center justify-center" ref={toolRef}>
      <div className="bg-[#f3f3f3]/75 dark:bg-black/50 w-full py-4 flex justify-center items-center rounded-t-lg">
        <Image
          src={image}
          width={38}
          height={38}
          alt={name}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 70vw"
          style={{ transitionDuration: `${duration}ms` }}
          className={animate ? "opacity-100" : "opacity-0"}
        />
      </div>
      <span
        className={cn(
          "transition-transform",
          animate ? "translate-y-0" : "-translate-y-1",
          "bg-[#f3f3f3]/60 dark:bg-black/35 text-[--sub-text] font-[500] text-[12px] uppercase mt-1 tracking-widest px-2 text-center w-full py-1 rounded-b-lg"
        )}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {name}
      </span>
    </div>
  );
};

export default Tool;
