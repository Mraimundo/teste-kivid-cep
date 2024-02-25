import { IconLoader } from "./icon-loader";

export function Loading() {
  return (
    <div className="absolute inset-0 backdrop-blur-sm flex justify-center items-center z-20">
      <IconLoader className="w-6 h-6 animate-spin" />
    </div>
  );
}
