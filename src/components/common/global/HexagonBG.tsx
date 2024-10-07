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
        "bg-white/5 group-hover:bg-white/10 duration-1000 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
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
        "size-60 bg-[--main] absolute opacity-50 group hover:opacity-50 duration-1000"
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
      <Hexagon className="right-[361px] top-[-182px] !opacity-60" />
      <Hexagon className="right-[120px] top-[-182px]" />
      <Hexagon className="right-[-120px] top-[-182px] !opacity-65" />

      {/* level 2 */}
      <Hexagon className="right-[482px] top-[-1px] !opacity-65" />
      <Hexagon className="right-[241px] top-[-1px]" />
      <Hexagon className="right-0 top-[-1px]" />

      {/* level 3 */}
      <Hexagon className="right-[602px] top-[180px] !opacity-85" />
      <Hexagon className="right-[361px] top-[180px]" />
      <Hexagon className="right-[120px] top-[180px] !opacity-65" />
      <Hexagon className="right-[-121px] top-[180px]" />

      {/* level 4 */}
      <Hexagon className="right-[722px] top-[361px] !opacity-65" />
      <Hexagon className="right-[481px] top-[361px]" />
      <Hexagon className="right-[240px] top-[361px]" />
      <Hexagon className="right-[-1px] top-[361px]" />

      {/* level 5 */}
      <Hexagon className="right-[842px] top-[542px] !opacity-60" />
      <Hexagon className="right-[601px] top-[542px]" />
      <Hexagon className="right-[360px] top-[542px] !opacity-65" />
      <Hexagon className="right-[119px] top-[542px]" />
      <Hexagon className="right-[-122px] top-[542px] !opacity-75" />

      {/* level 6 */}
      <Hexagon className="right-[962px] top-[723px]" />
      <Hexagon className="right-[722px] top-[723px]" />
      <Hexagon className="right-[481px] top-[723px]" />
      <Hexagon className="right-[240px] top-[723px]" />
      <Hexagon className="right-[-1px] top-[723px]" />

      {/* Sparkles */}
      <Sparkle className="absolute text-[--main] bottom-8 left-8" size={12} />
      <Sparkle className="absolute text-[--main] bottom-16 left-16" size={18} />
      <Sparkle className="absolute text-[--main] bottom-8 left-16" size={4} />
      <Sparkle className="absolute text-[--main] bottom-8 left-28" size={10} />
      <Sparkle className="absolute text-[--main] bottom-2 left-16" size={8} />
      <Sparkle className="absolute text-[--main] bottom-1 left-8" size={6} />
      <Sparkle className="absolute text-[--main] bottom-1 left-2" size={4} />
      <Sparkle className="absolute text-[--main] bottom-1 left-36" size={4} />
      <Sparkle className="absolute text-[--main] bottom-60 left-28" size={6} />
    </div>
  );
};

export default HexagonBG;
