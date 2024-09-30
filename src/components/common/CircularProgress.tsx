import { cn } from "../../lib/utils";
import { bgHexMap, colorHexMap, colorMap, ColorType } from "../../shared";

type CircularProgressProps = {
  title: string;
  value: number;
  color: ColorType;
  size?: number;
  pathWidth?: number;
};

const CircularProgress = ({
  title,
  value,
  color,
  size = 122,
  pathWidth = 8,
}: CircularProgressProps) => {
  if (size > 140) size = 140;
  else if (size < 100) size = 100;

  if (value > 100) value = 100;
  else if (value < 0) value = 0;

  return (
    <div>
      <div
        className="rounded-full flex justify-center items-center duration-1000 transition-colors"
        style={{
          background: `conic-gradient(${colorHexMap[color]} ${
            value * 3.6
          }deg, ${bgHexMap[color]} 0deg)`,
          width: size,
          height: size,
        }}
      >
        <div
          className={cn("absolute rounded-full ", "bg-[--pure-background]")}
          style={{
            width: `calc(${size}px - ${pathWidth}px)`,
            height: `calc(${size}px - ${pathWidth}px)`,
          }}
        />

        <p className="relative m-0 text-center font-semibold flex flex-col gap-1">
          <span className="text-[--paragraph] text-sm">{title}</span>
          <span className={cn("percentage text-md", colorMap[color])}>
            {value}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;
