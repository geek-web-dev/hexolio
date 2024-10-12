import { clients } from "@/config/about";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

import styles from "@/app/styles.module.css";
import { Quote } from "lucide-react";
const { slider } = styles;

const Clients = () => {
  return (
    <div
      className={cn("space-y-4", slider)}
      style={{ animationDuration: `${clients.length * 8}s` }}
    >
      {clients.map((item, i) => (
        <div key={i} className="space-y-2 p-4 bg-[--background] rounded-lg">
          <p className="italic">
            {"“"}
            {item.comment}
            {"”"}
          </p>
          <div className="flex items-center gap-4">
            <h4 className="text-[--sub-text] capitalize font-[500]">
              {item.name}
            </h4>
            <div className="h-px w-8 bg-[--line-color]" />
            <StarRating averageRate={item.rate} />
            <Quote className="ml-auto text-[--line-color]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
