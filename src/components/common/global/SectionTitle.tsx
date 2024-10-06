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
    <div className="mb-12 flex items-center flex-wrap gap-4">
      <h1 className="text-4xl text-[--pure-text] uppercase tracking-wider font-[900] first-letter:text-4xl opacity-75 first-letter:text-[--main]">
        {title}
      </h1>
      <span
        className={cn(hexagon, "size-3 bg-[--pure-text] block opacity-25")}
      />
      <span className={cn(hexagon, "size-3 bg-[--main] block opacity-50")} />
      <span
        className={cn(hexagon, "size-3 bg-[--pure-text] block opacity-25")}
      />
      <p className="text-2xl text-[--paragraph] opacity-50 capitalize font-bold">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
