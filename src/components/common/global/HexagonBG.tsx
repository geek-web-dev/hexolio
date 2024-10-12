import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import styles from "@/app/styles.module.css";
import { Sparkle } from "lucide-react";
const { hexagon } = styles;

export const SmallHexagon = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        hexagon,
        className,
        "bg-white/[0.0125] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      )}
    >
      {children}
    </div>
  );
};

export const Hexagon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        hexagon,
        className,
        "size-60 bg-[--pure-background] absolute opacity-50 group"
      )}
    >
      <SmallHexagon className="size-[180px]">
        <SmallHexagon className="size-[120px]">
          <SmallHexagon className="size-[60px]" />
        </SmallHexagon>
      </SmallHexagon>
    </div>
  );
};

const HexagonBG = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "fixed left-0 top-0 w-full h-full z-0")}>
      {/* level 1 */}
      <Hexagon className="right-[359px] top-[-182px] !opacity-65 !bg-[--main]" />
      <Hexagon className="right-[119px] top-[-182px]" />
      <Hexagon className="right-[-121px] top-[-182px]" />

      {/* level 2 */}
      <Hexagon className="right-[479px] top-[-2px] !opacity-65 !bg-[--main]" />
      <Hexagon className="right-[239px] top-[-2px]" />
      <Hexagon className="right-[-1px] top-[-2px]" />

      {/* level 3 */}
      <Hexagon className="right-[599px] top-[178px] !opacity-85 !bg-[--main]" />
      <Hexagon className="right-[359px] top-[178px]" />
      <Hexagon className="right-[119px] top-[178px]" />
      <Hexagon className="right-[-121px] top-[178px]" />

      {/* level 4 */}
      <Hexagon className="right-[719px] top-[358px] !opacity-65 !bg-[--main]" />
      <Hexagon className="right-[479px] top-[358px]" />
      <Hexagon className="right-[239px] top-[358px]" />
      <Hexagon className="right-[-1px] top-[358px]" />

      {/* level 5 */}
      <Hexagon className="right-[839px] top-[538px] !opacity-65 !bg-[--main]" />
      <Hexagon className="right-[599px] top-[538px]" />
      <Hexagon className="right-[359px] top-[538px] " />
      <Hexagon className="right-[119px] top-[538px]" />
      <Hexagon className="right-[-121px] top-[538px] !bg-[--main]" />

      {/* level 6 */}
      <Hexagon className="right-[959px] top-[718px] !opacity-60 !bg-[--main]" />
      <Hexagon className="right-[719px] top-[718px]" />
      <Hexagon className="right-[479px] top-[718px]" />
      <Hexagon className="right-[239px] top-[718px]" />
      <Hexagon className="right-[-1px] top-[718px] !bg-[--main]" />

      {/* Sparkles */}
      <Sparkle className="absolute text-[--main] bottom-8 left-8" size={12} />
      <Sparkle className="absolute text-[--main] bottom-14 left-20" size={12} />
      <Sparkle className="absolute text-[--main] bottom-8 left-16" size={4} />
      <Sparkle className="absolute text-[--main] bottom-8 left-28" size={10} />
      <Sparkle className="absolute text-[--main] bottom-2 left-16" size={8} />
      <Sparkle className="absolute text-[--main] bottom-1 left-8" size={6} />
      <Sparkle className="absolute text-[--main] bottom-1 left-2" size={4} />
      <Sparkle className="absolute text-[--main] bottom-4 left-28" size={6} />
      <Sparkle className="absolute text-[--main] bottom-6 left-1" size={6} />
      <Sparkle className="absolute text-[--main] bottom-12 left-2" size={2} />
      <Sparkle className="absolute text-[--main] bottom-1 left-36" size={4} />
    </div>
  );
};

export default HexagonBG;
