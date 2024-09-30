import { bgMap, colorMap, ColorType, pureBgMap } from "../../shared";
import { cn } from "../../lib/utils";

type LinearProgressProps = {
  title: string;
  value: number;
  color: ColorType;
  pathWidth?: number;
};

const LinearProgress1 = ({
  title,
  value,
  color,
  pathWidth = 6,
}: LinearProgressProps) => {
  if (value > 100) value = 100;
  else if (value < 0) value = 0;

  return (
    <div>
      <div className="flex justify-between items-center text-sm mb-3 font-semibold">
        <h3 className="text-[--paragraph]">{title}</h3>
        <span className={colorMap[color]}>{value}%</span>
      </div>
      <div
        className={cn("w-full rounded-e-sm relative", bgMap[color])}
        style={{ height: pathWidth }}
      >
        <div
          className={cn("absolute h-full rounded-e-sm", pureBgMap[color])}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default LinearProgress1;
