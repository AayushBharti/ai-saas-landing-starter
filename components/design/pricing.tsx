import Image from "next/image";
import { lines } from "@/public/assets/index";

export const LeftLine = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute top-1/2 right-full hidden h-44.25 w-370 -translate-y-1/2 lg:block"
  >
    <Image alt="" className="w-full" height={177} src={lines} width={1480} />
  </div>
);

export const RightLine = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute top-1/2 left-full hidden h-44.25 w-370 -translate-y-1/2 -scale-x-100 lg:block"
  >
    <Image alt="" className="w-full" height={177} src={lines} width={1480} />
  </div>
);
