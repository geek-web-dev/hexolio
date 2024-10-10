import { cn } from "@/lib/utils";
import styles from "@/app/styles.module.css";
const { dotAvilability } = styles;

const HireAvailability = ({
  isAvailable,
  className,
}: {
  isAvailable: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex items-center gap-2 text-[--paragraph]", className)}
    >
      <div
        className={cn(
          "size-2 relative rounded-full",
          isAvailable ? "bg-[#7d7]" : "bg-red-500"
        )}
      >
        <div
          className={cn(
            isAvailable ? dotAvilability : "",
            "absolute left-0 top-0 right-0 bottom-0 opacity-100 rounded-full bg-inherit"
          )}
        />
      </div>
      {isAvailable ? "Available for hire" : "Not available for hire now"}
    </div>
  );
};

export default HireAvailability;
