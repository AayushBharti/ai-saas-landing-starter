"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "@/components/svg/plus-svg";

export const Gradient = () => (
  <>
    <div className="relative z-1 mx-2.5 h-6 rounded-b-[1.25rem] bg-n-11 shadow-xl lg:mx-8 lg:h-6" />
    <div className="relative z-1 mx-6 h-6 rounded-b-[1.25rem] bg-n-11/70 shadow-xl lg:mx-20 lg:h-6" />
  </>
);

export const BottomLine = () => (
  <>
    <div className="pointer-events-none absolute inset-x-10 top-[55.25rem] hidden h-0.25 bg-n-6 xl:block" />

    <PlusSvg className="pointer-events-none absolute top-[54.9375rem] left-[2.1875rem] z-2 hidden xl:block" />

    <PlusSvg className="pointer-events-none absolute top-[54.9375rem] right-[2.1875rem] z-2 hidden xl:block" />
  </>
);

const Rings = () => (
  <>
    <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[65.875rem] rounded-full border border-n-2/10" />
    <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[51.375rem] rounded-full border border-n-2/10" />
    <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[36.125rem] rounded-full border border-n-2/10" />
    <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[23.125rem] rounded-full border border-n-2/10" />
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
    <div className="-translate-x-1/2 absolute top-[-42.375rem] left-1/2 aspect-square w-[78rem] rounded-full border border-n-2/5 md:top-[-38.5rem] xl:top-[-32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax parallaxContainerRef={parallaxRef} strength={0.07}>
        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[46deg]">
          <div
            className={`-ml-1 -mt-36 size-2 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[-56deg]">
          <div
            className={`-ml-1 -mt-32 size-4 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[54deg]">
          <div
            className={`-ml-1 mt-[12.9rem] hidden size-4 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out xl:block ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[-65deg]">
          <div
            className={`-ml-1.5 mt-52 size-3 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[-85deg]">
          <div
            className={`-ml-3 -mt-3 size-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[70deg]">
          <div
            className={`-ml-3 -mt-3 size-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
