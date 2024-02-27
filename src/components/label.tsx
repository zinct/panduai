"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "utils/cn";

const labelVariants = cva(
  "font-medium tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  HTMLLabelElement, // typeof for label element
  React.ComponentPropsWithoutRef<"label"> &
    VariantProps<typeof labelVariants> & {
      isMarked?: boolean;
    }
>((props, ref) => {
  const { className, isMarked = false, ...rest } = props;

  return (
    <div>
      <label ref={ref} className={cn(labelVariants(), className)} {...rest} />
      {isMarked ? (<span className="text-red-500"> *</span>) : null}
    </div>
  );
});

Label.displayName = "Label";

export { Label };
