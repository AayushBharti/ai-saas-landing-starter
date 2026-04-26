"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "@/components/svg/plus-svg";
import { cn } from "@/lib/utils";

export const Gradient = () => (
  <div aria-hidden="true">
    <div className="relative z-1 mx-2.5 h-6 rounded-b-[1.25rem] bg-n-11 shadow-xl lg:mx-8 lg:h-6" />
    <div className="relative z-1 mx-6 h-6 rounded-b-[1.25rem] bg-n-11/70 shadow-xl lg:mx-20 lg:h-6" />
  </div>
);

export const BottomLine = () => (
  <div aria-hidden="true">
    <div className="pointer-events-none absolute inset-x-10 top-221 hidden h-0.25 bg-n-6 xl:block" />

    <PlusSvg className="pointer-events-none absolute top-219.75 left-8.75 z-2 hidden xl:block" />

    <PlusSvg className="pointer-events-none absolute top-219.75 right-8.75 z-2 hidden xl:block" />
  </div>
);

const Rings = () => (
  <>
    <div className="absolute top-1/2 left-1/2 aspect-square w-263.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
    <div className="absolute top-1/2 left-1/2 aspect-square w-205.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
    <div className="absolute top-1/2 left-1/2 aspect-square w-144.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
    <div className="absolute top-1/2 left-1/2 aspect-square w-92.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
  </>
);

export const BackgroundCircles = ({
  parallaxRef,
}: {
  parallaxRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute -top-169.5 left-1/2 aspect-square w-312 -translate-x-1/2 rounded-full border border-n-2/5 md:-top-154 xl:-top-128"
    >
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax parallaxContainerRef={parallaxRef} strength={0.07}>
        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-46">
          <div
            className={cn(
              "-mt-36 -ml-1 size-2 rounded-full bg-linear-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[-56deg]">
          <div
            className={cn(
              "-mt-32 -ml-1 size-4 rounded-full bg-linear-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-54">
          <div
            className={cn(
              "mt-[12.9rem] -ml-1 hidden size-4 rounded-full bg-linear-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out xl:block",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[-65deg]">
          <div
            className={cn(
              "mt-52 -ml-1.5 size-3 rounded-full bg-linear-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[-85deg]">
          <div
            className={cn(
              "-mt-3 -ml-3 size-6 rounded-full bg-linear-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-70">
          <div
            className={cn(
              "-mt-3 -ml-3 size-6 rounded-full bg-linear-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
