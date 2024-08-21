import React from "react";
import { cn } from "@/lib/utils";
import SectionSvg from "../svg/section-svg";

type Props = {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: React.ReactNode;
};

const Section = ({ className, id, crosses, crossesOffset, customPaddings, children }: Props) => {
  return (
    <section
      {...(id && { id })}
      className={cn(
        "relative",
        customPaddings || "py-10 lg:py-16 xl:py-20",
        !customPaddings && crosses && "lg:py-32 xl:py-40",
        className
      )}
    >
      {children}

      <div
        className={cn(
          "pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10"
        )}
      />

      {crosses && (
        <>
          <div
            className={cn(
              "hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1",
              "pointer-events-none lg:block xl:left-10 right-10",
              crossesOffset
            )}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;
