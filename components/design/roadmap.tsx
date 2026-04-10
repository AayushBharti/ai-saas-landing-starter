import Image from "next/image";
import { images } from "@/constants";

export const Gradient = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute top-73 -left-121.5 w-226.5 opacity-60 mix-blend-color-dodge"
  >
    <div className="absolute top-1/2 left-1/2 size-[58.85rem] -translate-x-3/4 -translate-y-1/2">
      <Image
        alt=""
        className="w-full"
        height={942}
        src={images.gradient}
        style={{ height: "auto" }}
        width={942}
      />
    </div>
  </div>
);
