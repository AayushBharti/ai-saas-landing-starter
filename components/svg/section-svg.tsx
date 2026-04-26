import { cn } from "@/lib/utils";
import PlusSvg from "./plus-svg";

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => (
  <>
    <PlusSvg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-1.25 left-6.25 hidden lg:block xl:left-8.75",
        crossesOffset
      )}
    />

    <PlusSvg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-1.25 right-6.25 hidden lg:block xl:right-8.75",
        crossesOffset
      )}
    />
  </>
);

export default SectionSvg;
