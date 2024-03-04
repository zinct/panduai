import { cn } from "@/utils/cn";
import React from "react";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
  }
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    const separatorClass = cn(
      "shrink-0 bg-[#DFE8F6]",
      orientation === "horizontal" ? "h-[1.5px] w-full" : "h-full w-[1.5px]",
      className
    );

    return decorative ? (
      <div
        ref={ref}
        className={separatorClass}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    ) : null;
  }
);

export { Separator };
