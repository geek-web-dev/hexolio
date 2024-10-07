import { cn } from "@/lib/utils";
import styles from "@/app/styles.module.css";
const { hexagon } = styles;

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mb-12 space-y-2 opacity-75">
      <h1 className="text-5xl first-letter:text-6xl text-[--pure-text] uppercase tracking-widest font-[900] first-letter:text-[--main]">
        {title}
      </h1>
      <div className="flex gap-2 items-center ml-1">
        <span className={cn(hexagon, "size-3 bg-[--main] block")} />
        <p className="text-xl">{description}</p>
        <span className={cn(hexagon, "size-3 bg-[--pure-text] block")} />
      </div>
    </div>
  );
};

export default SectionTitle;
