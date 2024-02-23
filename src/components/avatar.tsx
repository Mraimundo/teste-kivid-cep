import { ImgHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={cn(
        hasBorder
          ? "w-[calc(2rem_+_12px)] h-[calc(2rem_+_12px)] border-app_green_300 rounded-lg border-2 border-solid"
          : "w-8 h-8 rounded-lg"
      )}
      {...props}
    />
  );
}
