import { cn } from "@/lib/utils";
import styles from "../../app/styles.module.css";
const { hexagon } = styles;

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-4xl mb-8 flex items-center flex-wrap gap-4">
      <h1 className="text-[--pure-text] uppercase tracking-wider font-[900] first-letter:text-4xl opacity-75 first-letter:text-[--main]">
        {title}
      </h1>
      <span className={cn(hexagon, "w-4 h-4 bg-[--main] block")} />
      <p className="text-[--paragraph] opacity-50 capitalize font-bold">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
