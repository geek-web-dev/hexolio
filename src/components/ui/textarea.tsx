import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border-[--line-color] focus-visible:border-[--main] placeholder:text-[--paragraph] outline-none rounded-lg",
          "flex min-h-[80px] w-full border px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{ transition: "border 300ms" }}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
