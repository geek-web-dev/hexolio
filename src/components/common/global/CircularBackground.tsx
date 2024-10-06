import { cn } from "@/lib/utils";

const CircularBackground = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "size-96 bg-[--main] z-0 rounded-full fixed pointer-events-none blur-[14rem] opacity-25",
        className
      )}
    />
  );
};

export default CircularBackground;
