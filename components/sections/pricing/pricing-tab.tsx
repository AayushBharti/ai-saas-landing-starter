import * as motion from "motion/react-client"
import { cn } from "@/lib/utils"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  discount?: boolean
}

export function Tab({
  text,
  selected,
  setSelected,
  discount = false,
}: TabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative w-fit px-4 py-2 text-sm font-semibold capitalize transition-colors",
        selected ? "text-n-1" : "text-n-3",
        discount && "flex items-center justify-center gap-2.5",
      )}
    >
      <span className="relative z-10">{text}</span>

      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-n-5/80 shadow-sm"
        />
      )}

      {discount && (
        <span
          className={cn(
            "relative z-10 whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium",
            selected ? "bg-n-2 text-n-8" : "bg-n-12 text-n-2",
          )}
        >
          Save 25%
        </span>
      )}
    </button>
  )
}
