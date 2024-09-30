import { clients } from "@/config/about";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

import styles from "../../app/styles.module.css";
const { slider } = styles;

const Clients = () => {
  return (
    <div
      className={cn("space-y-4", slider)}
      style={{ animationDuration: `${clients.length * 6}s` }}
    >
      {clients.map((item, i) => (
        <div
          key={i}
          className="space-y-2 rounded-sm p-4 bg-[--pure-background]"
        >
          <p className="italic">
            {"“"}
            {item.comment}
            {"”"}
          </p>
          <div className="flex items-center gap-4">
            <h4 className="text-[--pure-text] capitalize font-[500]">
              {item.name}
            </h4>
            <div className="h-px w-8 bg-[--paragraph] rounded-sm opacity-15" />
            <StarRating averageRate={item.rate} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
