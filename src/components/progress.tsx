import React from "react";
import { cn } from "@/utils/cn";

interface ProgressProps {
  value: number;
  maxValue: number;
  className?: string;
  color?: string;
  size?: "small" | "default" | "large";
}

const Progress: React.FC<ProgressProps> = ({
  value,
  maxValue,
  className = "",
  color = "",
  size = "default",
  ...rest
}) => {
  const percentage = (value / maxValue) * 100;
  const progressStyle: React.CSSProperties = {
    width: `${percentage}%`,
    // backgroundColor: color || "#4CAF50", // Default color is green
  };

  const containerClass = cn(
    "relative h-4 rounded-lg bg-blue-20 w-full overflow-hidden",
    size === "small" && "h-2",
    size === "large" && "h-6",
    className
  );

  return (
    <div className={containerClass} {...rest}>
      <div
        className="absolute top-0 left-0 bottom-0 bg-primary rounded-lg"
        style={progressStyle}
      />
    </div>
  );
};

export { Progress };
