import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const AboutCard = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative bg-[--pure-background] p-4 shadow-sm dark:shadow-none hover:shadow-md rounded-lg duration-1000 transition-shadow",
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-[--pure-text] uppercase tracking-wide duration-1000 transition-transform">
        {title}
      </h1>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default AboutCard;
