import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

type TabProps = {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  discount?: boolean;
};

export function Tab({
  text,
  selected,
  setSelected,
  discount = false,
}: TabProps) {
  return (
    <button
      className={cn(
        "relative w-fit px-4 py-2 font-semibold text-sm capitalize transition-colors",
        selected ? "text-n-1" : "text-n-3",
        !!discount && "flex items-center justify-center gap-2.5"
      )}
      onClick={() => setSelected(text)}
    >
      <span className="relative z-10">{text}</span>

      {!!selected && (
        <motion.span
          className="absolute inset-0 z-0 rounded-full bg-n-5/80 shadow-sm"
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
        />
      )}

      {!!discount && (
        <span
          className={cn(
            "relative z-10 whitespace-nowrap rounded-full px-2 py-1 font-medium text-xs",
            selected ? "bg-n-2 text-n-8" : "bg-n-12 text-n-2"
          )}
        >
          Save 25%
        </span>
      )}
    </button>
  );
}
