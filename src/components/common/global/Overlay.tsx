import styles from "@/app/styles.module.css";
import { cn } from "@/lib/utils";
const { showAnimation } = styles;

const Overlay = ({
  handler,
  className,
}: {
  handler: () => void;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "fixed bg-black/75 dark:bg-black/25 backdrop-blur-sm left-0 top-0 size-full z-40",
        showAnimation,
        className
      )}
      onClick={handler}
    />
  );
};

export default Overlay;
