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
      <div className="bg-[#f3f3f3]/75 dark:bg-black/25 w-full py-4 flex justify-center items-center rounded-lg">
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
      <span className="text-[--pure-text] text-[11px] uppercase mt-2 tracking-widest font-[600] opacity-75 px-2 text-center">
        {name}
      </span>
    </div>
  );
};

export default Tool;
