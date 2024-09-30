import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import styles from "../../app/styles.module.css";
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
        "bg-white/15 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
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
        "w-60 h-60 bg-[--main] absolute opacity-50"
      )}
    >
      <SmallHexagon className="w-[180px] h-[180px]">
        <SmallHexagon className="w-[120px] h-[120px]">
          <SmallHexagon className="w-[60px] h-[60px]">
            <SmallHexagon className="w-[30px] h-[30px]">
              <SmallHexagon className="w-[15px] h-[15px]">
                <SmallHexagon className="w-[7.5px] h-[7.5px]">
                  <SmallHexagon className="w-[3.25px] h-[3.25px]"></SmallHexagon>
                </SmallHexagon>
              </SmallHexagon>
            </SmallHexagon>
          </SmallHexagon>
        </SmallHexagon>
      </SmallHexagon>
    </div>
  );
};

const HexagonBG = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "fixed left-0 top-0 w-full h-full z-0")}>
      {/* level 1 */}
      <Hexagon className="right-[361px] top-[-182px] !opacity-65" />
      <Hexagon className="right-[120px] top-[-182px]" />
      <Hexagon className="right-[-120px] top-[-182px] !opacity-65" />

      {/* level 2 */}
      <Hexagon className="right-[482px] top-[-1px] " />
      <Hexagon className="right-[241px] top-[-1px]" />
      <Hexagon className="right-0 top-[-1px]" />

      {/* level 3 */}
      <Hexagon className="right-[602px] top-[181px] !opacity-65" />
      <Hexagon className="right-[361px] top-[181px]" />
      <Hexagon className="right-[120px] top-[180px] !opacity-65" />
      <Hexagon className="right-[-121px] top-[180px]" />

      {/* level 4 */}
      <Hexagon className="right-[722px] top-[362px] " />
      <Hexagon className="right-[481px] top-[362px]" />
      <Hexagon className="right-[240px] top-[362px]" />
      <Hexagon className="right-[-1px] top-[361px]" />

      {/* level 5 */}
      <Hexagon className="right-[842px] bottom-[-54px] !opacity-65" />
      <Hexagon className="right-[601px] bottom-[-54px]" />
      <Hexagon className="right-[360px] bottom-[-54px] !opacity-65" />
      <Hexagon className="right-[119px] bottom-[-53px]" />
      <Hexagon className="right-[-122px] bottom-[-53px] !opacity-75" />

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
