import Image from "next/image";
import { images } from "@/constants";

export const Gradient = () => (
  <div className="pointer-events-none absolute top-[18.25rem] left-[-30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">
    <div className="-translate-x-3/4 -translate-y-1/2 absolute top-1/2 left-1/2 size-[58.85rem]">
      <Image
        alt="Gradient"
        className="w-full"
        height={942}
        src={images.gradient}
        width={942}
      />
    </div>
  </div>
);
